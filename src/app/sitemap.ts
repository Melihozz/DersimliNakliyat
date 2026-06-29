import type { MetadataRoute } from "next";

const routes = ["", "/hakkimizda", "/hizmetler", "/iletisim"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://dersimlinakliyat.com${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
