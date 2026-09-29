import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return site.pages.map((page) => ({
    url: page.path === "/" ? site.origin : new URL(page.path, site.origin).toString(),
  }));
}
