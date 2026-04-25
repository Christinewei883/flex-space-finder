import cubeworkLogo from "@/assets/cubework-logo.svg";

const COLUMNS = [
  {
    title: "Spaces",
    links: [
      { label: "Warehouse", href: "#spaces" },
      { label: "Office & Coworking", href: "#spaces" },
      { label: "Truck & Yard", href: "#spaces" },
      { label: "Creative Studios", href: "#spaces" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "California", href: "#locations" },
      { label: "Texas", href: "#locations" },
      { label: "Georgia", href: "#locations" },
      { label: "All 50 Locations", href: "#locations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#industries" },
      { label: "Industries We Serve", href: "#industries" },
      { label: "Press", href: "mailto:press@cubework.com" },
      { label: "Contact", href: "tel:+18003386369" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Find a Space", href: "#search" },
      { label: "Pricing", href: "#pricing" },
      { label: "Talk to an Expert", href: "tel:+18003386369" },
      { label: "Schedule a Tour", href: "#search" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-navy-dark px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
          <div>
            <img
              src={cubeworkLogo}
              alt="Cubework"
              className="h-7 w-auto"
              width={172}
              height={28}
            />
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              Flexible warehouse, office, parking, and yard space across 50+ locations in 22 states.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-green-light">
              <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden />
              Move in this week
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                  {col.title}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-white/55 transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} Cubework. All rights reserved.
          </div>
          <a
            href="tel:+18003386369"
            className="font-display text-base font-bold tracking-wide text-white transition-colors hover:text-green-light"
          >
            800-338-6369
          </a>
        </div>
      </div>
    </footer>
  );
}
