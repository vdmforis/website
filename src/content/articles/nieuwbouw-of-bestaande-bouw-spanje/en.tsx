import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";
import { GidsCallout } from "@/components/GidsCallout";
import { Section, H2, H3, Lead, P, UL, OL, Callout } from "@/components/article/Prose";

/** English translation of the Dutch article. */
export default function Body() {
  return (
    <>
      <Section>
        <Lead>
          In Spain, the choice between a new build and a resale home is more
          fundamental than in the Netherlands. It isn&apos;t just about style or
          year of construction, but also about taxes, legal guarantees, the buying
          process and how much patience you need to bring. Below is an honest
          comparison with no preference upfront.
        </Lead>
        <GidsCallout variant="inline" locale="en" />
      </Section>

      <Section>
        <H2>The key differences at a glance</H2>
        <P>
          For those short on time, these are the differences that really matter.
          Below the table we explain each line with figures.
        </P>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50 text-navy">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Item</th>
                <th className="px-4 py-3 text-left font-medium">New build</th>
                <th className="px-4 py-3 text-left font-medium">Resale</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              <tr>
                <td className="px-4 py-3 font-medium text-navy">Tax on purchase</td>
                <td className="px-4 py-3">IVA 10%</td>
                <td className="px-4 py-3">ITP 6 to 13% (depends on the region)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-navy">AJD (Valencia)</td>
                <td className="px-4 py-3">1.5% of the purchase price</td>
                <td className="px-4 py-3">Not applicable</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-navy">Timeline</td>
                <td className="px-4 py-3">9 to 18 months (off-plan)</td>
                <td className="px-4 py-3">2 to 3 months</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-navy">Payment structure</td>
                <td className="px-4 py-3">Four instalments</td>
                <td className="px-4 py-3">Once, at the escritura</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-navy">Guarantees</td>
                <td className="px-4 py-3">10 years (Ley 38/1999)</td>
                <td className="px-4 py-3">None by law</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-navy">Aval bancario (bank guarantee)</td>
                <td className="px-4 py-3">Mandatory</td>
                <td className="px-4 py-3">Not applicable</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-navy">Energy rating</td>
                <td className="px-4 py-3">A or B</td>
                <td className="px-4 py-3">Varies from A to G</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-navy">Room to negotiate</td>
                <td className="px-4 py-3">Limited</td>
                <td className="px-4 py-3">5 to 15% possible</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <H2>Taxes compared, in concrete terms</H2>
        <P>
          On a home costing <strong>€350,000</strong>, the taxes work out as
          follows (Comunidad Valenciana):
        </P>
        <UL>
          <li>
            <strong>New build:</strong> €350,000 + IVA 10% (€35,000) + AJD 1.5%
            (€5,250) = <strong>€390,250</strong> in total
          </li>
          <li>
            <strong>Resale:</strong> €350,000 + ITP 10% (€35,000) ={" "}
            <strong>€385,000</strong> in total
          </li>
        </UL>
        <P>
          Difference: about €5,000 in favour of resale. Not earth-shattering, but
          measurable.
        </P>
        <Callout>
          <p>
            <strong>ITP varies by region and changes regularly.</strong> As of June
            2026:
          </p>
          <ul className="mt-3 ml-5 list-disc space-y-1">
            <li>
              <strong>Comunidad Valenciana</strong>: 10% general rate{" "}
              <em>until 1 June 2026</em>, then reduced to <strong>9%</strong>. Above
              €1 million it stays at 11%. Reduced rate of <strong>6%</strong> for a
              first home under €180,000 for buyers under 35.
            </li>
            <li>
              <strong>Madrid</strong>: 6% general rate
            </li>
            <li>
              <strong>Andalucía</strong>: 7% flat rate; reduced 3.5 to 6% for
              specific cases (young buyers, low prices, large families)
            </li>
            <li>
              <strong>Catalunya</strong>: progressive since June 2025: 10% up to
              €600k / 11% up to €900k / 12% up to €1.5m / 13% above €1.5m. Plus a
              20% surcharge for <em>grandes tenedores</em> (large property owners)
            </li>
          </ul>
          <p className="mt-3">
            Always ask your gestor for the current rate in your region; policy can
            change every tax year.
          </p>
        </Callout>
      </Section>

      <Section>
        <H2>When should you choose a new build?</H2>
        <P>Four scenarios in which a new build is often the better choice:</P>
        <OL>
          <li>
            <strong>Energy efficiency is a priority.</strong> New builds after 2020
            meet strict insulation requirements (CTE-DB-HE) and almost always have
            an A or B rating. With rising energy prices, that saves thousands of
            euros a year.
          </li>
          <li>
            <strong>You don&apos;t want a renovation project.</strong> With a new
            build, turnkey almost always really means turnkey: kitchen, bathroom,
            electrics, plumbing, all new and under guarantee.
          </li>
          <li>
            <strong>You value a 10-year structural guarantee.</strong> Under Ley
            38/1999, builders must provide guarantees: <strong>10 years</strong> on
            structural defects (<em>estructurales</em>), <strong>3 years</strong> on
            defects affecting habitability (<em>habitabilidad</em>), and{" "}
            <strong>1 year</strong> on finishes (<em>terminación o acabado</em>).
          </li>
          <li>
            <strong>You have time.</strong> Buying off-plan means waiting 9 to 18
            months for completion, with payments spread over the build. If
            you&apos;re in no hurry and your cash flow can handle it, no problem.
          </li>
        </OL>
      </Section>

      <Section>
        <H2>When should you choose a resale home?</H2>
        <P>Four scenarios in which a resale home is a better fit:</P>
        <OL>
          <li>
            <strong>You want to be able to move in straight away.</strong> With a
            resale home you can have the keys within 2 to 3 months of signing. With
            a new build you often wait a year.
          </li>
          <li>
            <strong>There are no new builds in the location you want.</strong> Old
            town centres (Castellón centro, Peñíscola&apos;s historic centre), a
            front-line beach position on a seafront that is already fully built up:
            there are no new builds there, so you are limited to existing homes.
          </li>
          <li>
            <strong>Character and uniqueness matter to you.</strong> A 100-year-old
            village house inland has a soul that a new build cannot imitate. For
            some buyers, that is the whole point.
          </li>
          <li>
            <strong>You want to negotiate.</strong> With resale homes, 5 to 15% off
            the asking price is a realistic negotiating target, especially if the
            property has been empty for a long time. With new builds the price list
            is public and there is little room to move.
          </li>
        </OL>
      </Section>

      <Section>
        <H2>Hidden costs: differences you often don&apos;t see coming</H2>
        <P>
          On top of the main costs, there are categories of expense that differ by
          type of home. Here is the honest list.
        </P>

        <H3>With a new build</H3>
        <UL>
          <li>
            <strong>Comunidad de Propietarios still being set up.</strong> In the
            first months after completion, the owners&apos; association is not yet
            up and running. Expect some chaos around pool maintenance, communal
            gardens and odd jobs.
          </li>
          <li>
            <strong>Snagging defects.</strong> Almost every new build has 20+ small
            defects at handover (a paint smear, a crooked socket, a leaking tap).
            You have to report them within 14 days, which takes time and means
            being there.
          </li>
          <li>
            <strong>Garden work often not included.</strong> A &quot;private
            garden&quot; usually means sand and gravel. Planting, irrigation and a
            terrace are up to you. Budget €5k to €15k.
          </li>
          <li>
            <strong>An empty neighbourhood.</strong> In new residential areas,
            amenities (shops, schools, public transport) only follow later. A few
            years of living somewhat out of the way can be welcome peace and quiet,
            or an irritation.
          </li>
        </UL>

        <H3>With a resale home</H3>
        <UL>
          <li>
            <strong>Overdue maintenance.</strong> Bathroom, kitchen, pipes,
            electrics: most homes older than 25 years need at least one major
            renovation. Budget €15k to €60k depending on age and condition.
          </li>
          <li>
            <strong>Energy renovation.</strong> Going from an F or G rating to A/B
            usually costs €10k to €30k (insulation, windows, heat pump). Under the
            EU EPBD directive, Spain has to draw up national renovation plans which
            are expected to require rating E from 2030 and rating D from 2033 as a
            minimum for sale or rental. Not a direct EU ban, but a policy direction
            worth bearing in mind with older homes.
          </li>
          <li>
            <strong>Hidden defects.</strong> Damp, leaks, asbestos in old roofs,
            cracking. An independent <em>informe técnico</em> (building survey) by
            a Spanish architect costs €300 to €600 and is always worth the money.
          </li>
          <li>
            <strong>Plusvalía Municipal sometimes passed to the buyer.</strong> By
            law the seller pays, but in practice it is sometimes passed on in the
            price or in the contract. Read carefully.
          </li>
        </UL>
      </Section>

      <Section>
        <H2>Our own choice: why we chose a new build</H2>
        <P>
          For our own purchase we chose a new build: a <em>chalet adosado</em>{" "}
          (terraced house) in Grau de Castellón, bought from Metrovacesa in 2025,
          keys in June 2026.
        </P>
        <P>Our reasoning:</P>
        <UL>
          <li>
            Energy efficiency weighed heavily: we live there ourselves and
            don&apos;t want high energy bills on a home we want to use for 30 years
          </li>
          <li>
            We didn&apos;t want a renovation project on top: we have lived in Spain
            for years and don&apos;t have the headspace for building stress
          </li>
          <li>We had time: no urgent pressure to move in within three months</li>
          <li>
            The 10-year structural guarantee gave peace of mind on a stretch of
            coast where salty air has a structural impact
          </li>
        </UL>
        <P>
          The trade-off: 18 months between reservation and keys, four instalments
          that squeeze your cash flow, and the mental work of tracking the bank
          guarantee, translations and the Modelo 036. We underestimated that: not
          the amounts, but the number of small decisions along the way.
        </P>
        <P>
          Read the whole story on{" "}
          <Link href="/en/onze-ervaring" className="text-terracotta hover:underline">
            Our experience
          </Link>
          .
        </P>
      </Section>

      <Section>
        <H2>Five questions to help you decide</H2>
        <P>
          Answer these five questions honestly for yourself, and the choice usually
          becomes clear:
        </P>
        <OL>
          <li>
            <strong>When do you want to be able to move in?</strong> Straight away →
            resale. Within 12 to 18 months is fine → a new build is an option.
          </li>
          <li>
            <strong>How important is energy efficiency?</strong> Crucial → new
            build. Happy to invest in it → resale with a renovation plan.
          </li>
          <li>
            <strong>What does your cash flow look like?</strong> Four instalments
            over 18 months is fine → new build. You&apos;d rather pay in one go →
            resale, possibly with a mortgage.
          </li>
          <li>
            <strong>Do you want to negotiate?</strong> Yes, that&apos;s part of
            property → resale. No, a fixed price is fine → new build.
          </li>
          <li>
            <strong>How much guarantee do you want?</strong> 10 years on the
            structure gives peace of mind → new build. I trust a good informe
            técnico → resale.
          </li>
        </OL>
      </Section>

      <Section>
        <H2>Finally</H2>
        <P>
          There is no universally right choice. New builds and resale homes are two
          different products, each with their own costs, pace and risks. The right
          choice depends on where you are in life, what your time is worth, and how
          you feel about maintenance.
        </P>
        <P>
          What applies in both cases: independent guidance, from someone who works
          for you and not for the seller, prevents most costly mistakes. Whether
          that is a lawyer checking the purchase contract, a gestor coordinating
          the paperwork, or a buyer&apos;s guide following the whole process.
        </P>
      </Section>

      <GidsCallout variant="card" locale="en" />

      <div className="mt-16 rounded-3xl border border-olive/40 bg-olive/5 p-8 text-center">
        <h3 className="font-heading text-2xl text-navy">
          Still torn between a new build and a resale home?
        </h3>
        <p className="mt-3 text-foreground/80">
          Book a no-obligation 30-minute call. We&apos;ll discuss your situation,
          area and wishes, and tell you honestly which direction makes sense for
          you.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <BookCallButton
            locale="en"
            className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90"
          >
            Book a free call
          </BookCallButton>
          <Link
            href="/en/gratis-gids"
            className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-terracotta"
          >
            Or download our guide first (in Dutch)
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
          Read also
        </p>
        <Link
          href="/en/artikelen/modelo-036-nederlandse-bv"
          className="mt-3 block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-terracotta/60"
        >
          <p className="font-heading text-lg text-navy">
            Modelo 036 for Dutch B.V. companies: what you need to know in 2026
          </p>
          <p className="mt-2 text-sm text-foreground/75">
            A first-hand guide to filing a Modelo 036 to obtain a Spanish CIF.
            Document list, costs, timeline and pitfalls.
          </p>
          <span className="mt-3 inline-block text-sm text-terracotta">
            Read the article →
          </span>
        </Link>
      </div>
    </>
  );
}
