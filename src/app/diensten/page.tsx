import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Vier diensten die we vandaag al leveren: oriëntatie & coaching, papierwinkel (NIE/CIF/bank), nieuwbouwtoezicht en concierge. Volledige aankoopbegeleiding volgt zomer 2026 zodra onze RAICV-vergunning binnen is.",
};

const availableNow = [
  {
    id: "orientatie",
    badge: "Coaching · Vanaf vandaag",
    title: "Oriëntatie & strategie-coaching",
    price: "€ 495 vast — of € 150 / uur",
    priceSub: "(volledig verrekend als je later doorgaat met begeleiding)",
    intro:
      "Voor iedereen die nog niet zeker weet of dit het moment is, of dit de juiste regio is, of wij de juiste club zijn. Coaching en kennisoverdracht, geen makelaardij.",
    includes: [
      "Anderhalf uur intakegesprek (videocall of fysiek in Castellón)",
      "Persoonlijke regio-gids op maat (PDF) — wijken, prijsranges, infrastructuur, wat te vermijden",
      "Stappenplan met de juiste volgorde voor NIE / bankrekening / modelo 036",
      "Warme intro's naar onze gestor, advocaat en bank — geen koude bel-rondjes",
    ],
    forWhom:
      "Je oriënteert je nog. Je wil eerst de markt begrijpen voordat je iets vastlegt.",
  },
  {
    id: "papierwinkel",
    badge: "Papierwinkel · Vanaf vandaag",
    title: "NIE, CIF, bank, modelo 036",
    price: "€ 350 – € 650 per traject",
    priceSub: "(vaste prijs vooraf, afhankelijk van privé / B.V.)",
    intro:
      "Je hebt al gekocht, of bent vlak voor sluiting, en verzandt in de papierwinkel. Wij coördineren met onze gestor, vertalen, regelen afspraken en zorgen dat de juiste documenten op de juiste plek op het juiste moment liggen.",
    includes: [
      "NIE-aanvraag voorbereiden en begeleiden (Spaanse consul of in Spanje)",
      "Spaanse bankrekening openen — Nederlandstalige begeleiding bij compliance-vragen",
      "Modelo 036 / 030 — voor zowel privépersonen als Nederlandse B.V.'s",
      "Beëdigde vertalingen coördineren (notariële akte, KvK-uittreksel, UBO)",
      "Apostille-traject begeleiden",
    ],
    forWhom:
      "Je bent al begonnen aan een aankoop en wil de papierwinkel niet zelf uitzoeken — of je hebt net gekocht en wil zorgen dat je administratie kloppend is.",
  },
  {
    id: "nieuwbouwtoezicht",
    badge: "Toezicht · Vanaf vandaag",
    title: "Nieuwbouwtoezicht & oplevering",
    price: "€ 350 per bezoek of € 950 pakket",
    priceSub: "(pakket = drie bouwbezoeken + opleveringsinspectie)",
    intro:
      "Heb je nieuwbouw gekocht maar zit je in Nederland? Wij zijn jouw ogen op de bouwplaats. Geen verkoper-belang, geen bouwer-belang — gewoon eerlijke rapportage.",
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
    title: "Concierge — sleutel- en huisbeheer",
    price: "Vanaf € 45 / maand",
    priceSub: "(10% korting bij jaarlijkse vooruitbetaling)",
    intro:
      "Zorg dat je huis blijft draaien terwijl jij in Nederland zit. Drie niveaus, afhankelijk van hoe gemoedelijk je het wil.",
    includes: [
      "Light · € 45/mnd — sleutelbeheer, maandelijkse visuele check, jaarafrekening nutsvoorzieningen",
      "Standard · € 89/mnd — bovenstaande + tweewekelijkse check, post afhandelen, alarmrespons",
      "Villa · € 159/mnd — bovenstaande + wekelijkse check, 2u/mnd klusbudget, 24u-inzet bij calamiteit",
    ],
    forWhom:
      "Je woont niet permanent in Spanje en je wil niet aan de andere kant van Europa hoeven uitzoeken wie er nu weer iets met de boiler moet doen.",
  },
];

