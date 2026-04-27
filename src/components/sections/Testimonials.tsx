import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.max(1, TESTIMONIALS.length - perView + 1);
  const safeIndex = Math.min(index, totalPages - 1);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % totalPages);
    }, 4500);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [paused, totalPages]);

  const go = (i: number) => setIndex(((i % totalPages) + totalPages) % totalPages);

  return (
    <section className="relative overflow-hidden bg-secondary px-6 py-24 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionEyebrow>Tenant Stories</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-navy md:text-5xl">
              Trusted by operators &amp; founders.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-navy/60">
              From solo e-commerce sellers to Fortune 500 distribution teams.
            </p>
          </div>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex gap-5 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{
              transform: `translateX(calc(-${safeIndex} * (100% / ${perView} + 20px * ${(perView - 1) / perView})))`,
            }}
          >
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-xl border border-border bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-navy/15 hover:shadow-lg hover:shadow-navy/5"
                style={{
                  flex: `0 0 calc((100% - ${(perView - 1) * 20}px) / ${perView})`,
                }}
              >
                <div className="mb-4 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-green text-green" />
                  ))}
                </div>
                <blockquote className="text-[15px] leading-relaxed text-navy/80">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-sm font-extrabold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold uppercase tracking-wide text-navy">
                      {t.name}
                    </div>
                    <div className="text-xs text-navy/55">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === safeIndex ? "w-6 bg-navy" : "w-1.5 bg-navy/20 hover:bg-navy/40"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2.5">
            <button
              onClick={() => go(safeIndex - 1)}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 bg-white text-navy transition-all hover:border-navy hover:bg-navy hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => go(safeIndex + 1)}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 bg-white text-navy transition-all hover:border-navy hover:bg-navy hover:text-white"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
