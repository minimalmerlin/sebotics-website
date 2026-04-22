"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp, viewportConfig } from "@/lib/animations";
import { integrationProcess } from "@/lib/config";

export function ProcessTimeline() {
  return (
    <section className="py-16 md:py-20 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-orange-400 mb-3">
              Integrationsprozess
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Von Use Case zu laufendem Betrieb
            </h2>
            <p className="mt-3 text-lg text-slate-400 max-w-2xl">
              Kein Black-Box-Rollout. Ein strukturierter Prozess mit klaren Meilensteinen — von der ersten Analyse bis zur Skalierung.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-slate-800" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {integrationProcess.map((step, index) => (
                <motion.div key={step.step} variants={fadeUp} className="relative">
                  {/* Step number */}
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start mb-4">
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-sm border border-orange-500/30 bg-orange-500/10 lg:mb-4">
                      <span className="font-mono text-sm font-bold text-orange-400">{step.step}</span>
                    </div>
                    <h3 className="font-bold text-white text-base">{step.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed lg:mt-0">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-12 pt-10 border-t border-slate-800">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-semibold text-white mb-1">Bereit für den ersten Schritt?</p>
                <p className="text-sm text-slate-400">Wählen Sie Ihren Use Case — wir begleiten Sie von dort.</p>
              </div>
              <div className="flex gap-3 shrink-0">
                <a
                  href="/konfigurator/"
                  className="rounded-md bg-orange-500 hover:bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition-colors"
                >
                  Konfigurator starten
                </a>
                <a
                  href="/pilotprojekt/"
                  className="rounded-md border border-slate-700 hover:bg-slate-800 px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors"
                >
                  Pilot besprechen
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
