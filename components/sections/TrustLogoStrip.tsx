"use client";

import { motion } from "framer-motion";
import { stagger, counterReveal, viewportConfig } from "@/lib/animations";
import { proofAssets } from "@/lib/config";

export function TrustLogoStrip() {
  return (
    <section className="border-b border-zinc-900 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* KPIs */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12 grid grid-cols-2 gap-8 border-b border-zinc-900 pb-12 md:grid-cols-4"
        >
          {proofAssets.kpis.map((kpi) => (
            <motion.div key={kpi.label} variants={counterReveal} className="text-center">
              <div className="text-4xl font-bold font-mono text-white">{kpi.value}</div>
              <div className="mt-1.5 text-sm text-zinc-400">{kpi.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logo row */}
        <div className="text-center">
          <p className="mb-6 text-[11px] font-mono uppercase tracking-[0.15em] text-zinc-500">
            Ausgewählte Referenzen
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {proofAssets.references.map((ref) => (
              <span key={ref} className="text-sm font-semibold tracking-wide text-zinc-400 transition-colors hover:text-zinc-200">
                {ref}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
