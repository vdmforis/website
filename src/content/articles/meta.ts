import type { ArticleSlug, Locale } from "@/lib/i18n";

export type ArticleMeta = {
  publishDate: string;
  updatedDate: string;
  readingTime: string;
  image?: string;
  text: Record<
    Locale,
    { title: string; description: string; dateLabel: string; imageAlt?: string }
  >;
};

/** Per-article metadata in NL/EN/ES. Bodies live next to this file. */
export const articleMeta: Record<ArticleSlug, ArticleMeta> = {
  "costa-azahar-vs-costa-blanca": {
    publishDate: "2026-06-03",
    updatedDate: "2026-06-03",
    readingTime: "12 min",
    image: "/images/IMG_9688.jpg",
    text: {
      nl: {
        title: "Costa del Azahar vs Costa Blanca: welke past bij jou?",
        description:
          "Eerlijke vergelijking tussen de Costa del Azahar (Castellón) en de Costa Blanca (Alicante) voor Nederlandse huizenkopers. Prijzen per m², drukte, vliegverbindingen, klimaat, regelgeving en voor wie welke kuststrook past, geschreven vanuit jarenlang wonen aan de Azahar.",
        dateLabel: "3 juni 2026",
        imageAlt: "Spaanse kustweg met palmenboulevard en uitzicht op de Middellandse Zee",
      },
      en: {
        title: "Costa del Azahar vs Costa Blanca: which one suits you?",
        description:
          "An honest comparison of the Costa del Azahar (Castellón) and the Costa Blanca (Alicante), originally written for Dutch home buyers. Prices per m², crowds, flight connections, climate, regulations and who each stretch of coast suits, written from years of living on the Azahar.",
        dateLabel: "3 June 2026",
        imageAlt: "Spanish coastal road with a palm-lined promenade and a view of the Mediterranean",
      },
      es: {
        title: "Costa del Azahar o Costa Blanca: ¿cuál encaja contigo?",
        description:
          "Una comparación honesta entre la Costa del Azahar (Castellón) y la Costa Blanca (Alicante), escrita originalmente para compradores neerlandeses. Precios por m², afluencia, conexiones aéreas, clima, normativa y para quién encaja cada costa, desde años de vida en el Azahar.",
        dateLabel: "3 de junio de 2026",
        imageAlt: "Carretera costera con paseo de palmeras y vistas al Mediterráneo",
      },
    },
  },
  "nie-aanvragen-spanje-stappenplan": {
    publishDate: "2026-05-30",
    updatedDate: "2026-05-30",
    readingTime: "11 min",
    text: {
      nl: {
        title: "NIE aanvragen in Spanje: stappenplan 2026",
        description:
          "Complete eerstehandsgids voor het aanvragen van een NIE als Nederlander: via het Consulaat-Generaal in Amsterdam of ter plaatse in Spanje. Documenten, kosten (€9,84), doorlooptijd, het EX-15-formulier, Modelo 790 codigo 012, en de zeven valkuilen die mensen vaak maken.",
        dateLabel: "30 mei 2026",
      },
      en: {
        title: "Applying for an NIE in Spain: step-by-step guide 2026",
        description:
          "A complete first-hand guide to applying for an NIE from the Netherlands (via the Spanish Consulate General in Amsterdam) or locally in Spain. Documents, costs (€9.84), processing times, the EX-15 form, Modelo 790 código 012, and the seven mistakes people often make.",
        dateLabel: "30 May 2026",
      },
      es: {
        title: "Cómo solicitar el NIE en España: guía paso a paso 2026",
        description:
          "Guía completa y de primera mano para solicitar el NIE desde los Países Bajos (en el Consulado General de España en Ámsterdam) o en España. Documentos, coste (9,84 €), plazos, el formulario EX-15, el Modelo 790 código 012 y los siete errores más habituales.",
        dateLabel: "30 de mayo de 2026",
      },
    },
  },
  "nieuwbouw-of-bestaande-bouw-spanje": {
    publishDate: "2026-05-30",
    updatedDate: "2026-05-30",
    readingTime: "9 min",
    image: "/images/IMG_5111.jpg",
    text: {
      nl: {
        title: "Nieuwbouw of bestaande bouw in Spanje: welke past bij jou?",
        description:
          "Een eerlijke vergelijking tussen nieuwbouw en bestaande bouw in Spanje. Belastingen (IVA vs ITP), aankoopkosten, garanties, doorlooptijd en de verborgen kosten die je vaak niet ziet komen. Plus een vijf-vragen-checklist om je beslissing te helpen.",
        dateLabel: "30 mei 2026",
        imageAlt: "Uitzicht vanaf een Spaans terras op de palmenboulevard en de Middellandse Zee",
      },
      en: {
        title: "New build or resale in Spain: which one suits you?",
        description:
          "An honest comparison of new-build and resale property in Spain. Taxes (IVA vs ITP), purchase costs, guarantees, timelines and the hidden costs you often don't see coming. Plus a five-question checklist to help you decide.",
        dateLabel: "30 May 2026",
        imageAlt: "View from a Spanish terrace over the palm-lined promenade and the Mediterranean",
      },
      es: {
        title: "Obra nueva o segunda mano en España: ¿cuál encaja contigo?",
        description:
          "Una comparación honesta entre obra nueva y vivienda de segunda mano en España. Impuestos (IVA frente a ITP), gastos de compra, garantías, plazos y los costes ocultos que a menudo no se ven venir. Además, una lista de cinco preguntas para ayudarte a decidir.",
        dateLabel: "30 de mayo de 2026",
        imageAlt: "Vista desde una terraza sobre el paseo de palmeras y el Mediterráneo",
      },
    },
  },
  "modelo-036-nederlandse-bv": {
    publishDate: "2026-05-29",
    updatedDate: "2026-05-29",
    readingTime: "8 min",
    text: {
      nl: {
        title: "Modelo 036 voor Nederlandse B.V.'s: wat je moet weten in 2026",
        description:
          "Eerstehandsgids voor het indienen van een Modelo 036 voor je Nederlandse B.V. om een Spaanse CIF te krijgen. Documentenlijst, kosten, doorlooptijd en de zes meest voorkomende valkuilen.",
        dateLabel: "29 mei 2026",
      },
      en: {
        title: "Modelo 036 for Dutch B.V. companies: what you need to know in 2026",
        description:
          "A first-hand guide to filing a Modelo 036 for your Dutch B.V. (private limited company) to obtain a Spanish CIF. Document list, costs, timeline and the six most common pitfalls.",
        dateLabel: "29 May 2026",
      },
      es: {
        title: "Modelo 036 para una B.V. neerlandesa: lo que debes saber en 2026",
        description:
          "Guía de primera mano para presentar el Modelo 036 de tu B.V. neerlandesa (sociedad limitada) y obtener un CIF español. Lista de documentos, costes, plazos y los seis errores más habituales.",
        dateLabel: "29 de mayo de 2026",
      },
    },
  },
};
