import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-6 py-12 text-sm">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-heading text-xl">Foris</p>
            <p className="mt-2 text-cream/75">
              Nederlandstalige aankoopbegeleiding aan de Costa del Azahar.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cream/60">
              Contact
            </p>
            <ul className="mt-2 space-y-1 text-cream/85">
              <li>
                <a
                  href="mailto:info@vdmforis.com"
                  className="hover:text-terracotta"
                >
                  info@vdmforis.com
                </a>
              </li>
              <li>Grau de Castellón · Comunitat Valenciana</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cream/60">
              Pagina&apos;s
            </p>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/diensten" className="hover:text-terracotta">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/onze-ervaring" className="hover:text-terracotta">
                  Onze ervaring
                </Link>
              </li>
              <li>
                <Link href="/artikelen" className="hover:text-terracotta">
                  Artikelen
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="hover:text-terracotta">
                  Over ons
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/60 md:flex-row md:items-center md:justify-between">
          <p>
            Van der Meulen Foris B.V. · KvK 98214950 · Toldijk 27, 7901 TA
            Hoogeveen
          </p>
          <p>© {new Date().getFullYear()} Foris. Site in opbouw.</p>
        </div>
      </div>
    </footer>
  );
}
