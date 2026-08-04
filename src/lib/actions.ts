"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Vul je naam in").max(120),
  email: z.string().email("Geen geldig e-mailadres"),
  message: z.string().max(2000).optional(),
});

export type ContactState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message") ?? undefined,
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
  // Use || (not ??) so an empty-string env var also falls back to the default.
  const to = process.env.CONTACT_TO_EMAIL || "info@vdmforis.com";
  const from =
    process.env.CONTACT_FROM_EMAIL || "Foris <noreply@vdmforis.com>";

  if (!apiKey) {
    // In development / preview without secrets: log and pretend success so the form is testable.
    console.warn("[contact] RESEND_API_KEY not set — skipping send", parsed.data);
    return {
      status: "success",
      message: "Bedankt! We nemen binnen een werkdag contact met je op.",
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
      subject: `Nieuwe aanvraag van ${parsed.data.name}`,
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
      "  • WhatsApp: +31 6 14 96 77 04",
      "  • Plan een kennismaking (gratis, 30 min): https://vdmforis.com/kennismaking",
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
      subject: "We hebben je bericht ontvangen — Foris",
      text: autoLines.join("\n"),
    });
    if (autoSend.error) {
      console.error("[contact] Resend rejected autoresponder", autoSend.error);
      // Don't throw — owner notification already succeeded
    }
  } catch (err) {
    console.error("[contact] Resend send failed", err);
    return {
      status: "error",
      message:
        "Er ging iets mis bij het versturen. Mail ons gerust direct op info@vdmforis.com.",
    };
  }

  return {
    status: "success",
    message: "Bedankt! We nemen binnen een werkdag contact met je op.",
  };
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
      "Sneller schakelen? WhatsApp: +31 6 14 96 77 04",
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
