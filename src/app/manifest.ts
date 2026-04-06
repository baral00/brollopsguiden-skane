import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Bröllopsguiden",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f1e7",
    theme_color: "#d4a5a5",
    lang: "sv-SE",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
