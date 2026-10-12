import Link from "next/link";
import { localizedPath, whatsappLink, type Locale } from "@/lib/i18n";
import { localContent, type LocalArea } from "@/i18n/local";

export function LocalContent({ locale, area }: { locale: Locale; area: LocalArea }) {
  const t = localContent[locale][area];
  const lp = (path: string) => localizedPath(locale, path);

  const areaName =
    area === "grau-de-castellon"
      ? "Grau de Castellón"
      : area === "castellon"
        ? "Castellón de la Plana"
        : "Benicàssim";

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "VDM Foris",
    url: `https://www.vdmforis.com${lp(`/onderhoud/${area}`)}`,
    telephone: "+34611365294",
    areaServed: { "@type": "Place", name: areaName },
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <section className="border-b border-border bg-gradient-to-br from-cream via-cream to-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
            {t.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">{t.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.typicalTitle}</h2>
            <ul className="mt-6 space-y-4">
              {t.typicalItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.servicesTitle}</h2>
            <p className="mt-6 text-foreground/85">{t.servicesList}</p>
            <p className="mt-4 text-sm text-foreground/60">{t.newBuildNote}</p>
            <Link
              href={lp("/tarieven")}
              className="mt-6 inline-block text-base font-medium text-terracotta underline-offset-4 hover:underline"
            >
              {t.pricingLink} →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.ctaTitle}</h2>
          <p className="mt-4 text-foreground/80">{t.ctaBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-terracotta px-8 py-3 text-base font-medium text-cream transition-colors hover:bg-terracotta/90"
            >
              {t.ctaWhatsApp}
            </a>
            <Link
              href={lp("/offerte")}
              className="inline-block rounded-full border border-terracotta/40 px-8 py-3 text-base font-medium text-terracotta transition-colors hover:bg-terracotta/10"
            >
              {t.ctaQuote}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
