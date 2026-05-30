/* eslint-disable jsx-a11y/alt-text */
import fs from "node:fs";
import path from "node:path";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Brand fonts embedded via file system. Public folder is included in the
// Vercel function bundle, so process.cwd() + 'public/fonts' resolves reliably
// in serverless context.
const fontsDir = path.join(process.cwd(), "public", "fonts");
const frauncesPath = path.join(fontsDir, "Fraunces.ttf");
const interPath = path.join(fontsDir, "Inter.ttf");

Font.register({
  family: "Fraunces",
  src: frauncesPath,
});

Font.register({
  family: "Inter",
  src: interPath,
});

// Disable hyphenation — gives cleaner Dutch text rendering in the PDF.
Font.registerHyphenationCallback((word) => [word]);

const HEADING_FONT = "Fraunces";
const BODY_FONT = "Inter";

// Foris brand palette
const colors = {
  cream: "#f5efe6",
  navy: "#0e2436",
  terracotta: "#c9603a",
  olive: "#5a6e3a",
  text: "#1a1f2e",
  textMuted: "#5a6275",
  border: "#e0d8c8",
};

const s = StyleSheet.create({
  page: {
    fontFamily: BODY_FONT,
    fontSize: 11,
    lineHeight: 1.55,
    color: colors.text,
    padding: 56,
    backgroundColor: colors.cream,
  },
  // Cover page
  cover: {
    fontFamily: BODY_FONT,
    backgroundColor: colors.cream,
    padding: 56,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  coverTopBar: {
    height: 6,
    backgroundColor: colors.terracotta,
    width: 80,
    marginBottom: 40,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  brandMark: {
    width: 36,
    height: 36,
    backgroundColor: colors.terracotta,
    color: colors.cream,
    fontSize: 22,
    fontFamily: HEADING_FONT,
    textAlign: "center",
    paddingTop: 4,
    borderRadius: 6,
  },
  brandName: {
    fontFamily: HEADING_FONT,
    fontSize: 24,
    color: colors.navy,
    marginLeft: 12,
  },
  coverTitle: {
    fontFamily: HEADING_FONT,
    fontSize: 40,
    color: colors.navy,
    lineHeight: 1.1,
    marginTop: 200,
    marginBottom: 14,
  },
  coverSub: {
    fontSize: 14,
    color: colors.textMuted,
    maxWidth: 440,
  },
  coverFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 9,
    color: colors.olive,
    fontFamily: BODY_FONT,
    textTransform: "uppercase",
    letterSpacing: 1.4,
  },
  // Content pages
  pageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    fontSize: 9,
    color: colors.olive,
    textTransform: "uppercase",
    letterSpacing: 1.4,
  },
  pageFooter: {
    position: "absolute",
    bottom: 32,
    left: 56,
    right: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 9,
    color: colors.textMuted,
  },
  h1: {
    fontFamily: HEADING_FONT,
    fontSize: 28,
    color: colors.navy,
    marginBottom: 16,
    lineHeight: 1.15,
  },
  h2Label: {
    fontFamily: BODY_FONT,
    fontSize: 10,
    color: colors.terracotta,
    textTransform: "uppercase",
    letterSpacing: 1.4,
    marginBottom: 8,
  },
  h2: {
    fontFamily: HEADING_FONT,
    fontSize: 22,
    color: colors.navy,
    marginBottom: 16,
    lineHeight: 1.2,
  },
  h3: {
    fontFamily: HEADING_FONT,
    fontSize: 14,
    color: colors.navy,
    marginTop: 16,
    marginBottom: 8,
  },
  p: {
    marginBottom: 10,
    color: colors.text,
  },
  lead: {
    fontSize: 13,
    color: colors.text,
    marginBottom: 20,
    lineHeight: 1.55,
    paddingLeft: 16,
    borderLeftWidth: 3,
    borderLeftColor: colors.terracotta,
  },
  bulletList: {
    marginVertical: 8,
    paddingLeft: 4,
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 6,
  },
  bullet: {
    width: 10,
    color: colors.terracotta,
  },
  bulletText: {
    flex: 1,
    color: colors.text,
  },
  ctaBox: {
    backgroundColor: colors.navy,
    color: colors.cream,
    padding: 24,
    marginTop: 24,
    borderRadius: 8,
  },
  ctaTitle: {
    fontFamily: HEADING_FONT,
    fontSize: 18,
    color: colors.cream,
    marginBottom: 8,
  },
  ctaBody: {
    fontSize: 11,
    color: colors.cream,
    opacity: 0.85,
    marginBottom: 12,
  },
  ctaLink: {
    fontSize: 11,
    color: colors.terracotta,
    marginBottom: 4,
  },
  highlight: {
    backgroundColor: "#eae6db",
    padding: 12,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: colors.olive,
  },
});

