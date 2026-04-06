"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ChevronRight, X, SlidersHorizontal } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Slider } from "@/components/ui/Slider";
import { venues, type Venue } from "@/data/venues";
import { getVenueImageById } from "@/data/catalog";

const venueTypes = [
  "Slott & Herrgård",
  "Strandlokal",
  "Lantgård & Lada",
  "Restaurang",
  "Trädgård/Utomhus",
  "Hotell",
];

const locations = [
  "Malmö",
  "Lund",
  "Flyinge",
  "Höör",
  "Sjöbo",
  "Glumslöv",
  "Kristianstad",
  "Österlen",
];

const priceRanges = [
  { value: 1, label: "Låg", symbol: "€" },
  { value: 2, label: "Medel", symbol: "€€" },
  { value: 3, label: "Hög", symbol: "€€€" },
];

export default function VenuesPage() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [minCapacity, setMinCapacity] = useState(20);
  const [maxCapacity, setMaxCapacity] = useState(300);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<1 | 2 | 3 | null>(null);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const filteredVenues = venues.filter((venue: Venue) => {
    if (selectedTypes.length > 0 && !selectedTypes.includes(venue.type)) return false;
    if (venue.capacity < minCapacity || venue.capacity > maxCapacity) return false;
    if (
      selectedLocations.length > 0 &&
      !selectedLocations.some((loc) => venue.location.includes(loc))
    )
      return false;
    if (selectedPriceRange !== null && venue.priceRange !== selectedPriceRange) return false;
    return true;
  });

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const toggleLocation = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  return (
    <div className="pb-16 page-bg">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80"
          alt="Wedding venue"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            Bröllopslokaler i Skåne
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            Hitta den perfekta platsen för ert drömbröllop - från romantiska slott till strandgårdar
            med havsutsikt
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className={`lg:w-72 ${showFiltersMobile ? "fixed inset-0 z-50 bg-white p-6 overflow-y-auto" : "hidden lg:block"}`}>
            {showFiltersMobile && (
              <button
                onClick={() => setShowFiltersMobile(false)}
                className="lg:hidden absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            <div className="space-y-8">
              {/* Type Filter */}
              <div>
                <h3 className="font-serif text-lg text-[#2C2C2C] mb-4">Typ av lokal</h3>
                <div className="space-y-2">
                  {venueTypes.map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                        className="w-4 h-4 rounded border-gray-300 text-[#D4A5A5] focus:ring-[#D4A5A5]/50"
                      />
                      <span className="text-gray-700 group-hover:text-[#D4A5A5] transition-colors">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Capacity Range */}
              <div>
                <h3 className="font-serif text-lg text-[#2C2C2C] mb-4">
                  Kapacitet: {minCapacity} - {maxCapacity} gäster
                </h3>
                <Slider
                  min={20}
                  max={300}
                  step={10}
                  value={[minCapacity, maxCapacity]}
                  onValueChange={(values) => {
                    setMinCapacity(values[0]);
                    setMaxCapacity(values[1]);
                  }}
                />
              </div>

              {/* Location Filter */}
              <div>
                <h3 className="font-serif text-lg text-[#2C2C2C] mb-4">Område</h3>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <label key={location} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedLocations.includes(location)}
                        onChange={() => toggleLocation(location)}
                        className="w-4 h-4 rounded border-gray-300 text-[#D4A5A5] focus:ring-[#D4A5A5]/50"
                      />
                      <span className="text-gray-700 group-hover:text-[#D4A5A5] transition-colors">
                        {location}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-serif text-lg text-[#2C2C2C] mb-4">Prisintervall</h3>
                <div className="space-y-2">
                  <label
                    className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg transition-all ${
                      selectedPriceRange === null
                        ? "bg-[#D4A5A5]/10 border border-[#D4A5A5]"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="priceRange"
                      checked={selectedPriceRange === null}
                      onChange={() => setSelectedPriceRange(null)}
                      className="w-4 h-4 border-gray-300 text-[#D4A5A5] focus:ring-[#D4A5A5]/50"
                    />
                    <span className="text-gray-700">Alla prisnivåer</span>
                  </label>
                  {priceRanges.map((range) => (
                    <label
                      key={range.value}
                      className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg transition-all ${
                        selectedPriceRange === range.value
                          ? "bg-[#D4A5A5]/10 border border-[#D4A5A5]"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="priceRange"
                        checked={selectedPriceRange === range.value}
                        onChange={() => setSelectedPriceRange(range.value as 1 | 2 | 3)}
                        className="w-4 h-4 border-gray-300 text-[#D4A5A5] focus:ring-[#D4A5A5]/50"
                      />
                      <span className="text-gray-700">{range.label} ({range.symbol})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedTypes([]);
                  setMinCapacity(20);
                  setMaxCapacity(300);
                  setSelectedLocations([]);
                  setSelectedPriceRange(null);
                }}
                className="w-full"
              >
                Återställ filter
              </Button>
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <Button
              variant="outline"
              onClick={() => setShowFiltersMobile(true)}
              className="w-full"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filter ({selectedTypes.length + selectedLocations.length + (selectedPriceRange !== null ? 1 : 0) + (minCapacity !== 20 || maxCapacity !== 300 ? 1 : 0)})
            </Button>
          </div>

          {/* Results Count */}
          <div className="flex-1">
            <p className="text-gray-600 mb-6">
              {filteredVenues.length} lokal{filteredVenues.length > 1 ? "er" : ""} hittades
            </p>

            {/* Venues Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredVenues.map((venue, index) => (
                <motion.div
                  key={venue.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:border-[#D4A5A5]/30 transition-all duration-300 border border-gray-100">
                    {/* Venue Image */}
                    <div className="relative h-56 card-image-overlay">
                      <Image
                        src={getVenueImageById(venue.id)}
                        alt={venue.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized
                      />
                      <Badge className="absolute top-4 left-4 z-10">
                        {venue.type}
                      </Badge>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-serif text-[#2C2C2C] group-hover:text-[#D4A5A5] transition-colors">
                          {venue.name}
                        </h3>
                        <span className="text-sm text-gray-500">{priceRanges[venue.priceRange - 1].symbol}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {venue.location}
                      </div>

                      <Badge variant="secondary">{venue.capacity} gäster</Badge>

                      <p className="text-gray-600 text-sm line-clamp-2">
                        {venue.description}
                      </p>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2">
                        {venue.amenities.slice(0, 3).map((amenity) => (
                          <Badge key={amenity} variant="outline" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                        {venue.amenities.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{venue.amenities.length - 3}
                          </Badge>
                        )}
                      </div>

                      <Button href={`/lokaler/${venue.id}`} variant="ghost" size="sm" className="group/btn w-full">
                          Läs mer
                          <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredVenues.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">Inga lokaler hittades med dina filter.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedTypes([]);
                    setMinCapacity(20);
                    setMaxCapacity(300);
                    setSelectedLocations([]);
                    setSelectedPriceRange(null);
                  }}
                  className="mt-4"
                >
                  Återställ alla filter
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}


