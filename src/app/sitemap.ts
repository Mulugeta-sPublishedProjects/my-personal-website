import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects-data";

// Async function to fetch blog posts for sitemap
async function getBlogPosts() {
  try {
    const { MediumAPiURl } = await import("@/shared/utils/medium-api-url");
    const response = await fetch(MediumAPiURl, { next: { revalidate: 3600 } }); // Revalidate every hour

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    if (data.status !== "ok" || !data.items) {
      return [];
    }

    return data.items.map((post: any) => ({
      id: post.guid.split("/").pop() || post.link.split("/").pop() || post.guid,
      lastModified: new Date(post.pubDate),
    }));
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://mulugeta-portfolio.vercel.app";

  // Base pages
  const basePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#expertise`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return [...basePages];
}
