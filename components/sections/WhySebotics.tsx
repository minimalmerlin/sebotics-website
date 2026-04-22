"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { stagger, fadeLeft, fadeRight, viewportConfig } from "@/lib/animations";
import { brand } from "@/lib/config";

const differentiators = [
  {
    title: "Entscheidungsplattform, nicht Produktkatalog",
    description: "Wir zeigen Ihnen, welcher Roboter zu Ihrem Prozess passt — mit Eignung, Grenzen, Voraussetzungen und ROI.",
  },
  {
    title: "Vollständiger Weg: Use Case → Betrieb",
    description: "Von der ersten Analyse bis zum laufenden Betrieb. Kein Black-Box-Rollout, sondern klare Meilensteine.",
  },
  {
    title: "RaaS ohne Einstiegsrisiko",
    description: "Pilot, Managed Service oder Subscription — Robotik ohne hohe Anfangsinvestition und mit kalkulierbaren Kosten.",
  },
  {
    title: "Herstellerpartner Pudu Robotics",
    description: "Direkter Zugang zu bewährten Systemen, aktueller Hardware und Herstellersupport.",
  },
];

export function WhySebotics() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeLeft}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-orange-500 mb-3">
              Warum Sebotics
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              {brand.positioningStatement}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Wir verkaufen nicht einfach Roboter. Wir strukturieren den Entscheidungsraum — damit Sie die richtige Lösung für Ihre Umgebung finden und sicher einführen.
            </p>
            <div className="flex gap-3">
              <Link
                href="/ueber-uns/"
                className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Über Sebotics
              </Link>
              <Link
                href="/case-studies/"
                className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Case Studies
              </Link>
            </div>
          </motion.div>

          {/* Right: Differentiators */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeRight}
            className="space-y-6"
          >
            {differentiators.map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle2 className="size-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
