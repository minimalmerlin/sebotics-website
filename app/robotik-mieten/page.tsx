import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ConfiguratorCTA } from "@/components/sections/ConfiguratorCTA";

export const metadata: Metadata = buildMetadata({
  title: "Roboter mieten",
  description: "Serviceroboter, Reinigungsroboter und Transportroboter mieten — ohne hohe Anfangsinvestition. Flexible Laufzeiten für Ihren Betrieb.",
  path: "/robotik-mieten/",
});

export default function RobotikMietenPage() {
  return (
    <>
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-4">Kostenmodell</p>
            <h1 className="text-4xl font-bold mb-4">Roboter mieten</h1>
            <p className="text-xl text-slate-300 mb-8">Robotik ohne hohe Anfangsinvestition — mit definierter Laufzeit und klaren monatlichen Kosten.</p>
            <Link href="/raas-vs-kauf/" className="inline-flex items-center gap-2 rounded-md border border-brand-500/40 bg-brand-500/10 px-5 py-2.5 text-sm font-medium text-brand-200 transition-colors hover:bg-brand-500/20">
              Kauf vs. Miete vs. RaaS vergleichen →
            </Link>
          </div>
        </div>
      </section>
      <ConfiguratorCTA />
    </>
  );
}
