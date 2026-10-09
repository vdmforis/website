import type { Locale } from "@/lib/i18n";

/**
 * Texts for the offerte, kennismaking and gids forms and their server actions.
 * Plain data, so it can be imported from client components and "use server" files.
 * Option values sent to the server are stable ids; the owner e-mail to Dennis
 * always shows the Dutch label.
 */

export function formLocale(value: unknown): Locale {
  return value === "en" || value === "es" ? value : "nl";
}

export const dienstIds = [
  "orientatie",
  "papierwinkel",
  "nieuwbouwtoezicht",
  "aankoopbegeleiding",
  "concierge",
  "anders",
] as const;
export type DienstId = (typeof dienstIds)[number];

export const dienstLabels: Record<Locale, Record<DienstId, string>> = {
  nl: {
    orientatie: "Oriëntatie & projectkeuze",
    papierwinkel: "Papierwinkel: NIE, CIF, bank",
    nieuwbouwtoezicht: "Nieuwbouwtoezicht",
    aankoopbegeleiding: "Volledige aankoopbegeleiding",
    concierge: "Concierge",
    anders: "Weet ik nog niet / iets anders",
  },
  en: {
    orientatie: "Orientation & choosing a project",
    papierwinkel: "Paperwork: NIE, CIF, bank",
    nieuwbouwtoezicht: "New-build supervision",
    aankoopbegeleiding: "Full purchase guidance",
    concierge: "Concierge",
    anders: "Not sure yet / something else",
  },
  es: {
    orientatie: "Orientación y elección de proyecto",
    papierwinkel: "Papeleo: NIE, CIF, banco",
    nieuwbouwtoezicht: "Supervisión de obra nueva",
    aankoopbegeleiding: "Acompañamiento completo en la compra",
    concierge: "Conserjería",
    anders: "Aún no lo sé / otra cosa",
  },
};

export const preferenceIds = ["weekdag-overdag", "weekdag-avond", "weekend"] as const;
export type PreferenceId = (typeof preferenceIds)[number];

export const preferenceLabels: Record<Locale, Record<PreferenceId, string>> = {
  nl: {
    "weekdag-overdag": "Doordeweeks overdag",
    "weekdag-avond": "Doordeweeks 's avonds",
    weekend: "In het weekend",
  },
  en: {
    "weekdag-overdag": "Weekdays, daytime",
    "weekdag-avond": "Weekday evenings",
    weekend: "At the weekend",
  },
  es: {
    "weekdag-overdag": "Entre semana, de día",
    "weekdag-avond": "Entre semana, por la tarde",
    weekend: "El fin de semana",
  },
};

export const processIds = ["orienterend", "zoekend", "op-het-oog", "al-gekocht"] as const;
export type ProcessId = (typeof processIds)[number];

export const processLabels: Record<Locale, Record<ProcessId, string>> = {
  nl: {
    orienterend: "Aan het oriënteren",
    zoekend: "Actief op zoek",
    "op-het-oog": "Heb een huis op het oog",
    "al-gekocht": "Al gekocht, in het traject",
  },
  en: {
    orienterend: "Getting my bearings",
    zoekend: "Actively looking",
    "op-het-oog": "I have a home in mind",
    "al-gekocht": "Already bought, mid-process",
  },
  es: {
    orienterend: "Me estoy informando",
    zoekend: "Buscando activamente",
    "op-het-oog": "Tengo una casa en mente",
    "al-gekocht": "Ya he comprado, estoy en pleno proceso",
  },
};

