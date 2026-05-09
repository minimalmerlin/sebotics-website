import type { Metadata } from "next";
import { HomepageAlt } from "@/components/pages/HomepageAlt";
import { homepageContent } from "@/lib/homepage-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Start 2",
  description: homepageContent.metadata.description,
  path: "/start-2/",
  noIndex: true,
});

export default function StartTwoPage() {
  return <HomepageAlt />;
}
