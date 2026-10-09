import Image from "next/image";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";
import { localizedPath, type Locale } from "@/lib/i18n";

type Pkg = {
  id: string;
  badge: string;
  title: string;
  intro: string;
  includes: string[];
  forWhom: string;
};

type DienstenText = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: string;
  intro: string;
  nowTitle: string;
  nowCount: string;
  quoteCta: string;
  forWhom: string;
  includes: string;
  includesSoon: string;
  availableNow: Pkg[];
  soonTitle: string;
  soonTag: string;
  fromQ3: Pkg;
  soonNote: string;
  newBuild: {
    imageAlt: string;
    eyebrow: string;
    title: string;
    offPlan: React.ReactNode;
    p1: string;
    p2: string;
    p3Before: string;
    p3Link: string;
    p3After: string;
  };
  faqEyebrow: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
};

export const dienstenText: Record<Locale, DienstenText> = {
  nl: {
    meta: {
      title: "Diensten · Foris",
      description:
        "Vier diensten die we vandaag al leveren: oriëntatie & coaching, papierwinkel (NIE/CIF/bank), nieuwbouwtoezicht en concierge. Volledige aankoopbegeleiding volgt zodra onze RAICV-vergunning binnen is.",
    },
    eyebrow: "Diensten",
    h1: "Wat we vandaag al voor je doen, en wat eraan komt.",
    intro:
      "We werken aan onze RAICV-vergunning voor volledige aankoopbegeleiding. Ondertussen zijn er vier diensten waarmee we al wel kunnen helpen: coaching, papierwinkel, bouwtoezicht en concierge. Altijd een offerte vooraf, en wij werken uitsluitend voor jou.",
    nowTitle: "Nu beschikbaar",
    nowCount: "Vier diensten",
    quoteCta: "Vraag een offerte aan →",
    forWhom: "Voor wie? ",
    includes: "Wat zit erin",
    includesSoon: "Wat komt erin",
    availableNow: [
      {
        id: "orientatie",
        badge: "Coaching · Vanaf vandaag",
        title: "Oriëntatie & strategie-coaching",
        intro:
          "Voor iedereen die nog niet zeker weet of dit het moment is, of dit de juiste regio is, of wij de juiste club zijn. Coaching en kennisoverdracht, geen makelaardij.",
        includes: [
          "Anderhalf uur intakegesprek (videocall of fysiek in Castellón)",
          "Persoonlijke regio-gids op maat (PDF): wijken, prijsranges, infrastructuur, wat te vermijden",
          "Stappenplan met de juiste volgorde voor NIE / bankrekening / modelo 036",
          "Warme intro's naar onze gestor, advocaat en bank, geen koude bel-rondjes",
        ],
        forWhom:
          "Je oriënteert je nog. Je wil eerst de markt begrijpen voordat je iets vastlegt.",
      },
      {
        id: "papierwinkel",
        badge: "Papierwinkel · Vanaf vandaag",
        title: "NIE, CIF, bank, modelo 036",
        intro:
          "Je hebt al gekocht, of bent vlak voor sluiting, en verzandt in de papierwinkel. Wij coördineren met onze gestor, vertalen, regelen afspraken en zorgen dat de juiste documenten op de juiste plek op het juiste moment liggen.",
        includes: [
          "NIE-aanvraag voorbereiden en begeleiden (Spaanse consul of in Spanje)",
          "Spaanse bankrekening openen, met Nederlandstalige begeleiding bij compliance-vragen",
          "Modelo 036 / 030, voor zowel privépersonen als Nederlandse B.V.'s",
          "Beëdigde vertalingen coördineren (notariële akte, KvK-uittreksel, UBO)",
          "Apostille-traject begeleiden",
        ],
        forWhom:
          "Je bent al begonnen aan een aankoop en wil de papierwinkel niet zelf uitzoeken, of je hebt net gekocht en wil zorgen dat je administratie kloppend is.",
      },
      {
        id: "nieuwbouwtoezicht",
        badge: "Toezicht · Vanaf vandaag",
        title: "Nieuwbouwtoezicht & oplevering",
        intro:
          "Heb je nieuwbouw gekocht maar zit je in Nederland? Wij zijn jouw ogen op de bouwplaats. Geen verkoper-belang, geen bouwer-belang, gewoon eerlijke rapportage.",
        includes: [
          "Bouwbezoek met fotorapport en korte toelichting in het Nederlands",
          "Aval bancair en deelbetalingen tegenhouden tegen contract",
          "Opleveringsinspectie (snagging) met checklist van defecten",
          "Coördinatie van herstel met de bouwer namens jou",
          "Aanwezigheid bij de oplevering als je niet kunt",
        ],
        forWhom:
          "Je hebt nieuwbouw gekocht bij Metrovacesa, AEDAS, Avanza Urbana, ARQURA of een vergelijkbare ontwikkelaar en je wil onafhankelijk toezicht naast de verkoper.",
      },
      {
        id: "concierge",
        badge: "Concierge · Vanaf vandaag",
        title: "Concierge: sleutel- en huisbeheer",
        intro:
          "Zorg dat je huis blijft draaien terwijl jij in Nederland zit. Drie niveaus, afhankelijk van hoe gemoedelijk je het wil.",
        includes: [
          "Light: sleutelbeheer, maandelijkse visuele check, jaarafrekening nutsvoorzieningen",
          "Standard: bovenstaande + tweewekelijkse check, post afhandelen, alarmrespons",
          "Villa: bovenstaande + wekelijkse check, klusjescoördinatie, 24u-inzet bij calamiteit",
        ],
        forWhom:
          "Je woont niet permanent in Spanje en je wil niet aan de andere kant van Europa hoeven uitzoeken wie er nu weer iets met de boiler moet doen.",
      },
    ],
    soonTitle: "In voorbereiding · na RAICV-registratie",
    soonTag: "Na RAICV",
    fromQ3: {
      id: "aankoopbegeleiding",
      badge: "Volledig traject",
      title: "Volledige aankoopbegeleiding",
      intro:
        "Het hele traject van zoekprofiel tot sleuteloverdracht. Wij doen het werk, jij neemt de beslissingen. Looptijd doorgaans 3 tot 6 maanden.",
      includes: [
        "Zoekprofiel scherpstellen en actief op zoek (eigen netwerk + lokale Spaanse makelaars + nieuwbouwontwikkelaars)",
        "Bezichtigingen: fysiek door ons, of videocall mét ons erbij",
        "Bod- en onderhandelingsstrategie",
        "Juridische check van het contract door een Spaanse advocaat (inbegrepen)",
        "NIE en CIF (modelo 030 / 036): geregeld, niet alleen toegelicht",
        "Bankrekening openen en geld overmaken naar Spanje",
        "Begeleiding op de dag van de notaris, met Nederlandstalige uitleg op locatie",
        "Sleuteloverdracht, registratie en finale checks",
      ],
      forWhom:
        "Je hebt besloten dat je gaat kopen en je wil dat het ordentelijk gaat, zonder zelf de hele papierwinkel uit te zoeken.",
    },
    soonNote:
      "Wil je vooraan staan zodra dit pakket open gaat? Plan nu een vrijblijvend gesprek, dan zetten we je op de lijst en houden we je op de hoogte van onze RAICV-mijlpaal.",
    newBuild: {
      imageAlt: "Mediterrane woonstraat met zee-uitzicht aan de Costa del Azahar",
      eyebrow: "Speerpunt",
      title: "Nieuwbouw aan de Costa del Azahar",
      offPlan: (
        <>
          Internationaal vaak <em>off-plan</em> genoemd: kopen vóór oplevering.
        </>
      ),
      p1: "Tussen Vinaròs en Burriana wordt op dit moment massief gebouwd. Metrovacesa, AEDAS, Avanza Urbana en ARQURA hebben in 2025 alleen al meer dan 1.250 nieuwe woningen in de pijplijn gezet, een groei van bijna 26% in één jaar. Mooi voor de keuze, maar nieuwbouw kopen heeft eigen risico's die de meeste kopers onderschatten.",
      p2: "Vier deelbetalingen, een bouwlicentie, een aval bancair, oplevering, snagging, registratie: allemaal kunnen ze fout gaan, en allemaal staan ze keurig in een Spaans contract dat je waarschijnlijk niet leest. Als familiebedrijf met ruime vastgoedervaring in Nederland en Spanje, met name aan de Costa del Azahar, kennen we deze trajecten van binnenuit en weten we precies waar de scherpe randjes zitten.",
      p3Before: "Heb je al nieuwbouw gekocht? Vraag ons ",
      p3Link: "Nieuwbouwtoezicht",
      p3After: ", dat kunnen we nu al doen.",
    },
    faqEyebrow: "Veelgestelde vragen",
    faqTitle: "Wat klanten vooraf willen weten",
    faqs: [
      {
        q: "Waarom is de volledige aankoopbegeleiding er nog niet?",
        a: "Wettelijk mogen we pas actief namens een koper zoeken en onderhandelen zodra we ingeschreven staan in het RAICV, het verplichte vastgoedregister van de Comunitat Valenciana sinds oktober 2022. Onze inschrijving (inclusief 200-uursopleiding, verzekeringen en caución) is in voorbereiding; de aanvraag dienen we eind 2026 in. We willen dit liever goed doen dan snel.",
      },
      {
        q: "Hoe lang duurt een aankoop van begin tot sleutel?",
        a: "Bij bestaande bouw: doorgaans 3 maanden. Bij nieuwbouw (off-plan): 9 tot 18 maanden, afhankelijk van bouwfase. Het traject van NIE / CIF / bankrekening duurt zelf al snel 4 tot 8 weken. Dat starten we daarom als eerste, parallel met het zoeken.",
      },
      {
        q: "Werken jullie ook buiten de Costa del Azahar?",
        a: "Onze sweet spot is de kust van Vinaròs tot Burriana. We doen ook ad-hoc projecten in de stad Valencia of richting Tarragona, maar daar zijn we minder snel en kennen we minder mensen. Eerlijk antwoord vooraf.",
      },
      {
        q: "Doen jullie ook fiscale en juridische begeleiding?",
        a: "We zijn geen advocaten of belastingadviseurs, en dat zou ook niet mogen. We werken structureel met een vaste Spaanse advocaat en een gestor; hun werk is inbegrepen in de begeleiding. Voor specifieke fiscale planning (modelo 720, vermogensbelasting, IRPF) verwijzen we door naar onze gestor.",
      },
      {
        q: "Hoe weet ik dat jullie écht onafhankelijk zijn?",
        a: "We krijgen geen commissie, kickback of cadeau van verkopers, ontwikkelaars, bouwers, banken of notarissen. Onze enige opdrachtgever, en geldstroom, ben jij. Dit staat in je opdrachtbevestiging en we tonen onze RAICV-vergunning en verzekeringen prominent op de site zodra deze binnen zijn.",
      },
    ],
    ctaTitle: "Niet zeker welke dienst past?",
    ctaBody:
      "Begin met een vrijblijvend gesprek. Dat kost je niets en duurt 30 minuten. Daarna weten we allebei of we bij elkaar passen.",
    ctaButton: "Plan een kennismakingsgesprek",
  },
  en: {
    meta: {
      title: "Services · Foris",
      description:
        "Four services we already provide today: orientation & coaching, paperwork (NIE/CIF/bank), new-build supervision and concierge. Full purchase guidance will follow once our RAICV licence is in place.",
    },
    eyebrow: "Services",
    h1: "What we already do for you today, and what's coming.",
    intro:
      "We are working on our RAICV licence for full purchase guidance. In the meantime there are four services we can already help with: coaching, paperwork, construction supervision and concierge. Always a quote upfront, and we work exclusively for you.",
    nowTitle: "Available now",
    nowCount: "Four services",
    quoteCta: "Request a quote →",
    forWhom: "Who is it for? ",
    includes: "What's included",
    includesSoon: "What will be included",
    availableNow: [
      {
        id: "orientatie",
        badge: "Coaching · Available now",
        title: "Orientation & strategy coaching",
        intro:
          "For anyone who isn't yet sure whether this is the right moment, the right area, or whether we are the right people. Coaching and sharing knowledge, not estate agency.",
        includes: [
          "A 90-minute intake meeting (video call or in person in Castellón)",
          "A personal, tailored area guide (PDF): neighbourhoods, price ranges, infrastructure, what to avoid",
          "A step-by-step plan with the right order for NIE / bank account / modelo 036",
          "Warm introductions to our gestor, lawyer and bank, no cold calling",
        ],
        forWhom:
          "You're still getting your bearings. You want to understand the market before committing to anything.",
      },
      {
        id: "papierwinkel",
        badge: "Paperwork · Available now",
        title: "NIE, CIF, bank, modelo 036",
        intro:
          "You've already bought, or are about to complete, and you're bogged down in paperwork. We coordinate with our gestor, translate, arrange appointments and make sure the right documents are in the right place at the right time.",
        includes: [
          "Preparing and guiding your NIE application (Spanish consulate or in Spain)",
          "Opening a Spanish bank account, with Dutch-language support on compliance questions",
          "Modelo 036 / 030, for private individuals and Dutch B.V. companies alike",
          "Coordinating sworn translations (notarial deed, Chamber of Commerce extract, UBO)",
          "Guiding the apostille process",
        ],
        forWhom:
          "You've already started a purchase and don't want to sort out the paperwork yourself, or you've just bought and want to make sure your records are in order.",
      },
      {
        id: "nieuwbouwtoezicht",
        badge: "Supervision · Available now",
        title: "New-build supervision & handover",
        intro:
          "Bought a new build but living in the Netherlands? We are your eyes on the building site. No seller's interest, no builder's interest, just honest reporting.",
        includes: [
          "Site visits with a photo report and a short explanation in Dutch",
          "Checking the bank guarantee (aval bancario) and instalments against the contract",
          "Handover inspection (snagging) with a checklist of defects",
          "Coordinating repairs with the builder on your behalf",
          "Attending the handover if you can't",
        ],
        forWhom:
          "You've bought a new build from Metrovacesa, AEDAS, Avanza Urbana, ARQURA or a similar developer and want independent supervision alongside the seller.",
      },
      {
        id: "concierge",
        badge: "Concierge · Available now",
        title: "Concierge: key holding and home management",
        intro:
          "Keep your home running smoothly while you're in the Netherlands. Three levels, depending on how hands-off you want to be.",
        includes: [
          "Light: key holding, a monthly visual check, annual utilities statement",
          "Standard: all of the above + a fortnightly check, handling post, alarm response",
          "Villa: all of the above + a weekly check, coordinating odd jobs, 24-hour response in an emergency",
        ],
        forWhom:
          "You don't live in Spain full-time and don't want to work out from the other side of Europe who needs to sort out the boiler this time.",
      },
    ],
    soonTitle: "In preparation · after RAICV registration",
    soonTag: "After RAICV",
    fromQ3: {
      id: "aankoopbegeleiding",
      badge: "Full process",
      title: "Full purchase guidance",
      intro:
        "The whole process, from search profile to handing over the keys. We do the work, you make the decisions. Usually takes 3 to 6 months.",
      includes: [
        "Sharpening your search profile and actively searching (our own network + local Spanish estate agents + new-build developers)",
        "Viewings: in person by us, or by video call with us there",
        "Offer and negotiation strategy",
        "Legal check of the contract by a Spanish lawyer (included)",
        "NIE and CIF (modelo 030 / 036): arranged, not just explained",
        "Opening a bank account and transferring money to Spain",
        "Support on the day at the notary, with explanations in Dutch on site",
        "Key handover, registration and final checks",
      ],
      forWhom:
        "You've decided to buy and want it to go smoothly, without having to untangle all the paperwork yourself.",
    },
    soonNote:
      "Want to be first in line when this package opens? Book a no-obligation call now and we'll put you on the list and keep you posted on our RAICV milestone.",
    newBuild: {
      imageAlt: "Mediterranean residential street with a sea view on the Costa del Azahar",
      eyebrow: "Focus",
      title: "New builds on the Costa del Azahar",
      offPlan: (
        <>
          Often called <em>off-plan</em> internationally: buying before completion.
        </>
      ),
      p1: "There is a huge amount of building going on between Vinaròs and Burriana right now. In 2025 alone, Metrovacesa, AEDAS, Avanza Urbana and ARQURA put more than 1,250 new homes in the pipeline, growth of almost 26% in one year. Great for choice, but buying a new build has its own risks that most buyers underestimate.",
      p2: "Four instalments, a building licence, a bank guarantee, completion, snagging, registration: any of them can go wrong, and all of them are neatly set out in a Spanish contract you probably won't read. As a family business with broad property experience in the Netherlands and Spain, especially on the Costa del Azahar, we know these processes from the inside and know exactly where the sharp edges are.",
      p3Before: "Already bought a new build? Ask us about ",
      p3Link: "New-build supervision",
      p3After: ", which we can already do now.",
    },
    faqEyebrow: "Frequently asked questions",
    faqTitle: "What clients want to know beforehand",
    faqs: [
      {
        q: "Why isn't full purchase guidance available yet?",
        a: "By law, we may only actively search and negotiate on behalf of a buyer once we are registered in the RAICV, the mandatory property register of the Comunitat Valenciana since October 2022. Our registration (including 200 hours of training, insurance and a caución, a financial guarantee) is in preparation; we will submit the application at the end of 2026. We would rather do this properly than quickly.",
      },
      {
        q: "How long does a purchase take from start to keys?",
        a: "For a resale property: usually 3 months. For a new build (off-plan): 9 to 18 months, depending on the construction stage. The NIE / CIF / bank account process alone easily takes 4 to 8 weeks, so we start that first, in parallel with the search.",
      },
      {
        q: "Do you also work outside the Costa del Azahar?",
        a: "Our sweet spot is the coast from Vinaròs to Burriana. We also take on occasional projects in Valencia city or towards Tarragona, but there we are slower and know fewer people. An honest answer upfront.",
      },
      {
        q: "Do you also provide tax and legal advice?",
        a: "We are not lawyers or tax advisers, and we wouldn't be allowed to act as such. We work on a regular basis with a Spanish lawyer and a gestor; their work is included in our guidance. For specific tax planning (modelo 720, wealth tax, IRPF) we refer you to our gestor.",
      },
      {
        q: "How do I know you're really independent?",
        a: "We receive no commission, kickbacks or gifts from sellers, developers, builders, banks or notaries. Our only client, and our only source of income, is you. This is stated in your engagement letter, and we will display our RAICV licence and insurance prominently on the site once they are in place.",
      },
    ],
    ctaTitle: "Not sure which service fits?",
    ctaBody:
      "Start with a no-obligation call. It costs you nothing and takes 30 minutes. Afterwards we'll both know whether we're a good fit.",
    ctaButton: "Book an introductory call",
  },
  es: {
    meta: {
      title: "Servicios · Foris",
      description:
        "Cuatro servicios que ya ofrecemos hoy: orientación y coaching, papeleo (NIE/CIF/banco), supervisión de obra nueva y conserjería. El acompañamiento completo en la compra llegará cuando tengamos la inscripción en el RAICV.",
    },
    eyebrow: "Servicios",
    h1: "Lo que ya hacemos por ti hoy, y lo que está por llegar.",
    intro:
      "Estamos tramitando nuestra inscripción en el RAICV para poder ofrecer el acompañamiento completo en la compra. Mientras tanto, hay cuatro servicios con los que ya podemos ayudarte: coaching, papeleo, supervisión de obra y conserjería. Siempre con presupuesto por adelantado, y trabajamos exclusivamente para ti.",
    nowTitle: "Disponible ya",
    nowCount: "Cuatro servicios",
    quoteCta: "Pide presupuesto →",
    forWhom: "¿Para quién? ",
    includes: "Qué incluye",
    includesSoon: "Qué incluirá",
    availableNow: [
      {
        id: "orientatie",
        badge: "Coaching · Disponible ya",
        title: "Orientación y coaching estratégico",
        intro:
          "Para quien aún no tiene claro si es el momento, si es la zona adecuada o si somos las personas adecuadas. Coaching y transmisión de conocimiento, no intermediación inmobiliaria.",
        includes: [
          "Reunión inicial de hora y media (videollamada o en persona en Castellón)",
          "Guía personalizada de la zona (PDF): barrios, rangos de precio, infraestructuras, qué evitar",
          "Plan paso a paso con el orden correcto para NIE / cuenta bancaria / modelo 036",
          "Presentaciones directas a nuestro gestor, abogado y banco, sin llamadas en frío",
        ],
        forWhom:
          "Todavía te estás informando. Quieres entender el mercado antes de comprometerte a nada.",
      },
      {
        id: "papierwinkel",
        badge: "Papeleo · Disponible ya",
        title: "NIE, CIF, banco, modelo 036",
        intro:
          "Ya has comprado, o estás a punto de firmar, y te has atascado con el papeleo. Coordinamos con nuestro gestor, traducimos, pedimos citas y nos aseguramos de que los documentos correctos estén en el sitio correcto en el momento correcto.",
        includes: [
          "Preparar y acompañar la solicitud del NIE (consulado español o en España)",
          "Abrir una cuenta bancaria española, con apoyo en neerlandés para las preguntas de cumplimiento normativo",
          "Modelo 036 / 030, tanto para particulares como para B.V. neerlandesas",
          "Coordinar traducciones juradas (escritura notarial, extracto de la Cámara de Comercio neerlandesa, titulares reales)",
          "Acompañar el trámite de la apostilla",
        ],
        forWhom:
          "Ya has empezado una compra y no quieres pelearte tú con el papeleo, o acabas de comprar y quieres tener la documentación en regla.",
      },
      {
        id: "nieuwbouwtoezicht",
        badge: "Supervisión · Disponible ya",
        title: "Supervisión de obra nueva y entrega",
        intro:
          "¿Has comprado obra nueva pero vives en los Países Bajos? Somos tus ojos en la obra. Sin intereses del vendedor ni del constructor, solo informes honestos.",
        includes: [
          "Visitas de obra con informe fotográfico y una breve explicación en neerlandés",
          "Revisar el aval bancario y los pagos a cuenta frente al contrato",
          "Inspección de entrega (repasos) con lista de defectos",
          "Coordinar las reparaciones con el constructor en tu nombre",
          "Estar presentes en la entrega si tú no puedes",
        ],
        forWhom:
          "Has comprado obra nueva a Metrovacesa, AEDAS, Avanza Urbana, ARQURA o una promotora similar y quieres una supervisión independiente, además del vendedor.",
      },
      {
        id: "concierge",
        badge: "Conserjería · Disponible ya",
        title: "Conserjería: llaves y gestión de la vivienda",
        intro:
          "Que tu casa siga funcionando mientras estás en los Países Bajos. Tres niveles, según lo despreocupado que quieras estar.",
        includes: [
          "Light: custodia de llaves, revisión visual mensual, liquidación anual de suministros",
          "Standard: lo anterior + revisión cada dos semanas, gestión del correo, respuesta a alarmas",
          "Villa: lo anterior + revisión semanal, coordinación de pequeños trabajos, intervención 24 h en caso de incidencia grave",
        ],
        forWhom:
          "No vives en España todo el año y no quieres tener que averiguar desde la otra punta de Europa quién tiene que mirar otra vez la caldera.",
      },
    ],
    soonTitle: "En preparación · tras la inscripción en el RAICV",
    soonTag: "Tras el RAICV",
    fromQ3: {
      id: "aankoopbegeleiding",
      badge: "Proceso completo",
      title: "Acompañamiento completo en la compra",
      intro:
        "Todo el proceso, desde el perfil de búsqueda hasta la entrega de llaves. Nosotros hacemos el trabajo, tú tomas las decisiones. Duración habitual: de 3 a 6 meses.",
      includes: [
        "Afinar tu perfil de búsqueda y buscar activamente (red propia + inmobiliarias locales + promotoras de obra nueva)",
        "Visitas: en persona por nuestra parte, o por videollamada con nosotros presentes",
        "Estrategia de oferta y negociación",
        "Revisión jurídica del contrato por un abogado español (incluida)",
        "NIE y CIF (modelo 030 / 036): tramitados, no solo explicados",
        "Abrir una cuenta bancaria y transferir dinero a España",
        "Acompañamiento el día de la notaría, con explicaciones en neerlandés allí mismo",
        "Entrega de llaves, registro y comprobaciones finales",
      ],
      forWhom:
        "Has decidido comprar y quieres que todo vaya en orden, sin tener que resolver tú todo el papeleo.",
    },
    soonNote:
      "¿Quieres estar en primera fila cuando abramos este servicio? Reserva ahora una llamada sin compromiso: te apuntamos en la lista y te mantenemos al tanto de nuestro avance con el RAICV.",
    newBuild: {
      imageAlt: "Calle residencial mediterránea con vistas al mar en la Costa del Azahar",
      eyebrow: "Especialidad",
      title: "Obra nueva en la Costa del Azahar",
      offPlan: (
        <>
          En el mercado internacional se suele llamar <em>off-plan</em>: comprar
          sobre plano, antes de la entrega.
        </>
      ),
      p1: "Entre Vinaròs y Burriana se está construyendo muchísimo. Solo en 2025, Metrovacesa, AEDAS, Avanza Urbana y ARQURA pusieron en marcha más de 1.250 viviendas nuevas, un crecimiento de casi el 26% en un año. Bien para elegir, pero comprar obra nueva tiene riesgos propios que la mayoría de compradores subestima.",
      p2: "Cuatro pagos a cuenta, una licencia de obra, un aval bancario, la entrega, los repasos, el registro: todo puede salir mal, y todo está perfectamente recogido en un contrato en español que probablemente no vas a leer. Como empresa familiar con amplia experiencia inmobiliaria en los Países Bajos y en España, sobre todo en la Costa del Azahar, conocemos estos procesos por dentro y sabemos exactamente dónde están los puntos delicados.",
      p3Before: "¿Ya has comprado obra nueva? Pregúntanos por la ",
      p3Link: "supervisión de obra nueva",
      p3After: ", que ya podemos ofrecer.",
    },
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Lo que los clientes quieren saber antes",
    faqs: [
      {
        q: "¿Por qué todavía no ofrecéis el acompañamiento completo en la compra?",
        a: "Por ley, solo podemos buscar y negociar activamente en nombre de un comprador cuando estemos inscritos en el RAICV, el registro obligatorio de agentes inmobiliarios de la Comunitat Valenciana desde octubre de 2022. Nuestra inscripción (que incluye una formación de 200 horas, seguros y caución) está en preparación; presentaremos la solicitud a finales de 2026. Preferimos hacerlo bien a hacerlo rápido.",
      },
      {
        q: "¿Cuánto dura una compra desde el principio hasta las llaves?",
        a: "En segunda mano: normalmente 3 meses. En obra nueva (sobre plano): de 9 a 18 meses, según la fase de la obra. El trámite del NIE / CIF / cuenta bancaria ya lleva fácilmente de 4 a 8 semanas, así que es lo primero que empezamos, en paralelo con la búsqueda.",
      },
      {
        q: "¿Trabajáis también fuera de la Costa del Azahar?",
        a: "Nuestro punto fuerte es la costa de Vinaròs a Burriana. También hacemos algún proyecto puntual en Valencia ciudad o hacia Tarragona, pero allí somos más lentos y conocemos a menos gente. Te lo decimos con sinceridad desde el principio.",
      },
      {
        q: "¿Ofrecéis también asesoramiento fiscal y jurídico?",
        a: "No somos abogados ni asesores fiscales, ni podríamos actuar como tales. Trabajamos de forma habitual con un abogado español y un gestor; su trabajo está incluido en el acompañamiento. Para planificación fiscal específica (modelo 720, impuesto sobre el patrimonio, IRPF) te remitimos a nuestro gestor.",
      },
      {
        q: "¿Cómo sé que sois realmente independientes?",
        a: "No recibimos comisiones, incentivos ni regalos de vendedores, promotoras, constructoras, bancos ni notarios. Nuestro único cliente, y nuestra única fuente de ingresos, eres tú. Así consta en tu hoja de encargo, y mostraremos de forma destacada en la web nuestra inscripción en el RAICV y nuestros seguros en cuanto los tengamos.",
      },
    ],
    ctaTitle: "¿No sabes qué servicio encaja?",
    ctaBody:
      "Empieza con una llamada sin compromiso. No te cuesta nada y dura 30 minutos. Después, los dos sabremos si encajamos.",
    ctaButton: "Reserva una llamada de presentación",
  },
};

