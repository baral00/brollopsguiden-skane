import type { Metadata } from "next";
import { createMetadata, getMusicServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Bröllopsmusik i Skåne och levande harpa",
  description:
    "Guide till bröllopsmusik i Skåne med fokus på vigselmusik, mingelmusik, harpist och levande harpa. Jämför upplägg och gå vidare till Harpa Skåne.",
  path: "/musik",
  image: "/IMG_2080website hero.jpg",
  keywords: [
    "bröllopsmusik Skåne",
    "vigselmusik Skåne",
    "harpist Skåne",
    "harpist Malmö",
    "harpist Lund",
    "levande musik bröllop Skåne",
    "Harpa Skåne",
    "harpaskane.se",
    "harpaskane",
    "wedding music Skåne",
    "wedding harp Skåne",
  ],
});

export default function MusicLayout({ children }: { children: React.ReactNode }) {
  const musicServiceJsonLd = getMusicServiceJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(musicServiceJsonLd) }}
      />
      {children}
    </>
  );
}
