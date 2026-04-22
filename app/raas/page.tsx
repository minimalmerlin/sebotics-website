import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ConfiguratorCTA } from "@/components/sections/ConfiguratorCTA";
import { raasPackageComponents, solutions } from "@/lib/config";

export const metadata: Metadata = buildMetadata({
  title: "Robotics as a Service (RaaS)",
  description: "Robotics as a Service: Roboter nutzen ohne Kaufinvestition. Monatliche Kosten inkl. Setup, Wartung, Support. Ideal zum Einstieg und Skalieren.",
  path: "/raas/",
});

const raasFaqs = [
  {
    question: "Was ist Robotics as a Service (RaaS)?",
    answer: "RaaS ist ein Nutzungsmodell, bei dem Sie Roboter gegen eine monatliche Gebühr betreiben — inklusive Setup, Wartung, Monitoring und Support. Kein Kapitalaufwand, planbare Kosten.",
  },
  {
    question: "Was ist im RaaS-Paket enthalten?",
    answer: "Setup und Inbetriebnahme, Schulung Ihres Teams, laufende Wartung, Remote-Monitoring, Backup-Einheit bei Ausfall, Performance-Optimierung sowie SLA mit definierten Reaktionszeiten.",
  },
  {
    question: "Wie lange sind die Mindestlaufzeiten?",
    answer: "Typisch 12–36 Monate. Je nach Use Case und Modell sind auch kürzere Pilotphasen möglich. Wir klären die Details im ersten Gespräch.",
  },
  {
    question: "Ist RaaS langfristig teurer als Kauf?",
    answer: "Ja — langfristig ist Kauf günstiger. RaaS lohnt sich besonders, wenn Sie den Einsatz zunächst testen wollen, Kapitalbindung minimieren oder maximale Planbarkeit brauchen.",
  },
];

const raasStrategies = [
  {
    slug: "pilot-to-scale",
    title: "Pilot-to-Scale",
    desc: "30-, 60- oder 90-Tage-Pilot mit klaren Erfolgskriterien und definiertem Scale-Up-Plan.",
  },
  {
    slug: "subscription",
    title: "Subscription",
    desc: "Monatliche Pauschale mit vollständigem Service-Paket. Ideal für Dauerbetrieb.",
  },
  {
    slug: "managed-service",
    title: "Managed Service",
    desc: "Sebotics übernimmt Setup, Monitoring, Wartung und laufende Optimierung.",
  },
  {
    slug: "hybrid",
    title: "Hybrid-Modell",
    desc: "Kauf, Miete und RaaS parallel — je nach Budgetlogik und Prozessreife.",
  },
];

export default function RaaSPage() {
  const raasSolution = solutions.find((s) => s.slug === "raas");

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-950 py-16 md:py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-orange-400 mb-4">
              Kostenmodell
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Robotics as a Service (RaaS)
            </h1>

            {/* Direktantwort */}
            <div className="border-l-2 border-orange-500 pl-5 mb-8">
              <p className="text-slate-300 leading-relaxed">
                {raasSolution?.directAnswer}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/konfigurator/"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 hover:bg-orange-600 px-6 py-3 text-base font-medium text-white transition-colors"
              >
                RaaS-Konfigurator <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/pilotprojekt/"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-600 hover:bg-slate-800 px-6 py-3 text-base font-medium text-slate-300 transition-colors"
              >
                Pilot besprechen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Paketbestandteile */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Was im RaaS-Paket enthalten ist
          </h2>
          <p className="text-slate-600 mb-8">
            Alles inklusive — kein versteckter Aufwand, keine überraschenden Zusatzkosten.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {raasPackageComponents.map((component) => (
              <div
                key={component}
                className="flex items-start gap-3 border border-slate-200 rounded-sm p-4"
              >
                <CheckCircle2 className="size-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{component}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategien */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">RaaS-Modelle im Überblick</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {raasStrategies.map((strat) => (
              <div key={strat.slug} className="border border-slate-200 bg-white rounded-sm p-6">
                <h3 className="font-bold text-slate-900 mb-2">{strat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{strat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geeignet / nicht geeignet */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Für wen RaaS geeignet ist</h2>
              <div className="space-y-3">
                {raasSolution?.suitedFor.map((item) => (
                  <div key={item} className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="size-5 text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Kauf vs. Miete vs. RaaS
              </h2>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Jedes Modell hat seine Logik. RaaS senkt den Einstieg, Kauf ist langfristig günstiger. Welches passt, hängt von Ihrer Budgetlogik ab.
              </p>
              <Link
                href="/raas-vs-kauf/"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Vergleich ansehen <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion title="Häufige Fragen zu RaaS" faqs={raasFaqs} withSchema />

      {/* CTA */}
      <ConfiguratorCTA />
    </>
  );
}
