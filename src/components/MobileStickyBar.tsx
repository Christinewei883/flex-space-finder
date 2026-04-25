import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  /** CSS selector for the element whose visibility hides the bar (typically the hero). */
  hideWhileVisible?: string;
};

export function MobileStickyBar({ hideWhileVisible = "#search" }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.querySelector(hideWhileVisible);
    if (!target) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [hideWhileVisible]);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 lg:hidden",
        "transition-transform duration-300 ease-out",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="border-t border-border bg-white/95 px-4 py-3 shadow-[0_-12px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-2.5">
          <a
            href="tel:+18003386369"
            className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md border border-navy/15 text-navy transition-colors hover:border-green hover:text-green-dark"
            aria-label="Call Cubework"
          >
            <Phone className="h-5 w-5" strokeWidth={2.25} />
          </a>
          <a
            href="#search"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-green py-3.5 font-display text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-lg shadow-green/30 transition-all hover:bg-green-dark"
          >
            Find Space Near Me
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
