import { company, faqItems } from "@/data/company";
import { machines } from "@/data/machines";
import { seoFaqExtra, serviceAreas } from "@/data/seo";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** LocalBusiness + Organization — stronger local pack signals than Organization alone. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    "@id": `${company.siteUrl}/#business`,
    name: company.legalName,
    alternateName: [company.name, "Globmoro Agadir"],
    url: company.siteUrl,
    logo: `${company.siteUrl}/brand/globmoro-logo.png`,
    image: [
      `${company.siteUrl}/brand/globmoro-logo.png`,
      `${company.siteUrl}/forklifts/linde/hero.jpg`,
      `${company.siteUrl}/forklifts/toyota/hero.jpg`,
    ],
    email: company.email,
    telephone: [company.tel, company.whatsapp],
    sameAs: [company.instagramUrl],
    foundingDate: company.foundedLabel,
    priceRange: "Sur devis",
    currenciesAccepted: "MAD",
    paymentAccepted: "Virement bancaire",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bloc C N° 324, El Wifaq Bensergao",
      addressLocality: "Agadir",
      addressRegion: "Souss-Massa",
      postalCode: "80000",
      addressCountry: "MA",
    },
    areaServed: serviceAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
    description: company.activity,
    knowsAbout: [
      "chariot élévateur électrique",
      "chariot élévateur occasion",
      "location chariot élévateur",
      "manutention Agadir",
      "LINDE",
      "TOYOTA",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Stock chariots élévateurs électriques Agadir",
      itemListElement: machines.map((machine, index) => ({
        "@type": "OfferCatalog",
        name: `${machine.brand} ${machine.model}`,
        url: `${company.siteUrl}/stock/${machine.slug}`,
        position: index + 1,
      })),
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: company.tel,
        email: company.email,
        areaServed: "MA",
        availableLanguage: ["fr", "ar"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: company.whatsapp,
        contactOption: "WhatsApp",
        areaServed: "MA",
        availableLanguage: ["fr", "ar"],
      },
    ],
  };

  return <JsonLdScript data={data} />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${company.siteUrl}/#website`,
    url: company.siteUrl,
    name: company.legalName,
    alternateName: company.name,
    inLanguage: "fr-MA",
    publisher: { "@id": `${company.siteUrl}/#business` },
  };

  return <JsonLdScript data={data} />;
}

export function FaqJsonLd() {
  const allFaq = [...faqItems, ...seoFaqExtra];
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return <JsonLdScript data={data} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${company.siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };

  return <JsonLdScript data={data} />;
}

export function ProductJsonLd({ slug }: { slug: string }) {
  const machine = machines.find((m) => m.slug === slug);
  if (!machine) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Chariot élévateur électrique ${machine.brand} ${machine.model}`,
    description: machine.metaDescription,
    brand: { "@type": "Brand", name: machine.brand },
    model: machine.model,
    category: "Chariot élévateur électrique",
    productionDate: String(machine.year),
    sku: machine.productCode,
    ...(machine.serial ? { serialNumber: machine.serial } : {}),
    image: machine.photos.map((p) => `${company.siteUrl}${p.src}`),
    offers: {
      "@type": "Offer",
      url: `${company.siteUrl}/stock/${machine.slug}`,
      priceCurrency: "MAD",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/UsedCondition",
      businessFunction: "http://purl.org/goodrelations/v1#Sell",
      areaServed: {
        "@type": "Place",
        name: "Agadir, Souss-Massa, Maroc",
      },
      seller: {
        "@type": "Organization",
        name: company.legalName,
        url: company.siteUrl,
      },
    },
  };

  return <JsonLdScript data={data} />;
}

export function GuideFaqJsonLd({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return <JsonLdScript data={data} />;
}

export function ArticleJsonLd({
  title,
  description,
  path,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  dateModified: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    inLanguage: "fr-MA",
    dateModified,
    author: {
      "@type": "Organization",
      name: company.legalName,
      url: company.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: company.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${company.siteUrl}/brand/globmoro-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${company.siteUrl}${path}`,
    },
    about: [
      "chariot élévateur",
      "chariot élévateur électrique",
      "manutention Agadir",
    ],
  };

  return <JsonLdScript data={data} />;
}
