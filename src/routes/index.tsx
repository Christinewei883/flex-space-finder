import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Layers,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Truck,
  Warehouse,
  Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { IndustriesSlider } from "@/components/IndustriesSlider";
import heroWarehouse from "@/assets/space-warehouse-1.webp";
import spaceWarehouse from "@/assets/space-warehouse-2.webp";
import spaceYard from "@/assets/space-yard.webp";
import spaceOffice from "@/assets/space-office.webp";
import spaceStudio from "@/assets/space-desk.webp";
import tourLoading from "@/assets/space-loading.webp";
import tourAisle from "@/assets/space-warehouse-3.webp";
import tourCommunity from "@/assets/space-community.webp";
import tourSecurity from "@/assets/space-warehouse-4.webp";
import cubeworkLogo from "@/assets/cubework-logo.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cubework — Flexible Warehouse Space. Move In This Week." },
      {
        name: "description",
        content:
          "Month-to-month warehouse, office, parking & yard space across 50+ locations in 22 states. All-in pricing. No build-out. Move in within 48 hours.",
      },
      { property: "og:title", content: "Cubework — Flexible Warehouse Space" },
      {
        property: "og:description",
        content:
          "50+ locations. 22 states. Flex terms, all-in pricing, 48-hour move-in. The opposite of a 3-year industrial lease.",
      },
    ],
  }),
  component: HomePage,
});

const STATES = [
  "California", "Texas", "Georgia", "Illinois", "Arizona", "Washington",
  "Oregon", "Nevada", "Colorado", "Utah", "Missouri", "Tennessee",
  "New Jersey", "Pennsylvania", "Indiana", "South Carolina",
];

const SPACE_TYPES = [
  "Warehouse / Storage",
  "Cross-Dock",
  "Container & Trailer Parking",
  "Office / Coworking",
  "Creative Studio",
  "Truck Yard",
];

const TRUST = [
  { icon: Clock, text: "Month-to-month terms" },
  { icon: DollarSign, text: "All-in pricing — no NNN" },
  { icon: Shield, text: "24/7 secure access" },
  { icon: Truck, text: "Dock-high & grade-level" },
  { icon: Layers, text: "50 locations, one agreement" },
];

const WHY = [
  {
    icon: Zap,
    title: "48-Hour Move-In",
    text: "Loading docks, WiFi, power, 24/7 secure access — already there. Most clients are operational within 48 hours of signing.",
    badge: "Zero downtime",
  },
  {
    icon: Clock,
    title: "Flex Terms",
    text: "Month-to-month, seasonal, or long-term. Expand for peak, pull back when it's slow. No penalties, no renegotiation.",
    badge: "No lock-in",
  },
  {
    icon: DollarSign,
    title: "All-In Pricing",
    text: "One monthly rate. Utilities, maintenance, security, property management — included. No NNN ambush.",
    badge: "No surprises",
  },
  {
    icon: MapPin,
    title: "50 Locations, One Deal",
    text: "Need West Coast distribution and East Coast fulfillment? Add locations under a single contract. No new lease.",
    badge: "Multi-market ready",
  },
];

const STEPS = [
  {
    n: "01",
    icon: MapPin,
    title: "Tell us what you need",
    text: "Square footage, location, timeline, dock requirements. We match you with the right facility within hours.",
  },
  {
    n: "02",
    icon: Warehouse,
    title: "Tour the space",
    text: "In-person or virtual, same-day available. See the docks, power, ceiling heights — decide on the spot.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Sign & move in",
    text: "Digital agreement. Card, ACH, or wire. Keys and QR access codes same day. Start moving freight.",
  },
];

const SPACES = [
  {
    img: spaceWarehouse,
    title: "Warehouse & Storage",
    range: "300 – 1,000,000+ SF",
    text: "High ceilings, dock-high & grade-level loading, heavy power, forklift access.",
    features: ["24/7 secure access", "Dock-high & GL doors", "Forklift ready"],
  },
  {
    img: spaceOffice,
    title: "Office & Coworking",
    range: "Desk – Private Suite",
    text: "Private offices, dedicated desks, conference rooms — furnished, WiFi included.",
    features: ["Furnished + WiFi", "Conference rooms", "Mail handling"],
  },
  {
    img: spaceYard,
    title: "Truck & Yard",
    range: "Single trailer to fleet",
    text: "Fenced yard for trucks, trailers, and containers. Overnight parking and driver amenities.",
    features: ["Fenced & gated", "Trailer parking", "24/7 entry"],
  },
  {
    img: spaceStudio,
    title: "Creative Studios",
    range: "Production & events",
    text: "Content production, podcasting, video, and event hosting with pro hookups.",
    features: ["Cyc walls available", "Loading bay access", "Power & lighting"],
  },
];

