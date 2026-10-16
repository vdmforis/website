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
  partnerTeaser: {
    title: string;
    body: string;
    cta: string;
    ctaHref: string;
  };
  proof: [Card, Card, Card];
};

export const home: Record<Locale, HomeCopy> = {
  nl: {
    meta: {
      title: "VDM Foris · Onderhoud en woningtoezicht in Castellón voor Nederlandse en Belgische eigenaren",
      description:
        "Woningcontroles als je er niet bent, kleine reparaties en elektrische klusjes, montage en sleutelbeheer rond Castellón en de Costa Azahar. Nederlands sprekend, met foto update na elk bezoek.",
    },
    hero: {
      eyebrow: "Onderhoud en woningtoezicht · Costa Azahar",
      title: "Je huis in Spanje, goed verzorgd als jij er niet bent.",
      intro:
        "Voor Nederlandse en Belgische eigenaren rond Castellón en de Costa Azahar. Wij controleren je woning als je weg bent, doen kleine reparaties en elektrische klusjes zoals lampen, stopcontacten en schakelaars, monteren wat nodig is en houden alles bij. Na elk bezoek een foto update. Vertrouwd, Nederlands sprekend, en afspraak is afspraak.",
      quote: "Vraag een offerte aan",
      quoteHref: "/offerte",
      whatsapp: "Of stuur een WhatsApp",
      imageAlt: "Zonsondergang op de boulevard aan de Costa del Azahar",
    },
    services: {
      eyebrow: "Wat Foris doet",
      title: "Eerst onderhoud. Daarnaast verhuur en aankoop.",
      onderhoud: {
        title: "Onderhoud en woningbeheer",
        body: "Woningcontroles terwijl je weg bent, kleine reparaties, kleine elektrische klusjes (lampen, stopcontacten, schakelaars), montage en algemeen onderhoud. Met foto verslag via WhatsApp en sleutelbeheer. Ook voor nieuwbouw na oplevering.",
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
    partnerTeaser: {
      title: "Voor partners",
      body: "Ben je een schoonmaakbedrijf, vakantieverhuur beheerder, makelaar of administrador? Wij werken graag samen voor onderhoud en kleine reparaties. Eerste opdracht zonder uitrukkosten.",
      cta: "Meer over samenwerking",
      ctaHref: "/partners",
    },
    proof: [
      {
        label: "Vertrouwd en Nederlands sprekend",
        body: "Een Nederlands familiebedrijf dat zelf rond Castellón woont. Je hebt één vast aanspreekpunt dat je taal spreekt, of je nu uit Nederland of Vlaanderen komt.",
      },
      {
        label: "Afspraak is afspraak",
        body: "We komen wanneer we zeggen dat we komen. Na elk bezoek krijg je foto's via WhatsApp. Vooraf een vrijblijvende offerte, achteraf altijd een factuur.",
      },
      {
        label: "Werkgebied",
        body: "Grau de Castellón, Castellón, Benicàssim, Oropesa en de rest van de Costa Azahar.",
      },
    ],
  },
  en: {
    meta: {
      title: "VDM Foris · Home maintenance and property checks in Castellón",
      description:
        "Property checks while you are away, small repairs and electrical jobs, assembly and key holding around Castellón and the Costa Azahar. Photo update after every visit.",
    },
    hero: {
      eyebrow: "Maintenance and property checks · Costa Azahar",
      title: "Your home in Spain, looked after while you are away.",
      intro:
        "For owners around Castellón and the Costa Azahar who are not here all year. We check your home while you are away, do small repairs and small electrical jobs like lights, sockets and switches, assemble what is needed and keep everything in shape. A photo update after every visit. Trusted, Dutch run, and we do what we say.",
      quote: "Request a quote",
      quoteHref: "/en/offerte",
      whatsapp: "Or send a WhatsApp",
      imageAlt: "Sunset on the seafront promenade on the Costa del Azahar",
    },
    services: {
      eyebrow: "What Foris does",
      title: "Maintenance first. Rentals and buying on the side.",
      onderhoud: {
        title: "Maintenance and property care",
        body: "Property checks while you are away, small repairs, small electrical jobs (lights, sockets, switches), assembly and general upkeep. With photo reports via WhatsApp and key holding. Also for new builds after handover.",
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
    partnerTeaser: {
      title: "For partners",
      body: "Are you a cleaning company, holiday rental manager, estate agent or administrador? We are happy to work with you on maintenance and small repairs. First job with no call-out charge.",
      cta: "More about partnership",
      ctaHref: "/en/partners",
    },
    proof: [
      {
        label: "Trusted and personal",
        body: "A Dutch family business living around Castellón. One fixed point of contact who knows your home.",
      },
      {
        label: "We do what we say",
        body: "We turn up when we say we will. Photos via WhatsApp after every visit. A free quote upfront, and always an invoice afterwards.",
      },
      {
        label: "Where we work",
        body: "Grau de Castellón, Castellón, Benicàssim, Oropesa and the rest of the Costa Azahar.",
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
    partnerTeaser: {
      title: "Para empresas colaboradoras",
      body: "¿Eres una empresa de limpieza, gestor de alquiler vacacional, agencia inmobiliaria o administrador de fincas? Nos encanta colaborar en mantenimiento y pequeñas reparaciones. Primer encargo sin coste de desplazamiento.",
      cta: "Más sobre colaboración",
      ctaHref: "/es/partners",
    },
    proof: [
      {
        label: "Experiencia propia",
        body: "Foris nace de una empresa familiar con amplia experiencia inmobiliaria en los Países Bajos y en España, sobre todo en la Costa del Azahar. También alquilamos vivienda propia en Castellón.",
      },
      {
        label: "Cómo trabajamos",
        body: "Van der Meulen Foris B.V. es una empresa familiar neerlandesa con domicilio fiscal en el Grao de Castellón. Te enviamos un presupuesto sin compromiso por adelantado y, después, siempre una factura.",
      },
      {
        label: "Dónde trabajamos",
        body: "Mantenimiento y gestión de viviendas en el Grao de Castellón, el centro de Castellón y Benicàssim. A los compradores los acompañamos por la costa entre Vinaròs y Burriana.",
      },
    ],
  },
};
