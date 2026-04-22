"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Settings, ArrowRight, Phone } from "lucide-react";
import { fadeUp, stagger, viewportConfig } from "@/lib/animations";

interface ConfiguratorCTAProps {
  variant?: "primary" | "split";
}

export function ConfiguratorCTA({ variant = "primary" }: ConfiguratorCTAProps) {
  if (variant === "split") {
    return (
      <section className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/konfigurator/"
              className="group flex flex-col justify-between rounded-sm border border-orange-200 bg-orange-50 p-8 hover:bg-orange-100 transition-colors"
            >
              <div>
                <Settings className="size-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Konfigurator starten</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Wählen Sie Ihren Use Case — wir empfehlen den passenden Robotertyp, zeigen Modelle und geben eine Kostenschätzung.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-sm font-semibold text-orange-600 group-hover:gap-3 transition-all">
                Jetzt konfigurieren <ArrowRight className="size-4" />
              </div>
            </Link>

            <Link
              href="/kontakt/"
              className="group flex flex-col justify-between rounded-sm border border-slate-200 bg-slate-50 p-8 hover:bg-slate-100 transition-colors"
            >
              <div>
                <Phone className="size-8 text-slate-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Demo oder Beratung</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Lieber direkt sprechen? Wir zeigen Ihnen die passende Lösung live und beantworten Ihre konkreten Fragen.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-sm font-semibold text-slate-700 group-hover:gap-3 transition-all">
                Demo anfragen <ArrowRight className="size-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-mono uppercase tracking-widest text-orange-400 mb-4"
          >
            Nächster Schritt
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Finden Sie den passenden Roboter für Ihren Betrieb.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-400 mb-10 max-w-xl mx-auto"
          >
            Der Konfigurator führt Sie in 3 Schritten vom Use Case zur konkreten Empfehlung — kostenlos und unverbindlich.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/konfigurator/"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 hover:bg-orange-600 px-8 py-3.5 text-base font-medium text-white transition-colors"
            >
              <Settings className="size-4" />
              Konfigurator starten
            </Link>
            <Link
              href="/pilotprojekt/"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 hover:bg-slate-800 px-8 py-3.5 text-base font-medium text-slate-300 transition-colors"
            >
              Pilotprojekt besprechen
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
