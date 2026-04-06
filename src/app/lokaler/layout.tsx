import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Bröllopslokaler i Skåne",
  description:
    "Hitta bröllopslokaler i Skåne med slott, herrgårdar, gårdar, hotell och festvåningar för vigsel, middag och bröllopshelg.",
  path: "/lokaler",
  keywords: [
    "bröllopslokaler Skåne",
    "bröllopslokal Malmö",
    "bröllopslokal Lund",
    "slott bröllop Skåne",
    "herrgårdsbröllop Skåne",
  ],
});

export default function VenuesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
