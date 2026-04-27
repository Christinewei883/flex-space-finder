import { useMemo, useState } from "react";
import { ArrowRight, Clock, Tag, FileCheck, MapPin } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { LOCATIONS, type LocationRegion, type LocationStatus } from "@/data/locations";
import { cn } from "@/lib/utils";

const FILTERS: Array<"All Locations" | LocationRegion> = [
  "All Locations",
  "California",
  "Texas",
  "East Coast",
  "Midwest",
  "Port-Adjacent",
];

const STATUS_STYLES: Record<LocationStatus, string> = {
  "Leasing Fast": "bg-green text-white",
  "New": "bg-navy text-white",
  "New Availability": "bg-green text-white",
  "Almost Full": "bg-orange-500 text-white",
};

export function Locations() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All Locations");

  const filtered = useMemo(() => {
    if (active === "All Locations") return LOCATIONS;
    return LOCATIONS.filter((l) => l.regions.includes(active));
  }, [active]);

  const visible = filtered.slice(0, 5);

  return (
    <section id="locations" className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-3xl">
            <SectionEyebrow>Locations</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-navy md:text-5xl">
              50+ Locations Across 22 States.
              <br />
              <span className="text-green-dark">Find Available Space Near You.</span>
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-navy/60">
              Major U.S. logistics corridors — port-adjacent, near interstates, ready to operate.
            </p>
          </div>
          <div className="flex items-center gap-4 pt-10">
            <a
              href="#search"
              className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-navy transition-colors hover:text-green-dark"
            >
              Find one near me
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <div className="hidden gap-2 lg:flex">
              <button
                type="button"
                aria-label="Previous"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-all hover:border-navy hover:bg-navy hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button
                type="button"
                aria-label="Next"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-all hover:border-navy hover:bg-navy hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Filter chips */}
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-full border px-4 py-2 font-display text-sm font-semibold transition-all",
                  isActive
                    ? "border-green-dark bg-green/10 text-green-dark"
                    : "border-navy/15 bg-white text-navy hover:border-navy/40",
                )}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {visible.map((l) => (
            <div
              key={l.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={l.img}
                  alt={`${l.name} warehouse facility`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-navy shadow-sm">
                  {l.state}
                </span>
                {l.status && (
                  <span
                    className={cn(
                      "absolute right-3 top-3 rounded-full px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] shadow-sm whitespace-nowrap",
                      STATUS_STYLES[l.status],
                    )}
                  >
                    {l.status}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="font-display text-lg font-extrabold uppercase tracking-wide text-navy">
                  {l.name}
                </div>
                <div className="mt-1 text-[13px] text-navy/60">{l.address}</div>
                <div className="mt-1 text-[12px] text-navy/45">{l.meta}</div>

                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4">
                  <div>
                    <div className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-navy/50">
                      From
                    </div>
                    <div className="mt-0.5 font-display text-xl font-black text-green-dark">
                      ${l.priceFrom}
                      <span className="text-sm font-bold text-green-dark/80">/mo</span>
                    </div>
                    <div className="text-[10px] text-navy/50">All-in pricing</div>
                  </div>
                  <div>
                    <div className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-navy/50">
                      Available
                    </div>
                    <div className="mt-0.5 font-display text-xl font-black text-green-dark">
                      {l.available}
                    </div>
                    <div className="text-[10px] text-navy/50">spaces</div>
                  </div>
                </div>

                <a
                  href="#search"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-green px-4 py-3 font-display text-xs font-bold uppercase tracking-[0.16em] text-white transition-all hover:bg-green-dark"
                >
                  See Availability
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom features bar */}
        <div className="mt-8 grid grid-cols-1 gap-6 rounded-2xl bg-secondary px-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Clock, title: "Move in within", value: "48 hours" },
            { icon: Tag, title: "All-in pricing,", value: "no surprises" },
            { icon: FileCheck, title: "No long-term", value: "lease" },
            { icon: MapPin, title: "Port-adjacent &", value: "interstate access" },
          ].map(({ icon: Icon, title, value }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-green text-white">
                <Icon className="h-5 w-5" strokeWidth={2.25} />
              </div>
              <div className="text-[14px] leading-tight text-navy">
                <div className="text-navy/70">{title}</div>
                <div className="font-display font-bold">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
