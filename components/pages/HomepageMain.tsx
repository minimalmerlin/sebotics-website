import Image from "next/image";
import Link from "next/link";
import { faqSchema } from "@/lib/schema";
import { homepageContent } from "@/lib/homepage-content";

function MainSectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
        {copy}
      </p>
    </div>
  );
}

export function HomepageMain() {
  const content = homepageContent;

  return (
    <>
      <div className="bg-[#05080f] text-white">
        <section className="border-b border-white/10">
          <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
                Robotik + Integration
              </p>
              <h1 className="max-w-4xl text-5xl font-medium tracking-[-0.04em] text-white md:text-7xl">
                {content.hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                {content.hero.subheadline}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
                {content.hero.supportingCopy}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={content.hero.primaryCta.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-200"
                >
                  {content.hero.primaryCta.label}
                </Link>
                <Link
                  href={content.hero.secondaryCta.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200"
                >
                  {content.hero.secondaryCta.label}
                </Link>
              </div>
              <p className="mt-8 text-sm leading-7 text-slate-400">
                {content.hero.trustLine}
              </p>
            </div>

            <div className="relative overflow-hidden border border-white/10 bg-[#0b1220]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.22),transparent_45%),linear-gradient(160deg,rgba(11,18,32,0.1),rgba(11,18,32,0.9))]" />
              <Image
                src="/home-robotics.webp"
                alt="Robotik im realen Einsatzumfeld"
                width={1600}
                height={1067}
                className="h-full min-h-[520px] w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/70 to-transparent p-8">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/90">
                  Zentrale Website-These
                </p>
                <p className="mt-3 max-w-xl text-lg leading-8 text-white">
                  {content.thesis}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#070d17]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <MainSectionIntro
              eyebrow="Problem"
              title={content.problem.headline}
              copy={content.problem.subheadline}
            />
            <div className="mt-12 grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-6 text-base leading-8 text-slate-300">
                {content.problem.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
                {content.problem.questions.map((question) => (
                  <div key={question} className="bg-[#0a1322] p-6">
                    <p className="text-sm font-medium leading-7 text-slate-100">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <MainSectionIntro
              eyebrow="Lösung"
              title={content.solution.headline}
              copy={content.solution.subheadline}
            />
            <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6 text-base leading-8 text-slate-300">
                {content.solution.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
                {content.solution.promises.map((promise) => (
                  <div key={promise.title} className="bg-[#07111f] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      {promise.title}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {promise.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#070d17]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <MainSectionIntro
              eyebrow="Use Cases"
              title={content.useCases.headline}
              copy={content.useCases.subheadline}
            />
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              {content.useCases.intro}
            </p>
            <div className="mt-12 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-2 xl:grid-cols-3">
              {content.useCases.cards.map((card) => (
                <div key={card.headline} className="bg-[#08101d] p-7">
                  <h3 className="text-xl font-medium text-white">{card.headline}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{card.copy}</p>
                  <p className="mt-5 text-xs uppercase tracking-[0.2em] text-cyan-200">
                    Geeignet für
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {card.suitedFor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <MainSectionIntro
              eyebrow="Prozess"
              title={content.process.headline}
              copy={content.process.subheadline}
            />
            <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
              {content.process.steps.map((step) => (
                <div key={step.step} className="bg-[#09111d] p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                    Schritt {step.step}
                  </p>
                  <h3 className="mt-4 text-xl font-medium text-white">{step.headline}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{step.copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href={content.process.cta.href}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-200"
              >
                {content.process.cta.label}
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#070d17]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <MainSectionIntro
              eyebrow="Branchen"
              title={content.industries.headline}
              copy={content.industries.subheadline}
            />
            <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
              {content.industries.cards.map((industry) => (
                <div key={industry.title} className="bg-[#08101d] p-7">
                  <h3 className="text-xl font-medium text-white">{industry.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{industry.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <MainSectionIntro
              eyebrow="Warum Sebotics"
              title={content.whySebotics.headline}
              copy={content.whySebotics.subheadline}
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="grid gap-px border border-white/10 bg-white/10">
                {content.whySebotics.points.map((point) => (
                  <div key={point.title} className="bg-[#09111d] p-6">
                    <h3 className="text-lg font-medium text-white">{point.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{point.copy}</p>
                  </div>
                ))}
              </div>
              <div className="border border-cyan-400/25 bg-cyan-400/10 p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Integration entscheidet
                </p>
                <p className="mt-5 text-lg leading-8 text-white">
                  {content.whySebotics.closing}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#070d17]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <MainSectionIntro
              eyebrow="Einstieg"
              title={content.evaluation.headline}
              copy={content.evaluation.subheadline}
            />
            <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-base leading-8 text-slate-300">
                  {content.evaluation.copy}
                </p>
                <div className="mt-8">
                  <Link
                    href={content.evaluation.cta.href}
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-200"
                  >
                    {content.evaluation.cta.label}
                  </Link>
                </div>
              </div>
              <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
                {content.evaluation.fields.map((field) => (
                  <div key={field.title} className="bg-[#08101d] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      {field.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{field.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <MainSectionIntro
              eyebrow="FAQ"
              title="Häufige Fragen vor einem Robotikprojekt"
              copy="Antworten auf die typischen Einwände, die vor einer strukturierten Use-Case-Prüfung geklärt werden sollten."
            />
            <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
              {content.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 text-lg font-medium text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(content.faqs)) }}
          />
        </section>

        <section className="relative overflow-hidden">
          <Image
            src="/home-robotics.webp"
            alt="Sebotics CTA"
            width={1600}
            height={1067}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,8,15,0.96),rgba(5,8,15,0.84),rgba(7,13,23,0.92))]" />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Nächster Schritt
              </p>
              <h2 className="mt-4 text-4xl font-medium tracking-tight text-white md:text-6xl">
                {content.finalCta.headline}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                {content.finalCta.subheadline}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={content.finalCta.primaryCta.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-200"
                >
                  {content.finalCta.primaryCta.label}
                </Link>
                <Link
                  href={content.finalCta.secondaryCta.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200"
                >
                  {content.finalCta.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
