"use client";

import { usePathname } from "next/navigation";
import {
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  localeFromPathname,
  locales,
  switchTarget,
  type Locale,
} from "@/lib/i18n";
import { ui } from "@/i18n/ui";

const names: Record<Locale, string> = {
  nl: "Nederlands",
  en: "English",
  es: "Español",
};

/**
 * NL / EN / ES. Remembers the choice in a cookie (read by src/proxy.ts) and
 * does a full page load, so nothing stale from prefetching is shown.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const current = localeFromPathname(pathname);

  return (
    <nav aria-label={ui[current].switcherLabel} className={className}>
      <ul className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.12em]">
        {locales.map((l) => {
          const active = l === current;
          return (
            <li key={l}>
              <a
                href={switchTarget(l, pathname)}
                hrefLang={l}
                lang={l}
                title={names[l]}
                aria-current={active ? "true" : undefined}
                onClick={() => {
                  document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`;
                }}
                className={`rounded-md px-1.5 py-1 transition-colors ${
                  active
                    ? "text-navy underline decoration-terracotta decoration-2 underline-offset-4"
                    : "text-foreground/60 hover:text-terracotta"
                }`}
              >
                {l}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
