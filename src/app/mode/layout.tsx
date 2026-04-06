import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Bröllopsmode 2026 i Skåne",
  description:
    "Se trender för brudklänningar, kostymer, brudtärnor och accessoarer samt hitta brud- och festbutiker i Skåne.",
  path: "/mode",
  keywords: [
    "bröllopsmode Skåne",
    "brudklänning Skåne",
    "brudbutik Malmö",
    "brudbutik Helsingborg",
    "kostym bröllop Skåne",
  ],
});

export default function FashionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
