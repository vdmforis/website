import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Onze villa in Benicàssim",
  description:
    "Hoe wij in 2026 zelf een nieuwbouwvilla bij Metrovacesa kochten — kosten, timeline, valkuilen en wat we onderweg leerden.",
};

const timeline = [
  {
    date: "februari 2026",
    title: "Reservering",
    detail:
      "€ 3.300 reservevergoeding overgemaakt naar Metrovacesa. Reservering geldig tot 13 maart om het contract te sluiten.",
  },
  {
    date: "maart 2026",
    title: "Privaat koopcontract",
    detail:
      "Contract ondertekend in Castellón. € 52.019 aanbetaling (10% — IVA inclusief) plus uitleg van vier deelbetalingen, aval bancair en opleveringsdatum.",
  },
  {
    date: "april 2026",
    title: "Tweede deelbetaling",
    detail:
      "€ 55.319 overgemaakt naar de speciale CaixaBank-rekening van Metrovacesa. Tweede 10% van de prijs.",
  },
  {
    date: "mei 2026",
    title: "Aval CaixaBank ontvangen",
    detail:
      "Bankgarantie binnen die de aanbetalingen dekt volgens Ley 20/2015 — verplicht voor nieuwbouw in Spanje. Goed bewaren tot escritura.",
  },
  {
    date: "mei 2026",
    title: "Modelo 036 ingediend",
    detail:
      "Definitieve Spaanse CIF aanvragen voor de B.V. — anders kunnen we niet betalen vanuit de juiste rekening. Asiento RGE714033812026 bij de AEAT.",
  },
  {
    date: "juni 2026 (uiterlijk)",
    title: "Oplevering en escritura",
    detail:
      "Bij notaris Marta Peña Tallada in Castellón. Slotbetaling van € 442.552 via cheque bancario nominativo. Sleuteloverdracht. Aval bancair terug naar Metrovacesa.",
  },
];

const lessons = [
  {
    title: "Begin minstens een half jaar van tevoren met de paperassen",
    body: "NIE, CIF, bankrekening en modelo 036 hebben elk hun eigen wachttijd. Sequentieel duurt het maanden, parallel een paar weken — maar alleen als je weet welke volgorde mag.",
  },
  {
    title: "Lees de aval-clausule woord voor woord",
    body: "Een aval bancair is geen formaliteit — het is het enige wat je geld beschermt als de bouw stilvalt. Wij hebben gecontroleerd dat de aval écht alle deelbetalingen plus IVA plus wettelijke rente dekt, niet alleen de hoofdsom.",
  },
  {
    title: "Plan de notaristijd, niet de afleverdatum",
    body: "De opleveringsdatum in het contract is de uiterste datum voor de bouwer, niet de notaristijd. De afspraak bij de notaris kan twee tot vier weken later vallen — boek je vlucht en hotel daar pas op als die datum vaststaat.",
  },
  {
    title: "Een Nederlandse B.V. kopen is anders dan privé kopen",
    body: "Notariële volmacht in Nederland, beëdigde vertaling, apostille, modelo 036 met buitenlandse CIF — een stack die je ervaren gestor wél moet kennen. Niet elke gestor doet dit dagelijks.",
  },
  {
    title: "Off-plan is geen impulsaankoop",
    body: "Tussen de eerste storting en de sleutel zitten in ons geval 14 maanden. Reken op het meest pessimistische scenario voor je liquiditeit — niet op de planning van de bouwer.",
  },
];

