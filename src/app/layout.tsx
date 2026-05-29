import type { Metadata } from "next";
import { Fraunces, Inter, Geist_Mono } from "next/font/google";
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
