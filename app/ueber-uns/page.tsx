import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { brand, proofAssets } from "@/lib/config";
import { ConfiguratorCTA } from "@/components/sections/ConfiguratorCTA";

export const metadata: Metadata = buildMetadata({
  title: "Über Sebotics",
  description: "Sebotics ist Ihr Robotics Solution Partner im deutschsprachigen Raum. Beratung, Integration und Betrieb aus einer Hand.",
  path: "/ueber-uns/",
});

export default function UeberUnsPage() {
  return (
    <>
      <section className="py-16 md:py-20 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-4">Über Sebotics</p>
          <h1 className="text-4xl font-bold mb-4">{brand.role}</h1>
          <p className="text-xl text-slate-300">{brand.positioningStatement}</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Mission</h2>
              <p className="text-slate-600 leading-relaxed">{brand.mission}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Referenzen</h2>
              <div className="flex flex-wrap gap-3">
                {proofAssets.references.map((ref) => (
                  <span key={ref} className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700">{ref}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ConfiguratorCTA />
    </>
  );
}
