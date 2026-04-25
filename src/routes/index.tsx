import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { IndustriesSlider } from "@/components/IndustriesSlider";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Locations } from "@/components/sections/Locations";
import { WhyCubework } from "@/components/sections/WhyCubework";
import { Spaces } from "@/components/sections/Spaces";
import { Testimonials } from "@/components/sections/Testimonials";
import { Tour } from "@/components/sections/Tour";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cubework — Flexible Warehouse Space. Move In This Week." },
      {
        name: "description",
        content:
          "Month-to-month warehouse, office, parking & yard space across 50+ locations in 22 states. All-in pricing. No build-out. Move in within 48 hours.",
      },
      { property: "og:title", content: "Cubework — Flexible Warehouse Space" },
      {
        property: "og:description",
        content:
          "50+ locations. 22 states. Flex terms, all-in pricing, 48-hour move-in. The opposite of a 3-year industrial lease.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Locations />
        <WhyCubework />
        <Spaces />
        <IndustriesSlider />
        <Testimonials />
        <Tour />
        <FinalCTA />
      </main>
      <SiteFooter />
      <MobileStickyBar />
    </div>
  );
}
