import type { Locale } from "@/lib/i18n";

type Card = { label: string; body: string };

type ServiceCard = {
  title: string;
  body: string;
  cta: string;
  ctaHref: string;
};

export type HomeCopy = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    quote: string;
    quoteHref: string;
    whatsapp: string;
    imageAlt: string;
  };
  services: {
    eyebrow: string;
    title: string;
    onderhoud: ServiceCard;
    verhuurbeheer: ServiceCard;
    aankoopbegeleiding: ServiceCard;
  };
  alsoRent: string;
  proof: [Card, Card, Card];
};

export const home: Record<Locale, HomeCopy> = {
  nl: {
    meta: {
      title: "Foris · Woningbeheer, onderhoud en verhuurbeheer in Castellón",
      description:
        "Onderhoud en woningbeheer, verhuurbeheer voor particuliere verhuurders en aankoopbegeleiding in Castellón. In het Nederlands geregeld.",
    },
    hero: {
      eyebrow: "Onderhoud · Verhuurbeheer · Aankoopbegeleiding",
      title: "Je huis rond Castellón, in goede handen.",
      intro:
        "Drie diensten rond je woning in Grau de Castellón, Castellón en Benicàssim: onderhoud en woningbeheer, verhuurbeheer voor particuliere verhuurders en begeleiding bij het kopen van een huis. In het Nederlands geregeld.",
      quote: "Vraag een offerte aan",
      quoteHref: "/offerte",
      whatsapp: "Of stuur een WhatsApp",
      imageAlt: "Zonsondergang op de boulevard aan de Costa del Azahar",
    },
    services: {
      eyebrow: "Wat Foris doet",
      title: "Drie diensten, één aanspreekpunt.",
      onderhoud: {
        title: "Onderhoud en woningbeheer",
        body: "Kleine reparaties, periodieke controles en sleutelbeheer. Ook voor nieuwbouwwoningen: repasos coördineren en kleine gebreken na oplevering verhelpen. Speciaal voor eigenaren die er niet altijd zelf zijn.",
        cta: "Meer over onderhoud",
        ctaHref: "/onderhoud",
      },
      verhuurbeheer: {
        title: "Verhuurbeheer",
        body: "Volledig verhuurbeheer voor particuliere verhuurders: van huurder zoeken en screenen tot huurincasso, contact en onderhoud. Wij zitten tussen jou en de huurder in en regelen alles.",
        cta: "Meer over verhuurbeheer",
        ctaHref: "/verhuurbeheer",
      },
      aankoopbegeleiding: {
        title: "Aankoopbegeleiding",
        body: "Begeleiding bij het kopen van een huis aan de Costa del Azahar. Van oriëntatie en papierwinkel tot nieuwbouwtoezicht en concierge. Voor kopers die het ordentelijk willen regelen.",
        cta: "Meer voor kopers",
        ctaHref: "/diensten",
      },
    },
    alsoRent:
      "Foris verhuurt ook eigen woonruimte in Castellón voor de lange termijn. Op dit moment is alles verhuurd.",
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
      title: "Foris · Property care, maintenance and rental management in Castellón",
      description:
        "Maintenance and property care, rental management for private landlords and buying guidance in Castellón. Arranged in English.",
    },
    hero: {
      eyebrow: "Maintenance · Rental management · Buying guidance",
      title: "Your home around Castellón, in good hands.",
      intro:
        "Three services around your home in Grau de Castellón, Castellón and Benicàssim: maintenance and property care, rental management for private landlords and guidance when buying a home. Arranged in English.",
      quote: "Request a quote",
      quoteHref: "/en/offerte",
      whatsapp: "Or send a WhatsApp",
      imageAlt: "Sunset on the seafront promenade on the Costa del Azahar",
    },
    services: {
      eyebrow: "What Foris does",
      title: "Three services, one point of contact.",
      onderhoud: {
        title: "Maintenance and property care",
        body: "Small repairs, regular checks and key holding. Also for new-build homes: coordinate snagging and fix small defects after handover. Made for owners who are not always here.",
        cta: "More about maintenance",
        ctaHref: "/en/onderhoud",
      },
      verhuurbeheer: {
        title: "Rental management",
        body: "Full rental management for private landlords: from finding and screening a tenant to rent collection, contact and maintenance. We sit between you and the tenant and take care of everything.",
        cta: "More about rental management",
        ctaHref: "/en/verhuurbeheer",
      },
      aankoopbegeleiding: {
        title: "Buying guidance",
        body: "Guidance when buying a home on the Costa del Azahar. From orientation and paperwork to new-build supervision and concierge. For buyers who want to do it properly.",
        cta: "More for buyers",
        ctaHref: "/en/diensten",
      },
    },
    alsoRent:
      "Foris also rents out its own housing in Castellón on long-term lets. Everything is let at the moment.",
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
      title: "Foris · Mantenimiento, gestión de alquileres y asesoramiento en Castellón",
      description:
        "Mantenimiento y gestión de viviendas, gestión de alquileres para propietarios particulares y asesoramiento de compra en Castellón. Gestionado en español.",
    },
    hero: {
      eyebrow: "Mantenimiento · Gestión de alquileres · Asesoramiento de compra",
      title: "Tu casa en Castellón y alrededores, en buenas manos.",
      intro:
        "Tres servicios para tu vivienda en el Grao de Castellón, Castellón y Benicàssim: mantenimiento y gestión de viviendas, gestión de alquileres para propietarios particulares y asesoramiento en la compra de casa. Gestionado en español.",
      quote: "Pide presupuesto",
      quoteHref: "/es/offerte",
      whatsapp: "O escríbenos por WhatsApp",
      imageAlt: "Puesta de sol en el paseo marítimo de la Costa del Azahar",
    },
    services: {
      eyebrow: "Qué hace Foris",
      title: "Tres servicios, un solo interlocutor.",
      onderhoud: {
        title: "Mantenimiento y gestión de viviendas",
        body: "Pequeñas reparaciones, revisiones periódicas y custodia de llaves. También para viviendas de obra nueva: coordinar repasos y solucionar pequeños defectos tras la entrega. Pensado para propietarios que no siempre están aquí.",
        cta: "Más sobre mantenimiento",
        ctaHref: "/es/onderhoud",
      },
      verhuurbeheer: {
        title: "Gestión de alquileres",
        body: "Gestión completa de alquileres para propietarios particulares: desde buscar y seleccionar inquilino hasta el cobro del alquiler, contacto y mantenimiento. Nos situamos entre tú y el inquilino y nos encargamos de todo.",
        cta: "Más sobre gestión de alquileres",
        ctaHref: "/es/verhuurbeheer",
      },
      aankoopbegeleiding: {
        title: "Asesoramiento de compra",
        body: "Asesoramiento en la compra de casa en la Costa del Azahar. Desde orientación y papeleo hasta supervisión de obra nueva y conserjería. Para compradores que quieren hacerlo bien.",
        cta: "Más para compradores",
        ctaHref: "/es/diensten",
      },
    },
    alsoRent:
      "Foris también alquila vivienda propia en Castellón a largo plazo. Ahora mismo no tenemos ninguna vivienda disponible.",
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
