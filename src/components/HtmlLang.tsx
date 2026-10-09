"use client";

import { usePathname } from "next/navigation";
import { localeFromPathname } from "@/lib/i18n";

/**
 * <html> with the right `lang` for the current URL (/en -> en, /es -> es,
 * everything else nl). Rendered on the server too, so the static HTML is correct.
 */
export function HtmlLang({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang={localeFromPathname(pathname)} className={className}>
      {children}
    </html>
  );
}