type ValkuilSectionProps = {
  number: string;
  title: string;
  problem: string;
  origin: string;
  action: string | React.ReactNode;
};

const valkuilen: Omit<ValkuilSectionProps, "number">[] = [
  {
    title: "De NIE-volgorde fout doen",
    problem:
      "De NIE (Número de Identidad de Extranjero) is jouw Spaanse fiscaalnummer als buitenlander. Zonder NIE kun je geen Spaanse bankrekening openen, geen contract tekenen, geen notarisafspraak inplannen. De meeste Nederlanders denken: 'ik vraag 'm aan zodra ik een huis op het oog heb.' Dat is te laat.",
    origin:
      "De Spaanse bureaucratie werkt sequentieel. NIE-aanvraag duurt 2–6 weken via de Spaanse consul in Den Haag. Vanuit Spanje zelf kan sneller, mits je een verblijfsaanvraag of werkverband hebt — maar voor een tweede huis is dat zelden van toepassing.",
    action:
      "Vraag je NIE aan zodra je serieus rondkijkt naar Spaans vastgoed — zelfs vóór je een specifiek huis hebt. De NIE blijft levenslang geldig en je hebt 'm voor van alles nodig. Reken op 6 weken vanaf indiening tot ontvangst.",
  },
  {
    title: "Geen Modelo 036 indienen vóór je gaat betalen",
    problem:
      "Als je via een Nederlandse B.V. koopt, heb je een Spaanse CIF nodig (NIF voor rechtspersonen). Die krijg je via een Modelo 036 bij de Spaanse Belastingdienst. Zonder CIF kan een Spaanse bank geen rekening openen op naam van je B.V., kan een notaris geen escritura passeren, en kunnen Spaanse leveranciers je niet factureren.",
    origin:
      "De Modelo 036 vereist een complete documentenstapel: notariële volmacht (NL, beëdigd vertaald, geapostilleerd), oprichtingsakte (idem), KvK-uittreksel, UBO-uittreksel. Beëdigde vertalingen alleen kosten €600–€1.200 en duren 1–2 weken.",
    action:
      "Start het Modelo 036-traject minstens 8 weken voordat je een betaling vanuit je B.V. naar Spanje wil doen. Begin met de notariële volmacht in Nederland — die regelt zichzelf niet. Werk parallel: vertalingen en apostille terwijl je wacht op de notaris.",
  },
  {
    title: "Het aval bancair niet controleren bij nieuwbouw",
    problem:
      "Bij nieuwbouw (off-plan) kopen betaal je in tranches — vaak 20% verspreid over de bouwperiode, met de slot van 80% bij oplevering. Als de ontwikkelaar in die periode failliet gaat, raak je je geld kwijt, tenzij je betalingen zijn gedekt door een aval bancair.",
    origin:
      "Een aval bancair is een bankgarantie die bouwers verplicht moeten regelen onder Ley 20/2015. Klinkt waterdicht — maar niet elke aval dekt automatisch alle deelbetalingen plus IVA plus wettelijke rente. Sommige dekken alleen de hoofdsom. Sommige worden pas afgegeven ná de eerste storting.",
    action: "AVAL_CHECKLIST",
  },
  {
    title: "De Spaanse notaris vertrouwen 'het wel uit te leggen'",
    problem:
      "Bij de Spaanse escritura leest de notaris het hele contract hardop voor — in het Spaans. Veel Nederlanders denken: 'de notaris is onpartijdig, die past wel op'. Maar dat is een misverstand. De notaris is procedureel verantwoordelijk, niet adviserend.",
    origin:
      "De Spaanse notarispraktijk verschilt fundamenteel van de Nederlandse. In Nederland is de notaris vaak een trusted advisor die proactief meedenkt. In Spanje is de rol formeler — de notaris waarmerkt en registreert. Inhoudelijke bescherming komt van je advocaat.",
    action:
      "Schakel altijd een onafhankelijke Spaanse advocaat in vóór de escritura. Niet de advocaat van de verkoper — een eigen, voor wie jij betaalt. Reken op €1.000–€2.500 voor een complete check + bijwonen van de notaris.",
  },
  {
    title: "Beëdigde vertalingen vergeten of verkeerd inschakelen",
    problem:
      "Veel Nederlandse documenten die je in Spanje nodig hebt — notariële akten, KvK-uittreksels, UBO-bewijzen — moeten beëdigd vertaald zijn. De Spaanse Belastingdienst, banken en notarissen accepteren geen gewone vertaalbureau-vertalingen. Alleen vertalingen van een traductor jurado.",
    origin:
      "Nederlandse vertaalbureaus zijn niet allemaal bekend met de Spaanse vereisten. Als je gewoon 'vertaal dit naar het Spaans' zegt, krijg je vaak een prima vertaling — maar niet beëdigd. Het document wordt dan geweigerd, je begint opnieuw, en verliest 1–2 weken.",
    action:
      "Vraag bij elke opdracht expliciet: 'Dit moet beëdigd worden door een traductor jurado die ingeschreven staat bij het Spaanse Ministerie van Buitenlandse Zaken (MAEC).' Reken op €30–€60 per pagina, totaal €600–€1.200 voor een complete B.V.-set.",
  },
  {
    title: "Te vroeg een vakantievlucht boeken voor de oplevering",
    problem:
      "In je koopovereenkomst staat een opleveringsdatum. Mensen denken: 'dan plan ik daar mijn vlucht en hotel omheen.' Probleem: de opleveringsdatum is de uiterste datum voor de bouwer, niet de datum waarop jij bij de notaris zit.",
    origin:
      "Tussen oplevering door de bouwer (Licencia de Primera Ocupación) en jouw notarisafspraak zitten 2–4 weken aan papierwerk: gemeente, advocaat, slotbetaling via bankcheque. Daarna moet er nog een notaristijd vrij zijn.",
    action:
      "Boek je vlucht en hotel pas zodra je een schriftelijke notarisafspraak hebt — meestal komt die 1–2 weken van tevoren binnen. Tot dan: alleen vrijblijvende reservering met flexibele annulering.",
  },
  {
    title: "Lokale lasten niet realistisch inschatten",
    problem:
      "Bij berekenen of een Spaans huis 'haalbaar' is, kijken kopers vaak naar aankoopprijs + IVA + notariskosten. Wat ze vergeten zijn de terugkerende lokale lasten die structureel je kostenpost vormen.",
    origin: "LASTEN_LIST",
    action:
      "Vraag voorafgaand aan koop een gedetailleerd kostenoverzicht aan je gestor. Op een woning van €350.000 kun je rekenen op 8–10% aan eenmalige aankoopkosten en daarna €3.000–€4.000 per jaar aan lopende lasten. Bouw dat in je financieringsplan.",
  },
  {
    title: "Werken met een gestor zonder buitenlandse-koper ervaring",
    problem:
      "De gestor is jouw schakel tussen jou en de Spaanse bureaucratie. Niet elke gestor weet hoe om te gaan met buitenlandse kopers — laat staan met Nederlandse B.V.'s. Als hij iets verkeerd indient, krijg jij de boete.",
    origin:
      "De meeste Spaanse gestores bedienen lokale particulieren. Een Nederlandse koper komt met aparte eisen: beëdigde vertalingen, apostilles, buitenlandse fiscaalnummers, Modelo 720, Modelo 210, internationale belastingverdragen. Wie dit een paar keer per jaar doet, weet de stappen niet uit z'n hoofd.",
    action:
      "Vraag bij selectie expliciet: 'Hoeveel buitenlandse kopers heb je dit jaar bediend? Heb je ervaring met Modelo 036 voor Nederlandse B.V.'s?' Vraag om twee referenties. Te goedkoop = waarschijnlijk geen internationale ervaring.",
  },
  {
    title: "Koopovereenkomst niet door onafhankelijke advocaat laten checken",
    problem:
      "Een Spaanse koopovereenkomst is 12–20 pagina's juridisch Spaans. Daarin staan clausules over ontbinding, garanties, aval, oplevering, force majeure. De gemiddelde koper leest het niet, of leest het via Google Translate, en tekent. Daarna is het te laat.",
    origin:
      "Verkopers en ontwikkelaars hebben professionele juristen die contracten in hun voordeel opstellen. Standaard-clausules die 'iedereen tekent' kunnen significant nadelig voor jou zijn — bijvoorbeeld een ontbindingsclausule waarbij de bouwer mag annuleren met retournering van alleen de hoofdsom (geen rente).",
    action:
      "Schakel een Spaanse advocaat in vóór je het privaat koopcontract tekent — niet pas voor de escritura. Een grondige contractreview kost €500–€1.000 en levert een lijst clausules op die aangepast kunnen worden. De meeste ontwikkelaars accepteren redelijke aanpassingsvoorstellen.",
  },
];

