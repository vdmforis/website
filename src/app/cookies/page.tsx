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
            Juridisch
          </p>
          <h1 className="mt-4 font-heading text-4xl text-navy md:text-5xl">
            Cookies
          </h1>
          <p className="mt-6 text-foreground/80">
            Laatst bijgewerkt: oktober 2026. Korte versie: wij gebruiken op deze
            website geen tracking-cookies. Hier staat wat er wél gebeurt.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-10 px-6 py-12 md:py-16">
        <Section title="Geen analyse of tracking">
          <p>
            Wij gebruiken op deze website geen analysetools en geen tracking- of
            advertentiecookies. Je hoeft daarom ook niets te accepteren.
          </p>
        </Section>

        <Section title="Functionele opslag">
          <p>
            Wanneer je een formulier verzendt (bijvoorbeeld voor een offerte of
            een kennismaking), gebruikt de website alleen wat technisch nodig is
            om je bericht te versturen. Dat is <em>functioneel</em>, geen
            tracking.
          </p>
        </Section>

        <Section title="Externe diensten">
          <p>
            Als je doorklikt naar onze externe diensten gelden hun eigen
            cookie-regelingen:
          </p>
          <ul className="ml-5 mt-3 list-disc space-y-2">
            <li>
              <strong>WhatsApp / Meta</strong> — wanneer je ons via WhatsApp
              berichten stuurt.
            </li>
          </ul>
          <p className="mt-3">
            Hun privacy- en cookieverklaring vind je via hun eigen websites.
          </p>
        </Section>

        <Section title="Wijzigingen">
          <p>
            Mocht onze setup uitbreiden (bijvoorbeeld met een kaart of een
            reviews-widget), dan vullen wij deze pagina aan met de bijbehorende
            cookie-informatie. Voor nu: minimaal en cookieloos.
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
