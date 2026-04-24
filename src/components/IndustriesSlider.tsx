import { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import indEcom from "@/assets/industry-ecom.jpg";
import indFba from "@/assets/industry-fba.jpg";
import indImport from "@/assets/industry-import.jpg";
import ind3pl from "@/assets/industry-3pl.jpg";
import indTruck from "@/assets/industry-truck.jpg";
import indMfg from "@/assets/industry-mfg.jpg";
import indFood from "@/assets/industry-food.jpg";
import indPopup from "@/assets/industry-popup.jpg";
import indContent from "@/assets/industry-content.jpg";
import indGovt from "@/assets/industry-govt.jpg";
import indParcel from "@/assets/industry-parcel.jpg";

type Industry = {
  img: string;
  title: string;
  desc: string;
  uses: string[];
};

const INDUSTRIES: Industry[] = [
  {
    img: indEcom,
    title: "E-Commerce & Fast Fashion",
    desc: "Global brands like SHEIN, Temu, and emerging DTC labels use Cubework for U.S. pop-up event staging, returns processing, overflow inventory, and last-mile distribution — without signing a multi-year lease.",
    uses: ["Pop-up event staging", "Returns processing", "Overflow inventory", "Flash sale fulfillment"],
  },
  {
    img: indFba,
    title: "Amazon FBA & D2C",
    desc: "Amazon sellers and D2C brands use Cubework as prep, kitting, and buffer stock space — scaling up for Q4 peak season and pulling back in Q1 without penalties or renegotiation.",
    uses: ["FBA prep & labeling", "Q4 surge capacity", "Kitting & bundling", "Multi-location fulfillment"],
  },
  {
    img: indImport,
    title: "Import / Export",
    desc: "Importers and exporters near LA, Houston, and Savannah use Cubework for cross-docking, container unloading, and goods staging before domestic distribution — no warehouse lease required.",
    uses: ["Cross-docking", "Container unloading", "Port-adjacent staging", "Customs buffer stock"],
  },
  {
    img: ind3pl,
    title: "3PL Providers",
    desc: "Third-party logistics companies use Cubework to win new client contracts without long-term real estate risk. Flex capacity that matches your sales pipeline — not your lease expiration.",
    uses: ["Client overflow capacity", "Multi-market expansion", "Short-term contract wins", "Seasonal surge handling"],
  },
  {
    img: indTruck,
    title: "Transportation & Drayage",
    desc: "Trucking, drayage, and last-mile operators use Cubework for secure truck and trailer parking, overnight driver amenities, and yard operations — near major ports and interstates across 22 states.",
    uses: ["Truck & trailer parking", "Container storage", "Driver amenities", "Last-mile staging"],
  },
  {
    img: indMfg,
    title: "Light Manufacturing",
    desc: "Assembly, kitting, and light production operations use Cubework to launch without massive upfront capital. Heavy-duty power, dock-high loading, and forklift-ready bays from day one.",
    uses: ["Assembly & kitting", "Product finishing", "Heavy power bays", "Dock-high operations"],
  },
  {
    img: indFood,
    title: "Food & Beverage",
    desc: "Food distributors, ghost kitchen operators, and specialty food brands use Cubework for ambient distribution staging, production space, and regional fulfillment — compliant and move-in ready.",
    uses: ["Ghost kitchen staging", "Ambient distribution", "Regional food hub", "Specialty production"],
  },
  {
    img: indPopup,
    title: "Pop-Up Retail & Events",
    desc: "Brands launching U.S. pop-up retail activations use Cubework to stage merchandise, store fixtures, and event materials close to the venue — with same-week availability and no long-term commitment.",
    uses: ["Merchandise staging", "Fixture & prop storage", "Event logistics hub", "Same-week availability"],
  },
  {
    img: indContent,
    title: "Content & Media Production",
    desc: "Creators, studios, and production companies use Cubework for podcasting, video shoots, product photography, and live streaming — professional power hookups, on-demand booking, no long lease.",
    uses: ["Podcast studios", "Video production", "Product photography", "Live streaming"],
  },
  {
    img: indGovt,
    title: "Government & Public Sector",
    desc: "Federal agencies, emergency management teams, and public sector contractors use Cubework for secure equipment storage, rapid deployment staging, and regional distribution across our nationwide network.",
    uses: ["Emergency staging", "Equipment storage", "Rapid deployment", "Secure access facilities"],
  },
  {
    img: indParcel,
    title: "Last Mile & Parcel Carriers",
    desc: "Delivery networks, regional parcel carriers, and last-mile operators use Cubework as sortation hubs, package staging facilities, and driver dispatch points — strategically located near dense residential corridors across 22 states.",
    uses: ["Sortation & staging", "Driver dispatch hubs", "Package overflow", "Returns consolidation"],
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
    <section className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2.5 font-display text-xs font-bold uppercase tracking-widest text-green">
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
            href="#"
            className="border-b-2 border-green pb-1 font-display text-xs font-bold uppercase tracking-widest text-navy hover:text-green"
          >
            View All Industries →
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
                className="group flex flex-col overflow-hidden rounded-lg shadow-lg shadow-navy/10"
                style={{
                  flex: `0 0 calc((100% - ${(perView - 1) * 20}px) / ${perView})`,
                }}
              >
                <div className="relative h-60 overflow-hidden bg-navy-dark">
                  <img
                    src={ind.img}
                    alt={ind.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col bg-navy p-7">
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-green">
                    Industry
                  </div>
                  <h3 className="mt-1.5 font-display text-2xl font-black uppercase leading-none text-white">
                    {ind.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/65">{ind.desc}</p>

                  <div className="mt-5">
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/30">
                      Used for
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.uses.map((u) => (
                        <span
                          key={u}
                          className="rounded-full border border-green/25 bg-green/10 px-3 py-1 text-xs font-medium text-white/70"
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="mt-6 inline-flex items-center gap-2.5 self-start font-display text-sm font-bold uppercase tracking-wider text-white transition-all hover:gap-4">
                    Learn More
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green transition-transform hover:scale-110">
                      <ArrowRight className="h-3.5 w-3.5 text-navy" strokeWidth={2.5} />
                    </span>
                  </button>
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
