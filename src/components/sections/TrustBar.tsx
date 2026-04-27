import sheinLogo from "@/assets/logos/shein.png";
import walmartLogo from "@/assets/logos/walmart.png";
import fedexLogo from "@/assets/logos/fedex.png";
import uniuniLogo from "@/assets/logos/uniuni.png";
import gofoLogo from "@/assets/logos/gofo.png";
import itemLogo from "@/assets/logos/item.png";
import uniscoLogo from "@/assets/logos/unisco.png";

const LOGOS = [
  { name: "SHEIN", src: sheinLogo },
  { name: "Walmart", src: walmartLogo },
  { name: "FedEx", src: fedexLogo },
  { name: "UniUni", src: uniuniLogo },
  { name: "GOFO", src: gofoLogo },
  { name: "ITEM.com", src: itemLogo },
  { name: "UNISCO.com", src: uniscoLogo },
] as const;

export function TrustBar() {
  return (
    <section
      aria-label="Trusted by customers"
      className="relative border-b border-border bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-12">
        <div className="grid items-center gap-y-8 gap-x-12 lg:grid-cols-[auto_1fr]">
          <div className="font-display text-[10px] font-bold uppercase tracking-[0.28em] text-navy/55 lg:max-w-[160px] lg:border-r lg:border-border lg:pr-8 lg:text-[11px]">
            Trusted by{" "}
            <span className="text-navy">2,000+ operators</span> who move fast
          </div>

          <ul
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 lg:justify-between"
            role="list"
          >
            {LOGOS.map((logo) => (
              <li key={logo.name} className="flex items-center">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="h-12 w-auto max-w-[180px] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14 lg:h-16"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
