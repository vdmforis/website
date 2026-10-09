import Image from "next/image";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";
import { localizedPath, type Locale } from "@/lib/i18n";

type Item = { title: string; body: string };

type ErvaringText = {
  meta: { title: string; description: string };
  heroAlt: string;
  eyebrow: string;
  h1: string;
  intro: string;
  stats: { big: string; small: string }[];
  statsNote: string;
  villaAlt: string;
  timelineEyebrow: string;
  timelineTitle: string;
  timelineIntro: string;
  timeline: Item[];
  lessonsEyebrow: string;
  lessonsTitle: string;
  lessons: Item[];
  ctaTitle: string;
  ctaBody: string;
  ctaBook: string;
  ctaQuote: string;
};

export const ervaringText: Record<Locale, ErvaringText> = {
  nl: {
    meta: {
      title: "Onze ervaring · Foris",
      description:
        "Nederlandse vastgoedervaring uit een familiebedrijf en jarenlang wonen en werken aan de Costa del Azahar. Zo begeleiden we nieuwbouwtrajecten van reservering tot sleutel.",
    },
    heroAlt: "Zee-horizon met maan bij dageraad aan de Costa del Azahar",
    eyebrow: "Onze ervaring · Costa del Azahar",
    h1: "Jarenlang in Spanje wonend, met Nederlandse vastgoedwortels.",
    intro:
      "We kennen het nieuwbouwtraject van twee kanten: niet uit een handboek, maar uit eigen praktijk.",
    stats: [
      { big: "10+ jaar", small: "vastgoed in Nederland: koop, ontwikkeling en verhuur, uit familiebedrijf" },
      { big: "Ter plaatse", small: "jarenlang wonend en werkend aan de Costa del Azahar" },
      { big: "Vast netwerk", small: "notarissen, gestores en advocaten in Castellón en Valencia" },
      { big: "Eigen praktijk", small: "nieuwbouwtrajecten zelf doorlopen, van reservering tot sleutel" },
    ],
    statsNote:
      "We adviseren geen stap die we niet zelf in de praktijk hebben uitgevoerd. Koop je via een Nederlandse B.V.? Ook dat traject kennen we van binnenuit.",
    villaAlt: "Nieuwbouwvilla aan de Costa del Azahar",
    timelineEyebrow: "Nieuwbouwtraject · ons standaard speelveld",
    timelineTitle: "Zes mijlpalen, zes controles",
    timelineIntro:
      "Dit patroon komt bij vrijwel elke Spaanse nieuwbouwontwikkelaar terug. Op elke stap zit een controle die je doet vóór je betaalt.",
    timeline: [
      { title: "Reservering", body: "Kleine aanbetaling om de woning vast te leggen, met een vaste deadline richting contract." },
      { title: "Privaat koopcontract", body: "Eerste aanbetaling van zo'n 10%. Vanaf hier ben je juridisch gebonden." },
      { title: "Tweede deelbetaling", body: "Tweede tranche halverwege de bouw, uitsluitend naar de speciale projectrekening van de ontwikkelaar." },
      { title: "Aval bancair", body: "De bankgarantie die je aanbetalingen dekt (Ley 20/2015). Woord voor woord controleren vóór je betaalt." },
      { title: "Fiscale registratie", body: "NIE (privé) of CIF via modelo 036 (B.V.). Zonder dit nummer geen notaris." },
      { title: "Oplevering & escritura", body: "Slotbetaling per bankcheque, sleutel bij de notaris, aval retour naar de ontwikkelaar." },
    ],
    lessonsEyebrow: "Onze methode · vaste controles",
    lessonsTitle: "Vijf inzichten die standaard meegaan in elke begeleiding",
    lessons: [
      { title: "Begin een half jaar van tevoren met de paperassen", body: "NIE, bankrekening en registraties hebben elk hun eigen wachttijd. Parallel geregeld scheelt maanden." },
      { title: "Lees de aval-clausule woord voor woord", body: "Check dat de garantie álle deelbetalingen dekt, plus IVA en wettelijke rente, niet alleen de hoofdsom." },
      { title: "Plan de notaristijd, niet de opleverdatum", body: "De notarisafspraak valt vaak weken na de oplevering. Boek reizen pas als die datum vaststaat." },
      { title: "Kies vóór de reservering: privé of via een B.V.", body: "De route bepaalt welke papieren en registraties je nodig hebt. Halverwege wisselen kost weken." },
      { title: "Nieuwbouw is geen impulsaankoop", body: "Tussen eerste storting en sleutel zit al snel een jaar of meer. Reken je liquiditeit op het trage scenario." },
    ],
    ctaTitle: "Dit traject lopen met ervaren mensen?",
    ctaBody: "Vast netwerk, vaste methode, Nederlandstalig.",
    ctaBook: "Plan een vrijblijvend gesprek",
    ctaQuote: "Vraag een offerte aan",
  },
  en: {
    meta: {
      title: "Our experience · Foris",
      description:
        "Dutch property experience from a family business and years of living and working on the Costa del Azahar. This is how we guide new-build purchases from reservation to keys.",
    },
    heroAlt: "Sea horizon with the moon at dawn on the Costa del Azahar",
    eyebrow: "Our experience · Costa del Azahar",
    h1: "Living in Spain for years, with Dutch property roots.",
    intro:
      "We know the new-build process from both sides: not from a handbook, but from our own practice.",
    stats: [
      { big: "10+ years", small: "in property in the Netherlands: buying, development and letting, as a family business" },
      { big: "On the ground", small: "living and working on the Costa del Azahar for years" },
      { big: "Trusted network", small: "notaries, gestores and lawyers in Castellón and Valencia" },
      { big: "Own practice", small: "new-build purchases we went through ourselves, from reservation to keys" },
    ],
    statsNote:
      "We don't recommend any step we haven't carried out ourselves. Buying through a Dutch B.V. (private limited company)? We know that process from the inside too.",
    villaAlt: "New-build villa on the Costa del Azahar",
    timelineEyebrow: "New-build process · our home ground",
    timelineTitle: "Six milestones, six checks",
    timelineIntro:
      "This pattern comes back with almost every Spanish new-build developer. Each step has a check you carry out before you pay.",
    timeline: [
      { title: "Reservation", body: "A small deposit to secure the home, with a fixed deadline for the contract." },
      { title: "Private purchase contract", body: "A first payment of around 10%. From this point you are legally bound." },
      { title: "Second instalment", body: "A second payment halfway through the build, only into the developer's dedicated project account." },
      { title: "Aval bancario (bank guarantee)", body: "The bank guarantee that covers your payments on account (Ley 20/2015). Check it word for word before you pay." },
      { title: "Tax registration", body: "NIE (private buyer) or CIF via modelo 036 (B.V.). No notary without this number." },
      { title: "Completion & escritura", body: "Final payment by banker's cheque, keys at the notary, guarantee returned to the developer." },
    ],
    lessonsEyebrow: "Our method · standard checks",
    lessonsTitle: "Five lessons built into every purchase we guide",
    lessons: [
      { title: "Start the paperwork six months ahead", body: "NIE, bank account and registrations each have their own waiting time. Doing them in parallel saves months." },
      { title: "Read the guarantee clause word for word", body: "Check that the guarantee covers all instalments, plus IVA and statutory interest, not just the principal." },
      { title: "Plan around the notary date, not the completion date", body: "The notary appointment often falls weeks after completion. Only book travel once that date is fixed." },
      { title: "Decide before reserving: privately or through a B.V.", body: "The route determines which documents and registrations you need. Switching halfway costs weeks." },
      { title: "A new build is not an impulse purchase", body: "There is easily a year or more between the first payment and the keys. Plan your cash flow for the slow scenario." },
    ],
    ctaTitle: "Want to go through this with experienced people?",
    ctaBody: "A trusted network, a set method, in Dutch.",
    ctaBook: "Book a no-obligation call",
    ctaQuote: "Request a quote",
  },
  es: {
    meta: {
      title: "Nuestra experiencia · Foris",
      description:
        "Experiencia inmobiliaria neerlandesa de una empresa familiar y años viviendo y trabajando en la Costa del Azahar. Así acompañamos compras de obra nueva desde la reserva hasta las llaves.",
    },
    heroAlt: "Horizonte marino con la luna al amanecer en la Costa del Azahar",
    eyebrow: "Nuestra experiencia · Costa del Azahar",
    h1: "Años viviendo en España, con raíces inmobiliarias neerlandesas.",
    intro:
      "Conocemos la compra de obra nueva desde los dos lados: no por un manual, sino por experiencia propia.",
    stats: [
      { big: "Más de 10 años", small: "en el sector inmobiliario en los Países Bajos: compra, promoción y alquiler, como empresa familiar" },
      { big: "Sobre el terreno", small: "años viviendo y trabajando en la Costa del Azahar" },
      { big: "Red de confianza", small: "notarios, gestores y abogados en Castellón y Valencia" },
      { big: "Práctica propia", small: "compras de obra nueva vividas en primera persona, de la reserva a las llaves" },
    ],
    statsNote:
      "No recomendamos ningún paso que no hayamos dado nosotros mismos. ¿Compras a través de una B.V. neerlandesa (sociedad limitada)? También conocemos ese proceso por dentro.",
    villaAlt: "Villa de obra nueva en la Costa del Azahar",
    timelineEyebrow: "Obra nueva · nuestro terreno habitual",
    timelineTitle: "Seis hitos, seis comprobaciones",
    timelineIntro:
      "Este patrón se repite con casi todas las promotoras de obra nueva en España. En cada paso hay una comprobación que conviene hacer antes de pagar.",
    timeline: [
      { title: "Reserva", body: "Una pequeña señal para reservar la vivienda, con un plazo fijo hasta el contrato." },
      { title: "Contrato privado de compraventa", body: "Un primer pago de alrededor del 10%. A partir de aquí estás obligado jurídicamente." },
      { title: "Segundo pago a cuenta", body: "Un segundo pago a mitad de obra, solo a la cuenta especial de la promoción." },
      { title: "Aval bancario", body: "La garantía bancaria que cubre tus pagos a cuenta (Ley 20/2015). Revísala palabra por palabra antes de pagar." },
      { title: "Alta fiscal", body: "NIE (particular) o CIF mediante modelo 036 (B.V.). Sin este número no hay notaría." },
      { title: "Entrega y escritura", body: "Pago final con cheque bancario, llaves en la notaría y devolución del aval a la promotora." },
    ],
    lessonsEyebrow: "Nuestro método · comprobaciones fijas",
    lessonsTitle: "Cinco lecciones que aplicamos en cada acompañamiento",
    lessons: [
      { title: "Empieza con el papeleo medio año antes", body: "El NIE, la cuenta bancaria y las altas tienen cada uno su propio plazo. Hacerlo en paralelo ahorra meses." },
      { title: "Lee la cláusula del aval palabra por palabra", body: "Comprueba que la garantía cubre todos los pagos a cuenta, más el IVA y los intereses legales, no solo el principal." },
      { title: "Planifica según la notaría, no según la entrega", body: "La cita en la notaría suele caer semanas después de la entrega. Reserva los viajes solo cuando esa fecha esté fijada." },
      { title: "Decide antes de reservar: como particular o a través de una B.V.", body: "La vía determina qué documentos y altas necesitas. Cambiar a mitad de camino cuesta semanas." },
      { title: "La obra nueva no es una compra impulsiva", body: "Entre el primer pago y las llaves pasa fácilmente un año o más. Calcula tu liquidez con el escenario lento." },
    ],
    ctaTitle: "¿Quieres hacer este camino con gente con experiencia?",
    ctaBody: "Red de confianza, método fijo, en neerlandés.",
    ctaBook: "Reserva una llamada sin compromiso",
    ctaQuote: "Pide presupuesto",
  },
};

