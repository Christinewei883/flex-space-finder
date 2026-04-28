import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

type BlogPost = {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  img: string;
  url: string;
};

const POSTS: BlogPost[] = [
  {
    title: "How CFOs Evaluate Flexible Warehousing ROI",
    category: "Flexible Leasing Solutions",
    excerpt:
      "Warehouse capacity has evolved beyond a mere line item on a balance sheet. Senior executives overseeing financial planning and risk are rethinking how flex space drives ROI.",
    date: "Apr 24, 2026",
    readTime: "5.5 min read",
    author: "Mila Movez",
    img: "https://www.cubework.com/_next/image?url=https%3A%2F%2Fcms.dev.cubework.com%2Fapi%2Fmedia%2Ffile%2FHow%2520CFOs%2520Evaluate%2520Flexible%2520Warehousing%2520ROI.png&w=1920&q=75",
    url: "https://www.cubework.com/blog/how-cfos-evaluate-flexible-warehousing-roi",
  },
  {
    title: "US Market Entry 2026: Tariffs, Compliance & Warehousing",
    category: "Market Insights",
    excerpt:
      "Insights drawn from Tech Night @ MODEX 2026, an invite-only dinner hosted by Cubework on April 14, 2026 in Atlanta. Three speakers, three lenses on entering the U.S.",
    date: "Apr 21, 2026",
    readTime: "6 min read",
    author: "Mila Movez",
    img: "https://www.cubework.com/_next/image?url=https%3A%2F%2Fcms.dev.cubework.com%2Fapi%2Fmedia%2Ffile%2FUS%2520Market%2520Entry%25202026%2520TariffsCompliance%2526Warehousing.png&w=1920&q=75",
    url: "https://www.cubework.com/blog/us-market-entry-2026-tariffs-compliance--warehousing",
  },
  {
    title: "Tech Night @ MODEX 2026: Three Perspectives on Logistics & Warehouse Tech",
    category: "Market Insights",
    excerpt:
      "On April 14, 2026, Cubework hosted an invite-only dinner on the sidelines of MODEX in Atlanta. Three speakers, three distinct lenses on what's actually changing.",
    date: "Apr 19, 2026",
    readTime: "6 min read",
    author: "Xavier Chu",
    img: "https://www.cubework.com/_next/image?url=https%3A%2F%2Fcms.dev.cubework.com%2Fapi%2Fmedia%2Ffile%2FTech%2520Night%2520MODEX2026.png&w=1920&q=75",
    url: "https://www.cubework.com/blog/tech-night--modex-2026-three-perspectives-on-whats-actually-changing-in-logistics-compliance-and-warehouse-technology",
  },
  {
    title: "State Incentives for Warehouse Expansion",
    category: "Site Selection",
    excerpt:
      "Choosing your next hub is high-stakes. It has evolved from a simple search into a complex financial strategy — successful expansion is no longer just about square footage.",
    date: "Apr 13, 2026",
    readTime: "6 min read",
    author: "Xavier Chu",
    img: "https://www.cubework.com/_next/image?url=https%3A%2F%2Fcms.dev.cubework.com%2Fapi%2Fmedia%2Ffile%2FState%2520Incentives%2520for%2520Warehouse%2520Expansion.png&w=1920&q=75",
    url: "https://www.cubework.com/blog/state-incentives-for-warehouse-expansion",
  },
  {
    title: "Managing Seasonal Peaks in E-Commerce Warehousing",
    category: "Ecommerce Warehousing",
    excerpt:
      "Whether it's a DTC brand shipping 500 orders a month or an enterprise retailer managing multi-channel distribution — the same questions about flex capacity arise.",
    date: "Apr 3, 2026",
    readTime: "5.5 min read",
    author: "Xavier Chu",
    img: "https://www.cubework.com/_next/image?url=https%3A%2F%2Fcms.dev.cubework.com%2Fapi%2Fmedia%2Ffile%2FManaging%2520Seasonal%2520Peaks%2520in%2520E-Commerce%2520Warehousing.png&w=1920&q=75",
    url: "https://www.cubework.com/blog/managing-seasonal-peaks-in-e-commerce-warehousing",
  },
  {
    title: "3PL Warehousing KPIs That Actually Matter",
    category: "Logistics for 3PL",
    excerpt:
      "Don't let cluttered dashboards distract you. In a busy third-party logistics operation, the metrics that genuinely drive performance often get buried.",
    date: "Mar 29, 2026",
    readTime: "6 min read",
    author: "Mila Movez",
    img: "https://www.cubework.com/_next/image?url=https%3A%2F%2Fcms.dev.cubework.com%2Fapi%2Fmedia%2Ffile%2F3PL%2520Warehousing%2520KPIs%2520That%2520Actually%2520Matter.png&w=1920&q=75",
    url: "https://www.cubework.com/blog/3pl-warehousing-kpis-that-actually-matter",
  },
  {
    title: "Flexible Warehousing for Multi-Location Operations",
    category: "Flexible Leasing Solutions",
    excerpt:
      "Scaling across regions often stalls not for lack of space, but due to rigid lease terms. Traditional contracts penalize growth by trapping operators in place.",
    date: "Mar 20, 2026",
    readTime: "6 min read",
    author: "Mila Movez",
    img: "https://www.cubework.com/_next/image?url=https%3A%2F%2Fcms.dev.cubework.com%2Fapi%2Fmedia%2Ffile%2FFlexible%2520Warehousing%2520for%2520Multi-Location%2520Operations.png&w=1920&q=75",
    url: "https://www.cubework.com/blog/flexible-warehousing-for-multi-location-operations",
  },
  {
    title: "How Proximity to Ports Impacts Warehouse Strategy",
    category: "Site Selection",
    excerpt:
      "Location is everything in supply chain management. Where you place your warehouse directly affects costs, delivery speed, and operational flexibility.",
    date: "Mar 12, 2026",
    readTime: "6 min read",
    author: "Xavier Chu",
    img: "https://www.cubework.com/_next/image?url=https%3A%2F%2Fcms.dev.cubework.com%2Fapi%2Fmedia%2Ffile%2FHow%2520Proximity%2520to%2520Ports%2520Impacts%2520Warehouse%2520Strategy%2520(2).png&w=1920&q=75",
    url: "https://www.cubework.com/blog/how-proximity-to-ports-impacts-warehouse-strategy",
  },
  {
    title: "Why Location Strategy Matters in E-Commerce",
    category: "Ecommerce Warehousing",
    excerpt:
      "E-commerce growth has changed how companies think about physical space. Digital storefronts still depend on physical networks — the right location shapes cost and service levels.",
    date: "Mar 5, 2026",
    readTime: "5 min read",
    author: "Mila Movez",
    img: "https://www.cubework.com/_next/image?url=https%3A%2F%2Fcms.dev.cubework.com%2Fapi%2Fmedia%2Ffile%2FEcommerce%2520Location%2520Strategies.png&w=1920&q=75",
    url: "https://www.cubework.com/blog/why-location-strategy-matters-in-e-commerce",
  },
];

