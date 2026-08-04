import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";

export const metadata: Metadata = {
  title: "Onze ervaring",
  description:
    "Nederlandse vastgoedervaring uit een familiebedrijf en jarenlang wonen en werken aan de Costa del Azahar — zo begeleiden we nieuwbouwtrajecten van reservering tot sleutel.",
};

const stats = [
  {
    big: "10+ jaar",
    small: "vastgoed in Nederland — koop, ontwikkeling en verhuur, uit familiebedrijf",
  },
  {
    big: "Ter plaatse",
    small: "jarenlang wonend en werkend aan de Costa del Azahar",
  },
  {
    big: "Vast netwerk",
    small: "notarissen, gestores en advocaten in Castellón en Valencia",
  },
  {
    big: "Eigen praktijk",
    small: "nieuwbouwtrajecten zelf doorlopen, van reservering tot sleutel",
  },
];

const timeline = [
  {
    title: "Reservering",
    detail:
      "Kleine aanbetaling om de woning vast te leggen, met een vaste deadline richting contract.",
  },
  {
    title: "Privaat koopcontract",
    detail:
      "Eerste aanbetaling van zo'n 10% — vanaf hier ben je juridisch gebonden.",
  },
  {
    title: "Tweede deelbetaling",
    detail:
      "Tweede tranche halverwege de bouw, uitsluitend naar de speciale projectrekening van de ontwikkelaar.",
  },
  {
    title: "Aval bancair",
    detail:
      "De bankgarantie die je aanbetalingen dekt (Ley 20/2015) — woord voor woord controleren vóór je betaalt.",
  },
  {
    title: "Fiscale registratie",
    detail:
      "NIE (privé) of CIF via modelo 036 (B.V.) — zonder dit nummer geen notaris.",
  },
  {
    title: "Oplevering & escritura",
    detail:
      "Slotbetaling per bankcheque, sleutel bij de notaris, aval retour naar de ontwikkelaar.",
  },
];

const lessons = [
  {
    title: "Begin een half jaar van tevoren met de paperassen",
    body: "NIE, bankrekening en registraties hebben elk hun eigen wachttijd — parallel geregeld scheelt maanden.",
  },
  {
    title: "Lees de aval-clausule woord voor woord",
    body: "Check dat de garantie álle deelbetalingen dekt, plus IVA en wettelijke rente — niet alleen de hoofdsom.",
  },
  {
    title: "Plan de notaristijd, niet de opleverdatum",
    body: "De notarisafspraak valt vaak weken na de oplevering — boek reizen pas als die datum vaststaat.",
  },
  {
    title: "Kies vóór de reservering: privé of via een B.V.",
    body: "De route bepaalt welke papieren en registraties je nodig hebt — halverwege wisselen kost weken.",
  },
  {
    title: "Nieuwbouw is geen impulsaankoop",
    body: "Tussen eerste storting en sleutel zit al snel een jaar of meer — reken je liquiditeit op het trage scenario.",
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
            Jarenlang in Spanje wonend, met Nederlandse vastgoedwortels.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            We kennen het nieuwbouwtraject van twee kanten — niet uit een
            handboek, uit eigen praktijk.
          </p>
        </div>
      </section>

      {/* Stat tiles */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.big}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="font-heading text-2xl text-terracotta">{stat.big}</p>
              <p className="mt-2 text-sm text-foreground/80">{stat.small}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-foreground/85">
          We adviseren geen stap die we niet zelf in de praktijk hebben
          uitgevoerd. Koop je via een Nederlandse B.V.? Ook dat traject kennen
          we van binnenuit.
        </p>
      </section>

      {/* Full-bleed villa photo */}
      <section className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
        <Image
          src="/images/IMG_3657.jpg"
          alt="Nieuwbouwvilla aan de Costa del Azahar"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Timeline */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Nieuwbouwtraject · ons standaard speelveld
          </p>
          <h2 className="mt-3 font-heading text-3xl text-navy md:text-4xl">
            Zes mijlpalen, zes controles
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/80">
            Dit patroon komt bij vrijwel elke Spaanse nieuwbouwontwikkelaar
            terug. Op elke stap zit een controle die je doet vóór je betaalt.
          </p>
          <ol className="relative mt-10 space-y-8 border-l-2 border-terracotta/30 pl-8">
            {timeline.map((item, idx) => (
              <li key={item.title} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-terracotta font-mono text-[0.65rem] text-cream"
                >
                  {idx + 1}
                </span>
                <p className="font-heading text-xl text-navy">{item.title}</p>
                <p className="mt-1 text-foreground/80">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Lessons */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
          Onze methode · vaste controles
        </p>
        <h2 className="mt-3 font-heading text-3xl text-navy md:text-4xl">
          Vijf inzichten die standaard meegaan in elke begeleiding
        </h2>
        <div className="mt-10 grid gap-4">
          {lessons.map((lesson, idx) => (
            <div
              key={lesson.title}
              className="grid gap-3 rounded-2xl border border-border bg-card p-6 md:grid-cols-[64px_1fr] md:items-baseline"
            >
              <p className="font-heading text-3xl text-terracotta">{`0${idx + 1}`}</p>
              <div>
                <p className="font-heading text-lg text-navy">{lesson.title}</p>
                <p className="mt-1 text-sm text-foreground/80">{lesson.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-navy text-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl">
            Dit traject lopen met ervaren mensen?
          </h2>
          <p className="mt-4 text-cream/85">
            Vast netwerk, vaste methode, Nederlandstalig.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <BookCallButton className="inline-block rounded-full bg-terracotta px-8 py-3 text-base font-medium text-cream transition-colors hover:bg-terracotta/90">
              Plan een vrijblijvend gesprek
            </BookCallButton>
            <Link
              href="/offerte"
              className="inline-block rounded-full border border-cream/30 px-8 py-3 text-base font-medium text-cream transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Vraag een offerte aan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
