import tourLoading from "@/assets/space-loading.webp";
import tourAisle from "@/assets/space-warehouse-3.webp";
import tourCommunity from "@/assets/space-community.webp";
import tourSecurity from "@/assets/space-warehouse-4.webp";

export type TourItem = {
  img: string;
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
};

export const TOUR: TourItem[] = [
  {
    img: tourLoading,
    eyebrow: "Move in this week",
    title: "Drive-in & dock-high loading",
    text: "Every facility comes with grade-level and dock-high doors, levelers, and seal kits — built so you can unload a 53' trailer the day you sign.",
    bullets: ["Multiple door types per site", "Truck court for 53' trailers", "Forklift-ready aisles"],
  },
  {
    img: tourSecurity,
    eyebrow: "Always open",
    title: "24/7 secure access",
    text: "QR and keycard entry, monitored cameras, and gated yards. Your team works on your schedule, not the landlord's.",
    bullets: ["Keycard + QR entry", "On-site cameras", "Gated, fenced yards"],
  },
  {
    img: tourAisle,
    eyebrow: "Move-in ready",
    title: "Power, racking & WiFi included",
    text: "Heavy power, lighting, WiFi, and optional pallet racking already in place. No build-out, no contractor schedules, no surprises.",
    bullets: ["High-bay LED lighting", "208V / 480V available", "Optional racking"],
  },
  {
    img: tourCommunity,
    eyebrow: "More than four walls",
    title: "Community of operators",
    text: "Join 2,000+ tenants — e-comm brands, 3PLs, importers, and trades. Shared loading dock, real neighbors, and a national network you can scale across.",
    bullets: ["50+ locations", "Multi-site agreement", "Operator community"],
  },
];
