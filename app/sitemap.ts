import type { MetadataRoute } from "next";
import { brand, industries, solutions } from "@/lib/config";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/konfigurator/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/kontakt/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/loesungen/", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/branchen/", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/roi/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/raas/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/raas-vs-kauf/", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/pilotprojekt/", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/ueber-uns/", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/robotik-mieten/", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/wartung-support/", priority: 0.5, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${brand.website}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const solutionEntries = solutions.map((solution) => ({
    url: `${brand.website}/loesungen/${solution.slug}/`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryEntries = industries.map((industry) => ({
    url: `${brand.website}/branchen/${industry.slug}/`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...solutionEntries, ...industryEntries];
}
