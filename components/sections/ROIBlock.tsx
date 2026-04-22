"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { stagger, fadeUp, counterReveal, viewportConfig } from "@/lib/animations";

const roiPoints = [
  { metric: "12–24 Mon.", label: "ROI Serviceroboter", note: ">30 Serviceläufe/Tag" },
  { metric: "18–36 Mon.", label: "ROI Reinigungsroboter", note: "ab 500 m², täglich" },
  { metric: "ab 500 €", label: "monatlich via RaaS", note: "inkl. Setup & Support" },
  { metric: "30 Tage", label: "Pilotlaufzeit möglich", note: "mit Erfolgskriterien" },
];

const models = [
  {
    name: "Kauf",
    badge: null,
    pros: ["Volleigentum nach Kauf", "Langfristig günstiger", "Keine Laufzeitbindung"],
    cons: ["Hohe Anfangsinvestition", "Wartung separat"],
    cta: "Kaufoptionen anfragen",
    href: "/kontakt/",
    highlight: false,
  },
  {
    name: "Robotics as a Service",
    badge: "Empfohlen zum Einstieg",
    pros: ["Keine Anfangsinvestition", "Alles inklusive", "Flexibel skalierbar"],
    cons: ["Monatliche Rate", "Langfristig teurer"],
    cta: "RaaS-Pakete ansehen",
    href: "/raas/",
    highlight: true,
  },
  {
    name: "Miete / Leasing",
    badge: null,
    pros: ["Geringere Kapitalbindung", "Steuerlicher Vorteil"],
    cons: ["Kein Eigentum", "Laufzeit gebunden"],
    cta: "Mietoptionen ansehen",
    href: "/robotik-mieten/",
    highlight: false,
  },
];

export function ROIBlock() {
  return (
    <section className="bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-14">
            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-600 mb-3">
              Wirtschaftlichkeit
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Wann lohnt sich Robotik?
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-zinc-400">
              Bei klaren, wiederholbaren Aufgaben mit hoher Häufigkeit. Unser ROI-Check gibt eine fundierte Erstschätzung.
            </p>
          </motion.div>

          {/* KPI band */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {roiPoints.map((p) => (
              <motion.div
                key={p.metric}
                variants={counterReveal}
                className="rounded-2xl border border-zinc-800 bg-[#0b1220] p-6"
              >
                <div className="text-2xl font-bold font-mono text-white">{p.metric}</div>
                <div className="mt-1 text-sm font-medium text-zinc-200">{p.label}</div>
                <div className="mt-1 text-xs text-zinc-500">{p.note}</div>
              </motion.div>
            ))}
          </div>

          {/* Model comparison */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-6 text-xl font-bold text-white">Kauf · RaaS · Miete — was passt?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {models.map((model) => (
                <div
                  key={model.name}
                  className={`rounded-2xl border p-6 flex flex-col ${
                    model.highlight
                      ? "border-brand-500/40 bg-brand-900/20 ring-1 ring-brand-500/30"
                      : "border-zinc-800 bg-[#0b1220]"
                  }`}
                >
                  {model.badge && (
                    <span className="inline-block mb-3 text-[10px] font-mono font-semibold uppercase tracking-widest text-brand-700 bg-brand-100 rounded-full px-2.5 py-0.5 w-fit">
                      {model.badge}
                    </span>
                  )}
                  <h4 className="mb-4 text-base font-bold text-white">{model.name}</h4>
                  <div className="space-y-1.5 mb-5 flex-1">
                    {model.pros.map((p) => (
                      <div key={p} className="flex gap-2 text-sm text-zinc-300">
                        <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                        {p}
                      </div>
                    ))}
                    {model.cons.map((c) => (
                      <div key={c} className="flex gap-2 text-sm text-zinc-500">
                        <span className="shrink-0 mt-0.5">–</span>
                        {c}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={model.href}
                    className={`rounded-xl px-4 py-2.5 text-sm font-semibold text-center transition-colors ${
                      model.highlight
                        ? "bg-brand-500 hover:bg-brand-600 text-white"
                        : "border border-zinc-700 text-zinc-200 hover:bg-white/5"
                    }`}
                  >
                    {model.cta}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 text-center">
            <Link
              href="/roi/"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              ROI für meinen Betrieb einschätzen →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
