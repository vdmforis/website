import Link from "next/link";
import { contact } from "@/lib/contact";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Falls back to a plain link to the cal.eu URL if JS isn't available. */
  href?: string;
};

/**
 * A booking trigger. Renders a Next.js <Link> so it works without JS,
 * but the Cal embed (initialised by <CalInit />) hijacks the click and
 * opens an in-page modal when JS is available.
 *
 * Use anywhere we want a "Plan een gesprek" CTA. Style via className.
 */
export function BookCallButton({ children, className, href }: Props) {
  return (
    <Link
      href={href ?? contact.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-cal-namespace={contact.bookingNamespace}
      data-cal-link={contact.bookingLink}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </Link>
  );
}
