import locFontana from "@/assets/loc-fontana.jpg";
import locTorrance from "@/assets/loc-torrance.jpg";
import locSantaAna from "@/assets/loc-santaana.jpg";
import locHayward from "@/assets/loc-hayward.jpg";
import locGlendale from "@/assets/loc-glendale.jpg";
import locTolleson from "@/assets/loc-tolleson.jpg";
import locHouston from "@/assets/loc-houston.jpg";
import locDallas from "@/assets/loc-dallas.jpg";
import locAtlanta from "@/assets/loc-atlanta.jpg";
import locChicago from "@/assets/loc-chicago.jpg";
import locKent from "@/assets/loc-kent.jpg";
import locLittleRock from "@/assets/loc-littlerock.jpg";

export type LocationStatus = "Leasing Fast" | "New" | "New Availability" | "Almost Full";
export type LocationRegion = "California" | "Texas" | "East Coast" | "Midwest" | "Port-Adjacent";

export type Location = {
  state: string;
  name: string;
  address: string;
  img: string;
  meta: string;
  priceFrom: number;
  available: number;
  status?: LocationStatus;
  regions: LocationRegion[];
};

export const LOCATIONS: Location[] = [
  { state: "California", name: "Fontana", address: "Fontana, CA", img: locFontana, meta: "Inland Empire · 50 mi from LA Port", priceFrom: 300, available: 3, status: "Leasing Fast", regions: ["California"] },
  { state: "California", name: "Torrance", address: "Torrance, CA", img: locTorrance, meta: "South Bay · 8 mi from LAX", priceFrom: 350, available: 5, status: "New", regions: ["California", "Port-Adjacent"] },
  { state: "California", name: "Santa Ana", address: "Santa Ana, CA", img: locSantaAna, meta: "Orange County · I-5 corridor", priceFrom: 400, available: 4, status: "New Availability", regions: ["California"] },
  { state: "California", name: "Hayward", address: "Hayward, CA", img: locHayward, meta: "Bay Area · 30 mi from Oakland Port", priceFrom: 325, available: 2, status: "Almost Full", regions: ["California", "Port-Adjacent"] },
  { state: "Arizona", name: "Glendale", address: "Glendale, AZ", img: locGlendale, meta: "Phoenix West · I-10 access", priceFrom: 300, available: 6, status: "New", regions: [] },
  { state: "Arizona", name: "Tolleson", address: "Tolleson, AZ", img: locTolleson, meta: "Phoenix Metro · Loop 101", priceFrom: 285, available: 4, regions: [] },
  { state: "Texas", name: "Houston", address: "Houston, TX", img: locHouston, meta: "North Houston · Beltway 8", priceFrom: 275, available: 7, status: "Leasing Fast", regions: ["Texas", "Port-Adjacent"] },
  { state: "Texas", name: "Dallas", address: "Dallas, TX", img: locDallas, meta: "DFW Metroplex · I-30 / I-35E", priceFrom: 290, available: 5, regions: ["Texas"] },
  { state: "Georgia", name: "Atlanta", address: "Atlanta, GA", img: locAtlanta, meta: "South Atlanta · I-285 access", priceFrom: 295, available: 4, status: "Leasing Fast", regions: ["East Coast"] },
  { state: "Illinois", name: "Chicago", address: "Bedford Park, IL", img: locChicago, meta: "Midway-adjacent · Tri-State", priceFrom: 310, available: 3, regions: ["Midwest"] },
  { state: "Washington", name: "Kent", address: "Kent, WA", img: locKent, meta: "Kent Valley · 20 mi from Seattle Port", priceFrom: 320, available: 2, status: "Almost Full", regions: ["Port-Adjacent"] },
  { state: "Arkansas", name: "Little Rock", address: "Little Rock, AR", img: locLittleRock, meta: "Central US · I-30 / I-40", priceFrom: 250, available: 8, regions: ["Midwest"] },
];
