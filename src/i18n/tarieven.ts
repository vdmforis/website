import type { Locale } from "@/lib/i18n";

type PriceItem = {
  label: string;
  note?: string;
  price: string;
};

type TarievenText = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: string;
  intro: string;
  vatNote: string;
  hourlyTitle: string;
  hourlyItems: PriceItem[];
  packagesTitle: string;
  packagesIntro: string;
  light: { name: string; visits: string; price: string; for: string };
  standard: { name: string; visits: string; price: string; for: string };
  villa: { name: string; visits: string; price: string; for: string };
  allInclude: string;
  fixedTitle: string;
  fixedItems: PriceItem[];
  ctaTitle: string;
  ctaBody: string;
  ctaWhatsApp: string;
  ctaQuote: string;
};

export const tarievenText: Record<Locale, TarievenText> = {
  nl: {
    meta: {
      title: "Tarieven en prijzen · VDM Foris",
      description:
        "Transparante prijzen voor onderhoud, reparaties en woningbeheer in Castellón. Uurtarief €35, vaste pakketten vanaf €59 per maand.",
    },
    eyebrow: "Tarieven en prijzen",
    h1: "Duidelijke prijzen, geen verrassingen.",
    intro:
      "Alle prijzen zijn exclusief btw. Je krijgt altijd vooraf een prijs of uurtarief, en achteraf een factuur.",
    vatNote: "Alle prijzen exclusief btw",
    hourlyTitle: "Uurtarieven en minimumbedragen",
    hourlyItems: [
      {
        label: "Uurtarief",
        note: "Onderhoud, kleine reparaties en schilderwerk",
        price: "35 euro per uur",
      },
      {
        label: "Klussen van 8 uur of meer",
        note: "Volumekorting voor grotere opdrachten",
        price: "32 euro per uur",
      },
      {
        label: "Minimum per uitruk",
        note: "Eerste uur inclusief reiskosten binnen Grau, Castellón, Benicàssim",
        price: "49 euro",
      },
      {
        label: "Na het eerste uur",
        note: "Gefactureerd per half uur",
        price: "17,50 euro per half uur",
      },
      {
        label: "Spoed, weekend en feestdagen",
        note: "Toeslag op het normale uurtarief",
        price: "+50%",
      },
      {
        label: "Materiaal",
        note: "Inkoopprijs met een kleine opslag voor administratie",
        price: "Kostprijs +15%",
      },
      {
        label: "Losse woningcontrole",
        note: "Tot 45 minuten, met foto's en kort verslag",
        price: "35 euro",
      },
      {
        label: "Sleutelbeheer los",
        note: "Jaarlijks vooruit, inclusief in elk pakket",
        price: "12 euro per maand",
      },
      {
        label: "Woning openen voor aankomst of sluiten na vertrek",
        note: "Of openen voor een vakman of levering",
        price: "45 euro",
      },
      {
        label: "Een vakman of levering ontvangen",
        note: "Tot 1 uur, daarna per half uur",
        price: "35 euro",
      },
    ],
    packagesTitle: "Maandpakketten voor woningbeheer",
    packagesIntro:
      "Vaste prijs per maand. Alle pakketten inclusief sleutelbeheer, fotoverslag na elk bezoek en betaling per maand.",
    light: {
      name: "Light",
      visits: "2 bezoeken per maand",
      price: "59 euro per maand",
      for: "Voor wie een paar keer per maand wil laten checken.",
    },
    standard: {
      name: "Standard",
      visits: "4 bezoeken per maand",
      price: "99 euro per maand",
      for: "Voor wie regelmatig wil weten hoe het met de woning staat.",
    },
    villa: {
      name: "Villa",
      visits: "4 bezoeken per maand, inclusief tuin- en zwembadcontrole",
      price: "149 euro per maand",
      for: "Voor wie ook de tuin en het zwembad visueel wil laten controleren.",
    },
    allInclude: "Alle pakketten: betaling per maand, opzegbaar met een maand opzegtermijn.",
    fixedTitle: "Vaste prijzen voor specifieke klussen",
    fixedItems: [
      { label: "Een kraan vervangen", note: "Alleen arbeid", price: "59 euro" },
      { label: "Rolluikband vervangen", note: "Alleen arbeid", price: "55 euro" },
      {
        label: "Tot 3 schilderijen, spiegels of planken ophangen",
        note: "Alleen arbeid",
        price: "49 euro",
      },
      {
        label: "Kitwerk bad of douche vernieuwen",
        note: "Alleen arbeid",
        price: "59 euro",
      },
      {
        label: "Stortbakmechanisme repareren",
        note: "Alleen arbeid",
        price: "59 euro",
      },
      {
        label: "Kamer tot 12 m² schilderen",
        note: "Muren wit, verf inbegrepen",
        price: "249 euro",
      },
    ],
    ctaTitle: "Vraag een offerte aan.",
    ctaBody:
      "Stuur ons een bericht via WhatsApp of vraag een offerte aan. We reageren binnen een werkdag.",
    ctaWhatsApp: "Stuur een WhatsApp",
    ctaQuote: "Vraag een offerte aan",
  },
  en: {
    meta: {
      title: "Prices and rates · VDM Foris",
      description:
        "Transparent prices for maintenance, repairs and property care in Castellón. Hourly rate €35, fixed packages from €59 per month.",
    },
    eyebrow: "Prices and rates",
    h1: "Clear prices, no surprises.",
    intro:
      "All prices are excluding VAT. You always get a price or hourly rate upfront, and an invoice afterwards.",
    vatNote: "All prices excluding VAT",
    hourlyTitle: "Hourly rates and minimum charges",
    hourlyItems: [
      {
        label: "Hourly rate",
        note: "Maintenance, small repairs and painting",
        price: "€35 per hour",
      },
      {
        label: "Jobs of 8 hours or more",
        note: "Volume discount for larger projects",
        price: "€32 per hour",
      },
      {
        label: "Minimum call-out charge",
        note: "First hour including travel within Grau, Castellón, Benicàssim",
        price: "€49",
      },
      {
        label: "After the first hour",
        note: "Charged per half hour",
        price: "€17.50 per half hour",
      },
      {
        label: "Urgent, weekends and public holidays",
        note: "Surcharge on the normal hourly rate",
        price: "+50%",
      },
      {
        label: "Materials",
        note: "Purchase price with a small mark-up for administration",
        price: "Cost +15%",
      },
      {
        label: "Single house check",
        note: "Up to 45 minutes, with photos and a short report",
        price: "€35",
      },
      {
        label: "Key holding only",
        note: "Paid annually, included in every package",
        price: "€12 per month",
      },
      {
        label: "Open the house before arrival or close after departure",
        note: "Or open for a tradesman or delivery",
        price: "€45",
      },
      {
        label: "Let in a tradesman or delivery",
        note: "Up to 1 hour, then per half hour",
        price: "€35",
      },
    ],
    packagesTitle: "Monthly packages for property care",
    packagesIntro:
      "Fixed price per month. All packages include key holding, photo reports after every visit and monthly payment.",
    light: {
      name: "Light",
      visits: "2 visits per month",
      price: "€59 per month",
      for: "For those who want a check a couple of times a month.",
    },
    standard: {
      name: "Standard",
      visits: "4 visits per month",
      price: "€99 per month",
      for: "For those who want to know regularly how the home is doing.",
    },
    villa: {
      name: "Villa",
      visits: "4 visits per month, including garden and pool check",
      price: "€149 per month",
      for: "For those who also want the garden and pool checked visually.",
    },
    allInclude: "All packages: pay monthly, cancel with one month's notice.",
    fixedTitle: "Fixed prices for specific jobs",
    fixedItems: [
      { label: "Replace a tap", note: "Labour only", price: "€59" },
      { label: "Replace shutter strap", note: "Labour only", price: "€55" },
      {
        label: "Hang up to 3 pictures, mirrors or shelves",
        note: "Labour only",
        price: "€49",
      },
      {
        label: "Renew silicone in bath or shower",
        note: "Labour only",
        price: "€59",
      },
      {
        label: "Repair cistern mechanism",
        note: "Labour only",
        price: "€59",
      },
      {
        label: "Paint a room up to 12 m²",
        note: "Walls white, paint included",
        price: "€249",
      },
    ],
    ctaTitle: "Request a quote.",
    ctaBody:
      "Send us a message via WhatsApp or request a quote. We reply within one working day.",
    ctaWhatsApp: "Send a WhatsApp",
    ctaQuote: "Request a quote",
  },
  es: {
    meta: {
      title: "Tarifas y precios · VDM Foris",
      description:
        "Precios transparentes para mantenimiento, reparaciones y gestión de viviendas en Castellón. Tarifa por hora 35 euros, paquetes fijos desde 59 euros al mes.",
    },
    eyebrow: "Tarifas y precios",
    h1: "Precios claros, sin sorpresas.",
    intro:
      "Todos los precios son sin IVA. Siempre te damos un precio o una tarifa por hora por adelantado, y después una factura.",
    vatNote: "Todos los precios sin IVA",
    hourlyTitle: "Tarifas por hora y mínimos",
    hourlyItems: [
      {
        label: "Tarifa por hora",
        note: "Mantenimiento, pequeñas reparaciones y pintura",
        price: "35 euros por hora",
      },
      {
        label: "Trabajos de 8 horas o más",
        note: "Descuento por volumen para proyectos más grandes",
        price: "32 euros por hora",
      },
      {
        label: "Salida mínima",
        note: "Primera hora incluido el desplazamiento dentro del Grao, Castellón, Benicàssim",
        price: "49 euros",
      },
      {
        label: "Después de la primera hora",
        note: "Se factura por media hora",
        price: "17,50 euros por media hora",
      },
      {
        label: "Urgente, fines de semana y festivos",
        note: "Recargo sobre la tarifa normal por hora",
        price: "+50%",
      },
      {
        label: "Materiales",
        note: "Precio de compra con un pequeño recargo para administración",
        price: "Coste +15%",
      },
      {
        label: "Revisión suelta de la vivienda",
        note: "Hasta 45 minutos, con fotos e informe breve",
        price: "35 euros",
      },
      {
        label: "Custodia de llaves sola",
        note: "Facturación anual, incluida en todos los paquetes",
        price: "12 euros al mes",
      },
      {
        label: "Abrir la casa antes de su llegada o cerrarla tras su salida",
        note: "O carrarla tras una visita",
        price: "45 euros",
      },
      {
        label: "Recibir a un técnico o una entrega",
        note: "Hasta 1 hora, después por media hora",
        price: "35 euros",
      },
    ],
    packagesTitle: "Paquetes mensuales de gestión de viviendas",
    packagesIntro:
      "Precio fijo al mes. Todos los paquetes incluyen custodia de llaves, informe fotográfico después de cada visita y pago mensual.",
    light: {
      name: "Light",
      visits: "2 visitas al mes",
      price: "59 euros al mes",
      for: "Para quien quiere revisar la casa un par de veces al mes.",
    },
    standard: {
      name: "Standard",
      visits: "4 visitas al mes",
      price: "99 euros al mes",
      for: "Para quien quiere saber con regularidad cómo está la vivienda.",
    },
    villa: {
      name: "Villa",
      visits: "4 visitas al mes, con revisión del jardín y la piscina",
      price: "149 euros al mes",
      for: "Para quien también quiere revisar visualmente el jardín y la piscina.",
    },
    allInclude: "Todos los paquetes: pago mensual, cancelable con un mes de aviso previo.",
    fixedTitle: "Precios fijos para trabajos específicos",
    fixedItems: [
      { label: "Cambiar un grifo", note: "Solo mano de obra", price: "59 euros" },
      { label: "Cambiar la cinta de una persiana", note: "Solo mano de obra", price: "55 euros" },
      {
        label: "Colgar hasta 3 cuadros, espejos o estantes",
        note: "Solo mano de obra",
        price: "49 euros",
      },
      {
        label: "Renovar la silicona de bañera o ducha",
        note: "Solo mano de obra",
        price: "59 euros",
      },
      {
        label: "Reparar el mecanismo de una cisterna",
        note: "Solo mano de obra",
        price: "59 euros",
      },
      {
        label: "Pintar una habitación hasta 12 m²",
        note: "Paredes en blanco, pintura incluida",
        price: "249 euros",
      },
    ],
    ctaTitle: "Pide presupuesto.",
    ctaBody:
      "Envíanos un mensaje por WhatsApp o pide presupuesto. Te respondemos en un día laborable.",
    ctaWhatsApp: "Enviar un WhatsApp",
    ctaQuote: "Pide presupuesto",
  },
};
