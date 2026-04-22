"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeLeft, fadeRight, viewportConfig } from "@/lib/animations";

const differentiators = [
  {
    title: "Entscheidungsplattform, nicht Produktkatalog",
    description: "Wir zeigen, welcher Roboter zu Ihrem Prozess passt — mit Eignung, Grenzen, Voraussetzungen und ROI.",
  },
  {
    title: "Vollständiger Weg: Use Case → laufender Betrieb",
    description: "Von der ersten Analyse bis zum stabilen Dauerbetrieb. Klare Meilensteine, keine Black Box.",
  },
  {
    title: "Risikominimierter Einstieg via RaaS",
    description: "Pilot, Managed Service oder Subscription — Robotik ohne hohe Anfangsinvestition.",
  },
  {
    title: "Nachgewiesene Ergebnisse in der Region",
    description: "Referenzen aus Gastronomie, Hotellerie, Industrie und Healthcare im DACH-Raum.",
  },
];

export function WhySebotics() {
  return (
    <section className="overflow-hidden bg-[#050b17] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeLeft}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-100">
              <Image
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1000&q=80&auto=format&fit=crop"
                alt="Serviceroboter im praktischen Einsatz"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-zinc-800 bg-slate-950 p-5 shadow-xl shadow-black/30 sm:block">
              <div className="text-3xl font-bold font-mono text-white">24h</div>
              <div className="mt-1 text-sm text-zinc-400">Support-Reaktionszeit</div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeRight}
          >
            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-600 mb-4">
              Warum Sebotics
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Der schnellste Weg vom Use Case zur richtigen Lösung.
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-zinc-400">
              Wir strukturieren den gesamten Entscheidungsraum für Robotik — damit Sie nicht irgendeine, sondern die richtige Lösung für Ihren Betrieb einführen.
            </p>

            <div className="space-y-5 mb-10">
              {differentiators.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-50 border border-brand-200 mt-0.5">
                    <Check className="size-3.5 text-brand-600" />
                  </div>
                  <div>
                    <p className="mb-0.5 font-semibold text-white">{item.title}</p>
                    <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Link
                href="/ueber-uns/"
                className="rounded-xl border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/5"
              >
                Über Sebotics
              </Link>
              <Link
                href="/case-studies/"
                className="rounded-xl border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/5"
              >
                Case Studies ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
