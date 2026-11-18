import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrustStrip } from "@/components/TrustStrip";
import { company, whatsappUrl } from "@/data/company";
import { machines, saleDisclaimer } from "@/data/machines";

export const metadata: Metadata = {
  title: "Stock",
  description:
    "Stock GLOBMORO Agadir — LINDE E20 PHL-02 2019 (230 000 MAD TTC) et TOYOTA 7FBEST15 2015 (150 000 MAD TTC). Vente en l’état, inspection libre.",
  alternates: { canonical: "/stock" },
};

export default function StockPage() {
  return (
    <>
      <div className="px-5 pb-8 pt-10 md:px-8 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.18em] text-copper">Stock</p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl">
            Deux chariots électriques disponibles à Agadir
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            Vente ferme B2B. {saleDisclaimer} Photos et specs ci-dessous ;
            décision après visite sur site.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappUrl(
                "Bonjour GLOBMORO, je souhaite des infos sur le stock Agadir.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp {company.whatsappDisplay}
            </a>
            <Link href="/contact" className="btn-ghost">
              Demande écrite
            </Link>
          </div>
        </div>
      </div>

      <TrustStrip />

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="space-y-10">
          {machines.map((machine) => (
            <Link
              key={machine.slug}
              href={`/stock/${machine.slug}`}
              className="group grid overflow-hidden border border-[var(--line)] transition hover:border-[rgba(200,121,58,0.45)] lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="relative min-h-[300px] lg:min-h-[400px]">
                <Image
                  src={machine.heroImage}
                  alt={`${machine.brand} ${machine.model}`}
                  fill
                  className="object-cover transition duration-[1.1s] ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
              <div className="flex flex-col justify-center bg-ink-soft/60 p-7 md:p-10">
                <p className="text-xs uppercase tracking-[0.16em] text-copper">
                  {machine.year} · {machine.capacityKg} kg · {machine.hours} ·{" "}
                  {machine.origin}
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl">
                  {machine.brand} {machine.model}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-mist md:text-base">
                  {machine.shortPitch}
                </p>
                <ul className="mt-5 space-y-1 text-sm text-steel">
                  <li>Mât {machine.mast} — {machine.liftMaxMm.toLocaleString("fr-FR")} mm</li>
                  <li>{machine.charger}</li>
                  <li>Chargeur inclus · inspection Agadir</li>
                </ul>
                <p className="mt-6 text-2xl text-copper-bright">{machine.priceLabel}</p>
                <span className="cta-underline mt-6 w-fit text-sm uppercase tracking-[0.14em] text-paper">
                  Voir la fiche complète
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
