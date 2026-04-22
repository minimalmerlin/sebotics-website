import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { ConfiguratorCTA } from "@/components/sections/ConfiguratorCTA";

export const metadata: Metadata = buildMetadata({
  title: "Pilotprojekt Robotik",
  description: "30-, 60- oder 90-Tage-Pilot für Robotik: Mit klaren Erfolgskriterien, strukturiertem Ablauf und Scale-Up-Plan. Risikominimiert einsteigen.",
  path: "/pilotprojekt/",
});

const pilotPhasen = [
  {
    dauer: "Woche 1–2",
    titel: "Use Case Assessment & Setup",
    punkte: [
      "Analyse Ihrer Prozesse und Anforderungen",
      "Standortcheck und Kartierung",
      "Konfiguration des Robotersystems",
      "Schulung Ihres Teams",
    ],
  },
  {
    dauer: "Woche 3–6",
    titel: "Go-Live & Monitoring",
    punkte: [
      "Offizieller Betriebsstart",
      "Laufendes Remote-Monitoring",
      "Anpassung von Routen und Parametern",
      "Messung der Erfolgskriterien",
    ],
  },
  {
    dauer: "Woche 7–12",
    titel: "Auswertung & Scale-Up-Entscheidung",
    punkte: [
      "Ergebnisbericht mit KPIs",
      "Gemeinsame Bewertung vs. Erfolgskriterien",
      "Scale-Up-Plan oder alternative Empfehlung",
      "Vertragsgestaltung für Dauerbetrieb",
    ],
  },
];

const pilotFaqs = [
  {
    question: "Wie läuft ein Pilotprojekt ab?",
    answer: "Ein Pilot dauert typischerweise 30–90 Tage. Phase 1: Assessment & Setup (Woche 1–2). Phase 2: Go-Live & Monitoring (Woche 3–6). Phase 3: Auswertung & Scale-Up-Entscheidung (Woche 7–12).",
  },
  {
    question: "Was kostet ein Pilotprojekt?",
    answer: "Die Kosten hängen vom Robotertyp, der Pilotlaufzeit und dem Leistungsumfang ab. Via RaaS sind Piloten mit monatlichen Raten möglich. Wir erstellen nach einem ersten Gespräch ein konkretes Angebot.",
  },
  {
    question: "Welche Erfolgskriterien werden gemessen?",
    answer: "Das definieren wir gemeinsam vorab: z.B. Anzahl Serviceläufe/Tag, Personalentlastung in Stunden/Woche, Reinigungsflächenabdeckung, Verfügbarkeit des Systems. Keine vagen Ziele — klare Messpunkte.",
  },
];

export default function PilotprojektPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-950 py-16 md:py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-orange-400 mb-4">
              Risikominimiert einsteigen
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Pilotprojekt Robotik
            </h1>
            <div className="border-l-2 border-orange-500 pl-5 mb-8">
              <p className="text-slate-300 leading-relaxed">
                Ein Pilotprojekt ist der strukturierte Weg, Robotik in Ihrem Betrieb zu testen — mit klaren Erfolgskriterien, definiertem Ablauf und einer ehrlichen Auswertung. Kein Blindkauf, sondern fundierte Entscheidung.
              </p>
            </div>
            <Link
              href="/kontakt/"
              className="inline-flex items-center gap-2 rounded-md bg-orange-500 hover:bg-orange-600 px-6 py-3 text-base font-medium text-white transition-colors"
            >
              Pilot anfragen <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Pilotablauf in 3 Phasen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pilotPhasen.map((phase, i) => (
              <div key={phase.titel} className="border border-slate-200 rounded-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-8 items-center justify-center rounded-sm border border-orange-500/30 bg-orange-500/10">
                    <span className="font-mono text-sm font-bold text-orange-500">{`0${i + 1}`}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{phase.dauer}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-4">{phase.titel}</h3>
                <ul className="space-y-2">
                  {phase.punkte.map((punkt) => (
                    <li key={punkt} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-orange-500 shrink-0">→</span>
                      {punkt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Häufige Fragen zum Pilot</h2>
          <div className="space-y-6">
            {pilotFaqs.map((faq) => (
              <div key={faq.question} className="border-b border-slate-200 pb-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConfiguratorCTA />
    </>
  );
}
