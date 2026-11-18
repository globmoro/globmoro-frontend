const items = [
  "Import Europe documenté",
  "Stock Agadir — inspection sur site",
  "Vendu en l’état",
  "GLOBMORO SARL · Agadir",
] as const;

export function TrustStrip() {
  return (
    <div
      className="trust-strip border-y border-[var(--line)]"
      role="region"
      aria-label="Points clés"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink md:px-8">
        {items.map((item) => (
          <span key={item} className="inline-flex items-center gap-2.5">
            <span className="trust-mark" aria-hidden />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
