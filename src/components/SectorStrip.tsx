import { clientSectors } from "@/data/company";

export function SectorStrip() {
  return (
    <div
      className="border-b border-[var(--line)] bg-surface/90"
      role="region"
      aria-label="Secteurs clients"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:gap-6 md:px-8">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-steel-bright">
          Secteurs
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink">
          {clientSectors.map((sector) => (
            <li key={sector} className="inline-flex items-center gap-2">
              <span className="trust-mark" aria-hidden />
              {sector}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