const fromQ3 = {
  id: "aankoopbegeleiding",
  badge: "Vanaf zomer 2026",
  title: "Volledige aankoopbegeleiding",
  price: "€ 4.950 vast of 1,75%",
  priceSub: "(min € 4.500, max € 9.500 — je kiest bij aanvang)",
  intro:
    "Het hele traject van zoekprofiel tot sleuteloverdracht. Wij doen het werk, jij neemt de beslissingen. Looptijd doorgaans 3–6 maanden.",
  includes: [
    "Zoekprofiel scherpstellen en actief op zoek (eigen netwerk + lokale Spaanse makelaars + nieuwbouwontwikkelaars)",
    "Bezichtigingen — fysiek door ons, of videocall mét ons erbij",
    "Bod- en onderhandelingsstrategie",
    "Juridische check van het contract door een Spaanse advocaat (in onze prijs)",
    "NIE en CIF (modelo 030 / 036) — geregeld, niet alleen toegelicht",
    "Bankrekening openen en geld overmaken naar Spanje",
    "Begeleiding op de dag van de notaris — Nederlandstalige uitleg op locatie",
    "Sleuteloverdracht, registratie en finale checks",
  ],
  forWhom:
    "Je hebt besloten dat je gaat kopen en je wil dat het ordentelijk gaat — zonder zelf de hele papierwinkel uit te zoeken.",
};

const faqs = [
  {
    q: "Waarom is de volledige aankoopbegeleiding pas vanaf zomer 2026?",
    a: "Wettelijk mogen we pas actief namens een koper zoeken en onderhandelen zodra we ingeschreven staan in het RAICV — het verplichte vastgoedregister van de Comunitat Valenciana sinds oktober 2022. Onze inschrijving (inclusief 200u-opleiding, verzekeringen en caución) loopt en wordt verwacht in Q3 2026. We willen dit liever goed doen dan snel.",
  },
  {
    q: "Hoe lang duurt een aankoop van begin tot sleutel?",
    a: "Bij bestaande bouw: doorgaans 3 maanden. Bij nieuwbouw (off-plan): 9–18 maanden, afhankelijk van bouwfase. Het traject van NIE / CIF / bankrekening duurt zelf al snel 4–8 weken — dat starten we daarom als eerste, parallel met het zoeken.",
  },
  {
    q: "Werken jullie ook buiten de Costa del Azahar?",
    a: "Onze sweet spot is de kust van Vinaròs tot Burriana. We doen ook ad-hoc projecten in de stad Valencia of richting Tarragona, maar daar zijn we minder snel en kennen we minder mensen. Eerlijk antwoord vooraf.",
  },
  {
    q: "Doen jullie ook fiscale en juridische begeleiding?",
    a: "We zijn geen advocaten of belastingadviseurs — dat zou ook niet mogen. We werken structureel met een vaste Spaanse advocaat en een gestor; hun werk zit in de prijs van de begeleiding. Voor specifieke fiscale planning (modelo 720, vermogensbelasting, IRPF) verwijzen we door naar onze gestor.",
  },
  {
    q: "Hoe weet ik dat jullie écht onafhankelijk zijn?",
    a: "We krijgen geen commissie, kickback of cadeau van verkopers, ontwikkelaars, bouwers, banken of notarissen. Onze enige opdrachtgever — en geldstroom — ben jij. Dit staat in je opdrachtbevestiging en we tonen onze RAICV-vergunning en verzekeringen prominent op de site zodra deze binnen zijn.",
  },
];

