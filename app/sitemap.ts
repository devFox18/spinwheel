import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/random-name-picker", "/random-team-generator", "/yes-no-wheel", "/raffle-picker"].map((path) => ({
    url: `https://spinwheel.app${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path ? 0.8 : 1,
  }));
}
