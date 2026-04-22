"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { stagger, fadeUp, counterReveal, viewportConfig } from "@/lib/animations";

const roiPoints = [
  {
    metric: "12–24 Mon.",
    label: "typischer ROI Serviceroboter",
    note: "bei >30 Serviceläufen/Tag",
  },
  {
    metric: "18–36 Mon.",
    label: "typischer ROI Reinigungsroboter",
    note: "ab 500 m² Fläche, täglich",
  },
  {
    metric: "ab 500 €",
    label: "monatlich via RaaS",
    note: "inkl. Setup, Wartung, Support",
  },
  {
    metric: "30 Tage",
    label: "Pilotlaufzeit möglich",
    note: "mit definierten Erfolgskriterien",
  },
];

const models = [
  {
    name: "Kauf",
    pros: ["Volleigentum", "keine Laufzeit", "langfristig günstiger"],
    cons: ["Hohe Anfangsinvestition", "Wartung separat"],
    cta: "Kaufoptionen anfragen",
    href: "/kontakt/",
    highlight: false,
  },
  {
    name: "Miete / Leasing",
    pros: ["Geringere Kapitalbindung", "Flexibles Ende", "Steuerlicher Vorteil"],
    cons: ["Kein Eigentum", "Laufzeit gebunden"],
    cta: "Mietoptionen ansehen",
    href: "/robotik-mieten/",
    highlight: false,
  },
  {
    name: "RaaS",
    pros: ["Alles inklusive", "Kein Startkapital", "Sofort skalierbar"],
    cons: ["Monatliche Rate", "Langfristig teurer"],
    cta: "RaaS-Paket ansehen",
    href: "/raas/",
    highlight: true,
  },
];

export function ROIBlock() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-orange-500 mb-3">
              Wirtschaftlichkeit
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Wann lohnt sich Robotik?
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl">
              Robotik lohnt sich bei klaren, wiederholbaren Aufgaben mit hoher Häufigkeit. Unser ROI-Check gibt eine fundierte Erstschätzung für Ihren Betrieb.
            </p>
          </motion.div>

          {/* KPI Band */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {roiPoints.map((point) => (
              <motion.div
                key={point.metric}
                variants={counterReveal}
                className="border border-slate-200 rounded-sm p-5"
              >
                <div className="text-2xl font-bold font-mono text-slate-900 mb-1">{point.metric}</div>
                <div className="text-sm font-medium text-slate-700 mb-1">{point.label}</div>
                <div className="text-xs text-slate-400">{point.note}</div>
              </motion.div>
            ))}
          </div>

          {/* Modell-Vergleich */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Kauf · Miete · RaaS — Was passt zu Ihnen?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {models.map((model) => (
                <div
                  key={model.name}
                  className={`rounded-sm border p-6 flex flex-col ${
                    model.highlight
                      ? "border-orange-300 bg-orange-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {model.highlight && (
                    <span className="inline-block mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-orange-600">
                      Empfohlen zum Einstieg
                    </span>
                  )}
                  <h4 className="text-lg font-bold text-slate-900 mb-4">{model.name}</h4>
                  <div className="space-y-1 mb-4 flex-1">
                    {model.pros.map((pro) => (
                      <div key={pro} className="flex gap-2 text-sm text-slate-700">
                        <span className="text-green-500 shrink-0">✓</span>
                        {pro}
                      </div>
                    ))}
                    {model.cons.map((con) => (
                      <div key={con} className="flex gap-2 text-sm text-slate-500">
                        <span className="text-slate-300 shrink-0">–</span>
                        {con}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={model.href}
                    className={`rounded-md px-4 py-2 text-sm font-medium text-center transition-colors ${
                      model.highlight
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "border border-slate-300 hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    {model.cta}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ROI CTA */}
          <motion.div variants={fadeUp} className="mt-8 text-center">
            <Link
              href="/roi/"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              ROI für meinen Betrieb einschätzen →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
