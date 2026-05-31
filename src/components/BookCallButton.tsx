import Link from "next/link";
import { contact } from "@/lib/contact";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

/**
 * A booking trigger. Opens cal.eu in a new tab — Cal's embed-modal is
 * unreliable with the .eu instance, so a clean new-tab navigation is the
 * pragmatic choice. User books, closes tab, returns to the site.
 */
export function BookCallButton({ children, className, href }: Props) {
  return (
    <Link
      href={href ?? contact.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </Link>
  );
}
