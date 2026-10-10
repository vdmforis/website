/**
 * Lean i18n helpers. Dutch is the default and lives at the root URLs.
 * English and Spanish live under /en and /es with the same slugs
 * (/diensten -> /en/diensten). Every public page is listed in `translatedPaths`.
 *
 * Safe to import from client components, server components and proxy.ts.
 */

export { whatsappLink } from "@/lib/contact";

export const locales = ["nl", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export type ForeignLocale = Exclude<Locale, "nl">;

export const defaultLocale: Locale = "nl";
export const foreignLocales: readonly ForeignLocale[] = ["en", "es"];

/** Cookie that remembers the visitor's choice from the language switcher. */
export const LOCALE_COOKIE = "NEXT_LOCALE";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** Article slugs under /artikelen (same slug in every language). */
export const articleSlugs = [
  "costa-azahar-vs-costa-blanca",
  "nie-aanvragen-spanje-stappenplan",
  "nieuwbouw-of-bestaande-bouw-spanje",
  "modelo-036-nederlandse-bv",
] as const;
export type ArticleSlug = (typeof articleSlugs)[number];

/**
 * Dutch paths that also exist under /en and /es.
 * Keep in sync with the `matcher` in src/proxy.ts (that list must be literals).
 */
export const translatedPaths = [
  "/",
  "/diensten",
  "/onze-ervaring",
  "/over-ons",
  "/artikelen",
  ...articleSlugs.map((slug) => `/artikelen/${slug}` as const),
  "/gratis-gids",
  "/offerte",
  "/kennismaking",
  "/onderhoud",
  "/onderhoud/grau-de-castellon",
  "/onderhoud/castellon",
  "/onderhoud/benicassim",
  "/verhuurbeheer",
  "/tarieven",
  "/privacy",
  "/cookies",
] as const;

export const ogLocale: Record<Locale, string> = {
  nl: "nl_NL",
  en: "en_GB",
  es: "es_ES",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

export function isForeignLocale(value: unknown): value is ForeignLocale {
  return typeof value === "string" && (foreignLocales as readonly string[]).includes(value);
}

/** "/en/privacy" -> "en", "/diensten" -> "nl". */
export function localeFromPathname(pathname: string | null | undefined): Locale {
  if (!pathname) return defaultLocale;
  for (const l of foreignLocales) {
    if (pathname === `/${l}` || pathname.startsWith(`/${l}/`)) return l;
  }
  return defaultLocale;
}

/** "/en/privacy" -> "/privacy", "/en" -> "/", "/diensten" -> "/diensten". */
export function stripLocale(pathname: string | null | undefined): string {
  if (!pathname) return "/";
  const l = localeFromPathname(pathname);
  if (l === defaultLocale) return pathname;
  const rest = pathname.slice(l.length + 1);
  return rest === "" ? "/" : rest;
}

/**
 * Dutch path -> path for `locale`.
 * ("/privacy", "en") -> "/en/privacy", ("/", "es") -> "/es",
 * ("/#contact", "en") -> "/en#contact", ("/offerte?dienst=x", "es") -> "/es/offerte?dienst=x".
 */
export function localizedPath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/#") || path.startsWith("/?")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}

export function isTranslated(path: string): boolean {
  const bare = path.split(/[?#]/)[0] || "/";
  return (translatedPaths as readonly string[]).includes(bare);
}

/** Where the language switcher should send you from the current page. */
export function switchTarget(target: Locale, pathname: string | null): string {
  const path = stripLocale(pathname);
  if (isTranslated(path)) return localizedPath(target, path);
  // Page has no translation: Dutch stays put, EN/ES go to their home page.
  return target === defaultLocale ? path : localizedPath(target, "/");
}

/** `alternates` for Next metadata: canonical + hreflang for a translated path. */
export function languageAlternates(locale: Locale, path: string) {
  return {
    canonical: localizedPath(locale, path),
    languages: {
      nl: localizedPath("nl", path),
      en: localizedPath("en", path),
      es: localizedPath("es", path),
      "x-default": localizedPath("nl", path),
    },
  };
}

/**
 * Pick a locale from an Accept-Language header.
 * Dutch anywhere in the list wins (many Dutch visitors run an English browser),
 * otherwise the highest-ranked of English/Spanish (Catalan, Galician and Basque
 * count as Spanish). Nothing usable -> Dutch.
 */
export function negotiateLocale(header: string | null | undefined): Locale {
  if (!header) return defaultLocale;
  const entries = header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const qParam = params.find((p) => p.trim().startsWith("q="));
      const q = qParam ? Number(qParam.trim().slice(2)) : 1;
      return {
        lang: tag.trim().toLowerCase().split("-")[0],
        q: Number.isFinite(q) ? q : 0,
        index,
      };
    })
    .filter((e) => e.lang && e.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index);

  if (entries.some((e) => e.lang === "nl")) return "nl";
  for (const { lang } of entries) {
    if (lang === "en") return "en";
    if (lang === "es" || lang === "ca" || lang === "gl" || lang === "eu") return "es";
  }
  return defaultLocale;
}
