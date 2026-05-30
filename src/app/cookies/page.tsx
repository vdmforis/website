import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Welke cookies en gelijksoortige technologie wij gebruiken op vdmforis.com — heel weinig.",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Juridisch · in voorbereiding
          </p>
          <h1 className="mt-4 font-heading text-4xl text-navy md:text-5xl">
            Cookies
          </h1>
          <p className="mt-6 text-foreground/80">
            Korte versie: wij gebruiken op deze website geen tracking-cookies. Hier
            staat wat er wél gebeurt.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-10 px-6 py-12 md:py-16">
        <Section title="Cookieloze analyse">
          <p>
            Voor inzicht in welke pagina&apos;s bezoekers gebruiken, draaien wij{" "}
            <strong>Vercel Analytics</strong> in cookieloze modus. Er worden geen
            tracking-cookies geplaatst en er wordt geen persoonlijk
            identificeerbare data verzonden. Je hoeft hiervoor niets te accepteren.
          </p>
        </Section>

        <Section title="Functionele opslag">
          <p>
            Wanneer je een afspraak maakt via Cal.eu of een formulier verzendt,
            kunnen dat soort applicaties tijdelijk technische opslag gebruiken om
            de sessie te laten werken (bijvoorbeeld een booking voltooien zonder
            dat de pagina vergeet welke datum je hebt gekozen). Dit zijn
            <em> functionele </em> sessies, geen tracking.
          </p>
        </Section>

        <Section title="Externe diensten">
          <p>
            Als je doorklikt naar onze externe diensten gelden hun eigen
            cookie-regelingen:
          </p>
          <ul className="ml-5 mt-3 list-disc space-y-2">
            <li>
              <strong>Cal.eu</strong> — wanneer je daar een gesprek inplant;
            </li>
            <li>
              <strong>WhatsApp / Meta</strong> — wanneer je ons via WhatsApp
              berichten stuurt.
            </li>
          </ul>
          <p className="mt-3">
            Hun privacy- en cookieverklaring vind je via hun eigen websites.
          </p>
        </Section>

        <Section title="Definitief versie">
          <p>
            Mocht onze setup uitbreiden (bijvoorbeeld met een lead-magnet PDF die
            via een nieuwsbrief-systeem loopt), dan vullen wij deze pagina aan met
            de bijbehorende cookie-informatie. Voor nu: minimaal en cookieloos.
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
