import type { Metadata } from "next";
import { KennismakingContent, kennismakingText } from "@/components/pages/KennismakingContent";
import { translatedPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = translatedPageMetadata("nl", "/kennismaking", kennismakingText.nl.meta);

export default function Page() {
  return <KennismakingContent locale="nl" />;
}
