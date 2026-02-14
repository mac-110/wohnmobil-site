"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { Camera } from "lucide-react";

export function GallerySection() {
  return (
    <section id="galerie" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-forest/30" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-copper/10 text-copper border-copper/20 hover:bg-copper/15 mb-4">
              Impressionen
            </Badge>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white mb-4">
              Fotogalerie
            </h2>
            <p className="text-sand/50 text-lg max-w-xl mx-auto">
              Einblicke in Ihr zukünftiges Zuhause auf Rädern.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {siteConfig.gallery.map((item, i) => (
            <ScrollReveal key={item.alt} delay={i * 60}>
              <div className="group relative aspect-[4/3] bg-forest/50 border border-copper/8 rounded-xl overflow-hidden hover:border-copper/25 transition-all cursor-pointer">
                {/* Replace with <Image> when photos are available */}
                {/* <Image src={`/images/${item.alt.toLowerCase()}.jpg`} alt={item.alt} fill className="object-cover" /> */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Camera className="w-8 h-8 text-copper/30 mb-2 group-hover:text-copper/50 transition-colors" />
                  <span className="text-sand/30 text-xs tracking-widest uppercase group-hover:text-sand/50 transition-colors">
                    {item.alt}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
