"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BookCallButton } from "@/components/BookCallButton";

const nav = [
  { href: "/diensten", label: "Diensten" },
  { href: "/onze-ervaring", label: "Onze ervaring" },
  { href: "/artikelen", label: "Artikelen" },
  { href: "/over-ons", label: "Over ons" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-heading text-xl font-medium tracking-tight text-navy"
        >
          Foris
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 text-sm md:flex">
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
            href="/gratis-gids"
            className="hidden text-foreground/75 transition-colors hover:text-terracotta lg:inline"
          >
            Gratis gids
          </Link>
          <Link
            href="/offerte"
            className="whitespace-nowrap rounded-full border border-terracotta/40 px-3 py-1.5 text-terracotta transition-colors hover:bg-terracotta/10"
          >
            Vraag offerte
          </Link>
          <BookCallButton className="whitespace-nowrap rounded-full bg-terracotta px-4 py-2 text-cream transition-colors hover:bg-terracotta/90">
            Plan kennismaking
          </BookCallButton>
        </nav>

        {/* Mobile: primary CTA + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <BookCallButton className="rounded-full bg-terracotta px-3 py-1.5 text-xs text-cream transition-colors hover:bg-terracotta/90">
            Plan
          </BookCallButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Sluit menu" : "Open menu"}
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
            {nav.map((item) => (
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
            <li>
              <Link
                href="/gratis-gids"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg border border-terracotta/40 px-3 py-3 text-base font-medium text-terracotta transition-colors hover:bg-terracotta/10"
              >
                Gratis gids — De 9 valkuilen
              </Link>
            </li>
            <li>
              <Link
                href="/offerte"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg border border-terracotta/40 px-3 py-3 text-base font-medium text-terracotta transition-colors hover:bg-terracotta/10"
              >
                Vraag een offerte aan
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
