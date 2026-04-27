import { ArrowRight, Check, X, Clock, Calendar, Wrench, DollarSign, BarChart3, Shield, Star } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { WHY } from "@/data/site";

const COMPARE = [
  { icon: Clock, label: "Move-In Time", cube: "48 hours", trad: "3–6 months" },
  { icon: Calendar, label: "Lease Terms", cube: "Month-to-month", trad: "3–10 years" },
  { icon: Wrench, label: "Build-Out", cube: "None", trad: "Expensive & time-consuming" },
  { icon: DollarSign, label: "Pricing", cube: "All-in pricing", trad: "Hidden fees & NNN costs" },
  { icon: BarChart3, label: "Scalability", cube: "Instant", trad: "Difficult & slow" },
];

export function WhyCubework() {
  return (
    <section className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[420px_1fr]">
          {/* Left column */}
          <div>
            <SectionEyebrow>Why Cubework</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-navy md:text-5xl">
              Stop signing
              <br />
              long-term
              <br />
              <span className="text-green-dark">warehouse leases.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-navy/65">
              Traditional leasing is slow, expensive, and inflexible. Cubework gives you warehouse
              space that works when you do.
            </p>

            {/* Savings card */}
            <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-dark p-7 text-white ring-1 ring-white/10">
              <div
                className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-green/20 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <div className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-green-light">
                  Save
                </div>
                <div className="mt-1 font-display text-5xl font-black leading-none text-white">
                  $300K+
                </div>
                <div className="mt-2 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">
                  vs Traditional Leasing
                </div>

                <div className="my-5 h-px bg-white/10" />

                <ul className="space-y-2.5">
                  {["No build-out.", "No deposit.", "No NNN."].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-[15px] text-white">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <a
              href="#search"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-green-dark"
            >
              See Available Spaces
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#locations"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 font-display text-xs font-bold uppercase tracking-[0.22em] text-navy transition-colors hover:text-green-dark"
            >
              Compare Locations
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {/* Feature cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WHY.map(({ icon: Icon, title, text, badge }) => (
                <div
                  key={title}
                  className="flex flex-col rounded-2xl border border-border bg-white p-5 transition-all hover:-translate-y-1 hover:border-navy/15 hover:shadow-xl hover:shadow-navy/5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-green/10 text-green-dark">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-extrabold uppercase tracking-wide text-navy">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-navy/65">{text}</p>
                  <span className="mt-4 inline-block self-start rounded-md bg-green/10 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-green-dark">
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Comparison table */}
            <div className="overflow-hidden rounded-2xl border border-border bg-white">
              <div className="grid grid-cols-[1.4fr_1fr_1fr] items-center border-b border-border px-6 py-4">
                <div className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-navy">
                  Cubework vs. Traditional Leasing
                </div>
                <div className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-green-dark">
                  Cubework
                </div>
                <div className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-navy/60">
                  Traditional Leasing
                </div>
              </div>
              {COMPARE.map(({ icon: Icon, label, cube, trad }, i) => (
                <div
                  key={label}
                  className={`grid grid-cols-[1.4fr_1fr_1fr] items-center px-6 py-4 ${i !== COMPARE.length - 1 ? "border-b border-border" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-green-dark" />
                    <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-navy">
                      {label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-green/5 -my-4 py-4 px-2 -mx-2 rounded">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-navy">{cube}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-navy/10">
                      <X className="h-3 w-3 text-navy/60" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-navy/70">{trad}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Risk-Free banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-secondary px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-green/10 text-green-dark">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-base font-extrabold text-navy">
                    Risk-Free. Business-First.
                  </div>
                  <div className="text-[13px] text-navy/65">
                    No long-term commitment. No headaches. Just flexible space that fuels your growth.
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-0.5 text-green-dark">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="mt-1 text-[12px] text-navy/65">Trusted by 2,000+ Businesses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
