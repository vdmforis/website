import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";

const publishDate = "2026-05-30";
const updatedDate = "2026-05-30";
const readingTime = "9 min";
const title =
  "Nieuwbouw of bestaande bouw in Spanje — welke past bij jou?";
const description =
  "Een eerlijke vergelijking tussen nieuwbouw en bestaande bouw in Spanje. Belastingen (IVA vs ITP), aankoopkosten, garanties, doorlooptijd en de verborgen kosten die je vaak niet ziet komen. Plus een vijf-vragen-checklist om je beslissing te helpen.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "article",
    title,
    description,
    publishedTime: publishDate,
    modifiedTime: updatedDate,
    authors: ["Dennis van der Meulen"],
  },
  alternates: {
    canonical:
      "https://vdmforis.com/artikelen/nieuwbouw-of-bestaande-bouw-spanje",
  },
};

export default function NieuwbouwBestaandeBouwArticle() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishDate,
    dateModified: updatedDate,
    author: {
      "@type": "Person",
      name: "Dennis van der Meulen",
      url: "https://vdmforis.com/over-ons",
    },
    publisher: {
      "@type": "Organization",
      name: "Van der Meulen Foris B.V.",
      url: "https://vdmforis.com",
    },
    mainEntityOfPage:
      "https://vdmforis.com/artikelen/nieuwbouw-of-bestaande-bouw-spanje",
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article header */}
      <header className="relative border-b border-border overflow-hidden">
        <Image
          src="/images/IMG_5111.jpg"
          alt="Uitzicht vanaf een Spaans terras op de palmenboulevard en de Middellandse Zee"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/40" />
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <Link
            href="/artikelen"
            className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta hover:underline"
          >
            ← Artikelen
          </Link>
          <h1 className="mt-6 font-heading text-4xl leading-[1.15] text-navy md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>Geschreven door Dennis van der Meulen</span>
            <span>·</span>
            <time dateTime={publishDate}>30 mei 2026</time>
            <span>·</span>
            <span>{readingTime} lezen</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <Section>
          <Lead>
            De keuze tussen nieuwbouw en bestaande bouw is in Spanje fundamenteler
            dan in Nederland. Het zit niet alleen in stijl of bouwjaar — ook in
            belastingen, juridische garanties, aankoopproces en de hoeveelheid
            geduld die je moet meebrengen. Hieronder een eerlijke vergelijking
            zonder voorkeur vooraf.
          </Lead>
        </Section>

        <Section>
          <H2>De kernverschillen in één blik</H2>
          <P>
            Voor wie weinig tijd heeft — hier zijn de verschillen waar het werkelijk
            om gaat. Daaronder leggen we elke regel uit met cijfers.
          </P>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary/50 text-navy">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Onderdeel</th>
                  <th className="px-4 py-3 text-left font-medium">Nieuwbouw</th>
                  <th className="px-4 py-3 text-left font-medium">Bestaande bouw</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                <tr>
                  <td className="px-4 py-3 font-medium text-navy">Belasting bij koop</td>
                  <td className="px-4 py-3">IVA 10%</td>
                  <td className="px-4 py-3">ITP 6–13% (CCAA-afhankelijk)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-navy">AJD (Valencia)</td>
                  <td className="px-4 py-3">1,5% op koopprijs</td>
                  <td className="px-4 py-3">Niet van toepassing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-navy">Doorlooptijd</td>
                  <td className="px-4 py-3">9–18 mnd (off-plan)</td>
                  <td className="px-4 py-3">2–3 mnd</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-navy">Betalingsstructuur</td>
                  <td className="px-4 py-3">Vier tranches</td>
                  <td className="px-4 py-3">Eén keer bij escritura</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-navy">Garanties</td>
                  <td className="px-4 py-3">10 jaar (Ley 38/1999)</td>
                  <td className="px-4 py-3">Geen wettelijke</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-navy">Aval bancair</td>
                  <td className="px-4 py-3">Verplicht</td>
                  <td className="px-4 py-3">Niet van toepassing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-navy">Energielabel</td>
                  <td className="px-4 py-3">A of B</td>
                  <td className="px-4 py-3">Varieert A–G</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-navy">Onderhandelingsruimte</td>
                  <td className="px-4 py-3">Beperkt</td>
                  <td className="px-4 py-3">5–15% mogelijk</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section>
          <H2>Belastingen vergeleken — concreet</H2>
          <P>
            Op een woning van <strong>€350.000</strong> ziet de
            belastingafhandeling er als volgt uit (Comunidad Valenciana):
          </P>
          <UL>
            <li>
              <strong>Nieuwbouw:</strong> €350.000 + IVA 10% (€35.000) + AJD 1,5%
              (€5.250) = <strong>€390.250</strong> totaal
            </li>
            <li>
              <strong>Bestaande bouw:</strong> €350.000 + ITP 10% (€35.000) ={" "}
              <strong>€385.000</strong> totaal
            </li>
          </UL>
          <P>
            Verschil: ~€5.000 in het voordeel van bestaande bouw. Niet
            wereldschokkend, maar wel meetbaar.
          </P>
          <Callout>
            <p>
              <strong>ITP varieert per regio en wijzigt regelmatig.</strong> Per
              juni 2026:
            </p>
            <ul className="mt-3 ml-5 list-disc space-y-1">
              <li>
                <strong>Comunidad Valenciana</strong>: 10% algemeen{" "}
                <em>tot 1 juni 2026</em>, daarna verlaagd naar <strong>9%</strong>.
                Boven €1 miljoen blijft 11%. Verlaagd tarief <strong>6%</strong>{" "}
                voor eerste eigen woning &lt; €180.000 voor jongeren &lt; 35 jaar.
              </li>
              <li>
                <strong>Madrid</strong>: 6% algemeen
              </li>
              <li>
                <strong>Andalucía</strong>: 7% vlak tarief; verlaagd 3,5–6% voor
                specifieke gevallen (jongeren, lage prijs, grote gezinnen)
              </li>
              <li>
                <strong>Catalunya</strong>: progressief sinds juni 2025 — 10% tot
                €600k / 11% tot €900k / 12% tot €1,5 mln / 13% boven €1,5 mln.
                Plus 20% opslag voor <em>grandes tenedores</em>
              </li>
            </ul>
            <p className="mt-3">
              Vraag je gestor altijd het actuele percentage in jouw regio — beleid
              kan elk fiscaal jaar wijzigen.
            </p>
          </Callout>
        </Section>

        <Section>
          <H2>Wanneer kies je nieuwbouw?</H2>
          <P>
            Vier scenario&apos;s waarin nieuwbouw vaak de betere keuze is:
          </P>
          <OL>
            <li>
              <strong>Energiezuinigheid is prioriteit.</strong> Nieuwbouw na 2020
              voldoet aan strenge isolatie-eisen (CTE-DB-HE) en heeft vrijwel altijd
              een A- of B-label. Bij stijgende energieprijzen scheelt dat duizenden
              euro&apos;s per jaar.
            </li>
            <li>
              <strong>Je wilt geen renovatieproject.</strong> Sleutelklaar is bij
              nieuwbouw vrijwel altijd écht sleutelklaar: keuken, badkamer,
              electra, water — allemaal nieuw en gegarandeerd.
            </li>
            <li>
              <strong>Je hecht waarde aan 10-jaars constructiegarantie.</strong>{" "}
              Onder Ley 38/1999 zijn bouwers verplicht garantie te bieden:{" "}
              <strong>10 jaar</strong> op structurele defecten (estructurales),{" "}
              <strong>3 jaar</strong> op gebreken die de bewoonbaarheid raken
              (habitabilidad), en <strong>1 jaar</strong> op afwerkingselementen
              (terminación o acabado).
            </li>
            <li>
              <strong>Je hebt tijd.</strong> Off-plan kopen betekent 9–18 maanden
              wachten op oplevering, met betalingen verspreid over de bouwperiode.
              Als je geen haast hebt en je liquiditeit kan dat aan — geen probleem.
            </li>
          </OL>
        </Section>

        <Section>
          <H2>Wanneer kies je bestaande bouw?</H2>
          <P>Vier scenario&apos;s waarin bestaande bouw beter past:</P>
          <OL>
            <li>
              <strong>Je wilt er direct kunnen zijn.</strong> Bij bestaande bouw
              kun je binnen 2–3 maanden na ondertekening over de sleutel beschikken.
              Bij nieuwbouw zit je vaak een jaar te wachten.
            </li>
            <li>
              <strong>De locatie heeft geen nieuwbouw.</strong> Oude stadskernen
              (Castellón centro, Peñíscola historisch centrum), eerstelijn-strand
              op een al volgebouwde boulevard — daar bestaat geen nieuwbouw, je
              bent aangewezen op bestaande woningen.
            </li>
            <li>
              <strong>Karakter en uniciteit zijn belangrijk.</strong> Een 100 jaar
              oud vakwerkhuis in een dorp landinwaarts heeft een ziel die nieuwbouw
              niet kan namaken. Voor sommige kopers het hele punt.
            </li>
            <li>
              <strong>Je wilt onderhandelen.</strong> Bij bestaande bouw is 5–15%
              korting op de vraagprijs een reëel onderhandelingsdoel, zeker bij
              langlopende leegstand. Bij nieuwbouw is de prijslijst publiek en zit
              er weinig speling op.
            </li>
          </OL>
        </Section>

        <Section>
          <H2>Verborgen kosten — verschillen die je vaak niet ziet komen</H2>
          <P>
            Naast de hoofdkosten zijn er categorieën van uitgaven die per type
            woning verschillen. Hier de eerlijke lijst.
          </P>

          <H3>Bij nieuwbouw</H3>
          <UL>
            <li>
              <strong>Comunidad de Propietarios in oprichting.</strong> In de
              eerste maanden na oplevering is de VvE-equivalent nog niet
              geïnstalleerd. Reken op chaos rond zwembad-onderhoud, gemeenschappelijke
              tuinen, klusjes.
            </li>
            <li>
              <strong>Snagging-defecten.</strong> Vrijwel elke nieuwbouw heeft 20+
              kleine defecten bij oplevering (verfvlek, scheef stopcontact,
              kraan-lekkage). Je moet ze melden binnen 14 dagen — dat kost tijd en
              vereist aanwezigheid.
            </li>
            <li>
              <strong>Tuinwerk vaak niet inbegrepen.</strong> Een &quot;eigen tuin&quot;
              betekent doorgaans: zand en grind. Beplanting, irrigatie, terras = bij
              jou. Reken op €5–€15k.
            </li>
            <li>
              <strong>Lege omgeving.</strong> Bij nieuwe woonwijken volgen de
              voorzieningen (winkels, scholen, openbaar vervoer) pas later. Een
              paar jaar wat afgelegen leven kan een welkome rust zijn — of een
              ergernis.
            </li>
          </UL>

          <H3>Bij bestaande bouw</H3>
          <UL>
            <li>
              <strong>Achterstallig onderhoud.</strong> Badkamer, keuken, leidingen,
              electra — de meeste woningen ouder dan 25 jaar hebben minstens één
              kapitale renovatie nodig. Reken op €15–€60k afhankelijk van leeftijd
              en staat.
            </li>
            <li>
              <strong>Energierenovatie.</strong> Van een F- of G-label naar A/B
              kost meestal €10–€30k (isolatie, ramen, warmtepomp). Onder de
              EU-EPBD-richtlijn moet Spanje nationale renovatieplannen opstellen
              die naar verwachting label E vanaf 2030 en label D vanaf 2033 als
              minimum voor verkoop/verhuur zullen vragen. Geen direct EU-verbod,
              wel beleidsrichting waar je rekening mee wil houden bij oudere
              woningen.
            </li>
            <li>
              <strong>Verborgen gebreken.</strong> Vocht, lekkages, asbest in oude
              daken, scheurvorming. Een onafhankelijke{" "}
              <em>informe técnico</em> (bouwkundige keuring) door een Spaanse
              architect kost €300–€600 en is altijd het geld waard.
            </li>
            <li>
              <strong>Plusvalía Municipal soms voor koper.</strong> Wettelijk
              betaalt de verkoper, maar in de praktijk wordt dit soms doorberekend
              in de prijs of in het contract. Lees zorgvuldig.
            </li>
          </UL>
        </Section>

        <Section>
          <H2>Onze eigen keuze — waarom wij nieuwbouw kozen</H2>
          <P>
            Voor onze eigen aankoop kozen we voor nieuwbouw: een chalet adosado in
            Grau de Castellón, gekocht in 2025 bij Metrovacesa, sleutel juni 2026.
          </P>
          <P>De afweging:</P>
          <UL>
            <li>
              Energiezuinigheid was zwaarwegend — we wonen er zelf en willen geen
              hoge energierekeningen op een woning die we 30 jaar willen gebruiken
            </li>
            <li>
              We wilden geen renovatieproject erbij — we wonen al sinds 2023 in
              Spanje en hebben de mentale ruimte niet voor verbouwingsstress
            </li>
            <li>
              We hadden tijd — geen acute druk om binnen drie maanden te kunnen
              intrekken
            </li>
            <li>
              De 10-jaars constructiegarantie gaf rust over een aankoop op een
              kuststrook waar zoutige lucht structurele invloed heeft
            </li>
          </UL>
          <P>
            De tradeoff: 18 maanden tussen reservering en sleutel, vier
            deelbetalingen die je liquiditeit drukken, en het mentale werk van
            aval-tracking, vertalingen en modelo 036. Dat hebben we onderschat —
            niet de bedragen, maar het aantal urenkleine beslissingen tijdens het
            proces.
          </P>
          <P>
            Lees het hele verhaal op{" "}
            <Link
              href="/onze-ervaring"
              className="text-terracotta hover:underline"
            >
              Onze ervaring
            </Link>
            .
          </P>
        </Section>

        <Section>
          <H2>Vijf vragen om je beslissing te maken</H2>
          <P>
            Beantwoord deze vijf vragen eerlijk voor jezelf — dan rolt de keuze er
            meestal vanzelf uit:
          </P>
          <OL>
            <li>
              <strong>Wanneer wil je er kunnen zijn?</strong> Direct → bestaande
              bouw. Binnen 12–18 maanden ok → nieuwbouw is een optie.
            </li>
            <li>
              <strong>Hoe belangrijk is energiezuinigheid?</strong> Cruciaal →
              nieuwbouw. Acceptabel om in te investeren → bestaande bouw met
              renovatieplan.
            </li>
            <li>
              <strong>Hoe staat je liquiditeit?</strong> Vier termijnbetalingen
              over 18 maanden ok → nieuwbouw. Liever één moment → bestaande bouw +
              eventueel hypotheek.
            </li>
            <li>
              <strong>Wil je onderhandelen?</strong> Ja, dat hoort bij vastgoed →
              bestaande bouw. Nee, vaste prijs is prima → nieuwbouw.
            </li>
            <li>
              <strong>Hoeveel garantie wil je?</strong> 10 jaar constructie geeft
              rust → nieuwbouw. Ik vertrouw op een goede informe técnico →
              bestaande bouw.
            </li>
          </OL>
        </Section>

        <Section>
          <H2>Tot slot</H2>
          <P>
            Er is geen universeel goede keuze. Nieuwbouw en bestaande bouw zijn
            twee verschillende producten met elk eigen kosten, eigen tempo en
            eigen risico&apos;s. De juiste keuze hangt af van waar jij bent in je
            leven, wat je tijd waard is, en hoe je tegen onderhoud aankijkt.
          </P>
          <P>
            Wat in beide gevallen geldt: een onafhankelijke begeleiding — iemand
            die voor jou werkt en niet voor de verkoper — voorkomt de meeste
            kostbare misstappen. Of dat nu door een advocaat is die de
            koopovereenkomst checkt, een gestor die de papierwinkel coördineert,
            of een aankoopbegeleider die het hele traject volgt.
          </P>
        </Section>

        <div className="mt-16 rounded-3xl border border-olive/40 bg-olive/5 p-8 text-center">
          <h3 className="font-heading text-2xl text-navy">
            Twijfel je nog tussen nieuwbouw en bestaande bouw?
          </h3>
          <p className="mt-3 text-foreground/80">
            Plan een vrijblijvend gesprek van 30 minuten. We bespreken jouw
            situatie, regio en wensen — en we zeggen eerlijk welke richting voor
            jou logisch is.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <BookCallButton className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90">
              Plan een gratis gesprek
            </BookCallButton>
            <Link
              href="/gratis-gids"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-terracotta"
            >
              Of download eerst onze gids
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
            Lees ook
          </p>
          <Link
            href="/artikelen/modelo-036-nederlandse-bv"
            className="mt-3 block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-terracotta/60"
          >
            <p className="font-heading text-lg text-navy">
              Modelo 036 voor Nederlandse B.V.&apos;s — wat je moet weten in 2026
            </p>
            <p className="mt-2 text-sm text-foreground/75">
              Eerstehandsgids voor het indienen van een Modelo 036 om een Spaanse
              CIF te krijgen. Documentenlijst, kosten, doorlooptijd en valkuilen.
            </p>
            <span className="mt-3 inline-block text-sm text-terracotta">
              Lees het artikel →
            </span>
          </Link>
        </div>
      </article>
    </main>
  );
}

/* --- presentational helpers ---------------------------------------------- */

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mt-12 first:mt-0">{children}</section>;
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-2xl text-navy md:text-3xl scroll-mt-24">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 font-heading text-lg text-navy">{children}</h3>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-l-4 border-terracotta pl-6 text-lg leading-relaxed text-foreground/85">
      {children}
    </p>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-base leading-relaxed text-foreground/85">
      {children}
    </p>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mt-4 space-y-2 text-foreground/85">{children}</ul>;
}

function OL({ children }: { children: React.ReactNode }) {
  return (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-foreground/85 marker:text-terracotta marker:font-mono">
      {children}
    </ol>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-olive/40 bg-olive/5 p-6 text-foreground/85">
      {children}
    </div>
  );
}
