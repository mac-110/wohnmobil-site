"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Reisemobil", href: "#reisemobil" },
  { label: "Ausstattung", href: "#ausstattung" },
  { label: "Preise", href: "#preise" },
  { label: "Galerie", href: "#galerie" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/95 backdrop-blur-md border-b border-copper/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-semibold text-warm-white tracking-wide">
            {siteConfig.name}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-copper font-medium">
            {siteConfig.subtitle}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-sand/70 hover:text-copper transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a href={`tel:${siteConfig.contact.phone}`}>
            <Button
              size="sm"
              className="bg-copper hover:bg-copper-light text-[var(--background)] font-semibold rounded-full px-5 gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              Anrufen
            </Button>
          </a>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-warm-white"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[var(--background)] border-copper/10 w-72"
          >
            <nav className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-sand/80 hover:text-copper transition-colors font-[family-name:var(--font-display)]"
                >
                  {link.label}
                </a>
              ))}
              <a href={`tel:${siteConfig.contact.phone}`} className="mt-4">
                <Button className="w-full bg-copper hover:bg-copper-light text-[var(--background)] font-semibold rounded-full gap-2">
                  <Phone className="w-4 h-4" />
                  Jetzt anrufen
                </Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
