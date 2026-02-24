"use client";

import { useState, useMemo } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { Calculator, CalendarDays, Check, ShieldCheck } from "lucide-react";
import { WhatsAppBookingButton } from "@/components/WhatsAppButton";

// Season date ranges for 2025/2026 (month is 0-indexed)
const SEASON_RANGES = [
  { name: "Vorsaison", price: 109, ranges: [
    { from: [2, 1], to: [4, 1] },     // 01.03 – 30.04 (exclusive May 1)
  ]},
  { name: "Nebensaison", price: 125, ranges: [
    { from: [4, 1], to: [6, 1] },     // 01.05 – 30.06 (exclusive Jul 1)
  ]},
  { name: "Hauptsaison", price: 147, ranges: [
    { from: [6, 1], to: [8, 15] },    // 01.07 – 14.09 (exclusive Sep 15)
  ]},
  { name: "Nachsaison", price: 109, ranges: [
    { from: [8, 15], to: [9, 31] },   // 15.09 – 30.10 (exclusive Oct 31)
  ]},
];

function getSeasonForDate(date: Date): { name: string; price: number } | null {
  const month = date.getMonth();
  const day = date.getDate();

  for (const season of SEASON_RANGES) {
    for (const range of season.ranges) {
      const [fromMonth, fromDay] = range.from;
      const [toMonth, toDay] = range.to;

      const dateVal = month * 100 + day;
      const fromVal = fromMonth * 100 + fromDay;
      const toVal = toMonth * 100 + toDay;

      if (dateVal >= fromVal && dateVal < toVal) {
        return { name: season.name, price: season.price };
      }
    }
  }
  return null;
}

function getDaysBetween(start: Date, end: Date): number {
  return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
}

function parseExtraPrice(priceStr: string): { amount: number; perDay: boolean } {
  const perDay = priceStr.includes("/Tag");
  const amount = parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
  return { amount, perDay };
}

