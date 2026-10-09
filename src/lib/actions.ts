"use server";

import { Resend } from "resend";
import { z } from "zod";
import {
  actionTexts,
  dienstLabels,
  formLocale,
  preferenceLabels,
  type DienstId,
  type PreferenceId,
} from "@/i18n/forms";

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
        "In a hurry, or just a quick question? Two direct lines:",
        "",
        "  • WhatsApp: +34 611 365 294",
        "  • Book an introductory call (free, 30 min): https://www.vdmforis.com/en/kennismaking",
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
      "¿Tienes prisa o es una pregunta rápida? Dos vías directas:",
      "",
      "  • WhatsApp: +34 611 365 294",
      "  • Reserva una llamada de presentación (gratis, 30 min): https://www.vdmforis.com/es/kennismaking",
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
  dienst: z.string().min(1).max(80),
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(40).optional(),
  message: z.string().max(2000).optional(),
});

/** Field errors from zod issues, in the visitor's language. */
function localizedFieldErrors(
  issues: z.ZodIssue[],
  tx: (typeof actionTexts)[keyof typeof actionTexts],
): Record<string, string> {
  const fieldErrors: Record<string, string> = {};
  for (const issue of issues) {
    const key = issue.path[0]?.toString();
    if (!key || fieldErrors[key]) continue;
    fieldErrors[key] =
      key === "name"
        ? tx.name
        : key === "email"
          ? tx.email
          : key === "dienst"
            ? tx.dienst
            : tx.check;
  }
  return fieldErrors;
}

/** "[EN] " / "[ES] " in front of the owner subject for non-Dutch visitors. */
function ownerPrefix(locale: ContactLocale): string {
  return locale === "nl" ? "" : `[${locale.toUpperCase()}] `;
}

function signature(locale: ContactLocale): string[] {
  const closing = { nl: "Tot snel,", en: "Speak soon,", es: "Un saludo," }[locale];
  return [closing, "Dennis", "", "Van der Meulen Foris B.V. · vdmforis.com"];
}

export async function submitOfferte(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const locale = formLocale(formData.get("locale"));
  const tx = actionTexts[locale];

  const parsed = offerteSchema.safeParse({
    dienst: formData.get("dienst"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    message: formData.get("message") || undefined,
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: tx.check,
      fieldErrors: localizedFieldErrors(parsed.error.issues, tx),
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "info@vdmforis.com";
  const from =
    process.env.CONTACT_FROM_EMAIL || "Foris <noreply@vdmforis.com>";

  // The form sends a stable id; Dennis gets the Dutch label, the visitor their own.
  const dienstId = parsed.data.dienst as DienstId;
  const dienstNl = dienstLabels.nl[dienstId] ?? parsed.data.dienst;
  const dienstVisitor = dienstLabels[locale][dienstId] ?? parsed.data.dienst;
  const successMessage = tx.offerteSuccess;

  if (!apiKey) {
    console.warn("[offerte] RESEND_API_KEY not set, skipping send", parsed.data);
    return { status: "success", message: successMessage };
  }

  try {
    const resend = new Resend(apiKey);

    const ownerLines = [
      `Dienst: ${dienstNl}`,
      `Naam: ${parsed.data.name}`,
      `E-mail: ${parsed.data.email}`,
      `Telefoon: ${parsed.data.phone ?? "(niet opgegeven)"}`,
      `Taal: ${locale.toUpperCase()}`,
      "",
      parsed.data.message
        ? `Context:\n${parsed.data.message}`
        : "(geen context meegestuurd)",
    ];
    const ownerSend = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: `${ownerPrefix(locale)}Offerte-aanvraag: ${dienstNl} · ${parsed.data.name}`,
      text: ownerLines.join("\n"),
    });
    if (ownerSend.error) {
      console.error("[offerte] Resend rejected owner mail", ownerSend.error);
      throw new Error(
        `Resend error (owner): ${ownerSend.error.name}: ${ownerSend.error.message}`,
      );
    }

    const auto = {
      nl: {
        subject: "Offerte-aanvraag ontvangen · Foris",
        lines: [
          `Hoi ${parsed.data.name},`,
          "",
          `Bedankt voor je offerte-aanvraag voor "${dienstVisitor}".`,
          "",
          "Je hoort binnen één werkdag van ons, met een offerte op maat, of eerst een paar korte vragen als we iets moeten verduidelijken.",
          "",
          "Sneller schakelen? WhatsApp: +34 611 365 294",
          "",
        ],
      },
      en: {
        subject: "Quote request received · Foris",
        lines: [
          `Hi ${parsed.data.name},`,
          "",
          `Thanks for your quote request for "${dienstVisitor}".`,
          "",
          "You'll hear from us within one working day, with a tailored quote, or first a few short questions if we need to clarify something.",
          "",
          "Want to move faster? WhatsApp: +34 611 365 294",
          "",
        ],
      },
      es: {
        subject: "Hemos recibido tu solicitud de presupuesto · Foris",
        lines: [
          `Hola, ${parsed.data.name}:`,
          "",
          `Gracias por tu solicitud de presupuesto para "${dienstVisitor}".`,
          "",
          "Te responderemos en un día laborable, con un presupuesto a medida o, si necesitamos aclarar algo, antes con un par de preguntas breves.",
          "",
          "¿Prefieres ir más rápido? WhatsApp: +34 611 365 294",
          "",
        ],
      },
    }[locale];
    const autoSend = await resend.emails.send({
      from,
      to: parsed.data.email,
      replyTo: to,
      subject: auto.subject,
      text: [...auto.lines, ...signature(locale)].join("\n"),
    });
    if (autoSend.error) {
      console.error("[offerte] Resend rejected autoresponder", autoSend.error);
    }
  } catch (err) {
    console.error("[offerte] Resend send failed", err);
    return { status: "error", message: tx.failed };
  }

  return { status: "success", message: successMessage };
}

const kennismakingSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(40).optional(),
  preference: z.string().max(60).optional(),
  message: z.string().max(2000).optional(),
});

