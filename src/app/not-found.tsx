import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center bg-cream px-6 py-24">
      <div className="max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
          404
        </p>
        <h1 className="mt-4 font-heading text-4xl text-navy md:text-5xl">
          Hier is even niets te vinden.
        </h1>
        <p className="mt-6 text-foreground/80">
          De pagina die je zocht bestaat niet (meer), of er zit een typefoutje in
          de URL. Geen ramp — onderstaande paden brengen je waar je waarschijnlijk
          heen wil.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <Link
            href="/diensten"
            className="rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-terracotta/60"
          >
            <p className="font-heading text-lg text-navy">Diensten</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Wat we vandaag al voor je doen
            </p>
          </Link>
          <Link
            href="/onze-ervaring"
            className="rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-terracotta/60"
          >
            <p className="font-heading text-lg text-navy">Onze ervaring</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Twee aankopen aan de Costa del Azahar
            </p>
          </Link>
          <Link
            href="/over-ons"
            className="rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-terracotta/60"
          >
            <p className="font-heading text-lg text-navy">Over ons</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Wie achter Foris zit en waarom
            </p>
          </Link>
          <Link
            href="/artikelen"
            className="rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-terracotta/60"
          >
            <p className="font-heading text-lg text-navy">Artikelen</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Eerstehandgidsen over de Spaanse paperwinkel
            </p>
          </Link>
        </div>
        <Link
          href="/"
          className="mt-10 inline-block text-sm text-terracotta hover:underline"
        >
          ← Terug naar de homepage
        </Link>
      </div>
    </main>
  );
}
