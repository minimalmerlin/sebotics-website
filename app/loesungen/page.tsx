import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Roboterlösungen",
  description: "Alle Robotertypen von Sebotics: Serviceroboter, Reinigungsroboter, Transportroboter, Hotelroboter, Sicherheitsroboter und RaaS.",
  path: "/loesungen/",
});

const solutionIcons: Record<string, string> = {
  serviceroboter: "🤖",
  reinigungsroboter: "🧹",
  transportroboter: "🚛",
  hotelroboter: "🛎️",
  sicherheitsroboter: "🔒",
  raas: "📋",
};

export default function LoesungenPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-500 mb-3">Lösungen</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Welcher Robotertyp passt zu Ihrem Betrieb?
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Nicht irgendein Roboter — sondern die richtige Lösung für Ihren Use Case. Mit Eignung, Grenzen, Voraussetzungen und Kostenmodellen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              href={`/loesungen/${solution.slug}/`}
              className="group flex flex-col h-full rounded-sm border border-slate-200 bg-white p-6 transition-all duration-150 hover:border-brand-300 hover:shadow-sm"
            >
              <div className="text-3xl mb-4">{solutionIcons[solution.slug] ?? "🤖"}</div>
              <h2 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-brand-600">
                {solution.title}
              </h2>
              <p className="text-sm text-slate-500 mb-6 flex-1 leading-relaxed">{solution.summary}</p>

              {/* Quick eligibility */}
              <div className="mb-4 text-sm">
                <p className="font-medium text-slate-700 mb-1">Geeignet für:</p>
                <p className="text-slate-500 line-clamp-2">{solution.suitedFor.slice(0, 2).join(" · ")}</p>
              </div>

              <div className="flex items-center gap-1 text-sm font-medium text-brand-500 transition-all group-hover:gap-2">
                Lösung ansehen <ArrowRight className="size-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
