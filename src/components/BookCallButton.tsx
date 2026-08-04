import Link from "next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

/**
 * A booking trigger. Links to the on-site kennismaking page — the visitor
 * requests a slot via our own form and we confirm a time by e-mail.
 */
export function BookCallButton({ children, className, href }: Props) {
  return (
    <Link href={href ?? "/kennismaking"} className={className}>
      {children}
    </Link>
  );
}
