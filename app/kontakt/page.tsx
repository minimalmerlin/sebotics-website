import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { KontaktForm } from "@/components/shared/KontaktForm";

export const metadata: Metadata = buildMetadata({
  title: "Demo anfragen & Kontakt",
  description: "Demo, Beratung oder Pilotprojekt anfragen. Sebotics antwortet innerhalb von 24 Stunden.",
  path: "/kontakt/",
});

export default function KontaktPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-orange-500 mb-3">Kontakt</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Demo anfragen oder Beratung buchen
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Zeigen Sie uns Ihren Use Case — wir melden uns innerhalb von 24 Stunden mit einer konkreten Einschätzung und nächsten Schritten.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Kostenfreier Konfigurator</h3>
                <p className="text-sm text-slate-600">
                  Noch nicht bereit für ein Gespräch?{" "}
                  <a href="/konfigurator/" className="text-orange-600 hover:underline">
                    Starten Sie mit dem Konfigurator
                  </a>{" "}
                  und erhalten Sie eine erste Empfehlung sofort.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Pilotprojekt</h3>
                <p className="text-sm text-slate-600">
                  Sie wollen erst testen?{" "}
                  <a href="/pilotprojekt/" className="text-orange-600 hover:underline">
                    Unser Pilotprojekt-Angebot
                  </a>{" "}
                  ermöglicht einen strukturierten 30–90-Tage-Test mit klaren Erfolgskriterien.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Reaktionszeit</h3>
                <p className="text-sm text-slate-600">Wir melden uns innerhalb von 24 Stunden an Werktagen.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <KontaktForm />
          </div>
        </div>
      </div>
    </div>
  );
}
