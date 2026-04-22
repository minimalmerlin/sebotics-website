import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { solutions, industries } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ConfiguratorCTA } from "@/components/sections/ConfiguratorCTA";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};
  return buildMetadata({
    title: solution.title,
    description: solution.directAnswer,
    path: `/loesungen/${slug}/`,
  });
}

export default async function LoesungSlugPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  const linkedIndustries = industries.filter((i) =>
    i.relevantSolutions.includes(solution.slug)
  );

  const crumbs = breadcrumbSchema([
    { name: "Startseite", href: "/" },
    { name: "Lösungen", href: "/loesungen/" },
    { name: solution.title, href: `/loesungen/${slug}/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(solution.title, solution.directAnswer, `/loesungen/${slug}/`)),
        }}
      />
      {solution.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(solution.faqs)) }}
        />
      )}

      {/* Hero */}
      <section className="bg-slate-950 py-16 md:py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            dark
            items={[
              { label: "Startseite", href: "/" },
              { label: "Lösungen", href: "/loesungen/" },
              { label: solution.title },
            ]}
          />

          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-4">
              Robotertyp
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              {solution.title}
            </h1>

            {/* AEO Direktantwort */}
            <div className="mb-8 border-l-2 border-brand-500 pl-5">
              <p className="text-slate-300 leading-relaxed">{solution.directAnswer}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/konfigurator/"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-500 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-brand-600"
              >
                Konfigurieren <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/roi/"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-500/40 bg-brand-500/10 px-6 py-3 text-base font-medium text-brand-200 transition-colors hover:bg-brand-500/20"
              >
                ROI einschätzen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Eignung */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="size-6 text-green-500" />
                Geeignet für
              </h2>
              <div className="space-y-3">
                {solution.suitedFor.map((item) => (
                  <div key={item} className="flex gap-3 text-slate-700">
                    <span className="text-green-500 shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <XCircle className="size-6 text-red-400" />
                Nicht geeignet für
              </h2>
              <div className="space-y-3">
                {solution.notSuitedFor.map((item) => (
                  <div key={item} className="flex gap-3 text-slate-700">
                    <span className="text-red-400 shrink-0">✗</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Aufgaben + Vorteile + Grenzen */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-slate-200 rounded-sm p-6">
              <h3 className="font-bold text-slate-900 mb-4">Typische Aufgaben</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {solution.typicalTasks.map((task) => (
                  <li key={task} className="flex gap-2">
                    <span className="shrink-0 text-brand-500">→</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-sm p-6">
              <h3 className="font-bold text-slate-900 mb-4">Vorteile</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {solution.advantages.map((adv) => (
                  <li key={adv} className="flex gap-2">
                    <CheckCircle2 className="size-4 text-green-500 shrink-0 mt-0.5" />
                    {adv}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-sm p-6">
              <h3 className="font-bold text-slate-900 mb-4">Grenzen</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {solution.limits.map((limit) => (
                  <li key={limit} className="flex gap-2">
                    <span className="text-slate-400 shrink-0">–</span>
                    {limit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Voraussetzungen */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Voraussetzungen vor Ort</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solution.prerequisites.map((req) => (
              <div key={req} className="border border-slate-200 bg-white rounded-sm p-4 text-sm text-slate-700">
                {req}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kauf / Miete / RaaS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Kauf · Miete · RaaS</h2>
          <p className="text-slate-600 mb-6">
            Wählen Sie das Modell, das zu Ihrer Budgetlogik und Ihrem Risikoprofil passt.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/raas-vs-kauf/"
              className="rounded-md border border-brand-500/40 bg-brand-500/10 px-4 py-2 text-sm text-brand-200 transition-colors hover:bg-brand-500/20"
            >
              Kauf vs. Miete vs. RaaS vergleichen →
            </Link>
            <Link
              href="/raas/"
              className="rounded-md border border-brand-500/40 bg-brand-500/10 px-4 py-2 text-sm text-brand-200 transition-colors hover:bg-brand-500/20"
            >
              RaaS-Pakete ansehen →
            </Link>
            <Link
              href="/roi/"
              className="rounded-md border border-brand-500/40 bg-brand-500/10 px-4 py-2 text-sm text-brand-200 transition-colors hover:bg-brand-500/20"
            >
              ROI einschätzen →
            </Link>
          </div>
        </div>
      </section>

      {/* Passende Branchen */}
      {linkedIndustries.length > 0 && (
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Branchen, die {solution.title} einsetzen
            </h2>
            <div className="flex flex-wrap gap-3">
              {linkedIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/branchen/${ind.slug}/`}
                  className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-600"
                >
                  {ind.title.replace("Robotik für ", "")}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {solution.faqs.length > 0 && (
        <FAQAccordion title={`Häufige Fragen zu ${solution.title}`} faqs={solution.faqs} />
      )}

      {/* CTA */}
      <ConfiguratorCTA variant="split" />
    </>
  );
}
