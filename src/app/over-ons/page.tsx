import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/contact";
import { BookCallButton } from "@/components/BookCallButton";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Foris is opgericht door Dennis van der Meulen — sinds juli 2023 in Grau de Castellón en zoon van Diederik van der Meulen, oprichter van het Nederlandse Van der Meulen Vastgoed B.V. Tien jaar Nederlandse vastgoedervaring plus drie jaar wonen, kopen en leven in Spanje.",
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
            Hoi, ik ben Dennis.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/85">
            Ik woon sinds juli 2023 in Grau de Castellón, samen met mijn vriendin en
            ons jonge gezin. We kwamen hier oorspronkelijk voor mijn werk en zouden
            zien wat ervan kwam. Inmiddels is dit thuis.
          </p>
        </div>
      </section>

      {/* Het familiebedrijf */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl text-navy md:text-4xl">
          Het familiebedrijf
        </h2>
        <div className="mt-6 space-y-4 text-foreground/85">
          <p>
            Ik ben de zoon van <span className="text-navy">Diederik van der Meulen</span>.
            Mijn vader runt al meer dan tien jaar{" "}
            <span className="text-navy">Van der Meulen Vastgoed B.V.</span> in Nederland —
            een familiebedrijf in koop, ontwikkeling en verhuur van vastgoed. Vastgoed is
            bij ons letterlijk thuis aan de keukentafel besproken.
          </p>
          <p>
            Dat is de basis waar Foris uit voortkomt. We hebben de Nederlandse
            vastgoedkennis, de lange-termijn-denkwijze en de financiële stabiliteit van
            een gevestigd familiebedrijf — en daarbovenop nu een Spaanse tak die ter
            plaatse zit.
          </p>
        </div>
      </section>

      {/* Hoe Spanje thuis werd */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <div className="relative mb-10 aspect-[3/2] overflow-hidden rounded-2xl">
            <Image
              src="/images/IMG_7278.jpg"
              alt="Dennenbospad aan de Spaanse kust — Sierra de Irta-natuurgebied"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
          <h2 className="font-heading text-3xl text-navy md:text-4xl">
            Hoe Spanje thuis werd
          </h2>
          <div className="mt-6 space-y-4 text-foreground/85">
            <p>
              In juli 2023 verhuisden we naar Spanje voor mijn werk. We huurden eerst —
              de bedoeling was om te kijken hoe het zou bevallen, niet meteen definitief.
              We begonnen in Benicàssim, en het beviel meteen.
            </p>
            <p>
              Na een paar jaar wonen besloten we het echt te maken. We zetten onze zinnen
              op een eigen huis — niet om te verhuren, niet als investering, gewoon: een
              eigen plek in een land dat thuis was geworden. Het werd een nieuwbouwvilla
              in Grau de Castellón, off-plan (nog tijdens de bouw) gekocht via een nieuwe B.V. die we daarvoor
              speciaal oprichtten: <span className="text-navy">Van der Meulen Foris B.V.</span>
            </p>
            <p>
              We doorliepen precies dat traject waar de meeste Nederlanders zo tegenop
              zien. Notariële volmacht in Nederland, beëdigde vertaling, apostille, een
              Spaanse CIF aanvragen via modelo 036, een aval bancair tracken volgens Ley
              20/2015, vier deelbetalingen verdeeld over twee landen. In juni 2026 trekken
              we erin.
            </p>
            <p>
              Het lukte. Maar het was — eerlijk — complex. Zelfs voor iemand die met
              vastgoed is opgegroeid.
            </p>
            <p className="text-sm text-muted-foreground">
              Het hele verhaal van die aankoop staat op{" "}
              <Link href="/onze-ervaring" className="text-terracotta hover:underline">
                Onze ervaring
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Waarom Foris */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl text-navy md:text-4xl">
          Hoe Foris ontstond
        </h2>
        <div className="mt-6 space-y-4 text-foreground/85">
          <p>
            Tijdens dat traject keken we elkaar op een gegeven moment aan en zeiden:{" "}
            <em className="text-navy">
              dit zou voor geen enkele Nederlander zo moeilijk moeten hoeven zijn.
            </em>
          </p>
          <p>
            We hadden de Nederlandse vastgoedkennis van Van der Meulen Vastgoed B.V., we
            hadden net het volledige Spaanse aankooptraject zelf doorlopen, en we hadden
            in drie jaar wonen aan de Costa del Azahar een netwerk opgebouwd van
            gestores, notarissen, advocaten en bouwers die we vertrouwen. Die combinatie
            wilden we beschikbaar maken voor andere Nederlanders.
          </p>
          <p>
            Dat is Van der Meulen Foris B.V. Geen makelaarsketen, geen call center, geen
            commissie-jacht. Een familiebedrijf met een Spaanse tak, dat één ding goed
            wil doen: Nederlanders begeleiden bij het kopen van een huis aan deze kust.
          </p>
        </div>
      </section>

      {/* Wat dat in de praktijk betekent */}
      <section className="border-y border-border bg-navy text-cream">
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
                title: "Ter plaatse — letterlijk op vijf minuten van het strand",
                body: "We wonen in Grau de Castellón. Een afspraak in Benicàssim is een fietstochtje. Geen tweedaagse vlucht en hotel voor de notaris.",
              },
              {
                title: "Familiebedrijf-mentaliteit",
                body: "Korte lijntjes. Dezelfde mensen die je leert kennen bij het kennismakingsgesprek zijn de mensen die met je naar de notaris gaan.",
              },
              {
                title: "Onafhankelijk",
                body: "We krijgen geen commissie van verkopers, ontwikkelaars, bouwers of banken. Onze enige opdrachtgever ben jij.",
              },
              {
                title: "Vaste prijs",
                body: "Vooraf afgesproken, schriftelijk. Geen succes-fees, geen verborgen marges, geen verrassingen achteraf.",
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
            "We zijn duidelijk over geld — vooraf, schriftelijk, niets achteraf.",
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
            Klinkt dit als de juiste club voor jouw aankoop?
          </h2>
          <p className="mt-4 text-foreground/80">
            Stuur me een berichtje. Een eerste kennismaking is gratis, duurt 30 minuten
            en kan via videocall of WhatsApp — wat jou het beste uitkomt.
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
