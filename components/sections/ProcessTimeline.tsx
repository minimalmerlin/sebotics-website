"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { stagger, fadeUp, viewportConfig } from "@/lib/animations";
import { integrationProcess } from "@/lib/config";

export function ProcessTimeline() {
  return (
    <section className="py-20 md:py-28 bg-[#030712] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-16 max-w-2xl">
            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-cyan-400 mb-4">
              Integrationsprozess
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Von Ihrem Use Case zum laufenden Betrieb
            </h2>
            <p className="mt-3 text-lg text-zinc-400 leading-relaxed">
              Ein strukturierter Prozess mit klaren Meilensteinen — von der ersten Analyse bis zur Skalierung.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {integrationProcess.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="relative flex flex-col lg:flex-col"
              >
                {/* Connector line (desktop) */}
                {index < integrationProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(50%+24px)] right-0 h-px bg-zinc-800 z-0" />
                )}

                <div className="relative z-10 flex lg:flex-col items-start lg:items-start gap-4 lg:gap-0 pb-8 lg:pb-0 pl-0 lg:pl-0">
                  {/* Number */}
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-xs font-mono font-bold text-cyan-400">
                    {step.step}
                  </div>

                  <div className="lg:mt-5 flex-1">
                    <h3 className="font-semibold text-white text-sm mb-2">{step.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Vertical connector (mobile) */}
                {index < integrationProcess.length - 1 && (
                  <div className="lg:hidden absolute left-5 top-10 bottom-0 w-px bg-zinc-800" />
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA bar */}
          <motion.div
            variants={fadeUp}
            className="mt-16 pt-10 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <p className="font-semibold text-white mb-1">Bereit für den ersten Schritt?</p>
              <p className="text-sm text-zinc-500">Use Case wählen — wir begleiten Sie von dort.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/konfigurator/"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
              >
                Konfigurator starten <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/pilotprojekt/"
                className="rounded-xl border border-zinc-700 hover:bg-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors"
              >
                Pilot besprechen
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
