"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { stagger, fadeUp, viewportConfig } from "@/lib/animations";
import { solutions } from "@/lib/config";

const solutionIcons: Record<string, string> = {
  serviceroboter: "🤖",
  reinigungsroboter: "🧹",
  transportroboter: "🚛",
  hotelroboter: "🛎️",
  sicherheitsroboter: "🔒",
  raas: "📋",
};

export function SolutionGrid() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-orange-500 mb-3">
              Robotertypen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Welcher Robotertyp passt zu Ihrem Einsatz?
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl">
              Nicht irgendein Roboter — sondern die richtige Lösung für Ihren Use Case. Mit klarer Eignung, Grenzen und Wirtschaftlichkeit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((solution) => (
              <motion.div key={solution.slug} variants={fadeUp}>
                <Link
                  href={`/loesungen/${solution.slug}/`}
                  className="group flex flex-col h-full border border-slate-200 bg-white rounded-sm p-6 hover:border-orange-300 hover:shadow-sm transition-all duration-150"
                >
                  <div className="text-3xl mb-4">{solutionIcons[solution.slug] ?? "🤖"}</div>
                  <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 flex-1 leading-relaxed line-clamp-3">
                    {solution.summary}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-orange-500 group-hover:gap-2 transition-all">
                    Lösung ansehen
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
