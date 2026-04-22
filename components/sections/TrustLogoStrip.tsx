"use client";

import { motion } from "framer-motion";
import { stagger, counterReveal, viewportConfig } from "@/lib/animations";
import { proofAssets } from "@/lib/config";

export function TrustLogoStrip() {
  return (
    <section className="border-b border-slate-200 bg-white py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* KPI Band */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-slate-100"
        >
          {proofAssets.kpis.map((kpi) => (
            <motion.div key={kpi.label} variants={counterReveal} className="text-center">
              <div className="text-3xl font-bold font-mono text-slate-900">{kpi.value}</div>
              <div className="text-sm text-slate-500 mt-1">{kpi.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logos / Reference strip */}
        <div className="text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Ausgewählte Referenzen
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {proofAssets.references.map((ref) => (
              <span
                key={ref}
                className="text-sm font-semibold text-slate-400 tracking-wide"
              >
                {ref}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
