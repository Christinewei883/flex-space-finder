import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { ChatWidget } from "@/components/ChatWidget";
import indEcom from "@/assets/industry-ecom.jpg";
import indFba from "@/assets/industry-fba.jpg";
import indTruck from "@/assets/industry-truck.jpg";
import indMfg from "@/assets/industry-mfg.jpg";
import indPopup from "@/assets/industry-popup.jpg";
import indParcel from "@/assets/industry-parcel.jpg";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "All Industries We Serve — Cubework" },
      {
        name: "description",
        content:
          "Explore every industry Cubework supports — e-commerce, Amazon FBA, transportation, manufacturing, pop-up retail, and last-mile carriers. Flexible warehouse space, month-to-month.",
      },
      { property: "og:title", content: "All Industries We Serve — Cubework" },
      {
        property: "og:description",
        content:
          "From solo e-commerce sellers to Fortune 500 supply chains — flexible warehouse, parking, and yard space across 50+ locations.",
      },
    ],
  }),
  component: IndustriesIndexPage,
});

type Industry = {
  img: string;
  title: string;
  desc: string;
  uses: string[];
  price: string;
  unit: string;
  href?: string;
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
    href: "/industries/amazon-fba-d2c",
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

function IndustriesIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-navy px-6 pb-20 pt-32 lg:px-12 lg:pt-40">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3 inline-flex items-center gap-2.5 font-display text-xs font-bold uppercase tracking-widest text-green">
              <span className="block h-0.5 w-6 bg-green" /> All Industries
            </div>
            <h1 className="font-display text-5xl font-black uppercase leading-[0.95] text-white md:text-6xl text-balance max-w-4xl">
              Built for Every Operator
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              From solo e-commerce sellers to Fortune 500 supply chains — explore every industry
              Cubework supports with flexible space, all-in pricing, and 48-hour move-in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#search"
                className="inline-flex items-center gap-2 rounded-md bg-green px-6 py-3 font-display text-xs font-extrabold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:bg-green-dark"
              >
                Find Space Near Me
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 font-display text-xs font-extrabold uppercase tracking-[0.18em] text-white transition-all hover:bg-white/10"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="bg-white px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES.map((ind) => (
                <article
                  key={ind.title}
                  className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-lg shadow-navy/5 transition-all hover:-translate-y-1 hover:border-green hover:shadow-xl hover:shadow-green/15"
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
                      {ind.href ? (
                        <Link
                          to={ind.href}
                          className="inline-flex items-center gap-2.5 font-display text-xs font-bold uppercase tracking-wider text-navy transition-all hover:gap-4 hover:text-green-dark"
                        >
                          Learn More
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green transition-transform hover:scale-110">
                            <ArrowRight className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                          </span>
                        </Link>
                      ) : (
                        <a
                          href="/#search"
                          className="inline-flex items-center gap-2.5 font-display text-xs font-bold uppercase tracking-wider text-navy transition-all hover:gap-4 hover:text-green-dark"
                        >
                          Get Quote
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green transition-transform hover:scale-110">
                            <ArrowRight className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ChatWidget />
    </div>
  );
}
