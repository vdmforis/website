import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "We wonen al bijna drie jaar in Grau de Castellón en kochten zelf — twee keer — een huis aan de Costa del Azahar. Foris is opgericht om andere Nederlanders het traject met minder zoekwerk te besparen.",
};

export default function OverOnsPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-br from-cream via-cream to-secondary/60">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Over ons
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
            Hoi, wij zijn Foris.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/85">
            We wonen al bijna drie jaar in Grau de Castellón, aan de Costa del Azahar.
            We kochten hier eerst ons eigen huis, en daarna een villa via onze B.V. Twee
            aankopen, twee notarissen, twee gestores, twee banken en ongeveer 47
            vertaalde documenten verder hebben we besloten: dit doen we voortaan ook
            voor anderen.
          </p>
        </div>
      </section>

      {/* Section 1 — Hoe we hier terechtkwamen */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl text-navy md:text-4xl">
          Hoe we hier terechtkwamen
        </h2>
        <div className="mt-6 space-y-4 text-foreground/85">
          <p>
            Drie jaar geleden namen we de stap: weg uit Nederland, op zoek naar zon,
            ruimte en een ander tempo. We kwamen uit bij de Costa del Azahar — de
            kuststrook van de provincie Castellón, tussen Valencia en Tarragona. Rustiger
            dan de Costa Blanca, betaalbaarder dan de Costa del Sol, met directe vluchten
            op Valencia en zo&apos;n 300 zonuren per maand in de zomer.
          </p>
          <p>
            We kochten een huis in Grau de Castellón en gingen erin wonen. Dat was niet
            eenvoudig. Niet omdat het huis ingewikkeld was — dat viel reuze mee. Maar
            omdat álles eromheen ingewikkeld bleek. De NIE-aanvraag duurde drie keer
            langer dan beloofd. De bankrekening kreeg je niet zonder NIE, en de NIE niet
            zonder vast adres, en het vaste adres niet zonder bankrekening. Welkom in
            Spanje.
          </p>
          <p>
            We leerden gaandeweg hoe het werkt. Wélke gestor je belt voor wát, welke
            notaris meedenkt en welke alleen voorleest, hoe je een aval bancair écht
            moet lezen, en waarom je een modelo 036 vroeger indient dan je denkt.
          </p>
        </div>
      </section>

      {/* Section 2 — En toen nóg een keer */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">
            En toen nóg een keer
          </h2>
          <div className="mt-6 space-y-4 text-foreground/85">
            <p>
              In 2025 besloten we opnieuw te kopen — dit keer via onze nieuwe B.V., Van
              der Meulen Foris B.V. Een villa in nieuwbouw, off-plan, bij een grote
              Spaanse ontwikkelaar in Benicàssim. We dachten: nu weten we hoe het werkt,
              dit gaat soepel.
            </p>
            <p>
              Hilarisch fout, natuurlijk. Een aankoop via een Nederlandse B.V. brengt
              een hele nieuwe stapel complicaties mee: notariële volmacht in Nederland,
              beëdigde vertaling, apostille, Spaanse CIF aanvragen via modelo 036, aval
              bancair tracken volgens Ley 20/2015, vier betaalmomenten over twee landen
              heen.
            </p>
            <p>
              Het is gelukt. De sleutel volgt deze zomer. En tijdens dat traject keken
              we elkaar op een gegeven moment aan en zeiden:{" "}
              <em className="text-navy">
                dit zou geen enkele Nederlander in zijn eentje moeten hoeven uitzoeken.
              </em>
            </p>
            <p className="text-sm text-muted-foreground">
              Lees het hele verhaal van die tweede aankoop op{" "}
              <Link href="/onze-ervaring" className="text-terracotta hover:underline">
                Onze ervaring
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Waarom Foris */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl text-navy md:text-4xl">
          Waarom Foris
        </h2>
        <div className="mt-6 space-y-4 text-foreground/85">
          <p>
            De Costa del Azahar is op vastgoedgebied jaren achter op haar bekendere
            zusjes in het zuiden. Dat is een van de redenen dat we ervoor kozen — prijzen
            liggen lager, de stranden zijn leger, en de echte mediterrane sfeer is hier
            nog niet wegontwikkeld.
          </p>
          <p>
            Maar het is ook een reden waarom de Nederlandstalige dienstverlening hier
            minimaal is. De meeste Nederlandse aankoopmakelaars zitten in Alicante of op
            de Costa Blanca, twee uur rijden. Lokale Spaanse makelaars zijn vaak prima,
            maar ze werken voor de verkoper en spreken zelden Nederlands. En ja, je kunt
            het zelf doen — maar reken op een jaar onderzoek, een paar misstappen en een
            verhoogde bloeddruk.
          </p>
          <p>
            Foris vult dat gat. We zijn Nederlandstalig, ter plaatse, en werken alleen
            voor de koper — nooit voor de verkoper. We krijgen geen commissie van
            verkopers, ontwikkelaars of bouwers. Onze enige opdrachtgever ben jij, en
            onze enige geldstroom komt van jou.
          </p>
        </div>
      </section>

      {/* Section 4 — Wat we voor je doen */}
      <section className="border-y border-border bg-navy text-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl">
            Wat we voor je doen
          </h2>
          <div className="mt-6 space-y-4 text-cream/85">
            <p>
              Vandaag al beschikbaar: oriëntatie en coaching voor wie zich nog
              oriënteert, papierwinkel-coördinatie (NIE / CIF / bank / modelo 036),
              off-plan oversight voor wie al gekocht heeft, en concierge voor huizen
              die af en toe leeg staan. Vaste prijzen, vooraf afgesproken.
            </p>
            <p>
              Vanaf deze zomer: volledige aankoopbegeleiding van zoekprofiel tot
              sleuteloverdracht. We ronden eerst onze RAICV-vergunning af (verplicht
              voor vastgoedbemiddeling in de Comunitat Valenciana) voordat we dat
              pakket aanbieden. Liever goed dan snel.
            </p>
            <p>
              <Link
                href="/diensten"
                className="underline hover:text-terracotta"
              >
                Alle diensten en prijzen op een rij →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — Wie wij zijn */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl text-navy md:text-4xl">
          Wie wij zijn
        </h2>
        <div className="mt-6 space-y-4 text-foreground/85">
          <p>
            Foris is opgericht door Van der Meulen Beheer B.V., een familiebedrijf uit
            Drenthe. De dagelijkse leiding van Foris ligt bij{" "}
            <span className="text-navy">Dennis van der Meulen</span>, die sinds 2023 in
            Grau de Castellón woont en de aankooptrajecten ter plaatse uitvoert.
          </p>
          <p>
            We werken samen met een vast clubje vertrouwde partners: een gestor in
            Castellón, twee notarissen (een in Nederland, een in Castellón), een
            Spaanse advocaat en de banken die we zelf ook gebruiken. Geen
            affiliate-deals, geen kickbacks, gewoon mensen waar we ons eigen geld aan
            toevertrouwen.
          </p>
        </div>
      </section>

      {/* Section 6 — Wat we beloven */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">
            Wat we beloven
          </h2>
          <ul className="mt-8 space-y-5">
            {[
              "We zeggen het eerlijk — ook als dat betekent dat je dit huis níet moet kopen.",
              "We zijn duidelijk over geld — vooraf, schriftelijk, niets achteraf.",
              "We doen alleen werk dat we zelf zouden willen krijgen.",
              "Wat we niet kunnen, doen we niet. We sturen je dan door naar iemand die het wel kan.",
            ].map((promise, idx) => (
              <li
                key={promise}
                className="flex gap-4 text-foreground/85"
              >
                <span className="font-heading text-2xl text-terracotta">{`0${idx + 1}`}</span>
                <span className="pt-1">{promise}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">
            Klinkt dit als de juiste club voor jouw aankoop?
          </h2>
          <p className="mt-4 text-foreground/80">
            Begin met een vrijblijvend kennismakingsgesprek. Dat kost je niets en duurt
            30 minuten.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-full bg-terracotta px-8 py-3 text-base font-medium text-cream transition-colors hover:bg-terracotta/90"
          >
            Plan een gesprek
          </Link>
        </div>
      </section>
    </main>
  );
}
