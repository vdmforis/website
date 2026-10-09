"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Vul je naam in").max(120),
  email: z.string().email("Geen geldig e-mailadres"),
  message: z.string().max(2000).optional(),
});

/** User-facing texts for the homepage contact form (NL default, EN, ES). */
type ContactLocale = "nl" | "en" | "es";
const contactTexts = {
  nl: {
    check: "Controleer je gegevens en probeer opnieuw.",
    name: "Vul je naam in",
    email: "Geen geldig e-mailadres",
    success: "Bedankt! We nemen binnen een werkdag contact met je op.",
    failed:
      "Er ging iets mis bij het versturen. Mail ons gerust direct op info@vdmforis.com.",
  },
  en: {
    check: "Please check your details and try again.",
    name: "Please enter your name",
    email: "Please enter a valid email address",
    success: "Thank you! We'll get back to you within one working day.",
    failed:
      "Something went wrong while sending. Feel free to email us directly at info@vdmforis.com.",
  },
  es: {
    check: "Revisa tus datos e inténtalo de nuevo.",
    name: "Escribe tu nombre",
    email: "Introduce un correo electrónico válido",
    success: "¡Gracias! Te responderemos en un día laborable.",
    failed:
      "Algo ha fallado al enviar. Escríbenos directamente a info@vdmforis.com.",
  },
} as const;

/** Autoresponder for EN/ES visitors. The Dutch text below stays as it was. */
function foreignAutoReply(locale: "en" | "es", name: string) {
  if (locale === "en") {
    return {
      subject: "We've received your message · Foris",
      lines: [
        `Hi ${name},`,
        "",
        "Thanks for your message. We've received it and I normally reply within one working day.",
        "",
        "In a hurry, or just a quick question? You can also reach me on WhatsApp: +34 611 365 294",
        "",
        "Speak soon,",
        "Dennis",
        "",
        "Van der Meulen Foris B.V., www.vdmforis.com",
      ],
    };
  }
  return {
    subject: "Hemos recibido tu mensaje · Foris",
    lines: [
      `Hola, ${name}:`,
      "",
      "Gracias por tu mensaje. Lo hemos recibido y normalmente respondo en un día laborable.",
      "",
      "¿Tienes prisa o es una pregunta rápida? También puedes escribirme por WhatsApp: +34 611 365 294",
      "",
      "Un saludo,",
      "Dennis",
      "",
      "Van der Meulen Foris B.V., www.vdmforis.com",
    ],
  };
}

