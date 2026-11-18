import type { Metadata } from "next";
import Link from "next/link";
import { TrustStrip } from "@/components/TrustStrip";
import { company, services, whatsappUrl } from "@/data/company";

export const metadata: Metadata = {
  title: "Nos services",
  description: `Services GLOBMORO Agadir — vente, location, import Europe, sourcing, pièces et entretien. Prix sur demande. Pas de garanties inventées.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <div className="px-5 pb-8 pt-10 md:px-8 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">Nos services</p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl">
            Accompagnement B2B autour du stock Agadir
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-bright md:text-lg">
            {company.legalName} priorise la vente de chariots électriques
            d’occasion inspectables sur site. Les services ci-dessous sont
            proposés selon disponibilité et termes convenus — sans SLA inventé.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Demander un devis
            </Link>
            <a
              href={whatsappUrl(
                "Bonjour GLOBMORO, je souhaite des informations sur vos services.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <TrustStrip />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <ul className="grid gap-0 border border-[var(--line)] md:grid-cols-2">
          {services.map((service, index) => (
            <li
              key={service.slug}
              id={service.slug}
              className={`border-[var(--line)] bg-paper-pure/60 p-7 md:p-9 ${
                index > 0 ? "border-t md:border-t-0" : ""
              } ${index % 2 === 1 ? "md:border-l" : ""} ${
                index > 1 ? "md:border-t" : ""
              }`}
            >
              <h2 className="text-2xl text-ink">{service.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-mist-bright md:text-base">
                {service.text}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-sm text-mist">
          Pas de garantie constructeur incluse sur les machines vendues.
          Entretien / SAV uniquement selon termes convenus. Prix sur demande.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/stock" className="btn-primary">
            Voir nos machines
          </Link>
          <Link href="/contact" className="btn-ghost">
            Recevoir une offre
          </Link>
        </div>
      </section>
    </>
  );
}