export default function OnzeVillaPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-br from-cream via-cream to-secondary/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Onze eigen aankoop · Benicàssim
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
            Wij kochten een nieuwbouwvilla in Benicàssim. Dit is hoe het ging.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            In 2026 sloten we via onze B.V. een contract met Metrovacesa voor Villa #10 in
            de promotie Villas del Mar. Geen verhuurobject, geen marketingvehikel — maar
            een eigen ervaring waar we letterlijk dezelfde papierwinkel doorlopen die elke
            koper hier doorloopt. We zijn er open over.
          </p>
        </div>
      </section>

      {/* Object specs */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              ["Type", "Chalet adosado / pareado"],
              ["Bouwjaar", "2024 — 2026"],
              ["Perceeloppervlak", "252 m²"],
              ["Bewoonbaar", "127 m²"],
              ["Terrassen", "146 m²"],
              ["Tuin", "74 m²"],
              ["Cuota participación", "5,56 %"],
              ["Bouwer", "ACSA Obras"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                  {label}
                </p>
                <p className="mt-1 text-lg text-navy">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost breakdown */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
          Cijfers, open boek
        </p>
        <h2 className="mt-3 font-heading text-3xl text-navy md:text-4xl">
          Wat heeft het ons gekost
        </h2>
        <p className="mt-4 text-foreground/80">
          Aankoopprijs inclusief 10% IVA. Notaris-, registratie- en advocaatkosten staan
          hier los — die rekenen we apart op als netto bedragen zodra ze definitief zijn.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50 text-navy">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Moment</th>
                <th className="px-6 py-4 text-left font-medium">Onderdeel</th>
                <th className="px-6 py-4 text-right font-medium">Bedrag</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              <tr>
                <td className="px-6 py-4 text-muted-foreground">26-02-2026</td>
                <td className="px-6 py-4">Reservering</td>
                <td className="px-6 py-4 text-right">€ 3.300</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-muted-foreground">06-03-2026</td>
                <td className="px-6 py-4">Aanbetaling bij privaat contract</td>
                <td className="px-6 py-4 text-right">€ 52.019</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-muted-foreground">05-04-2026</td>
                <td className="px-6 py-4">Tweede deelbetaling</td>
                <td className="px-6 py-4 text-right">€ 55.319</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-muted-foreground">~juni 2026</td>
                <td className="px-6 py-4">Slotbetaling bij escritura</td>
                <td className="px-6 py-4 text-right">€ 442.552</td>
              </tr>
              <tr className="bg-navy/5 font-medium text-navy">
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">Totale aankoopprijs incl. 10% IVA</td>
                <td className="px-6 py-4 text-right">€ 553.190</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Tijdlijn
          </p>
          <h2 className="mt-3 font-heading text-3xl text-navy md:text-4xl">
            Hoe het traject eruitziet
          </h2>
          <ol className="mt-10 space-y-8">
            {timeline.map((item, idx) => (
              <li key={item.date} className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                    Stap {idx + 1}
                  </p>
                  <p className="mt-1 text-navy">{item.date}</p>
                </div>
                <div>
                  <p className="font-heading text-xl text-navy">{item.title}</p>
                  <p className="mt-2 text-foreground/80">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Lessons */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
          Wat we leerden
        </p>
        <h2 className="mt-3 font-heading text-3xl text-navy md:text-4xl">
          Vijf dingen waar we volgende keer eerder mee zouden zijn
        </h2>
        <div className="mt-10 grid gap-6">
          {lessons.map((lesson, idx) => (
            <div
              key={lesson.title}
              className="grid gap-4 rounded-2xl border border-border bg-card p-8 md:grid-cols-[80px_1fr]"
            >
              <p className="font-heading text-4xl text-terracotta">{`0${idx + 1}`}</p>
              <div>
                <p className="font-heading text-xl text-navy">{lesson.title}</p>
                <p className="mt-2 text-foreground/80">{lesson.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-navy text-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl">
            Wil je hetzelfde traject lopen, met minder zoekwerk?
          </h2>
          <p className="mt-4 text-cream/85">
            Wij hebben dit net gedaan. We weten wie er meedenkt, wie er voorleest, en
            wie je dit jaar wel of niet moet bellen.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-full bg-terracotta px-8 py-3 text-base font-medium text-cream transition-colors hover:bg-terracotta/90"
          >
            Plan een vrijblijvend gesprek
          </Link>
        </div>
      </section>
    </main>
  );
}
