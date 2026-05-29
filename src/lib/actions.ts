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
  const to = process.env.CONTACT_TO_EMAIL ?? "info@vdmforis.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Foris <noreply@vdmforis.com>";

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
    const subject = `Nieuwe aanvraag van ${parsed.data.name}`;
    const lines = [
      `Naam: ${parsed.data.name}`,
      `E-mail: ${parsed.data.email}`,
      "",
      parsed.data.message
        ? `Bericht:\n${parsed.data.message}`
        : "(geen bericht meegestuurd)",
    ];
    await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject,
      text: lines.join("\n"),
    });
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
