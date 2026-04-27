import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Phone,
  MapPin,
  Package,
  Calendar,
  Maximize2,
  DollarSign,
  Lock,
  Zap,
  Warehouse as WarehouseIcon,
  Truck,
  Briefcase,
  CalendarHeart,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STATES = [
  "California", "Texas", "Georgia", "Illinois", "Arizona", "Washington",
  "Oregon", "Nevada", "Colorado", "Utah", "Missouri", "Tennessee",
  "New Jersey", "Pennsylvania", "Indiana", "South Carolina",
] as const;

const SPACE_TYPES = [
  { value: "warehouse", label: "Warehouse", Icon: WarehouseIcon },
  { value: "yard", label: "Truck / Yard", Icon: Truck },
  { value: "office", label: "Office", Icon: Briefcase },
  { value: "event", label: "Event Space", Icon: CalendarHeart },
] as const;

const MOVE_WINDOWS = [
  { value: "asap", label: "ASAP" },
  { value: "30", label: "Within 30 days" },
  { value: "60", label: "30+ days" },
] as const;

const SIZE_RANGES = [
  "Under 1,000 sq ft",
  "1,000 – 5,000 sq ft",
  "5,000 – 20,000 sq ft",
  "20,000+ sq ft",
] as const;

const BUDGET_RANGES = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
] as const;

const schema = z.object({
  state: z.string().min(1, "Pick a state"),
  spaceType: z.enum(["warehouse", "yard", "office", "event"], {
    errorMap: () => ({ message: "Pick a space type" }),
  }),
  moveIn: z.enum(["asap", "30", "60"], {
    errorMap: () => ({ message: "Pick a window" }),
  }),
  size: z.string().optional(),
  budget: z.string().optional(),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s().+-]{10,}$/, "Enter a valid phone number"),
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
    defaultValues: { state: "", moveIn: "asap", phone: "", website: "", size: "", budget: "" },
    mode: "onTouched",
  });

  const spaceType = watch("spaceType");
  const moveIn = watch("moveIn");

  const onSubmit = async (values: FormValues) => {
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
      ? "relative overflow-hidden rounded-2xl bg-white p-7 sm:p-9 shadow-[0_24px_70px_-20px_rgba(15,23,42,0.45)] ring-1 ring-black/5"
      : "relative";

  // Reusable row with icon-leading label
  const Row = ({
    icon: Icon,
    children,
  }: {
    icon: typeof MapPin;
    children: React.ReactNode;
  }) => (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green/10 text-green-dark">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={cn(cardClasses, className)}
      aria-labelledby={`${formId}-title`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-green-dark">
          Find Your Space
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-green/10 px-2.5 py-1 text-[11px] font-semibold text-green-dark">
          <Zap className="h-3 w-3" fill="currentColor" />
          Takes ~60 seconds
        </div>
      </div>
      <h2
        id={`${formId}-title`}
        className="mt-3 font-display text-[2rem] font-black leading-[1.05] tracking-tight text-navy sm:text-[2.25rem]"
      >
        Let's find your <span className="text-green-dark">perfect space.</span>
      </h2>
      <p className="mt-2 text-[14px] leading-relaxed text-navy/60">
        Answer a few quick questions and we'll show you the best matches — fast.
      </p>

      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div className="mt-6 space-y-5">
        {/* WHERE */}
        <Row icon={MapPin}>
          <label
            htmlFor={`${formId}-state`}
            className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-navy"
          >
            Where do you need space?
          </label>
          <select
            id={`${formId}-state`}
            {...register("state")}
            aria-invalid={!!errors.state}
            className={cn(
              "w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-colors",
              "focus-visible:border-green focus-visible:ring-2 focus-visible:ring-green/30",
              errors.state ? "border-destructive" : "border-border",
            )}
          >
            <option value="" disabled>
              Select a state or city
            </option>
            {STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.state && (
            <p className="mt-1 text-xs text-destructive">{errors.state.message}</p>
          )}
        </Row>

        <div className="border-t border-border" />

        {/* SPACE TYPE */}
        <Row icon={Package}>
          <fieldset>
            <legend className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-navy">
              What type of space?
            </legend>
            <div className="grid grid-cols-2 gap-2.5" role="radiogroup">
              {SPACE_TYPES.map((opt) => {
                const selected = spaceType === opt.value;
                const Icon = opt.Icon;
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
                      "flex items-center justify-center gap-2 rounded-md border px-3 py-3 text-sm font-semibold transition-all",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40",
                      selected
                        ? "border-green bg-green/10 text-green-dark"
                        : "border-border bg-white text-navy/80 hover:border-navy/40",
                    )}
                  >
                    <Icon className="h-4 w-4 text-green-dark" />
                    {opt.label}
                  </button>
                );
              })}
            </div>
            {errors.spaceType && (
              <p className="mt-1 text-xs text-destructive">{errors.spaceType.message}</p>
            )}
          </fieldset>
        </Row>

        <div className="border-t border-border" />

        {/* MOVE-IN */}
        <Row icon={Calendar}>
          <fieldset>
            <legend className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-navy">
              When do you need to move in?
            </legend>
            <div className="grid grid-cols-3 gap-2" role="radiogroup">
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
                      "rounded-md border px-2 py-2.5 text-xs font-semibold transition-all sm:text-sm",
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
        </Row>

        <div className="border-t border-border" />

        {/* SIZE */}
        <Row icon={Maximize2}>
          <label
            htmlFor={`${formId}-size`}
            className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-navy"
          >
            Approximate size <span className="text-navy/40">(optional)</span>
          </label>
          <select
            id={`${formId}-size`}
            {...register("size")}
            className="w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus-visible:border-green focus-visible:ring-2 focus-visible:ring-green/30"
          >
            <option value="">Select size range</option>
            {SIZE_RANGES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Row>

        {/* BUDGET */}
        <Row icon={DollarSign}>
          <label
            htmlFor={`${formId}-budget`}
            className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-navy"
          >
            Monthly budget <span className="text-navy/40">(optional)</span>
          </label>
          <select
            id={`${formId}-budget`}
            {...register("budget")}
            className="w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus-visible:border-green focus-visible:ring-2 focus-visible:ring-green/30"
          >
            <option value="">Select budget range</option>
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Row>

        {/* PHONE */}
        <Row icon={Phone}>
          <label
            htmlFor={`${formId}-phone`}
            className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-navy"
          >
            Phone number
          </label>
          <input
            id={`${formId}-phone`}
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="(555) 123-4567"
            {...register("phone")}
            aria-invalid={!!errors.phone}
            className={cn(
              "w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-colors",
              "focus-visible:border-green focus-visible:ring-2 focus-visible:ring-green/30",
              errors.phone ? "border-destructive" : "border-border",
            )}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>
          )}
          <p className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-navy/50">
            <Lock className="h-3 w-3" /> Your information is secure and never shared.
          </p>
        </Row>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-green py-4",
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
    </form>
  );
}