export function ErvaringContent({ locale }: { locale: Locale }) {
  const t = ervaringText[locale];
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <Image
          src="/images/IMG_2980.jpg"
          alt={t.heroAlt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/40" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
            {t.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">{t.intro}</p>
        </div>
      </section>

      {/* Stat tiles */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.stats.map((stat) => (
            <div key={stat.big} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-heading text-2xl text-terracotta">{stat.big}</p>
              <p className="mt-2 text-sm text-foreground/80">{stat.small}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-foreground/85">{t.statsNote}</p>
      </section>

      {/* Full-bleed villa photo */}
      <section className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
        <Image src="/images/IMG_3657.jpg" alt={t.villaAlt} fill sizes="100vw" className="object-cover" />
      </section>

      {/* Timeline */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            {t.timelineEyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl text-navy md:text-4xl">{t.timelineTitle}</h2>
          <p className="mt-4 max-w-2xl text-foreground/80">{t.timelineIntro}</p>
          <ol className="relative mt-10 space-y-8 border-l-2 border-terracotta/30 pl-8">
            {t.timeline.map((item, idx) => (
              <li key={item.title} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-terracotta font-mono text-[0.65rem] text-cream"
                >
                  {idx + 1}
                </span>
                <p className="font-heading text-xl text-navy">{item.title}</p>
                <p className="mt-1 text-foreground/80">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Lessons */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
          {t.lessonsEyebrow}
        </p>
        <h2 className="mt-3 font-heading text-3xl text-navy md:text-4xl">{t.lessonsTitle}</h2>
        <div className="mt-10 grid gap-4">
          {t.lessons.map((lesson, idx) => (
            <div
              key={lesson.title}
              className="grid gap-3 rounded-2xl border border-border bg-card p-6 md:grid-cols-[64px_1fr] md:items-baseline"
            >
              <p className="font-heading text-3xl text-terracotta">{`0${idx + 1}`}</p>
              <div>
                <p className="font-heading text-lg text-navy">{lesson.title}</p>
                <p className="mt-1 text-sm text-foreground/80">{lesson.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-navy text-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl">{t.ctaTitle}</h2>
          <p className="mt-4 text-cream/85">{t.ctaBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <BookCallButton
              locale={locale}
              className="inline-block rounded-full bg-terracotta px-8 py-3 text-base font-medium text-cream transition-colors hover:bg-terracotta/90"
            >
              {t.ctaBook}
            </BookCallButton>
            <Link
              href={localizedPath(locale, "/offerte")}
              className="inline-block rounded-full border border-cream/30 px-8 py-3 text-base font-medium text-cream transition-colors hover:border-terracotta hover:text-terracotta"
            >
              {t.ctaQuote}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
