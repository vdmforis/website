import Image from "next/image";
import Link from "next/link";
import { Compass, FileText, HardHat, KeyRound } from "lucide-react";
import { HeroForm } from "@/components/HeroForm";
import { BookCallButton } from "@/components/BookCallButton";
import { Werkwijze3D } from "@/components/Werkwijze3D";
import { whatsappLink } from "@/lib/contact";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/IMG_5740.jpg"
          alt="Zonsondergang op de boulevard aan de Costa del Azahar"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/40" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-32">
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
              Nieuwbouw · Costa del Azahar · Castellón
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl lg:text-6xl">
              Nieuwbouw kopen in Spanje, zonder de typische valkuilen.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">
              Nederlandstalige aankoopbegeleiding bij nieuwbouw aan de Costa del
              Azahar — van reservering tot sleuteloverdracht, met vaste advocaten,
              notarissen en banken in het netwerk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookCallButton className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90">
                Plan een gratis gesprek
              </BookCallButton>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-terracotta"
              >
                Of stuur een WhatsApp
              </a>
            </div>
            <p className="mt-4 text-sm text-foreground/70">
              Liever eerst lezen?{" "}
              <Link
                href="/gratis-gids"
                className="font-medium text-terracotta underline-offset-4 hover:underline"
              >
                Download onze 24-pagina gids — gratis →
              </Link>
            </p>
            <ul className="mt-8 space-y-3 text-foreground/85">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                <span>Onafhankelijk — we krijgen geen commissie van verkopers</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                <span>Puur nieuwbouw — dat is alles wat we doen</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                <span>Altijd een offerte vooraf — geen verrassingen achteraf</span>
              </li>
            </ul>
          </div>
          <div id="contact" className="flex flex-col justify-center scroll-mt-24">
            <HeroForm />
          </div>
        </div>
      </section>

      {/* Werkwijze — 3D scroll */}
      <Werkwijze3D />

      {/* Begin gratis */}
      <section className="border-t border-border bg-navy text-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <h2 className="font-heading text-3xl md:text-4xl">
              Begin gratis
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
              Drie manieren, zonder verplichtingen
            </p>
          </div>
          <p className="mt-4 max-w-2xl text-cream/85">
            Voordat je iets vastlegt willen we eerst weten of we bij elkaar passen.
            Kies de manier die jou het prettigst lijkt — alle drie zijn gratis en
            kunnen vandaag nog.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <BookCallButton className="group flex flex-col rounded-2xl border border-cream/15 bg-cream/5 p-6 transition-colors hover:border-terracotta hover:bg-cream/10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
                30 min · gratis
              </p>
              <h3 className="mt-3 font-heading text-xl">Plan een kennismaking</h3>
              <p className="mt-2 flex-1 text-sm text-cream/80">
                Videocall met Dennis. We luisteren naar je situatie, beantwoorden
                vragen, en zeggen eerlijk of we de juiste club voor je zijn.
              </p>
              <span className="mt-4 text-sm text-terracotta">
                Boek een tijd →
              </span>
            </BookCallButton>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-cream/15 bg-cream/5 p-6 transition-colors hover:border-[#25D366] hover:bg-cream/10"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#5ee290]">
                Direct · gratis
              </p>
              <h3 className="mt-3 font-heading text-xl">WhatsApp Dennis</h3>
              <p className="mt-2 flex-1 text-sm text-cream/80">
                Voor de korte vragen. Eerste reactie meestal binnen een paar uur, in
                het Nederlands. Geen formulier, geen bot.
              </p>
              <span className="mt-4 text-sm text-[#5ee290]">
                Open WhatsApp →
              </span>
            </a>
            <Link
              href="/gratis-gids"
              className="group flex flex-col rounded-2xl border border-cream/15 bg-cream/5 p-6 transition-colors hover:border-terracotta hover:bg-cream/10"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
                PDF · 24 pagina&apos;s · gratis
              </p>
              <h3 className="mt-3 font-heading text-xl">Download onze gids</h3>
              <p className="mt-2 flex-1 text-sm text-cream/80">
                De 9 valkuilen bij nieuwbouw kopen in Spanje als Nederlander —
                rechtstreeks uit onze eigen vastgoedpraktijk, geen marketingverhaal.
              </p>
              <span className="mt-4 text-sm text-terracotta">
                Stuur me de gids →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Wat we vandaag al doen */}
      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <h2 className="font-heading text-3xl text-navy md:text-4xl">
              Wat we vandaag al voor je doen
            </h2>
            <Link
              href="/diensten"
              className="text-sm text-terracotta hover:underline"
            >
              Alle diensten →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Oriëntatie & coaching",
                body: "Anderhalf uur intake, regiogids op maat, warme intro's naar onze gestor en bank.",
                href: "/diensten#orientatie",
                Icon: Compass,
              },
              {
                title: "Papierwinkel",
                body: "NIE, CIF, bankrekening, modelo 036, vertalingen en apostille — voor privé én B.V.",
                href: "/diensten#papierwinkel",
                Icon: FileText,
              },
              {
                title: "Nieuwbouwtoezicht",
                body: "Bouwbezoeken, fotorapportage, aval-controle en opleveringsinspectie als jij in NL zit.",
                href: "/diensten#nieuwbouwtoezicht",
                Icon: HardHat,
              },
              {
                title: "Concierge",
                body: "Sleutel, post, alarm, klusjescoördinatie — drie niveaus van licht tot villa-grade.",
                href: "/diensten#concierge",
                Icon: KeyRound,
              },
            ].map(({ Icon, ...s }) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-terracotta/60 hover:shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-cream">
                  <Icon size={20} strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-4 font-heading text-xl text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-foreground/80">{s.body}</p>
                <span className="mt-4 text-sm text-terracotta">
                  Vraag een offerte aan →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-sm text-foreground/70">
            <span className="font-medium text-navy">Volledige aankoopbegeleiding</span>{" "}
            (van reservering tot sleutel) volgt zodra onze RAICV-vergunning binnen is —
            de aanvraag loopt.
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                Eigen ervaring
              </p>
              <p className="mt-2 text-foreground/85">
                Foris komt voort uit een familiebedrijf met ruime vastgoedervaring
                in Nederland en Spanje — met name aan de Costa del Azahar. Nieuwbouw
                kennen we van binnenuit: van reservering en aval tot oplevering.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                Vergund &amp; verzekerd
              </p>
              <p className="mt-2 text-foreground/85">
                RAICV-vergunning in aanvraag, beroepsaansprakelijkheids- en
                cliëntgeldenverzekering geregeld via onze gestor in Castellón.
                Transparantie staat hier zodra de papieren binnen zijn.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                Specialisatie
              </p>
              <p className="mt-2 text-foreground/85">
                Nieuwbouw (ook wel off-plan genoemd) aan de kuststrook tussen Vinaròs en
                Burriana — een groeisegment waar nog weinig Nederlandse begeleiding voor
                beschikbaar is.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
