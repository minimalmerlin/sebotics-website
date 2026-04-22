import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutz",
  description: "Datenschutzerklärung von Sebotics.",
  path: "/datenschutz/",
  noIndex: true,
});

export default function DatenschutzPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Datenschutzerklärung</h1>
        <p className="text-slate-600 text-sm">Inhalte werden hier ergänzt.</p>
      </div>
    </div>
  );
}
