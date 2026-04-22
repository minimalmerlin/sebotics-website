"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { stagger, fadeUp, viewportConfig } from "@/lib/animations";
import { solutions } from "@/lib/config";

const solutionImages: Record<string, string> = {
  serviceroboter:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&auto=format&fit=crop",
  reinigungsroboter:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop&crop=center",
  transportroboter:
    "https://images.unsplash.com/photo-1612815292278-a72dbbf89e50?w=800&q=80&auto=format&fit=crop",
  hotelroboter:
    "https://images.unsplash.com/photo-1611095970003-8c62b9f7c9df?w=800&q=80&auto=format&fit=crop",
  sicherheitsroboter:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80&auto=format&fit=crop",
  raas:
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80&auto=format&fit=crop",
};

export function SolutionGrid() {
  return (
    <section className="py-20 md:py-28 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-14">
            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-600 mb-3">
              Lösungen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
              Welcher Robotertyp passt zu Ihrem Betrieb?
            </h2>
            <p className="mt-3 text-lg text-zinc-500 max-w-2xl">
              Nicht irgendein Roboter — sondern die richtige Lösung mit Eignungscheck, Grenzen und ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((solution) => (
              <motion.div key={solution.slug} variants={fadeUp}>
                <Link
                  href={`/loesungen/${solution.slug}/`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-100 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-zinc-100">
                    <Image
                      src={solutionImages[solution.slug] ?? solutionImages.serviceroboter}
                      alt={solution.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-base font-bold text-zinc-900 mb-2 group-hover:text-brand-600 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed flex-1 line-clamp-2">
                      {solution.summary}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                      Details ansehen
                      <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
