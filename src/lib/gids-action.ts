"use server";

import { Resend } from "resend";
import { renderToBuffer } from "@react-pdf/renderer";
import { z } from "zod";
import { ValkuilenPdf } from "@/components/pdf/ValkuilenPdf";

const gidsSchema = z.object({
  name: z.string().min(2, "Vul je naam in").max(120),
  email: z.string().email("Geen geldig e-mailadres"),
  process: z.string().optional(),
});

export type GidsState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

export async function requestGids(
  _prev: GidsState,
  formData: FormData,
): Promise<GidsState> {
  const parsed = gidsSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    process: formData.get("process") ?? undefined,
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
  const ownerTo = process.env.CONTACT_TO_EMAIL ?? "info@vdmforis.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Foris <noreply@vdmforis.com>";

  // Generate the PDF (in-memory buffer)
  let pdfBuffer: Buffer;
  try {
    pdfBuffer = await renderToBuffer(
      ValkuilenPdf({ recipientName: parsed.data.name }),
    );
  } catch (err) {
    console.error("[gids] PDF render failed", err);
    return {
      status: "error",
      message:
        "Er ging iets mis bij het samenstellen van de gids. Probeer het zo nog eens, of mail ons direct op info@vdmforis.com.",
    };
  }

  if (!apiKey) {
    // Dev / preview without secrets — log and return success so the form is testable.
    console.warn("[gids] RESEND_API_KEY not set — skipping send", {
      name: parsed.data.name,
      email: parsed.data.email,
      pdfSize: pdfBuffer.length,
    });
    return {
      status: "success",
      message:
        "Bedankt! De gids is onderweg naar je inbox. (Dev mode: e-mail niet daadwerkelijk verzonden.)",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const pdfBase64 = pdfBuffer.toString("base64");

    // 1) Send the PDF to the requester with a friendly body
    await resend.emails.send({
      from,
      to: parsed.data.email,
      replyTo: ownerTo,
      subject: "Je Foris-gids: de 9 valkuilen bij een huis kopen in Spanje",
      text:
        `Hoi ${parsed.data.name},\n\n` +
        "Bedankt voor je aanvraag. Hierbij de gids — bewaar 'm in je 'Spanje-koop'-map, " +
        "dan kun je er onderweg terug naar grijpen.\n\n" +
        "De gids is opgesteld op basis van ons eigen aankooptraject en drie jaar wonen aan " +
        "de Costa del Azahar. Geen verkooppraatje, gewoon de eerlijke lijst van wat we vooraf " +
        "graag hadden geweten.\n\n" +
        "Heb je vragen over je specifieke situatie? Een kennismakingsgesprek van 30 minuten is " +
        "gratis: https://cal.eu/team/vdmforis/intake\n\n" +
        "Of stuur me een WhatsApp: +31 6 14 96 77 04\n\n" +
        "Veel succes met je traject,\n" +
        "Dennis\n\n" +
        "Van der Meulen Foris B.V. — vdmforis.com",
      attachments: [
        {
          filename: "foris-9-valkuilen.pdf",
          content: pdfBase64,
        },
      ],
    });

    // 2) Notify owner of the new lead
    await resend.emails.send({
      from,
      to: ownerTo,
      replyTo: parsed.data.email,
      subject: `Nieuwe gids-aanvraag: ${parsed.data.name}`,
      text:
        `Nieuwe download van de Foris-gids:\n\n` +
        `Naam: ${parsed.data.name}\n` +
        `E-mail: ${parsed.data.email}\n` +
        `Fase: ${parsed.data.process ?? "(niet opgegeven)"}\n\n` +
        `De gids is naar ze toegestuurd.`,
    });
  } catch (err) {
    console.error("[gids] Resend send failed", err);
    return {
      status: "error",
      message:
        "Er ging iets mis bij het versturen. Probeer het zo nog eens, of mail ons direct op info@vdmforis.com.",
    };
  }

  return {
    status: "success",
    message: "Bedankt! De gids is onderweg naar je inbox. Geen mail binnen 5 minuten? Check je spam.",
  };
}
