"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Shirt, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  accessoriesTrends,
  bridalDressTrends,
  bridesmaidTrends,
  groomSuitTrends,
  shopsInSkane,
} from "@/data/fashion";
import { fallbackTrendImage, trendImages } from "@/data/catalog";

const tabs = [
  { id: "brudklänningar", label: "Brudklänningar", icon: Shirt },
  { id: "kostymer", label: "Kostymer & Frackar", icon: ShoppingBag },
  { id: "brudtärnor", label: "Brudtärnor", icon: Shirt },
  { id: "accessoarer", label: "Accessoarer", icon: ShoppingBag },
] as const;

const trendsByTab = {
  brudklänningar: bridalDressTrends,
  kostymer: groomSuitTrends,
  brudtärnor: bridesmaidTrends,
  accessoarer: accessoriesTrends,
};

export default function ModePage() {
  const [activeTab, setActiveTab] = useState<keyof typeof trendsByTab>("brudklänningar");
  const currentTrends = trendsByTab[activeTab];

  return (
    <div className="space-y-20 pb-16 page-bg">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src="https://unsplash.com/photos/Ye_4r7EbsJw/download?force=true&w=2000"
            alt="Bröllopsmode"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-5xl font-serif text-white md:text-6xl"
          >
            Bröllopsmode 2026
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-xl text-white/85"
          >
            Trender och inspiration för brudklänningar, kostymer, tärnlooks och accessoarer.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-4xl font-serif text-[#2C2C2C]">Utforska årets uttryck</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Varje bild är nu kopplad till själva trenden, så att inspirationen känns relevant för innehållet.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#D4A5A5] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              type="button"
            >
              <tab.icon className="mr-2 inline h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {currentTrends.map((trend, index) => (
            <motion.div
              key={trend.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="group border border-gray-100 transition-all duration-300 hover:border-[#D4A5A5]/30">
                <div className="relative h-64 card-image-overlay">
                  <Image
                    src={trendImages[trend.id] || fallbackTrendImage}
                    alt={trend.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                  <Badge variant="secondary" className="absolute left-4 top-4 bg-white/90 text-[#C9A96E]">
                    Trend 2026
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="line-clamp-2 text-lg transition-colors group-hover:text-[#D4A5A5]">
                    {trend.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{trend.description}</CardDescription>
                </CardHeader>

                <div className="px-6 pb-6">
                  <Button href={`/mode/${trend.id}`} variant="ghost" size="sm" className="w-full justify-center">
                    Läs mer
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-4xl font-serif text-[#2C2C2C]">Butiker i Skåne</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Sex riktiga butiker i Skåne med starka Google-omdömen för brud, fest och herrmode.
          </p>
        </div>

        <Card className="border-none bg-gradient-to-br from-[#D4A5A5]/5 via-white to-[#9CAF88]/5 shadow-lg">
          <div className="space-y-6 p-6 lg:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {shopsInSkane.map((shop, index) => (
                <motion.div
                  key={shop.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group"
                >
                  <Link href={`/mode/butik/${shop.id}`}>
                    <div className="cursor-pointer rounded-2xl border border-gray-100 bg-white/80 p-4 transition-all hover:border-[#D4A5A5]/30 hover:bg-[#D4A5A5]/8">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-medium text-[#2C2C2C] transition-colors group-hover:text-[#D4A5A5]">
                          {shop.name}
                        </h3>
                        <div className="inline-flex items-center gap-1 rounded-full bg-[#C9A96E]/12 px-2.5 py-1 text-xs text-[#8E6F57]">
                          <Star className="h-3.5 w-3.5 fill-current" />
                          {shop.rating.toFixed(1)}
                        </div>
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="h-3 w-3" />
                        {shop.city}
                      </div>
                      <p className="mt-2 text-xs text-gray-500">{shop.specialty}</p>
                      <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                        <Phone className="h-3 w-3" />
                        {shop.phone}
                      </div>
                      <p className="mt-2 text-xs text-[#8E6F57]">
                        Google omdömen: {shop.reviewCountLabel ?? shop.reviewCount ?? "flera recensioner"}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
