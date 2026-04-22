import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Robotik-Wissen für Entscheider",
  description: "Fachartikel, Vergleiche, ROI-Analysen und Use-Case-Guides rund um professionelle Robotik von Sebotics.",
  path: "/blog/",
  noIndex: true,
});

export default function BlogPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono uppercase tracking-widest text-brand-500 mb-3">Blog</p>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Robotik-Wissen für Entscheider</h1>
        <p className="text-lg text-slate-600">Fachartikel, Vergleiche und Use-Case-Guides werden hier kontinuierlich ergänzt.</p>
      </div>
    </div>
  );
}
