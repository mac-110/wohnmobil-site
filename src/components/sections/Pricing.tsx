"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { Calendar, Info, Plus } from "lucide-react";

export function PricingSection() {
  const { pricing } = siteConfig;

  return (
    <section id="preise" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-copper/10 text-copper border-copper/20 hover:bg-copper/15 mb-4">
              Transparent
            </Badge>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white mb-4">
              Unsere Preise
            </h2>
            <p className="text-sand/50 text-lg max-w-xl mx-auto">
              Fair kalkuliert, alles inklusive. Mindestmietdauer: 7 Nächte.
            </p>
          </div>
        </ScrollReveal>

        {/* Season pricing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {pricing.seasons.map((season, i) => (
            <ScrollReveal key={season.name} delay={i * 100}>
              <Card
                className={`bg-forest/40 border-copper/10 hover:border-copper/25 transition-all ${
                  i === 2
                    ? "ring-1 ring-copper/30 bg-forest/60"
                    : ""
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-copper/60 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-widest">
                      {season.name}
                    </span>
                  </div>
                  <CardTitle className="font-[family-name:var(--font-display)] text-warm-white">
                    <span className="text-4xl sm:text-5xl font-bold">
                      €{season.price}
                    </span>
                    <span className="text-sand/40 text-lg font-normal ml-1">
                      /Nacht
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sand/40 text-sm">{season.period}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Service & deposit */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            <div className="bg-forest/40 border border-copper/10 rounded-xl p-6">
              <div className="flex items-center gap-2 text-copper mb-3">
                <Info className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Servicepauschale
                </span>
              </div>
              <p className="text-3xl font-bold text-warm-white font-[family-name:var(--font-display)] mb-2">
                €{pricing.service.price}
                <span className="text-sand/40 text-sm font-normal ml-2">
                  einmalig
                </span>
              </p>
              <p className="text-sand/40 text-sm leading-relaxed">
                {pricing.service.description}
              </p>
            </div>

            <div className="bg-forest/40 border border-copper/10 rounded-xl p-6">
              <div className="flex items-center gap-2 text-copper mb-3">
                <Info className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Kaution
                </span>
              </div>
              <p className="text-3xl font-bold text-warm-white font-[family-name:var(--font-display)] mb-2">
                €{pricing.deposit}
              </p>
              <p className="text-sand/40 text-sm">
                Wird nach Rückgabe in einwandfreiem Zustand erstattet.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Optional extras */}
        <ScrollReveal delay={200}>
          <div className="bg-forest/30 border border-copper/8 rounded-2xl p-6 sm:p-8">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-warm-white mb-6 flex items-center gap-2">
              <Plus className="w-5 h-5 text-copper" />
              Optionale Zusatzleistungen
            </h3>
            <div className="space-y-0">
              {pricing.extras.map((extra, i) => (
                <div key={extra.name}>
                  <div className="flex items-center justify-between py-4">
                    <div>
                      <span className="text-warm-white font-medium text-sm">
                        {extra.name}
                      </span>
                      <span className="text-sand/40 text-sm ml-2 hidden sm:inline">
                        — {extra.description}
                      </span>
                      <p className="text-sand/40 text-xs mt-0.5 sm:hidden">
                        {extra.description}
                      </p>
                    </div>
                    <span className="text-copper font-semibold text-sm whitespace-nowrap ml-4">
                      {extra.price}
                    </span>
                  </div>
                  {i < pricing.extras.length - 1 && (
                    <Separator className="bg-copper/8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
