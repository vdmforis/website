import type { MetadataRoute } from "next";
import { languageAlternates, locales, localizedPath, translatedPaths } from "@/lib/i18n";

const BASE = "https://www.vdmforis.com";

type Freq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

/** Priority / change frequency per Dutch path (same for every language). */
const settings: Record<string, { freq: Freq; priority: number }> = {
  "/": { freq: "weekly", priority: 1.0 },
  "/diensten": { freq: "monthly", priority: 0.9 },
  "/onze-ervaring": { freq: "monthly", priority: 0.8 },
  "/over-ons": { freq: "monthly", priority: 0.7 },
  "/artikelen": { freq: "weekly", priority: 0.7 },
  "/artikelen/modelo-036-nederlandse-bv": { freq: "yearly", priority: 0.6 },
  "/artikelen/nieuwbouw-of-bestaande-bouw-spanje": { freq: "yearly", priority: 0.7 },
  "/artikelen/nie-aanvragen-spanje-stappenplan": { freq: "yearly", priority: 0.8 },
  "/artikelen/costa-azahar-vs-costa-blanca": { freq: "yearly", priority: 0.8 },
  "/gratis-gids": { freq: "monthly", priority: 0.8 },
  "/offerte": { freq: "monthly", priority: 0.8 },
  "/kennismaking": { freq: "monthly", priority: 0.8 },
  "/privacy": { freq: "yearly", priority: 0.2 },
  "/cookies": { freq: "yearly", priority: 0.2 },
};

const abs = (path: string) => `${BASE}${path === "/" ? "/" : path}`;

/** Every page in NL, EN and ES, each with hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return locales.flatMap((locale) =>
    translatedPaths.map((path) => {
      const s = settings[path] ?? { freq: "monthly" as Freq, priority: 0.5 };
      const langs = languageAlternates(locale, path).languages;
      return {
        url: abs(localizedPath(locale, path)),
        lastModified: now,
        changeFrequency: s.freq,
        // Dutch is the primary market; translations rank slightly lower.
        priority: locale === "nl" ? s.priority : Math.round(s.priority * 0.9 * 10) / 10,
        alternates: {
          languages: Object.fromEntries(
            Object.entries(langs).map(([k, v]) => [k, abs(v)]),
          ),
        },
      };
    }),
  );
}
