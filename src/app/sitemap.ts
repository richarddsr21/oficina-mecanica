import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.seo.siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${site.seo.siteUrl}/privacidade`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
