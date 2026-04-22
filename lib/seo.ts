import type { Metadata } from "next";
import { brand } from "./config";

export function buildMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${brand.website}${path}`;
  return {
    title: `${title} | ${brand.name}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${brand.name}`,
      description,
      url,
      siteName: brand.name,
      locale: "de_DE",
      type: "website",
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
