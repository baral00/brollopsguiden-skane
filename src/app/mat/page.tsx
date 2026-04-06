"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChefHat, ExternalLink, MapPin, Star, Utensils } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  menuTypes,
  scanshSpecialties,
  cakeStyles,
  caterers,
} from "@/data/food";

const menuTypeImages: string[] = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75",
  "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=75",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=75",
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=75",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=75",
];

const cakeStyleImages: string[] = [
  "/mat-assets/cake-naked.jpg",
  "/mat-assets/cake-fondant.jpg",
  "/mat-assets/cake-floral.jpg",
  "/mat-assets/cake-modern.jpg",
  "/mat-assets/cake-cupcakes.jpg",
  "/mat-assets/cake-dessert-table.jpg",
];

const scanianSpecialtyImages: string[] = [
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Spiddekaga.jpg",
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/%C3%84ggakaka%2001.jpg",
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kroppkaka.jpg",
];

const catererImages: string[] = [
  "/mat-assets/caterer-1.jpg",
  "/mat-assets/caterer-2.jpg",
  "/mat-assets/caterer-3.jpg",
  "/mat-assets/caterer-4.jpg",
];

export default function MatPage() {
  return (
    <div className="space-y-20 pb-16 page-bg">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Elegant bröllopsmiddag"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-white/75" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Utensils className="mx-auto mb-6 h-16 w-16 text-[#C9A96E]" />
            <h1 className="mb-4 text-5xl font-serif text-[#2C2C2C] md:text-6xl">
              Mat <span className="font-script">&</span> Tårta
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Smaka på kärleken med underbar mat och söta desserter.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-serif text-[#2C2C2C]">Menytyper</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuTypes.map((menu, index) => (
            <motion.div
              key={menu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full border border-gray-100 transition-all duration-300 hover:border-[#C9A96E]/30">
                <div className="relative h-48 overflow-hidden card-image-overlay">
                  <Image
                    src={menuTypeImages[index] || menuTypeImages[0]}
                    alt={menu.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <Badge variant="secondary" className="absolute left-4 top-4 z-10">
                    {menu.pricePerPerson.min}–{menu.pricePerPerson.max} SEK/person
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg transition-colors group-hover:text-[#C9A96E]">
                    {menu.name}
                  </CardTitle>
                  <CardDescription className="mb-4">{menu.description}</CardDescription>

                  <div className="mb-3 space-y-2">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Fördelar:</p>
                    {menu.pros.slice(0, 2).map((pro) => (
                      <Badge key={pro} variant="outline" className="w-full justify-start text-xs">
                        ✓ {pro}
                      </Badge>
                    ))}
                  </div>

                  <div className="mb-4 space-y-2">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Nackdelar:</p>
                    {menu.cons.slice(0, 1).map((con) => (
                      <Badge key={con} variant="secondary" className="w-full justify-start text-xs">
                        ⚠ {con}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {menu.bestFor.map((use) => (
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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-none bg-gradient-to-br from-[#C9A96E]/5 via-white to-[#D4A5A5]/5 shadow-lg">
          <div className="space-y-8 p-8 md:p-12">
            <div className="border-b border-gray-100 pb-6 text-center">
              <ChefHat className="mx-auto mb-4 h-12 w-12 text-[#C9A96E]" />
              <h2 className="mb-4 text-3xl font-serif text-[#2C2C2C] md:text-4xl">Skånska specialiteter</h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Upptäck de traditionella rätterna som ger skånsk matkultur sin egen karaktär. Perfekt för er som vill lägga till en lokal ton i bröllopsmenyn.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {scanshSpecialties.map((specialty, index) => (
                <motion.div
                  key={specialty.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4">
                    <div className="relative h-48 overflow-hidden rounded-lg card-image-overlay">
                      <Image
                        src={scanianSpecialtyImages[index] || scanianSpecialtyImages[0]}
                        alt={specialty.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                      />
                    </div>

                    <h3 className="text-xl font-serif text-[#2C2C2C]">{specialty.name}</h3>
                    <p className="text-sm text-gray-600">{specialty.description}</p>

                    <div className="rounded-lg border border-[#D4A5A5]/20 bg-[#D4A5A5]/5 p-4">
                      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#D4A5A5]">Traditionen:</p>
                      <p className="text-sm italic text-gray-700">{specialty.traditionText}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-serif text-[#2C2C2C]">Bröllopstårtor 2026</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cakeStyles.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full border border-gray-100 transition-all duration-300 hover:border-[#D4A5A5]/30">
                <div className="relative h-56 overflow-hidden card-image-overlay">
                  <Image
                    src={cakeStyleImages[index] || cakeStyleImages[0]}
                    alt={cake.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                  <Badge variant="secondary" className="absolute left-4 top-4 z-10">
                    {cake.priceLevel}
                  </Badge>

                  <div className="absolute bottom-4 right-4 z-10 flex gap-0.5 rounded-full bg-white/90 px-2 py-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < cake.trendRating ? "fill-current text-[#D4A5A5]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg transition-colors group-hover:text-[#D4A5A5]">
                    {cake.name}
                  </CardTitle>
                  <CardDescription>{cake.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-serif text-[#2C2C2C]">Hitta cateringföretag</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {caterers.map((caterer, index) => (
            <motion.div
              key={caterer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full border border-gray-100 transition-all duration-300 hover:border-[#C9A96E]/30">
                <div className="relative h-40 overflow-hidden card-image-overlay">
                  <Image
                    src={catererImages[index] || catererImages[0]}
                    alt={caterer.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <Badge variant="secondary" className="absolute left-4 top-4">
                    {caterer.priceRange.min}–{caterer.priceRange.max} SEK
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg transition-colors group-hover:text-[#C9A96E]">
                    {caterer.name}
                  </CardTitle>

                  <div className="mb-3 mt-2 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(caterer.rating) ? "fill-current text-[#C9A96E]" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">({caterer.reviewCount})</span>
                  </div>

                  <CardDescription className="mb-4">{caterer.specialty}</CardDescription>

                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-[#C9A96E]" />
                    {caterer.city}
                  </div>
                  <p className="mb-4 text-xs text-gray-500">{caterer.address}</p>

                  <Button
                    href={caterer.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                    className="w-full gap-2"
                  >
                    Visa på Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
