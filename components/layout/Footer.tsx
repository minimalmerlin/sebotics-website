import Link from "next/link";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  Lösungen: [
    { label: "Serviceroboter", href: "/loesungen/serviceroboter/" },
    { label: "Reinigungsroboter", href: "/loesungen/reinigungsroboter/" },
    { label: "Transportroboter", href: "/loesungen/transportroboter/" },
    { label: "Hotelroboter", href: "/loesungen/hotelroboter/" },
    { label: "Sicherheitsroboter", href: "/loesungen/sicherheitsroboter/" },
    { label: "Robotics as a Service", href: "/raas/" },
  ],
  Branchen: [
    { label: "Gastronomie", href: "/branchen/gastronomie/" },
    { label: "Hotellerie", href: "/branchen/hotellerie/" },
    { label: "Industrie", href: "/branchen/industrie/" },
    { label: "Logistik", href: "/branchen/logistik/" },
    { label: "Gesundheitswesen", href: "/branchen/gesundheitswesen/" },
    { label: "Facility Management", href: "/branchen/facility-management/" },
  ],
  "ROI & Modelle": [
    { label: "ROI-Check", href: "/roi/" },
    { label: "Kauf vs. Miete vs. RaaS", href: "/raas-vs-kauf/" },
    { label: "Pilotprojekt", href: "/pilotprojekt/" },
    { label: "Wartung & Support", href: "/wartung-support/" },
  ],
  Unternehmen: [
    { label: "Über Sebotics", href: "/ueber-uns/" },
    { label: "Case Studies", href: "/case-studies/" },
    { label: "Blog", href: "/blog/" },
    { label: "Glossar", href: "/glossar/" },
    { label: "Kontakt", href: "/kontakt/" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#030712] text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Top CTA bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-16 border-b border-zinc-800">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-zinc-500 mb-2">
              Bereit für den nächsten Schritt?
            </p>
            <p className="text-xl font-bold text-white">
              Starten Sie mit dem kostenlosen Konfigurator.
            </p>
          </div>
          <Link
            href="/konfigurator/"
            className="inline-flex items-center gap-2 shrink-0 rounded-xl bg-cyan-500 hover:bg-cyan-400 px-6 py-3 text-sm font-semibold text-white transition-colors"
          >
            Konfigurator starten
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 py-16">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-zinc-500 mb-5">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand + legal */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded bg-cyan-500 flex items-center justify-center">
              <svg viewBox="0 0 20 20" className="size-3.5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 5c-3.314 0-6 2.686-6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4h2c0-3.314-2.686-6-6-6zm-4 7v2h8v-2H6z"/>
              </svg>
            </div>
            <span className="text-sm font-bold text-white">
              Sebo<span className="text-cyan-500">tics</span>
            </span>
            <span className="text-zinc-700 ml-2 text-xs">
              © {new Date().getFullYear()} Sebotics. Alle Rechte vorbehalten.
            </span>
          </div>
          <div className="flex gap-6">
            <Link href="/impressum/" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz/" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
