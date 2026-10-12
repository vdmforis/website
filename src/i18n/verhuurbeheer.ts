import type { Locale } from "@/lib/i18n";

type VerhuurbeheerText = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: string;
  intro: string;
  longTermNote: string;
  howItWorksTitle: string;
  howItWorksSteps: { step: string; desc: string }[];
  whatsIncludedTitle: string;
  whatsIncludedItems: string[];
  pricingTitle: string;
  pricingBody: string;
  ctaTitle: string;
  ctaBody: string;
  ctaWhatsApp: string;
  ctaQuote: string;
};

export const verhuurbeheerText: Record<Locale, VerhuurbeheerText> = {
  nl: {
    meta: {
      title: "Verhuurbeheer in Castellón · VDM Foris",
      description:
        "Volledig verhuurbeheer voor particuliere verhuurders in Grau de Castellón, Castellón de la Plana en Benicàssim. Van huurder zoeken tot onderhoud, wij regelen alles.",
    },
    eyebrow: "Verhuurbeheer",
    h1: "Jouw woning verhuren, zonder gedoe.",
    intro:
      "Wij zitten tussen jou als eigenaar en de huurder in en regelen alles: van het vinden en screenen van een huurder tot het onderhoud en de dagelijkse contacten. Voor eigenaren die willen verhuren zonder zelf alles te moeten regelen.",
    longTermNote:
      "Wij richten ons op verhuur voor de langere termijn. Geen vakantieverhuur.",
    howItWorksTitle: "Hoe het werkt",
    howItWorksSteps: [
      {
        step: "1. Wij zoeken en screenen de huurder",
        desc: "We plaatsen de advertentie, doen de bezichtigingen en controleren inkomen, werkgeversverklaring en referenties.",
      },
      {
        step: "2. Contract en borg regelen we",
        desc: "Huurcontract opstellen, borgsom innen en bewaren, en alles volgens de regels vastleggen.",
      },
      {
        step: "3. Oplevering met foto's",
        desc: "Inventaris opmaken, staat van de woning fotograferen en sleutels overhandigen. Alles gedocumenteerd.",
      },
      {
        step: "4. Huur incasseren en contact zijn",
        desc: "Maandelijkse huur innen, doorstorten naar jou, en het aanspreekpunt zijn voor de huurder bij vragen of problemen.",
      },
      {
        step: "5. Onderhoud en reparaties",
        desc: "Kleine reparaties coördineren, vakmensen inschakelen en ervoor zorgen dat de woning goed blijft.",
      },
    ],
    whatsIncludedTitle: "Wat je krijgt",
    whatsIncludedItems: [
      "Huurder zoeken en screenen (advertentie, bezichtigingen, inkomen en referenties controleren)",
      "Huurcontract opstellen en ondertekenen",
      "Borgsom innen en beheren",
      "Oplevering en inventaris met foto's",
      "Maandelijkse huurincasso en doorstorting naar jou",
      "Aanspreekpunt voor de huurder",
      "Coördinatie van onderhoud en reparaties",
      "Contact met je in het Nederlands",
    ],
    pricingTitle: "Prijs",
    pricingBody:
      "De prijs hangt af van de woning en het type verhuur. Stuur ons een bericht en we bespreken wat bij jouw situatie past.",
    ctaTitle: "Laten we kennismaken.",
    ctaBody:
      "Stuur ons een bericht via WhatsApp of vraag een offerte aan. We reageren binnen een werkdag.",
    ctaWhatsApp: "Stuur een WhatsApp",
    ctaQuote: "Vraag een offerte aan",
  },
  en: {
    meta: {
      title: "Rental management in Castellón · VDM Foris",
      description:
        "Full rental management for private landlords in Grau de Castellón, Castellón de la Plana and Benicàssim. From finding a tenant to maintenance, we take care of everything.",
    },
    eyebrow: "Rental management",
    h1: "Rent out your home, without the hassle.",
    intro:
      "We sit between you as the owner and the tenant and take care of everything: from finding and screening a tenant to maintenance and day-to-day contact. For owners who want to rent out without having to manage everything themselves.",
    longTermNote:
      "We focus on long-term rentals. No holiday lets.",
    howItWorksTitle: "How it works",
    howItWorksSteps: [
      {
        step: "1. We find and screen the tenant",
        desc: "We post the advert, do the viewings and check income, employer references and past landlord references.",
      },
      {
        step: "2. We handle the contract and deposit",
        desc: "Draw up the tenancy agreement, collect and hold the deposit, and record everything properly.",
      },
      {
        step: "3. Handover with photos",
        desc: "Create an inventory, photograph the condition of the property and hand over the keys. Everything documented.",
      },
      {
        step: "4. Collect rent and be the contact",
        desc: "Collect the monthly rent, transfer it to you, and be the point of contact for the tenant when they have questions or problems.",
      },
      {
        step: "5. Maintenance and repairs",
        desc: "Coordinate small repairs, bring in tradespeople and make sure the property stays in good condition.",
      },
    ],
    whatsIncludedTitle: "What you get",
    whatsIncludedItems: [
      "Finding and screening a tenant (advert, viewings, checking income and references)",
      "Drawing up and signing the tenancy agreement",
      "Collecting and managing the deposit",
      "Handover and inventory with photos",
      "Monthly rent collection and transfer to you",
      "Point of contact for the tenant",
      "Coordinating maintenance and repairs",
      "Contact with you in Dutch or English",
    ],
    pricingTitle: "Price",
    pricingBody:
      "The price depends on the property and the type of rental. Send us a message and we will discuss what suits your situation.",
    ctaTitle: "Let's talk.",
    ctaBody:
      "Send us a message via WhatsApp or request a quote. We reply within one working day.",
    ctaWhatsApp: "Send a WhatsApp",
    ctaQuote: "Request a quote",
  },
  es: {
    meta: {
      title: "Gestión de alquileres en Castellón · VDM Foris",
      description:
        "Gestión completa de alquileres para propietarios particulares en el Grao de Castellón, Castellón de la Plana y Benicàssim. Desde buscar inquilino hasta el mantenimiento, nos encargamos de todo.",
    },
    eyebrow: "Gestión de alquileres",
    h1: "Alquila tu vivienda, sin complicaciones.",
    intro:
      "Nos situamos entre tú como propietario y el inquilino y nos encargamos de todo: desde buscar y seleccionar un inquilino hasta el mantenimiento y el contacto diario. Para propietarios que quieren alquilar sin tener que gestionarlo todo ellos mismos.",
    longTermNote:
      "Nos centramos en alquileres de larga temporada. No alquiler vacacional.",
    howItWorksTitle: "Cómo funciona",
    howItWorksSteps: [
      {
        step: "1. Buscamos y seleccionamos al inquilino",
        desc: "Publicamos el anuncio, hacemos las visitas y comprobamos ingresos, referencias laborales y referencias de anteriores propietarios.",
      },
      {
        step: "2. Nos encargamos del contrato y la fianza",
        desc: "Redactar el contrato de arrendamiento, cobrar y custodiar la fianza, y registrar todo según las normas.",
      },
      {
        step: "3. Entrega con fotos",
        desc: "Hacer inventario, fotografiar el estado de la vivienda y entregar las llaves. Todo documentado.",
      },
      {
        step: "4. Cobrar el alquiler y ser el contacto",
        desc: "Cobrar el alquiler mensual, transferirlo a ti y ser el punto de contacto del inquilino para preguntas o problemas.",
      },
      {
        step: "5. Mantenimiento y reparaciones",
        desc: "Coordinar pequeñas reparaciones, contratar profesionales y asegurarnos de que la vivienda se mantiene bien.",
      },
    ],
    whatsIncludedTitle: "Qué incluye",
    whatsIncludedItems: [
      "Buscar y seleccionar inquilino (anuncio, visitas, comprobar ingresos y referencias)",
      "Redactar y firmar el contrato de arrendamiento",
      "Cobrar y gestionar la fianza",
      "Entrega e inventario con fotos",
      "Cobro mensual del alquiler y transferencia a ti",
      "Punto de contacto para el inquilino",
      "Coordinación de mantenimiento y reparaciones",
      "Contacto contigo en español",
    ],
    pricingTitle: "Precio",
    pricingBody:
      "El precio depende de la vivienda y el tipo de alquiler. Envíanos un mensaje y hablamos de lo que encaja con tu situación.",
    ctaTitle: "Hablemos.",
    ctaBody:
      "Envíanos un mensaje por WhatsApp o pide presupuesto. Te respondemos en un día laborable.",
    ctaWhatsApp: "Enviar un WhatsApp",
    ctaQuote: "Pide presupuesto",
  },
};
