import { ArrowRight, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-navy-dark px-6 py-28 lg:px-12"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(106,201,116,0.18),_transparent_60%)]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
          </span>
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
            Available this week
          </span>
        </div>

        <h2 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-white text-balance md:text-6xl">
          Stop negotiating leases.{" "}
          <span className="text-green-light">Start moving freight.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">
          Tour a space this week. Sign a flexible agreement. Move in by Friday. The opposite of
          traditional industrial real estate.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#search"
            className="inline-flex items-center gap-2 rounded-md bg-green px-9 py-4 font-display text-base font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_-12px_rgba(106,201,116,0.6)] transition-all hover:-translate-y-0.5 hover:bg-green-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-dark"
          >
            Find a Space
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+18003386369"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-9 py-4 font-display text-base font-bold uppercase tracking-[0.18em] text-white transition-all hover:border-white hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> 800-338-6369
          </a>
        </div>
      </div>
    </section>
  );
}
