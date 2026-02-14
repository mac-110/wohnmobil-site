import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-copper/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-warm-white">
              {siteConfig.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-copper/60">
              {siteConfig.subtitle}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {siteConfig.footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sand/40 hover:text-copper text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <Separator className="bg-copper/8 my-6" />

        <p className="text-center text-sand/30 text-xs">
          © {new Date().getFullYear()} {siteConfig.name} {siteConfig.subtitle}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
