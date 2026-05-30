import Image from "next/image";
import Link from "next/link";
import { Compass, FileText, HardHat, KeyRound } from "lucide-react";
import { HeroForm } from "@/components/HeroForm";
import { BookCallButton } from "@/components/BookCallButton";
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
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-32">
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
              Costa del Azahar · Castellón
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl lg:text-6xl">
              Een huis kopen in Spanje zonder de typische valkuilen — van NIE tot notaris, in het Nederlands geregeld.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">
              We wonen sinds juli 2023 aan deze kust, kennen de notarissen, banken en
              bouwers persoonlijk, en hebben het hele aankooptraject net zelf doorlopen
              voor onze eigen nieuwbouwvilla.
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
            <ul className="mt-8 space-y-3 text-foreground/85">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                <span>Onafhankelijk — we krijgen geen commissie van verkopers</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                <span>Vaste prijs, vooraf afgesproken — geen verrassingen achteraf</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                <span>Ter plaatse in Castellón, Nederlandstalig contact</span>
              </li>
            </ul>
          </div>
          <div id="contact" className="flex flex-col justify-center scroll-mt-24">
            <HeroForm />
          </div>
        </div>
      </section>

      {/* Begin gratis */}
      <section className="border-t border-border bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <h2 className="font-heading text-3xl md:text-4xl">
              Begin gratis
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
              Drie manieren, zonder verplichtingen
            </p>
          </div>
          <p className="mt-4 max-w-2xl text-cream/85">
            Voordat je een euro uitgeeft willen we eerst weten of we bij elkaar passen.
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
                De 9 valkuilen bij een huis kopen in Spanje als Nederlander —
                eerstehandse ervaring, geen marketingverhaal.
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
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <h2 className="font-heading text-3xl text-navy md:text-4xl">
              Wat we vandaag al voor je doen
            </h2>
            <Link
              href="/diensten"
              className="text-sm text-terracotta hover:underline"
            >
              Alle diensten en prijzen →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Oriëntatie & coaching",
                body: "Anderhalf uur intake, regiogids op maat, warme intro's naar onze gestor en bank.",
                price: "€ 495",
                href: "/diensten#orientatie",
                Icon: Compass,
              },
              {
                title: "Papierwinkel",
                body: "NIE, CIF, bankrekening, modelo 036, vertalingen en apostille — voor privé én B.V.",
                price: "€ 350–650",
                href: "/diensten#papierwinkel",
                Icon: FileText,
              },
              {
                title: "Nieuwbouwtoezicht",
                body: "Bouwbezoeken, fotorapportage, aval-controle en opleveringsinspectie als jij in NL zit.",
                price: "€ 350 per bezoek",
                href: "/diensten#nieuwbouwtoezicht",
                Icon: HardHat,
              },
              {
                title: "Concierge",
                body: "Sleutel, post, alarm, klusjescoördinatie — drie niveaus van licht tot villa-grade.",
                price: "Vanaf € 45 / mnd",
                href: "/diensten#concierge",
                Icon: KeyRound,
              },
            ].map(({ Icon, ...s }) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-terracotta/60 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-cream">
                    <Icon size={20} strokeWidth={1.75} aria-hidden />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                    {s.price}
                  </p>
                </div>
                <h3 className="mt-4 font-heading text-xl text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-foreground/80">{s.body}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-sm text-foreground/70">
            <span className="font-medium text-navy">Volledige aankoopbegeleiding</span>{" "}
            (van zoekprofiel tot sleutel) volgt zomer 2026 — zodra onze RAICV-vergunning
            binnen is.
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                Eigen ervaring
              </p>
              <p className="mt-2 text-foreground/85">
                Sinds juli 2023 wonen we aan deze kust — eerst gehuurd in Benicàssim, nu
                in juni 2026 verhuizen we naar ons eerste eigen huis, een nieuwbouwvilla
                via onze B.V. We kennen de paperassen van binnenuit.
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
