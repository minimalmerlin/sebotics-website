import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ConfiguratorCTA } from "@/components/sections/ConfiguratorCTA";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies — Robotik in der Praxis",
  description: "Sebotics Case Studies: Wie Kunden aus Gastronomie, Hotellerie, Industrie und Facility Management operative Engpässe mit Robotik lösen.",
  path: "/case-studies/",
  noIndex: true,
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="py-16 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-4">Referenzen</p>
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-slate-300">Praxisbeispiele aus Gastronomie, Hotellerie, Industrie und Facility Management.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-200 rounded-sm p-12 text-center text-slate-400">
            <p className="text-lg">Case Studies werden kontinuierlich ergänzt.</p>
            <p className="text-sm mt-2">Sprechen Sie uns für Referenzen direkt an.</p>
          </div>
        </div>
      </section>
      <ConfiguratorCTA />
    </>
  );
}
