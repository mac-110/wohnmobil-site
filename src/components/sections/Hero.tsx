"use client";

import { ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background placeholder for hero image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f1c] via-[#2a332d] to-[#1a2418]">
        {/* Placeholder pattern — replace with actual image */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 50%, rgba(200,149,108,0.15) 0%, transparent 50%),
                              radial-gradient(circle at 75% 30%, rgba(122,158,126,0.1) 0%, transparent 40%)`,
          }}
        />
        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent" />
      </div>

      {/* Hero image placeholder area */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
        <div className="w-[800px] h-[500px] border-2 border-dashed border-copper/40 rounded-2xl flex items-center justify-center">
          <span className="text-copper/60 text-lg tracking-widest uppercase">
            Wohnmobil-Foto hier einfügen
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-slide-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-copper/20 bg-copper/5 mb-8">
          <MapPin className="w-3.5 h-3.5 text-copper" />
          <span className="text-xs sm:text-sm tracking-widest uppercase text-copper/80">
            Lichtenfels, Deutschland
          </span>
        </div>

        {/* Title */}
        <h1 className="animate-fade-slide-up stagger-1 font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-warm-white leading-[0.95] mb-6">
          <span className="block">{siteConfig.name}</span>
          <span className="block text-copper mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal italic">
            {siteConfig.subtitle}
          </span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-slide-up stagger-2 text-lg sm:text-xl md:text-2xl text-sand/60 font-light max-w-2xl mx-auto mb-10 tracking-wide">
          {siteConfig.tagline}
        </p>

        {/* CTAs */}
        <div className="animate-fade-slide-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#reisemobil">
            <Button
              size="lg"
              className="bg-copper hover:bg-copper-light text-[var(--background)] font-semibold rounded-full px-8 py-6 text-base w-full sm:w-auto"
            >
              Reisemobil entdecken
            </Button>
          </a>
          <a href="#preise">
            <Button
              size="lg"
              variant="outline"
              className="border-copper/30 text-copper hover:bg-copper/10 rounded-full px-8 py-6 text-base w-full sm:w-auto"
            >
              Preise ansehen
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in stagger-5">
        <a href="#reisemobil" className="flex flex-col items-center gap-2 text-sand/30 hover:text-copper/50 transition-colors">
          <span className="text-[10px] uppercase tracking-[0.3em]">Entdecken</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
