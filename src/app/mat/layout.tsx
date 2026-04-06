import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Bröllopsmat och bröllopstårta i Skåne",
  description:
    "Upptäck menyidéer, skånska specialiteter, bröllopstårtor 2026 och cateringföretag i Skåne för bröllopsmiddag och dessertbord.",
  path: "/mat",
  keywords: [
    "bröllopscatering Skåne",
    "bröllopsmat Skåne",
    "bröllopstårta Skåne",
    "catering Malmö bröllop",
    "catering Lund bröllop",
  ],
});

export default function FoodLayout({ children }: { children: React.ReactNode }) {
  return children;
}
