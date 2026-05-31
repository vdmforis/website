import type { Metadata } from "next";
import { Fraunces, Inter, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingContact } from "@/components/FloatingContact";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://vdmforis.com"),
  title: {
    default: "Foris — Een huis kopen in Spanje zonder de typische valkuilen",
    template: "%s · Foris",
  },
  description:
    "Nederlandstalige aankoopbegeleiding aan de Costa del Azahar. Onafhankelijk, vaste prijs, ter plaatse. Van NIE tot notaris, in het Nederlands geregeld.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://vdmforis.com",
    siteName: "Foris",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "RealEstateAgent", "ProfessionalService"],
  name: "Van der Meulen Foris B.V.",
  alternateName: "Foris",
  url: "https://vdmforis.com",
  logo: "https://vdmforis.com/icon",
  image: "https://vdmforis.com/opengraph-image",
  description:
    "Nederlandstalige aankoopbegeleiding aan de Costa del Azahar. Onafhankelijk, vaste prijs, ter plaatse — voor Nederlanders die een huis kopen in Castellón en omgeving.",
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
      telephone: "+31-6-14967704",
      availableLanguage: ["nl", "es", "en"],
      areaServed: "ES",
    },
  ],
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Castellón",
    },
    {
      "@type": "AdministrativeArea",
      name: "Comunitat Valenciana",
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
      value: "N0868403052",
    },
  ],
  knowsLanguage: ["nl", "es", "en"],
  sameAs: [],
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
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
    </html>
  );
}
