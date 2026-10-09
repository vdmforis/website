import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";

type Variant = "inline" | "card";

const texts = {
  nl: {
    aria: "Download de gratis gids",
    eyebrow: "Gratis PDF · 24 pagina's",
    inlineTitle: "De 9 valkuilen bij nieuwbouw kopen in Spanje",
    inlineBody:
      "Dit artikel pakt één onderdeel uit. De volledige lijst plus checklists per fase staat in de gids.",
    inlineCta: "Stuur me de gids →",
    cardTitle: "De 9 valkuilen bij nieuwbouw kopen in Spanje als Nederlander",
    cardBody:
      "Eerstehandse ervaring uit ons eigen aankooptraject. Geen marketingverhaal, wel de details die je vooraf wil weten. In je inbox binnen een paar minuten.",
    cardCta: "Download de gids",
  },
  en: {
    aria: "Download the free guide",
    eyebrow: "Free PDF · 24 pages · in Dutch",
    inlineTitle: "The 9 pitfalls of buying a new build in Spain",
    inlineBody:
      "This article covers one part. The full list plus checklists for each stage is in the guide (written in Dutch).",
    inlineCta: "Send me the guide →",
    cardTitle: "The 9 pitfalls of buying a new build in Spain as a Dutch buyer",
    cardBody:
      "First-hand experience from our own purchase. No marketing story, just the details you want to know beforehand. Please note: the guide is only available in Dutch.",
    cardCta: "Download the guide",
  },
  es: {
    aria: "Descarga la guía gratuita",
    eyebrow: "PDF gratis · 24 páginas · en neerlandés",
    inlineTitle: "Los 9 errores al comprar obra nueva en España",
    inlineBody:
      "Este artículo desarrolla una parte. La lista completa y las listas de control de cada fase están en la guía (escrita en neerlandés).",
    inlineCta: "Envíame la guía →",
    cardTitle: "Los 9 errores al comprar obra nueva en España como comprador neerlandés",
    cardBody:
      "Experiencia de primera mano de nuestra propia compra. Sin discurso de marketing, solo los detalles que conviene saber antes. Ten en cuenta que la guía solo está disponible en neerlandés.",
    cardCta: "Descarga la guía",
  },
} satisfies Record<Locale, unknown>;

/**
 * Gids lead-magnet CTA. Two variants:
 * - inline: smaller horizontal strip, intended near the top of an article (after the lead).
 * - card:   prominent centered card, intended near the bottom of an article (before service CTAs).
 * The guide itself is Dutch-only; the EN/ES texts say so.
 */
export function GidsCallout({
  variant = "card",
  locale = "nl",
}: {
  variant?: Variant;
  locale?: Locale;
}) {
  const t = texts[locale];
  const href = localizedPath(locale, "/gratis-gids");

  if (variant === "inline") {
    return (
      <aside
        aria-label={t.aria}
        className="mt-10 flex flex-col gap-4 rounded-2xl border border-terracotta/30 bg-terracotta/5 p-5 sm:flex-row sm:items-center"
      >
        <div className="flex-1">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            {t.eyebrow}
          </p>
          <p className="mt-1 font-heading text-lg text-navy">{t.inlineTitle}</p>
          <p className="mt-1 text-sm text-foreground/75">{t.inlineBody}</p>
        </div>
        <Link
          href={href}
          className="shrink-0 self-start rounded-full bg-terracotta px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90 sm:self-center"
        >
          {t.inlineCta}
        </Link>
      </aside>
    );
  }

  return (
    <aside
      aria-label={t.aria}
      className="mt-16 rounded-3xl border border-terracotta/40 bg-terracotta/5 p-8 text-center"
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
        {t.eyebrow}
      </p>
      <h3 className="mt-3 font-heading text-2xl text-navy">{t.cardTitle}</h3>
      <p className="mx-auto mt-3 max-w-xl text-foreground/80">{t.cardBody}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          href={href}
          className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90"
        >
          {t.cardCta}
        </Link>
      </div>
    </aside>
  );
}
