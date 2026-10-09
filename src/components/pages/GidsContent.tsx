import { GidsForm } from "@/components/GidsForm";
import type { Locale } from "@/lib/i18n";

type GidsText = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: string;
  intro: string;
  languageNote: string | null;
  points: string[];
  privacy: string;
};

export const gidsText: Record<Locale, GidsText> = {
  nl: {
    meta: {
      title: "Gratis gids: de 9 valkuilen bij nieuwbouw kopen in Spanje · Foris",
      description:
        "Download onze gids van 24 pagina's: de negen valkuilen die wij zelf zijn tegengekomen tijdens onze aankoop. Eerlijke, eerstehandse informatie, gratis tegen je e-mailadres.",
    },
    eyebrow: "Gratis gids · 24 pagina's",
    h1: "De 9 valkuilen bij nieuwbouw kopen in Spanje als Nederlander.",
    intro:
      "Rechtstreeks uit onze eigen vastgoedpraktijk in Nederland en aan de Costa del Azahar. Geen marketingverhaal, maar een eerlijke lijst van wat wij vooraf graag hadden geweten.",
    languageNote: null,
    points: [
      "De juiste volgorde voor NIE, modelo 036 en bankrekening",
      "Hoe je een aval bancair écht moet controleren bij nieuwbouw",
      "Welke documenten beëdigd vertaald moeten worden (en welke niet)",
      "Wat je gestor en advocaat moeten doen, en wanneer",
      "Realistische lopende lasten: IBI, plusvalía, comunidad, modelo 720",
      "Wanneer je vlucht boeken voor de oplevering (later dan je denkt)",
    ],
    privacy:
      "We verzenden je e-mailadres alleen om de gids op te sturen. Geen ongevraagde mailings, geen lijstenhandel. Wil je later geen contact meer? Eén woord en je staat uit ons systeem.",
  },
  en: {
    meta: {
      title: "Free guide (in Dutch): the 9 pitfalls of buying a new build in Spain · Foris",
      description:
        "Download our 24-page guide, written in Dutch: the nine pitfalls we came across ourselves during our purchase. Honest, first-hand information, free in exchange for your email address.",
    },
    eyebrow: "Free guide · 24 pages · in Dutch",
    h1: "The 9 pitfalls of buying a new build in Spain as a Dutch buyer.",
    intro:
      "Straight from our own property practice in the Netherlands and on the Costa del Azahar. No marketing story, just an honest list of what we wish we had known beforehand.",
    languageNote:
      "Please note: the guide is only available in Dutch. It was written for Dutch buyers and we don't have an English version at the moment. Prefer to talk it through in English? Book a free call or send us a WhatsApp.",
    points: [
      "The right order for your NIE, modelo 036 and bank account",
      "How to really check a bank guarantee (aval bancario) on a new build",
      "Which documents need a sworn translation (and which don't)",
      "What your gestor and lawyer should do, and when",
      "Realistic running costs: IBI, plusvalía, comunidad, modelo 720",
      "When to book your flight for the handover (later than you think)",
    ],
    privacy:
      "We only use your email address to send you the guide. No unsolicited mailings, no selling of lists. Don't want to hear from us later? One word and you're out of our system.",
  },
  es: {
    meta: {
      title: "Guía gratis (en neerlandés): los 9 errores al comprar obra nueva en España · Foris",
      description:
        "Descarga nuestra guía de 24 páginas, escrita en neerlandés: los nueve errores con los que nos encontramos durante nuestra propia compra. Información honesta y de primera mano, gratis a cambio de tu correo.",
    },
    eyebrow: "Guía gratis · 24 páginas · en neerlandés",
    h1: "Los 9 errores al comprar obra nueva en España como comprador neerlandés.",
    intro:
      "Directamente de nuestra propia práctica inmobiliaria en los Países Bajos y en la Costa del Azahar. Sin discurso de marketing: una lista honesta de lo que nos habría gustado saber antes.",
    languageNote:
      "Ten en cuenta que la guía solo está disponible en neerlandés. Se escribió para compradores neerlandeses y de momento no tenemos versión en español. ¿Prefieres hablarlo directamente con nosotros? Reserva una llamada gratis o escríbenos por WhatsApp.",
    points: [
      "El orden correcto para el NIE, el modelo 036 y la cuenta bancaria",
      "Cómo revisar de verdad un aval bancario en obra nueva",
      "Qué documentos necesitan traducción jurada (y cuáles no)",
      "Qué deben hacer tu gestor y tu abogado, y cuándo",
      "Gastos corrientes realistas: IBI, plusvalía, comunidad, modelo 720",
      "Cuándo reservar el vuelo para la entrega (más tarde de lo que crees)",
    ],
    privacy:
      "Solo usamos tu correo para enviarte la guía. Sin envíos no solicitados ni venta de listas. ¿No quieres que volvamos a contactarte? Con una palabra te borramos de nuestro sistema.",
  },
};

export function GidsContent({ locale }: { locale: Locale }) {
  const t = gidsText[locale];
  return (
    <main className="flex-1">
      <section className="border-b border-border bg-gradient-to-br from-cream via-cream to-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
              {t.eyebrow}
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
              {t.h1}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">{t.intro}</p>
            {t.languageNote && (
              <p className="mt-6 max-w-xl rounded-xl border border-olive/40 bg-olive/10 p-4 text-sm text-foreground/85">
                {t.languageNote}
              </p>
            )}
            <ul className="mt-8 space-y-3 text-foreground/85">
              {t.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <GidsForm locale={locale} />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-12 text-sm text-muted-foreground md:py-16">
          <p>{t.privacy}</p>
        </div>
      </section>
    </main>
  );
}