export type ContactState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const rawLocale = formData.get("locale");
  const locale: ContactLocale =
    rawLocale === "en" || rawLocale === "es" ? rawLocale : "nl";
  const tx = contactTexts[locale];

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message") ?? undefined,
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString();
      if (key && !fieldErrors[key]) {
        fieldErrors[key] =
          locale === "nl"
            ? issue.message
            : key === "name"
              ? tx.name
              : key === "email"
                ? tx.email
                : tx.check;
      }
    }
    return {
      status: "error",
      message: tx.check,
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  // Use || (not ??) so an empty-string env var also falls back to the default.
  const to = process.env.CONTACT_TO_EMAIL || "info@vdmforis.com";
  const from =
    process.env.CONTACT_FROM_EMAIL || "Foris <noreply@vdmforis.com>";

  if (!apiKey) {
    // In development / preview without secrets: log and pretend success so the form is testable.
    console.warn("[contact] RESEND_API_KEY not set — skipping send", parsed.data);
    return {
      status: "success",
      message: tx.success,
    };
  }

  try {
    const resend = new Resend(apiKey);

    // 1) Notify owner of the new lead
    const ownerLines = [
      `Naam: ${parsed.data.name}`,
      `E-mail: ${parsed.data.email}`,
      "",
      parsed.data.message
        ? `Bericht:\n${parsed.data.message}`
        : "(geen bericht meegestuurd)",
    ];
    const ownerSend = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: `${locale === "nl" ? "" : `[${locale.toUpperCase()}] `}Nieuwe aanvraag van ${parsed.data.name}`,
      text: ownerLines.join("\n"),
    });
    if (ownerSend.error) {
      console.error("[contact] Resend rejected owner mail", ownerSend.error);
      throw new Error(
        `Resend error (owner): ${ownerSend.error.name} — ${ownerSend.error.message}`,
      );
    }

    // 2) Autoresponder to the requester — sets expectations + gives next steps
    const autoLines = [
      `Hoi ${parsed.data.name},`,
      "",
      "Bedankt voor je bericht. Het is bij ons binnengekomen en ik reageer normaal gesproken binnen één werkdag.",
      "",
      "Geen tijd om te wachten of een snelle vraag? Twee directe lijntjes:",
      "",
      "  • WhatsApp: +34 611 365 294",
      "  • Plan een kennismaking (gratis, 30 min): https://vdmforis.com/kennismaking",
      "",
      "Tot snel,",
      "Dennis",
      "",
      "Van der Meulen Foris B.V., vdmforis.com",
    ];
    const foreign =
      locale === "nl" ? null : foreignAutoReply(locale, parsed.data.name);
    const autoSend = await resend.emails.send({
      from,
      to: parsed.data.email,
      replyTo: to,
      subject: foreign?.subject ?? "We hebben je bericht ontvangen · Foris",
      text: (foreign?.lines ?? autoLines).join("\n"),
    });
    if (autoSend.error) {
      console.error("[contact] Resend rejected autoresponder", autoSend.error);
      // Don't throw — owner notification already succeeded
    }
  } catch (err) {
    console.error("[contact] Resend send failed", err);
    return {
      status: "error",
      message: tx.failed,
    };
  }

  return {
    status: "success",
    message: tx.success,
  };
}

const offerteSchema = z.object({
  dienst: z.string().min(1, "Kies een dienst").max(80),
  name: z.string().min(2, "Vul je naam in").max(120),
  email: z.string().email("Geen geldig e-mailadres"),
  phone: z.string().max(40).optional(),
  message: z.string().max(2000).optional(),
});

