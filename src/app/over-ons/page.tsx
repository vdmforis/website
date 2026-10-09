import type { Metadata } from "next";
import { OverOnsContent, overOnsText } from "@/components/pages/OverOnsContent";
import { translatedPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = translatedPageMetadata("nl", "/over-ons", overOnsText.nl.meta);

export default function Page() {
  return <OverOnsContent locale="nl" />;
}
