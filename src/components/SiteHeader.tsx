import Link from "next/link";

const nav = [
  { href: "/diensten", label: "Diensten" },
  { href: "/onze-villa", label: "Onze villa" },
  { href: "/over-ons", label: "Over ons" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-heading text-xl font-medium tracking-tight text-navy"
        >
          Foris
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/75 transition-colors hover:text-terracotta"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="hidden rounded-full bg-terracotta px-4 py-2 text-cream transition-colors hover:bg-terracotta/90 md:inline-block"
          >
            Plan kennismaking
          </Link>
        </nav>
      </div>
    </header>
  );
}
