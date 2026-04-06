import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  allFashionTrends,
  fallbackTrendImage,
  getFashionCategoryLabel,
  getFashionTrendById,
  trendImages,
} from "@/data/catalog";

type FashionTrendPageProps = {
  params: Promise<{ slug: string }>;
};

function getTrendHighlights(category: string) {
  switch (category) {
    case "Brudklänningar":
      return ["Silhuett med tydlig riktning", "Detaljer som fotograferas väl", "Passar både ceremoni och fest"];
    case "Kostymer & Frackar":
      return ["Stark men lättburen profil", "Enkelt att anpassa efter säsong", "Ger tydlig kontrast mot klassisk svart"];
    case "Brudtärnor":
      return ["Flexibelt för olika kroppstyper", "Skapar en enhetlig färgpalett", "Fungerar bra i gruppbilder"];
    case "Accessoarer":
      return ["Lyfter helheten utan att ta över", "Lätt att kombinera med flera uttryck", "Bra val för personliga detaljer"];
    default:
      return ["Tidlös känsla", "Visuell tydlighet", "Enkel att bygga vidare på"];
  }
}

export function generateStaticParams() {
  return allFashionTrends.map((trend) => ({
    slug: trend.id,
  }));
}

export async function generateMetadata({ params }: FashionTrendPageProps): Promise<Metadata> {
  const { slug } = await params;
  const trend = getFashionTrendById(slug);

  if (!trend) {
    return {
      title: "Trenden hittades inte",
    };
  }

  return {
    title: `${trend.title} | Bröllopsmode 2026`,
    description: trend.description,
  };
}

export default async function FashionTrendPage({ params }: FashionTrendPageProps) {
  const { slug } = await params;
  const trend = getFashionTrendById(slug);

  if (!trend) {
    notFound();
  }

  const category = getFashionCategoryLabel(slug);
  const highlights = getTrendHighlights(category);

  return (
    <div className="page-bg pb-16">
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <Image
            src={trendImages[trend.id] || fallbackTrendImage}
            alt={trend.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-6 px-4 text-white sm:px-6 lg:px-8">
          <Badge className="w-fit bg-white/15 text-white hover:bg-white/20">{category}</Badge>
          <h1 className="max-w-4xl text-4xl font-serif sm:text-5xl lg:text-6xl">{trend.title}</h1>
          <p className="max-w-3xl text-lg text-white/85">{trend.description}</p>
          <div className="flex flex-wrap gap-3">
            <Button href="/mode" variant="outline" className="border-white text-white hover:bg-white/10">
              Tillbaka till mode
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <Card className="border-none bg-white/85 shadow-xl">
          <CardHeader className="space-y-6">
            <div>
              <CardTitle className="text-3xl">Varför trenden fungerar</CardTitle>
              <CardDescription className="mt-3 line-clamp-none text-base">
                {trend.description}
              </CardDescription>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-serif text-[#2C2C2C]">Nyckelpunkter</h2>
              <div className="grid gap-3">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-[#D4A5A5]/20 bg-[#D4A5A5]/5 px-4 py-3 text-sm text-gray-700"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="space-y-6">
          <Card className="border-none bg-gradient-to-br from-[#D4A5A5]/10 via-white to-[#C9A96E]/10 shadow-lg">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#D4A5A5]" />
                <CardTitle>Så kan ni använda den</CardTitle>
              </div>
              <div className="grid gap-3 text-sm text-gray-700">
                <p>Bygg resten av uttrycket runt ett fåtal starka detaljer i stället för att lägga till allt samtidigt.</p>
                <p>Testa trenden mot lokal, ljus och årstid så att helheten känns medveten även i foto och video.</p>
                <p>Behåll en personlig detalj i styling eller accessoarer för att undvika att uttrycket känns generiskt.</p>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-none bg-white/85 shadow-lg">
            <CardHeader className="space-y-4">
              <CardTitle>Snabböversikt</CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Trend 2026</Badge>
                <Badge variant="outline">{category}</Badge>
                <Badge variant="secondary">Skåne-inspiration</Badge>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
}
