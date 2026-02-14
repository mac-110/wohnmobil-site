export const siteConfig = {
  name: "Schäfer & Schönhals",
  subtitle: "Wohnmobile",
  tagline: "Ihr Traumurlaub auf vier Rädern",
  description:
    "Premium Wohnmobil-Verleih in Lichtenfels. Entdecken Sie Freiheit und Abenteuer mit unserem voll ausgestatteten LAIKA ECOVIP 309s.",

  contact: {
    phone: "+49 15222 759872",
    phone2: "+49 178 6559417",
    email: "schaefer-schoenhals-wohnmobile@web.de",
    location: "Lichtenfels, Deutschland",
    address: "Schlesierstraße 30, 96215 Lichtenfels",
  },

  vehicle: {
    name: "LAIKA ECOVIP 309s",
    specs: [
      { label: "Führerschein", value: "Klasse B (PKW)" },
      { label: "Gewicht", value: "ca. 2.990 kg" },
      { label: "Zul. Gesamtgewicht", value: "3.500 kg" },
      { label: "Maße (L×B×H)", value: "6,99 × 2,35 × 2,99 m" },
      {
        label: "Ausstattung",
        value: "Rückfahrkamera, Tempomat, Klimaanlage, Zentralverriegelung",
      },
    ],
  },

  features: [
    {
      icon: "Sparkles",
      title: "Elegantes Design",
      description: "Schlicht, modern und zeitlos — ein Reisemobil mit Stil.",
    },
    {
      icon: "Sun",
      title: "Panorama-Fenster",
      description:
        "Doppelverglast, getönt, mit Moskitonetzen und Verdunkelungsrollos.",
    },
    {
      icon: "Bike",
      title: "4-fach Fahrradträger",
      description:
        "Bis zu 60 kg Traglast, mit integrierter Rückfahrkamera.",
    },
    {
      icon: "Gauge",
      title: "Premium Cockpit",
      description:
        "Drehbare Pilotensitze, Touchdisplay, Apple CarPlay & Android Auto.",
    },
    {
      icon: "Package",
      title: "Große Heckgarage",
      description:
        "Unter den Heckbetten, von außen und innen zugänglich.",
    },
    {
      icon: "Tv",
      title: "SAT-TV Anlage",
      description:
        "Automatische Satellitenanlage, höhenverstellbarer Tisch.",
    },
    {
      icon: "CookingPot",
      title: "Vollausgestattete Küche",
      description:
        "3 Kochfelder, Spüle, Dunstabzug, Schubladen mit Softeinzügen.",
    },
    {
      icon: "Refrigerator",
      title: "140L Kühlschrank",
      description:
        "Mit Gefrierfach — läuft über Strom, Lichtmaschine oder Gas.",
    },
    {
      icon: "ShowerHead",
      title: "Großzügige Nasszelle",
      description:
        "Fixes Waschbecken, Dusche mit Plexiglas-Abtrennung, 2 Fenster.",
    },
    {
      icon: "BedDouble",
      title: "Flexible Schlafplätze",
      description:
        "2 separate Betten oder Liegewiese für bis zu 4 Personen.",
    },
    {
      icon: "ArrowUpFromLine",
      title: "Elektrisches Hubbett",
      description:
        "1,25 × 1,91 m, bis zu 2 weitere Schlafplätze mit Fangnetz.",
    },
  ],

  included: [
    "TV / SAT Anlage",
    "4-fach Fahrradträger",
    "Geschirr, Besteck, Gläser für 4–5 Personen",
    "Kochtopfset, Bratpfanne, Küchenmesser, Schneidebrett",
    "Wasserkocher & Kaffeefilter mit Thermoskanne",
    "Mülleimer & Akku-Handstaubsauger",
    "Matratzenschoner & Markise",
    "Campingset (Auffahrkeile, Wasserschlauch, Kanister, Stromkabel, Sonnenschutz)",
    "Vollkasko mit Pannenschutz — europaweit",
    "250 km pro Miettag inklusive",
    "AdBlue für mind. 5.000 km",
    "Voller Kraftstofftank bei Übergabe",
  ],

  pricing: {
    seasons: [
      {
        name: "Vorsaison",
        period: "01.03. – 30.04.",
        price: 109,
      },
      {
        name: "Nebensaison",
        period: "01.05. – 30.06.",
        price: 125,
      },
      {
        name: "Hauptsaison",
        period: "01.07. – 14.09.",
        price: 147,
      },
      {
        name: "Nachsaison",
        period: "15.09. – 30.10.",
        price: 109,
      },
    ],
    service: {
      price: 150,
      description:
        "Einmalige Servicepauschale: 11 kg Propangas, 50 L Frischwasser, Außenreinigung, persönliche Einweisung & Probefahrt",
    },
    deposit: 600,
    extras: [
      {
        name: "Campingmöbel",
        description: "4 Stühle, Klapptisch, Vorzeltteppich",
        price: "€30",
      },
      {
        name: "Innenreinigung",
        description: "Professionelle Reinigung nach Rückgabe",
        price: "€60",
      },
      {
        name: "Haustiergebühr",
        description: "Ihr Vierbeiner darf mit",
        price: "€25",
      },
      {
        name: "Tank-Entleerung",
        description: "Schmutzwassertank & WC-Kassette",
        price: "€50",
      },
      {
        name: "Mobile PV-Anlage",
        description: "Inkl. 1.500 Wh Speicher + €100 Kaution",
        price: "€10/Tag",
      },
    ],
  },

  gallery: [
    { alt: "LAIKA ECOVIP 309s auf Landstraße", src: "/images/gallery/exterior-laika.jpg" },
    { alt: "Modernes Cockpit mit Touchdisplay", src: "/images/gallery/cockpit.jpg" },
    { alt: "Küche mit Blick zum Alkoven-Bett", src: "/images/gallery/kueche-alkoven.jpg" },
    { alt: "Gemütlicher Schlafbereich mit Dachfenster", src: "/images/gallery/schlafbereich.jpg" },
    { alt: "TV-Ecke mit Leselampe", src: "/images/gallery/tv-ecke.jpg" },
    { alt: "LAIKA ECOVIP 309s — Frontansicht", src: "/images/gallery/exterior-front.jpg" },
    { alt: "Seitenansicht mit offener Tür", src: "/images/gallery/exterior-side.jpg" },
    { alt: "Heckgarage geöffnet", src: "/images/gallery/exterior-garage.jpg" },
    { alt: "Campingplatz mit Markise & Fahrrädern", src: "/images/gallery/camping-markise.jpg" },
    { alt: "Frontansicht auf dem Campingplatz", src: "/images/gallery/camping-front-side.jpg" },
    { alt: "Heckansicht mit Fahrradträger", src: "/images/gallery/exterior-rear.jpg" },
    { alt: "Unterwegs im Herbst", src: "/images/gallery/road-autumn.jpg" },
    { alt: "Frontansicht auf Landstraße", src: "/images/gallery/road-front-close.jpg" },
    { alt: "Seitenansicht auf der Straße", src: "/images/gallery/road-side.jpg" },
  ],

  footer: {
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
