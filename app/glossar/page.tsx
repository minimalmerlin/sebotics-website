import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Robotik-Glossar",
  description: "Robotik-Begriffe einfach erklärt: Serviceroboter, RaaS, AMR, Intralogistik und mehr. Das Robotik-Glossar von Sebotics.",
  path: "/glossar/",
  noIndex: true,
});

export default function GlossarPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono uppercase tracking-widest text-brand-500 mb-3">Glossar</p>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Robotik-Glossar</h1>
        <p className="text-lg text-slate-600">Definitionen werden hier ergänzt.</p>
      </div>
    </div>
  );
}
