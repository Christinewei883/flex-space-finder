import { ArrowRight, Phone, Clock, Tag, FileCheck } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { STATS } from "@/data/site";
import heroWarehouse from "@/assets/space-warehouse-1.webp";

const HERO_BULLETS = [
  { icon: Clock, title: "Move in within", line: "48 hours" },
  { icon: Tag, title: "All-in pricing,", line: "no surprises" },
  { icon: FileCheck, title: "No lease.", line: "Total flexibility." },
] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark pt-16">
      <img
        src={heroWarehouse}
        alt=""
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-navy-dark/40 lg:from-navy-dark lg:via-navy-dark/85 lg:to-navy-dark/20"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(106,201,116,0.12),_transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-16 lg:px-12 lg:py-20">
        <div className="text-white">
          <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
              Live Now · 12 spaces leased this week
            </span>
          </div>

          <h1 className="animate-fade-up mt-6 font-display text-4xl font-black uppercase leading-[1.02] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            On-Demand Warehouse Space.
            <br />
            <span className="text-green-light">On Your Terms.</span>
          </h1>

          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            No long-term lease. Expand or downsize anytime.
          </p>

          {/* Feature bullets */}
          <ul className="animate-fade-up mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {HERO_BULLETS.map(({ icon: Icon, title, line }) => (
              <li key={title} className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-green/40 bg-green/10 text-green-light">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="text-sm leading-snug text-white/85">
                  {title}
                  <br />
                  <span className="font-semibold text-white">{line}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#search"
              className="group inline-flex items-center gap-2 rounded-md bg-green px-7 py-4 font-display text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_-12px_rgba(106,201,116,0.55)] transition-all hover:-translate-y-0.5 hover:bg-green-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-dark"
            >
              Get Available Spaces
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:+18003386369"
              className="group inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.18em] text-white/90 transition-colors hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-colors group-hover:border-white/40 group-hover:bg-white/10">
                <Phone className="h-4 w-4" />
              </span>
              Talk to an Expert
            </a>
          </div>

          {/* Inline stats row */}
          <div className="animate-fade-up mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-black leading-none text-green-light sm:text-[2rem]">
                  {s.n}
                </div>
                <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="search" className="animate-fade-up lg:pl-4">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
