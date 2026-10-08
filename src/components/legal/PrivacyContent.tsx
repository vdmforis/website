import type { Locale } from "@/lib/i18n";
import { BackHome, LegalShell, Mail, Section } from "@/components/legal/LegalShell";

export const privacyMeta: Record<Locale, { title: string; description: string }> = {
  nl: {
    title: "Privacyverklaring · Foris",
    description:
      "Hoe Van der Meulen Foris B.V. omgaat met persoonsgegevens van bezoekers en klanten, eenvoudig en zonder vakjargon.",
  },
  en: {
    title: "Privacy policy · Foris",
    description:
      "How Van der Meulen Foris B.V. handles the personal data of visitors and clients, in plain language.",
  },
  es: {
    title: "Política de privacidad · Foris",
    description:
      "Cómo trata Van der Meulen Foris B.V. los datos personales de visitantes y clientes, en lenguaje claro.",
  },
};

export function PrivacyContent({ locale }: { locale: Locale }) {
  if (locale === "en") return <PrivacyEn />;
  if (locale === "es") return <PrivacyEs />;
  return <PrivacyNl />;
}

function PrivacyNl() {
  return (
    <LegalShell
      eyebrow="Juridisch"
      title="Privacyverklaring"
      intro="Laatst bijgewerkt: oktober 2026. Hier lees je kort en zonder vakjargon hoe wij omgaan met de gegevens van bezoekers van deze website en van onze klanten."
    >
      <Section title="Wie wij zijn">
        <p>
          Van der Meulen Foris B.V., gevestigd te Toldijk 27, 7901 TA Hoogeveen,
          ingeschreven bij de Nederlandse Kamer van Koophandel onder nummer
          98214950 en bij de Spaanse Agencia Tributaria onder NIF N0406296D.
          Fiscaal domicilie in Spanje te Grau de Castellón, Comunitat Valenciana.
          Voor vragen over deze verklaring kun je ons mailen op <Mail />.
        </p>
      </Section>

      <Section title="Welke gegevens verzamelen wij">
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong>Formulieren</strong> (contact, offerte, kennismaking en gratis
            gids): naam, e-mailadres en, afhankelijk van het formulier, je
            telefoonnummer, voorkeursmoment en de inhoud van je bericht. Wij
            gebruiken dit alleen om jouw vraag of aanvraag te beantwoorden.
          </li>
          <li>
            <strong>Opdrachten voor onderhoud of woningbeheer</strong>: naam,
            contactgegevens, het adres van de woning en, als dat bij de opdracht
            hoort, foto&apos;s van het werk en afspraken over sleutels of toegang.
            Wij gebruiken dit alleen om de opdracht uit te voeren en te
            factureren.
          </li>
          <li>
            <strong>WhatsApp</strong>: als je ons via WhatsApp benadert, gelden het
            privacybeleid van WhatsApp/Meta en onze eigen plicht om jouw bericht
            alleen voor het beantwoorden te gebruiken.
          </li>
          <li>
            <strong>Geen analytics of tracking</strong>: wij gebruiken op deze
            website geen analysetools en plaatsen geen tracking-cookies.
          </li>
        </ul>
      </Section>

      <Section title="Waarvoor gebruiken wij jouw gegevens">
        <ul className="ml-5 list-disc space-y-2">
          <li>Om jouw vraag of aanvraag te beantwoorden;</li>
          <li>Om een afspraak met je te plannen;</li>
          <li>Om onze dienstverlening uit te voeren, als je daar later voor kiest;</li>
          <li>
            Wettelijke verplichtingen, zoals bewaartermijnen op grond van fiscale
            wetgeving wanneer er sprake is van een betaalde opdracht.
          </li>
        </ul>
      </Section>

      <Section title="Met wie delen wij gegevens">
        <p>
          Alleen met partijen die nodig zijn om jouw verzoek uit te voeren of
          waaraan wij wettelijk verplicht zijn te verstrekken. Concreet:
        </p>
        <ul className="ml-5 mt-3 list-disc space-y-2">
          <li>Resend (verzending van e-mail vanuit de formulieren);</li>
          <li>Vercel (hosting van deze website);</li>
          <li>
            Onze Spaanse en Nederlandse gestor/advocaat wanneer dat nodig is om een
            afgesproken dienst uit te voeren.
          </li>
        </ul>
      </Section>

      <Section title="Jouw rechten">
        <p>
          Op grond van de AVG heb je recht op inzage, correctie, verwijdering,
          beperking en overdraagbaarheid van jouw gegevens. Je kunt deze rechten
          uitoefenen door een mail te sturen aan <Mail />. Reageren wij niet
          binnen 30 dagen, dan kun je een klacht indienen bij de Autoriteit
          Persoonsgegevens (Nederland) of de Agencia Española de Protección de
          Datos (AEPD, Spanje).
        </p>
      </Section>

      <Section title="Wijzigingen">
        <p>
          Wanneer onze dienstverlening of de tools die we gebruiken veranderen,
          werken we deze verklaring bij. Vragen over je gegevens? Stuur ons gerust
          een bericht.
        </p>
        <BackHome href="/" label="Terug naar de homepage" />
      </Section>
    </LegalShell>
  );
}

