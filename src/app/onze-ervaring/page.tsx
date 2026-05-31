import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";

export const metadata: Metadata = {
  title: "Onze ervaring",
  description:
    "Sinds juli 2023 wonen we aan de Costa del Azahar. Eerst gehuurd in Benicàssim, en in juni 2026 trekken we in ons eerste eigen huis — een nieuwbouwvilla in Grau de Castellón, off-plan gekocht. Dit is hoe dat traject ging.",
};

const timeline = [
  {
    title: "Reservering",
    detail:
      "Kleine aanbetaling om de woning vast te leggen. Reservering geldig voor enkele weken, met een vaste deadline om door te gaan naar contract.",
  },
  {
    title: "Privaat koopcontract",
    detail:
      "Onderhandse koopovereenkomst met de ontwikkelaar. Eerste echte aanbetaling van zo&apos;n 10% van de koopprijs. Vanaf hier ben je juridisch gebonden.",
  },
  {
    title: "Tweede deelbetaling (aplazado)",
    detail:
      "Halverwege de bouwperiode wordt een tweede tranche van 10% overgemaakt naar een speciale rekening van de ontwikkelaar. Pas op: dit geld moet gedekt zijn door een aval bancair.",
  },
  {
    title: "Aval bancair binnen",
    detail:
      "De bankgarantie die je aanbetalingen dekt onder de Spaanse Ley 20/2015. Komt na de aanbetalingen — niet voor. Goed bewaren tot de overdracht.",
  },
  {
    title: "Modelo 036 — fiscale registratie",
    detail:
      "Verplicht voor Nederlandse B.V.&apos;s die in Spanje kopen. Aanvraag bij de AEAT, met beëdigde vertaling van oprichtingsakte en notariële volmacht. Zonder dit nummer geen verdere betalingen mogelijk.",
  },
  {
    title: "Oplevering & escritura",
    detail:
      "Slotbetaling van 80% via een Spaanse bankcheque. Sleuteloverdracht bij de notaris in Castellón. Aval bancair gaat terug naar de ontwikkelaar — anders géén sleutels.",
  },
];

const lessons = [
  {
    title: "Begin een half jaar van tevoren met de paperassen",
    body: "NIE, CIF, bankrekening en modelo 036 hebben elk hun eigen wachttijd. Sequentieel duurt het maanden, parallel een paar weken — maar alleen als je weet welke volgorde mag.",
  },
  {
    title: "Lees de aval-clausule woord voor woord",
    body: "Een aval bancair is geen formaliteit — het is het enige wat je geld beschermt als de bouw stilvalt. Wij hebben gecontroleerd dat de aval écht alle deelbetalingen plus IVA plus wettelijke rente dekt, niet alleen de hoofdsom.",
  },
  {
    title: "Plan de notaristijd, niet de afleverdatum",
    body: "De opleveringsdatum in het contract is de uiterste datum voor de bouwer, niet voor de notarisafspraak. De afspraak bij de notaris kan twee tot vier weken later vallen — boek je vlucht en hotel pas als die datum vaststaat.",
  },
  {
    title: "Een Nederlandse B.V. kopen is anders dan privé kopen",
    body: "Notariële volmacht in Nederland, beëdigde vertaling, apostille, modelo 036 met buitenlandse CIF — een stack die je gestor wél moet kennen. Niet elke gestor doet dit dagelijks.",
  },
  {
    title: "Nieuwbouw kopen is geen impulsaankoop",
    body: "Tussen de eerste storting en de sleutel zitten in ons geval ruim een jaar. Reken op het meest pessimistische scenario voor je liquiditeit — niet op de planning van de bouwer.",
  },
];

