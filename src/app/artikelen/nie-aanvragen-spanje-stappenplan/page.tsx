import type { Metadata } from "next";
import { ArticlePage, articleMetadata } from "@/content/articles";

export const metadata: Metadata = articleMetadata("nie-aanvragen-spanje-stappenplan", "nl");

export default function Page() {
  return <ArticlePage slug="nie-aanvragen-spanje-stappenplan" locale="nl" />;
}
