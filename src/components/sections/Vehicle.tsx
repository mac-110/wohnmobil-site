"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteConfig } from "@/config/site";
import { Shield, Ruler, Weight, Car, Gauge } from "lucide-react";

const specIcons = [Car, Weight, Weight, Ruler, Gauge];

export function VehicleSection() {
  return (
    <section id="reisemobil" className="py-24 sm:py-32 relative">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-copper/[0.03] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-copper/10 text-copper border-copper/20 hover:bg-copper/15 mb-4">
              Unser Fahrzeug
            </Badge>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white mb-4">
              {siteConfig.vehicle.name}
            </h2>
            <p className="text-sand/50 text-lg max-w-xl mx-auto">
              Ein Premium-Reisemobil, das keine Wünsche offen lässt — kompakt genug für den Alltag, großzügig genug für Ihr Abenteuer.
            </p>
          </div>
        </ScrollReveal>

        {/* Vehicle image placeholder */}
        <ScrollReveal delay={100}>
          <div className="relative rounded-2xl overflow-hidden mb-16 aspect-[21/9] bg-forest border border-copper/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-copper/10 flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-copper/50" />
                </div>
                <p className="text-sand/30 text-sm tracking-widest uppercase">
                  Fahrzeugfoto folgt
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Specs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {siteConfig.vehicle.specs.map((spec, i) => (
            <ScrollReveal key={spec.label} delay={i * 80}>
              <div className="bg-forest/50 border border-copper/10 rounded-xl p-5 text-center hover:border-copper/25 transition-colors group">
                <div className="text-xs uppercase tracking-widest text-copper/60 mb-2 font-medium">
                  {spec.label}
                </div>
                <div className="text-warm-white font-medium text-sm leading-snug">
                  {spec.value}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
