import { notFound, permanentRedirect } from "next/navigation";
import { isForeignLocale } from "@/lib/i18n";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isForeignLocale(lang)) notFound();
  permanentRedirect(`/${lang}/onderhoud`);
}
