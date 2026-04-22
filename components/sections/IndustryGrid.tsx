"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { stagger, fadeUp, viewportConfig } from "@/lib/animations";
import { industries } from "@/lib/config";

const industryIcons: Record<string, string> = {
  gastronomie: "🍽️",
  hotellerie: "🏨",
  industrie: "🏭",
  logistik: "📦",
  gesundheitswesen: "🏥",
  "facility-management": "🏢",
};

export function IndustryGrid() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-orange-500 mb-3">
              Robotik nach Branche
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Für welche Branche robotisieren Sie?
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl">
              Jede Branche hat andere Engpässe. Wir zeigen die passende Lösung — mit Voraussetzungen, ROI und nächstem Schritt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry) => (
              <motion.div key={industry.slug} variants={fadeUp}>
                <Link
                  href={`/branchen/${industry.slug}/`}
                  className="group flex flex-col h-full border border-slate-200 bg-white rounded-sm p-6 hover:border-orange-300 hover:shadow-sm transition-all duration-150"
                >
                  <div className="text-3xl mb-4">{industryIcons[industry.slug] ?? "🤖"}</div>
                  <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2">
                    {industry.title}
                  </h3>
                  <ul className="text-sm text-slate-500 space-y-1 mb-4 flex-1">
                    {industry.pains.slice(0, 2).map((pain) => (
                      <li key={pain} className="flex gap-2">
                        <span className="text-slate-300 shrink-0">→</span>
                        {pain}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1 text-sm font-medium text-orange-500 group-hover:gap-2 transition-all">
                    Branchenlösung ansehen
                    <ArrowRight className="size-3.5" />
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
