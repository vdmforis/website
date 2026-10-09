import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  locale?: Locale;
};

/**
 * A booking trigger. Links to the on-site kennismaking page (in the visitor's
 * language): the visitor requests a slot via our own form and we confirm a
 * time by e-mail.
 */
export function BookCallButton({ children, className, href, locale = "nl" }: Props) {
  return (
    <Link href={href ?? localizedPath(locale, "/kennismaking")} className={className}>
      {children}
    </Link>
  );
}
