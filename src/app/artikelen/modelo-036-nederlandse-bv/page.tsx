import type { Metadata } from "next";
import Link from "next/link";

const publishDate = "2026-05-29";
const updatedDate = "2026-05-29";
const readingTime = "8 min";
const title =
  "Modelo 036 voor Nederlandse B.V.'s — wat je moet weten in 2026";
const description =
  "Eerstehandsgids voor het indienen van een Modelo 036 voor je Nederlandse B.V. om een Spaanse CIF te krijgen. Documentenlijst, kosten, doorlooptijd en de zes meest voorkomende valkuilen.";

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
    canonical: "https://vdmforis.com/artikelen/modelo-036-nederlandse-bv",
  },
};

export default function Modelo036Article() {
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
      "https://vdmforis.com/artikelen/modelo-036-nederlandse-bv",
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article header */}
      <header className="border-b border-border bg-gradient-to-br from-cream via-cream to-secondary/40">
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
            <time dateTime={publishDate}>29 mei 2026</time>
            <span>·</span>
            <span>{readingTime} lezen</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <Section>
          <Lead>
            Heel kort: een Modelo 036 is het Spaanse declaración censal — de
            fiscale aanmelding bij de Agencia Tributaria. Voor Nederlandse B.V.&apos;s
            die in Spanje vastgoed willen kopen is wachten op de Modelo 036 vaak
            het lange-tand-moment in het hele aankoopproces. Wij hebben dit
            traject in mei 2026 zelf doorlopen voor onze eigen B.V. — hier zit
            alles wat we onderweg leerden.
          </Lead>
        </Section>

        <Section>
          <H2>Wat is een Modelo 036 — in mensentaal</H2>
          <P>
            De Modelo 036 (officieel:{" "}
            <em>
              Declaración censal de alta, modificación y baja en el Censo de
              Empresarios, Profesionales y Retenedores
            </em>
            ) is het standaardformulier waarmee een entiteit zich aanmeldt,
            wijzigt of afmeldt bij de Spaanse fiscale instanties. Het is het
            Spaanse equivalent van een combinatie tussen een BTW-aanmelding en
            een ondernemersinschrijving bij de Belastingdienst.
          </P>
          <P>
            Voor Nederlandse B.V.&apos;s die in Spanje vastgoed willen kopen heeft
            de Modelo 036 één specifieke functie: het is hoe je een Spaanse{" "}
            <strong>CIF</strong> krijgt (NIF voor rechtspersonen, beginnend met
            N voor buitenlandse entiteiten). Zonder dat nummer geen Spaanse
            bankrekening, geen escritura bij de notaris, geen betaling naar
            Spaanse partijen die boven een drempel uitkomt.
          </P>
        </Section>

        <Section>
          <H2>Wanneer heb je het echt nodig?</H2>
          <P>Niet elke buitenlandse koper hoeft een Modelo 036 in te dienen:</P>
          <UL>
            <li>
              <strong>Privépersonen</strong> kopen op hun NIE. Geen Modelo 036
              nodig.
            </li>
            <li>
              <strong>Nederlandse B.V.&apos;s die incidenteel kopen</strong> voor
              eigen gebruik zitten technisch in een grijs gebied — maar in de
              praktijk vragen Spaanse banken en notarissen vrijwel altijd om
              een CIF voordat ze met je werken.
            </li>
            <li>
              <strong>
                Nederlandse B.V.&apos;s die structureel diensten leveren in Spanje
              </strong>{" "}
              (vakantieverhuur, makelaardij, advisering): verplicht.
            </li>
          </UL>
          <P>
            Onze conclusie: als je vastgoed koopt via je B.V., dien hem in.
            Spaanse instanties accepteren in toenemende mate geen anonieme
            buitenlandse rechtspersonen meer aan de andere kant van een
            transactie.
          </P>
        </Section>

        <Section>
          <H2>CIF, NIF, NIE — wat is het verschil?</H2>
          <P>
            Voordat we het hebben over hoe je een Modelo 036 indient: weet welk
            nummer je krijgt en wat het verschil is met andere
            fiscaalnummers.
          </P>
          <UL>
            <li>
              <strong>NIF (Número de Identificación Fiscal)</strong> — generieke
              term, de Spaanse fiscale identiteit van zowel personen als
              rechtspersonen.
            </li>
            <li>
              <strong>NIE (Número de Identidad de Extranjero)</strong> — NIF
              voor buitenlandse natuurlijke personen, beginnend met X, Y of Z.
            </li>
            <li>
              <strong>CIF (Código de Identificación Fiscal)</strong> — voorheen
              de aparte naam voor de NIF van rechtspersonen. Sinds 2008
              officieel afgeschaft als aparte aanduiding, maar nog steeds breed
              gebruikt in de zakelijke taal.
            </li>
            <li>
              <strong>NIF voor buitenlandse entidades</strong> — buitenlandse
              rechtspersonen krijgen een NIF die begint met{" "}
              <strong>N</strong> (Nederlandse B.V.: N + 7 cijfers + letter).
            </li>
          </UL>
          <P>
            Voor jouw Nederlandse B.V. is wat je krijgt formeel een NIF — in
            dagelijkse Spaanse zakelijke taal meestal aangeduid met CIF.
          </P>
        </Section>

        <Section>
          <H2>Wat heb je nodig vóór je begint?</H2>
          <P>
            De Modelo 036 indienen lukt alleen met een complete documentenstapel.
            Wij dienden onze aanvraag in via een gestor in Castellón. Bij de
            aanvraag hadden we mee:
          </P>
          <OL>
            <li>
              <strong>Modelo 036 zelf</strong> — ingevuld, ondertekend door de
              gevolmachtigde (apoderado).
            </li>
            <li>
              <strong>Notariële volmacht (poder)</strong> — Nederlandse akte
              waarin de gevolmachtigde wordt aangewezen om de B.V. in Spanje te
              vertegenwoordigen. Beëdigd vertaald naar Spaans. Geapostilleerd.
            </li>
            <li>
              <strong>Akte van oprichting van de Nederlandse B.V.</strong> —
              beëdigd vertaald, geapostilleerd. Bij ons: 15 pagina&apos;s statuten
              + slotverklaringen, allemaal vertaald.
            </li>
            <li>
              <strong>KvK-uittreksel</strong> — bij voorkeur in de Spaanse{" "}
              <em>Extracto del Registro Mercantil</em>-versie. KvK levert die
              zelf, scheelt een vertaalstap.
            </li>
            <li>
              <strong>UBO-register-uittreksel</strong> van de eigenaar(s) van de
              B.V. — beëdigd vertaald.
            </li>
            <li>
              <strong>NIE van de gevolmachtigde</strong> — kopie.
            </li>
            <li>
              <strong>Mandato de representación</strong> — Spaanse
              vertegenwoordigings&shy;overeenkomst tussen B.V. en gestor.
            </li>
          </OL>
          <Callout>
            <p>
              <strong>Belangrijk:</strong> alle vertalingen moeten beëdigd zijn,
              gemaakt door een <em>traductor jurado</em> die geregistreerd is
              bij het Spaanse Ministerie van Buitenlandse Zaken. Een gewone
              vertaalbureau-vertaling wordt geweigerd. Kosten lopen op tot
              €800–1.200 voor een complete set.
            </p>
          </Callout>
        </Section>

        <Section>
          <H2>Stap-voor-stap: hoe wij het indienden</H2>
          <P>
            Wij dienden onze Modelo 036 in op 26 mei 2026, via een gestor, langs
            de elektronische weg ({" "}
            <a
              href="https://sede.agenciatributaria.gob.es"
              className="text-terracotta hover:underline"
              rel="noopener noreferrer"
            >
              sede.agenciatributaria.gob.es
            </a>
            ).
          </P>
          <div className="mt-6 space-y-6">
            <Step number={1} title="Modelo 036 invullen">
              <P>De gestor vult het in. Hoofdvelden voor een buitenlandse entiteit:</P>
              <UL>
                <li>Vakje &quot;Alta&quot; (aanmelding) aanvinken</li>
                <li>
                  Persona jurídica → <em>Entidad extranjera con personalidad
                  jurídica</em>
                </li>
                <li>
                  Código país: <strong>NL</strong>
                </li>
                <li>Domicilio fiscal: het Nederlandse adres</li>
                <li>
                  Representante (apoderado): de gevolmachtigde met NIE
                </li>
                <li>
                  Clave 332 (Voluntaria) aanvinken — vertegenwoordiging is op
                  vrijwillige basis, niet wettelijk
                </li>
              </UL>
            </Step>
            <Step number={2} title="Online indienen">
              <P>
                De gestor logt in op de sede electrónica van de AEAT met zijn
                eigen certificaat en dient namens jou in. Je krijgt een{" "}
                <em>número de asiento registral</em> (registreer&shy;nummer) —
                bewaar dit goed.
              </P>
            </Step>
            <Step number={3} title="Documentación adicional aanleveren">
              <P>
                Binnen 10 dagen na indiening moet je alle bijlagen uploaden via{" "}
                <em>Aportar documentación complementaria</em>. Wij stuurden 11
                bestanden: NL oprichtingsakte + ES-vertaling, volmacht +
                ES-vertaling + apostille, KvK-uittreksel, UBO-uittreksels van de
                holding en de B.V. zelf, NIE-kopie, mandato.
              </P>
            </Step>
            <Step number={4} title="Wachten op de definitieve NIF">
              <P>
                De AEAT bevestigt eerst de ontvangst (binnen 24 uur). Daarna
                duurt de toekenning van een <strong>provisionele CIF</strong>{" "}
                doorgaans 2–4 weken. De definitieve CIF volgt na controle, soms
                2–3 maanden later. In ons koopcontract stond al een
                provisionele CIF — dat is hoe gebruikelijk dit is.
              </P>
            </Step>
          </div>
        </Section>

        <Section>
          <H2>Wat het kost</H2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary/50 text-navy">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Onderdeel</th>
                  <th className="px-6 py-4 text-right font-medium">
                    Richtprijs
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                <tr>
                  <td className="px-6 py-4">
                    Honorarium gestor voor Modelo 036
                  </td>
                  <td className="px-6 py-4 text-right">€ 250 – € 500</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    Notariële volmacht in Nederland
                  </td>
                  <td className="px-6 py-4 text-right">€ 350 – € 600</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Apostille (rechtbank)</td>
                  <td className="px-6 py-4 text-right">€ 25 – € 50</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    Beëdigde vertalingen NL → ES (volledige set)
                  </td>
                  <td className="px-6 py-4 text-right">€ 600 – € 1.200</td>
                </tr>
                <tr className="bg-navy/5 font-medium text-navy">
                  <td className="px-6 py-4">Totaal</td>
                  <td className="px-6 py-4 text-right">€ 1.500 – € 2.500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            Reken op een bandbreedte van €1.500–€2.500 voor het hele
            Modelo-036-traject, exclusief eigen tijd.
          </P>
        </Section>

        <Section>
          <H2>Doorlooptijd: 6 tot 10 weken</H2>
          <P>
            Het is geen kwestie van &quot;morgen indienen, volgende week
            klaar&quot;. Realistisch tijdpad:
          </P>
          <UL>
            <li>Week 1–2: notariële volmacht in Nederland regelen + ondertekenen</li>
            <li>Week 2–3: apostille bij de rechtbank</li>
            <li>
              Week 3–4: beëdigde vertalingen (een traductor jurado heeft 1–2
              weken nodig)
            </li>
            <li>Week 4: indienen Modelo 036 + bijlagen</li>
            <li>Week 5–8: toekenning provisionele CIF</li>
            <li>
              Week 8–12: definitieve CIF (vaak parallel aan de koopactiviteit)
            </li>
          </UL>
          <Callout>
            <p>
              <strong>Vuistregel:</strong> begin met de Modelo 036 minstens 8
              weken vóórdat je een betaling vanuit je B.V. naar Spanje wil doen.
              Veel kopers starten dit traject pas ná het tekenen van een Spaans
              contract — en lopen dan vast op de betaaldeadlines.
            </p>
          </Callout>
        </Section>

        <Section>
          <H2>Zes valkuilen die je wil vermijden</H2>
          <OL>
            <li>
              <strong>
                Vertalingen door een niet-beëdigde vertaler
              </strong>{" "}
              — gewoon weigeren door de AEAT. Altijd traductor jurado.
            </li>
            <li>
              <strong>Apostille vergeten</strong> — Spanje accepteert
              Nederlandse akten alleen met apostille. Hou rekening met 1–2 weken
              extra.
            </li>
            <li>
              <strong>
                NIE van de gevolmachtigde niet eerst regelen
              </strong>{" "}
              — je hebt een geldige NIE nodig om als apoderado in te dienen.
              Heeft de gevolmachtigde nog geen NIE? Stop, doe eerst de NIE.
            </li>
            <li>
              <strong>
                Per ongeluk aanvinken dat het wél een vaste inrichting betreft
              </strong>{" "}
              — als je dat vakje aanvinkt denkt de AEAT dat je een{" "}
              <em>establecimiento permanente</em> in Spanje hebt en moet je in
              Spanje vennootschapsbelasting gaan betalen. Verandert de hele
              fiscale structuur.
            </li>
            <li>
              <strong>Niet alle UBO&apos;s vermelden</strong> — Nederlandse
              B.V.&apos;s moeten ook in de Modelo 036 hun titulares reales
              opgeven (pagina 10). Vergeten = vertraging.
            </li>
            <li>
              <strong>Mandato de representación vergeten</strong> — als je via
              een gestor indient, moet er een mandato zijn dat de gestor
              machtigt om namens jouw B.V. op te treden bij de AEAT.
            </li>
          </OL>
        </Section>

        <Section>
          <H2>Wat er na de bevestiging gebeurt</H2>
          <P>Zodra je provisionele CIF binnen is:</P>
          <UL>
            <li>Een Spaanse bankrekening openen wordt mogelijk</li>
            <li>De notaris kan een escritura voor jouw B.V. opstellen</li>
            <li>Spaanse leveranciers en promotores kunnen je factureren</li>
            <li>
              Je kunt je aanmelden voor de Modelo 720 (verplichte aangifte van
              buitenlands vermogen) als je een vaste inrichting in Spanje krijgt
            </li>
          </UL>
          <P>
            De definitieve CIF (na 2–3 maanden) heeft dezelfde rechten als de
            provisionele — niet harder werken aan die overgang.
          </P>
        </Section>

        <Section>
          <H2>Hulp nodig?</H2>
          <P>
            Wij hebben dit traject begin 2026 zelf doorlopen voor onze
            Nederlandse B.V. — opgericht in september 2025, met Spaanse CIF
            binnen voor mei 2026. Als je hetzelfde traject staat te lopen en de
            papierwinkel niet zelf wil uitzoeken, helpt onze{" "}
            <Link
              href="/diensten#papierwinkel"
              className="text-terracotta hover:underline"
            >
              papierwinkel-dienst
            </Link>{" "}
            je er doorheen — vaste prijs, vooraf afgesproken, geen verrassingen.
          </P>
        </Section>

        <div className="mt-16 rounded-3xl border border-olive/40 bg-olive/5 p-8 text-center">
          <h3 className="font-heading text-2xl text-navy">
            Hetzelfde traject voor je B.V., zonder zelf de papierwinkel uit te
            zoeken
          </h3>
          <p className="mt-3 text-foreground/80">
            Vanaf €350 per traject regelen wij NIE, CIF, bankrekening en Modelo
            036 voor je. Eén Nederlands aanspreekpunt voor het hele proces.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/diensten#papierwinkel"
              className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90"
            >
              Bekijk de papierwinkel-dienst
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-terracotta"
            >
              Of plan een gesprek
            </Link>
          </div>
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
  return (
    <ul className="mt-4 space-y-2 text-foreground/85">
      {children}
    </ul>
  );
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

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-[80px_1fr]">
      <p className="font-heading text-4xl text-terracotta">{`0${number}`}</p>
      <div>
        <p className="font-heading text-xl text-navy">{title}</p>
        <div className="mt-2 [&_p:first-child]:mt-0">{children}</div>
      </div>
    </div>
  );
}
