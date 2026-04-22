"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Settings, MessageSquare } from "lucide-react";
import { fadeUp, stagger, viewportConfig } from "@/lib/animations";

interface ConfiguratorCTAProps {
  variant?: "primary" | "split";
}

export function ConfiguratorCTA({ variant = "primary" }: ConfiguratorCTAProps) {
  if (variant === "split") {
    return (
      <section className="border-t border-zinc-900 bg-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/konfigurator/"
              className="group relative overflow-hidden rounded-2xl bg-[#030712] p-8 hover:shadow-2xl hover:shadow-zinc-900/20 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <Image
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=60&auto=format&fit=crop"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="relative z-10">
                <Settings className="size-8 text-brand-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-2">Konfigurator starten</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  In 3 Schritten zum passenden Robotertyp und Kostenmodell — kostenlos und unverbindlich.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-400 group-hover:gap-3 transition-all">
                  Jetzt konfigurieren <ArrowRight className="size-4" />
                </div>
              </div>
            </Link>

            <Link
              href="/kontakt/"
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#0b1220] p-8 transition-all duration-300 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/20"
            >
              <div>
                <MessageSquare className="mb-6 size-8 text-zinc-500" />
                <h3 className="mb-2 text-xl font-bold text-white">Demo oder Beratung</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Lieber direkt sprechen? Wir zeigen Ihnen die passende Lösung live und beantworten Ihre konkreten Fragen.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-zinc-200 transition-all group-hover:gap-3">
                Demo anfragen <ArrowRight className="size-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#030712]">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=60&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-transparent to-[#030712]/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-400 mb-5"
          >
            Nächster Schritt
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Finden Sie den passenden Roboter für Ihren Betrieb.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto"
          >
            Der Konfigurator führt Sie in 3 Schritten vom Use Case zur konkreten Empfehlung — kostenlos und unverbindlich.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/konfigurator/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 hover:bg-brand-400 px-8 py-3.5 text-base font-semibold text-white transition-all shadow-lg shadow-brand-500/20"
            >
              <Settings className="size-4" />
              Konfigurator starten
            </Link>
            <Link
              href="/pilotprojekt/"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-700 hover:bg-zinc-800 px-8 py-3.5 text-base font-medium text-zinc-300 transition-colors"
            >
              Pilotprojekt besprechen
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
