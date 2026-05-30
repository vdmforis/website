import type { Metadata } from "next";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";

const publishDate = "2026-05-30";
const updatedDate = "2026-05-30";
const readingTime = "11 min";
const title = "NIE aanvragen in Spanje — stappenplan 2026";
const description =
  "Complete eerstehandsgids voor het aanvragen van een NIE als Nederlander: via het Consulaat-Generaal in Amsterdam of ter plaatse in Spanje. Documenten, kosten (€9,84), doorlooptijd, het EX-15-formulier, Modelo 790 codigo 012, en de zeven valkuilen die mensen vaak maken.";

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
    canonical: "https://vdmforis.com/artikelen/nie-aanvragen-spanje-stappenplan",
  },
};

export default function NieAanvragenArticle() {
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
      "https://vdmforis.com/artikelen/nie-aanvragen-spanje-stappenplan",
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
            De NIE-aanvraag is voor de meeste Nederlanders de eerste echte stap in
            het Spaanse traject — en meteen de eerste die vaak fout of te laat
            gaat. Begin je te vroeg, dan is het overzichtelijk. Wacht je tot je
            een huis op het oog hebt, dan zit je weken vast omdat alles erna —
            bankrekening, contract, modelo 036 — eerst je NIE nodig heeft.
          </Lead>
        </Section>

        <Section>
          <H2>Wat is een NIE — kort uitgelegd</H2>
          <P>
            De NIE (<em>Número de Identidad de Extranjero</em>) is jouw persoonlijke
            fiscaal- en identificatienummer in Spanje als buitenlander. Het bestaat
            uit een letter (X, Y of Z), zeven cijfers, en een controleletter. Bijvoorbeeld:
            Y1234567A.
          </P>
          <P>Wat je ermee kunt:</P>
          <UL>
            <li>Een Spaanse bankrekening openen</li>
            <li>Een koopovereenkomst tekenen</li>
            <li>Een huurcontract afsluiten</li>
            <li>Je inschrijven voor nutsvoorzieningen (water, elektriciteit, gas, internet)</li>
            <li>Een auto of motor op je naam zetten</li>
            <li>Inkomstenbelastingaangifte doen (Modelo 100 of 210)</li>
            <li>Je inschrijven bij de Spaanse Sociale Zekerheid als je gaat werken</li>
          </UL>
          <P>
            Eenmaal toegekend is je NIE <strong>levenslang geldig</strong>. Hij
            staat niet op je paspoort en hoeft niet vernieuwd te worden — het is
            één keer aanvragen, voor altijd houden.
          </P>
        </Section>

        <Section>
          <H2>Wanneer heb je het echt nodig?</H2>
          <P>
            Bij elke serieuze juridische of financiële handeling in Spanje vraagt
            iemand om je NIE. Concrete momenten waarop je het écht niet meer kunt
            uitstellen:
          </P>
          <UL>
            <li>
              Je gaat een <strong>reserveringscontract</strong> tekenen bij een
              nieuwbouwproject — de meeste ontwikkelaars vragen er al om
            </li>
            <li>
              Je opent een <strong>Spaanse bankrekening</strong> als particulier of
              voor je B.V. — verplicht voorafgaand identiteitsvereiste
            </li>
            <li>
              Je gaat <strong>nutsvoorzieningen activeren</strong> bij een nieuw
              gehuurd of gekocht huis
            </li>
            <li>
              Je gaat een <strong>auto of scooter aanschaffen</strong> — DGT
              accepteert geen registratie zonder NIE
            </li>
          </UL>
          <Callout>
            <p>
              <strong>Vuistregel:</strong> als je in de komende 12 maanden
              überhaupt iets ondernemend wil doen in Spanje, vraag je NIE nu aan.
              De aanvraag is kosteloos en gemakkelijk, en het bespaart je later
              wachttijd op precies het moment dat je &apos;m nodig hebt.
            </p>
          </Callout>
        </Section>

        <Section>
          <H2>Twee routes: Nederland of Spanje?</H2>
          <P>Je kunt je NIE op twee manieren aanvragen:</P>
          <OL>
            <li>
              <strong>Bij de Spaanse Ambassade of een Spaans Consulaat in
              Nederland</strong> — Den Haag of Amsterdam
            </li>
            <li>
              <strong>Ter plaatse in Spanje</strong> — bij een{" "}
              <em>Oficina de Extranjería</em> of een{" "}
              <em>Comisaría de Policía Nacional</em>
            </li>
          </OL>
          <P>
            Beide leiden naar exact hetzelfde NIE-nummer en zijn juridisch
            gelijkwaardig. Welke route je kiest hangt af van waar je je bevindt
            en hoe snel je het nodig hebt.
          </P>
        </Section>

        <Section>
          <H2>Route 1: NIE aanvragen vanuit Nederland</H2>
          <P>
            Dit is de meest gebruikte route voor Nederlanders die zich oriënteren
            of een tweede huis willen kopen.
          </P>

          <Step number={1} title="Afspraak maken bij het Consulaat-Generaal in Amsterdam">
            <P>
              <strong>Belangrijk om te weten</strong>: in Den Haag zit alleen de{" "}
              <em>Embajada de España</em> (Ambassade), zonder consulaire sectie.
              Alle consulaire zaken voor heel Nederland — inclusief NIE — lopen via
              het{" "}
              <a
                href="https://www.exteriores.gob.es/Consulados/amsterdam/es/Paginas/index.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta hover:underline"
              >
                Consulado General de España in Amsterdam
              </a>
              .
            </P>
            <P>
              Maak via hun website online een afspraak voor de aanvraag van een NIE
              — kies de optie &quot;NIE para no residentes&quot; of vergelijkbaar.
              Reken op een wachttijd van <strong>2–8 weken</strong> tot de
              eerstvolgende beschikbare afspraak, afhankelijk van het seizoen. In
              de zomermaanden is de drukte hoger.
            </P>
          </Step>

          <Step number={2} title="EX-15 formulier invullen">
            <P>
              Het officiële EX-15-formulier wordt beheerd door de Spaanse{" "}
              <em>Policía Nacional</em>. Vind het via de{" "}
              <a
                href="https://sede.policia.gob.es/portalCiudadano/_es/tramites_extranjeria_tramite_asignacion_nie.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta hover:underline"
              >
                Sede Electrónica van de Policía Nacional
              </a>{" "}
              (procedure: <em>Asignación de NIE</em>). Het formulier
              is in het Spaans, maar grotendeels in te vullen met basisgegevens.
              Belangrijke velden:
            </P>
            <UL>
              <li>
                <strong>Datos personales</strong> — voornaam, achternaam,
                geboorteplaats, geboortedatum, nationaliteit
              </li>
              <li>
                <strong>Domicilio en España</strong> — laat leeg als je nog geen
                adres hebt; vul anders het hotel- of vakantieadres in waar je
                verblijft
              </li>
              <li>
                <strong>Domicilio en el país de origen</strong> — je Nederlandse
                adres
              </li>
              <li>
                <strong>Motivos de la solicitud</strong> — kies de juiste reden:
                vrijwel altijd <em>económicos</em> (economisch — voor vastgoed) of{" "}
                <em>profesionales</em> (zakelijk)
              </li>
            </UL>
          </Step>

          <Step number={3} title="Motivatiebrief opstellen">
            <P>
              De NIE-aanvraag heeft een onderbouwing nodig. Dat hoeft geen lang
              verhaal te zijn — een korte verklaring in het Spaans waarom je het
              nummer aanvraagt is voldoende. Een veelgebruikte tekst voor
              vastgoedkopers:
            </P>
            <Callout>
              <p style={{ fontStyle: "italic" }}>
                &quot;Solicito el Número de Identidad de Extranjero (NIE) con el
                fin de poder realizar trámites económicos en España relacionados
                con la compra de un inmueble en la Comunitat Valenciana, incluida
                la apertura de una cuenta bancaria, la firma del contrato de
                compraventa, y la formalización de los servicios públicos
                correspondientes.&quot;
              </p>
            </Callout>
            <P>
              Schrijf je naam, datum en handtekening eronder. Een Nederlandse
              vertaling hoeft niet — Spaans volstaat.
            </P>
          </Step>

          <Step number={4} title="Modelo 790 codigo 012 betalen">
            <P>
              De officiële tasa voor NIE-toekenning bedraagt <strong>€9,84</strong>{" "}
              (Modelo 790, codigo 012). Je kunt het formulier digitaal aanmaken via
              de{" "}
              <a
                href="https://sede.policia.gob.es/Tasa790_012/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta hover:underline"
              >
                Sede van de Policía Nacional
              </a>
              .
            </P>
            <P>
              Vul het formulier digitaal in, print het, en betaal de tasa bij een
              Spaanse <em>entidad colaboradora</em> (CaixaBank, BBVA, Santander,
              Sabadell, Ibercaja, Bankinter of Unicaja). Je krijgt een gestempeld
              afschrift terug — dat moet je meenemen naar je afspraak.
            </P>
            <P>
              Voor Nederlandse aanvragers: ga je via het Consulaat-Generaal in
              Amsterdam, dan betaal je de leges meestal bij het consulaat zelf, in
              plaats van via Modelo 790. Vraag bij de afspraakbevestiging om welke
              bedragen het exact gaat — die wisselen periodiek.
            </P>
          </Step>

          <Step number={5} title="Documenten meenemen naar de afspraak">
            <P>Wat je meeneemt naar het consulaat:</P>
            <UL>
              <li>Geldig paspoort (origineel + kopie van de info-pagina)</li>
              <li>
                Twee pasfoto&apos;s in <strong>Spaans formaat 32 × 26 mm</strong>{" "}
                (níet het Nederlandse 35 × 45 mm), witte achtergrond, recent
              </li>
              <li>Ingevulde EX-15 (2 exemplaren)</li>
              <li>Ondertekende motivatiebrief in het Spaans</li>
              <li>Betaalbewijs leges</li>
            </UL>
            <Callout>
              <p>
                <strong>Pasfoto-valkuil:</strong> de Spaanse standaard 32 × 26 mm
                wijkt af van het Nederlandse internationale formaat (35 × 45 mm).
                Een Nederlandse fotograaf weet dit vaak niet. Vraag expliciet om{" "}
                <em>&quot;foto carnet español DNI&quot;</em> of laat ze in Spanje
                maken bij een fotomaton.
              </p>
            </Callout>
          </Step>

          <Step number={6} title="Wachten op uitslag">
            <P>
              De wettelijke termijn is <strong>5 werkdagen</strong> na registratie
              door de bevoegde instantie. In de praktijk via een consulaat in
              Nederland reken op <strong>2–6 weken</strong> tot je NIE wordt
              afgegeven — afhankelijk van seizoen en drukte. Het consulaat belt
              je of stuurt een e-mail zodra het document klaar is. Je ontvangt
              een <em>Resguardo de NIE</em> — een papieren attest met je nummer
              erop. Bewaar het goed.
            </P>
          </Step>
        </Section>

        <Section>
          <H2>Route 2: NIE aanvragen ter plaatse in Spanje</H2>
          <P>
            Als je al in Spanje bent (op vakantie, een bezichtigingsreis of als
            tijdelijke bewoner), kun je je NIE ook ter plaatse aanvragen. Vaak
            sneller dan via Nederland, maar wel met een paar valkuilen.
          </P>

          <Step number={1} title="Cita previa boeken via sede.administracionespublicas.gob.es">
            <P>
              Ga naar{" "}
              <a
                href="https://sede.administracionespublicas.gob.es/icpplustiem/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta hover:underline"
              >
                sede.administracionespublicas.gob.es
              </a>{" "}
              en boek een <em>cita previa</em> (afspraak) bij de provincie waar je
              verblijft. Kies de categorie &quot;Asignación de NIE&quot;.
            </P>
            <Callout>
              <p>
                <strong>De grote valkuil:</strong> In drukke regio&apos;s
                (Alicante, Málaga, Valencia kuststrook) zijn er vaak weken of
                maanden geen afspraken beschikbaar. Het systeem laat dan
                &quot;Geen afspraken&quot; zien. Probeer dagelijks om 9:00 — er
                komen dan nieuwe slots vrij. Of probeer een minder drukke
                provincie (Castellón en Tarragona zijn vaak realistischer dan
                Alicante).
              </p>
            </Callout>
          </Step>

          <Step number={2} title="EX-15 + Modelo 790 codigo 012 voorbereiden">
            <P>
              Vul thuis al de EX-15 en Modelo 790 in (zie route 1). Print beide
              voor je naar de afspraak gaat. Betaal de tasa van circa €10 bij een
              Spaanse bank tot 1 week voor je afspraak.
            </P>
          </Step>

          <Step number={3} title="Afspraak bezoeken">
            <P>
              Verschijn op je afspraak — meestal bij een{" "}
              <em>Comisaría de Policía Nacional</em> of een{" "}
              <em>Oficina de Extranjería</em>. Wees op tijd (15 minuten van
              tevoren). Wat je meeneemt:
            </P>
            <UL>
              <li>Paspoort (origineel + kopie)</li>
              <li>Ingevulde EX-15</li>
              <li>Betaalbewijs Modelo 790 codigo 012</li>
              <li>Motivatie (kan ook mondeling worden uitgelegd)</li>
              <li>
                Soms gevraagd: kopie van een huurcontract, hotelreservering of
                koopovereenkomst om je verblijfsreden te onderbouwen
              </li>
            </UL>
          </Step>

          <Step number={4} title="NIE-pasje ontvangen">
            <P>
              De wettelijke termijn is <strong>5 werkdagen</strong> vanaf
              registratie. In drukke kuststreken (Costa Blanca, Mallorca) reken op{" "}
              <strong>1–3 weken</strong>. Soms krijg je het ter plekke — afhankelijk
              van de afhandelingssnelheid van de comisaría. Je krijgt het op een
              papieren <em>Resguardo</em> met je nummer; geen plastic kaart.
            </P>
          </Step>
        </Section>

        <Section>
          <H2>Welke route past bij wie?</H2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary/50 text-navy">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Situatie</th>
                  <th className="px-4 py-3 text-left font-medium">Beste route</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                <tr>
                  <td className="px-4 py-3">Vroeg in oriëntatie, geen reisplan</td>
                  <td className="px-4 py-3">Consulaat NL — rustig regelen</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Plan binnenkort bezichtigingsreis</td>
                  <td className="px-4 py-3">Tijdens reis ter plaatse</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Heb al een huis op het oog</td>
                  <td className="px-4 py-3">Sneller pad: in Spanje</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Wil het alleen voor &quot;voor de zekerheid&quot;</td>
                  <td className="px-4 py-3">Consulaat NL — kost niets om alvast te doen</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Geen tijd om weken te wachten</td>
                  <td className="px-4 py-3">Spanje, mits afspraak beschikbaar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section>
          <H2>Hoeveel kost het echt?</H2>
          <P>
            De officiële tasa is <strong>€9,84</strong> (Modelo 790 codigo 012,
            specifiek voor NIE-toekenning). Daarbovenop alleen jouw eigen reis-
            en tijdskosten:
          </P>
          <UL>
            <li>
              Reis naar Amsterdam (Consulaat-Generaal — ~€10–€30 OV vanuit Nederland)
            </li>
            <li>
              Pasfoto&apos;s in Spaans formaat (€7–€10 bij een fotograaf — vraag om
              DNI-formaat 32 × 26 mm)
            </li>
            <li>
              Bankkosten internationaal indien je in Spanje moet betalen (€5–€20)
            </li>
            <li>
              Eventuele gestor-bijstand (optioneel) — €100–€200 als je het hele
              traject wil uitbesteden
            </li>
          </UL>
          <P>
            Reken op een totale uitgave van <strong>€20–€50</strong> als je het
            zelf doet, of <strong>€150–€300</strong> als je een gestor inschakelt
            voor de hele coördinatie.
          </P>
        </Section>

        <Section>
          <H2>Zeven valkuilen om te vermijden</H2>
          <OL>
            <li>
              <strong>EX-15 verwarren met EX-18.</strong> EX-18 is het{" "}
              <em>Certificado de Registro de Ciudadano de la Unión</em> — voor
              EU-burgers die zich vestigen als resident. EX-15 is voor de
              NIE-toekenning als niet-resident. Voor de meeste tweede-huis-kopers:
              altijd EX-15.
            </li>
            <li>
              <strong>Motivatie te kort houden.</strong> &quot;Voor een huis
              kopen&quot; is te vaag. Wees specifiek: regio, type woning, doel
              (eigen gebruik / investering).
            </li>
            <li>
              <strong>Verlopen paspoort.</strong> Je paspoort moet minimaal nog 6
              maanden geldig zijn op de afspraakdatum. Check dat van tevoren.
            </li>
            <li>
              <strong>Te vroeg een afspraak boeken in Spanje.</strong> Sommige
              consulaten/comisaría&apos;s eisen dat je binnen 30 dagen na boeking
              komt. Boek pas als je reisdatum vaststaat.
            </li>
            <li>
              <strong>De tasa contant proberen te betalen.</strong> Modelo 790
              codigo 012 moet via een Spaanse bank betaald worden, niet contant
              bij het loket.
            </li>
            <li>
              <strong>Aannemen dat je NIE pasje krijgt.</strong> Je krijgt een
              papieren <em>Resguardo</em>, geen plastic ID. Bewaar het in een
              folder thuis en maak digitale scans direct.
            </li>
            <li>
              <strong>Hoofd letter verwarren.</strong> NIE begint altijd met X,
              Y of Z. Sommige systemen vragen of het een Spaanse DNI is — dan
              niet bevestigen, kies de optie &quot;NIE&quot;.
            </li>
          </OL>
        </Section>

        <Section>
          <H2>Wat doe je nadat je hem hebt?</H2>
          <P>Onmiddellijk na ontvangst van je NIE:</P>
          <UL>
            <li>
              Scan de <em>Resguardo</em> in en bewaar digitaal op meerdere
              plekken (Drive, e-mail aan jezelf, lokaal)
            </li>
            <li>
              Bewaar het origineel zorgvuldig in je &quot;Spanje-mapje&quot; thuis
            </li>
            <li>
              Voeg het toe aan je belangrijkste documenten — je hebt het bij
              vrijwel elke Spaanse stap nodig
            </li>
            <li>
              Indien van toepassing: dien direct je{" "}
              <Link
                href="/artikelen/modelo-036-nederlandse-bv"
                className="text-terracotta hover:underline"
              >
                Modelo 036
              </Link>{" "}
              in voor je B.V. — die heeft je NIE als gevolmachtigde nodig
            </li>
            <li>
              Open je Spaanse bankrekening (je NIE plus paspoort plus verblijfsbewijs
              volstaat meestal)
            </li>
          </UL>
        </Section>

        <Section>
          <H2>Tot slot</H2>
          <P>
            De NIE-aanvraag is technisch eenvoudig — een formulier, een tasa, en
            wat geduld. Het probleem zit niet in de complexiteit maar in de
            timing: mensen vragen het te laat aan en raken vervolgens vast op
            elke volgende stap (bank, contract, modelo 036).
          </P>
          <P>
            Onze eerlijke aanbeveling: vraag je NIE aan zodra je serieus over een
            Spaans huis nadenkt — niet pas als je er één hebt gevonden. Het is
            een eenmalige administratieve stap met levenslange geldigheid. Geen
            risico, alleen voorsprong.
          </P>
        </Section>

        <div className="mt-16 rounded-3xl border border-olive/40 bg-olive/5 p-8 text-center">
          <h3 className="font-heading text-2xl text-navy">
            Wil je dat we de NIE-aanvraag voor je begeleiden?
          </h3>
          <p className="mt-3 text-foreground/80">
            Onze papierwinkel-dienst regelt NIE, bankrekening, modelo 036 en
            vertalingen — vaste prijs vooraf, één Nederlandstalig aanspreekpunt.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/diensten#papierwinkel"
              className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90"
            >
              Bekijk de papierwinkel-dienst
            </Link>
            <BookCallButton className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-terracotta">
              Of plan een gesprek
            </BookCallButton>
          </div>
        </div>

        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
            Lees ook
          </p>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <Link
              href="/artikelen/modelo-036-nederlandse-bv"
              className="block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-terracotta/60"
            >
              <p className="font-heading text-lg text-navy">
                Modelo 036 voor Nederlandse B.V.&apos;s
              </p>
              <p className="mt-2 text-sm text-foreground/75">
                Stap-voor-stap gids voor het aanvragen van een Spaanse CIF voor
                je Nederlandse B.V.
              </p>
            </Link>
            <Link
              href="/artikelen/nieuwbouw-of-bestaande-bouw-spanje"
              className="block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-terracotta/60"
            >
              <p className="font-heading text-lg text-navy">
                Nieuwbouw of bestaande bouw?
              </p>
              <p className="mt-2 text-sm text-foreground/75">
                Eerlijke vergelijking met belastingen, garanties en een
                vijf-vragen-checklist.
              </p>
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
    <div className="mt-6 grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-[80px_1fr]">
      <p className="font-heading text-4xl text-terracotta">{`0${number}`}</p>
      <div>
        <p className="font-heading text-xl text-navy">{title}</p>
        <div className="mt-2 [&_p:first-child]:mt-0">{children}</div>
      </div>
    </div>
  );
}
