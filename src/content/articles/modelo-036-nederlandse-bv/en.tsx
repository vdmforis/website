import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";
import { GidsCallout } from "@/components/GidsCallout";
import { Section, H2, Lead, P, UL, OL, Callout, Step } from "@/components/article/Prose";

/** English translation of the Dutch article. */
export default function Body() {
  return (
    <>
      <Section>
        <Lead>
          In short: a Modelo 036 is the Spanish <em>declaración censal</em>, the
          tax registration with the Agencia Tributaria. For Dutch B.V. companies
          that want to buy property in Spain, waiting for the Modelo 036 is often
          the slowest part of the whole purchase. We went through this process
          ourselves in May 2026 for our own B.V., and this article contains
          everything we learned along the way.
        </Lead>
        <GidsCallout variant="inline" locale="en" />
      </Section>

      <Section>
        <H2>What is a Modelo 036, in plain English?</H2>
        <P>
          The Modelo 036 (officially:{" "}
          <em>
            Declaración censal de alta, modificación y baja en el Censo de
            Empresarios, Profesionales y Retenedores
          </em>
          ) is the standard form an entity uses to register with, update or
          deregister from the Spanish tax authorities. It is the Spanish
          equivalent of a VAT registration combined with registering as a
          business with the Dutch Tax Administration (Belastingdienst).
        </P>
        <P>
          For a Dutch B.V. that wants to buy property in Spain, the Modelo 036 has
          one specific purpose: it is how you obtain a Spanish{" "}
          <strong>CIF</strong> (the tax number for legal entities, starting with N
          for foreign entities). Without that number there is no Spanish bank
          account, no <em>escritura</em> at the notary, and no payments to Spanish
          parties above a certain threshold.
        </P>
      </Section>

      <Section>
        <H2>When do you really need it?</H2>
        <P>Not every foreign buyer has to file a Modelo 036:</P>
        <UL>
          <li>
            <strong>Private individuals</strong> buy using their NIE. No Modelo 036
            needed.
          </li>
          <li>
            <strong>Dutch B.V.s buying occasionally</strong> for their own use are
            technically in a grey area, but in practice Spanish banks and notaries
            almost always ask for a CIF before they will work with you.
          </li>
          <li>
            <strong>Dutch B.V.s providing services in Spain on a regular basis</strong>{" "}
            (holiday lets, estate agency, consultancy): mandatory.
          </li>
        </UL>
        <P>
          Our conclusion: if you are buying property through your B.V., file it.
          Spanish institutions increasingly refuse to deal with anonymous foreign
          legal entities on the other side of a transaction.
        </P>
      </Section>

      <Section>
        <H2>CIF, NIF, NIE: what&apos;s the difference?</H2>
        <P>
          Before we get to how you file a Modelo 036, it helps to know which number
          you will receive and how it differs from other tax numbers.
        </P>
        <UL>
          <li>
            <strong>NIF (Número de Identificación Fiscal)</strong>: the generic
            term, the Spanish tax identity of both individuals and legal entities.
          </li>
          <li>
            <strong>NIE (Número de Identidad de Extranjero)</strong>: the NIF for
            foreign individuals, starting with X, Y or Z.
          </li>
          <li>
            <strong>CIF (Código de Identificación Fiscal)</strong>: formerly the
            separate name for the NIF of legal entities. Officially abolished as a
            separate term in 2008, but still widely used in business language.
          </li>
          <li>
            <strong>NIF for foreign entidades</strong>: foreign legal entities get a
            NIF starting with <strong>N</strong> (Dutch B.V.: N + 7 digits + a
            letter).
          </li>
        </UL>
        <P>
          For your Dutch B.V., what you receive is formally a NIF, though in
          everyday Spanish business language it is usually called a CIF.
        </P>
      </Section>

      <Section>
        <H2>What do you need before you start?</H2>
        <P>
          You can only file the Modelo 036 with a complete set of documents. We
          filed our application through a gestor in Castellón. With the
          application we had:
        </P>
        <OL>
          <li>
            <strong>The Modelo 036 itself</strong>: completed and signed by the
            authorised representative (<em>apoderado</em>).
          </li>
          <li>
            <strong>Notarial power of attorney (poder)</strong>: a Dutch deed
            appointing the representative to act for the B.V. in Spain. Sworn
            translation into Spanish. Apostilled.
          </li>
          <li>
            <strong>Deed of incorporation of the Dutch B.V.</strong>: sworn
            translation, apostilled. In our case: 15 pages of articles of
            association plus closing statements, all translated.
          </li>
          <li>
            <strong>Extract from the Dutch Chamber of Commerce (KvK)</strong>:
            preferably the Spanish <em>Extracto del Registro Mercantil</em>{" "}
            version. The KvK supplies it itself, which saves a translation step.
          </li>
          <li>
            <strong>Extract from the UBO register</strong> (ultimate beneficial
            owners) for the owner(s) of the B.V.: sworn translation.
          </li>
          <li>
            <strong>NIE of the authorised representative</strong>: a copy.
          </li>
          <li>
            <strong>Mandato de representación</strong>: a Spanish representation
            agreement between the B.V. and the gestor.
          </li>
        </OL>
        <Callout>
          <p>
            <strong>Important:</strong> all translations must be sworn
            translations, made by a <em>traductor jurado</em> registered with the
            Spanish Ministry of Foreign Affairs. An ordinary translation agency
            translation will be rejected. Costs can run to €800 to €1,200 for a
            complete set.
          </p>
        </Callout>
      </Section>

      <Section>
        <H2>Step by step: how we filed it</H2>
        <P>
          We filed our Modelo 036 on 26 May 2026, through a gestor, electronically
          (
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
          <Step className="" number={1} title="Completing the Modelo 036">
            <P>The gestor fills it in. The main fields for a foreign entity:</P>
            <UL>
              <li>Tick the &quot;Alta&quot; (registration) box</li>
              <li>
                Persona jurídica → <em>Entidad extranjera con personalidad
                jurídica</em>
              </li>
              <li>
                Código país: <strong>NL</strong>
              </li>
              <li>Domicilio fiscal: the Dutch address</li>
              <li>Representante (apoderado): the authorised representative with an NIE</li>
              <li>
                Tick clave 332 (Voluntaria): the representation is voluntary, not
                required by law
              </li>
            </UL>
          </Step>
          <Step className="" number={2} title="Filing online">
            <P>
              The gestor logs in to the AEAT&apos;s <em>sede electrónica</em> with
              their own certificate and files on your behalf. You receive a{" "}
              <em>número de asiento registral</em> (registration number). Keep it
              safe.
            </P>
          </Step>
          <Step className="" number={3} title="Submitting the documentación adicional">
            <P>
              Within 10 days of filing you have to upload all supporting documents
              via <em>Aportar documentación complementaria</em>. We sent 11 files:
              the Dutch deed of incorporation plus Spanish translation, the power of
              attorney plus Spanish translation plus apostille, the KvK extract, UBO
              extracts for the holding company and the B.V. itself, a copy of the
              NIE, and the mandato.
            </P>
          </Step>
          <Step className="" number={4} title="Waiting for the definitive NIF">
            <P>
              The AEAT first confirms receipt (within 24 hours). The legal deadline
              for issuing a <strong>provisional NIF</strong> is 10 working days; in
              practice, via the consular route, it usually takes 2 to 4 weeks. For
              the <strong>definitive NIF</strong>, the entity then has 6 months to
              provide all documentation; in practice it takes 2 to 3 months from
              filing. Our purchase contract already showed a provisional NIF,
              which shows how common this is.
            </P>
          </Step>
        </div>
      </Section>

      <Section>
        <H2>What it costs</H2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50 text-navy">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Item</th>
                <th className="px-6 py-4 text-right font-medium">Indicative price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              <tr>
                <td className="px-6 py-4">Gestor&apos;s fee for the Modelo 036</td>
                <td className="px-6 py-4 text-right">€250 to €500</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Notarial power of attorney in the Netherlands</td>
                <td className="px-6 py-4 text-right">€350 to €600</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Apostille (district court)</td>
                <td className="px-6 py-4 text-right">€25 to €50</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Sworn translations Dutch → Spanish (full set)</td>
                <td className="px-6 py-4 text-right">€600 to €1,200</td>
              </tr>
              <tr className="bg-navy/5 font-medium text-navy">
                <td className="px-6 py-4">Total</td>
                <td className="px-6 py-4 text-right">€1,500 to €2,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <P>
          Expect a range of €1,500 to €2,500 for the whole Modelo 036 process,
          excluding your own time.
        </P>
      </Section>

      <Section>
        <H2>Timeline: 6 to 10 weeks</H2>
        <P>
          This is not a case of &quot;file tomorrow, done next week&quot;. A
          realistic timeline:
        </P>
        <UL>
          <li>Weeks 1 to 2: arranging and signing the notarial power of attorney in the Netherlands</li>
          <li>Weeks 2 to 3: apostille at the district court</li>
          <li>
            Weeks 3 to 4: sworn translations (a traductor jurado needs 1 to 2
            weeks)
          </li>
          <li>Week 4: filing the Modelo 036 plus attachments</li>
          <li>Weeks 5 to 8: provisional CIF issued</li>
          <li>Weeks 8 to 12: definitive CIF (often in parallel with the purchase)</li>
        </UL>
        <Callout>
          <p>
            <strong>Rule of thumb:</strong> start the Modelo 036 at least 8 weeks
            before you want to make a payment from your B.V. to Spain. Many buyers
            only start this process after signing a Spanish contract, and then get
            stuck on the payment deadlines.
          </p>
        </Callout>
      </Section>

      <Section>
        <H2>Six pitfalls to avoid</H2>
        <OL>
          <li>
            <strong>Translations by a non-sworn translator</strong>: simply
            rejected by the AEAT. Always use a traductor jurado.
          </li>
          <li>
            <strong>Forgetting the apostille</strong>: Spain only accepts Dutch
            deeds with an apostille. Allow an extra 1 to 2 weeks.
          </li>
          <li>
            <strong>Not sorting out the representative&apos;s NIE first</strong>:
            you need a valid NIE to file as apoderado. Doesn&apos;t the
            representative have an NIE yet? Stop, and do the NIE first.
          </li>
          <li>
            <strong>Accidentally ticking that there is a permanent establishment</strong>:
            if you tick that box, the AEAT assumes you have an{" "}
            <em>establecimiento permanente</em> in Spain and you will have to pay
            Spanish corporation tax. It changes the entire tax structure.
          </li>
          <li>
            <strong>Not listing all UBOs</strong>: Dutch B.V.s also have to state
            their <em>titulares reales</em> in the Modelo 036 (page 10).
            Forgetting means delay.
          </li>
          <li>
            <strong>Forgetting the mandato de representación</strong>: if you file
            through a gestor, there must be a mandato authorising the gestor to act
            on behalf of your B.V. with the AEAT.
          </li>
        </OL>
      </Section>

      <Section>
        <H2>What happens after confirmation</H2>
        <P>As soon as your provisional CIF comes through:</P>
        <UL>
          <li>You can open a Spanish bank account</li>
          <li>The notary can draw up an escritura for your B.V.</li>
          <li>Spanish suppliers and developers (promotores) can invoice you</li>
          <li>
            You can register for the Modelo 720 (mandatory declaration of assets
            abroad) if you acquire a permanent establishment in Spain
          </li>
        </UL>
        <P>
          The definitive CIF (after 2 to 3 months) carries the same rights as the
          provisional one, so there is no need to push for that transition.
        </P>
      </Section>

      <Section>
        <H2>Need help?</H2>
        <P>
          We went through this process ourselves in early 2026 for our Dutch B.V.,
          incorporated in September 2025, with a Spanish CIF in hand by May 2026.
          If you are about to go through the same process and would rather not
          untangle the paperwork yourself, our{" "}
          <Link
            href="/en/diensten#papierwinkel"
            className="text-terracotta hover:underline"
          >
            paperwork service
          </Link>{" "}
          will guide you through it: a fixed price, agreed upfront, no surprises.
        </P>
      </Section>

      <GidsCallout variant="card" locale="en" />

      <div className="mt-16 rounded-3xl border border-olive/40 bg-olive/5 p-8 text-center">
        <h3 className="font-heading text-2xl text-navy">
          The same process for your B.V., without untangling the paperwork yourself
        </h3>
        <p className="mt-3 text-foreground/80">
          From €350 per process, we arrange your NIE, CIF, bank account and Modelo
          036. One Dutch-speaking point of contact for the whole process.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/en/diensten#papierwinkel"
            className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90"
          >
            See the paperwork service
          </Link>
          <BookCallButton
            locale="en"
            className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-terracotta"
          >
            Or book a call
          </BookCallButton>
        </div>
      </div>
    </>
  );
}
