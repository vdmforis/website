import type { Metadata } from "next";
import { Fraunces, Inter, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingContact } from "@/components/FloatingContact";
import { HtmlLang } from "@/components/HtmlLang";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.vdmforis.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Foris · Woningbeheer, onderhoud en verhuur in Castellón",
    template: "%s · Foris",
  },
  description:
    "Nederlandstalig onderhoud, reparaties en woningbeheer in Grau de Castellón, Castellón en Benicàssim. Ook verhuur van eigen woonruimte en begeleiding bij het kopen van een huis.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: SITE_URL,
    siteName: "Foris",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/*
 * Sitewide structured data. Two activities:
 *  1. woningbeheer & onderhoud (HomeAndConstructionBusiness)
 *  2. verhuur van eigen woningen: geen eigen entiteit; pas een
 *     RealEstateListing op een woningpagina zodra er iets beschikbaar is.
 * Plus kopersbegeleiding (ProfessionalService).
 * Bewust GEEN RealEstateAgent zolang de RAICV-inschrijving niet rond is.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Van der Meulen Foris B.V.",
      alternateName: "Foris",
      url: SITE_URL,
      logo: `${SITE_URL}/icon`,
      image: `${SITE_URL}/opengraph-image`,
      description:
        "Woningbeheer, onderhoud en reparaties in Grau de Castellón, Castellón en Benicàssim, en verhuur van eigen woonruimte in Castellón. Ook Nederlandstalige begeleiding bij het kopen van een huis aan de Costa del Azahar.",
      foundingDate: "2025-09-04",
      parentOrganization: {
        "@type": "Organization",
        name: "Van der Meulen Beheer B.V.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Toldijk 27",
          postalCode: "7901 TA",
          addressLocality: "Hoogeveen",
          addressCountry: "NL",
        },
      },
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "Grau de Castellón",
          addressRegion: "Comunitat Valenciana",
          addressCountry: "ES",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "Toldijk 27",
          postalCode: "7901 TA",
          addressLocality: "Hoogeveen",
          addressCountry: "NL",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "info@vdmforis.com",
          telephone: "+34-611-365-294",
          availableLanguage: ["nl", "es", "en"],
          areaServed: "ES",
        },
      ],
      identifier: [
        {
          "@type": "PropertyValue",
          propertyID: "KvK",
          value: "98214950",
        },
        {
          "@type": "PropertyValue",
          propertyID: "NIF",
          value: "N0406296D",
        },
      ],
      knowsLanguage: ["nl", "es", "en"],
      sameAs: [],
    },
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${SITE_URL}/#onderhoud`,
      name: "Foris Woningbeheer & Onderhoud",
      url: `${SITE_URL}/#onderhoud`,
      image: `${SITE_URL}/opengraph-image`,
      parentOrganization: { "@id": `${SITE_URL}/#org` },
      description:
        "Onderhoud, reparaties en woningbeheer voor eigenaren in Grau de Castellón, Castellón en Benicàssim, in het Nederlands geregeld.",
      email: "info@vdmforis.com",
      telephone: "+34-611-365-294",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Grau de Castellón",
        addressRegion: "Comunitat Valenciana",
        addressCountry: "ES",
      },
      areaServed: [
        { "@type": "Place", name: "Grau de Castellón" },
        { "@type": "City", name: "Castellón de la Plana" },
        { "@type": "City", name: "Benicàssim" },
      ],
      knowsLanguage: ["nl", "es", "en"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Woningbeheer & onderhoud",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Klussen, reparaties en onderhoud" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Woningbeheer: sleutelbeheer, post en periodieke checks",
            },
          },
        ],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#kopers`,
      name: "Foris Kopersbegeleiding",
      url: `${SITE_URL}/diensten`,
      parentOrganization: { "@id": `${SITE_URL}/#org` },
      description:
        "Nederlandstalige begeleiding bij het kopen van een huis aan de Costa del Azahar: oriëntatie, papierwinkel en nieuwbouwtoezicht.",
      areaServed: { "@type": "AdministrativeArea", name: "Castellón" },
    },
  ],
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HtmlLang
      className={`${fraunces.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingContact />
      </body>
    </HtmlLang>
  );
}
