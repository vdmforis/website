import type { Locale } from "@/lib/i18n";

export type LocalArea = "grau-de-castellon" | "castellon" | "benicassim";

type LocalText = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: string;
  intro: string;
  typicalTitle: string;
  typicalItems: string[];
  servicesTitle: string;
  servicesList: string;
  pricingLink: string;
  ctaTitle: string;
  ctaBody: string;
  ctaWhatsApp: string;
  ctaQuote: string;
};

type LocalContent = Record<LocalArea, LocalText>;

export const localContent: Record<Locale, LocalContent> = {
  nl: {
    "grau-de-castellon": {
      meta: {
        title: "Onderhoud en woningbeheer in Grau de Castellón · VDM Foris",
        description:
          "Lokaal onderhoud, reparaties en woningbeheer in Grau de Castellón. Wij kennen de buurt, spreken Nederlands en zijn er als jij er niet bent.",
      },
      eyebrow: "Grau de Castellón",
      h1: "Onderhoud en woningbeheer in Grau de Castellón.",
      intro:
        "Grau de Castellón is een badplaats met een mix van permanente bewoners en tweede woningen. Veel eigenaren zijn er niet het hele jaar, en juist dan is lokaal onderhoud belangrijk. Wij zijn gevestigd in Grau, spreken Nederlands en zorgen dat je woning het hele seizoen goed blijft.",
      typicalTitle: "Typisch voor Grau",
      typicalItems: [
        "Zout zeelucht: ramen, deurscharnieren en rolluiken vragen extra aandacht.",
        "Veel woningen staan maanden leeg: vocht, muffe lucht en ongedierte kunnen opspelen.",
        "Dicht bij de haven en het strand: ideaal om te wonen, maar ook om in de gaten te houden.",
      ],
      servicesTitle: "Wat we in Grau doen",
      servicesList:
        "Onderhoud en kleine reparaties, sleutelbeheer, periodieke woningcontroles, post ophalen en luchten, schilderwerk en afwerking. Voor eigenaren die er niet altijd zelf zijn.",
      pricingLink: "Bekijk alle prijzen en tarieven",
      ctaTitle: "Laten we kennismaken.",
      ctaBody:
        "Stuur ons een bericht via WhatsApp of vraag een offerte aan. We reageren binnen een werkdag.",
      ctaWhatsApp: "Stuur een WhatsApp",
      ctaQuote: "Vraag een offerte aan",
    },
    castellon: {
      meta: {
        title: "Onderhoud en woningbeheer in Castellón de la Plana · VDM Foris",
        description:
          "Lokaal onderhoud, reparaties en woningbeheer in Castellón de la Plana. Wij spreken Nederlands, kennen de stad en zorgen dat je woning goed blijft.",
      },
      eyebrow: "Castellón de la Plana",
      h1: "Onderhoud en woningbeheer in Castellón de la Plana.",
      intro:
        "Castellón de la Plana is de hoofdstad van de provincie, met zowel oude wijken in het centrum als nieuwere buurten aan de rand. Veel eigenaren wonen hier niet permanent of zijn er alleen in het seizoen. Wij zorgen voor onderhoud, controles en kleine reparaties, ook als jij er niet bent.",
      typicalTitle: "Typisch voor Castellón",
      typicalItems: [
        "Mix van oude en nieuwe bouw: verschillende onderhoudsbehoeften per wijk.",
        "Veel appartementen en stadspanden: sleutelbeheer en toegang coördineren is essentieel.",
        "Warm in de zomer, vochtig in de winter: goede ventilatie voorkomt problemen.",
      ],
      servicesTitle: "Wat we in Castellón doen",
      servicesList:
        "Onderhoud en kleine reparaties, sleutelbeheer, periodieke woningcontroles, post ophalen en luchten, schilderwerk en afwerking. Voor eigenaren die er niet altijd zelf zijn.",
      pricingLink: "Bekijk alle prijzen en tarieven",
      ctaTitle: "Laten we kennismaken.",
      ctaBody:
        "Stuur ons een bericht via WhatsApp of vraag een offerte aan. We reageren binnen een werkdag.",
      ctaWhatsApp: "Stuur een WhatsApp",
      ctaQuote: "Vraag een offerte aan",
    },
    benicassim: {
      meta: {
        title: "Onderhoud en woningbeheer in Benicàssim · VDM Foris",
        description:
          "Lokaal onderhoud, reparaties en woningbeheer in Benicàssim. Wij spreken Nederlands, kennen de kust en zorgen dat je woning goed blijft.",
      },
      eyebrow: "Benicàssim",
      h1: "Onderhoud en woningbeheer in Benicàssim.",
      intro:
        "Benicàssim is een toeristische badplaats met veel villa's, appartementen en tweede woningen. Het meeste van het jaar is het rustig, maar in de zomer druk. Veel eigenaren zijn er niet permanent, en dat vraagt om goed onderhoud en lokaal toezicht. Wij spreken Nederlands en zijn er als jij er niet bent.",
      typicalTitle: "Typisch voor Benicàssim",
      typicalItems: [
        "Veel villa's met tuin en zwembad: meer onderhoud, ook visuele controles.",
        "Direct aan zee: zoutaanslag op ramen, deurscharnieren en buitenkozijnen.",
        "Veel woningen leeg buiten het seizoen: vocht, ongedierte en verwaarlozing zijn risico's.",
        "Onweersbuien in najaar en winter: controle na storm voorkomt grotere problemen.",
      ],
      servicesTitle: "Wat we in Benicàssim doen",
      servicesList:
        "Onderhoud en kleine reparaties, sleutelbeheer, periodieke woningcontroles, post ophalen en luchten, schilderwerk en afwerking, visuele controle van tuin en zwembad. Voor eigenaren die er niet altijd zelf zijn.",
      pricingLink: "Bekijk alle prijzen en tarieven",
      ctaTitle: "Laten we kennismaken.",
      ctaBody:
        "Stuur ons een bericht via WhatsApp of vraag een offerte aan. We reageren binnen een werkdag.",
      ctaWhatsApp: "Stuur een WhatsApp",
      ctaQuote: "Vraag een offerte aan",
    },
  },
  en: {
    "grau-de-castellon": {
      meta: {
        title: "Maintenance and property care in Grau de Castellón · VDM Foris",
        description:
          "Local maintenance, repairs and property care in Grau de Castellón. We know the area, speak English and are there when you are not.",
      },
      eyebrow: "Grau de Castellón",
      h1: "Maintenance and property care in Grau de Castellón.",
      intro:
        "Grau de Castellón is a seaside town with a mix of permanent residents and second homes. Many owners are not here all year, and that is when local maintenance matters. We are based in Grau, speak English and make sure your home stays in good shape all season.",
      typicalTitle: "Typical for Grau",
      typicalItems: [
        "Salty sea air: windows, door hinges and shutters need extra attention.",
        "Many homes stand empty for months: damp, stale smells and pests can become problems.",
        "Close to the harbour and beach: great for living, but also for keeping an eye on.",
      ],
      servicesTitle: "What we do in Grau",
      servicesList:
        "Maintenance and small repairs, key holding, regular house checks, collecting post and airing out, painting and finishing. For owners who are not always here.",
      pricingLink: "See all prices and rates",
      ctaTitle: "Let's talk.",
      ctaBody:
        "Send us a message via WhatsApp or request a quote. We reply within one working day.",
      ctaWhatsApp: "Send a WhatsApp",
      ctaQuote: "Request a quote",
    },
    castellon: {
      meta: {
        title: "Maintenance and property care in Castellón de la Plana · VDM Foris",
        description:
          "Local maintenance, repairs and property care in Castellón de la Plana. We speak English, know the city and make sure your home stays in good shape.",
      },
      eyebrow: "Castellón de la Plana",
      h1: "Maintenance and property care in Castellón de la Plana.",
      intro:
        "Castellón de la Plana is the provincial capital, with both old neighbourhoods in the centre and newer areas on the outskirts. Many owners do not live here full-time or are only here in season. We handle maintenance, checks and small repairs, even when you are not here.",
      typicalTitle: "Typical for Castellón",
      typicalItems: [
        "Mix of old and new builds: different maintenance needs per area.",
        "Many flats and town houses: key holding and coordinating access is essential.",
        "Hot in summer, humid in winter: good ventilation prevents problems.",
      ],
      servicesTitle: "What we do in Castellón",
      servicesList:
        "Maintenance and small repairs, key holding, regular house checks, collecting post and airing out, painting and finishing. For owners who are not always here.",
      pricingLink: "See all prices and rates",
      ctaTitle: "Let's talk.",
      ctaBody:
        "Send us a message via WhatsApp or request a quote. We reply within one working day.",
      ctaWhatsApp: "Send a WhatsApp",
      ctaQuote: "Request a quote",
    },
    benicassim: {
      meta: {
        title: "Maintenance and property care in Benicàssim · VDM Foris",
        description:
          "Local maintenance, repairs and property care in Benicàssim. We speak English, know the coast and make sure your home stays in good shape.",
      },
      eyebrow: "Benicàssim",
      h1: "Maintenance and property care in Benicàssim.",
      intro:
        "Benicàssim is a seaside resort with many villas, flats and second homes. It is quiet most of the year, but busy in summer. Many owners are not here full-time, and that calls for good maintenance and local supervision. We speak English and are there when you are not.",
      typicalTitle: "Typical for Benicàssim",
      typicalItems: [
        "Many villas with gardens and pools: more maintenance, including visual checks.",
        "Right by the sea: salt deposits on windows, door hinges and exterior frames.",
        "Many homes empty out of season: damp, pests and neglect are risks.",
        "Storms in autumn and winter: checking after bad weather prevents bigger problems.",
      ],
      servicesTitle: "What we do in Benicàssim",
      servicesList:
        "Maintenance and small repairs, key holding, regular house checks, collecting post and airing out, painting and finishing, visual checks of garden and pool. For owners who are not always here.",
      pricingLink: "See all prices and rates",
      ctaTitle: "Let's talk.",
      ctaBody:
        "Send us a message via WhatsApp or request a quote. We reply within one working day.",
      ctaWhatsApp: "Send a WhatsApp",
      ctaQuote: "Request a quote",
    },
  },
  es: {
    "grau-de-castellon": {
      meta: {
        title: "Mantenimiento y gestión en el Grao de Castellón · VDM Foris",
        description:
          "Mantenimiento local, reparaciones y gestión de viviendas en el Grao de Castellón. Conocemos la zona, hablamos español y estamos ahí cuando tú no estás.",
      },
      eyebrow: "Grao de Castellón",
      h1: "Mantenimiento y gestión en el Grao de Castellón.",
      intro:
        "El Grao de Castellón es una localidad costera con mezcla de residentes permanentes y segundas residencias. Muchos propietarios no están aquí todo el año, y precisamente entonces es importante el mantenimiento local. Estamos en el Grao, hablamos español y nos aseguramos de que tu vivienda esté bien toda la temporada.",
      typicalTitle: "Típico del Grao",
      typicalItems: [
        "Aire marino salado: ventanas, bisagras de puertas y persianas necesitan atención extra.",
        "Muchas viviendas vacías durante meses: humedad, malos olores y plagas pueden aparecer.",
        "Cerca del puerto y la playa: ideal para vivir, pero también para vigilar.",
      ],
      servicesTitle: "Qué hacemos en el Grao",
      servicesList:
        "Mantenimiento y pequeñas reparaciones, custodia de llaves, revisiones periódicas, recoger correo y ventilar, pintura y acabados. Para propietarios que no siempre están aquí.",
      pricingLink: "Ver todos los precios y tarifas",
      ctaTitle: "Hablemos.",
      ctaBody:
        "Envíanos un mensaje por WhatsApp o pide presupuesto. Te respondemos en un día laborable.",
      ctaWhatsApp: "Enviar un WhatsApp",
      ctaQuote: "Pide presupuesto",
    },
    castellon: {
      meta: {
        title: "Mantenimiento y gestión en Castellón de la Plana · VDM Foris",
        description:
          "Mantenimiento local, reparaciones y gestión de viviendas en Castellón de la Plana. Hablamos español, conocemos la ciudad y nos aseguramos de que tu vivienda esté bien.",
      },
      eyebrow: "Castellón de la Plana",
      h1: "Mantenimiento y gestión en Castellón de la Plana.",
      intro:
        "Castellón de la Plana es la capital de la provincia, con barrios antiguos en el centro y zonas más nuevas en las afueras. Muchos propietarios no viven aquí todo el año o solo están en temporada. Nos encargamos del mantenimiento, revisiones y pequeñas reparaciones, también cuando tú no estás.",
      typicalTitle: "Típico de Castellón",
      typicalItems: [
        "Mezcla de construcción antigua y nueva: diferentes necesidades de mantenimiento por zona.",
        "Muchos pisos y viviendas urbanas: custodia de llaves y coordinación de acceso son esenciales.",
        "Calor en verano, humedad en invierno: una buena ventilación previene problemas.",
      ],
      servicesTitle: "Qué hacemos en Castellón",
      servicesList:
        "Mantenimiento y pequeñas reparaciones, custodia de llaves, revisiones periódicas, recoger correo y ventilar, pintura y acabados. Para propietarios que no siempre están aquí.",
      pricingLink: "Ver todos los precios y tarifas",
      ctaTitle: "Hablemos.",
      ctaBody:
        "Envíanos un mensaje por WhatsApp o pide presupuesto. Te respondemos en un día laborable.",
      ctaWhatsApp: "Enviar un WhatsApp",
      ctaQuote: "Pide presupuesto",
    },
    benicassim: {
      meta: {
        title: "Mantenimiento y gestión en Benicàssim · VDM Foris",
        description:
          "Mantenimiento local, reparaciones y gestión de viviendas en Benicàssim. Hablamos español, conocemos la costa y nos aseguramos de que tu vivienda esté bien.",
      },
      eyebrow: "Benicàssim",
      h1: "Mantenimiento y gestión en Benicàssim.",
      intro:
        "Benicàssim es una localidad turística costera con muchos chalets, pisos y segundas residencias. Durante la mayor parte del año está tranquila, pero en verano está muy concurrida. Muchos propietarios no están aquí permanentemente, y eso requiere buen mantenimiento y supervisión local. Hablamos español y estamos ahí cuando tú no estás.",
      typicalTitle: "Típico de Benicàssim",
      typicalItems: [
        "Muchos chalets con jardín y piscina: más mantenimiento, también revisiones visuales.",
        "Directamente en el mar: depósitos de sal en ventanas, bisagras y marcos exteriores.",
        "Muchas viviendas vacías fuera de temporada: humedad, plagas y dejadez son riesgos.",
        "Tormentas en otoño e invierno: revisión tras temporal previene problemas mayores.",
      ],
      servicesTitle: "Qué hacemos en Benicàssim",
      servicesList:
        "Mantenimiento y pequeñas reparaciones, custodia de llaves, revisiones periódicas, recoger correo y ventilar, pintura y acabados, revisión visual del jardín y la piscina. Para propietarios que no siempre están aquí.",
      pricingLink: "Ver todos los precios y tarifas",
      ctaTitle: "Hablemos.",
      ctaBody:
        "Envíanos un mensaje por WhatsApp o pide presupuesto. Te respondemos en un día laborable.",
      ctaWhatsApp: "Enviar un WhatsApp",
      ctaQuote: "Pide presupuesto",
    },
  },
};
