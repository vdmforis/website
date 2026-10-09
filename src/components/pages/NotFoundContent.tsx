"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { localeFromPathname, localizedPath, type Locale } from "@/lib/i18n";

const texts = {
  nl: {
    title: "Hier is even niets te vinden.",
    body: "De pagina die je zocht bestaat niet (meer), of er zit een typefoutje in de URL. Geen ramp: onderstaande paden brengen je waar je waarschijnlijk heen wil.",
    cards: [
      { href: "/diensten", title: "Diensten", sub: "Wat we vandaag al voor je doen" },
      { href: "/onze-ervaring", title: "Onze ervaring", sub: "Twee aankopen aan de Costa del Azahar" },
      { href: "/over-ons", title: "Over ons", sub: "Wie achter Foris zit en waarom" },
      { href: "/artikelen", title: "Artikelen", sub: "Eerstehandgidsen over de Spaanse paperwinkel" },
    ],
    back: "← Terug naar de homepage",
  },
  en: {
    title: "Nothing to see here, it seems.",
    body: "The page you were looking for doesn't exist (any more), or there's a typo in the URL. No problem: the links below will take you where you probably want to go.",
    cards: [
      { href: "/diensten", title: "Services", sub: "What we already do for you today" },
      { href: "/onze-ervaring", title: "Our experience", sub: "Two purchases on the Costa del Azahar" },
      { href: "/over-ons", title: "About us", sub: "Who is behind Foris and why" },
      { href: "/artikelen", title: "Articles", sub: "First-hand guides to Spanish paperwork" },
    ],
    back: "← Back to the home page",
  },
  es: {
    title: "Por aquí no hay nada.",
    body: "La página que buscabas no existe (o ya no existe), o hay una errata en la URL. No pasa nada: estos enlaces te llevan a donde probablemente quieres ir.",
    cards: [
      { href: "/diensten", title: "Servicios", sub: "Lo que ya hacemos por ti hoy" },
      { href: "/onze-ervaring", title: "Nuestra experiencia", sub: "Dos compras en la Costa del Azahar" },
      { href: "/over-ons", title: "Quiénes somos", sub: "Quién está detrás de Foris y por qué" },
      { href: "/artikelen", title: "Artículos", sub: "Guías de primera mano sobre el papeleo en España" },
    ],
    back: "← Volver a la página de inicio",
  },
} satisfies Record<Locale, unknown>;

/**
 * 404 in the language of the requested URL (/en/... and /es/... get EN/ES).
 * The 404 page is prerendered once (in Dutch), so the language is picked from
 * the real URL in the browser after hydration.
 */
export function NotFoundContent() {
  const [locale, setLocale] = useState<Locale>("nl");
  useEffect(() => {
    const l = localeFromPathname(window.location.pathname);
    document.documentElement.lang = l;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- URL is only known client-side here
    setLocale(l);
  }, []);
  const t = texts[locale];
  return (
    <main className="flex flex-1 items-center justify-center bg-cream px-6 py-24">
      <div className="max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">404</p>
        <h1 className="mt-4 font-heading text-4xl text-navy md:text-5xl">{t.title}</h1>
        <p className="mt-6 text-foreground/80">{t.body}</p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {t.cards.map((c) => (
            <Link
              key={c.href}
              href={localizedPath(locale, c.href)}
              className="rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-terracotta/60"
            >
              <p className="font-heading text-lg text-navy">{c.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.sub}</p>
            </Link>
          ))}
        </div>
        <Link
          href={localizedPath(locale, "/")}
          className="mt-10 inline-block text-sm text-terracotta hover:underline"
        >
          {t.back}
        </Link>
      </div>
    </main>
  );
}
