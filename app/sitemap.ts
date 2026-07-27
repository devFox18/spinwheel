import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolRoutes = ["", "/random-name-picker", "/random-team-generator", "/yes-no-wheel", "/raffle-picker"];
  const legalRoutes = ["/privacy", "/terms", "/disclaimer", "/cookie-policy"];
  return [
    ...toolRoutes.map((path) => ({
      url: absoluteUrl(path || "/"),
      lastModified: new Date("2026-07-27"),
      changeFrequency: "monthly" as const,
      priority: path ? 0.9 : 1,
    })),
    ...legalRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: new Date("2026-07-27"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}

