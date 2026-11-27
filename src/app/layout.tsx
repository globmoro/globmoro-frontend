import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { company } from "@/data/company";
import { defaultDescription, defaultTitle, siteKeywords } from "@/data/seo";
import "./globals.css";

/** Self-hosted — no Google Fonts network fetch during `next build` (Docker/EasyPanel). */
const syne = localFont({
  src: "../fonts/Syne-Variable.ttf",
  variable: "--font-syne",
  weight: "500 800",
  display: "swap",
});

const figtree = localFont({
  src: [
    {
      path: "../fonts/Figtree-Variable.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Figtree-Italic-Variable.ttf",
      style: "italic",
    },
  ],
  variable: "--font-figtree",
  weight: "400 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: defaultTitle,
    template: `%s · ${company.name}`,
  },
  description: defaultDescription,
  applicationName: company.name,
  keywords: [...siteKeywords],
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  category: "business",
  alternates: {
    canonical: "/",
    languages: {
      "fr-MA": "/",
      fr: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    alternateLocale: ["fr_FR", "ar_MA"],
    url: company.siteUrl,
    siteName: company.legalName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/forklifts/linde/hero.jpg",
        width: 1200,
        height: 1600,
        alt: "Chariot élévateur électrique LINDE E20 — stock GLOBMORO Agadir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/forklifts/linde/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "MA-09",
    "geo.placename": "Agadir",
    "ICBM": "30.4278, -9.5981",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f5f6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-MA">
      <body className={`${syne.variable} ${figtree.variable} antialiased atmosphere`}>
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
