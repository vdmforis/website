import Image from "next/image";
import Link from "next/link";
import { Compass, FileText, HardHat, House, Wrench } from "lucide-react";
import { HeroForm } from "@/components/HeroForm";
import { BookCallButton } from "@/components/BookCallButton";
import { Werkwijze3D } from "@/components/Werkwijze3D";
import { whatsappLink } from "@/lib/contact";
import { localizedPath, type Locale } from "@/lib/i18n";
import { home } from "@/i18n/home";

function Bullet() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />;
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = home[locale];
  const wa = whatsappLink(locale);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/IMG_5740.jpg"
          alt={t.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/40" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-32">
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">{t.hero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={t.hero.quoteHref}
                className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90"
              >
                {t.hero.quote}
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-terracotta"
              >
                {t.hero.whatsapp}
              </a>
            </div>
          </div>
          <div id="contact" className="flex flex-col justify-center scroll-mt-24">
            <HeroForm locale={locale} />
          </div>
        </div>
      </section>

      {/* Drie diensten */}
      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl text-navy md:text-4xl">
            {t.services.title}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div
              id="onderhoud"
              className="flex scroll-mt-24 flex-col rounded-2xl border border-border bg-card p-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                <Wrench size={20} strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-4 font-heading text-2xl text-navy">
                {t.services.onderhoud.title}
              </h3>
              <p className="mt-3 flex-1 text-foreground/80">{t.services.onderhoud.body}</p>
              <Link
                href={localizedPath(locale, t.services.onderhoud.ctaHref)}
                className="mt-6 text-sm font-medium text-terracotta underline-offset-4 hover:underline"
              >
                {t.services.onderhoud.cta} →
              </Link>
            </div>

            <div className="flex scroll-mt-24 flex-col rounded-2xl border border-border bg-card p-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-olive/10 text-olive">
                <House size={20} strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-4 font-heading text-2xl text-navy">
                {t.services.verhuurbeheer.title}
              </h3>
              <p className="mt-3 flex-1 text-foreground/80">{t.services.verhuurbeheer.body}</p>
              <Link
                href={localizedPath(locale, t.services.verhuurbeheer.ctaHref)}
                className="mt-6 text-sm font-medium text-terracotta underline-offset-4 hover:underline"
              >
                {t.services.verhuurbeheer.cta} →
              </Link>
            </div>

            <div className="flex scroll-mt-24 flex-col rounded-2xl border border-border bg-card p-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                <Compass size={20} strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-4 font-heading text-2xl text-navy">
                {t.services.aankoopbegeleiding.title}
              </h3>
              <p className="mt-3 flex-1 text-foreground/80">{t.services.aankoopbegeleiding.body}</p>
              <Link
                href={localizedPath(locale, t.services.aankoopbegeleiding.ctaHref)}
                className="mt-6 text-sm font-medium text-terracotta underline-offset-4 hover:underline"
              >
                {t.services.aankoopbegeleiding.cta} →
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-foreground/60">{t.alsoRent}</p>
        </div>
      </section>

      {locale === "nl" && <DutchBuyerSections />}

      {/* Proof strip */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {t.proof.map((card) => (
              <div key={card.label}>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                  {card.label}
                </p>
                <p className="mt-2 text-foreground/85">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/** Dutch-only: "Begin gratis", buyer services and the 3D buyer journey. */
function DutchBuyerSections() {
  const wa = whatsappLink("nl");
  return (
    <>
      {/* Begin gratis */}
      <section className="border-t border-border bg-navy text-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <h2 className="font-heading text-3xl md:text-4xl">
              Begin gratis
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
              Drie manieren, zonder verplichtingen
            </p>
          </div>
          <p className="mt-4 max-w-2xl text-cream/85">
            Voordat je iets vastlegt willen we eerst weten of we bij elkaar passen.
            Kies de manier die jou het prettigst lijkt. Alle drie zijn gratis en
            kunnen vandaag nog.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <BookCallButton className="group flex flex-col rounded-2xl border border-cream/15 bg-cream/5 p-6 transition-colors hover:border-terracotta hover:bg-cream/10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
                30 min · gratis
              </p>
              <h3 className="mt-3 font-heading text-xl">Plan een kennismaking</h3>
              <p className="mt-2 flex-1 text-sm text-cream/80">
                Videocall met Dennis. We luisteren naar je situatie, beantwoorden
                vragen, en zeggen eerlijk of we de juiste club voor je zijn.
              </p>
              <span className="mt-4 text-sm text-terracotta">
                Boek een tijd →
              </span>
            </BookCallButton>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-cream/15 bg-cream/5 p-6 transition-colors hover:border-[#25D366] hover:bg-cream/10"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#5ee290]">
                Direct · gratis
              </p>
              <h3 className="mt-3 font-heading text-xl">WhatsApp Dennis</h3>
              <p className="mt-2 flex-1 text-sm text-cream/80">
                Voor de korte vragen. Eerste reactie meestal binnen een paar uur, in
                het Nederlands. Geen formulier, geen bot.
              </p>
              <span className="mt-4 text-sm text-[#5ee290]">
                Open WhatsApp →
              </span>
            </a>
            <Link
              href="/gratis-gids"
              className="group flex flex-col rounded-2xl border border-cream/15 bg-cream/5 p-6 transition-colors hover:border-terracotta hover:bg-cream/10"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
                Voor kopers · PDF · 24 pagina&apos;s · gratis
              </p>
              <h3 className="mt-3 font-heading text-xl">Download onze gids</h3>
              <p className="mt-2 flex-1 text-sm text-cream/80">
                De 9 valkuilen bij nieuwbouw kopen in Spanje als Nederlander.
                Rechtstreeks uit onze eigen vastgoedpraktijk, geen marketingverhaal.
              </p>
              <span className="mt-4 text-sm text-terracotta">
                Stuur me de gids →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Voor kopers */}
      <section id="kopers" className="scroll-mt-24 border-t border-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Voor kopers
          </p>
          <div className="mb-10 mt-3 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <h2 className="font-heading text-3xl text-navy md:text-4xl">
              Een huis kopen aan de Costa del Azahar?
            </h2>
            <Link
              href="/diensten"
              className="text-sm text-terracotta hover:underline"
            >
              Alle diensten →
            </Link>
          </div>
          <p className="-mt-4 mb-10 max-w-2xl text-foreground/80">
            We helpen met oriëntatie, de papierwinkel (NIE, CIF, bank) en toezicht
            op je nieuwbouw. Na de sleuteloverdracht zorgen we ook voor je huis.{" "}
            <Link
              href="/gratis-gids"
              className="font-medium text-terracotta underline-offset-4 hover:underline"
            >
              Download onze gratis gids →
            </Link>
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Oriëntatie & coaching",
                body: "Anderhalf uur intake, regiogids op maat, warme intro's naar onze gestor en bank.",
                href: "/diensten#orientatie",
                dienst: "orientatie",
                Icon: Compass,
              },
              {
                title: "Papierwinkel",
                body: "NIE, CIF, bankrekening, modelo 036, vertalingen en apostille, voor privé én B.V.",
                href: "/diensten#papierwinkel",
                dienst: "papierwinkel",
                Icon: FileText,
              },
              {
                title: "Nieuwbouwtoezicht",
                body: "Bouwbezoeken, fotorapportage, aval-controle en opleveringsinspectie als jij in NL zit.",
                href: "/diensten#nieuwbouwtoezicht",
                dienst: "nieuwbouwtoezicht",
                Icon: HardHat,
              },
            ].map(({ Icon, ...s }) => (
              <div
                key={s.title}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-terracotta/60 hover:shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-cream">
                  <Icon size={20} strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-4 font-heading text-xl text-navy">
                  <Link href={s.href} className="after:absolute after:inset-0">
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm text-foreground/80">{s.body}</p>
                <Link
                  href={`/offerte?dienst=${s.dienst}`}
                  className="relative z-10 mt-4 text-sm text-terracotta underline-offset-4 hover:underline"
                >
                  Vraag een offerte aan →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm text-foreground/70">
            <span className="font-medium text-navy">Volledige aankoopbegeleiding</span>{" "}
            (van reservering tot sleutel) volgt zodra we in het RAICV-register
            zijn ingeschreven.
          </div>
        </div>
      </section>

      {/* Kopers-traject: 3D scroll */}
      <Werkwijze3D />
    </>
  );
}
