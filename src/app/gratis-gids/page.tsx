import type { Metadata } from "next";
import { GidsForm } from "@/components/GidsForm";

export const metadata: Metadata = {
  title: "Gratis gids — de 9 valkuilen bij een huis kopen in Spanje",
  description:
    "Download onze gids van 24 pagina's: de negen valkuilen die wij zelf zijn tegengekomen tijdens onze aankoop. Eerlijke, eerstehandse informatie — gratis tegen je e-mailadres.",
};

const points = [
  "De juiste volgorde voor NIE, modelo 036 en bankrekening",
  "Hoe je een aval bancair écht moet controleren bij nieuwbouw",
  "Welke documenten beëdigd vertaald moeten worden (en welke niet)",
  "Wat je gestor en advocaat moeten doen — en wanneer",
  "Realistische lopende lasten: IBI, plusvalía, comunidad, modelo 720",
  "Wanneer je vlucht boeken voor de oplevering (later dan je denkt)",
];

export default function GratisGidsPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border bg-gradient-to-br from-cream via-cream to-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
              Gratis gids · 24 pagina&apos;s
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
              De 9 valkuilen bij een huis kopen in Spanje als Nederlander.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">
              Op basis van onze eigen aankoop en drie jaar wonen aan de Costa del
              Azahar. Geen marketingverhaal — een eerlijke lijst van wat wij vooraf
              graag hadden geweten.
            </p>
            <ul className="mt-8 space-y-3 text-foreground/85">
              {points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <GidsForm />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-12 text-sm text-muted-foreground md:py-16">
          <p>
            We verzenden je e-mailadres alleen om de gids op te sturen. Geen
            ongevraagde mailings, geen lijstenhandel. Wil je later geen contact
            meer? Eén woord en je staat uit ons systeem.
          </p>
        </div>
      </section>
    </main>
  );
}
