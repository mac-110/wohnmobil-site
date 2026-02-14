import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/Hero";
import { VehicleSection } from "@/components/sections/Vehicle";
import { FeaturesSection } from "@/components/sections/Features";
import { IncludedSection } from "@/components/sections/Included";
import { PricingSection } from "@/components/sections/Pricing";
import { GallerySection } from "@/components/sections/Gallery";
import { ContactSection } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <VehicleSection />
        <FeaturesSection />
        <IncludedSection />
        <PricingSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