export default function DienstenPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
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
            Diensten
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
            Wat we vandaag al voor je doen — en wat erbij komt deze zomer.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            We werken aan onze RAICV-vergunning voor volledige aankoopbegeleiding, en dat
            duurt nog tot deze zomer. Ondertussen zijn er vier diensten waarmee we al wel
            kunnen helpen — coaching, papierwinkel, bouwtoezicht en concierge. Allemaal
            vaste prijs, vooraf afgesproken, en wij werken voor jou.
          </p>
        </div>
      </section>

      {/* Available now */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 flex items-baseline justify-between gap-4 border-b border-border pb-6">
          <h2 className="font-heading text-2xl text-navy md:text-3xl">
            Nu beschikbaar
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
            Vier diensten
          </p>
        </div>
        <div className="grid gap-10">
          {availableNow.map((pkg) => (
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
                <p className="mt-6 font-heading text-2xl text-terracotta">
                  {pkg.price}
                </p>
                <p className="text-sm text-muted-foreground">{pkg.priceSub}</p>
                <p className="mt-6 text-sm text-foreground/75">
                  <span className="font-medium text-navy">Voor wie? </span>
                  {pkg.forWhom}
                </p>
              </div>
              <div>
                <p className="text-base text-foreground/85">{pkg.intro}</p>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-olive">
                  Wat zit erin
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

      {/* From Q3 2026 */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mb-10 flex items-baseline justify-between gap-4 border-b border-border pb-6">
            <h2 className="font-heading text-2xl text-navy md:text-3xl">
              In voorbereiding · vanaf zomer 2026
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
              Na RAICV
            </p>
          </div>
          <article
            id={fromQ3.id}
            className="grid scroll-mt-24 gap-6 rounded-3xl border border-border bg-card/80 p-8 shadow-sm md:grid-cols-[1fr_2fr] md:gap-12 md:p-12"
          >
            <div className="flex flex-col">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                {fromQ3.badge}
              </p>
              <h3 className="mt-3 font-heading text-3xl text-navy">{fromQ3.title}</h3>
              <p className="mt-6 font-heading text-2xl text-terracotta">
                {fromQ3.price}
              </p>
              <p className="text-sm text-muted-foreground">{fromQ3.priceSub}</p>
              <p className="mt-6 text-sm text-foreground/75">
                <span className="font-medium text-navy">Voor wie? </span>
                {fromQ3.forWhom}
              </p>
              <p className="mt-6 rounded-xl border border-olive/40 bg-olive/10 p-4 text-sm text-foreground/80">
                Wil je vooraan staan zodra dit pakket open gaat? Plan nu een
                vrijblijvend gesprek — dan zetten we je op de lijst en houden we je op
                de hoogte van onze RAICV-mijlpaal.
              </p>
            </div>
            <div>
              <p className="text-base text-foreground/85">{fromQ3.intro}</p>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-olive">
                Wat komt erin
              </p>
              <ul className="mt-3 space-y-2">
                {fromQ3.includes.map((item) => (
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

      {/* Nieuwbouw specialism */}
      <section className="relative border-b border-border overflow-hidden">
        <Image
          src="/images/IMG_9688.jpg"
          alt="Mediterrane woonstraat met zee-uitzicht aan de Costa del Azahar"
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-navy/85" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-24 text-cream">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
              Speerpunt
            </p>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl">
              Nieuwbouw aan de Costa del Azahar
            </h2>
            <p className="mt-3 text-xs text-cream/60">
              Internationaal vaak <em>off-plan</em> genoemd: kopen vóór oplevering.
            </p>
          </div>
          <div className="space-y-4 text-cream/85">
            <p>
              Tussen Vinaròs en Burriana wordt op dit moment massief gebouwd. Metrovacesa,
              AEDAS, Avanza Urbana en ARQURA hebben in 2025 alleen al meer dan 1.250
              nieuwe woningen in de pijplijn gezet — een groei van bijna 26% in één jaar.
              Mooi voor de keuze, maar nieuwbouw kopen heeft eigen risico&apos;s die de meeste
              kopers onderschatten.
            </p>
            <p>
              Vier deelbetalingen, een bouwlicentie, een aval bancair, oplevering, snagging,
              registratie — allemaal kunnen ze fout gaan, en allemaal staan ze keurig in
              een Spaans contract dat je waarschijnlijk niet leest. Wij hebben dit traject
              net zelf doorlopen met onze eigen villa in Grau de Castellón en weten precies waar
              de scherpe randjes zitten.
            </p>
            <p className="text-cream/70">
              Heb je al nieuwbouw gekocht? Vraag ons{" "}
              <Link
                href="#nieuwbouwtoezicht"
                className="underline hover:text-terracotta"
              >
                Nieuwbouwtoezicht
              </Link>
              {" "}— dat kunnen we nu al doen.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
          Veelgestelde vragen
        </p>
        <h2 className="mt-3 font-heading text-3xl text-navy md:text-4xl">
          Wat klanten vooraf willen weten
        </h2>
        <dl className="mt-10 space-y-8">
          {faqs.map((faq) => (
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
          <h2 className="font-heading text-3xl text-navy md:text-4xl">
            Niet zeker welke dienst past?
          </h2>
          <p className="mt-4 text-foreground/80">
            Begin met een vrijblijvend gesprek. Dat kost je niets en duurt 30 minuten.
            Daarna weten we allebei of we bij elkaar passen.
          </p>
          <BookCallButton className="mt-8 inline-block rounded-full bg-terracotta px-8 py-3 text-base font-medium text-cream transition-colors hover:bg-terracotta/90">
            Plan een kennismakingsgesprek
          </BookCallButton>
        </div>
      </section>
    </main>
  );
}
