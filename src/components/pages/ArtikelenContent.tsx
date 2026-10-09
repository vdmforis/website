import Image from "next/image";
import Link from "next/link";
import { localizedPath, type ArticleSlug, type Locale } from "@/lib/i18n";
import { articleMeta } from "@/content/articles/meta";

type ArtikelenText = {
  meta: { title: string; description: string };
  heroAlt: string;
  eyebrow: string;
  h1: string;
  intro: string;
  read: string;
  readCta: string;
  cards: Record<ArticleSlug, { excerpt: string; tag: string }>;
  upcomingEyebrow: string;
  upcomingTitle: string;
  upcomingIntro: string;
  upcomingLink: string;
  upcoming: string[];
};

/** Display order on the index page. */
const order: ArticleSlug[] = [
  "costa-azahar-vs-costa-blanca",
  "nie-aanvragen-spanje-stappenplan",
  "nieuwbouw-of-bestaande-bouw-spanje",
  "modelo-036-nederlandse-bv",
];

export const artikelenText: Record<Locale, ArtikelenText> = {
  nl: {
    meta: {
      title: "Artikelen · Foris",
      description:
        "Nederlandstalige eerstehandgidsen voor de Spaanse vastgoedwereld: NIE, modelo 036, nieuwbouw kopen, plusvalía, vivienda turística. Alles wat we onderweg leerden en waar we nog over schrijven.",
    },
    heroAlt: "Landschap aan de Costa del Azahar bij dageraad, bergen achter Castellón",
    eyebrow: "Artikelen",
    h1: "Wat we onderweg leerden, opgeschreven voor wie het zoekt.",
    intro:
      'Geen marketingverhalen, geen oppervlakkige "tips voor een huis in Spanje". Echte eerstehandgidsen op basis van jarenlang wonen aan de Costa del Azahar en onze eigen nieuwbouwaankoop.',
    read: "lezen",
    readCta: "Lees het artikel →",
    cards: {
      "costa-azahar-vs-costa-blanca": {
        tag: "Regiokeuze",
        excerpt:
          "Eerlijke vergelijking van beide kuststroken: prijzen per m², drukte, vliegverbindingen, klimaat, regelgeving en voor wie welke costa logischer is. Geschreven vanuit jarenlang wonen aan de Azahar.",
      },
      "nie-aanvragen-spanje-stappenplan": {
        tag: "Papierwinkel",
        excerpt:
          "Complete eerstehandsgids: via het Consulaat-Generaal in Amsterdam of ter plaatse in Spanje. Documenten, kosten (€9,84), doorlooptijd, EX-15-formulier, Modelo 790 codigo 012, en de zeven valkuilen.",
      },
      "nieuwbouw-of-bestaande-bouw-spanje": {
        tag: "Beslissingshulp",
        excerpt:
          "Eerlijke vergelijking: belastingen (IVA vs ITP), aankoopkosten, garanties, doorlooptijd en verborgen kosten. Plus een vijf-vragen-checklist om je beslissing te helpen.",
      },
      "modelo-036-nederlandse-bv": {
        tag: "Fiscaal",
        excerpt:
          "Eerstehandsgids voor het indienen van een Modelo 036 om een Spaanse CIF te krijgen. Documentenlijst, kosten, doorlooptijd en de zes meest voorkomende valkuilen.",
      },
    },
    upcomingEyebrow: "Op de plank",
    upcomingTitle: "Waar we nog over gaan schrijven",
    upcomingIntro:
      "Wij publiceren langzaam: alleen onderwerpen waar we zelf de hele paperwinkel van doorlopen hebben, dus geen overgenomen internet-wijsheid. Wil je een melding als een van deze online staat? ",
    upcomingLink: "Laat je e-mail achter",
    upcoming: [
      "Nieuwbouw kopen in Spanje (off-plan): zeven valkuilen die wij zelf tegenkwamen",
      "Aval bancair bij nieuwbouw: Ley 20/2015 in mensentaal",
      "Spaanse bankrekening voor Nederlandse B.V.: welke banken, welke documenten, hoe lang",
      "Vivienda turística aanvragen in de Comunitat Valenciana",
    ],
  },
  en: {
    meta: {
      title: "Articles · Foris",
      description:
        "First-hand guides to the Spanish property world, originally written for Dutch buyers: NIE, modelo 036, buying a new build, plusvalía, holiday lets. Everything we learned along the way and what we still plan to write about.",
    },
    heroAlt: "Landscape on the Costa del Azahar at dawn, mountains behind Castellón",
    eyebrow: "Articles",
    h1: "What we learned along the way, written down for whoever needs it.",
    intro:
      'No marketing stories, no superficial "tips for a house in Spain". Real first-hand guides based on years of living on the Costa del Azahar and our own new-build purchase. The articles were written for Dutch buyers, so some details (such as the Dutch B.V. or the consulate in Amsterdam) are specific to the Netherlands.',
    read: "read",
    readCta: "Read the article →",
    cards: {
      "costa-azahar-vs-costa-blanca": {
        tag: "Choosing an area",
        excerpt:
          "An honest comparison of the two stretches of coast: prices per m², crowds, flight connections, climate, regulations and who each costa makes more sense for. Written from years of living on the Azahar.",
      },
      "nie-aanvragen-spanje-stappenplan": {
        tag: "Paperwork",
        excerpt:
          "A complete first-hand guide: via the Spanish Consulate General in Amsterdam or locally in Spain. Documents, costs (€9.84), processing times, the EX-15 form, Modelo 790 código 012, and the seven pitfalls.",
      },
      "nieuwbouw-of-bestaande-bouw-spanje": {
        tag: "Decision help",
        excerpt:
          "An honest comparison: taxes (IVA vs ITP), purchase costs, guarantees, timelines and hidden costs. Plus a five-question checklist to help you decide.",
      },
      "modelo-036-nederlandse-bv": {
        tag: "Tax",
        excerpt:
          "A first-hand guide to filing a Modelo 036 to obtain a Spanish CIF for a Dutch B.V. Document list, costs, timeline and the six most common pitfalls.",
      },
    },
    upcomingEyebrow: "In the pipeline",
    upcomingTitle: "What we still plan to write about",
    upcomingIntro:
      "We publish slowly: only topics where we have been through all the paperwork ourselves, so no recycled internet wisdom. Would you like a notification when one of these goes live? ",
    upcomingLink: "Leave your email",
    upcoming: [
      "Buying a new build in Spain (off-plan): seven pitfalls we came across ourselves",
      "The bank guarantee (aval bancario) for new builds: Ley 20/2015 in plain English",
      "A Spanish bank account for a Dutch B.V.: which banks, which documents, how long",
      "Applying for a holiday let licence (vivienda turística) in the Comunitat Valenciana",
    ],
  },
  es: {
    meta: {
      title: "Artículos · Foris",
      description:
        "Guías de primera mano sobre el mundo inmobiliario español, escritas originalmente para compradores neerlandeses: NIE, modelo 036, comprar obra nueva, plusvalía, vivienda turística. Todo lo que aprendimos por el camino y lo que aún queremos escribir.",
    },
    heroAlt: "Paisaje de la Costa del Azahar al amanecer, montañas detrás de Castellón",
    eyebrow: "Artículos",
    h1: "Lo que aprendimos por el camino, escrito para quien lo busque.",
    intro:
      'Sin historias de marketing ni "consejos para una casa en España" superficiales. Guías reales de primera mano, basadas en años viviendo en la Costa del Azahar y en nuestra propia compra de obra nueva. Los artículos se escribieron para compradores neerlandeses, así que algunos detalles (como la B.V. neerlandesa o el consulado en Ámsterdam) son específicos de los Países Bajos.',
    read: "de lectura",
    readCta: "Leer el artículo →",
    cards: {
      "costa-azahar-vs-costa-blanca": {
        tag: "Elegir zona",
        excerpt:
          "Una comparación honesta de las dos costas: precios por m², afluencia, conexiones aéreas, clima, normativa y para quién tiene más sentido cada una. Escrita desde años de vida en el Azahar.",
      },
      "nie-aanvragen-spanje-stappenplan": {
        tag: "Papeleo",
        excerpt:
          "Guía completa de primera mano: en el Consulado General de España en Ámsterdam o en España. Documentos, coste (9,84 €), plazos, el formulario EX-15, el Modelo 790 código 012 y los siete errores habituales.",
      },
      "nieuwbouw-of-bestaande-bouw-spanje": {
        tag: "Ayuda para decidir",
        excerpt:
          "Una comparación honesta: impuestos (IVA frente a ITP), gastos de compra, garantías, plazos y costes ocultos. Además, una lista de cinco preguntas para ayudarte a decidir.",
      },
      "modelo-036-nederlandse-bv": {
        tag: "Fiscalidad",
        excerpt:
          "Guía de primera mano para presentar el Modelo 036 y obtener un CIF español para una B.V. neerlandesa. Lista de documentos, costes, plazos y los seis errores más habituales.",
      },
    },
    upcomingEyebrow: "En preparación",
    upcomingTitle: "Sobre qué queremos escribir todavía",
    upcomingIntro:
      "Publicamos despacio: solo temas cuyo papeleo hemos recorrido nosotros mismos, nada de sabiduría copiada de internet. ¿Quieres que te avisemos cuando se publique alguno? ",
    upcomingLink: "Déjanos tu correo",
    upcoming: [
      "Comprar obra nueva en España (sobre plano): siete errores que nos encontramos nosotros",
      "El aval bancario en obra nueva: la Ley 20/2015 explicada con claridad",
      "Cuenta bancaria española para una B.V. neerlandesa: qué bancos, qué documentos, cuánto tarda",
      "Solicitar una vivienda turística en la Comunitat Valenciana",
    ],
  },
};

