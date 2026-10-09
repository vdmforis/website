import { KennismakingForm } from "@/components/KennismakingForm";
import { whatsappLink, contact } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";

export const kennismakingText = {
  nl: {
    meta: {
      title: "Plan een kennismaking · Foris",
      description:
        "Vraag een gratis kennismakingsgesprek van 30 minuten aan. We stellen binnen één werkdag een tijdstip voor: videocall of telefonisch, in het Nederlands.",
    },
    eyebrow: "Gratis · 30 minuten",
    h1: "Plan een kennismaking.",
    intro:
      "Vertel kort waar je staat, dan stellen we binnen één werkdag per e-mail een tijdstip voor. Videocall of telefonisch, in het Nederlands.",
    bullets: [
      "We luisteren naar je situatie en beantwoorden je vragen",
      "Eerlijk antwoord of we de juiste club voor je zijn",
      "Geen verkoop, geen verplichtingen",
    ],
    direct1: "Liever direct contact? Stuur een ",
    direct2: " of mail naar ",
  },
  en: {
    meta: {
      title: "Book an introductory call · Foris",
      description:
        "Request a free 30-minute introductory call. We'll suggest a time within one working day, by video call or phone.",
    },
    eyebrow: "Free · 30 minutes",
    h1: "Book an introductory call.",
    intro:
      "Tell us briefly where you stand and we'll suggest a time by email within one working day. By video call or phone.",
    bullets: [
      "We listen to your situation and answer your questions",
      "An honest answer on whether we're the right people for you",
      "No sales pitch, no obligations",
    ],
    direct1: "Prefer direct contact? Send a ",
    direct2: " or email ",
  },
  es: {
    meta: {
      title: "Reserva una llamada de presentación · Foris",
      description:
        "Solicita una llamada de presentación gratuita de 30 minutos. Te proponemos una hora en un día laborable, por videollamada o por teléfono.",
    },
    eyebrow: "Gratis · 30 minutos",
    h1: "Reserva una llamada de presentación.",
    intro:
      "Cuéntanos brevemente en qué punto estás y te propondremos una hora por correo en un día laborable. Por videollamada o por teléfono.",
    bullets: [
      "Escuchamos tu situación y respondemos a tus preguntas",
      "Te decimos con sinceridad si somos las personas adecuadas para ti",
      "Sin venta, sin compromiso",
    ],
    direct1: "¿Prefieres contacto directo? Envía un ",
    direct2: " o escribe a ",
  },
} satisfies Record<Locale, unknown>;

export function KennismakingContent({ locale }: { locale: Locale }) {
  const t = kennismakingText[locale];
  const linkCls = "font-medium text-terracotta underline-offset-4 hover:underline";
  return (
    <main className="flex-1">
      <section className="border-b border-border bg-gradient-to-br from-cream via-cream to-secondary/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
              {t.eyebrow}
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
              {t.h1}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">{t.intro}</p>
            <ul className="mt-8 space-y-3 text-foreground/85">
              {t.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-foreground/70">
              {t.direct1}
              <a href={whatsappLink(locale)} target="_blank" rel="noopener noreferrer" className={linkCls}>
                WhatsApp
              </a>
              {t.direct2}
              <a href={`mailto:${contact.email}`} className={linkCls}>
                {contact.email}
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <KennismakingForm locale={locale} />
          </div>
        </div>
      </section>
    </main>
  );
}
