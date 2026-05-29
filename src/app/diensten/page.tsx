import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diensten — drie pakketten",
  description:
    "Oriëntatie (€495, verrekend bij doorgang), volledige aankoopbegeleiding (€4.950 of 1,75%), en concierge na de koop (vanaf €45/mnd). Plus een speerpunt: off-plan nieuwbouw.",
};

const packages = [
  {
    id: "orientatie",
    badge: "Pakket 1 · Lage drempel",
    title: "Oriëntatie",
    price: "€ 495",
    priceSub: "(volledig verrekend als je doorgaat met Volledige begeleiding)",
    intro:
      "Voor iedereen die nog niet zeker weet of dit het moment is, of dit de juiste regio is, of wij de juiste club zijn. Geen verplichting verder.",
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
    id: "aankoopbegeleiding",
    badge: "Pakket 2 · Kernproduct",
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
  },
  {
    id: "concierge",
    badge: "Pakket 3 · Na de koop",
    title: "Concierge",
    price: "vanaf € 45 / maand",
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

const faqs = [
  {
    q: "Hoe lang duurt een aankoop van begin tot sleutel?",
    a: "Bij bestaande bouw: doorgaans 3 maanden. Bij nieuwbouw / off-plan: 9–18 maanden, afhankelijk van bouwfase. Het traject van NIE / CIF / bankrekening duurt zelf al snel 4–8 weken — dat starten we daarom als eerste, parallel met het zoeken.",
  },
  {
    q: "Werken jullie ook buiten de Costa del Azahar?",
    a: "Onze sweet spot is de kust van Vinaròs tot Burriana. We doen ook ad-hoc projecten in de stad Valencia of richting Tarragona, maar daar zijn we minder snel en kennen we minder mensen. Eerlijk antwoord vooraf.",
  },
  {
    q: "Doen jullie ook fiscale en juridische begeleiding?",
    a: "We zijn geen advocaten of belastingadviseurs — dat zou ook niet mogen. We werken structureel met een vaste Spaanse advocaat en een gestor; hun werk zit in de prijs van het Begeleidingspakket. Voor specifieke fiscale planning (modelo 720, vermogensbelasting, IRPF) verwijzen we door naar onze gestor.",
  },
  {
    q: "Hoe weet ik dat jullie écht onafhankelijk zijn?",
    a: "We krijgen geen commissie, kickback of cadeau van verkopers, ontwikkelaars, bouwers, banken of notarissen. Onze enige opdrachtgever — en geldstroom — ben jij. Dit staat in je opdrachtbevestiging en we tonen onze RAICV-vergunning en verzekeringen prominent op de site zodra deze binnen zijn (Q3 2026).",
  },
  {
    q: "Wat als ik tóch besluit niet te kopen?",
    a: "Eerlijk: we doen liever geen aankoop dan een verkeerde aankoop. Bij het Begeleidingspakket houden we periodiek 'go/no-go'-momenten. Als je halverwege besluit te stoppen, betaal je voor de tijd die we eraan besteed hebben — niet voor de fictieve aankoop.",
  },
];

export default function DienstenPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-br from-cream via-cream to-secondary/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Diensten
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
            Drie manieren om je aankoop in Spanje te regelen.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            Van een vrijblijvend gesprek tot het volledige traject van bezichtiging
            tot sleuteloverdracht. Vaste prijzen, vooraf afgesproken. Bij elk pakket
            werken wij voor jou — nooit voor de verkoper.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              id={pkg.id}
              className="grid scroll-mt-24 gap-6 rounded-3xl border border-border bg-card p-8 shadow-sm md:grid-cols-[1fr_2fr] md:gap-12 md:p-12"
            >
              <div className="flex flex-col">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                  {pkg.badge}
                </p>
                <h2 className="mt-3 font-heading text-3xl text-navy">
                  {pkg.title}
                </h2>
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

      {/* Off-plan specialism */}
      <section className="border-y border-border bg-navy text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
              Speerpunt
            </p>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl">
              Off-plan nieuwbouw aan de Costa del Azahar
            </h2>
          </div>
          <div className="space-y-4 text-cream/85">
            <p>
              Tussen Vinaròs en Burriana wordt op dit moment massief gebouwd. Metrovacesa,
              AEDAS, Avanza Urbana en ARQURA hebben in 2025 alleen al meer dan 1.250
              nieuwe woningen in de pijplijn gezet — een groei van bijna 26% in één jaar.
              Mooi voor de keuze, maar off-plan kopen heeft eigen risico&apos;s die de meeste
              kopers onderschatten.
            </p>
            <p>
              Vier deelbetalingen, een bouwlicentie, een aval bancair, oplevering, snagging,
              registratie — allemaal kunnen ze fout gaan, en allemaal staan ze keurig in
              een Spaans contract dat je waarschijnlijk niet leest. Wij hebben dit traject
              net zelf doorlopen met onze eigen villa in Benicàssim en weten precies waar
              de scherpe randjes zitten.
            </p>
            <p className="text-cream/70">
              Off-plan begeleiding zit in het pakket{" "}
              <Link href="#aankoopbegeleiding" className="underline hover:text-terracotta">
                Volledige aankoopbegeleiding
              </Link>
              {" "}— geen aparte meerprijs.
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
            Niet zeker welk pakket past?
          </h2>
          <p className="mt-4 text-foreground/80">
            Begin met een vrijblijvend gesprek. Dat kost je niets en duurt 30 minuten.
            Daarna weten we allebei of we bij elkaar passen.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-full bg-terracotta px-8 py-3 text-base font-medium text-cream transition-colors hover:bg-terracotta/90"
          >
            Plan een kennismakingsgesprek
          </Link>
        </div>
      </section>
    </main>
  );
}
