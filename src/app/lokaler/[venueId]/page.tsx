import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Mail, MapPin, Phone, Users } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { getVenueById, getVenueImageById, venuePriceRanges } from "@/data/catalog";
import { venues } from "@/data/venues";

type VenuePageProps = {
  params: Promise<{ venueId: string }>;
};

export function generateStaticParams() {
  return venues.map((venue) => ({
    venueId: venue.id,
  }));
}

export async function generateMetadata({ params }: VenuePageProps): Promise<Metadata> {
  const { venueId } = await params;
  const venue = getVenueById(venueId);

  if (!venue) {
    return {
      title: "Lokalen hittades inte",
    };
  }

  return {
    title: `${venue.name} | Bröllopsguiden Skåne`,
    description: venue.description,
  };
}

export default async function VenueDetailPage({ params }: VenuePageProps) {
  const { venueId } = await params;
  const venue = getVenueById(venueId);

  if (!venue) {
    notFound();
  }

  const image = getVenueImageById(venueId);
  const priceRange = venuePriceRanges[venue.priceRange - 1];

  return (
    <div className="page-bg pb-16">
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={venue.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 text-white sm:px-6 lg:px-8">
          <Badge className="w-fit bg-white/15 text-white hover:bg-white/20">{venue.type}</Badge>
          <h1 className="max-w-4xl text-4xl font-serif sm:text-5xl lg:text-6xl">{venue.name}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/85 sm:text-base">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {venue.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4" />
              Upp till {venue.capacity} gäster
            </span>
            <span className="inline-flex items-center gap-2">
              Prisnivå {priceRange.symbol}
            </span>
          </div>
          <p className="max-w-3xl text-lg text-white/85">{venue.description}</p>
          <div className="flex flex-wrap gap-3">
            <Button href="/lokaler" variant="outline" className="border-white text-white hover:bg-white/10">
              Tillbaka till lokaler
            </Button>
            {venue.contact.email ? (
              <Button href={`mailto:${venue.contact.email}`} variant="primary">
                Kontakta lokalen
              </Button>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <Card className="border-none bg-white/85 shadow-xl">
          <CardHeader className="space-y-6">
            <div>
              <CardTitle className="text-3xl">Om lokalen</CardTitle>
              <CardDescription className="mt-3 line-clamp-none text-base">
                {venue.description}
              </CardDescription>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-serif text-[#2C2C2C]">Det här ingår</h2>
              <div className="flex flex-wrap gap-2">
                {venue.amenities.map((amenity) => (
                  <Badge key={amenity} variant="outline" className="text-sm">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="space-y-6">
          <Card className="border-none bg-gradient-to-br from-[#D4A5A5]/10 via-white to-[#C9A96E]/10 shadow-lg">
            <CardHeader className="space-y-4">
              <CardTitle>Snabbfakta</CardTitle>
              <div className="space-y-3 text-sm text-gray-700">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#D4A5A5]" />
                  {venue.location}
                </p>
                <p className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#D4A5A5]" />
                  Kapacitet för {venue.capacity} gäster
                </p>
                {venue.contact.phone ? (
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#D4A5A5]" />
                    {venue.contact.phone}
                  </p>
                ) : null}
                {venue.contact.email ? (
                  <p className="flex items-center gap-2 break-all">
                    <Mail className="h-4 w-4 text-[#D4A5A5]" />
                    {venue.contact.email}
                  </p>
                ) : null}
              </div>
            </CardHeader>
          </Card>

          <Card className="border-none bg-white/85 shadow-lg">
            <CardHeader className="space-y-4">
              <CardTitle>Passar särskilt bra för</CardTitle>
              <div className="grid gap-3 text-sm text-gray-700">
                <p>Brudpar som vill kombinera en tydlig miljö med enkel logistik för gästerna.</p>
                <p>Planering med fokus på upplevelse, foto och en lokal som känns genomarbetad hela dagen.</p>
                <p>Fester där ni vill samla ceremoni, middag och mingel på ett och samma ställe.</p>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
}
