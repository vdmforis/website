import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/contact";
import { BookCallButton } from "@/components/BookCallButton";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Foris is de Spaanse tak van een Nederlands vastgoedfamiliebedrijf: tien jaar ervaring in koop, ontwikkeling en verhuur, gecombineerd met een vast netwerk en eigen nieuwbouwpraktijk aan de Costa del Azahar.",
};

export default function OverOnsPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <Image
          src="/images/IMG_4402.jpg"
          alt="Strand bij dageraad aan de Costa del Azahar — Grau de Castellón"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream/95 via-cream/80 to-cream/40" />
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Over ons
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
            Een vastgoedfamiliebedrijf, met een Spaanse tak aan de Costa del
            Azahar.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/85">
            Nederlandse vastgoedkennis, een vast lokaal netwerk en eigen
            nieuwbouwpraktijk — gebundeld in één aanspreekpunt voor buitenlandse
            kopers.
          </p>
        </div>
      </section>

      {/* Het bedrijf */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl text-navy md:text-4xl">
          Twee takken, één discipline
        </h2>
        <div className="mt-6 space-y-4 text-foreground/85">
          <p>
            In Nederland opereert{" "}
            <span className="text-navy">Van der Meulen Vastgoed B.V.</span> — al
            meer dan tien jaar actief in koop, ontwikkeling en verhuur van
            vastgoed. Contracten beoordelen, onderhandelen, bouwers aansturen en
            projecten opleveren: dat is het dagelijkse werk.
          </p>
          <p>
            <span className="text-navy">Van der Meulen Foris B.V.</span> is de
            Spaanse tak van dat familiebedrijf, geleid door{" "}
            <span className="text-navy">Dennis van der Meulen</span> — jarenlang
            wonend en werkend aan de Costa del Azahar. Dezelfde discipline en
            lange-termijn-denkwijze, toegepast op de Spaanse nieuwbouwmarkt.
          </p>
        </div>
      </section>

      {/* Full-bleed pine path photo */}
      <section className="relative aspect-[21/9] w-full overflow-hidden md:aspect-[3/1]">
        <Image
          src="/images/IMG_7278.jpg"
          alt="Dennenbospad aan de Spaanse kust — Sierra de Irta-natuurgebied"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Waarom Foris */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">
            Waarom Foris bestaat
          </h2>
          <div className="mt-6 space-y-4 text-foreground/85">
            <p>
              Het Spaanse nieuwbouwtraject — notariële volmachten, beëdigde
              vertalingen, modelo 036, aval bancair, deelbetalingen over twee
              landen — hebben we zelf doorlopen, via eigen vennootschappen. Onze
              conclusie:{" "}
              <em className="text-navy">
                dit zou voor geen enkele koper zo moeilijk hoeven zijn.
              </em>
            </p>
            <p>
              Die drie ingrediënten — Nederlandse vastgoedkennis, een vast
              netwerk van gestores, notarissen en advocaten, en eigen
              praktijkervaring met Spaanse nieuwbouw — maken we met Foris
              beschikbaar voor buitenlandse kopers. Geen makelaarsketen, geen
              call center, geen commissie-jacht.
            </p>
            <p className="text-sm text-muted-foreground">
              Hoe zo&apos;n traject eruitziet, stap voor stap:{" "}
              <Link href="/onze-ervaring" className="text-terracotta hover:underline">
                Onze ervaring
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Wat dat in de praktijk betekent */}
      <section className="border-b border-border bg-navy text-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl">
            Wat dat in de praktijk betekent
          </h2>
          <ul className="mt-8 space-y-5 text-cream/90">
            {[
              {
                title: "Nederlandstalig, op alle niveaus",
                body: "Elk Spaans document leggen we uit in helder Nederlands. Geen Google-vertaling, geen onduidelijkheid bij de notaris.",
              },
              {
                title: "Ter plaatse in Castellón",
                body: "Een bezichtiging, bouwbezoek of notarisafspraak is lokaal geregeld — jij hoeft er niet voor te vliegen.",
              },
              {
                title: "Familiebedrijf-mentaliteit",
                body: "Korte lijntjes. Dezelfde mensen die je spreekt bij de kennismaking gaan met je mee naar de notaris.",
              },
              {
                title: "Onafhankelijk",
                body: "We krijgen geen commissie van verkopers, ontwikkelaars, bouwers of banken. Onze enige opdrachtgever ben jij.",
              },
              {
                title: "Duidelijke afspraken",
                body: "Offerte vooraf, schriftelijk. Geen succes-fees, geen verborgen marges, geen verrassingen achteraf.",
              },
            ].map((item, idx) => (
              <li key={item.title} className="flex gap-4">
                <span className="font-heading text-2xl text-terracotta">{`0${idx + 1}`}</span>
                <div>
                  <p className="font-heading text-lg text-cream">{item.title}</p>
                  <p className="mt-1 text-cream/80">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Wat we beloven */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl text-navy md:text-4xl">
          Wat we beloven
        </h2>
        <ul className="mt-8 space-y-5">
          {[
            "We zeggen het eerlijk — ook als dat betekent dat je dit huis níet moet kopen.",
            "We zijn duidelijk over afspraken — vooraf, schriftelijk, niets achteraf.",
            "We doen alleen werk dat we zelf zouden willen krijgen.",
            "Wat we niet kunnen, doen we niet. We sturen je dan door naar iemand die het wel kan.",
          ].map((promise, idx) => (
            <li key={promise} className="flex gap-4 text-foreground/85">
              <span className="font-heading text-2xl text-terracotta">{`0${idx + 1}`}</span>
              <span className="pt-1">{promise}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">
            Kennismaken?
          </h2>
          <p className="mt-4 text-foreground/80">
            Een eerste gesprek is gratis, duurt 30 minuten en kan via videocall
            of telefonisch — wat jou het beste uitkomt.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <BookCallButton className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90">
              Plan een gesprek <span className="ml-1 text-cream/80">· gratis</span>
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
        </div>
      </section>
    </main>
  );
}
