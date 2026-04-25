import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  /** "live" tints the dot green for live availability/status signals only. */
  tone?: "default" | "live";
  className?: string;
};

/**
 * Disciplined section eyebrow: tight uppercase Montserrat micro-label,
 * single dot ornament. Default tone is navy — green is reserved for
 * action/availability signals.
 */
export function SectionEyebrow({ children, tone = "default", className }: Props) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-[10px] font-bold uppercase tracking-[0.28em]",
        tone === "live" ? "text-green-dark" : "text-navy/55",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "live" ? "bg-green" : "bg-navy/30",
        )}
      />
      {children}
    </div>
  );
}
