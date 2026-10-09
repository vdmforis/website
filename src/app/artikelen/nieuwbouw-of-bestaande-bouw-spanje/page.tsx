import type { Metadata } from "next";
import { ArticlePage, articleMetadata } from "@/content/articles";

export const metadata: Metadata = articleMetadata("nieuwbouw-of-bestaande-bouw-spanje", "nl");

export default function Page() {
  return <ArticlePage slug="nieuwbouw-of-bestaande-bouw-spanje" locale="nl" />;
}
