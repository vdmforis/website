import type { Locale } from "@/lib/i18n";

type Card = { label: string; body: string };

export type HomeCopy = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    quote: string;
    quoteHref: string;
    whatsapp: string;
    alsoPrefix: string;
    alsoRent: string;
    alsoBuyPrefix: string;
    alsoBuy: string;
    usps: string[];
    imageAlt: string;
  };
  pillars: {
    eyebrow: string;
    title: string;
    care: {
      title: string;
      body: string;
      bullets: string[];
      quote: string;
      quoteHref: string;
      packages: string;
    };
    rent: { title: string; body: string; status: string; notify: string };
  };
  buyers: { eyebrow: string; title: string; body: string; more: string };
  proof: [Card, Card, Card];
};

export const home: Record<Locale, HomeCopy> = {
  nl: {
    meta: {
      title: "Foris · Woningbeheer, onderhoud en verhuur in Castellón",
      description:
        "Nederlandstalig onderhoud, reparaties en woningbeheer in Grau de Castellón, Castellón en Benicàssim. Ook verhuur van eigen woonruimte en begeleiding bij het kopen van een huis.",
    },
    hero: {
      eyebrow: "Woningbeheer · Onderhoud · Verhuur · Castellón",
      title: "Je huis rond Castellón, in goede handen.",
      intro:
        "Onderhoud, reparaties en woningbeheer in Grau de Castellón, Castellón en Benicàssim, in het Nederlands geregeld. Wij zijn er als jij er niet bent, met foto's en updates via WhatsApp.",
      quote: "Vraag een offerte aan",
      quoteHref: "/offerte",
      whatsapp: "Of stuur een WhatsApp",
      alsoPrefix: "Ook:",
      alsoRent: "woonruimte te huur van Foris",
      alsoBuyPrefix: "Een huis kopen?",
      alsoBuy: "Bekijk onze kopersbegeleiding →",
      usps: [
        "Eén Nederlandstalig aanspreekpunt, ook als je er zelf niet bent",
        "Geen Spaans netwerk nodig: wij kennen de weg in Castellón",
        "Altijd vooraf een prijs of uurtarief, geen verrassingen achteraf",
      ],
      imageAlt: "Zonsondergang op de boulevard aan de Costa del Azahar",
    },
    pillars: {
      eyebrow: "Wat Foris doet",
      title: "Twee activiteiten, één aanspreekpunt.",
      care: {
        title: "Woningbeheer & onderhoud",
        body: "Van een lekkende kraan tot een vaste check van je woning terwijl je weg bent. We werken in Grau de Castellón, Castellón centrum en Benicàssim. Je krijgt vooraf een prijs of uurtarief en na afloop foto's van het werk.",
        bullets: [
          "Klussen, reparaties en onderhoud",
          "Sleutelbeheer, post en periodieke checks (Light · Standard · Villa)",
          "Speciaal voor eigenaren die er niet altijd zelf zijn",
        ],
        quote: "Vraag een offerte aan →",
        quoteHref: "/offerte?dienst=anders",
        packages: "Bekijk de woningbeheerpakketten →",
      },
      rent: {
        title: "Verhuur: wonen in een Foris-woning",
        body: "Foris verhuurt ook eigen woonruimte in Castellón, voor de lange termijn. Het onderhoud regelen we zelf, dus als huurder heb je één aanspreekpunt.",
        status: "Op dit moment is al onze woonruimte verhuurd.",
        notify: "Houd me op de hoogte →",
      },
    },
    // Dutch uses the full buyers section in HomePage; these are unused for nl.
    buyers: { eyebrow: "", title: "", body: "", more: "" },
    proof: [
      {
        label: "Eigen ervaring",
        body: "Foris komt voort uit een familiebedrijf met ruime vastgoedervaring in Nederland en Spanje, met name aan de Costa del Azahar. We verhuren ook zelf woonruimte in Castellón.",
      },
      {
        label: "Hoe we werken",
        body: "Van der Meulen Foris B.V. is een Nederlands familiebedrijf met een fiscaal domicilie in Grau de Castellón. Je krijgt vooraf een prijs of uurtarief, en achteraf altijd een factuur.",
      },
      {
        label: "Werkgebied",
        body: "Onderhoud en woningbeheer in Grau de Castellón, Castellón centrum en Benicàssim. Kopers begeleiden we langs de kust tussen Vinaròs en Burriana.",
      },
    ],
  },
  en: {
    meta: {
      title: "Foris · Property care, maintenance and rentals in Castellón",
      description:
        "Maintenance, repairs and property care in Grau de Castellón, Castellón and Benicàssim, for owners who aren't always here. Foris also rents out its own housing.",
    },
    hero: {
      eyebrow: "Property care · Maintenance · Rentals · Castellón",
      title: "Your home around Castellón, in good hands.",
      intro:
        "Maintenance, repairs and property care in Grau de Castellón, Castellón and Benicàssim. We're there when you're not, with photos and updates on WhatsApp.",
      quote: "Request a quote",
      quoteHref: "#contact",
      whatsapp: "Or send a WhatsApp",
      alsoPrefix: "Also:",
      alsoRent: "rental homes from Foris",
      alsoBuyPrefix: "Buying a home?",
      alsoBuy: "See how we help buyers →",
      usps: [
        "One English-speaking point of contact, even when you're away",
        "No local contacts needed: we know our way around Castellón",
        "A price or hourly rate agreed upfront, no surprises afterwards",
      ],
      imageAlt: "Sunset on the seafront promenade on the Costa del Azahar",
    },
    pillars: {
      eyebrow: "What Foris does",
      title: "Two activities, one point of contact.",
      care: {
        title: "Property care & maintenance",
        body: "From a dripping tap to regular checks on your home while you're away. We work in Grau de Castellón, Castellón city centre and Benicàssim. You get a price or hourly rate upfront and photos of the work afterwards.",
        bullets: [
          "Odd jobs, repairs and maintenance",
          "Key holding, post and regular checks (Light · Standard · Villa)",
          "Made for owners who aren't always here",
        ],
        quote: "Request a quote →",
        quoteHref: "#contact",
        packages: "See the property care packages (in Dutch) →",
      },
      rent: {
        title: "Rentals: live in a Foris home",
        body: "Foris also rents out its own housing in Castellón, on long-term lets. We handle the maintenance ourselves, so as a tenant you have one point of contact.",
        status: "All our housing is let at the moment.",
        notify: "Keep me posted →",
      },
    },
    buyers: {
      eyebrow: "For buyers",
      title: "Buying a home on the Costa del Azahar?",
      body: "We help with orientation, the paperwork (NIE, CIF, bank account) and keeping an eye on your new build. After the handover, we look after your home too.",
      more: "More about buyer guidance (in Dutch) →",
    },
    proof: [
      {
        label: "Our background",
        body: "Foris comes from a family business with broad property experience in the Netherlands and Spain, especially on the Costa del Azahar. We also rent out our own housing in Castellón.",
      },
      {
        label: "How we work",
        body: "Van der Meulen Foris B.V. is a Dutch family business with its Spanish tax address in Grau de Castellón. You get a price or hourly rate upfront, and always an invoice afterwards.",
      },
      {
        label: "Where we work",
        body: "Maintenance and property care in Grau de Castellón, Castellón city centre and Benicàssim. We guide buyers along the coast between Vinaròs and Burriana.",
      },
    ],
  },
  es: {
    meta: {
      title: "Foris · Mantenimiento, gestión y alquiler de viviendas en Castellón",
      description:
        "Mantenimiento, reparaciones y gestión de viviendas en el Grao de Castellón, Castellón y Benicàssim, para propietarios que no siempre están aquí. Foris también alquila vivienda propia.",
    },
    hero: {
      eyebrow: "Gestión de viviendas · Mantenimiento · Alquiler · Castellón",
      title: "Tu casa en Castellón y alrededores, en buenas manos.",
      intro:
        "Mantenimiento, reparaciones y gestión de viviendas en el Grao de Castellón, Castellón y Benicàssim. Estamos ahí cuando tú no estás, con fotos y novedades por WhatsApp.",
      quote: "Pide presupuesto",
      quoteHref: "#contact",
      whatsapp: "O escríbenos por WhatsApp",
      alsoPrefix: "También:",
      alsoRent: "viviendas de alquiler de Foris",
      alsoBuyPrefix: "¿Vas a comprar casa?",
      alsoBuy: "Mira cómo ayudamos a los compradores →",
      usps: [
        "Un solo interlocutor, también cuando no estás aquí",
        "No necesitas contactos en la zona: conocemos bien Castellón",
        "Siempre un precio o una tarifa por hora por adelantado, sin sorpresas",
      ],
      imageAlt: "Puesta de sol en el paseo marítimo de la Costa del Azahar",
    },
    pillars: {
      eyebrow: "Qué hace Foris",
      title: "Dos actividades, un solo interlocutor.",
      care: {
        title: "Gestión y mantenimiento de viviendas",
        body: "Desde un grifo que gotea hasta revisiones periódicas de tu casa mientras estás fuera. Trabajamos en el Grao de Castellón, el centro de Castellón y Benicàssim. Te damos un precio o una tarifa por hora por adelantado y, al terminar, fotos del trabajo.",
        bullets: [
          "Pequeños trabajos, reparaciones y mantenimiento",
          "Custodia de llaves, correo y revisiones periódicas (Light · Standard · Villa)",
          "Pensado para propietarios que no siempre están aquí",
        ],
        quote: "Pide presupuesto →",
        quoteHref: "#contact",
        packages: "Ver los paquetes de gestión (en neerlandés) →",
      },
      rent: {
        title: "Alquiler: vivir en una vivienda de Foris",
        body: "Foris también alquila vivienda propia en Castellón, a largo plazo. El mantenimiento lo hacemos nosotros, así que como inquilino tienes un solo interlocutor.",
        status: "Ahora mismo no tenemos ninguna vivienda disponible.",
        notify: "Avísame cuando haya algo →",
      },
    },
    buyers: {
      eyebrow: "Para compradores",
      title: "¿Vas a comprar casa en la Costa del Azahar?",
      body: "Te ayudamos con la orientación, el papeleo (NIE, CIF, cuenta bancaria) y el seguimiento de tu obra nueva. Después de la entrega de llaves, también cuidamos de tu casa.",
      more: "Más información para compradores (en neerlandés) →",
    },
    proof: [
      {
        label: "Experiencia propia",
        body: "Foris nace de una empresa familiar con amplia experiencia inmobiliaria en los Países Bajos y en España, sobre todo en la Costa del Azahar. También alquilamos vivienda propia en Castellón.",
      },
      {
        label: "Cómo trabajamos",
        body: "Van der Meulen Foris B.V. es una empresa familiar neerlandesa con domicilio fiscal en el Grao de Castellón. Te damos un precio o una tarifa por hora por adelantado y, después, siempre una factura.",
      },
      {
        label: "Dónde trabajamos",
        body: "Mantenimiento y gestión de viviendas en el Grao de Castellón, el centro de Castellón y Benicàssim. A los compradores los acompañamos por la costa entre Vinaròs y Burriana.",
      },
    ],
  },
};
