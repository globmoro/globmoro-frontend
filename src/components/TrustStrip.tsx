import { company } from "@/data/company";

const items = [
  "Import Europe documenté",
  "Stock Agadir — inspection sur site",
  "Vendu en l’état",
  `ICE ${company.ice}`,
] as const;

export function TrustStrip() {
  return (
    <div className="border-y border-[var(--line)] bg-[rgba(20,32,41,0.72)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-4 text-xs uppercase tracking-[0.14em] text-mist md:px-8">
        {items.map((item) => (
          <span key={item} className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-copper" aria-hidden />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
