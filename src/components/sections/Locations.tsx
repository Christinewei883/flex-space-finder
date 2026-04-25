import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { LOCATIONS } from "@/data/locations";
import { cn } from "@/lib/utils";

const TAG_STYLES: Record<string, string> = {
  Popular: "bg-green/10 text-green-dark ring-1 ring-inset ring-green/30",
  New: "bg-navy text-white",
  "Port-adjacent": "bg-white/95 text-navy ring-1 ring-inset ring-navy/15",
};

export function Locations() {
  const railRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateButtons();
    const el = railRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scrollBy = (direction: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const cardWidth = 260 + 16; // card width + gap
    el.scrollBy({ left: direction * cardWidth * 2, behavior: "smooth" });
  };

  return (
    <section id="locations" className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionEyebrow>Locations</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-navy md:text-4xl">
              50 locations · 22 states
            </h2>
            <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-navy/60">
              Major U.S. logistics corridors — port-adjacent, near interstates, ready to operate.
            </p>
          </div>
          <div className="flex items-center gap-4">
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
                onClick={() => scrollBy(-1)}
                disabled={!canPrev}
                aria-label="Scroll locations left"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-all",
                  "hover:border-navy hover:bg-navy hover:text-white",
                  "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-navy/15 disabled:hover:bg-white disabled:hover:text-navy",
                )}
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                disabled={!canNext}
                aria-label="Scroll locations right"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-all",
                  "hover:border-navy hover:bg-navy hover:text-white",
                  "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-navy/15 disabled:hover:bg-white disabled:hover:text-navy",
                )}
              >
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Edge fades */}
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent transition-opacity duration-200",
              canPrev ? "opacity-100" : "opacity-0",
            )}
          />
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent transition-opacity duration-200",
              canNext ? "opacity-100" : "opacity-0",
            )}
          />

          <div
            ref={railRef}
            className="-mx-6 overflow-x-auto px-6 lg:-mx-12 lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex snap-x snap-mandatory gap-4 pb-3">
              {LOCATIONS.map((l) => (
                <button
                  key={l.name}
                  className="group flex w-[260px] flex-shrink-0 snap-start flex-col text-left transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-black/5">
                    <img
                      src={l.img}
                      alt={`${l.name} warehouse facility`}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent"
                      aria-hidden
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-navy shadow-sm">
                      {l.state}
                    </span>
                    {l.tag && (
                      <span
                        className={cn(
                          "absolute right-3 top-3 rounded-full px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.18em] shadow-sm",
                          TAG_STYLES[l.tag],
                        )}
                      >
                        {l.tag}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 px-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-display text-base font-extrabold uppercase tracking-wide text-navy">
                        {l.name}
                      </div>
                      <ArrowRight
                        className="h-4 w-4 -translate-x-1 text-navy/30 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-green-dark group-hover:opacity-100"
                        aria-hidden
                      />
                    </div>
                    <div className="mt-0.5 text-[13px] text-navy/55">{l.address}</div>
                    <div className="mt-2 text-[12px] text-navy/45">{l.meta}</div>
                  </div>
                </button>
              ))}
              <a
                href="#search"
                className="group flex w-[260px] flex-shrink-0 snap-start flex-col text-left transition-transform hover:-translate-y-1"
              >
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-border bg-secondary transition-colors group-hover:border-navy/40 group-hover:bg-white">
                  <div className="text-center">
                    <div className="font-display text-3xl font-black text-navy">+38</div>
                    <div className="mt-1 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-navy/55">
                      More Locations
                    </div>
                  </div>
                </div>
                <div className="mt-3 px-1">
                  <div className="font-display text-base font-extrabold uppercase tracking-wide text-navy">
                    Browse all
                  </div>
                  <div className="mt-0.5 text-[13px] text-navy/55">
                    Across 22 states nationwide
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
