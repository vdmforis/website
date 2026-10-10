import type { Metadata } from "next";
import { OnderhoudContent } from "@/components/pages/OnderhoudContent";
import { onderhoudText } from "@/i18n/onderhoud";
import { languageAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: onderhoudText.nl.meta.title },
  description: onderhoudText.nl.meta.description,
  alternates: languageAlternates("nl", "/onderhoud"),
  openGraph: {
    type: "website",
    siteName: "Foris",
    locale: "nl_NL",
    alternateLocale: ["en_GB", "es_ES"],
    url: "/onderhoud",
    title: onderhoudText.nl.meta.title,
    description: onderhoudText.nl.meta.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: onderhoudText.nl.meta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: onderhoudText.nl.meta.title,
    description: onderhoudText.nl.meta.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <OnderhoudContent locale="nl" />;
}