export function Blogs() {
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

  const totalPages = Math.max(1, POSTS.length - perView + 1);
  const safeIndex = Math.min(index, totalPages - 1);
  const go = (i: number) => setIndex(Math.max(0, Math.min(totalPages - 1, i)));

  return (
    <section id="blogs" className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionEyebrow>Latest Insights</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-navy md:text-5xl text-balance">
              Insights That Drive Smarter Logistics Decisions
            </h2>
            <p className="mt-3 text-base leading-relaxed text-navy/60">
              Stay updated with the latest insights in logistics, transportation, and supply chain management.
            </p>
          </div>
          <a
            href="https://www.cubework.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-b-2 border-green pb-1 font-display text-xs font-bold uppercase tracking-widest text-navy transition-colors hover:text-green"
          >
            View all posts
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
            {POSTS.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-md shadow-navy/5 transition-all hover:-translate-y-1 hover:border-green hover:shadow-xl hover:shadow-green/15"
                style={{
                  flex: `0 0 calc((100% - ${(perView - 1) * 20}px) / ${perView})`,
                }}
              >
                <div className="relative h-56 overflow-hidden bg-secondary">
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-green-dark shadow-sm backdrop-blur">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-black leading-tight text-navy group-hover:text-green-dark">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-navy/65">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-[11px] font-semibold uppercase tracking-wider text-navy/50">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-medium text-navy/70">By {post.author}</span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green transition-transform group-hover:scale-110">
                      <ArrowRight className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </a>
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 bg-white text-navy transition-all hover:border-navy hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => go(safeIndex + 1)}
              disabled={safeIndex === totalPages - 1}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 bg-white text-navy transition-all hover:border-navy hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
