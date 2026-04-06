import type { MetadataRoute } from "next";
import { allFashionTrends } from "@/data/catalog";
import { shopsInSkane } from "@/data/fashion";
import { venues } from "@/data/venues";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/musik"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/lokaler"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/planering"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/blommor"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/mat"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/mode"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  const venueRoutes = venues.map((venue) => ({
    url: absoluteUrl(`/lokaler/${venue.id}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const trendRoutes = allFashionTrends.map((trend) => ({
    url: absoluteUrl(`/mode/${trend.id}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const shopRoutes = shopsInSkane.map((shop) => ({
    url: absoluteUrl(`/mode/butik/${shop.id}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...venueRoutes, ...trendRoutes, ...shopRoutes];
}
