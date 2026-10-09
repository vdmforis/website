import type { Metadata } from "next";
import { GidsContent, gidsText } from "@/components/pages/GidsContent";
import { translatedPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = translatedPageMetadata("nl", "/gratis-gids", gidsText.nl.meta);

export default function Page() {
  return <GidsContent locale="nl" />;
}
