import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import cubeworkLogo from "@/assets/cubework-logo.svg";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-dark/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link to="/" className="flex items-center" aria-label="Cubework home">
          <img
            src={cubeworkLogo}
            alt="Cubework"
            className="h-7 w-auto"
            width={172}
            height={28}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {[
            ["Locations", "#locations"],
            ["Spaces", "#spaces"],
            ["How It Works", "#how"],
            ["Pricing", "#pricing"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-green"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:8003386369"
            className="hidden items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-green md:flex"
          >
            <Phone className="h-4 w-4" />
            800-338-6369
          </a>
          <a
            href="#search"
            className="rounded-sm bg-green px-4 py-2 font-display text-xs font-extrabold uppercase tracking-widest text-navy-dark transition-all hover:bg-green-light"
          >
            Tour a Space →
          </a>
        </div>
      </div>
    </header>
  );
}
