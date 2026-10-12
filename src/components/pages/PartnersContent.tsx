import { partnersText } from "@/i18n/partners";
import type { Locale } from "@/lib/i18n";
import { contact, whatsappPartnerLink, mailLink } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Check } from "lucide-react";

interface PartnersContentProps {
  locale: Locale;
}

export default function PartnersContent({ locale }: PartnersContentProps) {
  const text = partnersText[locale];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VDM Foris",
    url: "https://vdmforis.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phoneDisplay,
      contactType: "Partner Inquiries",
      availableLanguage: ["Dutch", "English", "Spanish"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="container mx-auto max-w-4xl space-y-16 px-6 py-16 md:py-24">
        <header className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-wider text-neutral-600">
            {text.eyebrow}
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {text.h1}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-700">
            {text.intro}
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">{text.forWhoTitle}</h2>
          <ul className="space-y-3">
            {text.forWhoItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-neutral-900" />
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">{text.howItWorksTitle}</h2>
          <ol className="space-y-6">
            {text.howItWorksSteps.map((s, idx) => (
              <li key={idx} className="space-y-2">
                <h3 className="font-semibold text-neutral-900">{s.step}</h3>
                <p className="text-neutral-700">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-4 rounded-lg bg-neutral-50 p-8">
          <h2 className="text-2xl font-semibold">{text.referralsTitle}</h2>
          <p className="text-neutral-700">{text.referralsBody}</p>
        </section>

        <section className="space-y-4 rounded-lg bg-neutral-50 p-8">
          <h2 className="text-2xl font-semibold">{text.trialTitle}</h2>
          <p className="text-neutral-700">{text.trialBody}</p>
          <p className="text-sm italic text-neutral-600">{text.trialNote}</p>
        </section>

        <section className="space-y-6 border-t pt-12 text-center">
          <h2 className="text-2xl font-semibold">{text.ctaTitle}</h2>
          <p className="mx-auto max-w-xl text-neutral-700">{text.ctaBody}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a
                href={whatsappPartnerLink(locale)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {text.ctaWhatsApp}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={mailLink()}>
                <Mail className="mr-2 h-5 w-5" />
                {text.ctaEmail}
              </a>
            </Button>
          </div>
        </section>
      </article>
    </>
  );
}
