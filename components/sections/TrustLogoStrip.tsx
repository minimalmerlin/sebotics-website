"use client";

import { motion } from "framer-motion";
import { stagger, counterReveal, viewportConfig } from "@/lib/animations";
import { proofAssets } from "@/lib/config";

export function TrustLogoStrip() {
  return (
    <section className="border-b border-zinc-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* KPIs */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-zinc-100"
        >
          {proofAssets.kpis.map((kpi) => (
            <motion.div key={kpi.label} variants={counterReveal} className="text-center">
              <div className="text-4xl font-bold font-mono text-zinc-900">{kpi.value}</div>
              <div className="text-sm text-zinc-500 mt-1.5">{kpi.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logo row */}
        <div className="text-center">
          <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-zinc-400 mb-6">
            Ausgewählte Referenzen
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {proofAssets.references.map((ref) => (
              <span key={ref} className="text-sm font-semibold text-zinc-400 tracking-wide hover:text-zinc-600 transition-colors">
                {ref}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
