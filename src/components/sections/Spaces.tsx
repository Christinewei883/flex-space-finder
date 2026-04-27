import { ArrowRight, CheckCircle2, Zap, Tag, ShieldCheck, MapPin } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SPACES } from "@/data/spaces";
import { cn } from "@/lib/utils";

const BADGE_STYLES: Record<string, string> = {
  "Most Popular": "bg-navy text-white",
  "New Format": "bg-white/95 text-navy ring-1 ring-inset ring-navy/15",
};

const TRUST_ITEMS = [
  { icon: Zap, lines: ["Move in within", "48 hours"] },
  { icon: Tag, lines: ["All-in pricing,", "no surprises"] },
  { icon: ShieldCheck, lines: ["No long-term", "lease"] },
  { icon: MapPin, lines: ["50 locations", "across 22 states"] },
];

export function Spaces() {
  return (
    <section id="spaces" className="bg-secondary px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionEyebrow>Our Spaces</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-navy md:text-5xl">
              Find Your Space. Start Operating Immediately.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-navy/60">
              Every facility is operational the day you sign — power on, doors open, dock plates
              ready.
            </p>
          </div>
          <a
            href="#search"
            className="inline-flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-[0.18em] text-green-dark transition-colors hover:text-green"
          >
            Match my space
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SPACES.map((s) => (
            <div
              key={s.title}
              className={cn(
                "group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5",
                "transition-all duration-300",
                "hover:-translate-y-1 hover:ring-navy/15 hover:shadow-[0_24px_60px_-20px_rgba(15,23,42,0.25)]",
              )}
            >
              {/* Image */}
              <div className="relative aspect-[4/3.4] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-navy-dark/95 via-navy-dark/45 to-transparent"
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
                  <div className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                    {s.range}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-extrabold uppercase leading-tight tracking-wide text-white">
                    {s.title}
                  </h3>
                  <div className="mt-1 text-[12px] text-white/75">{s.category}</div>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                {/* Price + availability */}
                <div className="flex items-start justify-between gap-3 border-b border-border pb-4">
                  <div>
                    <div className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-navy/55">
                      From
                    </div>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="font-display text-3xl font-black leading-none text-green-dark">
                        {s.price}
                      </span>
                      <span className="text-[13px] font-medium text-navy/60">{s.priceUnit}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl font-black leading-none text-green-dark">
                      {s.available}
                    </div>
                    <div className="mt-1 font-display text-[10px] font-bold uppercase leading-tight tracking-[0.18em] text-navy/60">
                      Spaces<br />Available
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[13px] text-navy/75">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-dark" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href="#search"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-green px-4 py-3 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-green-dark"
                  >
                    See Available Spaces
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="#search"
                    className="inline-flex items-center justify-center gap-1.5 py-1 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-navy transition-colors hover:text-green-dark"
                  >
                    View Details
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-8 grid grid-cols-2 gap-6 rounded-2xl bg-white px-6 py-6 ring-1 ring-black/5 md:grid-cols-4 md:divide-x md:divide-border">
          {TRUST_ITEMS.map(({ icon: Icon, lines }, idx) => (
            <div
              key={lines.join(" ")}
              className={cn("flex items-center gap-3", idx > 0 && "md:pl-6")}
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-green text-white">
                <Icon className="h-5 w-5" strokeWidth={2.25} />
              </div>
              <div className="text-[13px] leading-tight text-navy">
                <div className="text-navy/65">{lines[0]}</div>
                <div className="font-display font-bold">{lines[1]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
