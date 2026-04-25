import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Loader2, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const STATES = [
  "California", "Texas", "Georgia", "Illinois", "Arizona", "Washington",
  "Oregon", "Nevada", "Colorado", "Utah", "Missouri", "Tennessee",
  "New Jersey", "Pennsylvania", "Indiana", "South Carolina",
] as const;

const SPACE_TYPES = [
  { value: "warehouse", label: "Warehouse" },
  { value: "yard", label: "Truck / Yard" },
  { value: "office", label: "Office" },
  { value: "studio", label: "Studio" },
] as const;

const MOVE_WINDOWS = [
  { value: "asap", label: "ASAP" },
  { value: "30", label: "30 days" },
  { value: "60", label: "60+ days" },
] as const;

const schema = z.object({
  state: z.string().min(1, "Pick a state"),
  spaceType: z.enum(["warehouse", "yard", "office", "studio"], {
    errorMap: () => ({ message: "Pick a space type" }),
  }),
  moveIn: z.enum(["asap", "30", "60"], {
    errorMap: () => ({ message: "Pick a window" }),
  }),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s().+-]{10,}$/, "Enter a valid phone number"),
  // Honeypot — must stay empty
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  variant?: "card" | "inline";
  className?: string;
};

export function LeadForm({ variant = "card", className }: Props) {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { state: "", moveIn: "asap", phone: "", website: "" },
    mode: "onTouched",
  });

  const spaceType = watch("spaceType");
  const moveIn = watch("moveIn");

  const onSubmit = async (values: FormValues) => {
    // Submit stub — replace with /api/leads in production.
    // Conversion event hook (gtag/Segment) goes here.
    if (typeof window !== "undefined") {
      const w = window as unknown as { dataLayer?: unknown[] };
      w.dataLayer?.push({ event: "lead_submit", ...values });
    }
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl bg-white p-8 shadow-[0_24px_70px_-20px_rgba(15,23,42,0.45)] ring-1 ring-black/5",
          className,
        )}
        role="status"
        aria-live="polite"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green via-green-light to-green" />
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green/15 text-green-dark">
          <CheckCircle2 className="h-7 w-7" strokeWidth={2.25} />
        </div>
        <h3 className="font-display text-2xl font-black uppercase tracking-tight text-navy">
          You're on the list
        </h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-navy/70">
          A Cubework expert will reach out within{" "}
          <strong className="text-navy">1 business hour</strong> with matching spaces. Need to talk
          now?
        </p>
        <a
          href="tel:+18003386369"
          className="mt-6 inline-flex items-center gap-2.5 rounded-md border border-navy/15 bg-white px-4 py-2.5 font-display text-sm font-bold uppercase tracking-[0.18em] text-navy transition-colors hover:border-green hover:text-green-dark"
        >
          <Phone className="h-4 w-4" /> 800-338-6369
        </a>
      </div>
    );
  }

  const cardClasses =
    variant === "card"
      ? "relative overflow-hidden rounded-2xl bg-white p-7 sm:p-8 shadow-[0_24px_70px_-20px_rgba(15,23,42,0.45)] ring-1 ring-black/5"
      : "relative";

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={cn(cardClasses, className)}
      aria-labelledby={`${formId}-title`}
    >
      {variant === "card" && (
        <div
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green via-green-light to-green"
          aria-hidden
        />
      )}

      <div className="flex items-center justify-between gap-3">
        <div className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-green-dark">
          Find Your Space
        </div>
        <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/50">
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          ~60 seconds
        </div>
      </div>
      <h2
        id={`${formId}-title`}
        className="mt-2 font-display text-2xl font-black uppercase leading-[1.05] tracking-tight text-navy"
      >
        See matching spaces, fast.
      </h2>
      <p className="mt-1.5 text-[13px] leading-relaxed text-navy/60">
        Tell us what you need. An expert calls within 1 business hour.
      </p>

      {/* Honeypot — visually hidden, off keyboard nav */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <label
            htmlFor={`${formId}-state`}
            className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-navy"
          >
            State / Market
          </label>
          <select
            id={`${formId}-state`}
            {...register("state")}
            aria-invalid={!!errors.state}
            aria-describedby={errors.state ? `${formId}-state-err` : undefined}
            className={cn(
              "w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-colors",
              "focus-visible:border-green focus-visible:ring-2 focus-visible:ring-green/30",
              errors.state ? "border-destructive" : "border-border",
            )}
          >
            <option value="" disabled>
              Select a state…
            </option>
            {STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.state && (
            <p id={`${formId}-state-err`} className="mt-1 text-xs text-destructive">
              {errors.state.message}
            </p>
          )}
        </div>

        <fieldset>
          <legend className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-navy">
            Space Type
          </legend>
          <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Space type">
            {SPACE_TYPES.map((opt) => {
              const selected = spaceType === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() =>
                    setValue("spaceType", opt.value, {
                      shouldValidate: true,
                      shouldDirty: true,
                    })
                  }
                  className={cn(
                    "rounded-md border px-3 py-2.5 text-sm font-semibold transition-all",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40",
                    selected
                      ? "border-green bg-green/10 text-green-dark"
                      : "border-border bg-white text-navy/80 hover:border-navy/40",
                  )}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
          {errors.spaceType && (
            <p className="mt-1 text-xs text-destructive">{errors.spaceType.message}</p>
          )}
        </fieldset>

        <fieldset>
          <legend className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-navy">
            Move-In Window
          </legend>
          <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Move-in window">
            {MOVE_WINDOWS.map((opt) => {
              const selected = moveIn === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() =>
                    setValue("moveIn", opt.value, {
                      shouldValidate: true,
                      shouldDirty: true,
                    })
                  }
                  className={cn(
                    "rounded-md border px-2 py-2.5 text-sm font-semibold transition-all",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40",
                    selected
                      ? "border-green bg-green/10 text-green-dark"
                      : "border-border bg-white text-navy/80 hover:border-navy/40",
                  )}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label
            htmlFor={`${formId}-phone`}
            className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-navy"
          >
            Phone
          </label>
          <input
            id={`${formId}-phone`}
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="(555) 123-4567"
            {...register("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `${formId}-phone-err` : undefined}
            className={cn(
              "w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-colors",
              "focus-visible:border-green focus-visible:ring-2 focus-visible:ring-green/30",
              errors.phone ? "border-destructive" : "border-border",
            )}
          />
          {errors.phone && (
            <p id={`${formId}-phone-err`} className="mt-1 text-xs text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "mt-1 inline-flex w-full items-center justify-center gap-2 rounded-md bg-green py-3.5",
            "font-display text-sm font-extrabold uppercase tracking-widest text-white",
            "shadow-lg shadow-green/30 transition-all hover:-translate-y-0.5 hover:bg-green-dark",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/50 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Matching spaces…
            </>
          ) : (
            <>
              See Matching Spaces <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

      </div>

      {/* Credibility strip */}
      <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-5 text-center">
        <div>
          <div className="font-display text-base font-black leading-none text-navy">1 hr</div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/50">
            Response
          </div>
        </div>
        <div className="border-x border-border">
          <div className="font-display text-base font-black leading-none text-navy">48 hr</div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/50">
            Move-in
          </div>
        </div>
        <div>
          <div className="font-display text-base font-black leading-none text-navy">2,000+</div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/50">
            Tenants
          </div>
        </div>
      </div>
    </form>
  );
}
