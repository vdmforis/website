"use server";

import { Resend } from "resend";
import { renderToBuffer } from "@react-pdf/renderer";
import { z } from "zod";
import { ValkuilenPdf } from "@/components/pdf/ValkuilenPdf";
import { actionTexts, formLocale, processLabels, type ProcessId } from "@/i18n/forms";

const gidsSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
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
  const locale = formLocale(formData.get("locale"));
  const tx = actionTexts[locale];

  const parsed = gidsSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    process: formData.get("process") ?? undefined,
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString();
      if (key && !fieldErrors[key]) {
        fieldErrors[key] = key === "name" ? tx.name : key === "email" ? tx.email : tx.check;
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
  const ownerTo = process.env.CONTACT_TO_EMAIL || "info@vdmforis.com";
  const from =
    process.env.CONTACT_FROM_EMAIL || "Foris <noreply@vdmforis.com>";

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
      message: tx.gidsPdfFailed,
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
      message: tx.gidsDev,
    };
  }

  try {
    const resend = new Resend(apiKey);

    // 1) Send the PDF to the requester with a friendly body
    const mail = gidsMail(locale, parsed.data.name);
    const pdfSend = await resend.emails.send({
      from,
      to: parsed.data.email,
      replyTo: ownerTo,
      subject: mail.subject,
      text: mail.text,
      attachments: [
        {
          filename: "foris-9-valkuilen.pdf",
          content: pdfBuffer,
        },
      ],
    });

    if (pdfSend.error) {
      // Log the full error object as JSON so it survives Vercel log truncation.
      console.error(
        "[gids] Resend rejected PDF mail:",
        JSON.stringify(pdfSend.error),
      );
      console.error("[gids] Resend send config:", JSON.stringify({
        from,
        to: parsed.data.email,
        attachmentSize: pdfBuffer.length,
      }));
      throw new Error(
        `Resend error: ${pdfSend.error.name} — ${pdfSend.error.message}`,
      );
    }
    console.log("[gids] PDF sent, Resend id:", pdfSend.data?.id);

    // 2) Notify owner of the new lead
    const ownerSend = await resend.emails.send({
      from,
      to: ownerTo,
      replyTo: parsed.data.email,
      subject: `${locale === "nl" ? "" : `[${locale.toUpperCase()}] `}Nieuwe gids-aanvraag: ${parsed.data.name}`,
      text:
        `Nieuwe download van de Foris-gids:\n\n` +
        `Naam: ${parsed.data.name}\n` +
        `E-mail: ${parsed.data.email}\n` +
        `Fase: ${
          parsed.data.process
            ? (processLabels.nl[parsed.data.process as ProcessId] ?? parsed.data.process)
            : "(niet opgegeven)"
        }\n` +
        `Taal: ${locale.toUpperCase()}\n\n` +
        `De gids (Nederlandstalig) is naar ze toegestuurd.`,
    });

    if (ownerSend.error) {
      console.error("[gids] Resend rejected owner mail", ownerSend.error);
      // Don't throw — PDF mail to user already succeeded, owner notification is secondary
    }
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("[gids] Resend send failed:", detail);
    return { status: "error", message: tx.gidsFailed };
  }

  return { status: "success", message: tx.gidsSuccess };
}

/** E-mail that carries the PDF. The guide itself is Dutch-only. */
function gidsMail(locale: "nl" | "en" | "es", name: string) {
  if (locale === "en") {
    return {
      subject: "Your Foris guide: the 9 pitfalls of buying a new build in Spain (in Dutch)",
      text:
        `Hi ${name},\n\n` +
        "Thanks for your request. The guide is attached. Please note: the guide is written in Dutch; " +
        "we don't have an English version at the moment.\n\n" +
        "It comes from our own property practice in the Netherlands and Spain. " +
        "No sales pitch, just the nine points where new-build purchases go wrong in practice.\n\n" +
        "Questions about your own situation? A 30-minute introductory call is free: " +
        "https://www.vdmforis.com/en/kennismaking\n\n" +
        "Or send me a WhatsApp: +34 611 365 294\n\n" +
        "Good luck with your purchase,\n" +
        "Dennis\n\n" +
        "Van der Meulen Foris B.V. · vdmforis.com",
    };
  }
  if (locale === "es") {
    return {
      subject: "Tu guía de Foris: los 9 errores al comprar obra nueva en España (en neerlandés)",
      text:
        `Hola, ${name}:\n\n` +
        "Gracias por tu solicitud. Te adjuntamos la guía. Ten en cuenta que está escrita en neerlandés; " +
        "de momento no tenemos versión en español.\n\n" +
        "Nace de nuestra propia práctica inmobiliaria en los Países Bajos y en España. " +
        "Sin discurso comercial: solo los nueve puntos en los que las compras de obra nueva fallan en la práctica.\n\n" +
        "¿Tienes preguntas sobre tu caso concreto? Una llamada de presentación de 30 minutos es gratis: " +
        "https://www.vdmforis.com/es/kennismaking\n\n" +
        "O escríbeme por WhatsApp: +34 611 365 294\n\n" +
        "Mucha suerte con tu compra,\n" +
        "Dennis\n\n" +
        "Van der Meulen Foris B.V. · vdmforis.com",
    };
  }
  return {
    subject: "Je Foris-gids: de 9 valkuilen bij nieuwbouw kopen in Spanje",
    text:
      `Hoi ${name},\n\n` +
      "Bedankt voor je aanvraag. Hierbij de gids. Bewaar 'm in je 'Spanje-koop'-map, " +
      "dan kun je er onderweg terug naar grijpen.\n\n" +
      "De gids komt voort uit onze eigen vastgoedpraktijk in Nederland en Spanje. " +
      "Geen verkooppraatje, gewoon de negen punten waar het bij nieuwbouwtrajecten " +
      "in de praktijk misgaat.\n\n" +
      "Heb je vragen over je specifieke situatie? Een kennismakingsgesprek van 30 minuten is " +
      "gratis: https://vdmforis.com/kennismaking\n\n" +
      "Of stuur me een WhatsApp: +34 611 365 294\n\n" +
      "Veel succes met je traject,\n" +
      "Dennis\n\n" +
      "Van der Meulen Foris B.V. · vdmforis.com",
  };
}
