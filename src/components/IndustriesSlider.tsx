import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import indEcom from "@/assets/industry-ecom.jpg";
import indFba from "@/assets/industry-fba.jpg";
import indTruck from "@/assets/industry-truck.jpg";
import indMfg from "@/assets/industry-mfg.jpg";
import indPopup from "@/assets/industry-popup.jpg";
import indParcel from "@/assets/industry-parcel.jpg";

type Industry = {
  img: string;
  title: string;
  desc: string;
  uses: string[];
  price: string;
  unit: string;
};

const INDUSTRIES: Industry[] = [
  {
    img: indEcom,
    title: "E-Commerce & Fast Fashion",
    desc: "Perfect for pop-up events, returns processing, overflow inventory, and last-mile distribution.",
    uses: ["Pop-up event staging", "Returns processing", "Overflow inventory", "Flash sale fulfillment"],
    price: "$300",
    unit: "/mo",
  },
  {
    img: indFba,
    title: "Amazon FBA & D2C",
    desc: "Scale for peak season and beyond with prep, kitting, and buffer stock space — no penalties or long-term lease.",
    uses: ["FBA prep & labeling", "Q4 surge capacity", "Kitting & bundling", "Multi-location fulfillment"],
    price: "$300",
    unit: "/mo",
  },
  {
    img: indTruck,
    title: "Transportation & Drayage",
    desc: "Secure truck and trailer parking, overnight driver amenities, and yard operations across 22 states.",
    uses: ["Truck & trailer parking", "Container storage", "Driver amenities", "Last-mile staging"],
    price: "$500",
    unit: "/mo",
  },
  {
    img: indMfg,
    title: "Light Manufacturing",
    desc: "Assembly, kitting, and light production operations with heavy power, dock-high loading, and forklift-ready bays.",
    uses: ["Assembly & kitting", "Product finishing", "Heavy power bays", "Dock-high operations"],
    price: "$350",
    unit: "/mo",
  },
  {
    img: indPopup,
    title: "Pop-Up Retail & Events",
    desc: "Stage merchandise, store fixtures, and event materials close to the venue — with same-week availability.",
    uses: ["Merchandise staging", "Fixture & prop storage", "Event logistics hub", "Same-week availability"],
    price: "$250",
    unit: "/day",
  },
  {
    img: indParcel,
    title: "Last Mile & Parcel Carriers",
    desc: "Sortation hubs, package staging, and driver dispatch points — strategically located near dense corridors.",
    uses: ["Sortation & staging", "Driver dispatch hubs", "Package overflow", "Returns consolidation"],
    price: "$400",
    unit: "/mo",
  },
];

export function IndustriesSlider() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.max(1, INDUSTRIES.length - perView + 1);
  const safeIndex = Math.min(index, totalPages - 1);

  const go = (i: number) => setIndex(Math.max(0, Math.min(totalPages - 1, i)));

  return (
    <section id="industries" className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2.5 font-display text-xs font-bold uppercase tracking-widest text-green-dark">
              <span className="block h-0.5 w-6 bg-green" /> Who We Serve
            </div>
            <h2 className="font-display text-4xl font-black uppercase leading-[0.95] text-navy md:text-5xl text-balance">
              Built for Every Operator
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From solo e-commerce sellers to Fortune 500 supply chains — Cubework has the space,
              terms, and infrastructure to match how you actually work.
            </p>
          </div>
          <a
            href="#search"
            className="inline-flex items-center gap-1.5 border-b-2 border-green pb-1 font-display text-xs font-bold uppercase tracking-widest text-navy transition-colors hover:text-green"
          >
            Match my industry
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{
              transform: `translateX(calc(-${safeIndex} * (100% / ${perView} + 20px * ${(perView - 1) / perView})))`,
            }}
          >
            {INDUSTRIES.map((ind) => (
              <article
                key={ind.title}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-lg shadow-navy/5 transition-all hover:-translate-y-1 hover:border-green hover:shadow-xl hover:shadow-green/15"
                style={{
                  flex: `0 0 calc((100% - ${(perView - 1) * 20}px) / ${perView})`,
                }}
              >
                <div className="relative h-60 overflow-hidden bg-secondary">
                  <img
                    src={ind.img}
                    alt={ind.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-green-dark shadow-sm backdrop-blur">
                    Industry
                  </span>
                </div>

                <div className="flex flex-1 flex-col bg-white p-7">
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-green-dark">
                    Industry
                  </div>
                  <h3 className="mt-1.5 font-display text-2xl font-black uppercase leading-none text-navy">
                    {ind.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy/65">{ind.desc}</p>

                  <div className="mt-5">
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-navy/45">
                      Used for
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.uses.map((u) => (
                        <span
                          key={u}
                          className="rounded-full border border-green/30 bg-green/10 px-3 py-1 text-xs font-medium text-green-dark"
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-end justify-between border-t border-navy/10 pt-5">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-navy/45">
                        Spaces from
                      </div>
                      <div className="mt-1 font-display text-3xl font-black leading-none text-green-dark">
                        {ind.price}
                        <span className="ml-1 text-base font-bold text-navy/50">{ind.unit}</span>
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-2.5 font-display text-xs font-bold uppercase tracking-wider text-navy transition-all hover:gap-4 hover:text-green-dark">
                      Learn More
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green transition-transform hover:scale-110">
                        <ArrowRight className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                      </span>
                    </button>
                  </div>
                </div>
              </article>
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
            <span className="ml-3 font-display text-xs font-bold tracking-wider text-navy/40">
              <span className="text-navy">{safeIndex + 1}</span> / {totalPages}
            </span>
          </div>

          <div className="flex gap-2.5">
            <button
              onClick={() => go(safeIndex - 1)}
              disabled={safeIndex === 0}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 bg-white text-navy transition-all hover:border-navy hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-navy"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => go(safeIndex + 1)}
              disabled={safeIndex === totalPages - 1}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 bg-white text-navy transition-all hover:border-navy hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-navy"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
