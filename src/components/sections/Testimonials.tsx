import { Star } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-secondary px-6 py-24 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <SectionEyebrow>Tenant Stories</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-navy md:text-5xl">
            Trusted by operators &amp; founders.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-navy/60">
            From solo e-commerce sellers to Fortune 500 distribution teams.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-navy/15 hover:shadow-lg hover:shadow-navy/5"
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
    </section>
  );
}
