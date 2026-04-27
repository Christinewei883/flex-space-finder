import { ArrowRight, Clock, Shield, Star, Tag, FileCheck } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { WHY } from "@/data/site";

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
