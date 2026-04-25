import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SPACES } from "@/data/spaces";
import { cn } from "@/lib/utils";

const BADGE_STYLES: Record<string, string> = {
  "Most Popular": "bg-navy text-white",
  "New Format": "bg-white/95 text-navy ring-1 ring-inset ring-navy/15",
};

export function Spaces() {
  return (
    <section id="spaces" className="bg-secondary px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionEyebrow>Our Spaces</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-navy md:text-5xl">
              Move-in ready spaces.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-navy/60">
              Every facility is operational the day you sign — power on, doors open, dock plates
              ready.
            </p>
          </div>
          <a
            href="#search"
            className="inline-flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-[0.18em] text-navy transition-colors hover:text-green-dark"
          >
            Match my space
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPACES.map((s) => (
            <a
              key={s.title}
              href="#search"
              className={cn(
                "group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5",
                "transition-all duration-300",
                "hover:-translate-y-1.5 hover:ring-navy/15 hover:shadow-[0_24px_60px_-20px_rgba(15,23,42,0.25)]",
              )}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={900}
                  height={1125}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-navy-dark/90 via-navy-dark/35 to-transparent"
                  aria-hidden
                />

                <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-green-dark shadow-sm backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden /> Available
                  </div>
                  {s.badge && (
                    <div
                      className={cn(
                        "rounded-full px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.18em] shadow-sm",
                        BADGE_STYLES[s.badge],
                      )}
                    >
                      {s.badge}
                    </div>
                  )}
                </div>

                <div className="absolute inset-x-4 bottom-4">
                  <div className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white/85">
                    {s.range}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-extrabold uppercase leading-tight tracking-wide text-white">
                    {s.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-navy/50">
                  {s.startsAt}
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-navy/65">{s.text}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[12px] text-navy/75">
                      <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-green-dark" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between gap-2 border-t border-border pt-4">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-navy transition-colors group-hover:text-green-dark">
                    Tour this space
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full border border-navy/15 text-navy transition-all",
                      "group-hover:border-green group-hover:bg-green group-hover:text-white",
                    )}
                  >
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
