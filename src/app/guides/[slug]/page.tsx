import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  GuideFaqJsonLd,
} from "@/components/JsonLd";
import { TrustStrip } from "@/components/TrustStrip";
import { company, whatsappUrl } from "@/data/company";
import { getGuide, guides } from "@/data/guides";
import { machines } from "@/data/machines";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Guide introuvable" };

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: [...guide.keywords],
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      type: "article",
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `/guides/${guide.slug}`,
      locale: "fr_MA",
      images: [
        {
          url: "/forklifts/linde/hero.jpg",
          alt: "Chariot élévateur électrique — guide GLOBMORO Agadir",
        },
      ],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const path = `/guides/${guide.slug}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: guide.title, path },
        ]}
      />
      <ArticleJsonLd
        title={guide.title}
        description={guide.metaDescription}
        path={path}
        dateModified={`${guide.updatedLabel}-01`}
      />
      <GuideFaqJsonLd items={guide.faq} />

      <div className="px-5 pb-8 pt-10 md:px-8 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/guides"
            className="cta-underline text-xs uppercase tracking-[0.16em] text-mist-bright"
          >
            ← Tous les guides
          </Link>
          <p className="section-kicker mt-6">{guide.kicker}</p>
          <h1 className="mt-4 max-w-4xl text-4xl md:text-5xl">{guide.h1}</h1>
          <p className="mt-4 text-sm text-steel-bright">
            Mis à jour {guide.updatedLabel} · {company.legalName} · Agadir
          </p>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-mist-bright md:text-lg">
            {guide.intro.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/stock" className="btn-primary">
              Voir le stock
            </Link>
            <a
              href={whatsappUrl(
                "Bonjour GLOBMORO — checklist guide : charge kg / hauteur mm / indoor-outdoor / achat ou location / ville :",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp checklist
            </a>
            <Link href="/contact" className="btn-ghost">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>

      <TrustStrip />

      <article className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <nav
          aria-label="Sommaire"
          className="mb-12 border border-[var(--line)] bg-paper-pure p-6 md:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-bright">
            Sommaire
          </p>
          <ol className="mt-4 grid gap-2 sm:grid-cols-2">
            {guide.sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="cta-underline text-sm text-ink"
                >
                  {index + 1}. {section.title.replace(/^\d+\.\s*/, "")}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-14">
          {guide.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
            >
              <h2
                id={`${section.id}-heading`}
                className="text-2xl text-ink md:text-3xl"
              >
                {section.title}
              </h2>
              <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-mist-bright">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 56)}>{p}</p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-5 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-mist-bright md:text-base">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <section
          className="mt-16 border-t border-[var(--line)] pt-12"
          aria-labelledby="stock-match-heading"
        >
          <h2 id="stock-match-heading" className="text-2xl md:text-3xl">
            Correspondance avec le stock GLOBMORO Agadir
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-mist-bright">
            Machines réellement disponibles à l’inspection (El Wifaq) — pas un
            catalogue théorique.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {machines.map((machine) => (
              <li
                key={machine.slug}
                className="border border-[var(--line)] bg-paper-pure p-6"
              >
                <h3 className="text-xl text-ink">
                  {machine.brand} {machine.model}
                </h3>
                <p className="mt-2 text-sm text-mist-bright">
                  {machine.capacityKg.toLocaleString("fr-FR")} kg · levée{" "}
                  {machine.liftMaxMm.toLocaleString("fr-FR")} mm ·{" "}
                  {machine.hours} · {machine.priceLabel}
                </p>
                <p className="mt-3 text-sm text-mist-bright">
                  {machine.shortPitch}
                </p>
                <Link
                  href={`/stock/${machine.slug}`}
                  className="cta-underline mt-4 inline-block text-sm font-semibold uppercase tracking-[0.14em]"
                >
                  Fiche complète
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="mt-16 border-t border-[var(--line)] pt-12"
          aria-labelledby="guide-faq-heading"
        >
          <h2 id="guide-faq-heading" className="text-2xl md:text-3xl">
            FAQ — choisir un chariot élévateur
          </h2>
          <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {guide.faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none text-lg font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span
                      className="mt-1 text-accent transition group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist-bright">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 industrial-panel border border-[var(--line)] p-7 md:p-10">
          <h2 className="text-2xl md:text-3xl">Passer à l’action</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist-bright md:text-base">
            {guide.ctaNote}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappUrl(
                "Bonjour GLOBMORO — checklist : charge kg / hauteur mm / indoor-outdoor / achat ou location / ville :",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp {company.whatsappDisplay}
            </a>
            <Link href="/contact" className="btn-ghost">
              Formulaire devis
            </Link>
            <Link href="/location-chariot-elevateur-agadir" className="btn-ghost">
              Location Agadir
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
