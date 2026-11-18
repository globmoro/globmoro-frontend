import { MachineGallery } from "@/components/MachineGallery";
import { MachineInterestCtas } from "@/components/MachineInterestCtas";
import { ProductJsonLd } from "@/components/JsonLd";
import { company } from "@/data/company";
import { Machine, saleDisclaimer, saleTerms } from "@/data/machines";

export function MachineDetail({ machine }: { machine: Machine }) {
  return (
    <article>
      <ProductJsonLd slug={machine.slug} />

      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <MachineGallery photos={machine.photos} />

        <div>
          <p className="section-kicker">Stock Agadir · n° {machine.productCode}</p>
          <h1 className="mt-3 text-4xl leading-none text-ink md:text-5xl">
            {machine.brand}{" "}
            <span className="text-slate">{machine.model}</span>
          </h1>
          <p className="mt-4 text-lg text-mist-bright">{machine.shortPitch}</p>
          <p className="price-plate mt-6 inline-block text-2xl tracking-tight">
            {machine.priceLabel}
          </p>
          <p className="mt-3 text-sm text-mist">
            {saleDisclaimer} Achat, location ou location avec option d’achat —
            conditions sur devis.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-steel">
                Année
              </dt>
              <dd className="mt-1 text-ink">{machine.year}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-steel">
                Heures
              </dt>
              <dd className="mt-1 text-ink">{machine.hours}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-steel">
                Capacité
              </dt>
              <dd className="mt-1 text-ink">
                {machine.capacityKg.toLocaleString("fr-FR")} kg
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-steel">
                Levée
              </dt>
              <dd className="mt-1 text-ink">
                {machine.liftMaxMm.toLocaleString("fr-FR")} mm
              </dd>
            </div>
          </dl>

          <div className="mt-8">
            <MachineInterestCtas
              machine={machine}
              showTel
              tel={company.tel}
            />
          </div>
        </div>
      </div>

      <section className="mt-16 border-t border-[var(--line)] pt-12">
        <h2 className="text-2xl text-ink md:text-3xl">Caractéristiques</h2>
        <p className="mt-3 max-w-2xl text-sm text-mist-bright">
          Specs issues des documents d’achat / fiche propriétaire. Ce qui n’est
          pas prouvé n’est pas affiché.
        </p>
        <dl className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {[
            ["Année", String(machine.year)],
            ["Origine", machine.origin],
            ["Capacité", `${machine.capacityKg.toLocaleString("fr-FR")} kg`],
            ["Mât", machine.mast],
            ["Levée max", `${machine.liftMaxMm.toLocaleString("fr-FR")} mm`],
            ["Mât baissé", `${machine.mastLoweredMm.toLocaleString("fr-FR")} mm`],
            ["Free lift", `${machine.freeLiftMm.toLocaleString("fr-FR")} mm`],
            ["Fourches", `${machine.forksMm.toLocaleString("fr-FR")} mm`],
            ["Heures", `${machine.hours} (${machine.hoursNote})`],
            ["Batterie", machine.battery],
            ["État batterie", machine.batteryHealth],
            ["Chargeur", machine.charger],
            ["État", machine.condition],
            ...(machine.serial
              ? ([["N° de série", machine.serial]] as const)
              : []),
          ].map(([label, value]) => (
            <div key={label} className="border-b border-[var(--line)] pb-4">
              <dt className="text-xs uppercase tracking-[0.14em] text-steel">
                {label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl text-ink md:text-3xl">Équipements</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {machine.equipment.map((item) => (
            <li
              key={item}
              className="border-l-2 border-accent pl-4 text-sm text-mist-bright"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border border-[var(--line)] bg-paper-pure px-6 py-8 md:px-8">
        <h2 className="text-xl text-ink">Conditions commerciales</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-mist-bright">
          {saleTerms.map((term) => (
            <li key={term}>{term}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
