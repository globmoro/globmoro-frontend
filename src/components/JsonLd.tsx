import { company } from "@/data/company";
import { machines } from "@/data/machines";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: company.name,
    url: company.siteUrl,
    logo: `${company.siteUrl}/brand/globmoro-logo.png`,
    image: `${company.siteUrl}/brand/globmoro-logo.png`,
    email: company.email,
    telephone: company.tel,
    sameAs: [company.instagramUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bloc C N° 324, El Wifaq Bensergao",
      addressLocality: "Agadir",
      addressRegion: "Souss-Massa",
      addressCountry: "MA",
    },
    areaServed: "MA",
    description: company.activity,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductJsonLd({ slug }: { slug: string }) {
  const machine = machines.find((m) => m.slug === slug);
  if (!machine) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${machine.brand} ${machine.model}`,
    description: machine.metaDescription,
    brand: { "@type": "Brand", name: machine.brand },
    model: machine.model,
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
      seller: {
        "@type": "Organization",
        name: company.legalName,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
