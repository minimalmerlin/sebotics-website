import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { industries, solutions } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ConfiguratorCTA } from "@/components/sections/ConfiguratorCTA";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return buildMetadata({
    title: industry.title,
    description: `${industry.headline} ${industry.subline}`,
    path: `/branchen/${slug}/`,
  });
}

export default async function BranchenSlugPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const relevantSolutions = solutions.filter((s) =>
    industry.relevantSolutions.includes(s.slug)
  );

  const crumbs = breadcrumbSchema([
    { name: "Startseite", href: "/" },
    { name: "Branchen", href: "/branchen/" },
    { name: industry.title, href: `/branchen/${slug}/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(industry.faqs)) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 py-16 md:py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-slate-300">Startseite</Link>
            <span>/</span>
            <Link href="/branchen/" className="hover:text-slate-300">Branchen</Link>
            <span>/</span>
            <span className="text-slate-300">{industry.title}</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-orange-400 mb-4">
              Branchenlösung
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
              {industry.headline}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">{industry.subline}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={industry.primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 hover:bg-orange-600 px-6 py-3 text-base font-medium text-white transition-colors"
              >
                {industry.primaryCta} <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/pilotprojekt/"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-600 hover:bg-slate-800 px-6 py-3 text-base font-medium text-slate-300 transition-colors"
              >
                Pilotprojekt besprechen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Operative Engpässe */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Typische operative Engpässe
              </h2>
              <div className="space-y-3">
                {industry.pains.map((pain) => (
                  <div key={pain} className="flex gap-3">
                    <XCircle className="size-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{pain}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Was Robotik verändert
              </h2>
              <div className="space-y-3">
                {industry.desiredOutcomes.map((outcome) => (
                  <div key={outcome} className="flex gap-3">
                    <CheckCircle2 className="size-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passende Lösungen */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Geeignete Robotertypen für {industry.title.replace("Robotik für ", "")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relevantSolutions.map((sol) => (
              <Link
                key={sol.slug}
                href={`/loesungen/${sol.slug}/`}
                className="group border border-slate-200 bg-white rounded-sm p-5 hover:border-orange-300 hover:shadow-sm transition-all"
              >
                <h3 className="font-bold text-slate-900 group-hover:text-orange-600 mb-2">
                  {sol.title}
                </h3>
                <p className="text-sm text-slate-500 mb-3 line-clamp-2">{sol.summary}</p>
                <div className="text-sm font-medium text-orange-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Mehr erfahren <ArrowRight className="size-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integrationsprozess */}
      <ProcessTimeline />

      {/* FAQ */}
      {industry.faqs.length > 0 && (
        <FAQAccordion
          title={`Häufige Fragen: Robotik in ${industry.title.replace("Robotik für ", "")}`}
          faqs={industry.faqs}
          withSchema
        />
      )}

      {/* CTA */}
      <ConfiguratorCTA variant="split" />
    </>
  );
}
