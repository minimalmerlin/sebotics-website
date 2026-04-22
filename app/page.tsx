import type { Metadata } from "next";
import { HeroDecisionSection } from "@/components/sections/HeroDecisionSection";
import { TrustLogoStrip } from "@/components/sections/TrustLogoStrip";
import { SolutionGrid } from "@/components/sections/SolutionGrid";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ROIBlock } from "@/components/sections/ROIBlock";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ConfiguratorCTA } from "@/components/sections/ConfiguratorCTA";
import { WhySebotics } from "@/components/sections/WhySebotics";
import { globalFaqs, brand } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: brand.primaryClaim,
  description: `${brand.primaryClaim} ${brand.positioningStatement}`,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroDecisionSection />

      {/* 2. Trust / KPI Band + Logos */}
      <TrustLogoStrip />

      {/* 3. Robotertypen */}
      <SolutionGrid />

      {/* 4. Branchen */}
      <IndustryGrid />

      {/* 5. Warum Sebotics */}
      <WhySebotics />

      {/* 6. Integrationsprozess (Dark Zone) */}
      <ProcessTimeline />

      {/* 7. ROI / Modelle */}
      <ROIBlock />

      {/* 8. FAQ / AEO */}
      <FAQAccordion
        title="Was Entscheider vor dem Kauf wissen wollen"
        faqs={globalFaqs}
        withSchema
      />

      {/* 9. Konfigurator CTA */}
      <ConfiguratorCTA />
    </>
  );
}
