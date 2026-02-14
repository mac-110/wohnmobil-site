import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Schäfer & Schönhals Wohnmobile — Premium Wohnmobil-Verleih in Lichtenfels",
  description:
    "Entdecken Sie Freiheit und Abenteuer mit unserem voll ausgestatteten LAIKA ECOVIP 309s. Wohnmobil mieten in Lichtenfels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${display.variable} ${sans.variable} font-[family-name:var(--font-sans)] antialiased grain`}
      >
        {children}
      </body>
    </html>
  );
}
