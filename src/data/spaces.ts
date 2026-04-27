import spaceWarehouse from "@/assets/space-warehouse-2.webp";
import spaceYard from "@/assets/space-yard.webp";
import spaceOffice from "@/assets/space-office.webp";
import spaceStudio from "@/assets/space-desk.webp";

export type Space = {
  img: string;
  title: string;
  range: string;
  category: string;
  price: string;
  priceUnit: string;
  available: number;
  features: string[];
  badge?: "Most Popular" | "New Format";
};

export const SPACES: Space[] = [
  {
    img: spaceWarehouse,
    title: "Warehouse & Storage",
    range: "300 – 1,000,000+ SF",
    category: "E-commerce / Storage / Distribution",
    price: "$300",
    priceUnit: "/mo",
    available: 3,
    features: ["24/7 secure access", "Dock-high & grade-level doors", "Forklift ready"],
    badge: "Most Popular",
  },
  {
    img: spaceOffice,
    title: "Office & Coworking",
    range: "Desk – Private Suite",
    category: "Teams / Admin / Remote Work",
    price: "$150",
    priceUnit: "/mo",
    available: 8,
    features: ["Furnished + WiFi", "Conference rooms", "Mail handling"],
  },
  {
    img: spaceYard,
    title: "Truck & Yard",
    range: "Single trailer to fleet",
    category: "Logistics / Fleet / Container Storage",
    price: "$500",
    priceUnit: "/mo",
    available: 5,
    features: ["Fenced & gated", "Trailer parking", "24/7 entry"],
  },
  {
    img: spaceStudio,
    title: "Office & Coworking",
    range: "By the day or month",
    category: "Content / Events / Productions",
    price: "$250",
    priceUnit: "/day",
    available: 4,
    features: ["Cyc walls available", "Loading bay access", "Power & lighting"],
    badge: "New Format",
  },
];