export function PriceCalculator() {
  const { pricing } = siteConfig;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Season limits: 02.03 – 31.10 of current or next year
  const now = new Date();
  const year = now.getMonth() >= 10 ? now.getFullYear() + 1 : now.getFullYear();
  const seasonMin = `${year}-03-01`;
  const seasonMax = `${year}-10-30`;
  const [selectedExtras, setSelectedExtras] = useState<Set<number>>(new Set());

  const toggleExtra = (index: number) => {
    setSelectedExtras((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const calculation = useMemo(() => {
    if (!startDate || !endDate) return null;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const totalNights = getDaysBetween(start, end);

    if (totalNights < 1) return null;

    // Calculate nights per season
    const seasonBreakdown: Record<string, { nights: number; price: number }> = {};

    for (let i = 0; i < totalNights; i++) {
      const current = new Date(start);
      current.setDate(current.getDate() + i);
      const season = getSeasonForDate(current);
      if (season) {
        if (!seasonBreakdown[season.name]) {
          seasonBreakdown[season.name] = { nights: 0, price: season.price };
        }
        seasonBreakdown[season.name].nights++;
      }
    }

    const seasonEntries = Object.entries(seasonBreakdown);
    const rentalCost = seasonEntries.reduce((sum, [, s]) => sum + s.nights * s.price, 0);

    // Extras
    let extrasCost = 0;
    const extrasBreakdown: { name: string; cost: number }[] = [];
    selectedExtras.forEach((idx) => {
      const extra = pricing.extras[idx];
      const { amount, perDay } = parseExtraPrice(extra.price);
      const cost = perDay ? amount * totalNights : amount;
      extrasCost += cost;
      extrasBreakdown.push({ name: extra.name, cost });
    });

    const serviceFee = pricing.service.price;
    const total = rentalCost + serviceFee + extrasCost;

    const inSeasonNights = seasonEntries.reduce((s, [, v]) => s + v.nights, 0);
    const outOfSeasonNights = totalNights - inSeasonNights;

    // Block if ANY days fall outside season
    if (outOfSeasonNights > 0) {
      return {
        totalNights,
        seasonEntries,
        rentalCost: 0,
        extrasCost: 0,
        extrasBreakdown: [],
        serviceFee: 0,
        total: 0,
        deposit: pricing.deposit,
        outOfSeason: true,
        outOfSeasonNights,
      };
    }

    return {
      totalNights,
      seasonEntries,
      rentalCost,
      extrasCost,
      extrasBreakdown,
      serviceFee,
      total,
      deposit: pricing.deposit,
      outOfSeason: false,
      outOfSeasonNights: 0,
    };
  }, [startDate, endDate, selectedExtras, pricing]);

  return (
    <section id="preisrechner" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[#141a16]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-copper/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-copper/10 text-copper border-copper/20 hover:bg-copper/15 mb-4">
              <Calculator className="w-3 h-3 mr-1" />
              Interaktiv
            </Badge>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white mb-4">
              Preisrechner
            </h2>
            <p className="text-sand/50 text-lg max-w-xl mx-auto">
              Berechnen Sie Ihren individuellen Mietpreis — sekundengenau nach Saison.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="bg-forest/40 border border-copper/10 rounded-2xl p-5 sm:p-8">
            {/* Date inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="text-sand/60 text-sm font-medium uppercase tracking-widest mb-2 block">
                  <CalendarDays className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                  Anreise
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  min={seasonMin}
                  max={seasonMax}
                  className="block w-full bg-forest/60 border border-copper/15 rounded-lg px-4 py-3 text-warm-white
                    focus:outline-none focus:ring-1 focus:ring-copper/40 focus:border-copper/30
                    [color-scheme:dark] text-sm [-webkit-appearance:none] [appearance:none]"
                />
              </div>
              <div>
                <label className="text-sand/60 text-sm font-medium uppercase tracking-widest mb-2 block">
                  <CalendarDays className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                  Abreise
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={startDate || seasonMin}
                  max={seasonMax}
                  className="block w-full bg-forest/60 border border-copper/15 rounded-lg px-4 py-3 text-warm-white
                    focus:outline-none focus:ring-1 focus:ring-copper/40 focus:border-copper/30
                    [color-scheme:dark] text-sm [-webkit-appearance:none] [appearance:none]"
                />
              </div>
            </div>

            {/* Extras */}
            <div className="mb-8">
              <h3 className="text-warm-white font-semibold text-sm uppercase tracking-widest mb-4">
                Extras hinzufügen
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pricing.extras.map((extra, i) => (
                  <button
                    key={extra.name}
                    onClick={() => toggleExtra(i)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                      selectedExtras.has(i)
                        ? "bg-copper/10 border-copper/30 ring-1 ring-copper/20"
                        : "bg-forest/30 border-copper/8 hover:border-copper/15"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                          selectedExtras.has(i)
                            ? "bg-copper border-copper text-forest"
                            : "border-sand/20 bg-transparent"
                        }`}
                      >
                        {selectedExtras.has(i) && <Check className="w-3 h-3" />}
                      </div>
                      <div>
                        <span className="text-warm-white text-sm font-medium">{extra.name}</span>
                        <p className="text-sand/40 text-xs">{extra.description}</p>
                      </div>
                    </div>
                    <span className="text-copper font-semibold text-sm whitespace-nowrap ml-3">
                      {extra.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Cost breakdown */}
            {calculation && calculation.outOfSeason && (
              <div className="border-t border-copper/10 pt-8">
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-5 text-center">
                  <p className="text-amber-200 text-sm font-medium mb-1">Buchung nicht möglich</p>
                  <p className="text-amber-200/70 text-xs">
                    Das Wohnmobil ist nur in der Saison verfügbar (02. März – 31. Oktober). Im Winter ist das Fahrzeug abgemeldet.
                  </p>
                </div>
              </div>
            )}

            {calculation && !calculation.outOfSeason && (
              <div className="border-t border-copper/10 pt-8">
                <h3 className="text-warm-white font-semibold text-sm uppercase tracking-widest mb-5">
                  Kostenaufstellung
                </h3>

                <div className="space-y-3 mb-6">
                  {/* Season breakdown */}
                  {calculation.seasonEntries.map(([name, s]) => (
                    <div key={name} className="flex justify-between text-sm">
                      <span className="text-sand/60">
                        {s.nights} {s.nights === 1 ? "Nacht" : "Nächte"} {name} × €{s.price}
                      </span>
                      <span className="text-warm-white font-medium">
                        €{(s.nights * s.price).toLocaleString("de-DE")}
                      </span>
                    </div>
                  ))}

                  {/* Service fee */}
                  <div className="flex justify-between text-sm">
                    <span className="text-sand/60">Servicepauschale</span>
                    <span className="text-warm-white font-medium">€{calculation.serviceFee}</span>
                  </div>

                  {/* Extras */}
                  {calculation.extrasBreakdown.map((e) => (
                    <div key={e.name} className="flex justify-between text-sm">
                      <span className="text-sand/60">{e.name}</span>
                      <span className="text-warm-white font-medium">€{e.cost}</span>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="border-t border-copper/10 pt-5 mb-5">
                  <div className="flex justify-between items-end">
                    <span className="text-sand/60 text-sm uppercase tracking-widest">Gesamtpreis</span>
                    <span className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-copper">
                      €{calculation.total.toLocaleString("de-DE")}
                    </span>
                  </div>
                </div>

                {/* Deposit */}
                <div className="flex items-center justify-between bg-forest/50 rounded-lg p-4 border border-copper/8">
                  <div className="flex items-center gap-2 text-sand/50 text-sm">
                    <ShieldCheck className="w-4 h-4 text-copper/60" />
                    Kaution (wird erstattet)
                  </div>
                  <span className="text-warm-white font-semibold">€{calculation.deposit}</span>
                </div>

                {/* Book now buttons */}
                {(() => {
                  const lines: string[] = [
                    "Hallo,",
                    "",
                    "ich möchte gerne das Wohnmobil LAIKA ECOVIP 309s buchen:",
                    "",
                    `Anreise:  ${new Date(startDate).toLocaleDateString("de-DE")}`,
                    `Abreise:  ${new Date(endDate).toLocaleDateString("de-DE")}`,
                    `Nächte:   ${calculation.totalNights}`,
                    "",
                    "Kostenaufstellung:",
                  ];
                  calculation.seasonEntries.forEach(([name, s]) => {
                    lines.push(`  ${s.nights} ${s.nights === 1 ? "Nacht" : "Nächte"} ${name} × €${s.price} = €${(s.nights * s.price).toLocaleString("de-DE")}`);
                  });
                  lines.push(`  Servicepauschale: €${calculation.serviceFee}`);
                  if (calculation.extrasBreakdown.length > 0) {
                    lines.push("");
                    lines.push("Gewähltes Zubehör:");
                    calculation.extrasBreakdown.forEach(e => {
                      lines.push(`  • ${e.name}: €${e.cost}`);
                    });
                  }
                  lines.push("");
                  lines.push(`Gesamtpreis: €${calculation.total.toLocaleString("de-DE")}`);
                  lines.push(`(zzgl. €${calculation.deposit} Kaution, wird erstattet)`);
                  lines.push("");
                  lines.push("Bitte um Bestätigung der Verfügbarkeit.");
                  lines.push("");
                  lines.push("Mit freundlichen Grüßen");
                  const messageText = lines.join("\n");
                  const subject = encodeURIComponent(`Buchungsanfrage ${new Date(startDate).toLocaleDateString("de-DE")} – ${new Date(endDate).toLocaleDateString("de-DE")}`);
                  const body = encodeURIComponent(lines.join("\r\n"));
                  const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;

                  return (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={mailtoUrl}
                        className="block w-full text-center bg-copper hover:bg-copper-light text-[var(--background)] font-semibold rounded-full py-4 text-lg transition-colors"
                      >
                        ✉ E-Mail Anfrage
                      </a>
                      <WhatsAppBookingButton message={messageText} />
                    </div>
                  );
                })()}
              </div>
            )}

            {!calculation && startDate && endDate && (
              <div className="text-center py-6 text-sand/40 text-sm">
                Bitte wählen Sie ein gültiges Datum (Abreise nach Anreise).
              </div>
            )}

            {(!startDate || !endDate) && (
              <div className="text-center py-6 text-sand/30 text-sm">
                Wählen Sie Anreise- und Abreisedatum für eine sofortige Preisberechnung.
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
