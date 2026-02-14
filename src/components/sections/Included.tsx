"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { Check } from "lucide-react";

export function IncludedSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/backgrounds/bg-alpine-meadow.png')` }} />
      <div className="absolute inset-0 bg-[#1a1f1c]/80" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-copper/10 text-copper border-copper/20 hover:bg-copper/15 mb-4">
              Alles dabei
            </Badge>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white mb-4">
              Inklusive Leistungen
            </h2>
            <p className="text-sand/50 text-lg max-w-xl mx-auto">
              Bei uns ist alles im Preis enthalten — keine versteckten Kosten, keine bösen Überraschungen.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {siteConfig.included.map((item, i) => (
              <ScrollReveal key={item} delay={i * 50}>
                <div className="flex items-start gap-3 bg-forest/50 border border-copper/8 rounded-xl px-5 py-4 hover:border-copper/20 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-copper/15 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-copper" />
                  </div>
                  <span className="text-sand/80 text-sm leading-snug">
                    {item}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
