import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://brollopsguiden-skane.vercel.app";
const LAST_MODIFIED = "2026-04-06";

const urls = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/musik", changeFrequency: "weekly", priority: 0.95 },
  { path: "/lokaler", changeFrequency: "weekly", priority: 0.9 },
  { path: "/planering", changeFrequency: "weekly", priority: 0.9 },
  { path: "/blommor", changeFrequency: "weekly", priority: 0.85 },
  { path: "/mat", changeFrequency: "weekly", priority: 0.85 },
  { path: "/mode", changeFrequency: "weekly", priority: 0.85 },
  { path: "/lokaler/venue-1", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lokaler/venue-2", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lokaler/venue-3", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lokaler/venue-4", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lokaler/venue-5", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lokaler/venue-6", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lokaler/venue-7", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lokaler/venue-8", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lokaler/venue-9", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lokaler/venue-10", changeFrequency: "monthly", priority: 0.8 },
  { path: "/mode/bk-1", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/bk-2", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/bk-3", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/bk-4", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/bk-5", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/bk-6", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/k-1", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/k-2", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/k-3", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/k-4", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/bt-1", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/bt-2", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/bt-3", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/bt-4", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/a-1", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/a-2", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/a-3", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/a-4", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mode/butik/shop-1", changeFrequency: "monthly", priority: 0.7 },
  { path: "/mode/butik/shop-2", changeFrequency: "monthly", priority: 0.7 },
  { path: "/mode/butik/shop-3", changeFrequency: "monthly", priority: 0.7 },
  { path: "/mode/butik/shop-4", changeFrequency: "monthly", priority: 0.7 },
  { path: "/mode/butik/shop-5", changeFrequency: "monthly", priority: 0.7 },
  { path: "/mode/butik/shop-6", changeFrequency: "monthly", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return urls.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  }));
}
