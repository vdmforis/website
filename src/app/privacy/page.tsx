import type { Metadata } from "next";
import { PrivacyContent, privacyMeta } from "@/components/legal/PrivacyContent";
import { translatedPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = translatedPageMetadata("nl", "/privacy", privacyMeta.nl);

export default function PrivacyPage() {
  return <PrivacyContent locale="nl" />;
}