export default function OnzeErvaringPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <Image
          src="/images/IMG_2980.jpg"
          alt="Zee-horizon met maan bij dageraad aan de Costa del Azahar"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/40" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Onze ervaring · Costa del Azahar
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
            Drie jaar Spanje, één nieuwbouwaankoop — dit is wat we onderweg leerden.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            We verhuisden in juli 2023 naar Spanje en huurden de eerste tijd in
            Benicàssim. In juni 2026 trekken we in ons eerste eigen huis — een
            nieuwbouwvilla in Grau de Castellón, off-plan gekocht via onze B.V. Vier
            deelbetalingen, een aval bancair, een notariële volmacht in Nederland,
            modelo 036 — we doorliepen precies wat een Nederlander die hier wil kopen
            ook zal doorlopen.
          </p>
        </div>
      </section>

      {/* Drie jaar Spanje, één aankoop */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
              Juli 2023 → vandaag
            </p>
            <h2 className="mt-3 font-heading text-2xl text-navy md:text-3xl">
              Drie jaar leven aan de Costa del Azahar
            </h2>
            <p className="mt-4 text-foreground/85">
              We zijn in 2023 naar Spanje verhuisd — eerst gehuurd, eerst in Benicàssim,
              met de bedoeling om te kijken hoe het zou bevallen. Het beviel. We
              leerden hoe het land werkt: welke gestor je belt voor wát, hoe de
              Spaanse bureaucratie ritmisch maar bureaucratisch is, hoe een NIE écht in
              elkaar steekt, en waarom Castellón rustiger en authentieker aanvoelt dan
              de meeste Nederlanders denken.
            </p>
            <p className="mt-3 text-foreground/85">
              In die jaren bouwden we een lokaal netwerk op van gestores, notarissen
              en bouwers die we vertrouwen — mensen waar we ons eigen geld aan
              durven toevertrouwen.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
              2025 → juni 2026
            </p>
            <h2 className="mt-3 font-heading text-2xl text-navy md:text-3xl">
              Onze eerste eigen aankoop
            </h2>
            <p className="mt-4 text-foreground/85">
              Spanje was thuis geworden, dus we besloten te kopen. Het werd een chalet
              adosado in de promotie Villas del Mar van Metrovacesa — nieuwbouw, in Grau
              de Castellón. We dachten met onze Nederlandse vastgoedachtergrond én drie
              jaar Spanje op zak: dit gaat soepel.
            </p>
            <p className="mt-3 text-foreground/85">
              Hilarisch fout, natuurlijk. Kopen via een Nederlandse B.V. brengt een
              hele nieuwe stapel complicaties mee — notariële volmacht in Nederland,
              beëdigde vertaling, apostille, een Spaanse CIF aanvragen via modelo 036,
              en een aval bancair tracken volgens Ley 20/2015. Vier deelbetalingen over
              twee landen. In juni 2026 krijgen we de sleutel.
            </p>
          </div>
        </div>
      </section>

      {/* Full-bleed villa photo */}
      <section className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
        <Image
          src="/images/IMG_3657.jpg"
          alt="Nieuwbouw chalet adosado in Grau de Castellón — Metrovacesa Villas del Mar"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Villa specs */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
            De villa in cijfers
          </p>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              ["Type", "Chalet adosado / pareado"],
              ["Bouwfase", "Casco klaar, afbouw"],
              ["Perceeloppervlak", "± 252 m²"],
              ["Bewoonbaar", "± 127 m²"],
              ["Terrassen", "± 146 m²"],
              ["Tuin", "± 74 m²"],
              ["Ontwikkelaar", "Metrovacesa"],
              ["IVA op nieuwbouw", "10 %"],
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

      {/* Timeline */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Hoe een nieuwbouwtraject (off-plan) eruit ziet
          </p>
          <h2 className="mt-3 font-heading text-3xl text-navy md:text-4xl">
            Zes mijlpalen tussen "ja, ik wil" en de sleuteloverdracht
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/80">
            Geen specifieke bedragen of namen — dit is het patroon dat bij vrijwel elke
            grote Spaanse nieuwbouwontwikkelaar terugkomt. Op iedere stap kan iets
            misgaan, en op iedere stap zit een controle die je kunt doen vóór je
            betaalt.
          </p>
          <ol className="mt-10 space-y-8">
            {timeline.map((item, idx) => (
              <li
                key={item.title}
                className="grid gap-4 md:grid-cols-[120px_1fr] md:gap-8"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                    Stap {idx + 1}
                  </p>
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
          <BookCallButton className="mt-8 inline-block rounded-full bg-terracotta px-8 py-3 text-base font-medium text-cream transition-colors hover:bg-terracotta/90">
            Plan een vrijblijvend gesprek
          </BookCallButton>
        </div>
      </section>
    </main>
  );
}
