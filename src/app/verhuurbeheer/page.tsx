import type { Metadata } from "next";
import { VerhuurbeheerContent } from "@/components/pages/VerhuurbeheerContent";
import { verhuurbeheerText } from "@/i18n/verhuurbeheer";
import { languageAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: verhuurbeheerText.nl.meta.title },
  description: verhuurbeheerText.nl.meta.description,
  alternates: languageAlternates("nl", "/verhuurbeheer"),
  openGraph: {
    type: "website",
    siteName: "Foris",
    locale: "nl_NL",
    alternateLocale: ["en_GB", "es_ES"],
    url: "/verhuurbeheer",
    title: verhuurbeheerText.nl.meta.title,
    description: verhuurbeheerText.nl.meta.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: verhuurbeheerText.nl.meta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: verhuurbeheerText.nl.meta.title,
    description: verhuurbeheerText.nl.meta.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <VerhuurbeheerContent locale="nl" />;
}
