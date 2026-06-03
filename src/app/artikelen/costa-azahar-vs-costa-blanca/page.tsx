import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";
import { GidsCallout } from "@/components/GidsCallout";

const publishDate = "2026-06-03";
const updatedDate = "2026-06-03";
const readingTime = "12 min";
const title =
  "Costa del Azahar vs Costa Blanca — welke past bij jou?";
const description =
  "Eerlijke vergelijking tussen de Costa del Azahar (Castellón) en de Costa Blanca (Alicante) voor Nederlandse huizenkopers. Prijzen per m², drukte, vliegverbindingen, klimaat, regelgeving en voor wie welke kuststrook past — geschreven vanuit drie jaar wonen aan de Azahar.";

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
    canonical: "https://vdmforis.com/artikelen/costa-azahar-vs-costa-blanca",
  },
};

export default function CostaAzaharVsCostaBlancaArticle() {
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
      "https://vdmforis.com/artikelen/costa-azahar-vs-costa-blanca",
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
          src="/images/IMG_9688.jpg"
          alt="Spaanse kustweg met palmenboulevard en uitzicht op de Middellandse Zee"
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
            <time dateTime={publishDate}>3 juni 2026</time>
            <span>·</span>
            <span>{readingTime} lezen</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <Section>
          <Lead>
            Vraag een Nederlander naar &ldquo;de Spaanse kust&rdquo; en je hoort
            in 80% van de gevallen Benidorm, Calpe of Torrevieja — allemaal Costa
            Blanca. De Costa del Azahar (provincie Castellón, net boven Valencia)
            is voor de meeste Nederlanders een blinde vlek. Onterecht: het is
            een aparte kuststrook, in een aparte provincie, met ander prijsniveau,
            andere demografie en een andere reden om er te wonen. Dit artikel
            zet beide naast elkaar zoals iemand die op de Azahar woont en de
            Blanca regelmatig bezoekt het zou doen.
          </Lead>
          <GidsCallout variant="inline" />
        </Section>

        <Section>
          <H2>Eerst even: het zijn écht twee verschillende kuststroken</H2>
          <P>
            Een misverstand dat we vaak tegenkomen: dat de Azahar en Blanca aan
            elkaar grenzen. Dat is niet zo. Tussen beide ligt ~110 km{" "}
            <strong>Costa de Valencia</strong> — de kust van de provincie
            Valencia, met Sagunto, Valencia stad, Cullera, Gandía en Oliva. De
            Costa del Azahar eindigt bij Almenara (zuidpunt provincie
            Castellón), en de Costa Blanca begint pas in Dénia (noordpunt
            provincie Alicante).
          </P>
          <P>
            <strong>Costa del Azahar</strong> loopt grofweg van Vinaròs (grens
            Catalonië) tot Almenara en is ongeveer 120–130 km lang. De belangrijke
            kustplaatsen zijn Vinaròs, Benicarló, Peñíscola, Alcossebre, Oropesa
            del Mar, Benicàssim, Grau de Castelló, Almassora, Burriana, Nules,
            Moncofa en Almenara.
          </P>
          <P>
            <strong>Costa Blanca</strong> loopt van Dénia tot Pilar de la
            Horadada en is met 200–244 km bijna dubbel zo lang. De bekende namen
            voor Nederlanders: Dénia, Jávea (Xàbia), Moraira, Calpe, Altea,
            Benidorm, Villajoyosa, El Campello, Alicante stad, Santa Pola,
            Guardamar, Torrevieja en Orihuela Costa.
          </P>
          <Callout>
            <strong>Belangrijk voor de papierwinkel:</strong> beide kuststroken
            liggen in dezelfde autonome regio — Comunitat Valenciana. Regionale
            belastingen (ITP, AJD) en regionale wetten over vivienda turística
            zijn dus identiek. Gemeentelijke regels (zoals IBI of beperkingen op
            toeristische verhuur) verschillen wél per plaats, maar dat staat los
            van &ldquo;welke costa&rdquo;.
          </Callout>
        </Section>

        <Section>
          <H2>Het grootste verschil: prijs per m²</H2>
          <P>
            Op vergelijkbare kwaliteit aan zee betaal je op de Costa del Azahar
            grofweg <strong>30–50% minder</strong> dan op de Costa Blanca-noord.
            Hieronder de cijfers per gemeente uit Idealista&apos;s tweede kwartaal
            van 2026 — gepubliceerde vraagprijzen, dus de gerealiseerde prijzen
            liggen meestal iets lager.
          </P>
          <H3>Costa Blanca — premium top</H3>
          <UL>
            <li>
              <strong>Moraira (Teulada)</strong>: €3.566–4.497 / m² — duurste
              gemeente van de hele provincie
            </li>
            <li>
              <strong>Jávea / Xàbia</strong>: €3.958 / m² (+19,8% jaar op jaar)
            </li>
            <li>
              <strong>Calpe</strong>: €3.438 / m²
            </li>
            <li>
              <strong>Altea</strong>: €3.415 / m²
            </li>
            <li>
              <strong>Benidorm</strong>: €3.246 / m² (+15% jaar op jaar)
            </li>
            <li>
              <strong>Dénia</strong>: €3.217 / m² (+14% jaar op jaar)
            </li>
          </UL>
          <H3>Costa Blanca — middensegment</H3>
          <UL>
            <li>
              <strong>Alicante stad</strong>: €2.549–2.811 / m² — nieuw record
              april 2026
            </li>
            <li>
              <strong>Torrevieja</strong>: €2.502 / m²
            </li>
            <li>
              <strong>Orihuela Costa</strong>: €2.500–3.000 / m² (gemeente
              gemiddelde 2.847 / m², kustdelen hoger)
            </li>
          </UL>
          <H3>Costa del Azahar</H3>
          <UL>
            <li>
              <strong>Benicàssim</strong>: €2.708–2.744 / m² — duurste van de
              provincie Castellón
            </li>
            <li>
              <strong>Peñíscola</strong>: €2.171 / m² (+13,8% jaar op jaar)
            </li>
            <li>
              <strong>Oropesa del Mar</strong>: €1.957 / m²
            </li>
            <li>
              <strong>Castelló de la Plana (stad + Grau)</strong>: €1.326–1.666
              / m² afhankelijk van wijk
            </li>
            <li>
              <strong>Vinaròs / Benicarló</strong>: ~€1.300–1.700 / m²
            </li>
            <li>
              <strong>Burriana</strong>: €1.109 / m² (+14,5% jaar op jaar)
            </li>
          </UL>
          <Callout>
            <strong>Concreet voorbeeld:</strong> een nieuwbouw chalet adosado van
            120 m² + 50 m² tuin in een goed deel van Benicàssim kost je ruwweg
            €330.000–360.000. Een vergelijkbaar huis in Calpe of Moraira kost
            €420.000–540.000. Bij een aankoop via een Nederlandse B.V. tikt dat
            verschil direct door in IVA (10%), de financieringsbehoefte en het
            jaarlijkse rendementspercentage.
          </Callout>
          <P>
            Belangrijk: prijs is niet alles. Wat je voor je geld krijgt verschilt
            ook. Op de Costa Blanca-noord betaal je meer voor de bewezen markt
            (sterke verhuur, stabiele waardestijging, brede vraag). Op de Costa
            del Azahar zit je in een markt die nog opkomt — pluspunt voor
            instapprijs, minpunt voor liquiditeit als je morgen wilt verkopen.
          </P>
        </Section>

        <Section>
          <H2>Bereikbaarheid vanuit Nederland</H2>
          <P>
            Dit is het verschil dat veel Nederlanders onderschatten — maar het is
            kleiner dan je zou denken. De Costa Blanca heeft een groot directe
            vliegveld; de Costa del Azahar profiteert van Valencia.
          </P>
          <H3>Alicante-Elche (ALC) — voor de Costa Blanca</H3>
          <UL>
            <li>
              <strong>19,9 miljoen passagiers in 2025</strong> (+8,5% jaar op
              jaar — record)
            </li>
            <li>
              Vanaf Amsterdam: <strong>~71 vluchten per week</strong> — Transavia
              23, KLM 2, plus Vueling en easyJet. Dagelijks, vaak meerdere keren
              per dag
            </li>
            <li>
              Rijtijden: Torrevieja 40 min, Benidorm 45 min, Calpe ~1u, Jávea
              ~1u15, Dénia ~1u20
            </li>
          </UL>
          <H3>Valencia (VLC) — voor de Costa del Azahar</H3>
          <UL>
            <li>
              ~9 miljoen passagiers in 2025 (+8,2% — recordjaar)
            </li>
            <li>
              Vanaf Amsterdam: <strong>KLM en Transavia dagelijks direct</strong>.
              Minder volume dan ALC, maar de daily-Holland-connectie staat
            </li>
            <li>
              Rijtijden: Castelló de la Plana ~50 min, Benicàssim ~58 min,
              Peñíscola ~1u26, Vinaròs ~1u45
            </li>
          </UL>
          <H3>Castellón-Costa Azahar (CDT)</H3>
          <UL>
            <li>
              Klein regionaal vliegveld met ~291.000 passagiers (jan–okt 2025)
            </li>
            <li>
              <strong>Geen directe vlucht uit Amsterdam.</strong> Alleen Ryanair
              op zomerlijnen Manchester, Stansted, Brussels-Charleroi, Berlijn,
              Düsseldorf-Weeze, Boedapest, Milaan, Bologna, Krakau en Porto
            </li>
            <li>
              25 min van Castellón stad, 30 min van Peñíscola, 45 min van
              Benicàssim. Handig voor Belgisch en Duits bezoek
            </li>
          </UL>
          <P>
            <strong>Wat dit praktisch betekent:</strong> voor Nederlanders is
            Valencia het primaire vliegveld voor de Azahar. Een uur rijden vanaf
            VLC naar Benicàssim is niet veel anders dan een uur rijden vanaf ALC
            naar Calpe. Wel meegenomen: vluchten naar ALC zijn vaak goedkoper
            door volume, en Castellón Airport vult de rest aan voor wie meer
            Europees vliegt dan Hollands.
          </P>
        </Section>

        <Section>
          <H2>Buitenlandse aanwezigheid en cultuur</H2>
          <P>
            Hier zit een verschil dat sommigen <em>het</em> argument vinden voor
            de ene kust en anderen voor de andere.
          </P>
          <H3>Costa Blanca — Noord-Europees gemaakt</H3>
          <P>
            Provincie Alicante telde in 2024{" "}
            <strong>464.601 buitenlanders</strong>, oftewel 23,3% van de
            bevolking — het hoogste percentage van heel Spanje. Per nationaliteit:
            70.786 Britten (verreweg de grootste groep), 17.777 Nederlanders en
            15.503 Duitsers. Het gevolg: hele wijken in Benidorm zijn Engelstalig,
            in Torrevieja vind je Nederlandse supermarkten en in de Albir-corridor
            staan signs in vier talen.
          </P>
          <P>
            Voor sommige kopers is dit precies waarom ze de Costa Blanca kiezen.
            Geen taalbarrière voor dagelijkse zaken, Nederlandse huisarts en
            tandarts vinden is mogelijk, vriendenkring opbouwen gaat gemakkelijk
            via expat-clubs en grote vieringen worden in Nederland-stijl gevierd.
          </P>
          <H3>Costa del Azahar — primair Spaans</H3>
          <P>
            Provincie Castellón heeft ook ~130.000 buitenlanders (zo&apos;n 20%
            van de bevolking), maar het profiel is totaal anders. De grootste
            groepen zijn Roemenen en Marokkanen, voornamelijk werkzaam in de
            tegel- en keramiekindustrie van het binnenland. Noord-Europese
            kustbewoners — Britten, Nederlanders, Duitsers — zijn er véél minder.
            In Castellón stad of Grau de Castelló merk je dat in de praktijk
            direct: bijna niemand spreekt thuis Engels of Nederlands.
          </P>
          <P>
            Voor sommige kopers is dit het hele punt. Geen expat-bubbel, geen
            Nederlandse Spar in de hoofdstraat, je leert binnen een jaar
            functioneel Spaans omdat je niet anders kan. Voor anderen is het een
            drempel: huisarts en gestor moet je in het Spaans of via een
            Nederlandse begeleider regelen, en sociaal opbouwen kost wat meer
            inspanning. Wij zien dat als pluspunt, maar dat is een persoonlijke
            voorkeur — geen objectief feit.
          </P>
          <H3>En toerisme?</H3>
          <P>
            De Costa Blanca had in jan–sep 2025 ruim 36 miljoen overnachtingen.
            De Costa del Azahar groeide weliswaar (de enige Valenciaanse provincie
            die in mei 2025 groei liet zien), maar zit in volstrekt andere orde
            van grootte. Op een julimiddag op het strand van Benicàssim staat
            niet hetzelfde aantal handdoeken als op het strand van Benidorm. Voor
            woongenot is dat een direct ervaarbare aanloop; voor pure
            verhuurinvestering een handicap.
          </P>
        </Section>

        <Section>
          <H2>Klimaat</H2>
          <P>
            Beide kuststroken hebben subtropisch mediterraan klimaat, maar er zit
            een meetbaar verschil.
          </P>
          <UL>
            <li>
              <strong>Alicante</strong>: ~2.953 zonuren per jaar, gemiddeld
              18,3°C, ~310 mm regen per jaar — een van de droogste regio&apos;s
              van Spanje
            </li>
            <li>
              <strong>Castelló (Benicàssim, Peñíscola)</strong>: ~2.700–2.800
              zonuren per jaar, gemiddeld 17,8°C, ~450 mm regen per jaar — meer
              regen, vooral in het najaar
            </li>
          </UL>
          <P>
            Het verschil voel je vooral in oktober–november: in Castellón valt
            soms ineens een &ldquo;gota fría&rdquo; — een intense regenbui die in
            een paar uur 100+ mm kan leveren. In de zomer is het verschil te
            verwaarlozen; beide zijn dan droog, heet en zonnig.
          </P>
        </Section>

        <Section>
          <H2>Infrastructuur: AVE, ziekenhuizen, scholen</H2>
          <H3>Hogesnelheidstrein (AVE)</H3>
          <UL>
            <li>
              <strong>Madrid → Alicante</strong>: 2u 20 min, directe AVE-lijn,
              hoge frequentie
            </li>
            <li>
              <strong>Madrid → Castelló de la Plana</strong>: 2u 50 min, AVE-rit
              die via Valencia gaat over gemengd spoor
            </li>
            <li>
              <strong>Valencia ↔ Alicante</strong>: nu 2u 15 min via gemengd
              spoor. De nieuwe AVE-as Castellón–Valencia–Alicante is gepland voor
              2027 — vanaf dan ~50 min Valencia–Alicante en geen overstap meer
              tussen de twee provincies
            </li>
          </UL>
          <P>
            Conclusie: voor wie regelmatig met de trein naar Madrid moet, zit
            Alicante iets sneller en frequenter. Castellón heeft directe AVE
            maar minder treinen per dag.
          </P>
          <H3>Zorg</H3>
          <P>
            De Costa Blanca heeft een sterk privé-zorgnetwerk: Quirónsalud
            Torrevieja, HLA Vistahermosa Alicante, en private klinieken in
            vrijwel elke grotere plaats. Engelstalige specialisten zijn er ruim
            voorhanden.
          </P>
          <P>
            Castellón heeft een sterk publiek aanbod (Hospital General
            Universitari, Hospital Provincial) plus Vithas Castellón voor
            privé. Voor zware specialistische zorg wijkt men vaak uit naar
            Valencia (~1u). Voor een gezond stel onder de 60 maakt dit weinig
            verschil; voor wie regelmatig specialistenzorg nodig heeft is
            Costa Blanca makkelijker.
          </P>
          <H3>Internationale scholen</H3>
          <P>
            Voor gezinnen met schoolgaande kinderen is dit een groot
            beslispunt. De Costa Blanca heeft 15+ internationale scholen
            verspreid van Dénia tot Orihuela — Engels en Duitstalig basis- en
            voortgezet onderwijs is normaal beschikbaar.
          </P>
          <P>
            De Costa del Azahar / provincie Castellón heeft er twee:{" "}
            <strong>British School of Vila-real</strong> (Britse curriculum,
            2–18 jaar) en de <strong>International English School of
            Castellón (IESC)</strong>, onderdeel van de Dukes Education-groep.
            Voldoende voor wie binnen Castellón blijft, maar geen ruime keuze.
          </P>
        </Section>

        <Section>
          <H2>Belastingen en regels — identiek voor beide</H2>
          <P>
            Omdat beide kuststroken in dezelfde autonome regio liggen (Comunitat
            Valenciana), gelden dezelfde regionale belastingen. Vanaf 1 juni
            2026 is het overdrachtsbelastingtarief (ITP) op bestaande bouw{" "}
            <strong>9%</strong> (was 10%). Boven €1 miljoen blijft het 11%.
            Eerste woning voor jongeren onder de 35 met inkomensvoorwaarden en
            woningprijs ≤ €180.000: 6%. Voor grote gezinnen of mensen met een
            handicap ≥33% op eerste woning ≤ €180.000: 3%. De AJD (akte- en
            zegelheffing) op nieuwbouw daalde gelijktijdig van 1,5% naar 1,4%.
          </P>
          <P>
            <strong>Vivienda turística</strong> (toeristische verhuur) heeft een
            gelijk regionaal kader (Decreto 10/2021 + Decreto-ley 9/2024) en
            gebruikt dezelfde nummering — VT-XXXXXX-A voor Alicante,
            VT-XXXXXX-CS voor Castellón. Maar de <em>gemeentelijke</em>{" "}
            restricties verschillen sterk:
          </P>
          <UL>
            <li>
              <strong>Op de Costa Blanca</strong> hebben Benidorm, Calpe en
              Alicante stad zoneringen en moratoria die nieuwe vergunningen
              moeilijk maken
            </li>
            <li>
              <strong>Op de Costa del Azahar</strong> volgen Peñíscola en
              Benicàssim langzaam dezelfde lijn, maar Vinaròs, Oropesa, Burriana
              en de meeste andere gemeenten zijn nog relatief open
            </li>
          </UL>
          <P>
            Voor wie aankoopt met verhuur als doel: controleer altijd vóór de
            koop bij het ayuntamiento van de specifieke gemeente of nieuwe VUT-
            nummers nog worden afgegeven, ongeacht welke costa.
          </P>
        </Section>

        <Section>
          <H2>Type vastgoed en bouwstijl</H2>
          <P>
            <strong>Costa Blanca</strong>: zwaar urbanisatie-gericht. Veel
            hoogbouw appartementen aan de kustlijn (Benidorm is wereldwijd
            beroemd om z&apos;n skyline), golf-resort-villa&apos;s in het
            binnenland, gated communities rond Orihuela Costa, en honderden
            chalet adosado-projecten ontwikkeld voor de toeristische markt.
            Veel inventaris, makkelijk te vergelijken, transparante markt.
          </P>
          <P>
            <strong>Costa del Azahar</strong>: minder geconcentreerde
            ontwikkeling. Meer Spaanse chalets in stadsranden, lager-stedelijke
            kustlijn met paseo&apos;s (geen massa hoogbouw behalve in een paar
            wijken van Benicàssim). De nieuwbouwprojecten die er zijn — zoals
            Metrovacesa in Grau de Castelló of bij Sant Jordi — richten zich
            steeds vaker bewust op buitenlandse kopers, maar zijn niet
            jaarrond &ldquo;voor toeristen&rdquo; gebouwd. Minder inventaris
            dus minder keuze, maar ook minder concurrentie als jij koopt.
          </P>
        </Section>

        <Section>
          <H2>Strand en omgeving</H2>
          <P>
            Beide kuststroken hebben uitstekende stranden. Een objectieve
            maatstaf is het aantal Blauwe Vlaggen (FEE):
          </P>
          <UL>
            <li>
              <strong>Alicante 2026</strong>: 95 Blauwe Vlag-stranden — eerste
              plaats van heel Spanje
            </li>
            <li>
              <strong>Castellón 2026</strong>: 39 Blauwe Vlag-stranden — sterk
              voor een veel kleinere kustlijn
            </li>
          </UL>
          <P>
            Per kilometer kust scoort Castellón vergelijkbaar of beter. Wat
            verschilt is wat erachter ligt. Costa Blanca heeft veel rotsig
            achterland (Sierra Helada, Montgó), Costa del Azahar grenst aan het
            natuurpark Sierra de Irta en aan natte achterland-vlakte van Plana.
            Voor wandelaars en MTB&apos;ers heeft elke kust z&apos;n eigen
            karakter — geen overlap.
          </P>
        </Section>

        <Section>
          <H2>Voor wie de Costa Blanca logischer is</H2>
          <P>
            We zeggen niet: kies altijd Azahar. Costa Blanca past beter als één
            of meer van deze punten voor jou doorslaggevend is:
          </P>
          <UL>
            <li>
              Je wil <strong>binnen een Nederlandstalige gemeenschap</strong>{" "}
              wonen of pendelen, met Nederlandstalige zorg, vrienden en
              winkels in de buurt
            </li>
            <li>
              Je koopt voor <strong>pure verhuurinvestering</strong> en wil de
              maximaal bewezen toeristische vraag
            </li>
            <li>
              <strong>Directe goedkope vluchten</strong> vanuit Nederland zijn
              voor jou doorslaggevend — meerdere keren per dag van/naar
              Amsterdam vs één keer per dag via Valencia
            </li>
            <li>
              Je hebt <strong>schoolgaande kinderen</strong> waarvoor een
              internationale school nodig is, en je wil ruime keuze
            </li>
            <li>
              Je hebt <strong>terugkerend zware medische zorg</strong> nodig en
              wil Engelstalige specialisten dichtbij
            </li>
            <li>
              Je hebt al een netwerk op de Costa Blanca (familie, vrienden) en
              wil daar in de buurt zitten
            </li>
          </UL>
        </Section>

        <Section>
          <H2>Voor wie de Costa del Azahar logischer is</H2>
          <P>
            En andersom — Azahar past beter als één of meer van deze punten
            voor jou belangrijk zijn:
          </P>
          <UL>
            <li>
              Je wil <strong>30–50% lagere instapprijs</strong> voor
              vergelijkbare kwaliteit aan de Middellandse Zee
            </li>
            <li>
              Je zoekt <strong>authentiek Spaans wonen</strong>, niet binnen een
              Brit- of Nederlandse bubbel
            </li>
            <li>
              Je hecht aan een <strong>rustige, niet-toeristische kustlijn</strong>{" "}
              — geen drukke julimiddagen op het strand, geen kletsende paseo&apos;s
            </li>
            <li>
              Je vindt <strong>Spaans leren</strong> aantrekkelijk (en de
              omgeving dwingt het af)
            </li>
            <li>
              Je accepteert dat het <strong>vliegveld 1 uur rijden</strong>{" "}
              ligt — Valencia is bereikbaar, dagelijks vluchten uit Amsterdam,
              maar geen vlucht-op-elke-twee-uur situatie zoals Alicante
            </li>
            <li>
              Je wil een markt die nog <strong>opwaarts groeit</strong> — meer
              instaprendement, minder gerealiseerde liquiditeit
            </li>
          </UL>
        </Section>

        <Section>
          <H2>Eerlijke disclosure: waarom wij Azahar begeleiden</H2>
          <P>
            Wij wonen sinds juli 2023 in Grau de Castelló. We hebben hier ons
            eigen huis gekocht via onze B.V., kennen de gestores, notarissen en
            advocaten persoonlijk, en we weten welke wijken in welke gemeenten
            wel of niet kloppen. De Costa Blanca kennen we als bezoekers — we
            zijn er geweest, we hebben er familie en vrienden, maar we wonen er
            niet.
          </P>
          <P>
            Daarom: <strong>onze begeleidingsdiensten zijn Costa del Azahar
            (provincie Castellón) en omliggende gemeenten in noord-Valencia</strong>.
            Niet omdat de Costa Blanca een verkeerde keuze is — voor veel
            kopers is het de juiste keuze. Maar omdat we daar niet de
            eerstehandskennis hebben die we wel op de Azahar bieden. Zou jij
            geholpen zijn met een goede Nederlandstalige aankoopbegeleider op
            de Costa Blanca? Vraag het ons gerust — we kunnen een paar namen
            doorgeven.
          </P>
        </Section>

        <Section>
          <H2>Tot slot — beide kuststroken hebben Nederlanders die er gelukkig wonen</H2>
          <P>
            Er bestaat geen objectieve &ldquo;winnaar&rdquo; tussen Costa del
            Azahar en Costa Blanca. Beide kuststroken hebben Nederlanders die
            er al jaren wonen en geen seconde willen weg. De vraag is welke
            past bij hoe jij wilt leven, hoe je je financiering opbouwt, en
            wat je belangrijk vindt aan de omgeving — taal, drukte, prijs,
            bereikbaarheid, school, zorg.
          </P>
          <P>
            Als je deze afweging maakt en eerlijk advies wil — wat past
            volgens iemand die hier woont? — plan een gratis gesprek van 30
            minuten. We luisteren naar je situatie en zeggen eerlijk welke
            costa we voor jou logischer vinden. Ook als dat de Costa Blanca
            is.
          </P>
        </Section>

        <GidsCallout variant="card" />

        <div className="mt-16 rounded-3xl border border-olive/40 bg-olive/5 p-8 text-center">
          <h3 className="font-heading text-2xl text-navy">
            Twijfel je nog tussen de twee kuststroken?
          </h3>
          <p className="mt-3 text-foreground/80">
            Plan een vrijblijvend gesprek van 30 minuten. We bespreken jouw
            situatie, prijsklasse en wensen — en we zeggen eerlijk welke costa
            voor jou logischer is, óók als dat niet de Azahar is.
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
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <Link
              href="/artikelen/nieuwbouw-of-bestaande-bouw-spanje"
              className="block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-terracotta/60"
            >
              <p className="font-heading text-lg text-navy">
                Nieuwbouw of bestaande bouw in Spanje — welke past bij jou?
              </p>
              <p className="mt-2 text-sm text-foreground/75">
                Vergelijking van belastingen, garanties, doorlooptijd en
                verborgen kosten plus een vijf-vragen-checklist.
              </p>
              <span className="mt-3 inline-block text-sm text-terracotta">
                Lees het artikel →
              </span>
            </Link>
            <Link
              href="/artikelen/nie-aanvragen-spanje-stappenplan"
              className="block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-terracotta/60"
            >
              <p className="font-heading text-lg text-navy">
                NIE aanvragen in Spanje — stappenplan 2026
              </p>
              <p className="mt-2 text-sm text-foreground/75">
                Via Consulaat-Generaal Amsterdam of ter plaatse — documenten,
                kosten en doorlooptijd.
              </p>
              <span className="mt-3 inline-block text-sm text-terracotta">
                Lees het artikel →
              </span>
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

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-olive/40 bg-olive/5 p-6 text-foreground/85">
      {children}
    </div>
  );
}