/** Labels, placeholders and notes shown in the forms. */
export const formUi = {
  nl: {
    name: "Je naam",
    namePlaceholder: "Voornaam en achternaam",
    email: "E-mailadres",
    emailPlaceholder: "jij@voorbeeld.nl",
    phone: "Telefoonnummer",
    phonePlaceholder: "+31 6 …",
    optional: "(optioneel)",
    sending: "Versturen…",
    received: "Aanvraag ontvangen",
    offerte: {
      legend: "Waar wil je een offerte voor?",
      message: "Korte toelichting",
      messagePlaceholder: "Bijvoorbeeld: regio, nieuwbouwproject, of waar je staat in het proces.",
      submit: "Vraag offerte aan",
      note: "Binnen één werkdag een offerte op maat. Vrijblijvend, je zit nergens aan vast.",
    },
    kennismaking: {
      preference: "Wanneer schikt het meestal?",
      noPreference: "Geen voorkeur",
      message: "Waar wil je het over hebben?",
      messagePlaceholder: "Bijvoorbeeld: regio, nieuwbouwproject, of waar je staat in het proces.",
      submit: "Vraag een kennismaking aan",
      note: "We stellen binnen één werkdag per e-mail een tijdstip voor. Gratis, 30 minuten, geen verplichtingen.",
    },
    gids: {
      process: "Waar sta je in het proces?",
      choose: "Maak een keuze",
      submit: "Stuur me de gids · gratis",
      note: "Je krijgt de PDF direct in je inbox. We sturen je hierna geen ongevraagde nieuwsbrieven.",
      successEyebrow: "Onderweg",
      successTitle: "De gids is gestuurd",
      questions: "Tijdens het lezen vragen?",
      whatsapp: "Stuur ons direct een WhatsApp",
    },
  },
  en: {
    name: "Your name",
    namePlaceholder: "First and last name",
    email: "Email address",
    emailPlaceholder: "you@example.com",
    phone: "Phone number",
    phonePlaceholder: "+44 7… or +34 6…",
    optional: "(optional)",
    sending: "Sending…",
    received: "Request received",
    offerte: {
      legend: "What would you like a quote for?",
      message: "A few words of context",
      messagePlaceholder: "For example: the area, a new-build project, or where you are in the process.",
      submit: "Request a quote",
      note: "A tailored quote within one working day. No obligation, you're not tied to anything.",
    },
    kennismaking: {
      preference: "When usually suits you?",
      noPreference: "No preference",
      message: "What would you like to talk about?",
      messagePlaceholder: "For example: the area, a new-build project, or where you are in the process.",
      submit: "Request an introductory call",
      note: "We'll suggest a time by email within one working day. Free, 30 minutes, no obligation.",
    },
    gids: {
      process: "Where are you in the process?",
      choose: "Choose one",
      submit: "Send me the guide · free",
      note: "The PDF (in Dutch) goes straight to your inbox. We won't send you unsolicited newsletters afterwards.",
      successEyebrow: "On its way",
      successTitle: "The guide has been sent",
      questions: "Questions while reading?",
      whatsapp: "Send us a WhatsApp",
    },
  },
  es: {
    name: "Tu nombre",
    namePlaceholder: "Nombre y apellidos",
    email: "Correo electrónico",
    emailPlaceholder: "tu@ejemplo.com",
    phone: "Teléfono",
    phonePlaceholder: "+34 6…",
    optional: "(opcional)",
    sending: "Enviando…",
    received: "Solicitud recibida",
    offerte: {
      legend: "¿Para qué quieres un presupuesto?",
      message: "Unas líneas de contexto",
      messagePlaceholder: "Por ejemplo: la zona, una promoción de obra nueva o en qué punto del proceso estás.",
      submit: "Pide presupuesto",
      note: "Un presupuesto a medida en un día laborable. Sin compromiso.",
    },
    kennismaking: {
      preference: "¿Cuándo te suele venir mejor?",
      noPreference: "Sin preferencia",
      message: "¿De qué te gustaría hablar?",
      messagePlaceholder: "Por ejemplo: la zona, una promoción de obra nueva o en qué punto del proceso estás.",
      submit: "Solicita una llamada",
      note: "Te proponemos una hora por correo en un día laborable. Gratis, 30 minutos, sin compromiso.",
    },
    gids: {
      process: "¿En qué punto del proceso estás?",
      choose: "Elige una opción",
      submit: "Envíame la guía · gratis",
      note: "Recibirás el PDF (en neerlandés) directamente en tu bandeja de entrada. Después no te enviaremos boletines que no hayas pedido.",
      successEyebrow: "En camino",
      successTitle: "Te hemos enviado la guía",
      questions: "¿Te surgen preguntas al leerla?",
      whatsapp: "Escríbenos por WhatsApp",
    },
  },
} satisfies Record<Locale, unknown>;