export function DienstenContent({ locale }: { locale: Locale }) {
  const t = dienstenText[locale];
  const lp = (path: string) => localizedPath(locale, path);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: t.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-br from-cream via-cream to-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
            {t.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">{t.intro}</p>
        </div>
      </section>

      {/* Available now */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 flex items-baseline justify-between gap-4 border-b border-border pb-6">
          <h2 className="font-heading text-2xl text-navy md:text-3xl">{t.nowTitle}</h2>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
            {t.nowCount}
          </p>
        </div>
        <div className="grid gap-10">
          {t.availableNow.map((pkg) => (
            <article
              key={pkg.id}
              id={pkg.id}
              className="grid scroll-mt-24 gap-6 rounded-3xl border border-border bg-card p-8 shadow-sm md:grid-cols-[1fr_2fr] md:gap-12 md:p-12"
            >
              <div className="flex flex-col">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                  {pkg.badge}
                </p>
                <h3 className="mt-3 font-heading text-3xl text-navy">{pkg.title}</h3>
                <Link
                  href={lp(`/offerte?dienst=${pkg.id}`)}
                  className="mt-6 inline-block text-sm font-medium text-terracotta underline-offset-4 hover:underline"
                >
                  {t.quoteCta}
                </Link>
                <p className="mt-6 text-sm text-foreground/75">
                  <span className="font-medium text-navy">{t.forWhom}</span>
                  {pkg.forWhom}
                </p>
              </div>
              <div>
                <p className="text-base text-foreground/85">{pkg.intro}</p>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-olive">
                  {t.includes}
                </p>
                <ul className="mt-3 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-foreground/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* After RAICV */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mb-10 flex items-baseline justify-between gap-4 border-b border-border pb-6">
            <h2 className="font-heading text-2xl text-navy md:text-3xl">{t.soonTitle}</h2>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
              {t.soonTag}
            </p>
          </div>
          <article
            id={t.fromQ3.id}
            className="grid scroll-mt-24 gap-6 rounded-3xl border border-border bg-card/80 p-8 shadow-sm md:grid-cols-[1fr_2fr] md:gap-12 md:p-12"
          >
            <div className="flex flex-col">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                {t.fromQ3.badge}
              </p>
              <h3 className="mt-3 font-heading text-3xl text-navy">{t.fromQ3.title}</h3>
              <Link
                href={lp("/offerte?dienst=aankoopbegeleiding")}
                className="mt-6 inline-block text-sm font-medium text-terracotta underline-offset-4 hover:underline"
              >
                {t.quoteCta}
              </Link>
              <p className="mt-6 text-sm text-foreground/75">
                <span className="font-medium text-navy">{t.forWhom}</span>
                {t.fromQ3.forWhom}
              </p>
              <p className="mt-6 rounded-xl border border-olive/40 bg-olive/10 p-4 text-sm text-foreground/80">
                {t.soonNote}
              </p>
            </div>
            <div>
              <p className="text-base text-foreground/85">{t.fromQ3.intro}</p>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-olive">
                {t.includesSoon}
              </p>
              <ul className="mt-3 space-y-2">
                {t.fromQ3.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* New-build focus */}
      <section className="relative border-b border-border overflow-hidden">
        <Image
          src="/images/IMG_9688.jpg"
          alt={t.newBuild.imageAlt}
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-navy/85" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-24 text-cream on-dark">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
              {t.newBuild.eyebrow}
            </p>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl">{t.newBuild.title}</h2>
            <p className="mt-3 text-xs text-cream/60">{t.newBuild.offPlan}</p>
          </div>
          <div className="space-y-4 text-cream/85">
            <p>{t.newBuild.p1}</p>
            <p>{t.newBuild.p2}</p>
            <p className="text-cream/70">
              {t.newBuild.p3Before}
              <Link href="#nieuwbouwtoezicht" className="underline hover:text-terracotta">
                {t.newBuild.p3Link}
              </Link>
              {t.newBuild.p3After}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
          {t.faqEyebrow}
        </p>
        <h2 className="mt-3 font-heading text-3xl text-navy md:text-4xl">{t.faqTitle}</h2>
        <dl className="mt-10 space-y-8">
          {t.faqs.map((faq) => (
            <div key={faq.q} className="border-b border-border pb-8 last:border-b-0">
              <dt className="font-heading text-lg text-navy">{faq.q}</dt>
              <dd className="mt-2 text-foreground/80">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.ctaTitle}</h2>
          <p className="mt-4 text-foreground/80">{t.ctaBody}</p>
          <BookCallButton
            locale={locale}
            className="mt-8 inline-block rounded-full bg-terracotta px-8 py-3 text-base font-medium text-cream transition-colors hover:bg-terracotta/90"
          >
            {t.ctaButton}
          </BookCallButton>
        </div>
      </section>
    </main>
  );
}
