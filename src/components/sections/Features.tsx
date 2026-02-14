"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import {
  Sparkles,
  Sun,
  Bike,
  Gauge,
  Package,
  Tv,
  CookingPot,
  Refrigerator,
  ShowerHead,
  BedDouble,
  ArrowUpFromLine,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Sun,
  Bike,
  Gauge,
  Package,
  Tv,
  CookingPot,
  Refrigerator,
  ShowerHead,
  BedDouble,
  ArrowUpFromLine,
};

export function FeaturesSection() {
  return (
    <section id="ausstattung" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-copper/[0.02] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-copper/10 text-copper border-copper/20 hover:bg-copper/15 mb-4">
              Highlights
            </Badge>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white mb-4">
              Durchdacht bis ins Detail
            </h2>
            <p className="text-sand/50 text-lg max-w-xl mx-auto">
              Jede Ecke des LAIKA ECOVIP 309s wurde für maximalen Komfort gestaltet.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <ScrollReveal key={feature.title} delay={i * 60}>
                <div className="group relative bg-forest/40 border border-copper/8 rounded-2xl p-6 hover:border-copper/25 hover:bg-forest/60 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-copper/10 flex items-center justify-center mb-4 group-hover:bg-copper/20 transition-colors">
                    <Icon className="w-5 h-5 text-copper" />
                  </div>
                  {/* Text */}
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-warm-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sand/50 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
