import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Package, Zap, TrendingUp, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { ChatWidget } from "@/components/ChatWidget";
import indFba from "@/assets/industry-fba.jpg";

export const Route = createFileRoute("/industries/amazon-fba-d2c")({
  head: () => ({
    meta: [
      { title: "Amazon FBA & D2C Warehouse Space — Cubework" },
      {
        name: "description",
        content:
          "Flexible warehouse space for Amazon FBA prep, D2C fulfillment, Q4 surge capacity, kitting, and bundling. Month-to-month, 50+ locations, 48-hour move-in.",
      },
      { property: "og:title", content: "Amazon FBA & D2C Warehouse Space — Cubework" },
      {
        property: "og:description",
        content:
          "Scale for peak season with FBA prep, kitting, and buffer stock space — no long-term lease, no penalties.",
      },
      { property: "og:image", content: indFba },
    ],
  }),
  component: AmazonFbaPage,
});

const FEATURES = [
  {
    icon: Package,
    title: "FBA Prep & Labeling",
    text: "Receive, inspect, label, and poly-bag inventory to Amazon's exact specs before shipping to fulfillment centers.",
  },
  {
    icon: TrendingUp,
    title: "Q4 Surge Capacity",
    text: "Add square footage for Prime Day, BFCM, and holiday peak — then scale back without breaking a contract.",
  },
  {
    icon: Zap,
    title: "Kitting & Bundling",
    text: "Build multi-unit bundles, subscription boxes, and promotional kits with on-site space and dock access.",
  },
  {
    icon: MapPin,
    title: "Multi-Location Fulfillment",
    text: "Place inventory closer to buyers across 50+ locations in 22 states — one agreement covers them all.",
  },
];

const BENEFITS = [
  "Dock-high & grade-level loading",
  "24/7 secure access for prep teams",
  "Forklift-ready bays",
  "Power, WiFi, and lighting included",
  "Month-to-month flexible terms",
  "All-in pricing — no NNN surprises",
];

function AmazonFbaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy px-6 pb-20 pt-32 lg:px-12 lg:pt-40">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Link
                to="/"
                className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green hover:text-white"
              >
                ← Back to Home
              </Link>
              <div className="mb-3 inline-flex items-center gap-2.5 font-display text-xs font-bold uppercase tracking-widest text-green">
                <span className="block h-0.5 w-6 bg-green" /> Industry · Amazon FBA & D2C
              </div>
              <h1 className="font-display text-4xl font-black uppercase leading-[0.95] text-white md:text-6xl">
                Warehouse Space Built for{" "}
                <span className="text-green">Amazon Sellers & D2C Brands</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
                Prep, kit, and ship without committing to a 3-year lease. Cubework gives Amazon FBA
                sellers and D2C operators flexible warehouse space that scales with peak season —
                and pulls back when it's over.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/#search"
                  className="inline-flex items-center gap-2 rounded-md bg-green px-6 py-3.5 font-display text-sm font-extrabold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:bg-green-dark"
                >
                  Tour a Space
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+18003386369"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 font-display text-sm font-extrabold uppercase tracking-[0.18em] text-white transition-all hover:border-white hover:bg-white/5"
                >
                  Call 800-338-6369
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={indFba}
                alt="Amazon FBA prep warehouse"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white px-6 py-4 shadow-xl">
                <div className="text-[10px] font-bold uppercase tracking-widest text-navy/50">
                  Spaces from
                </div>
                <div className="font-display text-3xl font-black text-green-dark">
                  $300<span className="text-base text-navy/50">/mo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-3 inline-flex items-center gap-2.5 font-display text-xs font-bold uppercase tracking-widest text-green-dark">
                <span className="block h-0.5 w-6 bg-green" /> What You Get
              </div>
              <h2 className="font-display text-4xl font-black uppercase leading-[0.95] text-navy md:text-5xl">
                Everything You Need to Prep, Pick, and Ship
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-green hover:shadow-xl hover:shadow-green/10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-green/10 text-green-dark">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-navy">
                    {title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-navy/65">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-secondary px-6 py-24 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2.5 font-display text-xs font-bold uppercase tracking-widest text-green-dark">
                <span className="block h-0.5 w-6 bg-green" /> Why Cubework
              </div>
              <h2 className="font-display text-4xl font-black uppercase leading-[0.95] text-navy md:text-5xl">
                Operational on Day One
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy/65">
                Skip the build-out. Skip the brokers. Skip the multi-year commitment. Move in within
                48 hours and start shipping inventory to Amazon — or directly to your D2C
                customers — the same week.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm shadow-navy/5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-dark" />
                  <span className="text-sm font-semibold text-navy">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-4xl font-black uppercase leading-[0.95] text-white md:text-5xl">
              Ready to Scale Your <span className="text-green">FBA Operation?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              Tour a space this week. Move in within 48 hours. No long-term lease required.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/#search"
                className="inline-flex items-center gap-2 rounded-md bg-green px-8 py-4 font-display text-sm font-extrabold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:bg-green-dark"
              >
                Find Space Near Me
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-8 py-4 font-display text-sm font-extrabold uppercase tracking-[0.18em] text-white transition-all hover:border-white hover:bg-white/5"
              >
                Explore All Industries
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ChatWidget />
    </div>
  );
}
