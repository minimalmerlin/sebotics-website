"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { stagger, fadeLeft, fadeRight, viewportConfig } from "@/lib/animations";

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
    <section className="py-20 md:py-28 bg-white overflow-hidden">
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
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&q=80&auto=format&fit=crop"
                alt="Moderne Robotik-Integration in der Praxis"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl border border-zinc-200 shadow-xl p-5 hidden sm:block">
              <div className="text-3xl font-bold font-mono text-zinc-900">24h</div>
              <div className="text-sm text-zinc-500 mt-1">Support-Reaktionszeit</div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeRight}
          >
            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-cyan-600 mb-4">
              Warum Sebotics
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              Der schnellste Weg vom Use Case zur richtigen Lösung.
            </h2>
            <p className="text-lg text-zinc-500 mb-10 leading-relaxed">
              Wir strukturieren den gesamten Entscheidungsraum für Robotik — damit Sie nicht irgendeine, sondern die richtige Lösung für Ihren Betrieb einführen.
            </p>

            <div className="space-y-5 mb-10">
              {differentiators.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-cyan-50 border border-cyan-200 mt-0.5">
                    <Check className="size-3.5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 mb-0.5">{item.title}</p>
                    <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Link
                href="/ueber-uns/"
                className="rounded-xl border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
              >
                Über Sebotics
              </Link>
              <Link
                href="/case-studies/"
                className="rounded-xl border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
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
