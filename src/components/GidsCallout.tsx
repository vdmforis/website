import Link from "next/link";

type Variant = "inline" | "card";

/**
 * Gids lead-magnet CTA. Two variants:
 * - inline: smaller horizontal strip, intended near the top of an article (after the lead).
 * - card:   prominent centered card, intended near the bottom of an article (before service CTAs).
 */
export function GidsCallout({ variant = "card" }: { variant?: Variant }) {
  if (variant === "inline") {
    return (
      <aside
        aria-label="Download de gratis gids"
        className="mt-10 flex flex-col gap-4 rounded-2xl border border-terracotta/30 bg-terracotta/5 p-5 sm:flex-row sm:items-center"
      >
        <div className="flex-1">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Gratis PDF · 24 pagina&apos;s
          </p>
          <p className="mt-1 font-heading text-lg text-navy">
            De 9 valkuilen bij een huis kopen in Spanje
          </p>
          <p className="mt-1 text-sm text-foreground/75">
            Dit artikel pakt één onderdeel uit — de volledige lijst plus checklists per fase staat in de gids.
          </p>
        </div>
        <Link
          href="/gratis-gids"
          className="shrink-0 self-start rounded-full bg-terracotta px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90 sm:self-center"
        >
          Stuur me de gids →
        </Link>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Download de gratis gids"
      className="mt-16 rounded-3xl border border-terracotta/40 bg-terracotta/5 p-8 text-center"
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
        Gratis PDF · 24 pagina&apos;s
      </p>
      <h3 className="mt-3 font-heading text-2xl text-navy">
        De 9 valkuilen bij een huis kopen in Spanje als Nederlander
      </h3>
      <p className="mx-auto mt-3 max-w-xl text-foreground/80">
        Eerstehandse ervaring uit ons eigen aankooptraject — geen marketingverhaal,
        wel de details die je vooraf wil weten. In je inbox binnen een paar minuten.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          href="/gratis-gids"
          className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90"
        >
          Download de gids
        </Link>
      </div>
    </aside>
  );
}
