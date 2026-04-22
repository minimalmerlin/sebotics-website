"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Settings, PlayCircle } from "lucide-react";
import { fadeUp, stagger, viewportConfig } from "@/lib/animations";
import { brand, proofAssets } from "@/lib/config";

export function HeroDecisionSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 md:py-28">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl"
        >
          {/* Category label */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block rounded-sm border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-widest text-orange-400">
              {brand.role} · DACH
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white"
          >
            {brand.primaryClaim}
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
          >
            Orientierung, Auswahl, Pilot, Einführung und Betrieb aus einer Hand — für Gastronomie, Hotellerie, Industrie und Facility Management.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/konfigurator/"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 hover:bg-orange-600 px-6 py-3 text-base font-medium text-white transition-colors"
            >
              <Settings className="size-4" />
              Konfigurator starten
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/pilotprojekt/"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-600 bg-white/5 hover:bg-white/10 px-6 py-3 text-base font-medium text-slate-200 transition-colors"
            >
              <PlayCircle className="size-4" />
              Pilotprojekt besprechen
            </Link>
          </motion.div>

          {/* Trust hint */}
          <motion.p variants={fadeUp} className="mt-8 text-sm text-slate-500">
            Partner von{" "}
            <span className="text-slate-300 font-medium">Pudu Robotics</span>
            {" · "}Referenzen: {proofAssets.references.slice(0, 4).join(" · ")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
