import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { company } from "@/data/company";
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

const description =
  "GLOBMORO SARL — chariots élévateurs électriques d’occasion à Agadir. Stock LINDE E20 et TOYOTA 7FBEST15. Import Europe documenté, inspection sur site, vendu en l’état.";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.name} — Chariots élévateurs Agadir`,
    template: `%s · ${company.name}`,
  },
  description,
  applicationName: company.name,
  keywords: [
    "chariot élévateur",
    "forklift",
    "Agadir",
    "LINDE E20",
    "TOYOTA 7FBEST15",
    "GLOBMORO",
    "manutention Maroc",
    "chariot électrique occasion",
  ],
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: company.siteUrl,
    siteName: company.legalName,
    title: `${company.name} — Chariots élévateurs Agadir`,
    description,
    images: [
      {
        url: "/forklifts/linde/hero.jpg",
        width: 1200,
        height: 1600,
        alt: "LINDE E20 — stock GLOBMORO Agadir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — Chariots élévateurs Agadir`,
    description,
    images: ["/forklifts/linde/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
    <html lang="fr">
      <body className={`${syne.variable} ${figtree.variable} antialiased atmosphere`}>
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <OrganizationJsonLd />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
