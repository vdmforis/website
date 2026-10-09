import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/contact";
import { BookCallButton } from "@/components/BookCallButton";
import { localizedPath, type Locale } from "@/lib/i18n";

type OverOnsText = {
  meta: { title: string; description: string };
  heroAlt: string;
  eyebrow: string;
  h1: string;
  intro: string;
  branchesTitle: string;
  branchesP1: (n: (s: string) => React.ReactNode) => React.ReactNode;
  branchesP2: (n: (s: string) => React.ReactNode) => React.ReactNode;
  pathAlt: string;
  whyTitle: string;
  whyP1Before: string;
  whyP1Em: string;
  whyP2: string;
  whyLinkBefore: string;
  whyLink: string;
  practiceTitle: string;
  practice: { title: string; body: string }[];
  promiseTitle: string;
  promises: string[];
  ctaTitle: string;
  ctaBody: string;
  ctaBook: string;
  ctaFree: string;
  ctaWhatsapp: string;
};

export const overOnsText: Record<Locale, OverOnsText> = {
  nl: {
    meta: {
      title: "Over ons · Foris",
      description:
        "Foris is de Spaanse tak van een Nederlands vastgoedfamiliebedrijf: tien jaar ervaring in koop, ontwikkeling en verhuur, gecombineerd met een vast netwerk en eigen nieuwbouwpraktijk aan de Costa del Azahar.",
    },
    heroAlt: "Strand bij dageraad aan de Costa del Azahar, Grau de Castellón",
    eyebrow: "Over ons",
    h1: "Een vastgoedfamiliebedrijf, met een Spaanse tak aan de Costa del Azahar.",
    intro:
      "Nederlandse vastgoedkennis, een vast lokaal netwerk en eigen nieuwbouwpraktijk, gebundeld in één aanspreekpunt voor buitenlandse kopers.",
    branchesTitle: "Twee takken, één discipline",
    branchesP1: (n) => (
      <>
        In Nederland opereert {n("Van der Meulen Vastgoed B.V.")}, al meer dan tien jaar
        actief in koop, ontwikkeling en verhuur van vastgoed. Contracten beoordelen,
        onderhandelen, bouwers aansturen en projecten opleveren: dat is het dagelijkse werk.
      </>
    ),
    branchesP2: (n) => (
      <>
        {n("Van der Meulen Foris B.V.")} is de Spaanse tak van dat familiebedrijf, geleid
        door {n("Dennis van der Meulen")}, jarenlang wonend en werkend aan de Costa del
        Azahar. Dezelfde discipline en lange-termijn-denkwijze, toegepast op de Spaanse
        nieuwbouwmarkt.
      </>
    ),
    pathAlt: "Dennenbospad aan de Spaanse kust, Sierra de Irta-natuurgebied",
    whyTitle: "Waarom Foris bestaat",
    whyP1Before:
      "Het Spaanse nieuwbouwtraject (notariële volmachten, beëdigde vertalingen, modelo 036, aval bancair, deelbetalingen over twee landen) hebben we zelf doorlopen, via eigen vennootschappen. Onze conclusie: ",
    whyP1Em: "dit zou voor geen enkele koper zo moeilijk hoeven zijn.",
    whyP2:
      "Die drie ingrediënten (Nederlandse vastgoedkennis, een vast netwerk van gestores, notarissen en advocaten, en eigen praktijkervaring met Spaanse nieuwbouw) maken we met Foris beschikbaar voor buitenlandse kopers. Geen makelaarsketen, geen call center, geen commissie-jacht.",
    whyLinkBefore: "Hoe zo'n traject eruitziet, stap voor stap: ",
    whyLink: "Onze ervaring",
    practiceTitle: "Wat dat in de praktijk betekent",
    practice: [
      { title: "Nederlandstalig, op alle niveaus", body: "Elk Spaans document leggen we uit in helder Nederlands. Geen Google-vertaling, geen onduidelijkheid bij de notaris." },
      { title: "Ter plaatse in Castellón", body: "Een bezichtiging, bouwbezoek of notarisafspraak is lokaal geregeld. Jij hoeft er niet voor te vliegen." },
      { title: "Familiebedrijf-mentaliteit", body: "Korte lijntjes. Dezelfde mensen die je spreekt bij de kennismaking gaan met je mee naar de notaris." },
      { title: "Onafhankelijk", body: "We krijgen geen commissie van verkopers, ontwikkelaars, bouwers of banken. Onze enige opdrachtgever ben jij." },
      { title: "Duidelijke afspraken", body: "Offerte vooraf, schriftelijk. Geen succes-fees, geen verborgen marges, geen verrassingen achteraf." },
    ],
    promiseTitle: "Wat we beloven",
    promises: [
      "We zeggen het eerlijk, ook als dat betekent dat je dit huis níet moet kopen.",
      "We zijn duidelijk over afspraken: vooraf, schriftelijk, niets achteraf.",
      "We doen alleen werk dat we zelf zouden willen krijgen.",
      "Wat we niet kunnen, doen we niet. We sturen je dan door naar iemand die het wel kan.",
    ],
    ctaTitle: "Kennismaken?",
    ctaBody:
      "Een eerste gesprek is gratis, duurt 30 minuten en kan via videocall of telefonisch, wat jou het beste uitkomt.",
    ctaBook: "Plan een gesprek",
    ctaFree: "· gratis",
    ctaWhatsapp: "Of stuur een WhatsApp",
  },
  en: {
    meta: {
      title: "About us · Foris",
      description:
        "Foris is the Spanish branch of a Dutch family property business: ten years of experience in buying, development and letting, combined with a trusted network and our own new-build experience on the Costa del Azahar.",
    },
    heroAlt: "Beach at dawn on the Costa del Azahar, Grau de Castellón",
    eyebrow: "About us",
    h1: "A family property business, with a Spanish branch on the Costa del Azahar.",
    intro:
      "Dutch property know-how, a trusted local network and our own new-build experience, brought together in one point of contact for foreign buyers.",
    branchesTitle: "Two branches, one discipline",
    branchesP1: (n) => (
      <>
        In the Netherlands, {n("Van der Meulen Vastgoed B.V.")} has been active in buying,
        developing and letting property for more than ten years. Reviewing contracts,
        negotiating, managing builders and delivering projects: that is the day-to-day work.
      </>
    ),
    branchesP2: (n) => (
      <>
        {n("Van der Meulen Foris B.V.")} is the Spanish branch of that family business, led
        by {n("Dennis van der Meulen")}, who has lived and worked on the Costa del Azahar for
        years. The same discipline and long-term thinking, applied to the Spanish new-build
        market.
      </>
    ),
    pathAlt: "Pine forest path on the Spanish coast, Sierra de Irta nature park",
    whyTitle: "Why Foris exists",
    whyP1Before:
      "We went through the Spanish new-build process ourselves (notarial powers of attorney, sworn translations, modelo 036, bank guarantee, instalments across two countries) through our own companies. Our conclusion: ",
    whyP1Em: "it shouldn't have to be this difficult for any buyer.",
    whyP2:
      "With Foris we make those three ingredients (Dutch property know-how, a trusted network of gestores, notaries and lawyers, and hands-on experience with Spanish new builds) available to foreign buyers. No estate agency chain, no call centre, no commission hunting.",
    whyLinkBefore: "What such a process looks like, step by step: ",
    whyLink: "Our experience",
    practiceTitle: "What that means in practice",
    practice: [
      { title: "In Dutch, at every level", body: "We explain every Spanish document in clear Dutch. No Google Translate, no confusion at the notary." },
      { title: "On the ground in Castellón", body: "A viewing, site visit or notary appointment is arranged locally. You don't need to fly over for it." },
      { title: "A family business mindset", body: "Short lines of communication. The same people you speak to at the first call go with you to the notary." },
      { title: "Independent", body: "We receive no commission from sellers, developers, builders or banks. Our only client is you." },
      { title: "Clear agreements", body: "A written quote upfront. No success fees, no hidden margins, no surprises afterwards." },
    ],
    promiseTitle: "What we promise",
    promises: [
      "We'll be honest with you, even if that means you shouldn't buy this house.",
      "We're clear about agreements: upfront, in writing, nothing added afterwards.",
      "We only do work we would want to receive ourselves.",
      "What we can't do, we don't do. We'll refer you to someone who can.",
    ],
    ctaTitle: "Shall we talk?",
    ctaBody:
      "A first call is free, takes 30 minutes and can be by video call or phone, whichever suits you best.",
    ctaBook: "Book a call",
    ctaFree: "· free",
    ctaWhatsapp: "Or send a WhatsApp",
  },
  es: {
    meta: {
      title: "Quiénes somos · Foris",
      description:
        "Foris es la rama española de una empresa familiar inmobiliaria neerlandesa: diez años de experiencia en compra, promoción y alquiler, junto con una red de confianza y experiencia propia en obra nueva en la Costa del Azahar.",
    },
    heroAlt: "Playa al amanecer en la Costa del Azahar, Grao de Castellón",
    eyebrow: "Quiénes somos",
    h1: "Una empresa familiar inmobiliaria, con una rama española en la Costa del Azahar.",
    intro:
      "Conocimiento inmobiliario neerlandés, una red local de confianza y experiencia propia en obra nueva, reunidos en un único interlocutor para compradores extranjeros.",
    branchesTitle: "Dos ramas, una misma forma de trabajar",
    branchesP1: (n) => (
      <>
        En los Países Bajos opera {n("Van der Meulen Vastgoed B.V.")}, con más de diez años
        de actividad en la compra, promoción y alquiler de inmuebles. Revisar contratos,
        negociar, dirigir constructores y entregar proyectos: ese es el trabajo diario.
      </>
    ),
    branchesP2: (n) => (
      <>
        {n("Van der Meulen Foris B.V.")} es la rama española de esa empresa familiar,
        dirigida por {n("Dennis van der Meulen")}, que lleva años viviendo y trabajando en la
        Costa del Azahar. La misma disciplina y visión a largo plazo, aplicadas al mercado
        español de obra nueva.
      </>
    ),
    pathAlt: "Sendero entre pinos en la costa, parque natural de la Serra d'Irta",
    whyTitle: "Por qué existe Foris",
    whyP1Before:
      "Hemos pasado nosotros mismos por la compra de obra nueva en España (poderes notariales, traducciones juradas, modelo 036, aval bancario, pagos a cuenta entre dos países) a través de nuestras propias sociedades. Nuestra conclusión: ",
    whyP1Em: "no debería ser tan difícil para ningún comprador.",
    whyP2:
      "Con Foris ponemos esos tres ingredientes (conocimiento inmobiliario neerlandés, una red de confianza de gestores, notarios y abogados, y experiencia práctica con obra nueva en España) al alcance de compradores extranjeros. Sin cadena inmobiliaria, sin call center, sin caza de comisiones.",
    whyLinkBefore: "Cómo es un proceso así, paso a paso: ",
    whyLink: "Nuestra experiencia",
    practiceTitle: "Qué significa en la práctica",
    practice: [
      { title: "En neerlandés, a todos los niveles", body: "Te explicamos cada documento español en un neerlandés claro. Sin traductor automático, sin dudas en la notaría." },
      { title: "Sobre el terreno en Castellón", body: "Una visita, una visita de obra o una cita en la notaría se organizan aquí. No necesitas coger un avión." },
      { title: "Mentalidad de empresa familiar", body: "Trato directo. Las mismas personas con las que hablas en la primera llamada te acompañan a la notaría." },
      { title: "Independientes", body: "No recibimos comisiones de vendedores, promotoras, constructoras ni bancos. Nuestro único cliente eres tú." },
      { title: "Acuerdos claros", body: "Presupuesto previo y por escrito. Sin comisiones de éxito, sin márgenes ocultos, sin sorpresas después." },
    ],
    promiseTitle: "Lo que prometemos",
    promises: [
      "Te lo decimos con sinceridad, aunque eso signifique que no deberías comprar esta casa.",
      "Somos claros con los acuerdos: antes, por escrito y nada después.",
      "Solo hacemos el trabajo que nos gustaría recibir a nosotros.",
      "Lo que no sabemos hacer, no lo hacemos. Te remitimos a alguien que sí sepa.",
    ],
    ctaTitle: "¿Hablamos?",
    ctaBody:
      "La primera llamada es gratis, dura 30 minutos y puede ser por videollamada o por teléfono, como mejor te venga.",
    ctaBook: "Reserva una llamada",
    ctaFree: "· gratis",
    ctaWhatsapp: "O escríbenos por WhatsApp",
  },
};

