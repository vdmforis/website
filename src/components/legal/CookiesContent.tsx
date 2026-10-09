import type { Locale } from "@/lib/i18n";
import { BackHome, LegalShell, Section } from "@/components/legal/LegalShell";

export const cookiesMeta: Record<Locale, { title: string; description: string }> = {
  nl: {
    title: "Cookies · Foris",
    description:
      "Welke cookies en gelijksoortige technologie wij gebruiken op vdmforis.com. Heel weinig.",
  },
  en: {
    title: "Cookies · Foris",
    description:
      "Which cookies and similar technology we use on vdmforis.com. Very few.",
  },
  es: {
    title: "Cookies · Foris",
    description:
      "Qué cookies y tecnologías similares usamos en vdmforis.com. Muy pocas.",
  },
};

export function CookiesContent({ locale }: { locale: Locale }) {
  if (locale === "en") return <CookiesEn />;
  if (locale === "es") return <CookiesEs />;
  return <CookiesNl />;
}

function CookiesNl() {
  return (
    <LegalShell
      eyebrow="Juridisch"
      title="Cookies"
      intro="Laatst bijgewerkt: oktober 2026. Korte versie: wij gebruiken op deze website geen tracking-cookies. Hier staat wat er wél gebeurt."
    >
      <Section title="Geen analyse of tracking">
        <p>
          Wij gebruiken op deze website geen analysetools en geen tracking- of
          advertentiecookies. Je hoeft daarom ook niets te accepteren.
        </p>
      </Section>
      <Section title="Taalkeuze">
        <p>
          Kies je zelf een taal (NL, EN of ES), dan onthouden we die keuze in een
          functionele cookie (NEXT_LOCALE), één jaar geldig. Zo zie je de site de
          volgende keer meteen in jouw taal. Er staat verder niets in.
        </p>
      </Section>
      <Section title="Functionele opslag">
        <p>
          Wanneer je een formulier verzendt (bijvoorbeeld voor een offerte of een
          kennismaking), gebruikt de website alleen wat technisch nodig is om je
          bericht te versturen. Dat is <em>functioneel</em>, geen tracking.
        </p>
      </Section>
      <Section title="Externe diensten">
        <p>
          Als je doorklikt naar onze externe diensten gelden hun eigen
          cookie-regelingen:
        </p>
        <ul className="ml-5 mt-3 list-disc space-y-2">
          <li>
            <strong>WhatsApp / Meta</strong>: wanneer je ons via WhatsApp berichten
            stuurt.
          </li>
        </ul>
        <p className="mt-3">
          Hun privacy- en cookieverklaring vind je via hun eigen websites.
        </p>
      </Section>
      <Section title="Wijzigingen">
        <p>
          Mocht onze setup uitbreiden (bijvoorbeeld met een kaart of een
          reviews-widget), dan vullen wij deze pagina aan met de bijbehorende
          cookie-informatie. Voor nu: minimaal en zonder tracking.
        </p>
        <BackHome href="/" label="Terug naar de homepage" />
      </Section>
    </LegalShell>
  );
}

function CookiesEn() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Cookies"
      intro="Last updated: October 2026. Short version: we don't use tracking cookies on this website. Here is what we do use."
    >
      <Section title="No analytics or tracking">
        <p>
          We don&apos;t use analytics tools, tracking cookies or advertising
          cookies on this website, so there is nothing for you to accept.
        </p>
      </Section>
      <Section title="Language choice">
        <p>
          If you pick a language yourself (NL, EN or ES), we remember that choice
          in a functional cookie (NEXT_LOCALE) for one year, so the site opens in
          your language next time. It contains nothing else.
        </p>
      </Section>
      <Section title="Functional storage">
        <p>
          When you send a form (for example to request a quote), the website only
          uses what is technically needed to send your message. That is{" "}
          <em>functional</em>, not tracking.
        </p>
      </Section>
      <Section title="External services">
        <p>
          If you click through to an external service, its own cookie rules
          apply:
        </p>
        <ul className="ml-5 mt-3 list-disc space-y-2">
          <li>
            <strong>WhatsApp / Meta</strong>: when you message us on WhatsApp.
          </li>
        </ul>
        <p className="mt-3">
          You can find their privacy and cookie policies on their own websites.
        </p>
      </Section>
      <Section title="Changes">
        <p>
          If we add anything (for example a map or a reviews widget), we will
          update this page with the cookie information that goes with it. For
          now: minimal, with no tracking.
        </p>
        <BackHome href="/en" label="Back to the homepage" />
      </Section>
    </LegalShell>
  );
}

function CookiesEs() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Cookies"
      intro="Última actualización: octubre de 2026. En resumen: en esta web no usamos cookies de seguimiento. Esto es lo que sí ocurre."
    >
      <Section title="Sin analítica ni seguimiento">
        <p>
          En esta web no usamos herramientas de analítica ni cookies de
          seguimiento o publicidad, así que no tienes que aceptar nada.
        </p>
      </Section>
      <Section title="Elección de idioma">
        <p>
          Si eliges un idioma (NL, EN o ES), guardamos esa elección en una cookie
          funcional (NEXT_LOCALE) durante un año, para que la próxima vez la web
          se abra en tu idioma. No contiene nada más.
        </p>
      </Section>
      <Section title="Almacenamiento funcional">
        <p>
          Cuando envías un formulario (por ejemplo, para pedir presupuesto), la
          web solo usa lo técnicamente necesario para enviar tu mensaje. Es{" "}
          <em>funcional</em>, no seguimiento.
        </p>
      </Section>
      <Section title="Servicios externos">
        <p>
          Si accedes a un servicio externo, se aplican sus propias normas sobre
          cookies:
        </p>
        <ul className="ml-5 mt-3 list-disc space-y-2">
          <li>
            <strong>WhatsApp / Meta</strong>: cuando nos escribes por WhatsApp.
          </li>
        </ul>
        <p className="mt-3">
          Encontrarás sus políticas de privacidad y cookies en sus propias webs.
        </p>
      </Section>
      <Section title="Cambios">
        <p>
          Si añadimos algo (por ejemplo, un mapa o un widget de opiniones),
          actualizaremos esta página con la información sobre cookies
          correspondiente. Por ahora: lo mínimo y sin cookies de seguimiento.
        </p>
        <BackHome href="/es" label="Volver a la página de inicio" />
      </Section>
    </LegalShell>
  );
}
