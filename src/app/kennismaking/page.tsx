import type { Metadata } from "next";
import { KennismakingForm } from "@/components/KennismakingForm";
import { whatsappLink, contact } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Plan een kennismaking",
  description:
    "Vraag een gratis kennismakingsgesprek van 30 minuten aan. We stellen binnen één werkdag een tijdstip voor — videocall of telefonisch, in het Nederlands.",
};

export default function KennismakingPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border bg-gradient-to-br from-cream via-cream to-secondary/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
              Gratis · 30 minuten
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
              Plan een kennismaking.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">
              Vertel kort waar je staat, dan stellen we binnen één werkdag per
              e-mail een tijdstip voor. Videocall of telefonisch, in het
              Nederlands.
            </p>
            <ul className="mt-8 space-y-3 text-foreground/85">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                <span>We luisteren naar je situatie en beantwoorden je vragen</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                <span>Eerlijk antwoord of we de juiste club voor je zijn</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                <span>Geen verkoop, geen verplichtingen</span>
              </li>
            </ul>
            <p className="mt-8 text-sm text-foreground/70">
              Liever direct contact? Stuur een{" "}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-terracotta underline-offset-4 hover:underline"
              >
                WhatsApp
              </a>{" "}
              of mail naar{" "}
              <a
                href={`mailto:${contact.email}`}
                className="font-medium text-terracotta underline-offset-4 hover:underline"
              >
                {contact.email}
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <KennismakingForm />
          </div>
        </div>
      </section>
    </main>
  );
}
