import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { TrustStrip } from "@/components/TrustStrip";
import { company, whatsappUrl } from "@/data/company";
import { guides, guidesIndex } from "@/data/guides";

export const metadata: Metadata = {
  title: guidesIndex.title,
  description: guidesIndex.description,
  alternates: { canonical: guidesIndex.path },
  openGraph: {
    title: `${guidesIndex.title} · ${company.name}`,
    description: guidesIndex.description,
    url: guidesIndex.path,
    locale: "fr_MA",
  },
};

export default function GuidesIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Guides", path: guidesIndex.path },
        ]}
      />

      <div className="px-5 pb-8 pt-10 md:px-8 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">Guides · Manutention</p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl">
            {guidesIndex.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-bright md:text-lg">
            Des guides pratiques pour cadres et acheteurs B2B à Agadir et au
            Maroc — capacité, énergie, occasion, location. Pas de prix inventés,
            pas de stock fantôme.
          </p>
        </div>
      </div>

      <TrustStrip />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <ul className="grid gap-0 border border-[var(--line)]">
          {guides.map((guide, index) => (
            <li
              key={guide.slug}
              className={`border-[var(--line)] bg-paper-pure p-7 md:p-9 ${
                index > 0 ? "border-t" : ""
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {guide.kicker}
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl">
                <Link
                  href={`/guides/${guide.slug}`}
                  className="cta-underline"
                >
                  {guide.title}
                </Link>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist-bright md:text-base">
                {guide.intro[0]}
              </p>
              <Link
                href={`/guides/${guide.slug}`}
                className="cta-underline mt-6 inline-block text-sm font-semibold uppercase tracking-[0.14em]"
              >
                Lire le guide
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/stock" className="btn-primary">
            Voir le stock Agadir
          </Link>
          <Link href="/chariot-elevateur-agadir" className="btn-ghost">
            Chariot élévateur Agadir
          </Link>
          <a
            href={whatsappUrl(
              "Bonjour GLOBMORO, j’ai lu vos guides — je cherche un chariot élévateur pour mon activité (je précise capacité / hauteur / ville).",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            WhatsApp {company.whatsappDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
