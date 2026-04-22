import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Impressum",
  description: "Impressum von Sebotics.",
  path: "/impressum/",
  noIndex: true,
});

export default function ImpressumPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Impressum</h1>
        <p className="text-slate-600 text-sm">Angaben gemäß § 5 TMG. Inhalte werden hier ergänzt.</p>
      </div>
    </div>
  );
}
