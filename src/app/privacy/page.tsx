import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "Hoe Van der Meulen Foris B.V. omgaat met persoonsgegevens van bezoekers en klanten — eenvoudig en zonder vakjargon.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Juridisch
          </p>
          <h1 className="mt-4 font-heading text-4xl text-navy md:text-5xl">
            Privacyverklaring
          </h1>
          <p className="mt-6 text-foreground/80">
            Laatst bijgewerkt: oktober 2026. Hier lees je kort en zonder vakjargon
            hoe wij omgaan met de gegevens van bezoekers van deze website en van
            onze klanten.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-10 px-6 py-12 md:py-16">
        <Section title="Wie wij zijn">
          <p>
            Van der Meulen Foris B.V., gevestigd te Toldijk 27, 7901 TA Hoogeveen,
            ingeschreven bij de Nederlandse Kamer van Koophandel onder nummer
            98214950 en bij de Spaanse Agencia Tributaria onder NIF
            N0406296D. Fiscaal domicilie in Spanje te Grau de Castellón,
            Comunitat Valenciana. Voor vragen over deze verklaring kun je ons
            mailen op{" "}
            <a
              href="mailto:info@vdmforis.com"
              className="text-terracotta hover:underline"
            >
              info@vdmforis.com
            </a>
            .
          </p>
        </Section>

        <Section title="Welke gegevens verzamelen wij">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Formulieren</strong> (contact, offerte, kennismaking en
              gratis gids): naam, e-mailadres, en — afhankelijk van het formulier —
              je telefoonnummer, voorkeursmoment en de inhoud van je bericht. Wij
              gebruiken dit alleen om jouw vraag of aanvraag te beantwoorden.
            </li>
            <li>
              <strong>Opdrachten voor onderhoud of woningbeheer</strong>: naam,
              contactgegevens, het adres van de woning en — als dat bij de opdracht
              hoort — foto&apos;s van het werk en afspraken over sleutels of
              toegang. Wij gebruiken dit alleen om de opdracht uit te voeren en te
              factureren.
            </li>
            <li>
              <strong>WhatsApp</strong>: als je ons via WhatsApp benadert, gelden
              het privacybeleid van WhatsApp/Meta en onze eigen plicht om jouw
              bericht alleen voor het beantwoorden te gebruiken.
            </li>
            <li>
              <strong>Geen analytics of tracking</strong>: wij gebruiken op deze
              website geen analysetools en plaatsen geen tracking-cookies.
            </li>
          </ul>
        </Section>

        <Section title="Waarvoor gebruiken wij jouw gegevens">
          <ul className="ml-5 list-disc space-y-2">
            <li>Om jouw vraag of aanvraag te beantwoorden;</li>
            <li>Om een afspraak met je te plannen;</li>
            <li>Om — indien je daar later voor kiest — onze dienstverlening uit te voeren;</li>
            <li>
              Wettelijke verplichtingen, zoals bewaartermijnen op grond van fiscale
              wetgeving wanneer er sprake is van een betaalde opdracht.
            </li>
          </ul>
        </Section>

        <Section title="Met wie delen wij gegevens">
          <p>
            Alleen met partijen die nodig zijn om jouw verzoek uit te voeren of
            waaraan wij wettelijk verplicht zijn te verstrekken. Concreet:
          </p>
          <ul className="ml-5 mt-3 list-disc space-y-2">
            <li>Resend (verzending van e-mail vanuit het contactformulier);</li>
            <li>Vercel (hosting van deze website);</li>
            <li>
              Onze Spaanse en Nederlandse gestor/advocaat wanneer dat nodig is om
              een afgesproken dienst uit te voeren.
            </li>
          </ul>
        </Section>

        <Section title="Jouw rechten">
          <p>
            Op grond van de AVG heb je recht op inzage, correctie, verwijdering,
            beperking en overdraagbaarheid van jouw gegevens. Je kunt deze rechten
            uitoefenen door een mail te sturen aan{" "}
            <a
              href="mailto:info@vdmforis.com"
              className="text-terracotta hover:underline"
            >
              info@vdmforis.com
            </a>
            . Reageren wij niet binnen 30 dagen, dan kun je een klacht indienen bij
            de Autoriteit Persoonsgegevens (Nederland) of de Agencia Española de
            Protección de Datos (AEPD, Spanje).
          </p>
        </Section>

        <Section title="Wijzigingen">
          <p>
            Wanneer onze dienstverlening of de tools die we gebruiken veranderen,
            werken we deze verklaring bij. Heb je vragen over je gegevens — stuur
            ons gerust een bericht.
          </p>
          <p className="mt-6">
            <Link href="/" className="text-terracotta hover:underline">
              ← Terug naar de homepage
            </Link>
          </p>
        </Section>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-2xl text-navy md:text-3xl">{title}</h2>
      <div className="mt-4 space-y-3 text-foreground/85">{children}</div>
    </section>
  );
}
