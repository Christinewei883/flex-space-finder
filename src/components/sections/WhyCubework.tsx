import { ArrowRight, Check, X, Clock, Calendar, Wrench, DollarSign, BarChart3, Shield, Star, PiggyBank, Tag, FileCheck } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { WHY } from "@/data/site";

const COMPARE = [
  { icon: Clock, label: "Move-In Time", cube: "48 hours", trad: "3–6 months" },
  { icon: Calendar, label: "Lease Terms", cube: "Month-to-month", trad: "3–10 years" },
  { icon: Wrench, label: "Build-Out", cube: "None", trad: "Expensive & time-consuming" },
  { icon: DollarSign, label: "Pricing", cube: "All-in pricing", trad: "Hidden fees & NNN costs" },
  { icon: BarChart3, label: "Scalability", cube: "Instant", trad: "Difficult & slow" },
];

const TRUST_BULLETS = [
  { icon: Clock, lines: ["Move in within", "48 hours"] },
  { icon: Tag, lines: ["All-in pricing,", "no surprises"] },
  { icon: FileCheck, lines: ["No long-term", "lease"] },
];

export function WhyCubework() {
  return (
    <section className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        {/* Top row: heading + 2x2 feature cards */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Heading column */}
          <div>
            <SectionEyebrow>Why Cubework</SectionEyebrow>
            <h2 className="mt-3 font-display text-5xl font-black leading-[0.95] tracking-tight text-navy md:text-6xl">
              Stop Signing
              <br />
              Long-Term
              <br />
              <span className="text-green-dark">Warehouse Leases.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-navy/65">
              Traditional leasing is slow, expensive, and inflexible. Cubework gives you warehouse
              space that works when you do.
            </p>

            <a
              href="#search"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-green px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-green-dark"
            >
              See Available Spaces
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
              {TRUST_BULLETS.map(({ icon: Icon, lines }) => (
                <div key={lines.join(" ")} className="flex items-center gap-2.5">
                  <Icon className="h-5 w-5 text-green-dark" />
                  <div className="text-[12px] leading-tight text-navy">
                    <div className="text-navy/65">{lines[0]}</div>
                    <div className="font-display font-bold">{lines[1]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2x2 feature cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {WHY.map(({ icon: Icon, title, text, badge }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-navy/15 hover:shadow-xl hover:shadow-navy/5"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-green/10 text-green-dark">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-navy">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-navy/65">{text}</p>
                <span className="mt-5 inline-block self-start rounded-md bg-green/10 px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-green-dark">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div className="overflow-hidden rounded-2xl border border-border bg-white">
          <div className="grid grid-cols-[1.4fr_1fr_1fr]">
            <div className="px-6 py-5 font-display text-sm font-extrabold uppercase tracking-[0.14em] text-green-dark">
              Cubework vs. <br className="hidden sm:block" />Traditional Leasing
            </div>
            <div className="bg-navy px-6 py-5 text-center font-display text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Cubework
            </div>
            <div className="px-6 py-5 text-center font-display text-sm font-extrabold uppercase tracking-[0.18em] text-navy/70">
              Traditional Leasing
            </div>
          </div>
          {COMPARE.map(({ icon: Icon, label, cube, trad }) => (
            <div
              key={label}
              className="grid grid-cols-[1.4fr_1fr_1fr] border-t border-border"
            >
              <div className="flex items-center gap-3 px-6 py-5">
                <Icon className="h-4 w-4 text-green-dark" />
                <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-navy">
                  {label}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-green/5 px-6 py-5">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green">
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-navy">{cube}</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-5">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-red-400 text-red-500">
                  <X className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm text-navy/70">{trad}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Savings card */}
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-dark text-white">
          <div className="grid grid-cols-1 gap-6 p-8 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:p-10">
            <div>
              <div className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-green-light">
                Average Savings
              </div>
              <div className="mt-2 font-display text-6xl font-black leading-none text-white md:text-7xl">
                $300K+
              </div>
              <div className="mt-3 font-display text-[12px] font-bold uppercase tracking-[0.22em] text-green-light">
                vs Traditional Leasing
              </div>
              <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/75">
                No build-out. No deposit. No NNN.
                <br />
                More savings. More flexibility. More cash for growth.
              </p>
            </div>

            {/* Bar chart */}
            <div className="flex items-end justify-center gap-8 lg:gap-12">
              <div className="flex flex-col items-center">
                <div className="font-display text-sm font-bold text-white/80">$300K+</div>
                <div className="mt-2 h-40 w-20 rounded-t-md bg-white/30 md:h-48 md:w-24" />
                <div className="mt-3 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                  Traditional<br />Leasing
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-display text-sm font-bold text-green-light">$0</div>
                <div className="mt-2 h-12 w-20 rounded-t-md bg-green md:w-24" />
                <div className="mt-3 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-green-light">
                  Cubework
                </div>
              </div>
              <div className="hidden flex-col items-center self-center md:flex">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green/15 text-green-light">
                  <PiggyBank className="h-8 w-8" />
                </div>
                <div className="mt-3 max-w-[140px] text-center text-[12px] leading-tight text-white">
                  <span className="font-display font-bold">Save $300K+</span>
                  <div className="text-white/70">in upfront and ongoing costs.</div>
                </div>
              </div>
            </div>
          </div>
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
    </section>
  );
}
