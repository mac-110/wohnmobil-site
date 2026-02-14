"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

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
                {"src" in item && item.src ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-sand/30 text-xs tracking-widest uppercase">
                      {item.alt}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 text-warm-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.alt}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
