import type { Locale } from "@/lib/i18n";

type ServiceItem = {
  title: string;
  desc: string;
};

type OnderhoudText = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: string;
  intro: string;
  areas: string;
  servicesTitle: string;
  services: ServiceItem[];
  howItWorksTitle: string;
  howItWorksSteps: { step: string; desc: string }[];
  packagesTitle: string;
  packagesIntro: string;
  light: { name: string; price: string; freq: string; for: string; includes: string[] };
  standard: { name: string; price: string; freq: string; for: string; includes: string[] };
  villa: { name: string; price: string; freq: string; for: string; includes: string[] };
  allInclude: string;
  pricingCta: string;
  ctaTitle: string;
  ctaBody: string;
  ctaWhatsApp: string;
  ctaQuote: string;
};

export const onderhoudText: Record<Locale, OnderhoudText> = {
  nl: {
    meta: {
      title: "Onderhoud en woningbeheer in Castellón · VDM Foris",
      description:
        "Onderhoud, kleine reparaties, sleutelbeheer en woningcontroles in Grau de Castellón, Castellón de la Plana en Benicàssim. In het Nederlands geregeld, met foto's na elk bezoek.",
    },
    eyebrow: "Onderhoud en woningbeheer",
    h1: "Je huis in Castellón, altijd goed onderhouden.",
    intro:
      "Onderhoud, kleine reparaties en woningbeheer in Grau de Castellón, Castellón de la Plana en Benicàssim. Voor eigenaren die er niet altijd zelf zijn. In het Nederlands geregeld, met foto's en updates na elk bezoek via WhatsApp.",
    areas: "Werkgebied: Grau de Castellón, Castellón de la Plana, Benicàssim",
    servicesTitle: "Wat we doen",
    services: [
      {
        title: "Kleine reparaties",
        desc: "Lekkende kranen, klemmen persiana's, deuren die schrapen, stopcontacten, schilderijen ophangen. De klussen die je niet uitstelt als je er zelf woont.",
      },
      {
        title: "Schilderwerk en afwerking",
        desc: "Kamers overschilderen, kitwerk vernieuwen, kleine verfklusjes. Prijs vooraf afgesproken, altijd inclusief materiaal.",
      },
      {
        title: "Periodieke woningcontroles",
        desc: "Regelmatige checks terwijl je weg bent: water, elektra, vocht, sluitwerk en algemene staat. Met fotoverslag en korte toelichting.",
      },
      {
        title: "Sleutelbeheer",
        desc: "Wij bewaren je sleutels en openen de deur voor vakmensen, leveringen of gasten. Ook handig voor noodgevallen.",
      },
      {
        title: "Post en luchten",
        desc: "We halen je post op, laten je weten wat belangrijk is en luchten de woning om vocht en muffe lucht te voorkomen.",
      },
      {
        title: "Ondersteuning vakantieverhuur",
        desc: "Kleine reparaties en controles tussen gasten door, voor verhuurders en beheerders die een lokaal aanspreekpunt zoeken.",
      },
    ],
    howItWorksTitle: "Hoe het werkt",
    howItWorksSteps: [
      {
        step: "1. Stuur een bericht via WhatsApp",
        desc: "Beschrijf kort wat er speelt of stuur foto's. We reageren snel, ook als je in Nederland zit.",
      },
      {
        step: "2. Je krijgt vooraf een prijs",
        desc: "Altijd een duidelijke prijs of uurtarief vooraf, geen verrassingen achteraf.",
      },
      {
        step: "3. Wij regelen het",
        desc: "We plannen het werk in en houden je op de hoogte. Na afloop krijg je foto's via WhatsApp.",
      },
    ],
    packagesTitle: "Vaste pakketten voor woningbeheer",
    packagesIntro:
      "Voor eigenaren die niet permanent in Spanje wonen. Prijs per maand, inclusief sleutelbeheer en fotoverslag na elk bezoek.",
    light: {
      name: "Light",
      price: "59 euro",
      freq: "per maand",
      for: "Voor wie een paar keer per maand wil laten checken.",
      includes: [
        "2 bezoeken per maand",
        "Controle water, elektra, vocht en sluitwerk",
        "Foto's en kort verslag via WhatsApp",
        "Sleutelbeheer inbegrepen",
      ],
    },
    standard: {
      name: "Standard",
      price: "99 euro",
      freq: "per maand",
      for: "Voor wie regelmatig wil weten hoe het met de woning staat.",
      includes: [
        "4 bezoeken per maand",
        "Controle water, elektra, vocht en sluitwerk",
        "Post ophalen en doorgeven",
        "Luchten van de woning",
        "Foto's en verslag via WhatsApp",
        "Sleutelbeheer inbegrepen",
      ],
    },
    villa: {
      name: "Villa",
      price: "149 euro",
      freq: "per maand",
      for: "Voor wie ook de tuin en het zwembad visueel wil laten controleren.",
      includes: [
        "4 bezoeken per maand",
        "Controle water, elektra, vocht en sluitwerk",
        "Extra controle tuin en zwembad (visueel, geen onderhoud)",
        "Post ophalen en doorgeven",
        "Luchten van de woning",
        "Foto's en verslag via WhatsApp",
        "Sleutelbeheer inbegrepen",
      ],
    },
    allInclude: "Alle pakketten: betaling per maand, opzegbaar met een maand opzegtermijn.",
    pricingCta: "Bekijk alle prijzen en tarieven",
    ctaTitle: "Laten we kennismaken.",
    ctaBody:
      "Stuur ons een bericht via WhatsApp of vraag een offerte aan. We reageren binnen een werkdag.",
    ctaWhatsApp: "Stuur een WhatsApp",
    ctaQuote: "Vraag een offerte aan",
  },
  en: {
    meta: {
      title: "Maintenance and property care in Castellón · VDM Foris",
      description:
        "Maintenance, small repairs, key holding and house checks in Grau de Castellón, Castellón de la Plana and Benicàssim. Arranged in English, with photos after every visit.",
    },
    eyebrow: "Maintenance and property care",
    h1: "Your home in Castellón, always well maintained.",
    intro:
      "Maintenance, small repairs and property care in Grau de Castellón, Castellón de la Plana and Benicàssim. For owners who are not always here. Arranged in English, with photos and updates after every visit via WhatsApp.",
    areas: "Service area: Grau de Castellón, Castellón de la Plana, Benicàssim",
    servicesTitle: "What we do",
    services: [
      {
        title: "Small repairs",
        desc: "Dripping taps, stuck shutters, sticking doors, sockets, hanging pictures. The odd jobs you would not put off if you lived here.",
      },
      {
        title: "Painting and finishing",
        desc: "Repainting rooms, renewing silicone, small painting jobs. Price agreed upfront, always including materials.",
      },
      {
        title: "Regular house checks",
        desc: "Regular checks while you are away: water, power, damp, locks and general condition. With photos and a short explanation.",
      },
      {
        title: "Key holding",
        desc: "We keep your keys and open up for tradesmen, deliveries or guests. Also handy in emergencies.",
      },
      {
        title: "Post and airing out",
        desc: "We collect your post, let you know what is important and air the house to prevent damp and stale smells.",
      },
      {
        title: "Holiday rental support",
        desc: "Small repairs and checks between guests, for landlords and managers who need a local contact.",
      },
    ],
    howItWorksTitle: "How it works",
    howItWorksSteps: [
      {
        step: "1. Send a message via WhatsApp",
        desc: "Describe briefly what is going on or send photos. We reply quickly, even when you are in the Netherlands.",
      },
      {
        step: "2. You get a price upfront",
        desc: "Always a clear price or hourly rate upfront, no surprises afterwards.",
      },
      {
        step: "3. We take care of it",
        desc: "We schedule the work and keep you posted. Afterwards you get photos via WhatsApp.",
      },
    ],
    packagesTitle: "Fixed packages for property care",
    packagesIntro:
      "For owners who do not live in Spain full-time. Price per month, including key holding and photo reports after every visit.",
    light: {
      name: "Light",
      price: "59 euros",
      freq: "per month",
      for: "For those who want a check a couple of times a month.",
      includes: [
        "2 visits per month",
        "Check water, power, damp and locks",
        "Photos and short report via WhatsApp",
        "Key holding included",
      ],
    },
    standard: {
      name: "Standard",
      price: "99 euros",
      freq: "per month",
      for: "For those who want to know regularly how the home is doing.",
      includes: [
        "4 visits per month",
        "Check water, power, damp and locks",
        "Collect post and pass it on",
        "Air the house",
        "Photos and report via WhatsApp",
        "Key holding included",
      ],
    },
    villa: {
      name: "Villa",
      price: "149 euros",
      freq: "per month",
      for: "For those who also want the garden and pool checked visually.",
      includes: [
        "4 visits per month",
        "Check water, power, damp and locks",
        "Extra check of garden and pool (visual, not maintenance)",
        "Collect post and pass it on",
        "Air the house",
        "Photos and report via WhatsApp",
        "Key holding included",
      ],
    },
    allInclude: "All packages: pay monthly, cancel with one month's notice.",
    pricingCta: "See all prices and rates",
    ctaTitle: "Let's talk.",
    ctaBody:
      "Send us a message via WhatsApp or request a quote. We reply within one working day.",
    ctaWhatsApp: "Send a WhatsApp",
    ctaQuote: "Request a quote",
  },
  es: {
    meta: {
      title: "Mantenimiento y gestión de viviendas en Castellón · VDM Foris",
      description:
        "Mantenimiento, pequeñas reparaciones, custodia de llaves y revisiones en el Grao de Castellón, Castellón de la Plana y Benicàssim. Gestionado en español, con fotos después de cada visita.",
    },
    eyebrow: "Mantenimiento y gestión de viviendas",
    h1: "Tu casa en Castellón, siempre bien mantenida.",
    intro:
      "Mantenimiento, pequeñas reparaciones y gestión de viviendas en el Grao de Castellón, Castellón de la Plana y Benicàssim. Para propietarios que no siempre están aquí. Gestionado en español, con fotos y novedades después de cada visita por WhatsApp.",
    areas: "Zona de servicio: Grao de Castellón, Castellón de la Plana, Benicàssim",
    servicesTitle: "Qué hacemos",
    services: [
      {
        title: "Pequeñas reparaciones",
        desc: "Grifos que gotean, persianas atascadas, puertas que rozan, enchufes, colgar cuadros. Los trabajos que no aplazarías si vivieras aquí.",
      },
      {
        title: "Pintura y acabados",
        desc: "Pintar habitaciones, renovar siliconas, pequeños trabajos de pintura. Precio acordado por adelantado, siempre con el material incluido.",
      },
      {
        title: "Revisiones periódicas de la vivienda",
        desc: "Revisiones regulares mientras estás fuera: agua, luz, humedad, cierres y estado general. Con fotos y breve explicación.",
      },
      {
        title: "Custodia de llaves",
        desc: "Guardamos tus llaves y abrimos para profesionales, entregas o visitas. También útil en caso de emergencia.",
      },
      {
        title: "Correo y ventilación",
        desc: "Recogemos tu correo, te avisamos de lo importante y ventilamos la vivienda para evitar humedad y malos olores.",
      },
      {
        title: "Apoyo a alquiler vacacional",
        desc: "Pequeñas reparaciones y revisiones entre huéspedes, para propietarios y gestores que buscan un contacto local.",
      },
    ],
    howItWorksTitle: "Cómo funciona",
    howItWorksSteps: [
      {
        step: "1. Envía un mensaje por WhatsApp",
        desc: "Describe brevemente qué ocurre o envía fotos. Te respondemos rápido, aunque estés en los Países Bajos.",
      },
      {
        step: "2. Te damos el precio por adelantado",
        desc: "Siempre un precio claro o una tarifa por hora por adelantado, sin sorpresas después.",
      },
      {
        step: "3. Nosotros nos encargamos",
        desc: "Planificamos el trabajo y te mantenemos informado. Al terminar, recibes fotos por WhatsApp.",
      },
    ],
    packagesTitle: "Paquetes fijos de gestión de viviendas",
    packagesIntro:
      "Para propietarios que no viven todo el año en España. Precio por mes, con custodia de llaves e informe fotográfico después de cada visita.",
    light: {
      name: "Light",
      price: "59 euros",
      freq: "al mes",
      for: "Para quien quiere revisar la casa un par de veces al mes.",
      includes: [
        "2 visitas al mes",
        "Revisión de agua, luz, humedad y cierres",
        "Fotos y breve informe por WhatsApp",
        "Custodia de llaves incluida",
      ],
    },
    standard: {
      name: "Standard",
      price: "99 euros",
      freq: "al mes",
      for: "Para quien quiere saber con regularidad cómo está la vivienda.",
      includes: [
        "4 visitas al mes",
        "Revisión de agua, luz, humedad y cierres",
        "Recoger correo e informar",
        "Ventilar la vivienda",
        "Fotos e informe por WhatsApp",
        "Custodia de llaves incluida",
      ],
    },
    villa: {
      name: "Villa",
      price: "149 euros",
      freq: "al mes",
      for: "Para quien también quiere revisar visualmente el jardín y la piscina.",
      includes: [
        "4 visitas al mes",
        "Revisión de agua, luz, humedad y cierres",
        "Revisión extra del jardín y la piscina (visual, no mantenimiento)",
        "Recoger correo e informar",
        "Ventilar la vivienda",
        "Fotos e informe por WhatsApp",
        "Custodia de llaves incluida",
      ],
    },
    allInclude: "Todos los paquetes: pago mensual, cancelable con un mes de aviso previo.",
    pricingCta: "Ver todos los precios y tarifas",
    ctaTitle: "Hablemos.",
    ctaBody:
      "Envíanos un mensaje por WhatsApp o pide presupuesto. Te respondemos en un día laborable.",
    ctaWhatsApp: "Enviar un WhatsApp",
    ctaQuote: "Pide presupuesto",
  },
};
