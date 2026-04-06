"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Flower, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  flowers,
  decorTrends,
  florists,
  seasonGuide,
} from "@/data/flowers";

const months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];

const flowerImages: Record<string, string> = {
  pioner: "https://unsplash.com/photos/j900NNQHums/download?force=true&w=1200",
  rosor: "https://unsplash.com/photos/qBMgdt1retg/download?force=true&w=1200",
  eucalyptus: "https://unsplash.com/photos/CSJY_jdrR-k/download?force=true&w=1200",
  lavendel: "https://unsplash.com/photos/WgoPX2uRSnE/download?force=true&w=1200",
  dahlior: "https://unsplash.com/photos/NmCUPBiwrwA/download?force=true&w=1200",
  ranunkel: "https://unsplash.com/photos/ll2F_E9pn_A/download?force=true&w=1200",
  gypsophila: "https://unsplash.com/photos/Yp6gSx1D87A/download?force=true&w=1200",
  vildblommor: "https://unsplash.com/photos/3Va5u-ZF1xc/download?force=true&w=1200",
};

const decorTrendImages: string[] = [
  "https://unsplash.com/photos/OsY3kg9uNIs/download?force=true&w=1600",
  "https://unsplash.com/photos/mxvPT74SFLk/download?force=true&w=1600",
  "https://unsplash.com/photos/VUgodwDcTrc/download?force=true&w=1600",
  "https://unsplash.com/photos/3Va5u-ZF1xc/download?force=true&w=1600",
  "https://unsplash.com/photos/1CnkDiutHhs/download?force=true&w=1600",
  "https://unsplash.com/photos/ROOE-zHpZYU/download?force=true&w=1600",
];

const floristImages: Record<string, string> = {
  "fl-1": "https://unsplash.com/photos/XftaE9DAJqE/download?force=true&w=1600",
  "fl-2": "https://unsplash.com/photos/8JJaE3dJCL0/download?force=true&w=1600",
  "fl-3": "https://unsplash.com/photos/kf7pBpVYblo/download?force=true&w=1600",
  "fl-4": "https://unsplash.com/photos/l15u-XPZcDM/download?force=true&w=1600",
};

const flowerColors: Record<string, string> = {
  pioner: "bg-[#D4A5A5]",
  rosor: "bg-rose-400",
  eucalyptus: "bg-[#9CAF88]",
  lavendel: "bg-purple-400",
  dahlior: "bg-orange-400",
  ranunkel: "bg-pink-300",
  gypsophila: "bg-gray-200",
  vildblommor: "bg-yellow-300",
};

export default function BlommorPage() {
  const [selectedMonth, setSelectedMonth] = useState<string>("jun");

  return (
    <div className="space-y-20 pb-16 page-bg">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1920&q=80"
            alt="Blommor och dekorationer"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Flower className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">
              Blommor <span className="font-script">&</span> Dekorationer
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Skapa er drömstämning med vackra blommor och elegant dekoration
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#2C2C2C] mb-4">Populära blomval</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upptäck de mest älskade blommorna för skånska bröllop
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flowers.map((flower, index) => (
            <motion.div
              key={flower.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:border-[#9CAF88]/30 transition-all duration-300 border border-gray-100 h-full">
                <div className="h-48 relative card-image-overlay">
                  <Image
                    src={flowerImages[flower.id]}
                    alt={flower.swedishName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized
                  />
                  <Badge variant="secondary" className="absolute top-4 left-4 bg-black/60 text-white border-none">
                    {"€".repeat(flower.priceLevel)}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-[#9CAF88] transition-colors">
                    {flower.swedishName}
                  </CardTitle>

                  <div className="flex gap-2 mt-2 mb-3">
                    {flower.seasons.map((season) => (
                      <Badge key={season} variant="outline" className="text-xs capitalize">
                        {season}
                      </Badge>
                    ))}
                  </div>

                  <CardDescription className="line-clamp-2">
                    {flower.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {flower.bestFor.slice(0, 2).map((use) => (
                      <Badge key={use} variant="ghost" className="text-xs">
                        {use}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#2C2C2C] mb-4">Dekorationstrender 2026</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Inspiration för att skapa en unik och minnesvärd stämning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {decorTrends.map((trend, index) => (
            <motion.div
              key={trend.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:border-[#D4A5A5]/30 transition-all duration-300 border border-gray-100">
                <div className="h-56 relative card-image-overlay">
                  <Image
                    src={decorTrendImages[index] || decorTrendImages[0]}
                    alt={trend.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    <Badge variant={trend.budgetFriendly ? "default" : "secondary"} className="bg-black/60 text-white border-none">
                      {trend.budgetFriendly ? "Budgetvänlig" : "Premium"}
                    </Badge>
                    <Badge variant="outline" className="bg-black/60 text-white border-none">
                      {trend.difficulty}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-[#D4A5A5] transition-colors">
                    {trend.title}
                  </CardTitle>
                  <CardDescription>{trend.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-br from-[#9CAF88]/5 via-white to-[#D4A5A5]/5 border-none shadow-lg">
          <div className="p-8 space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-serif text-[#2C2C2C] mb-4">Säsongsguide för blommor</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Välj säsongens blommor för bästa kvalitet, doft och pris. Klicka på en månad för att se vilka blommor som är tillgängliga.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {months.map((month) => {
                const monthKey = month.toLowerCase().slice(0, 3);
                return (
                  <button
                    key={month}
                    onClick={() => setSelectedMonth(monthKey)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedMonth === monthKey
                        ? "bg-[#9CAF88] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {month}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={selectedMonth}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-4 py-8"
            >
              {seasonGuide[selectedMonth as keyof typeof seasonGuide].map((flowerId) => {
                const flower = flowers.find((f) => f.id === flowerId);
                if (!flower) return null;
                return (
                  <motion.div
                    key={flower.id}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-white to-gray-50 border border-[#9CAF88]/20 shadow-sm">
                      <div className={`w-6 h-6 rounded-full ${flowerColors[flower.id]}`} />
                      <span className="font-medium text-[#2C2C2C]">{flower.swedishName}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 pt-4 border-t border-gray-100">
              {flowers.map((flower) => (
                <div key={flower.id} className="flex items-center gap-2 text-sm">
                  <div className={`w-3 h-3 rounded-full ${flowerColors[flower.id]}`} />
                  <span className="text-gray-600">{flower.swedishName}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#2C2C2C] mb-4">Hitta en florist</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fyra riktiga floristbutiker i Skåne med bröllopsfokus och Google Maps-länkar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {florists.map((florist, index) => (
            <motion.div
              key={florist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:border-[#9CAF88]/30 transition-all duration-300 border border-gray-100 h-full">
                <div className="h-40 relative card-image-overlay">
                  <Image
                    src={floristImages[florist.id]}
                    alt={florist.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-[#9CAF88] transition-colors">
                    {florist.name}
                  </CardTitle>

                  <CardDescription className="mb-4">{florist.specialty}</CardDescription>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#9CAF88]" />
                      {florist.city}
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 text-[#9CAF88]" />
                      <span>{florist.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#9CAF88]" />
                      {florist.phone}
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <Button
                      href={florist.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      size="sm"
                      className="w-full gap-2"
                    >
                      Visa på Google Maps
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      href={florist.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="ghost"
                      size="sm"
                      className="w-full gap-2"
                    >
                      Besök hemsidan
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
