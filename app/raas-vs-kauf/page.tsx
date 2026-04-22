import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ConfiguratorCTA } from "@/components/sections/ConfiguratorCTA";

export const metadata: Metadata = buildMetadata({
  title: "Kauf vs. Miete vs. RaaS — Vergleich",
  description: "Roboter kaufen, mieten oder als RaaS? Der vollständige Vergleich mit Kosten, Vor- und Nachteilen und konkreter Entscheidungshilfe.",
  path: "/raas-vs-kauf/",
});

const comparison = [
  { criterion: "Anfangsinvestition", kauf: "Hoch (10.000–60.000 €)", miete: "Gering (Depot + Monatsrate)", raas: "Keine" },
  { criterion: "Monatliche Kosten", kauf: "Nur Wartung (wenn separat)", miete: "Mietzahlung", raas: "Pauschale inkl. allem" },
  { criterion: "Wartung & Support", kauf: "Separat zu beauftragen", miete: "Teilweise inklusive", raas: "Vollständig inklusive" },
  { criterion: "Updates & Software", kauf: "Separat", miete: "Je nach Vertrag", raas: "Inklusive" },
  { criterion: "Backup-Einheit", kauf: "Nein", miete: "Nein", raas: "Inklusive" },
  { criterion: "Laufzeit", kauf: "Keine", miete: "12–36 Monate", raas: "12–36 Monate" },
  { criterion: "Eigentum", kauf: "Ja", miete: "Nein", raas: "Nein" },
  { criterion: "Flexibilität", kauf: "Hoch (nach Amortisation)", miete: "Mittel", raas: "Hoch" },
  { criterion: "Geeignet wenn", kauf: "Langfristiger, planbarer Einsatz", miete: "Flexibilität gewünscht, Kapital begrenzt", raas: "Einstieg, Test, maximale Planbarkeit" },
];

export default function RaasVsKaufPage() {
  return (
    <>
      <section className="bg-slate-950 py-16 md:py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-orange-400 mb-4">Entscheidungshilfe</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Kauf · Miete · RaaS — Was passt zu Ihnen?
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Kein Modell ist immer besser. Der richtige Ansatz hängt von Kapitalbindung, Nutzungsdauer und Betriebsreife ab.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left p-4 font-mono font-semibold text-slate-600 bg-slate-50">Kriterium</th>
                  <th className="text-left p-4 font-mono font-semibold text-slate-800 bg-slate-50">Kauf</th>
                  <th className="text-left p-4 font-mono font-semibold text-slate-800 bg-slate-50">Miete / Leasing</th>
                  <th className="text-left p-4 font-mono font-semibold text-orange-700 bg-orange-50">RaaS</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.criterion} className="border-b border-slate-100">
                    <td className="p-4 font-medium text-slate-700 bg-slate-50/50">{row.criterion}</td>
                    <td className="p-4 text-slate-600">{row.kauf}</td>
                    <td className="p-4 text-slate-600">{row.miete}</td>
                    <td className="p-4 text-orange-700 font-medium bg-orange-50/30">{row.raas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-slate-200 rounded-sm p-5">
              <h3 className="font-bold text-slate-900 mb-2">Kauf empfehlen wir wenn</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>→ Langfristiger Einsatz geplant (5+ Jahre)</li>
                <li>→ Kapital vorhanden</li>
                <li>→ Klarer, stabiler Prozess</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-sm p-5">
              <h3 className="font-bold text-slate-900 mb-2">Miete empfehlen wir wenn</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>→ Kapitalbindung minimieren</li>
                <li>→ Laufzeit offen</li>
                <li>→ Steuerliche Optimierung gewünscht</li>
              </ul>
            </div>
            <div className="border border-orange-200 bg-orange-50 rounded-sm p-5">
              <h3 className="font-bold text-slate-900 mb-2">RaaS empfehlen wir wenn</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>→ Erst testen, dann skalieren</li>
                <li>→ Kein Investitionsbudget vorhanden</li>
                <li>→ Maximale Planbarkeit gewünscht</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/raas/" className="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
              RaaS-Pakete ansehen →
            </Link>
            <Link href="/robotik-mieten/" className="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
              Mietoptionen ansehen →
            </Link>
            <Link href="/roi/" className="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
              ROI-Check →
            </Link>
          </div>
        </div>
      </section>

      <ConfiguratorCTA />
    </>
  );
}
