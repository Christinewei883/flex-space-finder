import {
  Clock,
  DollarSign,
  Layers,
  MapPin,
  Shield,
  Truck,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Stat = { n: string; label: string };
export type FeatureBullet = { icon: LucideIcon; text: string };
export type WhyCard = {
  icon: LucideIcon;
  title: string;
  text: string;
  badge: string;
};
export type Testimonial = {
  initials: string;
  quote: string;
  name: string;
  role: string;
};

export const STATS: Stat[] = [
  { n: "50+", label: "Locations" },
  { n: "22", label: "States" },
  { n: "10M+", label: "Sq Ft Managed" },
  { n: "2,000+", label: "Active Tenants" },
];

export const TRUST: FeatureBullet[] = [
  { icon: Clock, text: "Month-to-month terms" },
  { icon: DollarSign, text: "All-in pricing — no NNN" },
  { icon: Shield, text: "24/7 secure access" },
  { icon: Truck, text: "Dock-high & grade-level" },
  { icon: Layers, text: "50 locations, one agreement" },
];

export const WHY: WhyCard[] = [
  {
    icon: Zap,
    title: "48-Hour Move-In",
    text: "Loading docks, WiFi, power, 24/7 secure access — already there. Most clients are operational within 48 hours of signing.",
    badge: "Zero downtime",
  },
  {
    icon: Clock,
    title: "Flex Terms",
    text: "Month-to-month, seasonal, or long-term. Expand for peak, pull back when it's slow. No penalties, no renegotiation.",
    badge: "No lock-in",
  },
  {
    icon: DollarSign,
    title: "All-In Pricing",
    text: "One monthly rate. Utilities, maintenance, security, property management — included. No NNN ambush.",
    badge: "No surprises",
  },
  {
    icon: MapPin,
    title: "50 Locations, One Deal",
    text: "Need West Coast distribution and East Coast fulfillment? Add locations under a single contract. No new lease.",
    badge: "Multi-market ready",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "MK",
    quote:
      "We went from signed agreement to receiving freight in 36 hours. Our Amazon FBA prep operation was up before our competitors got a call back from their broker.",
    name: "M. Kim",
    role: "E-Commerce Operator · City of Industry, CA",
  },
  {
    initials: "DL",
    quote:
      "We needed surge capacity for peak season without locking into a 3-year lease. Cubework gave us 15,000 SF for Q4, we scaled back in January. No penalties, no drama.",
    name: "D. Leung",
    role: "3PL Operations Director · Houston, TX",
  },
  {
    initials: "RP",
    quote:
      "Tried to negotiate a traditional industrial lease for nine months. Signed with Cubework in three days. The all-in number is the actual number — no NNN surprises.",
    name: "R. Patel",
    role: "Founder · Apparel Brand · Atlanta, GA",
  },
];
