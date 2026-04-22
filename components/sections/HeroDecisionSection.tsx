"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { fadeUp, stagger, viewportConfig } from "@/lib/animations";
import { brand, proofAssets } from "@/lib/config";

export function HeroDecisionSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#030712]">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1800&q=85&auto=format&fit=crop"
        alt="Moderner Serviceroboter im Einsatz"
        fill
        priority
        className="object-cover object-center opacity-40"
        sizes="100vw"
      />

      {/* Gradient overlay — links dunkel, rechts transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-[#030712]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-mono font-medium uppercase tracking-widest text-cyan-400">
              <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Robotics Solution Partner · DACH
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.03] text-white"
          >
            {brand.primaryClaim}
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed max-w-xl"
          >
            Vom Use Case zur richtigen Lösung — mit Beratung, Pilot, Integration und Betrieb aus einer Hand.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/konfigurator/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 shadow-lg shadow-cyan-500/25"
            >
              Konfigurator starten
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/pilotprojekt/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-7 py-3.5 text-base font-medium text-white transition-all duration-200 backdrop-blur-sm"
            >
              Pilotprojekt besprechen
            </Link>
          </motion.div>

          {/* References */}
          <motion.div variants={fadeUp} className="mt-12 pt-8 border-t border-white/10">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Vertrauen von
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              {proofAssets.references.map((ref) => (
                <span key={ref} className="text-sm font-medium text-zinc-400">
                  {ref}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/30 animate-bounce">
        <ChevronDown className="size-6" />
      </div>
    </section>
  );
}
