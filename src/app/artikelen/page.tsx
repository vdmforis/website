import type { Metadata } from "next";
import { ArtikelenContent, artikelenText } from "@/components/pages/ArtikelenContent";
import { translatedPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = translatedPageMetadata("nl", "/artikelen", artikelenText.nl.meta);

export default function Page() {
  return <ArtikelenContent locale="nl" />;
}
