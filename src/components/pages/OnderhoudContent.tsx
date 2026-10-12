import Link from "next/link";
import { localizedPath, whatsappLink, type Locale } from "@/lib/i18n";
import { onderhoudText } from "@/i18n/onderhoud";

export function OnderhoudContent({ locale }: { locale: Locale }) {
  const t = onderhoudText[locale];
  const lp = (path: string) => localizedPath(locale, path);

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "VDM Foris",
    url: `https://www.vdmforis.com${lp("/onderhoud")}`,
    telephone: "+34611365294",
    areaServed: [
      { "@type": "Place", name: "Grau de Castellón" },
      { "@type": "Place", name: "Castellón de la Plana" },
      { "@type": "Place", name: "Benicàssim" },
    ],
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
          <p className="mt-4 text-sm text-foreground/60">{t.areas}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.servicesTitle}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="font-heading text-xl text-navy">{service.title}</h3>
              <p className="mt-3 text-foreground/80">{service.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.howItWorksTitle}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {t.howItWorksSteps.map((item) => (
              <div key={item.step}>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
                  {item.step}
                </p>
                <p className="mt-3 text-foreground/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.newBuildTitle}</h2>
          </div>
          <div>
            <p className="text-foreground/80">{t.newBuildIntro}</p>
            <ul className="mt-6 space-y-3">
              {t.newBuildItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.packagesTitle}</h2>
          <p className="mt-4 max-w-2xl text-foreground/80">{t.packagesIntro}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
              {t.light.name}
            </p>
            <p className="mt-2 font-heading text-3xl text-navy">{t.light.price}</p>
            <p className="text-sm text-foreground/60">{t.light.freq}</p>
            <p className="mt-4 text-foreground/80">{t.light.for}</p>
            <ul className="mt-6 space-y-2">
              {t.light.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border-2 border-terracotta bg-card p-8 shadow-sm">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
              {t.standard.name}
            </p>
            <p className="mt-2 font-heading text-3xl text-navy">{t.standard.price}</p>
            <p className="text-sm text-foreground/60">{t.standard.freq}</p>
            <p className="mt-4 text-foreground/80">{t.standard.for}</p>
            <ul className="mt-6 space-y-2">
              {t.standard.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
              {t.villa.name}
            </p>
            <p className="mt-2 font-heading text-3xl text-navy">{t.villa.price}</p>
            <p className="text-sm text-foreground/60">{t.villa.freq}</p>
            <p className="mt-4 text-foreground/80">{t.villa.for}</p>
            <ul className="mt-6 space-y-2">
              {t.villa.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

          <p className="mt-6 text-sm text-foreground/60">{t.allInclude}</p>
          <Link
            href={lp("/tarieven")}
            className="mt-6 inline-block text-base font-medium text-terracotta underline-offset-4 hover:underline"
          >
            {t.pricingCta} →
          </Link>
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

      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            {locale === "nl" ? "Ook lokaal" : locale === "en" ? "Also locally" : "También local"}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={lp("/onderhoud/grau-de-castellon")}
              className="rounded-lg border border-border bg-card px-6 py-4 text-navy transition-colors hover:border-terracotta hover:bg-terracotta/5"
            >
              {locale === "nl"
                ? "Onderhoud in Grau de Castellón"
                : locale === "en"
                  ? "Maintenance in Grau de Castellón"
                  : "Mantenimiento en el Grao de Castellón"}
            </Link>
            <Link
              href={lp("/onderhoud/castellon")}
              className="rounded-lg border border-border bg-card px-6 py-4 text-navy transition-colors hover:border-terracotta hover:bg-terracotta/5"
            >
              {locale === "nl"
                ? "Onderhoud in Castellón"
                : locale === "en"
                  ? "Maintenance in Castellón"
                  : "Mantenimiento en Castellón"}
            </Link>
            <Link
              href={lp("/onderhoud/benicassim")}
              className="rounded-lg border border-border bg-card px-6 py-4 text-navy transition-colors hover:border-terracotta hover:bg-terracotta/5"
            >
              {locale === "nl"
                ? "Onderhoud in Benicàssim"
                : locale === "en"
                  ? "Maintenance in Benicàssim"
                  : "Mantenimiento en Benicàssim"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
