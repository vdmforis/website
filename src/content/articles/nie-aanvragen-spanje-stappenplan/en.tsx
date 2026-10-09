import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";
import { GidsCallout } from "@/components/GidsCallout";
import { Section, H2, Lead, P, UL, OL, Callout, Step } from "@/components/article/Prose";

const linkCls = "text-terracotta hover:underline";

/** English translation of the Dutch article. */
export default function Body() {
  return (
    <>
      <Section>
        <Lead>
          For most Dutch buyers, the NIE application is the first real step in the
          Spanish process, and straight away the first one that often goes wrong
          or happens too late. Start early and it&apos;s manageable. Wait until you
          have a home in mind and you&apos;ll be stuck for weeks, because
          everything that follows (bank account, contract, Modelo 036) needs your
          NIE first.
        </Lead>
        <GidsCallout variant="inline" locale="en" />
      </Section>

      <Section>
        <H2>What is an NIE? A short explanation</H2>
        <P>
          The NIE (<em>Número de Identidad de Extranjero</em>) is your personal tax
          and identification number in Spain as a foreigner. It consists of a
          letter (X, Y or Z), seven digits and a check letter. For example:
          Y1234567A.
        </P>
        <P>What you can do with it:</P>
        <UL>
          <li>Open a Spanish bank account</li>
          <li>Sign a purchase contract</li>
          <li>Sign a rental contract</li>
          <li>Sign up for utilities (water, electricity, gas, internet)</li>
          <li>Register a car or motorbike in your name</li>
          <li>File an income tax return (Modelo 100 or 210)</li>
          <li>Register with Spanish Social Security if you are going to work</li>
        </UL>
        <P>
          Once issued, your NIE is <strong>valid for life</strong>. It doesn&apos;t
          appear in your passport and never needs renewing: apply once, keep it
          forever.
        </P>
      </Section>

      <Section>
        <H2>When do you really need it?</H2>
        <P>
          For any serious legal or financial transaction in Spain, someone will ask
          for your NIE. Specific moments when you really can&apos;t put it off any
          longer:
        </P>
        <UL>
          <li>
            You are about to sign a <strong>reservation contract</strong> for a
            new-build project: most developers already ask for it
          </li>
          <li>
            You are opening a <strong>Spanish bank account</strong> as an
            individual or for your B.V. (Dutch private limited company): a
            mandatory identity requirement beforehand
          </li>
          <li>
            You are going to <strong>connect utilities</strong> at a newly rented
            or purchased home
          </li>
          <li>
            You are going to <strong>buy a car or scooter</strong>: the DGT
            won&apos;t accept a registration without an NIE
          </li>
        </UL>
        <Callout>
          <p>
            <strong>Rule of thumb:</strong> if you want to do anything at all of
            substance in Spain in the next 12 months, apply for your NIE now. The
            application costs next to nothing and is easy, and it saves you waiting time
            later at exactly the moment you need it.
          </p>
        </Callout>
      </Section>

      <Section>
        <H2>Two routes: the Netherlands or Spain?</H2>
        <P>You can apply for your NIE in two ways:</P>
        <OL>
          <li>
            <strong>At the Spanish Embassy or a Spanish Consulate in the
            Netherlands</strong>: The Hague or Amsterdam
          </li>
          <li>
            <strong>Locally in Spain</strong>: at an{" "}
            <em>Oficina de Extranjería</em> or a{" "}
            <em>Comisaría de Policía Nacional</em>
          </li>
        </OL>
        <P>
          Both lead to exactly the same NIE number and are legally equivalent.
          Which route you choose depends on where you are and how quickly you need
          it.
        </P>
      </Section>

      <Section>
        <H2>Route 1: applying for an NIE from the Netherlands</H2>
        <P>
          This is the most common route for Dutch people who are exploring the
          market or want to buy a second home.
        </P>

        <Step number={1} title="Make an appointment at the Consulate General in Amsterdam">
          <P>
            <strong>Good to know</strong>: The Hague is home only to the{" "}
            <em>Embajada de España</em> (Embassy), without a consular section. All
            consular matters for the whole of the Netherlands, including the NIE,
            go through the{" "}
            <a
              href="https://www.exteriores.gob.es/Consulados/amsterdam/es/Paginas/index.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Consulado General de España in Amsterdam
            </a>
            .
          </P>
          <P>
            Book an appointment for an NIE application online via their website:
            choose the option &quot;NIE para no residentes&quot; or similar. Expect
            a wait of <strong>2 to 8 weeks</strong> for the next available
            appointment, depending on the season. It gets busier in the summer
            months.
          </P>
        </Step>

        <Step number={2} title="Fill in the EX-15 form">
          <P>
            The official EX-15 form is managed by the Spanish{" "}
            <em>Policía Nacional</em>. You&apos;ll find it on the{" "}
            <a
              href="https://sede.policia.gob.es/portalCiudadano/_es/tramites_extranjeria_tramite_asignacion_nie.php"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Policía Nacional&apos;s Sede Electrónica
            </a>{" "}
            (procedure: <em>Asignación de NIE</em>). The form is in Spanish, but
            mostly asks for basic details. Key fields:
          </P>
          <UL>
            <li>
              <strong>Datos personales</strong>: first name, surname, place of
              birth, date of birth, nationality
            </li>
            <li>
              <strong>Domicilio en España</strong>: leave blank if you don&apos;t
              have an address yet; otherwise fill in the hotel or holiday address
              where you are staying
            </li>
            <li>
              <strong>Domicilio en el país de origen</strong>: your home address in
              the Netherlands
            </li>
            <li>
              <strong>Motivos de la solicitud</strong>: choose the right reason:
              almost always <em>económicos</em> (economic, for property) or{" "}
              <em>profesionales</em> (business)
            </li>
          </UL>
        </Step>

        <Step number={3} title="Write a cover letter">
          <P>
            The NIE application needs a justification. It doesn&apos;t have to be
            long: a short statement in Spanish explaining why you are applying for
            the number is enough. A commonly used text for property buyers:
          </P>
          <Callout>
            <p style={{ fontStyle: "italic" }}>
              &quot;Solicito el Número de Identidad de Extranjero (NIE) con el fin
              de poder realizar trámites económicos en España relacionados con la
              compra de un inmueble en la Comunitat Valenciana, incluida la
              apertura de una cuenta bancaria, la firma del contrato de
              compraventa, y la formalización de los servicios públicos
              correspondientes.&quot;
            </p>
          </Callout>
          <P>
            Add your name, the date and your signature underneath. No translation
            is needed: Spanish is enough.
          </P>
        </Step>

        <Step number={4} title="Pay the Modelo 790 código 012">
          <P>
            The official fee (<em>tasa</em>) for issuing an NIE is{" "}
            <strong>€9.84</strong> (Modelo 790, código 012). You can generate the
            form online via the{" "}
            <a
              href="https://sede.policia.gob.es/Tasa790_012/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              Policía Nacional&apos;s Sede
            </a>
            .
          </P>
          <P>
            Fill in the form online, print it and pay the fee at a Spanish{" "}
            <em>entidad colaboradora</em> (CaixaBank, BBVA, Santander, Sabadell,
            Ibercaja, Bankinter or Unicaja). You&apos;ll get a stamped receipt back,
            which you need to bring to your appointment.
          </P>
          <P>
            For applicants in the Netherlands: if you go through the Consulate
            General in Amsterdam, you usually pay the fees at the consulate itself
            rather than via the Modelo 790. Ask for the exact amounts when your
            appointment is confirmed; they change from time to time.
          </P>
        </Step>

        <Step number={5} title="Bring your documents to the appointment">
          <P>What to bring to the consulate:</P>
          <UL>
            <li>Valid passport (original plus a copy of the photo page)</li>
            <li>
              Two passport photos in the <strong>Spanish 32 × 26 mm format</strong>{" "}
              (not the Dutch 35 × 45 mm), white background, recent
            </li>
            <li>Completed EX-15 (2 copies)</li>
            <li>Signed cover letter in Spanish</li>
            <li>Proof of payment of the fee</li>
          </UL>
          <Callout>
            <p>
              <strong>Passport photo pitfall:</strong> the Spanish 32 × 26 mm
              standard differs from the international format used in the
              Netherlands (35 × 45 mm). Dutch photographers often don&apos;t know
              this. Ask explicitly for a{" "}
              <em>&quot;foto carnet español DNI&quot;</em> or have them taken in
              Spain at a photo booth.
            </p>
          </Callout>
        </Step>

        <Step number={6} title="Waiting for the outcome">
          <P>
            The legal deadline is <strong>5 working days</strong> after
            registration by the competent authority. In practice, via a consulate
            in the Netherlands, expect <strong>2 to 6 weeks</strong> before your
            NIE is issued, depending on the season and how busy they are. The
            consulate will call or email you as soon as the document is ready. You
            receive a <em>Resguardo de NIE</em>, a paper certificate with your
            number on it. Keep it safe.
          </P>
        </Step>
      </Section>

      <Section>
        <H2>Route 2: applying for an NIE locally in Spain</H2>
        <P>
          If you are already in Spain (on holiday, on a viewing trip or living
          there temporarily), you can also apply for your NIE locally. Often
          faster than via the Netherlands, but with a few pitfalls.
        </P>

        <Step number={1} title="Book a cita previa via sede.administracionespublicas.gob.es">
          <P>
            Go to{" "}
            <a
              href="https://sede.administracionespublicas.gob.es/icpplustiem/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              sede.administracionespublicas.gob.es
            </a>{" "}
            and book a <em>cita previa</em> (appointment) in the province where you
            are staying. Choose the category &quot;Asignación de NIE&quot;.
          </P>
          <Callout>
            <p>
              <strong>The big pitfall:</strong> in busy areas (Alicante, Málaga,
              the Valencia coast) there are often no appointments available for
              weeks or months. The system then shows &quot;no appointments&quot;.
              Try every day at 9:00, when new slots are released. Or try a less
              busy province (Castellón and Tarragona are often more realistic than
              Alicante).
            </p>
          </Callout>
        </Step>

        <Step number={2} title="Prepare the EX-15 and Modelo 790 código 012">
          <P>
            Fill in the EX-15 and Modelo 790 at home (see route 1). Print both
            before you go to the appointment. Pay the fee of around €10 at a
            Spanish bank up to 1 week before your appointment.
          </P>
        </Step>

        <Step number={3} title="Attend the appointment">
          <P>
            Turn up for your appointment, usually at a{" "}
            <em>Comisaría de Policía Nacional</em> or an{" "}
            <em>Oficina de Extranjería</em>. Be on time (15 minutes early). What to
            bring:
          </P>
          <UL>
            <li>Passport (original plus copy)</li>
            <li>Completed EX-15</li>
            <li>Proof of payment of the Modelo 790 código 012</li>
            <li>Your reason for applying (can also be explained verbally)</li>
            <li>
              Sometimes requested: a copy of a rental contract, hotel booking or
              purchase contract to support the reason for your stay
            </li>
          </UL>
        </Step>

        <Step number={4} title="Receiving your NIE">
          <P>
            The legal deadline is <strong>5 working days</strong> from
            registration. In busy coastal areas (Costa Blanca, Mallorca), expect{" "}
            <strong>1 to 3 weeks</strong>. Sometimes you get it on the spot,
            depending on how quickly the comisaría works. You receive it on a paper{" "}
            <em>Resguardo</em> with your number; not a plastic card.
          </P>
        </Step>
      </Section>

      <Section>
        <H2>Which route suits whom?</H2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50 text-navy">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Situation</th>
                <th className="px-4 py-3 text-left font-medium">Best route</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              <tr>
                <td className="px-4 py-3">Early in your search, no travel plans</td>
                <td className="px-4 py-3">Consulate in the Netherlands: sort it out calmly</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Planning a viewing trip soon</td>
                <td className="px-4 py-3">Locally, during the trip</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Already have a home in mind</td>
                <td className="px-4 py-3">Faster path: in Spain</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Just want it &quot;to be on the safe side&quot;</td>
                <td className="px-4 py-3">Consulate in the Netherlands: costs nothing to do it early</td>
              </tr>
              <tr>
                <td className="px-4 py-3">No time to wait for weeks</td>
                <td className="px-4 py-3">Spain, if an appointment is available</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <H2>How much does it really cost?</H2>
        <P>
          The official fee is <strong>€9.84</strong> (Modelo 790 código 012,
          specifically for issuing an NIE). On top of that, only your own travel
          and time costs:
        </P>
        <UL>
          <li>
            Travel to Amsterdam (Consulate General: about €10 to €30 by public
            transport within the Netherlands)
          </li>
          <li>
            Passport photos in Spanish format (€7 to €10 at a photographer: ask for
            DNI format, 32 × 26 mm)
          </li>
          <li>International bank charges if you have to pay in Spain (€5 to €20)</li>
          <li>
            Optional help from a gestor: €100 to €200 if you want to outsource the
            whole process
          </li>
        </UL>
        <P>
          Expect total spending of <strong>€20 to €50</strong> if you do it
          yourself, or <strong>€150 to €300</strong> if you hire a gestor to
          coordinate everything.
        </P>
      </Section>

      <Section>
        <H2>Seven pitfalls to avoid</H2>
        <OL>
          <li>
            <strong>Confusing the EX-15 with the EX-18.</strong> The EX-18 is the{" "}
            <em>Certificado de Registro de Ciudadano de la Unión</em>, for EU
            citizens settling as residents. The EX-15 is for being issued an NIE as
            a non-resident. For most second-home buyers: always the EX-15.
          </li>
          <li>
            <strong>Keeping your reason too short.</strong> &quot;To buy a
            house&quot; is too vague. Be specific: area, type of home, purpose (own
            use or investment).
          </li>
          <li>
            <strong>An expired passport.</strong> Your passport must be valid for
            at least 6 more months on the date of the appointment. Check
            beforehand.
          </li>
          <li>
            <strong>Booking an appointment in Spain too early.</strong> Some
            consulates and comisarías require you to attend within 30 days of
            booking. Only book once your travel date is fixed.
          </li>
          <li>
            <strong>Trying to pay the fee in cash.</strong> The Modelo 790 código
            012 has to be paid through a Spanish bank, not in cash at the counter.
          </li>
          <li>
            <strong>Assuming you&apos;ll get an NIE card.</strong> You receive a
            paper <em>Resguardo</em>, not a plastic ID. Keep it in a folder at home
            and make digital scans straight away.
          </li>
          <li>
            <strong>Getting the first letter wrong.</strong> An NIE always starts
            with X, Y or Z. Some systems ask whether it is a Spanish DNI: don&apos;t
            confirm that, choose the &quot;NIE&quot; option.
          </li>
        </OL>
      </Section>

      <Section>
        <H2>What to do once you have it</H2>
        <P>Immediately after receiving your NIE:</P>
        <UL>
          <li>
            Scan the <em>Resguardo</em> and store it digitally in several places
            (Drive, an email to yourself, locally)
          </li>
          <li>Keep the original safe in your &quot;Spain folder&quot; at home</li>
          <li>
            Add it to your most important documents: you&apos;ll need it for almost
            every step in Spain
          </li>
          <li>
            If applicable: file your{" "}
            <Link href="/en/artikelen/modelo-036-nederlandse-bv" className={linkCls}>
              Modelo 036
            </Link>{" "}
            for your B.V. straight away; it needs your NIE as the authorised
            representative
          </li>
          <li>
            Open your Spanish bank account (your NIE plus passport plus proof of
            residence is usually enough)
          </li>
        </UL>
      </Section>

      <Section>
        <H2>Finally</H2>
        <P>
          The NIE application is technically simple: a form, a fee and some
          patience. The problem isn&apos;t the complexity but the timing: people
          apply too late and then get stuck at every next step (bank, contract,
          Modelo 036).
        </P>
        <P>
          Our honest recommendation: apply for your NIE as soon as you are
          seriously thinking about a home in Spain, not once you have found one.
          It is a one-off administrative step with lifelong validity. No risk, only
          a head start.
        </P>
      </Section>

      <GidsCallout variant="card" locale="en" />

      <div className="mt-16 rounded-3xl border border-olive/40 bg-olive/5 p-8 text-center">
        <h3 className="font-heading text-2xl text-navy">
          Would you like us to guide you through the NIE application?
        </h3>
        <p className="mt-3 text-foreground/80">
          Our paperwork service arranges your NIE, bank account, Modelo 036 and
          translations: a fixed price upfront, one Dutch-speaking point of contact.
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

      <div className="mt-12">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
          Read also
        </p>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <Link
            href="/en/artikelen/modelo-036-nederlandse-bv"
            className="block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-terracotta/60"
          >
            <p className="font-heading text-lg text-navy">
              Modelo 036 for Dutch B.V. companies
            </p>
            <p className="mt-2 text-sm text-foreground/75">
              A step-by-step guide to applying for a Spanish CIF for your Dutch
              B.V.
            </p>
          </Link>
          <Link
            href="/en/artikelen/nieuwbouw-of-bestaande-bouw-spanje"
            className="block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-terracotta/60"
          >
            <p className="font-heading text-lg text-navy">New build or resale?</p>
            <p className="mt-2 text-sm text-foreground/75">
              An honest comparison of taxes and guarantees, with a five-question
              checklist.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
