"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { stagger, fadeUp, viewportConfig } from "@/lib/animations";
import { industries } from "@/lib/config";

const industryImages: Record<string, string> = {
  gastronomie:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
  hotellerie:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format&fit=crop",
  industrie:
    "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80&auto=format&fit=crop",
  logistik:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop",
  gesundheitswesen:
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80&auto=format&fit=crop",
  "facility-management":
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop",
};

export function IndustryGrid() {
  return (
    <section className="bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-14">
            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-600 mb-3">
              Nach Branche
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Für welche Branche automatisieren Sie?
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-zinc-400">
              Jede Branche hat andere operative Engpässe. Wir zeigen die passende Lösung mit Voraussetzungen, ROI und nächstem Schritt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry) => (
              <motion.div key={industry.slug} variants={fadeUp}>
                <Link
                  href={`/branchen/${industry.slug}/`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-zinc-900 h-72 hover:shadow-2xl hover:shadow-zinc-900/20 transition-all duration-300"
                >
                  {/* Background image */}
                  <Image
                    src={industryImages[industry.slug] ?? "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&auto=format&fit=crop"}
                    alt={industry.title}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-900/40 to-transparent" />

                  {/* Content */}
                  <div className="relative mt-auto p-6">
                    <p className="text-[11px] font-mono uppercase tracking-widest text-brand-400 mb-2">
                      Branchenlösung
                    </p>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {industry.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-brand-400 group-hover:gap-2.5 transition-all duration-200">
                      Ansehen
                      <ArrowRight className="size-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
