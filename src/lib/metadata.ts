import type { Metadata } from "next";
import { languageAlternates, localizedPath, ogLocale, type Locale } from "@/lib/i18n";

/**
 * Metadata for a page that exists in NL/EN/ES: canonical, hreflang alternates
 * and Open Graph for the given locale. `title` is used as-is (absolute).
 */
export function translatedPageMetadata(
  locale: Locale,
  path: string,
  { title, description }: { title: string; description: string },
): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: languageAlternates(locale, path),
    openGraph: {
      type: "website",
      siteName: "Foris",
      locale: ogLocale[locale],
      alternateLocale: (Object.keys(ogLocale) as Locale[])
        .filter((l) => l !== locale)
        .map((l) => ogLocale[l]),
      url: localizedPath(locale, path),
      title,
      description,
      // Setting openGraph here drops the inherited file-based image on child
      // routes, so point to the sitewide /opengraph-image explicitly.
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    robots: { index: true, follow: true },
  };
}