export function ArtikelenContent({ locale }: { locale: Locale }) {
  const t = artikelenText[locale];
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <Image
          src="/images/IMG_3633.jpg"
          alt={t.heroAlt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/40" />
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
            {t.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">{t.intro}</p>
        </div>
      </section>

      {/* Articles list */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <div className="grid gap-6">
          {order.map((slug) => {
            const meta = articleMeta[slug];
            const card = t.cards[slug];
            return (
              <Link
                key={slug}
                href={localizedPath(locale, `/artikelen/${slug}`)}
                className="group block rounded-3xl border border-border bg-card p-8 transition-colors hover:border-terracotta/60 md:p-10"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.18em]">
                  <span className="text-terracotta">{card.tag}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{meta.text[locale].dateLabel}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">
                    {meta.readingTime} {t.read}
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-2xl text-navy transition-colors group-hover:text-terracotta md:text-3xl">
                  {meta.text[locale].title}
                </h2>
                <p className="mt-3 text-foreground/80">{card.excerpt}</p>
                <span className="mt-6 inline-block text-sm text-terracotta">{t.readCta}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Upcoming */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
            {t.upcomingEyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl text-navy md:text-4xl">{t.upcomingTitle}</h2>
          <p className="mt-4 max-w-2xl text-foreground/80">
            {t.upcomingIntro}
            <Link href={localizedPath(locale, "/#contact")} className="text-terracotta hover:underline">
              {t.upcomingLink}
            </Link>
            .
          </p>
          <ul className="mt-8 space-y-3 text-foreground/85">
            {t.upcoming.map((title) => (
              <li key={title} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
