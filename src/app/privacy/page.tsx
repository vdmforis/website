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
            Juridisch · in voorbereiding
          </p>
          <h1 className="mt-4 font-heading text-4xl text-navy md:text-5xl">
            Privacyverklaring
          </h1>
          <p className="mt-6 text-foreground/80">
            Laatst bijgewerkt: mei 2026. Wij ronden onze definitieve juridische
            documentatie af zodra onze RAICV-vergunning binnen is (zomer 2026). Tot
            die tijd vind je hier een korte verklaring van hoe wij met jouw gegevens
            omgaan op deze website.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-10 px-6 py-12 md:py-16">
        <Section title="Wie wij zijn">
          <p>
            Van der Meulen Foris B.V., gevestigd te Toldijk 27, 7901 TA Hoogeveen,
            ingeschreven bij de Nederlandse Kamer van Koophandel onder nummer
            98214950. Voor vragen over deze verklaring kun je ons mailen op{" "}
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
              <strong>Contactformulier</strong>: naam, e-mailadres en de inhoud van
              je bericht. Wij gebruiken dit alleen om jouw vraag te beantwoorden.
            </li>
            <li>
              <strong>Booking-systeem (Cal.eu)</strong>: wanneer je een
              kennismakingsgesprek inplant geef je je e-mailadres, naam en gekozen
              tijd door. Cal.eu verwerkt deze gegevens namens ons.
            </li>
            <li>
              <strong>WhatsApp</strong>: als je ons via WhatsApp benadert, gelden
              het privacybeleid van WhatsApp/Meta en onze eigen plicht om jouw
              bericht alleen voor het beantwoorden te gebruiken.
            </li>
            <li>
              <strong>Analytics</strong>: wij gebruiken cookieloze analyse via
              Vercel Analytics. Er worden geen tracking-cookies geplaatst en geen
              persoonlijk identificeerbare data verzonden.
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
            <li>Cal.eu (afspraken inplannen);</li>
            <li>Vercel (hosting van deze website, geen analytische cookies);</li>
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
            de Autoriteit Persoonsgegevens.
          </p>
        </Section>

        <Section title="Definitief versie">
          <p>
            Onze definitieve privacyverklaring volgt zodra onze RAICV-vergunning
            binnen is en de finale verwerkersovereenkomsten met onze leveranciers
            zijn ondertekend. Heb je in de tussentijd vragen over je gegevens —
            stuur ons gerust een bericht.
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
