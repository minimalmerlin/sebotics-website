import Link from "next/link";
import { brand } from "@/lib/config";

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
    { label: "Robotik mieten", href: "/robotik-mieten/" },
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
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-white">
                Sebo<span className="text-orange-400">tics</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {brand.role} im deutschsprachigen Raum. Beratung, Konfiguration, Pilot, Integration und Betrieb aus einer Hand.
            </p>
            <div className="mt-6">
              <Link
                href="/konfigurator/"
                className="inline-block rounded-md bg-orange-500 hover:bg-orange-600 px-4 py-2 text-sm font-medium text-white transition-colors"
              >
                Konfigurator starten
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 mb-4">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Sebotics. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link href="/impressum/" className="text-xs text-slate-500 hover:text-slate-300">
              Impressum
            </Link>
            <Link href="/datenschutz/" className="text-xs text-slate-500 hover:text-slate-300">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