function PrivacyEn() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Privacy policy"
      intro="Last updated: October 2026. A short, plain explanation of how we handle the data of visitors to this website and of our clients."
    >
      <Section title="Who we are">
        <p>
          Van der Meulen Foris B.V., Toldijk 27, 7901 TA Hoogeveen, the
          Netherlands, registered with the Dutch Chamber of Commerce (KvK) under
          number 98214950 and with the Spanish tax agency (Agencia Tributaria)
          under NIF N0406296D. Spanish tax address in Grau de Castellón, Comunitat
          Valenciana. Questions about this policy? Email us at <Mail />.
        </p>
      </Section>

      <Section title="What data we collect">
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong>Forms</strong> (contact, quote, introductory call and free
            guide): your name, email address and, depending on the form, your
            phone number, preferred time and your message. We only use this to
            answer your question or request.
          </li>
          <li>
            <strong>Maintenance or property care jobs</strong>: your name, contact
            details, the address of the property and, where the job requires it,
            photos of the work and arrangements about keys or access. We only use
            this to carry out and invoice the job.
          </li>
          <li>
            <strong>WhatsApp</strong>: if you contact us on WhatsApp, the privacy
            policy of WhatsApp/Meta applies, and we only use your message to reply
            to you.
          </li>
          <li>
            <strong>No analytics or tracking</strong>: we don&apos;t use analytics
            tools on this website and we don&apos;t set tracking cookies.
          </li>
        </ul>
      </Section>

      <Section title="What we use your data for">
        <ul className="ml-5 list-disc space-y-2">
          <li>To answer your question or request;</li>
          <li>To schedule an appointment with you;</li>
          <li>To carry out our services, if you decide to hire us;</li>
          <li>
            Legal obligations, such as keeping records for the period required by
            tax law when there is a paid job.
          </li>
        </ul>
      </Section>

      <Section title="Who we share data with">
        <p>
          Only with parties we need to carry out your request, or that we are
          legally required to share it with. Specifically:
        </p>
        <ul className="ml-5 mt-3 list-disc space-y-2">
          <li>Resend (sending email from the forms);</li>
          <li>Vercel (hosting this website);</li>
          <li>
            Our Spanish and Dutch gestor/lawyer, when needed to carry out a service
            we have agreed on.
          </li>
        </ul>
      </Section>

      <Section title="Your rights">
        <p>
          Under the GDPR you have the right to access, correct, delete, restrict
          and port your data. To exercise these rights, email us at <Mail />. If
          we don&apos;t respond within 30 days, you can file a complaint with the
          Dutch Data Protection Authority (Autoriteit Persoonsgegevens) or the
          Spanish Data Protection Agency (AEPD).
        </p>
      </Section>

      <Section title="Changes">
        <p>
          When our services or the tools we use change, we will update this
          policy. Questions about your data? Just send us a message.
        </p>
        <BackHome href="/en" label="Back to the homepage" />
      </Section>
    </LegalShell>
  );
}

