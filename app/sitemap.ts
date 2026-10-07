import type { MetadataRoute } from "next";

const routes = ["", "/news", "/matches", "/tournaments", "/teams", "/teams/cs2", "/teams/valorant", "/media", "/shop", "/about", "/contacts"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route || "/",
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