export function OverOnsContent({ locale }: { locale: Locale }) {
  const t = overOnsText[locale];
  const n = (s: string) => <span className="text-navy">{s}</span>;
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <Image
          src="/images/IMG_4402.jpg"
          alt={t.heroAlt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream/95 via-cream/80 to-cream/40" />
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
            {t.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/85">{t.intro}</p>
        </div>
      </section>

      {/* Het bedrijf */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.branchesTitle}</h2>
        <div className="mt-6 space-y-4 text-foreground/85">
          <p>{t.branchesP1(n)}</p>
          <p>{t.branchesP2(n)}</p>
        </div>
      </section>

      {/* Full-bleed pine path photo */}
      <section className="relative aspect-[21/9] w-full overflow-hidden md:aspect-[3/1]">
        <Image src="/images/IMG_7278.jpg" alt={t.pathAlt} fill sizes="100vw" className="object-cover" />
      </section>

      {/* Waarom Foris */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.whyTitle}</h2>
          <div className="mt-6 space-y-4 text-foreground/85">
            <p>
              {t.whyP1Before}
              <em className="text-navy">{t.whyP1Em}</em>
            </p>
            <p>{t.whyP2}</p>
            <p className="text-sm text-muted-foreground">
              {t.whyLinkBefore}
              <Link
                href={localizedPath(locale, "/onze-ervaring")}
                className="text-terracotta hover:underline"
              >
                {t.whyLink}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* In de praktijk */}
      <section className="border-b border-border bg-navy text-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl">{t.practiceTitle}</h2>
          <ul className="mt-8 space-y-5 text-cream/90">
            {t.practice.map((item, idx) => (
              <li key={item.title} className="flex gap-4">
                <span className="font-heading text-2xl text-terracotta">{`0${idx + 1}`}</span>
                <div>
                  <p className="font-heading text-lg text-cream">{item.title}</p>
                  <p className="mt-1 text-cream/80">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Wat we beloven */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.promiseTitle}</h2>
        <ul className="mt-8 space-y-5">
          {t.promises.map((promise, idx) => (
            <li key={promise} className="flex gap-4 text-foreground/85">
              <span className="font-heading text-2xl text-terracotta">{`0${idx + 1}`}</span>
              <span className="pt-1">{promise}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.ctaTitle}</h2>
          <p className="mt-4 text-foreground/80">{t.ctaBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <BookCallButton
              locale={locale}
              className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90"
            >
              {t.ctaBook} <span className="ml-1 text-cream/80">{t.ctaFree}</span>
            </BookCallButton>
            <a
              href={whatsappLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-terracotta"
            >
              {t.ctaWhatsapp}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
