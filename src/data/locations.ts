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

export type Location = {
  state: string;
  name: string;
  address: string;
  img: string;
  meta: string;
  tag?: "Popular" | "New" | "Port-adjacent";
};

export const LOCATIONS: Location[] = [
  { state: "California", name: "Fontana", address: "Fontana, CA · 92337", img: locFontana, meta: "Inland Empire · 50 mi from LA Port", tag: "Popular" },
  { state: "California", name: "Torrance", address: "Torrance, CA · 90501", img: locTorrance, meta: "South Bay · 8 mi from LAX", tag: "Port-adjacent" },
  { state: "California", name: "Santa Ana", address: "Santa Ana, CA · 92707", img: locSantaAna, meta: "Orange County · I-5 corridor" },
  { state: "California", name: "Hayward", address: "Hayward, CA · 94544", img: locHayward, meta: "Bay Area · 30 mi from Oakland Port" },
  { state: "Arizona", name: "Glendale", address: "Glendale, AZ · 85355", img: locGlendale, meta: "Phoenix West · I-10 access", tag: "New" },
  { state: "Arizona", name: "Tolleson", address: "Tolleson, AZ · 85353", img: locTolleson, meta: "Phoenix Metro · Loop 101" },
  { state: "Texas", name: "Houston", address: "Houston, TX · 77038", img: locHouston, meta: "North Houston · Beltway 8", tag: "Popular" },
  { state: "Texas", name: "Dallas", address: "Dallas, TX · 75212", img: locDallas, meta: "DFW Metroplex · I-30 / I-35E" },
  { state: "Georgia", name: "Atlanta", address: "Atlanta, GA · 30336", img: locAtlanta, meta: "South Atlanta · I-285 access", tag: "Popular" },
  { state: "Illinois", name: "Chicago", address: "Bedford Park, IL · 60638", img: locChicago, meta: "Midway-adjacent · Tri-State" },
  { state: "Washington", name: "Kent", address: "Kent, WA · 98032", img: locKent, meta: "Kent Valley · 20 mi from Seattle Port", tag: "Port-adjacent" },
  { state: "Arkansas", name: "Little Rock", address: "Little Rock, AR · 72209", img: locLittleRock, meta: "Central US · I-30 / I-40" },
];
