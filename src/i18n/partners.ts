import type { Locale } from "@/lib/i18n";

type PartnersText = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: string;
  intro: string;
  forWhoTitle: string;
  forWhoItems: string[];
  howItWorksTitle: string;
  howItWorksSteps: { step: string; desc: string }[];
  referralsTitle: string;
  referralsBody: string;
  trialTitle: string;
  trialBody: string;
  trialNote: string;
  ctaTitle: string;
  ctaBody: string;
  ctaWhatsApp: string;
  ctaEmail: string;
};

export const partnersText: Record<Locale, PartnersText> = {
  nl: {
    meta: {
      title: "Voor partners · VDM Foris",
      description:
        "Samenwerking met schoonmaakbedrijven, vakantieverhuur beheerders, makelaars en administradores. Onderhoud en kleine reparaties voor jullie klanten in Castellón.",
    },
    eyebrow: "Voor partners",
    h1: "Samen zorgen voor woningen in Castellón.",
    intro:
      "Wij werken samen met schoonmaakbedrijven, vakantieverhuur beheerders, makelaars en administradores de fincas. Als jullie klanten onderhoud of kleine reparaties nodig hebben, kunnen jullie hen doorverwijzen of ons direct inschakelen.",
    forWhoTitle: "Voor wie",
    forWhoItems: [
      "Schoonmaakbedrijven die kleine gebreken tegenkomen",
      "Vakantieverhuur beheerders die snel iets gerepareerd moeten hebben",
      "Makelaars en estate agencies met klanten die lokaal onderhoud zoeken",
      "Administradores de fincas met eigenaren die een Nederlands of Engelstalig aanspreekpunt willen",
    ],
    howItWorksTitle: "Hoe het werkt",
    howItWorksSteps: [
      {
        step: "1. Jullie zien iets of een eigenaar heeft hulp nodig",
        desc: "Tijdens het werk of via jullie klanten: een kapotte kraan, een klemme persiana, iets wat gerepareerd moet worden.",
      },
      {
        step: "2. WhatsApp of email naar ons",
        desc: "Kort beschrijven wat er speelt, bij voorkeur met foto. We reageren snel.",
      },
      {
        step: "3. Wij geven een duidelijke prijs vooraf",
        desc: "Altijd een prijs of uurtarief vooraf, geen verrassingen. Jullie kunnen dit aan de eigenaar doorgeven of wij nemen direct contact op.",
      },
      {
        step: "4. Wij regelen het en houden jullie op de hoogte",
        desc: "We plannen het werk in, doen de klus en sturen foto's na afloop. Jullie weten waar het staat.",
      },
    ],
    referralsTitle: "Wederzijdse doorverwijzing",
    referralsBody:
      "Als wij eigenaren tegenkomen die jullie diensten nodig hebben (schoonmaak, vakantieverhuur beheer, administratie), verwijzen wij graag door. Andersom hetzelfde: als jullie klanten onderhoud of kleine reparaties nodig hebben, kunnen jullie hen naar ons doorverwijzen.",
    trialTitle: "Proefaanbieding",
    trialBody:
      "De eerste kleine reparatie of eerste woningcontrole die jullie doorgeven: geen uitrukkosten. Zo kunnen jullie en jullie klant zien hoe we werken.",
    trialNote: "Geldt voor de eerste opdracht per partner.",
    ctaTitle: "Laten we kennismaken.",
    ctaBody:
      "Stuur ons een bericht via WhatsApp of email. We reageren snel en maken graag afspraken over hoe we kunnen samenwerken.",
    ctaWhatsApp: "WhatsApp ons",
    ctaEmail: "info@vdmforis.com",
  },
  en: {
    meta: {
      title: "For partners · VDM Foris",
      description:
        "Partnership with cleaning companies, holiday rental managers, estate agents and administradores. Maintenance and small repairs for your clients in Castellón.",
    },
    eyebrow: "For partners",
    h1: "Looking after homes in Castellón, together.",
    intro:
      "We work with cleaning companies, holiday rental managers, estate agents and administradores de fincas. When your clients need maintenance or small repairs, you can refer them to us or bring us in directly.",
    forWhoTitle: "Who we work with",
    forWhoItems: [
      "Cleaning companies who come across small defects",
      "Holiday rental managers who need something fixed quickly",
      "Estate agents with clients looking for local maintenance",
      "Administradores de fincas with owners who want a Dutch or English-speaking contact",
    ],
    howItWorksTitle: "How it works",
    howItWorksSteps: [
      {
        step: "1. You spot something or an owner needs help",
        desc: "During your work or through your clients: a broken tap, a stuck shutter, something that needs fixing.",
      },
      {
        step: "2. WhatsApp or email us",
        desc: "Briefly describe what is going on, preferably with a photo. We reply quickly.",
      },
      {
        step: "3. We give a clear price upfront",
        desc: "Always a price or hourly rate upfront, no surprises. You can pass this on to the owner or we get in touch directly.",
      },
      {
        step: "4. We sort it out and keep you posted",
        desc: "We schedule the work, do the job and send photos afterwards. You know where things stand.",
      },
    ],
    referralsTitle: "Mutual referrals",
    referralsBody:
      "When we meet owners who need your services (cleaning, holiday rental management, administration), we are happy to refer them. The other way round too: when your clients need maintenance or small repairs, you can refer them to us.",
    trialTitle: "Trial offer",
    trialBody:
      "The first small repair or first house check you refer: no call-out charge. That way you and your client can see how we work.",
    trialNote: "Valid for the first job per partner.",
    ctaTitle: "Let's talk.",
    ctaBody:
      "Send us a message via WhatsApp or email. We reply quickly and are happy to discuss how we can work together.",
    ctaWhatsApp: "WhatsApp us",
    ctaEmail: "info@vdmforis.com",
  },
  es: {
    meta: {
      title: "Para empresas colaboradoras · VDM Foris",
      description:
        "Colaboración con empresas de limpieza, gestores de alquiler vacacional, agencias inmobiliarias y administradores de fincas. Mantenimiento y pequeñas reparaciones para sus clientes en Castellón.",
    },
    eyebrow: "Para empresas colaboradoras",
    h1: "Cuidamos de viviendas en Castellón, juntos.",
    intro:
      "Trabajamos con empresas de limpieza, gestores de alquiler vacacional, agencias inmobiliarias y administradores de fincas. Cuando sus clientes necesiten mantenimiento o pequeñas reparaciones, pueden derivarlos a nosotros o contratarnos directamente.",
    forWhoTitle: "Con quién trabajamos",
    forWhoItems: [
      "Empresas de limpieza que se encuentran con pequeños defectos",
      "Gestores de alquiler vacacional que necesitan reparar algo rápido",
      "Agencias inmobiliarias con clientes que buscan mantenimiento local",
      "Administradores de fincas con propietarios que quieren un interlocutor en neerlandés o inglés",
    ],
    howItWorksTitle: "Cómo funciona",
    howItWorksSteps: [
      {
        step: "1. Ustedes ven algo o un propietario necesita ayuda",
        desc: "Durante su trabajo o a través de sus clientes: un grifo roto, una persiana atascada, algo que hay que reparar.",
      },
      {
        step: "2. WhatsApp o email",
        desc: "Describan brevemente qué ocurre, preferiblemente con foto. Respondemos rápido.",
      },
      {
        step: "3. Damos un precio claro por adelantado",
        desc: "Siempre un precio o tarifa por hora por adelantado, sin sorpresas. Pueden transmitirlo al propietario o nosotros contactamos directamente.",
      },
      {
        step: "4. Nos encargamos e informamos",
        desc: "Planificamos el trabajo, hacemos el trabajo y enviamos fotos al terminar. Ustedes saben cómo está todo.",
      },
    ],
    referralsTitle: "Derivaciones mutuas",
    referralsBody:
      "Cuando conocemos a propietarios que necesitan sus servicios (limpieza, gestión de alquiler vacacional, administración), les derivamos con gusto. Al revés también: cuando sus clientes necesiten mantenimiento o pequeñas reparaciones, pueden derivarlos a nosotros.",
    trialTitle: "Oferta de prueba",
    trialBody:
      "La primera pequeña reparación o primera revisión de vivienda que nos deriven: sin coste de desplazamiento. Así ustedes y su cliente pueden ver cómo trabajamos.",
    trialNote: "Válido para el primer encargo por colaborador.",
    ctaTitle: "Hablemos.",
    ctaBody:
      "Envíennos un mensaje por WhatsApp o email. Respondemos rápido y estaremos encantados de hablar sobre cómo podemos colaborar.",
    ctaWhatsApp: "WhatsApp",
    ctaEmail: "info@vdmforis.com",
  },
};