/** Messages returned by the server actions. */
export const actionTexts = {
  nl: {
    check: "Controleer je gegevens en probeer opnieuw.",
    name: "Vul je naam in",
    email: "Geen geldig e-mailadres",
    dienst: "Kies een dienst",
    failed: "Er ging iets mis bij het versturen. Mail ons gerust direct op info@vdmforis.com.",
    offerteSuccess:
      "Aanvraag ontvangen! Je hoort binnen één werkdag van ons, met een offerte op maat of eerst een paar korte vragen.",
    kennismakingSuccess:
      "Aanvraag ontvangen! We stellen binnen één werkdag per e-mail een concreet tijdstip voor.",
    gidsPdfFailed:
      "Er ging iets mis bij het samenstellen van de gids. Probeer het zo nog eens, of mail ons direct op info@vdmforis.com.",
    gidsFailed:
      "Er ging iets mis bij het versturen. Probeer het zo nog eens, of mail ons direct op info@vdmforis.com.",
    gidsSuccess: "Bedankt! De gids is onderweg naar je inbox. Geen mail binnen 5 minuten? Check je spam.",
    gidsDev: "Bedankt! De gids is onderweg naar je inbox. (Dev mode: e-mail niet daadwerkelijk verzonden.)",
  },
  en: {
    check: "Please check your details and try again.",
    name: "Please enter your name",
    email: "Please enter a valid email address",
    dienst: "Please choose a service",
    failed: "Something went wrong while sending. Feel free to email us directly at info@vdmforis.com.",
    offerteSuccess:
      "Request received! You'll hear from us within one working day, with a tailored quote or first a few short questions.",
    kennismakingSuccess:
      "Request received! We'll suggest a specific time by email within one working day.",
    gidsPdfFailed:
      "Something went wrong while putting the guide together. Please try again shortly, or email us directly at info@vdmforis.com.",
    gidsFailed:
      "Something went wrong while sending. Please try again shortly, or email us directly at info@vdmforis.com.",
    gidsSuccess:
      "Thank you! The guide (in Dutch) is on its way to your inbox. No email within 5 minutes? Check your spam folder.",
    gidsDev: "Thank you! The guide is on its way to your inbox. (Dev mode: email not actually sent.)",
  },
  es: {
    check: "Revisa tus datos e inténtalo de nuevo.",
    name: "Escribe tu nombre",
    email: "Introduce un correo electrónico válido",
    dienst: "Elige un servicio",
    failed: "Algo ha fallado al enviar. Escríbenos directamente a info@vdmforis.com.",
    offerteSuccess:
      "¡Solicitud recibida! Te responderemos en un día laborable, con un presupuesto a medida o antes con un par de preguntas breves.",
    kennismakingSuccess:
      "¡Solicitud recibida! Te propondremos una hora concreta por correo en un día laborable.",
    gidsPdfFailed:
      "Algo ha fallado al preparar la guía. Inténtalo de nuevo en un momento o escríbenos a info@vdmforis.com.",
    gidsFailed:
      "Algo ha fallado al enviar. Inténtalo de nuevo en un momento o escríbenos a info@vdmforis.com.",
    gidsSuccess:
      "¡Gracias! La guía (en neerlandés) va de camino a tu bandeja de entrada. ¿No te ha llegado en 5 minutos? Revisa la carpeta de spam.",
    gidsDev: "¡Gracias! La guía va de camino a tu bandeja de entrada. (Modo dev: el correo no se ha enviado.)",
  },
} satisfies Record<Locale, unknown>;