export async function submitKennismaking(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const locale = formLocale(formData.get("locale"));
  const tx = actionTexts[locale];

  const parsed = kennismakingSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    preference: formData.get("preference") || undefined,
    message: formData.get("message") || undefined,
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: tx.check,
      fieldErrors: localizedFieldErrors(parsed.error.issues, tx),
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "info@vdmforis.com";
  const from =
    process.env.CONTACT_FROM_EMAIL || "Foris <noreply@vdmforis.com>";

  const prefId = parsed.data.preference as PreferenceId | undefined;
  const prefNl = prefId ? (preferenceLabels.nl[prefId] ?? prefId) : undefined;
  const prefVisitor = prefId
    ? (preferenceLabels[locale][prefId] ?? prefId)
    : undefined;
  const successMessage = tx.kennismakingSuccess;

  if (!apiKey) {
    console.warn(
      "[kennismaking] RESEND_API_KEY not set, skipping send",
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
      `Voorkeursmoment: ${prefNl ?? "(geen voorkeur)"}`,
      `Taal: ${locale.toUpperCase()}`,
      "",
      parsed.data.message
        ? `Context:\n${parsed.data.message}`
        : "(geen context meegestuurd)",
    ];
    const ownerSend = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: `${ownerPrefix(locale)}Kennismaking-aanvraag van ${parsed.data.name}`,
      text: ownerLines.join("\n"),
    });
    if (ownerSend.error) {
      console.error(
        "[kennismaking] Resend rejected owner mail",
        ownerSend.error,
      );
      throw new Error(
        `Resend error (owner): ${ownerSend.error.name}: ${ownerSend.error.message}`,
      );
    }

    const auto = {
      nl: {
        subject: "Kennismaking aangevraagd: we stellen snel een tijd voor",
        lines: [
          `Hoi ${parsed.data.name},`,
          "",
          "Bedankt voor je aanvraag voor een kennismakingsgesprek. Binnen één werkdag stellen we je per e-mail een concreet tijdstip voor" +
            (prefVisitor
              ? `, en we houden rekening met je voorkeur (${prefVisitor.toLowerCase()}).`
              : "."),
          "",
          "Het gesprek duurt 30 minuten, is gratis en verplicht je tot niets.",
          "",
          "Sneller schakelen? WhatsApp: +34 611 365 294",
          "",
        ],
      },
      en: {
        subject: "Introductory call requested: we'll suggest a time shortly",
        lines: [
          `Hi ${parsed.data.name},`,
          "",
          "Thanks for requesting an introductory call. Within one working day we'll email you a specific time" +
            (prefVisitor
              ? `, taking your preference into account (${prefVisitor.toLowerCase()}).`
              : "."),
          "",
          "The call takes 30 minutes, is free and puts you under no obligation.",
          "",
          "Want to move faster? WhatsApp: +34 611 365 294",
          "",
        ],
      },
      es: {
        subject: "Llamada solicitada: te propondremos una hora en breve",
        lines: [
          `Hola, ${parsed.data.name}:`,
          "",
          "Gracias por solicitar una llamada de presentación. En un día laborable te propondremos por correo una hora concreta" +
            (prefVisitor
              ? `, teniendo en cuenta tu preferencia (${prefVisitor.toLowerCase()}).`
              : "."),
          "",
          "La llamada dura 30 minutos, es gratis y no te compromete a nada.",
          "",
          "¿Prefieres ir más rápido? WhatsApp: +34 611 365 294",
          "",
        ],
      },
    }[locale];
    const autoSend = await resend.emails.send({
      from,
      to: parsed.data.email,
      replyTo: to,
      subject: auto.subject,
      text: [...auto.lines, ...signature(locale)].join("\n"),
    });
    if (autoSend.error) {
      console.error(
        "[kennismaking] Resend rejected autoresponder",
        autoSend.error,
      );
    }
  } catch (err) {
    console.error("[kennismaking] Resend send failed", err);
    return { status: "error", message: tx.failed };
  }

  return { status: "success", message: successMessage };
}
