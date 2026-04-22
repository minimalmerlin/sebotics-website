import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ConfiguratorCTA } from "@/components/sections/ConfiguratorCTA";

export const metadata: Metadata = buildMetadata({
  title: "Wartung & Support für Roboter",
  description: "Wartung, Monitoring und Support für Robotersysteme von Sebotics. SLA mit definierten Reaktionszeiten, Remote-Monitoring und Vor-Ort-Service.",
  path: "/wartung-support/",
});

export default function WartungSupportPage() {
  return (
    <>
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-widest text-orange-400 mb-4">Support</p>
          <h1 className="text-4xl font-bold mb-4">Wartung & Support</h1>
          <p className="text-xl text-slate-300">Zuverlässiger Betrieb durch proaktives Monitoring, schnelle Reaktion und klare SLAs.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Remote-Monitoring", "Vor-Ort-Service", "Backup-Einheit"].map((item) => (
              <div key={item} className="border border-slate-200 rounded-sm p-6">
                <h3 className="font-bold text-slate-900 mb-2">{item}</h3>
                <p className="text-sm text-slate-500">Inhalte werden hier ausgebaut.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ConfiguratorCTA />
    </>
  );
}