const TOUR = [
  {
    img: tourLoading,
    eyebrow: "Move in this week",
    title: "Drive-in & dock-high loading",
    text: "Every facility comes with grade-level and dock-high doors, levelers, and seal kits — built so you can unload a 53' trailer the day you sign.",
    bullets: ["Multiple door types per site", "Truck court for 53' trailers", "Forklift-ready aisles"],
  },
  {
    img: tourSecurity,
    eyebrow: "Always open",
    title: "24/7 secure access",
    text: "QR and keycard entry, monitored cameras, and gated yards. Your team works on your schedule, not the landlord's.",
    bullets: ["Keycard + QR entry", "On-site cameras", "Gated, fenced yards"],
  },
  {
    img: tourAisle,
    eyebrow: "Move-in ready",
    title: "Power, racking & WiFi included",
    text: "Heavy power, lighting, WiFi, and optional pallet racking already in place. No build-out, no contractor schedules, no surprises.",
    bullets: ["High-bay LED lighting", "208V / 480V available", "Optional racking"],
  },
  {
    img: tourCommunity,
    eyebrow: "More than four walls",
    title: "Community of operators",
    text: "Join 2,000+ tenants — e-comm brands, 3PLs, importers, and trades. Shared loading dock, real neighbors, and a national network you can scale across.",
    bullets: ["50+ locations", "Multi-site agreement", "Operator community"],
  },
];

const LOCATIONS = [
  { state: "California", name: "Los Angeles Basin", count: "10 facilities" },
  { state: "California", name: "Inland Empire", count: "4 facilities" },
  { state: "Texas", name: "Houston", count: "2 facilities" },
  { state: "Texas", name: "DFW Metro", count: "2 facilities" },
  { state: "Georgia", name: "Atlanta Metro", count: "3 facilities" },
  { state: "Georgia", name: "Savannah / Pooler", count: "2 facilities" },
  { state: "Illinois", name: "Chicago Metro", count: "3 facilities" },
  { state: "Arizona", name: "Phoenix & Tucson", count: "3 facilities" },
  { state: "Washington", name: "Seattle / Kent", count: "2 facilities" },
];

const TESTIMONIALS = [
  {
    initials: "MK",
    quote:
      "We went from signed agreement to receiving freight in 36 hours. Our Amazon FBA prep operation was up before our competitors got a call back from their broker.",
    name: "M. Kim",
    role: "E-Commerce Operator · City of Industry, CA",
  },
  {
    initials: "DL",
    quote:
      "We needed surge capacity for peak season without locking into a 3-year lease. Cubework gave us 15,000 SF for Q4, we scaled back in January. No penalties, no drama.",
    name: "D. Leung",
    role: "3PL Operations Director · Houston, TX",
  },
  {
    initials: "RP",
    quote:
      "Tried to negotiate a traditional industrial lease for nine months. Signed with Cubework in three days. The all-in number is the actual number — no NNN surprises.",
    name: "R. Patel",
    role: "Founder · Apparel Brand · Atlanta, GA",
  },
];

