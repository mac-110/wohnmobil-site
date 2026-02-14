"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  const { contact } = siteConfig;

  return (
    <section id="kontakt" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/backgrounds/bg-starry-night.png')` }} />
      <div className="absolute inset-0 bg-[#1a1f1c]/75" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-copper/10 text-copper border-copper/20 hover:bg-copper/15 mb-4">
              Kontakt
            </Badge>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white mb-4">
              Bereit für Ihr Abenteuer?
            </h2>
            <p className="text-sand/50 text-lg max-w-xl mx-auto">
              Rufen Sie uns an oder schreiben Sie uns — wir beraten Sie gerne persönlich.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            <ScrollReveal delay={0}>
              <a
                href={`tel:${contact.phone}`}
                className="group flex flex-col items-center bg-forest/40 border border-copper/10 rounded-2xl p-8 hover:border-copper/30 hover:bg-forest/60 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-copper/10 flex items-center justify-center mb-4 group-hover:bg-copper/20 transition-colors">
                  <Phone className="w-6 h-6 text-copper" />
                </div>
                <span className="text-xs uppercase tracking-widest text-copper/60 mb-2">
                  Telefon
                </span>
                <span className="text-warm-white text-sm font-medium text-center">
                  {contact.phone}
                </span>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <a
                href={`mailto:${contact.email}`}
                className="group flex flex-col items-center bg-forest/40 border border-copper/10 rounded-2xl p-8 hover:border-copper/30 hover:bg-forest/60 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-copper/10 flex items-center justify-center mb-4 group-hover:bg-copper/20 transition-colors">
                  <Mail className="w-6 h-6 text-copper" />
                </div>
                <span className="text-xs uppercase tracking-widest text-copper/60 mb-2">
                  E-Mail
                </span>
                <span className="text-warm-white text-sm font-medium text-center break-all">
                  {contact.email}
                </span>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="group flex flex-col items-center bg-forest/40 border border-copper/10 rounded-2xl p-8">
                <div className="w-14 h-14 rounded-2xl bg-copper/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-copper" />
                </div>
                <span className="text-xs uppercase tracking-widest text-copper/60 mb-2">
                  Standort
                </span>
                <span className="text-warm-white text-sm font-medium text-center">
                  {contact.location}
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* CTA */}
          <ScrollReveal delay={300}>
            <div className="text-center">
              <a href={`tel:${contact.phone}`}>
                <Button
                  size="lg"
                  className="bg-copper hover:bg-copper-light text-[var(--background)] font-semibold rounded-full px-10 py-6 text-base gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Jetzt anrufen
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
