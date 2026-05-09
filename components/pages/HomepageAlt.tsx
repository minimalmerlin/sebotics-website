import Image from "next/image";
import Link from "next/link";
import { faqSchema } from "@/lib/schema";
import { homepageContent } from "@/lib/homepage-content";

function AltSectionIntro({
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
      <p className="mb-3 text-xs font-medium tracking-wide text-[#6E6E73]">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-semibold tracking-tight text-[#1D1D1F] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#333336]">
        {copy}
      </p>
    </div>
  );
}

export function HomepageAlt() {
  const content = homepageContent;

  return (
    <div className="bg-white text-[#1D1D1F]">
      <section className="border-b border-[#EDEDF2] bg-white">
        <div className="mx-auto max-w-[1262px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-medium tracking-wide text-[#6E6E73]">
                Sebotics für Robotik + Integration
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[#1D1D1F] md:text-7xl">
                {content.hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#333336] md:text-[19px]">
                {content.hero.subheadline}
              </p>
              <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#333336]">
                {content.hero.supportingCopy}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={content.hero.primaryCta.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#0071E3] px-6 py-3 text-[17px] text-white transition-colors hover:bg-[#006EDB]"
                >
                  {content.hero.primaryCta.label}
                </Link>
                <Link
                  href={content.hero.secondaryCta.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#0071E3] px-6 py-3 text-[17px] text-[#0071E3] transition-colors hover:bg-[#0071E3]/5"
                >
                  {content.hero.secondaryCta.label}
                </Link>
              </div>
              <p className="mt-8 text-[15px] leading-7 text-[#6E6E73]">
                {content.hero.trustLine}
              </p>
            </div>

            <div className="overflow-hidden border border-[#EDEDF2] bg-white">
              <Image
                src="/home-robotics.webp"
                alt="Robotik im realen Einsatzumfeld"
                width={1600}
                height={1067}
                className="h-full min-h-[460px] w-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="mt-8 border-t border-[#EDEDF2] pt-6">
            <p className="text-[15px] leading-8 text-[#333336]">{content.thesis}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#EDEDF2]">
        <div className="mx-auto max-w-[1262px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <AltSectionIntro
            eyebrow="Problem"
            title={content.problem.headline}
            copy={content.problem.subheadline}
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5 text-[17px] leading-8 text-[#333336]">
              {content.problem.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {content.problem.questions.map((question) => (
                <div key={question} className="border border-[#EDEDF2] px-6 py-5">
                  <p className="text-[17px] leading-8 text-[#1D1D1F]">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#EDEDF2] bg-[#FBFBFD]">
        <div className="mx-auto max-w-[1262px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <AltSectionIntro
            eyebrow="Lösung"
            title={content.solution.headline}
            copy={content.solution.subheadline}
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5 text-[17px] leading-8 text-[#333336]">
              {content.solution.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {content.solution.promises.map((promise) => (
                <div key={promise.title} className="border border-[#EDEDF2] bg-white px-6 py-6">
                  <h3 className="text-2xl font-semibold text-[#1D1D1F]">{promise.title}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#333336]">
                    {promise.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#EDEDF2]">
        <div className="mx-auto max-w-[1262px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <AltSectionIntro
            eyebrow="Use Cases"
            title={content.useCases.headline}
            copy={content.useCases.subheadline}
          />
          <p className="mt-5 max-w-3xl text-[17px] leading-8 text-[#333336]">
            {content.useCases.intro}
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {content.useCases.cards.map((card) => (
              <div key={card.headline} className="border border-[#EDEDF2] bg-white px-6 py-6">
                <h3 className="text-[24px] font-semibold leading-8 text-[#1D1D1F]">
                  {card.headline}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[#333336]">{card.copy}</p>
                <p className="mt-5 text-xs font-medium tracking-wide text-[#6E6E73]">
                  Geeignet für
                </p>
                <p className="mt-2 text-[15px] leading-7 text-[#333336]">
                  {card.suitedFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#EDEDF2] bg-[#FBFBFD]">
        <div className="mx-auto max-w-[1262px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <AltSectionIntro
            eyebrow="Prozess"
            title={content.process.headline}
            copy={content.process.subheadline}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.process.steps.map((step) => (
              <div key={step.step} className="border border-[#EDEDF2] bg-white px-6 py-6">
                <p className="text-xs font-medium tracking-wide text-[#6E6E73]">
                  Schritt {step.step}
                </p>
                <h3 className="mt-3 text-[24px] font-semibold text-[#1D1D1F]">
                  {step.headline}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[#333336]">{step.copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href={content.process.cta.href}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#0071E3] px-6 py-3 text-[17px] text-white transition-colors hover:bg-[#006EDB]"
            >
              {content.process.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#EDEDF2]">
        <div className="mx-auto max-w-[1262px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <AltSectionIntro
            eyebrow="Branchen"
            title={content.industries.headline}
            copy={content.industries.subheadline}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.industries.cards.map((industry) => (
              <div key={industry.title} className="border border-[#EDEDF2] bg-white px-6 py-6">
                <h3 className="text-[24px] font-semibold text-[#1D1D1F]">{industry.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-[#333336]">{industry.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#EDEDF2] bg-[#FBFBFD]">
        <div className="mx-auto max-w-[1262px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <AltSectionIntro
            eyebrow="Warum Sebotics"
            title={content.whySebotics.headline}
            copy={content.whySebotics.subheadline}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-5">
              {content.whySebotics.points.map((point) => (
                <div key={point.title} className="border border-[#EDEDF2] bg-white px-6 py-6">
                  <h3 className="text-[24px] font-semibold text-[#1D1D1F]">{point.title}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#333336]">{point.copy}</p>
                </div>
              ))}
            </div>
            <div className="border border-[#EDEDF2] bg-white px-6 py-6">
              <p className="text-xs font-medium tracking-wide text-[#6E6E73]">
                Integration entscheidet
              </p>
              <p className="mt-4 text-[17px] leading-8 text-[#333336]">
                {content.whySebotics.closing}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#EDEDF2]">
        <div className="mx-auto max-w-[1262px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <AltSectionIntro
            eyebrow="Einstieg"
            title={content.evaluation.headline}
            copy={content.evaluation.subheadline}
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[17px] leading-8 text-[#333336]">
                {content.evaluation.copy}
              </p>
              <div className="mt-8">
                <Link
                  href={content.evaluation.cta.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#0071E3] px-6 py-3 text-[17px] text-white transition-colors hover:bg-[#006EDB]"
                >
                  {content.evaluation.cta.label}
                </Link>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {content.evaluation.fields.map((field) => (
                <div key={field.title} className="border border-[#EDEDF2] bg-white px-6 py-6">
                  <p className="text-xs font-medium tracking-wide text-[#6E6E73]">
                    {field.title}
                  </p>
                  <p className="mt-3 text-[15px] leading-7 text-[#333336]">{field.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#EDEDF2] bg-[#FBFBFD]">
        <div className="mx-auto max-w-[1262px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <AltSectionIntro
            eyebrow="FAQ"
            title="Häufige Fragen vor einem Robotikprojekt"
            copy="Antworten auf die typischen Einwände, die vor einer strukturierten Use-Case-Prüfung geklärt werden sollten."
          />
          <div className="mt-12 divide-y divide-[#EDEDF2] border-y border-[#EDEDF2] bg-white">
            {content.faqs.map((faq) => (
              <details key={faq.question} className="group px-2 py-5">
                <summary className="cursor-pointer list-none pr-8 text-[24px] font-semibold text-[#1D1D1F]">
                  {faq.question}
                </summary>
                <p className="mt-4 max-w-4xl text-[15px] leading-7 text-[#333336]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(content.faqs)) }}
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1262px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid overflow-hidden border border-[#EDEDF2] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="px-6 py-10 md:px-10 md:py-12">
              <p className="text-xs font-medium tracking-wide text-[#6E6E73]">
                Nächster Schritt
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1D1D1F] md:text-5xl">
                {content.finalCta.headline}
              </h2>
              <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#333336]">
                {content.finalCta.subheadline}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={content.finalCta.primaryCta.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#0071E3] px-6 py-3 text-[17px] text-white transition-colors hover:bg-[#006EDB]"
                >
                  {content.finalCta.primaryCta.label}
                </Link>
                <Link
                  href={content.finalCta.secondaryCta.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#0071E3] px-6 py-3 text-[17px] text-[#0071E3] transition-colors hover:bg-[#0071E3]/5"
                >
                  {content.finalCta.secondaryCta.label}
                </Link>
              </div>
            </div>
            <div className="border-t border-[#EDEDF2] lg:border-t-0 lg:border-l">
              <Image
                src="/home-robotics.webp"
                alt="Robotik in professioneller Umgebung"
                width={1600}
                height={1067}
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
