import type { Metadata } from "next";
import { OfferteForm } from "@/components/OfferteForm";
import { whatsappLink, contact } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Vraag een offerte aan",
  description:
    "Kies de dienst, laat je gegevens achter en ontvang binnen één werkdag een vrijblijvende offerte op maat — in het Nederlands.",
};

export default async function OffertePage({
  searchParams,
}: {
  searchParams: Promise<{ dienst?: string }>;
}) {
  const { dienst } = await searchParams;

  return (
    <main className="flex-1">
      <section className="border-b border-border bg-gradient-to-br from-cream via-cream to-secondary/60">
        <div className="mx-auto max-w-2xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            Vrijblijvend · binnen één werkdag
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
            Vraag een offerte aan.
          </h1>
          <p className="mt-5 text-lg text-foreground/80">
            Twee minuten werk: kies de dienst, laat je gegevens achter, en je
            ontvangt binnen één werkdag een offerte op maat.
          </p>

          <div className="mt-10">
            <OfferteForm defaultDienst={dienst} />
          </div>

          <p className="mt-8 text-center text-sm text-foreground/70">
            Liever eerst even overleggen? Stuur een{" "}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-terracotta underline-offset-4 hover:underline"
            >
              WhatsApp
            </a>
            , mail{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-medium text-terracotta underline-offset-4 hover:underline"
            >
              {contact.email}
            </a>{" "}
            of{" "}
            <a
              href="/kennismaking"
              className="font-medium text-terracotta underline-offset-4 hover:underline"
            >
              plan een gratis kennismaking
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
