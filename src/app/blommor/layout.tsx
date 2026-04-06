import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Bröllopsblommor i Skåne",
  description:
    "Inspireras av säsongens bröllopsblommor, dekorationstrender 2026 och florister i Skåne för buketter, bordsdekorationer och vigselmiljöer.",
  path: "/blommor",
  keywords: [
    "bröllopsblommor Skåne",
    "florist Skåne",
    "brudbukett Skåne",
    "bröllopsflorist Malmö",
    "bröllopsblommor Lund",
  ],
});

export default function FlowersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
