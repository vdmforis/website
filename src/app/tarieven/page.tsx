import type { Metadata } from "next";
import { TarievenContent } from "@/components/pages/TarievenContent";
import { tarievenText } from "@/i18n/tarieven";
import { languageAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: tarievenText.nl.meta.title },
  description: tarievenText.nl.meta.description,
  alternates: languageAlternates("nl", "/tarieven"),
  openGraph: {
    type: "website",
    siteName: "Foris",
    locale: "nl_NL",
    alternateLocale: ["en_GB", "es_ES"],
    url: "/tarieven",
    title: tarievenText.nl.meta.title,
    description: tarievenText.nl.meta.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: tarievenText.nl.meta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: tarievenText.nl.meta.title,
    description: tarievenText.nl.meta.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <TarievenContent locale="nl" />;
}
