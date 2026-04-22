import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ConfiguratorCTA } from "@/components/sections/ConfiguratorCTA";

export const metadata: Metadata = buildMetadata({
  title: "ROI-Check: Wann lohnt sich Robotik?",
  description: "Wann ist Robotik wirtschaftlich sinnvoll? ROI-Rechner, Amortisationslogik, Kostenblöcke und Vergleich Kauf vs. Miete vs. RaaS für Ihren Betrieb.",
  path: "/roi/",
});

const roiFaqs = [
  {
    question: "Wann lohnt sich Robotik wirtschaftlich?",
    answer: "Bei klaren, wiederholbaren Aufgaben mit hoher Häufigkeit. Faustformel: mehr als 20–30 Wiederholungen/Tag, standardisierbare Umgebung, Flächen ab 200 m² bei Reinigung. Der ROI liegt typisch bei 12–36 Monaten.",
  },
  {
    question: "Was kostet ein Serviceroboter?",
    answer: "Kaufpreise: 10.000–30.000 € je nach Modell. Via RaaS: ab ca. 500–900 €/Monat inkl. Wartung. Reinigungsroboter: 15.000–60.000 € Kauf oder ab 800 €/Monat RaaS.",
  },
  {
    question: "Welche Kosten spart Robotik ein?",
    answer: "Direkte Einsparungen: Personalstunden für Routineaufgaben. Indirekte: weniger Krankheitsausfälle bei physisch belastenden Tätigkeiten, konstantere Servicequalität, bessere Betriebsdaten.",
  },
  {
    question: "Wie schnell amortisiert sich Robotik?",
    answer: "Bei Servicerobotern: typisch 12–24 Monate. Bei Reinigungsrobotern: 18–36 Monate, je nach Flächengröße und Reinigungshäufigkeit. Unser ROI-Check gibt eine Erstschätzung für Ihren spezifischen Betrieb.",
  },
];

const kostenBlocks = [
  {
    title: "Anschaffungskosten",
    items: ["Kaufpreis oder Monatsrate (RaaS)", "Setup und Inbetriebnahme", "Schulung des Teams"],
  },
  {
    title: "Laufende Kosten",
    items: ["Wartung und Inspektion", "Software-Updates", "Energie (gering)", "Support / SLA"],
  },
  {
    title: "Einsparpotenziale",
    items: ["Personalstunden für Routineaufgaben", "Geringere Fehlerrate", "Constantere Qualität", "Betriebsdaten für Optimierung"],
  },
];

export default function ROIPage() {
  return (
    <>
      <section className="bg-slate-950 py-16 md:py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-orange-400 mb-4">
              Wirtschaftlichkeit
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Wann lohnt sich Robotik für Ihren Betrieb?
            </h1>
            <div className="border-l-2 border-orange-500 pl-5 mb-8">
              <p className="text-slate-300 leading-relaxed">
                Robotik lohnt sich, wenn klare, wiederholbare Aufgaben häufig genug anfallen und die Umgebung standardisierbar ist. Für die meisten Branchen liegt der ROI zwischen 12 und 36 Monaten — abhängig von Aufgabentyp, Modell und Kostenmodell.
              </p>
            </div>
            <Link
              href="/konfigurator/"
              className="inline-flex items-center gap-2 rounded-md bg-orange-500 hover:bg-orange-600 px-6 py-3 text-base font-medium text-white transition-colors"
            >
              ROI für meinen Betrieb schätzen →
            </Link>
          </div>
        </div>
      </section>

      {/* Kosten und Einsparpotenziale */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Kostenblöcke und Einsparpotenziale</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kostenBlocks.map((block) => (
              <div key={block.title} className="border border-slate-200 rounded-sm p-6">
                <h3 className="font-bold text-slate-900 mb-4">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-orange-500 shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modell-Vergleich */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Kauf · Miete · RaaS</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-100">
                  <th className="text-left p-4 font-mono font-semibold text-slate-700">Kriterium</th>
                  <th className="text-left p-4 font-mono font-semibold text-slate-700">Kauf</th>
                  <th className="text-left p-4 font-mono font-semibold text-slate-700">Miete</th>
                  <th className="text-left p-4 font-mono font-semibold text-orange-600">RaaS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Anfangsinvestition", "Hoch", "Mittel", "Gering"],
                  ["Monatliche Kosten", "Gering", "Mittel", "Hoch"],
                  ["Wartung inbegriffen", "Nein", "Teilweise", "Ja"],
                  ["Flexibilität", "Gering", "Mittel", "Hoch"],
                  ["Geeignet für", "Langfristiger Betrieb", "Flexible Nutzung", "Einstieg & Test"],
                ].map(([criterion, ...values]) => (
                  <tr key={criterion} className="border-b border-slate-100">
                    <td className="p-4 font-medium text-slate-700">{criterion}</td>
                    {values.map((val, i) => (
                      <td key={i} className={`p-4 text-slate-600 ${i === 2 ? "text-orange-600 font-medium" : ""}`}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <Link
              href="/raas-vs-kauf/"
              className="text-sm text-orange-600 hover:underline"
            >
              Vollständiger Vergleich: Kauf vs. Miete vs. RaaS →
            </Link>
          </div>
        </div>
      </section>

      <FAQAccordion title="ROI-Fragen im Überblick" faqs={roiFaqs} withSchema />
      <ConfiguratorCTA />
    </>
  );
}
