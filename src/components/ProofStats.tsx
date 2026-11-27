import { proofStats } from "@/data/company";

export function ProofStats() {
  return (
    <section
      className="border-b border-[var(--line)] bg-paper-pure"
      aria-label="Chiffres clés GLOBMORO"
    >
      <div className="mx-auto grid max-w-6xl gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {proofStats.map((stat, index) => (
          <div
            key={stat.label}
            className={`border-[var(--line)] px-5 py-7 md:px-8 md:py-8 ${
              index > 0 ? "border-t sm:border-t-0 sm:border-l" : ""
            } ${index > 1 ? "lg:border-t-0" : ""} ${
              index === 2 ? "sm:border-t lg:border-t-0" : ""
            }`}
          >
            <p className="brand-mark text-4xl text-accent md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink">
              {stat.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-mist-bright">
              {stat.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
