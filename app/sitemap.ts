import type { MetadataRoute } from "next";
import { posts } from "@/lib/content";

const BASE = "https://clinica-alento.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginas: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/sobre`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/atendimentos`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/contato`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const artigos: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.data,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...paginas, ...artigos];
}
