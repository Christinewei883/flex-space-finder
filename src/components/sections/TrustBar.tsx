const LOGOS = [
  "SHEIN",
  "Temu",
  "Amazon Sellers",
  "FBA Network",
  "DTC Brands",
  "Fortune 500",
] as const;

export function TrustBar() {
  return (
    <section
      aria-label="Trusted by customers"
      className="relative border-b border-border bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-12">
        <div className="grid items-center gap-y-8 gap-x-12 lg:grid-cols-[auto_1fr]">
          <div className="font-display text-[10px] font-bold uppercase tracking-[0.28em] text-navy/55 lg:max-w-[160px] lg:border-r lg:border-border lg:pr-8 lg:text-[11px]">
            Trusted by{" "}
            <span className="text-navy">2,000+ operators</span> who move fast
          </div>

          <ul
            className="flex flex-wrap items-center gap-x-8 gap-y-4 sm:gap-x-12 lg:justify-between"
            role="list"
          >
            {LOGOS.map((name) => (
              <li
                key={name}
                className="font-display text-base font-extrabold uppercase tracking-[0.2em] text-navy/35 transition-colors hover:text-navy/70 sm:text-lg"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
