import Link from "next/link";
import { OfferteForm } from "@/components/OfferteForm";
import { whatsappLink, contact } from "@/lib/contact";
import { localizedPath, type Locale } from "@/lib/i18n";

export const offerteText = {
  nl: {
    meta: {
      title: "Vraag een offerte aan · Foris",
      description:
        "Kies de dienst, laat je gegevens achter en ontvang binnen één werkdag een vrijblijvende offerte op maat, in het Nederlands.",
    },
    eyebrow: "Vrijblijvend · binnen één werkdag",
    h1: "Vraag een offerte aan.",
    intro:
      "Twee minuten werk: kies de dienst, laat je gegevens achter, en je ontvangt binnen één werkdag een offerte op maat.",
    alt1: "Liever eerst even overleggen? Stuur een ",
    alt2: ", mail ",
    alt3: " of ",
    altBook: "plan een gratis kennismaking",
  },
  en: {
    meta: {
      title: "Request a quote · Foris",
      description:
        "Choose the service, leave your details and receive a tailored, no-obligation quote within one working day.",
    },
    eyebrow: "No obligation · within one working day",
    h1: "Request a quote.",
    intro:
      "Two minutes' work: choose the service, leave your details, and you'll receive a tailored quote within one working day.",
    alt1: "Prefer to talk it through first? Send a ",
    alt2: ", email ",
    alt3: " or ",
    altBook: "book a free introductory call",
  },
  es: {
    meta: {
      title: "Pide presupuesto · Foris",
      description:
        "Elige el servicio, déjanos tus datos y recibe en un día laborable un presupuesto a medida y sin compromiso.",
    },
    eyebrow: "Sin compromiso · en un día laborable",
    h1: "Pide presupuesto.",
    intro:
      "Dos minutos: elige el servicio, déjanos tus datos y recibirás un presupuesto a medida en un día laborable.",
    alt1: "¿Prefieres comentarlo antes? Envía un ",
    alt2: ", escribe a ",
    alt3: " o ",
    altBook: "reserva una llamada de presentación gratuita",
  },
} satisfies Record<Locale, unknown>;

export function OfferteContent({ locale, dienst }: { locale: Locale; dienst?: string }) {
  const t = offerteText[locale];
  const linkCls = "font-medium text-terracotta underline-offset-4 hover:underline";
  return (
    <main className="flex-1">
      <section className="border-b border-border bg-gradient-to-br from-cream via-cream to-secondary/60">
        <div className="mx-auto max-w-2xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
            {t.h1}
          </h1>
          <p className="mt-5 text-lg text-foreground/80">{t.intro}</p>

          <div className="mt-10">
            <OfferteForm defaultDienst={dienst} locale={locale} />
          </div>

          <p className="mt-8 text-center text-sm text-foreground/70">
            {t.alt1}
            <a href={whatsappLink(locale)} target="_blank" rel="noopener noreferrer" className={linkCls}>
              WhatsApp
            </a>
            {t.alt2}
            <a href={`mailto:${contact.email}`} className={linkCls}>
              {contact.email}
            </a>
            {t.alt3}
            <Link href={localizedPath(locale, "/kennismaking")} className={linkCls}>
              {t.altBook}
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
