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
    title: "Expand & Downsize on Your Terms",
    text: "Grow into more space when sales spike. Pull back when the season ends. Adjust square footage without breaking your contract or starting over.",
    badge: "Flexible footprint",
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
    initials: "EY",
    quote:
      "I've been operating my business out of this location for close to 3 years and highly recommend it. The staff keeps the property clean, the loading docks are convenient, and there's a post office nearby for daily pickups. Many different size units and easy to upgrade — spaces fill up fast.",
    name: "Elan Yadan",
    role: "Tenant · 3 years",
  },
  {
    initials: "JC",
    quote:
      "Safe and convenient warehouse. 24-hour security gate personnel, very friendly and helpful. The on-site manager is great with prompt attention to concerns. Kitchen, bathroom, and meeting room provided. Highly recommend for receiving and shipping.",
    name: "Johnny Choi",
    role: "Tenant · 2 years",
  },
  {
    initials: "GS",
    quote:
      "Cubework is a great solution to our warehousing needs — this is our second time using their facility in six years. Whenever we need warehouse storage, Cubework is always on top of our list. With multiple locations across SoCal, you'll always find one in your area. Great service and flexible to our needs.",
    name: "Gerard Sanico",
    role: "Repeat Tenant · SoCal",
  },
  {
    initials: "WW",
    quote:
      "Well-managed warehouse, easy parking, and very clean. There's a guard looking after the whole warehouse, so very safe. Very convenient for truck shipping with a dock and located well for UPS/FedEx pickup. I highly recommend it!",
    name: "William Wei",
    role: "Tenant",
  },
  {
    initials: "DW",
    quote:
      "We leased a warehouse here for a couple of years — the facility is always clean, docks and equipment are plentiful, other tenants are nice, and the manager Alen was super helpful with onboarding, support, and termination. Cubework is a great and price-effective solution if you need temporary or long-term space without a huge commitment. 10/10.",
    name: "Doug Welch",
    role: "Local Guide · Former Tenant",
  },
  {
    initials: "SJ",
    quote:
      "I've had my company headquarters at Cubework Lincolnwood for several years now and they've been fantastic the entire time. The Facilities Manager, Alen Besic, has always gone above and beyond. Highly recommend Cubework Lincolnwood for any business and warehousing needs.",
    name: "Scott Judy",
    role: "HQ Tenant · Lincolnwood, IL",
  },
];
