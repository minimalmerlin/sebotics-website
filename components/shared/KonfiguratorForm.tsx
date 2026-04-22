"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/config";

type Step = 1 | 2 | 3 | "result";

interface FormData {
  branche: string;
  useCase: string;
  modell: string;
}

const useCaseOptions = [
  { value: "tischservice", label: "Tischservice / Speisen ausliefern" },
  { value: "room-service", label: "Room-Service / Hotelauslieferung" },
  { value: "flaechenreinigung", label: "Bodenreinigung / Flächenreinigung" },
  { value: "materialtransport", label: "Materialtransport intern" },
  { value: "sicherheit", label: "Überwachung / Sicherheitsrundgang" },
  { value: "other", label: "Anderer Use Case" },
];

const modellOptions = [
  { value: "kauf", label: "Kauf — ich möchte Eigentum" },
  { value: "miete", label: "Miete / Leasing — mehr Flexibilität" },
  { value: "raas", label: "RaaS — alles inklusive, monatliche Rate" },
  { value: "offen", label: "Offen — ich möchte mich beraten lassen" },
];

function getRecommendation(data: FormData): { solution: string; slug: string; reason: string } {
  const useCaseToSolution: Record<string, { solution: string; slug: string; reason: string }> = {
    tischservice: { solution: "Serviceroboter", slug: "serviceroboter", reason: "Serviceroboter wie BellaBot und Mars sind speziell für Tischservice und Speisen-Auslieferung konzipiert." },
    "room-service": { solution: "Hotelroboter", slug: "hotelroboter", reason: "Hotelroboter liefern Amenities und Bestellungen autonom auf Zimmer — auch per Aufzug." },
    flaechenreinigung: { solution: "Reinigungsroboter", slug: "reinigungsroboter", reason: "Reinigungsroboter automatisieren wiederkehrende Bodenreinigung auf Flächen ab 200 m²." },
    materialtransport: { solution: "Transportroboter", slug: "transportroboter", reason: "Transportroboter übernehmen interne Fahrten, Materialbewegungen und Standardtransporte." },
    sicherheit: { solution: "Sicherheitsroboter", slug: "sicherheitsroboter", reason: "Sicherheitsroboter führen autonome Rundgänge durch und liefern kontinuierliche Monitoring-Daten." },
    other: { solution: "Serviceroboter", slug: "serviceroboter", reason: "Für Ihren Use Case empfehlen wir ein persönliches Gespräch für eine präzise Empfehlung." },
  };
  return useCaseToSolution[data.useCase] ?? useCaseToSolution.other;
}

export function KonfiguratorForm() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>({ branche: "", useCase: "", modell: "" });

  const recommendation = step === "result" ? getRecommendation(form) : null;

  return (
    <div className="bg-white border border-slate-200 rounded-sm p-8">
      {step === 1 && (
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">In welcher Branche sind Sie tätig?</h2>
          <p className="text-sm text-slate-500 mb-6">Wählen Sie Ihre Branche für branchenspezifische Empfehlungen.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {industries.map((ind) => (
              <button
                key={ind.slug}
                onClick={() => { setForm({ ...form, branche: ind.slug }); setStep(2); }}
                className={`text-left border rounded-sm p-4 text-sm transition-all hover:border-orange-300 ${
                  form.branche === ind.slug ? "border-orange-500 bg-orange-50" : "border-slate-200"
                }`}
              >
                <div className="font-medium text-slate-900">{ind.title.replace("Robotik für ", "")}</div>
                <div className="text-slate-500 text-xs mt-1 line-clamp-1">{ind.pains[0]}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <button onClick={() => setStep(1)} className="text-sm text-slate-500 mb-4 hover:text-slate-700">← Zurück</button>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Welche Aufgabe soll der Roboter übernehmen?</h2>
          <p className="text-sm text-slate-500 mb-6">Wählen Sie den primären Use Case.</p>
          <div className="space-y-3">
            {useCaseOptions.map((uc) => (
              <button
                key={uc.value}
                onClick={() => { setForm({ ...form, useCase: uc.value }); setStep(3); }}
                className={`w-full text-left border rounded-sm p-4 text-sm transition-all hover:border-orange-300 ${
                  form.useCase === uc.value ? "border-orange-500 bg-orange-50" : "border-slate-200"
                }`}
              >
                <span className="font-medium text-slate-900">{uc.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <button onClick={() => setStep(2)} className="text-sm text-slate-500 mb-4 hover:text-slate-700">← Zurück</button>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Welches Kostenmodell bevorzugen Sie?</h2>
          <p className="text-sm text-slate-500 mb-6">Kauf, Miete oder RaaS — oder lassen Sie sich beraten.</p>
          <div className="space-y-3">
            {modellOptions.map((mo) => (
              <button
                key={mo.value}
                onClick={() => { setForm({ ...form, modell: mo.value }); setStep("result"); }}
                className={`w-full text-left border rounded-sm p-4 text-sm transition-all hover:border-orange-300 ${
                  form.modell === mo.value ? "border-orange-500 bg-orange-50" : "border-slate-200"
                }`}
              >
                <span className="font-medium text-slate-900">{mo.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === "result" && recommendation && (
        <div>
          <div className="mb-6 pb-6 border-b border-slate-100">
            <div className="inline-block rounded-sm border border-green-200 bg-green-50 px-3 py-1 text-xs font-mono font-semibold text-green-700 mb-4">
              Empfehlung
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{recommendation.solution}</h2>
            <p className="text-slate-600 leading-relaxed">{recommendation.reason}</p>
          </div>

          <div className="space-y-3">
            <Link
              href={`/loesungen/${recommendation.slug}/`}
              className="flex items-center justify-between w-full rounded-md bg-orange-500 hover:bg-orange-600 px-5 py-3 text-sm font-medium text-white transition-colors"
            >
              <span>{recommendation.solution} — Details ansehen</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/kontakt/"
              className="flex items-center justify-between w-full rounded-md border border-slate-300 hover:bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 transition-colors"
            >
              <span>Demo anfragen oder Beratung buchen</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/pilotprojekt/"
              className="flex items-center justify-between w-full rounded-md border border-slate-300 hover:bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 transition-colors"
            >
              <span>Pilotprojekt besprechen</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <button
            onClick={() => { setForm({ branche: "", useCase: "", modell: "" }); setStep(1); }}
            className="mt-4 text-sm text-slate-400 hover:text-slate-600"
          >
            Neu starten
          </button>
        </div>
      )}
    </div>
  );
}