function PrivacyEs() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Política de privacidad"
      intro="Última actualización: octubre de 2026. Aquí te explicamos, de forma breve y clara, cómo tratamos los datos de quienes visitan esta web y de nuestros clientes."
    >
      <Section title="Quiénes somos">
        <p>
          Van der Meulen Foris B.V., con sede en Toldijk 27, 7901 TA Hoogeveen
          (Países Bajos), inscrita en la Cámara de Comercio neerlandesa (KvK) con
          el número 98214950 y en la Agencia Tributaria con el NIF N0406296D.
          Domicilio fiscal en España: Grau de Castellón, Comunitat Valenciana. Si
          tienes preguntas sobre esta política, escríbenos a <Mail />.
        </p>
      </Section>

      <Section title="Qué datos recogemos">
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong>Formularios</strong> (contacto, presupuesto, primera llamada y
            guía gratuita): nombre, correo electrónico y, según el formulario, tu
            teléfono, el momento que prefieres y el contenido de tu mensaje. Solo
            los usamos para responder a tu pregunta o solicitud.
          </li>
          <li>
            <strong>Trabajos de mantenimiento o gestión de viviendas</strong>:
            nombre, datos de contacto, la dirección de la vivienda y, cuando el
            trabajo lo requiere, fotos del trabajo y acuerdos sobre llaves o
            acceso. Solo los usamos para hacer el trabajo y facturarlo.
          </li>
          <li>
            <strong>WhatsApp</strong>: si nos escribes por WhatsApp, se aplica la
            política de privacidad de WhatsApp/Meta, y solo usamos tu mensaje para
            responderte.
          </li>
          <li>
            <strong>Sin analítica ni seguimiento</strong>: en esta web no usamos
            herramientas de analítica ni instalamos cookies de seguimiento.
          </li>
        </ul>
      </Section>

      <Section title="Para qué usamos tus datos">
        <ul className="ml-5 list-disc space-y-2">
          <li>Para responder a tu pregunta o solicitud;</li>
          <li>Para concertar una cita contigo;</li>
          <li>Para prestar nuestros servicios, si decides contratarnos;</li>
          <li>
            Para cumplir obligaciones legales, como los plazos de conservación que
            exige la normativa fiscal cuando hay un encargo pagado.
          </li>
        </ul>
      </Section>

      <Section title="Con quién compartimos datos">
        <p>
          Solo con quien necesitamos para atender tu solicitud o con quien la ley
          nos obliga a compartirlos. En concreto:
        </p>
        <ul className="ml-5 mt-3 list-disc space-y-2">
          <li>Resend (envío de correos desde los formularios);</li>
          <li>Vercel (alojamiento de esta web);</li>
          <li>
            Nuestra gestoría o asesoría jurídica en España y en los Países Bajos,
            cuando sea necesario para prestar un servicio acordado.
          </li>
        </ul>
      </Section>

      <Section title="Tus derechos">
        <p>
          Según el RGPD, tienes derecho de acceso, rectificación, supresión,
          limitación y portabilidad de tus datos. Para ejercerlos, escríbenos a{" "}
          <Mail />. Si no te respondemos en 30 días, puedes presentar una
          reclamación ante la Agencia Española de Protección de Datos (AEPD) o
          ante la autoridad neerlandesa (Autoriteit Persoonsgegevens).
        </p>
      </Section>

      <Section title="Cambios">
        <p>
          Si cambian nuestros servicios o las herramientas que usamos,
          actualizaremos esta política. ¿Tienes dudas sobre tus datos? Escríbenos
          sin problema.
        </p>
        <BackHome href="/es" label="Volver a la página de inicio" />
      </Section>
    </LegalShell>
  );
}
