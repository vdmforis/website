import type { Metadata } from "next";
import { ErvaringContent, ervaringText } from "@/components/pages/ErvaringContent";
import { translatedPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = translatedPageMetadata("nl", "/onze-ervaring", ervaringText.nl.meta);

export default function Page() {
  return <ErvaringContent locale="nl" />;
}
