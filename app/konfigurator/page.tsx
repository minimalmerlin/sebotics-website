import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { KonfiguratorForm } from "@/components/shared/KonfiguratorForm";

export const metadata: Metadata = buildMetadata({
  title: "Konfigurator — Roboter für Ihren Use Case finden",
  description: "Wählen Sie Branche, Use Case und Anforderungen — Sebotics empfiehlt den passenden Robotertyp und das optimale Kostenmodell.",
  path: "/konfigurator/",
});

export default function KonfiguratorPage() {
  return (
    <div className="py-16 md:py-20 bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-500 mb-3">
            Schritt 1 von 3
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Roboter für Ihren Betrieb finden
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Beantworten Sie 3 Fragen — wir empfehlen den passenden Robotertyp und das optimale Kostenmodell. Kostenlos und unverbindlich.
          </p>
        </div>

        <KonfiguratorForm />
      </div>
    </div>
  );
}
