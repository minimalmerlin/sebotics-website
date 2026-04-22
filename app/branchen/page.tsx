import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Robotik nach Branche",
  description: "Sebotics liefert branchenspezifische Robotiklösungen für Gastronomie, Hotellerie, Industrie, Logistik, Gesundheitswesen und Facility Management.",
  path: "/branchen/",
});

const industryIcons: Record<string, string> = {
  gastronomie: "🍽️",
  hotellerie: "🏨",
  industrie: "🏭",
  logistik: "📦",
  gesundheitswesen: "🏥",
  "facility-management": "🏢",
};

export default function BranchenPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-orange-500 mb-3">Branchen</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Robotik für Ihre Branche
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Jede Branche hat andere operative Engpässe — und braucht andere Lösungen. Wählen Sie Ihre Branche für konkrete Empfehlungen, Voraussetzungen und ROI.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/branchen/${industry.slug}/`}
              className="group flex flex-col h-full border border-slate-200 bg-white rounded-sm p-6 hover:border-orange-300 hover:shadow-sm transition-all duration-150"
            >
              <div className="text-3xl mb-4">{industryIcons[industry.slug] ?? "🤖"}</div>
              <h2 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-3">
                {industry.title}
              </h2>
              <p className="text-sm text-slate-500 mb-4 flex-1">{industry.subline}</p>
              <div className="space-y-1 mb-6">
                {industry.pains.map((pain) => (
                  <div key={pain} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-slate-300 shrink-0">→</span>
                    {pain}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-orange-500 group-hover:gap-2 transition-all">
                Branchenlösung ansehen <ArrowRight className="size-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
