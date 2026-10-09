"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPathname, localizedPath } from "@/lib/i18n";
import { dutchOnlyLinks, ui } from "@/i18n/ui";

export function SiteFooter() {
  const locale = localeFromPathname(usePathname());
  const t = ui[locale].footer;

  return (
    <footer className="mt-auto border-t border-border bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 py-12 text-sm">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Image
              src="/brand/vdm-foris-logo-white.png"
              alt="VDM Foris"
              width={496}
              height={370}
              className="h-14 w-auto"
            />
            <p className="mt-2 text-cream/75">{t.tagline}</p>
            <p className="mt-2 text-cream/60">{t.sub}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cream/60">
              {t.contact}
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
              {t.pages}
            </p>
            <ul className="mt-2 space-y-1">
              {t.links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-terracotta">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {t.dutchOnlyHeading && (
              <>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-cream/60">
                  {t.dutchOnlyHeading}
                </p>
                <ul className="mt-2 space-y-1">
                  {dutchOnlyLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        hrefLang="nl"
                        className="hover:text-terracotta"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-cream/15 pt-6 text-xs text-cream/60 md:flex-row md:items-start md:justify-between">
          <div className="space-y-1">
            <p>
              Van der Meulen Foris B.V. · KvK 98214950 · NIF (ES) N0406296D ·
              Toldijk 27, 7901 TA Hoogeveen
            </p>
            <p className="text-cream/50">{t.taxAddress}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href={localizedPath(locale, "/privacy")}
              className="hover:text-terracotta"
            >
              {t.privacy}
            </Link>
            <Link
              href={localizedPath(locale, "/cookies")}
              className="hover:text-terracotta"
            >
              {t.cookies}
            </Link>
            <span>© {new Date().getFullYear()} Foris</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
