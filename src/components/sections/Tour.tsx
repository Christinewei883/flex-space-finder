import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TOUR } from "@/data/tour";

export function Tour() {
  const total = String(TOUR.length).padStart(2, "0");

  return (
    <section className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionEyebrow>Tour Our Spaces</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-navy md:text-5xl">
              See exactly what you're moving into.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy/60">
              No staged renderings. These are the actual buildings, doors, racks, and yards waiting
              for your team.
            </p>
          </div>
          <div className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-navy/45">
            {total} chapters · 4 min read
          </div>
        </div>

        <div className="space-y-24">
          {TOUR.map((item, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={item.title}
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy/15 ring-1 ring-black/5">
                    <img
                      src={item.img}
                      alt={item.title}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div
                    className="absolute -bottom-5 -left-5 hidden h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-navy text-white shadow-xl shadow-navy/25 md:flex"
                    aria-hidden
                  >
                    <div className="text-center leading-none">
                      <div className="font-display text-2xl font-black tracking-tight">{num}</div>
                      <div className="mt-1 font-display text-[8px] font-bold uppercase tracking-[0.22em] text-white/55">
                        / {total}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.28em] text-navy/40">
                      {num} / {total}
                    </span>
                    <span className="h-px w-8 bg-navy/15" aria-hidden />
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-navy/55">
                      {item.eyebrow}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-black uppercase leading-tight tracking-tight text-navy md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-navy/70">{item.text}</p>
                  <ul className="mt-6 space-y-3">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15px] text-navy/80">
                        <span
                          className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green/15"
                          aria-hidden
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-green-dark" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="#search"
            className="inline-flex items-center gap-2 rounded-md bg-navy px-7 py-3.5 font-display text-sm font-extrabold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:bg-navy-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/50 focus-visible:ring-offset-2"
          >
            Schedule a Tour
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