const lastenList = [
  "IBI (gemeentelijke OZB) — €500–€2.500 per jaar",
  "Comunidad de Propietarios — €50–€300 per maand",
  "Modelo 210 / IRNR — 19% inkomstenbelasting over fictieve huurwaarde voor niet-residenten",
  "Modelo 720 — verplichte aangifte buitenlands vermogen boven €50.000",
  "Lokale verzekeringen — €300–€800 per jaar",
];

const avalChecklist = [
  "Dekt het ALLE deelbetalingen, of alleen de eerste?",
  "Dekt het IVA (10% bovenop hoofdsom)?",
  "Dekt het wettelijke rente vanaf storting tot oplevering?",
  "Wat is de vervaldatum, en valt die ná de geplande sleutelmoment?",
  "Bij welke bank zit het aval, en hoe valideer je het bestaan ervan?",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <View style={s.bulletList}>
      {items.map((item) => (
        <View key={item} style={s.bulletItem}>
          <Text style={s.bullet}>•</Text>
          <Text style={s.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function ValkuilSection({ number, title, problem, origin, action }: ValkuilSectionProps) {
  return (
    <View>
      <Text style={s.h2Label}>Valkuil {number}</Text>
      <Text style={s.h2}>{title}</Text>

      <Text style={s.h3}>Het probleem</Text>
      <Text style={s.p}>{problem}</Text>

      <Text style={s.h3}>Waarom het ontstaat</Text>
      {origin === "LASTEN_LIST" ? (
        <>
          <Text style={s.p}>
            De Spaanse lokale lasten lijken klein per item, maar tellen op. Reken
            voor een doorsnee vakantiehuis op €2.500–€5.000 per jaar aan lopende
            lasten, exclusief energie en onderhoud:
          </Text>
          <BulletList items={lastenList} />
        </>
      ) : (
        <Text style={s.p}>{origin}</Text>
      )}

      <Text style={s.h3}>Wat te doen</Text>
      {action === "AVAL_CHECKLIST" ? (
        <>
          <Text style={s.p}>
            Lees de aval-clausule zorgvuldig — of laat dat door een onafhankelijke
            Spaanse advocaat doen. Controleer specifiek:
          </Text>
          <BulletList items={avalChecklist} />
          <Text style={s.p}>
            Krijg je de aval niet binnen 15 werkdagen na elke storting? Stuur direct
            een ingebrekestelling.
          </Text>
        </>
      ) : (
        <Text style={s.p}>{action as string}</Text>
      )}
    </View>
  );
}

export function ValkuilenPdf({ recipientName }: { recipientName?: string }) {
  return (
    <Document
      title="De 9 valkuilen bij een huis kopen in Spanje als Nederlander"
      author="Van der Meulen Foris B.V."
      subject="Praktische gids voor Nederlandse kopers van Spaans vastgoed"
      keywords="Spanje, vastgoed, NIE, Modelo 036, aval bancair, Costa del Azahar"
    >
      {/* Cover page */}
      <Page size="A4" style={s.cover}>
        <View>
          <View style={s.coverTopBar} />
          <View style={s.brandRow}>
            <Text style={s.brandMark}>F</Text>
            <Text style={s.brandName}>Foris</Text>
          </View>
        </View>

        <View>
          <Text style={s.coverTitle}>
            De 9 valkuilen bij een huis kopen in Spanje als Nederlander.
          </Text>
          <Text style={s.coverSub}>
            Eerstehandsgids op basis van onze eigen aankoop en drie jaar wonen aan
            de Costa del Azahar.
            {recipientName ? `\n\nGeschreven voor ${recipientName}.` : ""}
          </Text>
        </View>

        <View style={s.coverFooter}>
          <Text>Van der Meulen Foris B.V.</Text>
          <Text>vdmforis.com</Text>
        </View>
      </Page>

      {/* Intro page */}
      <Page size="A4" style={s.page}>
        <View style={s.pageHeader}>
          <Text>Foris · Inleiding</Text>
          <Text>vdmforis.com</Text>
        </View>

        <Text style={s.h1}>Voordat je begint</Text>

        <Text style={s.lead}>
          Een huis kopen in Spanje is voor de meeste Nederlanders een eenmalige
          ervaring. En dat is precies het probleem — eenmalig betekent: zonder
          ervaring, zonder de juiste contacten, en zonder begrip van waar de
          Spaanse bureaucratie afwijkt van wat je in Nederland gewend bent.
        </Text>

        <Text style={s.p}>
          Wij doorliepen dat traject zelf — eerst als bewoners die in juli 2023
          naar Spanje verhuisden en huurden, daarna als kopers van onze eerste
          eigen woning aan de Costa del Azahar. Onze achtergrond zit in het
          Nederlandse familiebedrijf Van der Meulen Vastgoed B.V. — meer dan tien
          jaar koop, ontwikkeling en verhuur. Toch struikelden we onderweg over
          dingen die we als ervaren vastgoedmensen niet hadden zien aankomen.
        </Text>

        <Text style={s.p}>
          In deze gids vind je de negen valkuilen die wij zelf of in onze omgeving
          zijn tegengekomen. Per valkuil leggen we uit wat het probleem is, waarom
          het ontstaat, en wat je concreet kunt doen om het te voorkomen.
        </Text>

        <Text style={s.p}>
          Dit is geen verkooppraatje. Het is een eerlijke lijst van wat wij vooraf
          graag hadden geweten.
        </Text>

        <View style={s.highlight}>
          <Text style={s.p}>
            <Text style={{ fontFamily: BODY_FONT, fontWeight: 500 }}>Tip:</Text>{" "}
            print deze gids of bewaar 'm in je &quot;Spanje-koop&quot;-map. Tijdens
            het traject is het handig om hem af en toe terug te kunnen lezen.
          </Text>
        </View>

        <Text style={s.pageFooter} fixed>
          <Text>Foris — vdmforis.com</Text>
        </Text>
      </Page>

      {/* 9 valkuilen — each one on its own area, multiple per page */}
      {valkuilen.map((v, idx) => (
        <Page key={v.title} size="A4" style={s.page} wrap>
          <View style={s.pageHeader}>
            <Text>Foris · Valkuil {idx + 1} van 9</Text>
            <Text>vdmforis.com</Text>
          </View>
          <ValkuilSection
            number={`${idx + 1}`}
            title={v.title}
            problem={v.problem}
            origin={v.origin}
            action={v.action}
          />
          <Text style={s.pageFooter} fixed>
            <Text>Foris — vdmforis.com</Text>
          </Text>
        </Page>
      ))}

      {/* Closing page */}
      <Page size="A4" style={s.page}>
        <View style={s.pageHeader}>
          <Text>Foris · Tot slot</Text>
          <Text>vdmforis.com</Text>
        </View>

        <Text style={s.h1}>Tot slot</Text>

        <Text style={s.p}>
          Een huis kopen in Spanje is geen ramp — miljoenen mensen doen het
          succesvol, jaarlijks. Maar het is wel een traject waar onwetendheid duur
          kan worden, en waar de juiste volgorde en de juiste mensen een enorm
          verschil maken.
        </Text>

        <Text style={s.p}>
          Wij hebben dit traject zelf doorlopen, met Nederlandse vastgoedervaring
          én drie jaar wonen in Spanje achter de hand, en we hebben alle
          bovenstaande valkuilen óf zelf gemaakt óf in onze omgeving gezien.
          Daarom doen we wat we doen.
        </Text>

        <View style={s.ctaBox}>
          <Text style={s.ctaTitle}>
            Wil je sparren over jouw specifieke situatie?
          </Text>
          <Text style={s.ctaBody}>
            Een kennismakingsgesprek is gratis en duurt 30 minuten. Geen verkoop,
            geen verplichtingen. We luisteren naar je situatie en zeggen eerlijk of
            we de juiste club voor je zijn.
          </Text>
          <Text style={s.ctaLink}>
            Plan een gesprek: cal.eu/team/vdmforis/intake
          </Text>
          <Text style={s.ctaLink}>WhatsApp: +31 6 14 96 77 04</Text>
          <Text style={s.ctaLink}>E-mail: info@vdmforis.com</Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text style={{ fontSize: 9, color: colors.textMuted }}>
            Foris is een onderdeel van Van der Meulen Beheer B.V. (Toldijk 27, 7901
            TA Hoogeveen, KvK 98214950). De informatie in deze gids is bedoeld als
            praktisch overzicht, geen juridisch of fiscaal advies. Voor jouw
            specifieke situatie raden wij aan om een gespecialiseerde advocaat
            en/of gestor te consulteren.
          </Text>
          <Text
            style={{
              marginTop: 12,
              fontSize: 9,
              color: colors.textMuted,
            }}
          >
            © {new Date().getFullYear()} Van der Meulen Foris B.V. — vdmforis.com
          </Text>
        </View>
      </Page>
    </Document>
  );
}
