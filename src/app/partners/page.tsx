import PartnersContent from "@/components/pages/PartnersContent";
import { partnersText } from "@/i18n/partners";
import { languageAlternates } from "@/lib/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...partnersText.nl.meta,
  alternates: {
    canonical: "https://vdmforis.com/partners",
    languages: languageAlternates("nl", "/partners"),
  },
};

export default function PartnersPage() {
  return <PartnersContent locale="nl" />;
}
