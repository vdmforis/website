import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Artikelen",
  description:
    "Nederlandstalige eerstehandgidsen voor de Spaanse vastgoedwereld: NIE, modelo 036, nieuwbouw kopen, plusvalía, vivienda turística — alles wat we onderweg leerden en waar we nog over schrijven.",
};

const articles = [
  {
    slug: "nie-aanvragen-spanje-stappenplan",
    title: "NIE aanvragen in Spanje — stappenplan 2026",
    excerpt:
      "Complete eerstehandsgids: via het Consulaat-Generaal in Amsterdam of ter plaatse in Spanje. Documenten, kosten (€9,84), doorlooptijd, EX-15-formulier, Modelo 790 codigo 012, en de zeven valkuilen.",
    date: "30 mei 2026",
    readingTime: "11 min",
    tag: "Papierwinkel",
  },
  {
    slug: "nieuwbouw-of-bestaande-bouw-spanje",
    title: "Nieuwbouw of bestaande bouw in Spanje — welke past bij jou?",
    excerpt:
      "Eerlijke vergelijking: belastingen (IVA vs ITP), aankoopkosten, garanties, doorlooptijd en verborgen kosten. Plus een vijf-vragen-checklist om je beslissing te helpen.",
    date: "30 mei 2026",
    readingTime: "9 min",
    tag: "Beslissingshulp",
  },
  {
    slug: "modelo-036-nederlandse-bv",
    title: "Modelo 036 voor Nederlandse B.V.'s — wat je moet weten in 2026",
    excerpt:
      "Eerstehandsgids voor het indienen van een Modelo 036 om een Spaanse CIF te krijgen. Documentenlijst, kosten, doorlooptijd en de zes meest voorkomende valkuilen.",
    date: "29 mei 2026",
    readingTime: "8 min",
    tag: "Fiscaal",
  },
] as const;

const upcoming = [
  "Nieuwbouw kopen in Spanje (off-plan) — zeven valkuilen die wij zelf tegenkwamen",
  "Aval bancair bij nieuwbouw — Ley 20/2015 in mensentaal",
  "Costa del Azahar vs. Costa Blanca — welke past bij jou?",
  "Vivienda turística aanvragen in de Comunitat Valenciana",
] as const;

export default function ArtikelenPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-br from-cream via-cream to-secondary/60">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Artikelen
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
            Wat we onderweg leerden — opgeschreven voor wie het zoekt.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            Geen marketingverhalen, geen oppervlakkige &quot;tips voor een huis in
            Spanje&quot;. Echte eerstehandgidsen op basis van drie jaar wonen aan de
            Costa del Azahar en onze eigen nieuwbouwaankoop.
          </p>
        </div>
      </section>

      {/* Articles list */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <div className="grid gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artikelen/${article.slug}`}
              className="group block rounded-3xl border border-border bg-card p-8 transition-colors hover:border-terracotta/60 md:p-10"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.18em]">
                <span className="text-terracotta">{article.tag}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">{article.date}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">
                  {article.readingTime} lezen
                </span>
              </div>
              <h2 className="mt-4 font-heading text-2xl text-navy transition-colors group-hover:text-terracotta md:text-3xl">
                {article.title}
              </h2>
              <p className="mt-3 text-foreground/80">{article.excerpt}</p>
              <span className="mt-6 inline-block text-sm text-terracotta">
                Lees het artikel →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
            Op de plank
          </p>
          <h2 className="mt-3 font-heading text-3xl text-navy md:text-4xl">
            Waar we nog over gaan schrijven
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/80">
            Wij publiceren langzaam — alleen onderwerpen waar we zelf de hele
            paperwinkel van doorlopen hebben, dus geen overgenomen
            internet-wijsheid. Wil je een melding als een van deze online staat?{" "}
            <Link href="/#contact" className="text-terracotta hover:underline">
              Laat je e-mail achter
            </Link>
            .
          </p>
          <ul className="mt-8 space-y-3 text-foreground/85">
            {upcoming.map((title) => (
              <li key={title} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
