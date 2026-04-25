import spaceWarehouse from "@/assets/space-warehouse-2.webp";
import spaceYard from "@/assets/space-yard.webp";
import spaceOffice from "@/assets/space-office.webp";
import spaceStudio from "@/assets/space-desk.webp";

export type Space = {
  img: string;
  title: string;
  range: string;
  startsAt: string;
  text: string;
  features: string[];
  badge?: "Most Popular" | "New Format";
};

export const SPACES: Space[] = [
  {
    img: spaceWarehouse,
    title: "Warehouse & Storage",
    range: "300 – 1,000,000+ SF",
    startsAt: "From 300 SF",
    text: "High ceilings, dock-high & grade-level loading, heavy power, forklift access.",
    features: ["24/7 secure access", "Dock-high & GL doors", "Forklift ready"],
    badge: "Most Popular",
  },
  {
    img: spaceOffice,
    title: "Office & Coworking",
    range: "Desk – Private Suite",
    startsAt: "From 1 desk",
    text: "Private offices, dedicated desks, conference rooms — furnished, WiFi included.",
    features: ["Furnished + WiFi", "Conference rooms", "Mail handling"],
  },
  {
    img: spaceYard,
    title: "Truck & Yard",
    range: "Single trailer to fleet",
    startsAt: "From 1 trailer spot",
    text: "Fenced yard for trucks, trailers, and containers. Overnight parking and driver amenities.",
    features: ["Fenced & gated", "Trailer parking", "24/7 entry"],
  },
  {
    img: spaceStudio,
    title: "Creative Studios",
    range: "Production & events",
    startsAt: "By the day or month",
    text: "Content production, podcasting, video, and event hosting with pro hookups.",
    features: ["Cyc walls available", "Loading bay access", "Power & lighting"],
    badge: "New Format",
  },
];
