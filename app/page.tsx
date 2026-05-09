import type { Metadata } from "next";
import { HomepageMain } from "@/components/pages/HomepageMain";
import { homepageContent } from "@/lib/homepage-content";
import { brand } from "@/lib/config";

export const metadata: Metadata = {
  title: { absolute: homepageContent.metadata.title },
  description: homepageContent.metadata.description,
  alternates: { canonical: `${brand.website}/` },
  openGraph: {
    title: homepageContent.metadata.title,
    description: homepageContent.metadata.description,
    url: `${brand.website}/`,
    siteName: brand.name,
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homepageContent.metadata.title,
    description: homepageContent.metadata.description,
  },
  robots: { index: true, follow: true },
};

export default function HomePage() {
  return <HomepageMain />;
}
