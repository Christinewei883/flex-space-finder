import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import cubeworkLogo from "@/assets/cubework-logo.svg";

const NAV = [
  { label: "Locations", href: "#locations" },
  { label: "Spaces", href: "#spaces" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open + close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-200",
          scrolled
            ? "border-b border-border bg-white/90 shadow-sm shadow-navy/5 backdrop-blur"
            : "border-b border-transparent bg-white/70 backdrop-blur",
        )}
      >
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

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs font-semibold uppercase tracking-widest text-navy/70 transition-colors hover:text-green-dark"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+18003386369"
              className="hidden items-center gap-2 text-sm font-semibold text-navy/80 transition-colors hover:text-green-dark md:flex"
            >
              <Phone className="h-4 w-4" />
              800-338-6369
            </a>
            <a
              href="#search"
              className="hidden items-center gap-1.5 rounded-md bg-green px-4 py-2 font-display text-xs font-extrabold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:bg-green-dark sm:inline-flex"
            >
              Tour a Space
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy transition-colors hover:bg-navy/5 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu (overlay + panel) */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        {/* Scrim */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className={cn(
            "absolute inset-0 bg-navy-dark/60 backdrop-blur-sm transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Panel */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={cn(
            "absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-border px-6">
            <img
              src={cubeworkLogo}
              alt="Cubework"
              className="h-6 w-auto"
              width={172}
              height={28}
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy transition-colors hover:bg-navy/5"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label="Mobile">
            <ul className="space-y-1">
              {NAV.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-md px-3 py-3 font-display text-sm font-bold uppercase tracking-[0.18em] text-navy transition-colors hover:bg-secondary hover:text-green-dark"
                  >
                    {label}
                    <ArrowRight className="h-4 w-4 text-navy/40" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-border pt-6">
              <a
                href="tel:+18003386369"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
              >
                <Phone className="h-4 w-4 text-green-dark" />
                800-338-6369
              </a>
              <p className="mt-2 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/45">
                Mon–Fri · 6am – 6pm PT
              </p>
            </div>
          </nav>

          <div className="border-t border-border bg-secondary p-6">
            <a
              href="#search"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-green py-3.5 font-display text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-lg shadow-green/30 transition-all hover:bg-green-dark"
            >
              Find Space Near Me
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