export async function submitOfferte(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = offerteSchema.safeParse({
    dienst: formData.get("dienst"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    message: formData.get("message") || undefined,
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString();
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Controleer je gegevens en probeer opnieuw.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "info@vdmforis.com";
  const from =
    process.env.CONTACT_FROM_EMAIL || "Foris <noreply@vdmforis.com>";

  const successMessage =
    "Aanvraag ontvangen! Je hoort binnen één werkdag van ons — met een offerte op maat of eerst een paar korte vragen.";

  if (!apiKey) {
    console.warn("[offerte] RESEND_API_KEY not set — skipping send", parsed.data);
    return { status: "success", message: successMessage };
  }

  try {
    const resend = new Resend(apiKey);

    const ownerLines = [
      `Dienst: ${parsed.data.dienst}`,
      `Naam: ${parsed.data.name}`,
      `E-mail: ${parsed.data.email}`,
      `Telefoon: ${parsed.data.phone ?? "(niet opgegeven)"}`,
      "",
      parsed.data.message
        ? `Context:\n${parsed.data.message}`
        : "(geen context meegestuurd)",
    ];
    const ownerSend = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: `Offerte-aanvraag: ${parsed.data.dienst} — ${parsed.data.name}`,
      text: ownerLines.join("\n"),
    });
    if (ownerSend.error) {
      console.error("[offerte] Resend rejected owner mail", ownerSend.error);
      throw new Error(
        `Resend error (owner): ${ownerSend.error.name} — ${ownerSend.error.message}`,
      );
    }

    const autoLines = [
      `Hoi ${parsed.data.name},`,
      "",
      `Bedankt voor je offerte-aanvraag voor "${parsed.data.dienst}".`,
      "",
      "Je hoort binnen één werkdag van ons — met een offerte op maat, of eerst een paar korte vragen als we iets moeten verduidelijken.",
      "",
      "Sneller schakelen? WhatsApp: +34 611 365 294",
      "",
      "Tot snel,",
      "Dennis",
      "",
      "Van der Meulen Foris B.V. — vdmforis.com",
    ];
    const autoSend = await resend.emails.send({
      from,
      to: parsed.data.email,
      replyTo: to,
      subject: "Offerte-aanvraag ontvangen — Foris",
      text: autoLines.join("\n"),
    });
    if (autoSend.error) {
      console.error("[offerte] Resend rejected autoresponder", autoSend.error);
    }
  } catch (err) {
    console.error("[offerte] Resend send failed", err);
    return {
      status: "error",
      message:
        "Er ging iets mis bij het versturen. Mail ons gerust direct op info@vdmforis.com.",
    };
  }

  return { status: "success", message: successMessage };
}

const kennismakingSchema = z.object({
  name: z.string().min(2, "Vul je naam in").max(120),
  email: z.string().email("Geen geldig e-mailadres"),
  phone: z.string().max(40).optional(),
  preference: z.string().max(60).optional(),
  message: z.string().max(2000).optional(),
});

export async function submitKennismaking(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = kennismakingSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    preference: formData.get("preference") || undefined,
    message: formData.get("message") || undefined,
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString();
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Controleer je gegevens en probeer opnieuw.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "info@vdmforis.com";
  const from =
    process.env.CONTACT_FROM_EMAIL || "Foris <noreply@vdmforis.com>";

  const successMessage =
    "Aanvraag ontvangen! We stellen binnen één werkdag per e-mail een concreet tijdstip voor.";

  if (!apiKey) {
    console.warn(
      "[kennismaking] RESEND_API_KEY not set — skipping send",
      parsed.data,
    );
    return { status: "success", message: successMessage };
  }

  try {
    const resend = new Resend(apiKey);

    const ownerLines = [
      `Naam: ${parsed.data.name}`,
      `E-mail: ${parsed.data.email}`,
      `Telefoon: ${parsed.data.phone ?? "(niet opgegeven)"}`,
      `Voorkeursmoment: ${parsed.data.preference ?? "(geen voorkeur)"}`,
      "",
      parsed.data.message
        ? `Context:\n${parsed.data.message}`
        : "(geen context meegestuurd)",
    ];
    const ownerSend = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: `Kennismaking-aanvraag van ${parsed.data.name}`,
      text: ownerLines.join("\n"),
    });
    if (ownerSend.error) {
      console.error(
        "[kennismaking] Resend rejected owner mail",
        ownerSend.error,
      );
      throw new Error(
        `Resend error (owner): ${ownerSend.error.name} — ${ownerSend.error.message}`,
      );
    }

    const autoLines = [
      `Hoi ${parsed.data.name},`,
      "",
      "Bedankt voor je aanvraag voor een kennismakingsgesprek. Binnen één werkdag stellen we je per e-mail een concreet tijdstip voor" +
        (parsed.data.preference
          ? ` — we houden rekening met je voorkeur (${parsed.data.preference.toLowerCase()}).`
          : "."),
      "",
      "Het gesprek duurt 30 minuten, is gratis en verplicht je tot niets.",
      "",
      "Sneller schakelen? WhatsApp: +34 611 365 294",
      "",
      "Tot snel,",
      "Dennis",
      "",
      "Van der Meulen Foris B.V. — vdmforis.com",
    ];
    const autoSend = await resend.emails.send({
      from,
      to: parsed.data.email,
      replyTo: to,
      subject: "Kennismaking aangevraagd — we stellen snel een tijd voor",
      text: autoLines.join("\n"),
    });
    if (autoSend.error) {
      console.error(
        "[kennismaking] Resend rejected autoresponder",
        autoSend.error,
      );
    }
  } catch (err) {
    console.error("[kennismaking] Resend send failed", err);
    return {
      status: "error",
      message:
        "Er ging iets mis bij het versturen. Mail ons gerust direct op info@vdmforis.com.",
    };
  }

  return { status: "success", message: successMessage };
}
