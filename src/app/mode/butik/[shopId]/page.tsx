import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink, MapPin, Phone, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { getShopById } from "@/data/catalog";
import { shopsInSkane } from "@/data/fashion";
import { createMetadata } from "@/lib/seo";

type ShopPageProps = {
  params: Promise<{ shopId: string }>;
};

export function generateStaticParams() {
  return shopsInSkane.map((shop) => ({
    shopId: shop.id,
  }));
}

export async function generateMetadata({ params }: ShopPageProps): Promise<Metadata> {
  const { shopId } = await params;
  const shop = getShopById(shopId);

  if (!shop) {
    return {
      title: "Butiken hittades inte",
    };
  }

  return createMetadata({
    title: `${shop.name} i ${shop.city}`,
    description: `${shop.name} i ${shop.city}. ${shop.specialty}. Se adress, telefon, webbplats och Google Maps för butiken.`,
    path: `/mode/butik/${shop.id}`,
    keywords: [
      shop.name,
      `brudbutik ${shop.city}`,
      `bröllopsbutik ${shop.city}`,
      shop.specialty,
    ],
  });
}

export default async function ShopDetailPage({ params }: ShopPageProps) {
  const { shopId } = await params;
  const shop = getShopById(shopId);

  if (!shop) {
    notFound();
  }

  return (
    <div className="page-bg pb-16">
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-none bg-gradient-to-br from-[#D4A5A5]/10 via-white to-[#C9A96E]/10 shadow-2xl">
          <CardHeader className="space-y-8 p-8 md:p-12">
            <div className="space-y-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A5A5]/15">
                <ShoppingBag className="h-7 w-7 text-[#D4A5A5]" />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <CardTitle className="text-4xl">{shop.name}</CardTitle>
                <div className="inline-flex items-center gap-1 rounded-full bg-[#C9A96E]/12 px-3 py-1 text-sm text-[#8E6F57]">
                  <Star className="h-4 w-4 fill-current" />
                  {shop.rating.toFixed(1)}
                  <span className="text-[#8E6F57]/80">
                    ({shop.reviewCountLabel ?? shop.reviewCount ?? "Google omdömen"})
                  </span>
                </div>
              </div>
              <CardDescription className="line-clamp-none text-base">{shop.specialty}</CardDescription>
            </div>

            <div className="grid gap-4 rounded-3xl border border-white/70 bg-white/80 p-6 text-sm text-gray-700">
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#D4A5A5]" />
                {shop.address}
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#D4A5A5]" />
                {shop.phone}
              </p>
            </div>

            <div className="grid gap-4 text-sm text-gray-700">
              <p>Butiken är ett bra val för par som vill prova på plats och få tydlig vägledning kring passform, stil och vad som faktiskt fungerar för just deras bröllop.</p>
              <p>Utgå från butikens specialitet när ni bokar tid, så blir mötet mer fokuserat och ni får snabbare svar på vilka märken, silhuetter eller accessoarer som passar ert upplägg.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href="/mode" variant="outline">
                Tillbaka till mode
              </Button>
              <Button href={`tel:${shop.phone.replace(/\s+/g, "")}`}>
                Ring butiken
              </Button>
              <Button href={shop.mapsUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="gap-2">
                Google Maps
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button href={shop.website} target="_blank" rel="noopener noreferrer" variant="ghost" className="gap-2">
                Besök hemsidan
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
        </Card>
      </section>
    </div>
  );
}