const STATS = [
  { n: "50+", label: "Locations" },
  { n: "22", label: "States" },
  { n: "10M+", label: "Sq Ft Managed" },
  { n: "2,000+", label: "Active Tenants" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-white pt-16">
        <img
          src={heroWarehouse}
          alt="Inside a Cubework warehouse with high ceilings, racking, and dock-high loading"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/30" />
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-[1fr_440px] lg:px-12">
          <div>
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-sm border border-green/30 bg-green/10 px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-green-dark">
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-green" />
              50 Locations · 22 States · Move-In Ready
            </div>

            <h1 className="animate-fade-up font-display text-5xl font-black uppercase leading-[0.92] tracking-tight text-navy text-balance md:text-7xl xl:text-8xl">
              Warehouse Space
              <br />
              That Moves
              <br />
              <span className="text-green-dark">With Your Business.</span>
            </h1>

            <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-navy/70">
              Traditional industrial leases lock you in for 3 years. Your business changes in 3 months.
              Cubework gives you flex warehouse, office, parking, and yard space — <strong className="text-navy">all-in pricing, no build-out, operational in 48 hours.</strong>
            </p>

            <div className="animate-fade-up mt-8 flex flex-wrap gap-3">
              <a
                href="#search"
                className="inline-flex items-center gap-2 rounded-sm bg-green px-7 py-3.5 font-display text-sm font-extrabold uppercase tracking-widest text-white shadow-lg shadow-green/30 transition-all hover:-translate-y-0.5 hover:bg-green-dark"
              >
                Find Space Near Me <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:8003386369"
                className="inline-flex items-center gap-2 rounded-sm border border-navy/25 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-navy transition-all hover:border-navy hover:bg-navy/5"
              >
                <Phone className="h-4 w-4" /> Talk to an Expert
              </a>
            </div>

            <div className="animate-fade-up mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="border-l-2 border-green pl-4">
                  <div className="font-display text-3xl font-black leading-none text-navy">
                    {s.n.includes("+") || s.n.includes("M") ? (
                      <>
                        <span className="text-green-dark">{s.n}</span>
                      </>
                    ) : (
                      s.n
                    )}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-widest text-navy/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search card */}
          <div id="search" className="animate-fade-up relative rounded-lg bg-white p-7 shadow-2xl">
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-lg bg-green" />
            <h2 className="font-display text-xl font-extrabold uppercase tracking-wide text-navy">
              Find Your Space
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Inquiry to occupancy in as little as 48 hours
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-navy">
                  State / Market
                </label>
                <select className="w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus:border-green">
                  <option>Select a state…</option>
                  {STATES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-navy">
                  Space Type
                </label>
                <select className="w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus:border-green">
                  <option>Select space type…</option>
                  {SPACE_TYPES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-navy">
                    Min Sq Ft
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 5,000"
                    className="w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus:border-green"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-navy">
                    Move-In Date
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus:border-green"
                  />
                </div>
              </div>

              <button className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-green py-3.5 font-display text-sm font-extrabold uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:bg-green-dark">
                Search Available Space <ArrowRight className="h-4 w-4" />
              </button>

              <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3.5 w-3.5 text-green" />
                No long-term commitment required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 lg:px-12">
          {TRUST.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-sm font-medium text-navy/75">
              <Icon className="h-4 w-4 flex-shrink-0 text-green-dark" />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[380px_1fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-4 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-green">
              <span className="block h-0.5 w-6 bg-green" /> Why Cubework
            </div>
            <h2 className="font-display text-4xl font-black uppercase leading-none text-navy md:text-5xl">
              Built for how business actually works
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Industrial real estate wasn't designed for how businesses operate today. Long leases
              kill optionality. Build-outs drain working capital. Scaling is a nightmare. Cubework
              fixes all three.
            </p>

            <div className="mt-8 rounded-lg bg-green p-7 text-white">
              <div className="font-display text-5xl font-black leading-none text-white">$300K+</div>
              <div className="mt-2 text-sm leading-relaxed text-white/85">
                Average savings vs. traditional leasing on a 10,000 SF operation. No build-out. No
                deposit. No NNN.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {WHY.map(({ icon: Icon, title, text, badge }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-lg border border-border p-7 transition-all hover:-translate-y-1 hover:border-green hover:shadow-xl hover:shadow-navy/5"
              >
                <span className="absolute inset-x-0 bottom-0 h-1 w-0 bg-green transition-all group-hover:w-full" />
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-green/10 text-green">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <span className="mt-3 inline-block rounded-sm bg-green/10 px-2.5 py-1 font-display text-[11px] font-bold uppercase tracking-widest text-green-dark">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative overflow-hidden bg-white px-6 py-24 lg:px-12">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-green-dark">
              <span className="block h-0.5 w-6 bg-green" /> How It Works
            </div>
            <h2 className="font-display text-4xl font-black uppercase text-navy md:text-5xl">
              From Search to Move-In
            </h2>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/10 px-5 py-2 font-display text-sm font-bold uppercase tracking-widest text-green-dark">
              <Clock className="h-4 w-4" /> Inquiry to occupancy in as little as 48 hours
            </div>
          </div>

          <div className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-lg bg-border md:grid-cols-3">
            {STEPS.map(({ n, icon: Icon, title, text }) => (
              <div key={n} className="relative bg-white p-10 transition-colors hover:bg-secondary">
                <div className="absolute right-5 top-3 font-display text-7xl font-black leading-none text-green/10">
                  {n}
                </div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-green text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-green-dark">
                  Step {n}
                </div>
                <h3 className="mt-1.5 font-display text-2xl font-extrabold uppercase tracking-wide text-navy">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPACES */}
      <section id="spaces" className="bg-secondary px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-green">
                <span className="block h-0.5 w-6 bg-green" /> Space Types
              </div>
              <h2 className="font-display text-4xl font-black uppercase text-navy md:text-5xl">
                Everything Under One Agreement
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-widest text-green-dark hover:text-green">
              View All Services <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SPACES.map((s) => (
              <div
                key={s.title}
                className="group cursor-pointer overflow-hidden rounded-lg border border-transparent bg-white transition-all hover:-translate-y-1 hover:border-green hover:shadow-xl hover:shadow-navy/10"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-navy">
                    {s.title}
                  </h3>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-green-dark">
                    {s.range}
                  </div>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <IndustriesSlider />

      <section id="locations" className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-green">
                <span className="block h-0.5 w-6 bg-green" /> Locations
              </div>
              <h2 className="font-display text-4xl font-black uppercase text-navy md:text-5xl">
                50 Locations · 22 States
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-widest text-green-dark hover:text-green">
              View All Locations <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {LOCATIONS.map((l) => (
              <button
                key={l.name}
                className="group cursor-pointer rounded-lg border border-transparent bg-secondary p-5 text-left transition-all hover:border-green hover:bg-white hover:shadow-md"
              >
                <div className="text-[11px] font-semibold uppercase tracking-widest text-green-dark">
                  {l.state}
                </div>
                <div className="mt-1 font-display text-base font-extrabold uppercase text-navy">
                  {l.name}
                </div>
                <div className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-green-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-dark" /> {l.count}
                </div>
              </button>
            ))}
            <button className="group cursor-pointer rounded-lg border border-dashed border-border bg-white p-5 text-left transition-all hover:border-green">
              <div className="font-display text-base font-extrabold uppercase text-navy">
                + 12 More States
              </div>
              <div className="mt-1.5 text-[11px] text-muted-foreground">
                NJ · OR · NV · CO · UT · MO · TN · SC · PA · IN
              </div>
              <div className="mt-2 inline-flex items-center gap-1 font-display text-xs font-bold uppercase tracking-widest text-green-dark group-hover:text-green">
                View all <ArrowRight className="h-3 w-3" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="relative overflow-hidden bg-secondary px-6 py-24 lg:px-12">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-green-dark">
              <span className="block h-0.5 w-6 bg-green" /> What Our Tenants Say
            </div>
            <h2 className="font-display text-4xl font-black uppercase text-navy md:text-5xl">
              Trusted by Operators &amp; Founders
            </h2>
            <p className="mt-3 text-base text-navy/60">
              From solo e-commerce sellers to Fortune 500 distribution teams
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-lg border border-border bg-white p-7 transition-all hover:border-green hover:shadow-lg hover:shadow-green/10"
              >
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-green text-green" />
                  ))}
                </div>
                <p className="text-[15px] italic leading-relaxed text-navy/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green font-display text-sm font-extrabold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold uppercase tracking-wide text-navy">
                      {t.name}
                    </div>
                    <div className="text-xs text-navy/50">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-0.5 overflow-hidden rounded-lg bg-border md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white p-7 text-center">
                <div className="font-display text-4xl font-black leading-none text-green-dark">{s.n}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-widest text-navy/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="relative overflow-hidden bg-green px-6 py-28 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.25),_transparent_70%)]" />
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-white">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-white" />
            Available This Week
          </div>
          <h2 className="font-display text-5xl font-black uppercase leading-[0.92] text-white text-balance md:text-6xl">
            Stop Negotiating Leases.
            <br />
            <span className="text-navy">Start Moving Freight.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/85">
            Tour a space this week. Sign a flexible agreement. Move in by Friday. The opposite of
            traditional industrial real estate.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#search"
              className="inline-flex items-center gap-2 rounded-md bg-white px-9 py-4 font-display text-base font-extrabold uppercase tracking-widest text-green-dark shadow-xl shadow-navy/20 transition-all hover:-translate-y-0.5 hover:bg-secondary"
            >
              Find a Space <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:8003386369"
              className="inline-flex items-center gap-2 rounded-md border border-white/60 px-9 py-4 font-display text-base font-bold uppercase tracking-widest text-white transition-all hover:border-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> 800-338-6369
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-navy-dark px-6 py-14 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
            <div>
              <img
                src={cubeworkLogo}
                alt="Cubework"
                className="h-7 w-auto"
                width={172}
                height={28}
              />
              <p className="mt-4 text-sm leading-relaxed text-white/40">
                Flexible warehouse, office, parking, and yard space across 50+ locations in 22 states.
              </p>
              <div className="mt-4 font-display text-xs font-bold uppercase tracking-widest text-green">
                Move in this week.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
              {[
                { title: "Spaces", links: ["Warehouse", "Office", "Truck Yard", "Studios"] },
                { title: "Locations", links: ["California", "Texas", "Georgia", "All Locations"] },
                { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
                { title: "Resources", links: ["Pricing", "FAQ", "Cost Calculator", "Blog"] },
              ].map((col) => (
                <div key={col.title}>
                  <div className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-white">
                    {col.title}
                  </div>
                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a href="#" className="text-sm text-white/40 transition-colors hover:text-green">
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-6">
            <div className="text-xs text-white/25">
              © {new Date().getFullYear()} Cubework. All rights reserved.
            </div>
            <a
              href="tel:8003386369"
              className="font-display text-base font-bold tracking-wide text-green hover:text-green-light"
            >
              800-338-6369
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
