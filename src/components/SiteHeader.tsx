"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { localeFromPathname, localizedPath } from "@/lib/i18n";
import { ui } from "@/i18n/ui";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const locale = localeFromPathname(usePathname());
  const t = ui[locale].header;

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href={localizedPath(locale, "/")}
          onClick={() => setOpen(false)}
          aria-label="VDM Foris, home"
          className="flex items-center"
        >
          <Image
            src="/brand/vdm-foris-logo-navy.png"
            alt="VDM Foris"
            width={496}
            height={370}
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 text-sm md:flex">
          {t.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/75 transition-colors hover:text-terracotta"
            >
              {item.label}
            </Link>
          ))}
          {t.guide && (
            <Link
              href="/gratis-gids"
              className="hidden text-foreground/75 transition-colors hover:text-terracotta lg:inline"
            >
              {t.guide}
            </Link>
          )}
          <Link
            href={t.quote.href}
            className="whitespace-nowrap rounded-full border border-terracotta/40 px-3 py-1.5 text-terracotta transition-colors hover:bg-terracotta/10"
          >
            {t.quote.label}
          </Link>
          {locale === "nl" && (
            <Link
              href={t.book.href}
              className="whitespace-nowrap rounded-full bg-terracotta px-4 py-2 text-cream transition-colors hover:bg-terracotta/90"
            >
              {t.book.label}
            </Link>
          )}
          <LanguageSwitcher />
        </nav>

        {/* Mobile: language + primary CTA + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <Link
            href={t.book.href}
            className="rounded-full bg-terracotta px-3 py-1.5 text-xs text-cream transition-colors hover:bg-terracotta/90"
          >
            {t.book.labelShort}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-navy transition-colors hover:bg-secondary/40"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="border-t border-border/60 bg-cream md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {t.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-foreground/85 transition-colors hover:bg-secondary/40 hover:text-terracotta"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {t.guideMobile && (
              <li>
                <Link
                  href="/gratis-gids"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-lg border border-terracotta/40 px-3 py-3 text-base font-medium text-terracotta transition-colors hover:bg-terracotta/10"
                >
                  {t.guideMobile}
                </Link>
              </li>
            )}
            <li>
              <Link
                href={t.quote.href}
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg border border-terracotta/40 px-3 py-3 text-base font-medium text-terracotta transition-colors hover:bg-terracotta/10"
              >
                {t.quote.labelMobile}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
