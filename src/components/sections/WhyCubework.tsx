import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { WHY } from "@/data/site";

export function WhyCubework() {
  return (
    <section className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[380px_1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionEyebrow>Why Cubework</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-navy md:text-5xl">
            Built for how business actually works.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy/65">
            Industrial real estate wasn't designed for how businesses operate today. Long leases
            kill optionality. Build-outs drain working capital. Scaling is a nightmare. Cubework
            fixes all three.
          </p>

          <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-dark p-7 text-white ring-1 ring-white/10">
            <div
              className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-green/20 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <div className="font-display text-[10px] font-bold uppercase tracking-[0.28em] text-green-light">
                Average savings
              </div>
              <div className="mt-2 font-display text-5xl font-black leading-none text-white">
                $300K+
              </div>
              <div className="mt-3 text-sm leading-relaxed text-white/75">
                Versus traditional leasing on a 10,000 SF operation. No build-out. No deposit. No
                NNN.
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {WHY.map(({ icon: Icon, title, text, badge }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-navy/15 hover:shadow-xl hover:shadow-navy/5"
            >
              <span
                className="absolute inset-x-0 bottom-0 h-1 w-0 bg-green transition-all duration-300 group-hover:w-full"
                aria-hidden
              />
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-navy/5 text-navy transition-colors group-hover:bg-green/10 group-hover:text-green-dark">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-navy">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">{text}</p>
              <span className="mt-4 inline-block rounded-sm bg-navy/5 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-navy/65">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
