"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

const teamMembers = [
  {
    id: "1",
    name: "Anna Lindberg",
    role: "Grundare & Bröllopsplanerare",
    bio:
      "Med över 10 års erfarenhet av bröllopsbranschen hjälper jag brudpar att förverkliga sina drömbröllop. Min passion är att skapa minnesvärda upplevelser som speglar varje pårs unika kärlekshistoria.",
    imageGradient: "from-[#D4A5A5]/30 to-[#C9A96E]/20",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=75",
  },
  {
    id: "2",
    name: "Sofia Andersson",
    role: "Innehållsskapare",
    bio:
      "Jag älskar att skriva om allt från brudmode till bröllopsmat. Min uppgift är att hålla er uppdaterade med de senaste trenderna och ge inspiration för ert perfekta bröllop.",
    imageGradient: "from-[#C9A96E]/30 to-[#D4A5A5]/20",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=75",
  },
  {
    id: "3",
    name: "Lars Bergström",
    role: "Fotograf & Kreatör",
    bio:
      "Att fånga de äkta känslorna och ögonblicken är mitt hjärteämne. Jag fotograferar bröllop över hela Skåne och hjälper till att skapa den visuella identiteten för Bröllopsguiden.",
    imageGradient: "from-[#9CAF88]/30 to-[#D4A5A5]/20",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=75",
  },
];

export default function OmOssPage() {
  const [formData, setFormData] = useState({
    namn: "",
    email: "",
    amne: "samarbete",
    meddelande: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitSuccess(true);
    setIsSubmitting(false);
    setFormData({ namn: "", email: "", amne: "samarbete", meddelande: "" });

    // Reset success message after 3 seconds
    if (successTimeoutRef.current) {
      clearTimeout(successTimeoutRef.current);
    }

    successTimeoutRef.current = setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <div className="space-y-20 pb-16 page-bg">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
            alt="Romantiskt bröllop"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-16 h-16 text-[#D4A5A5] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-serif text-[#2C2C2C] mb-4">
              Om Bröllopsguiden Skåne
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vi hjälper brudpar i Skåne att skapa det drömbröllop de alltid föreställt sig
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-br from-[#D4A5A5]/5 via-white to-[#C9A96E]/5 border-none shadow-lg p-12">
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-[#2C2C2C] mb-6">Vår historia</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Bröllopsguiden Skåne föddes ur en passion för att hjälpa brudpar att skapa de mest magiska dagarna i sina liv. Vi har sett hur många par kämpar med att hitta pålitlig information och inspiration inom ramen för en pressad tidsplan.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Skåne är en region rik på vacker natur, historiska slott, charmiga kuststäder och hantverkstraditioner. Vi tror att varje bröllop ska spegla både det enskilda paret och den vackra miljö de väljer som scen för sin stora dag.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Vår mission är att vara ert pålitliga kompass i bröllopsplaneringens labyrint. Från det första mötet med en lokal till sista detaljen med blommorna — vi guidar er genom varje steg, alltid med hjärtat och professionell erfarenhet.
              </p>
            </motion.div>
          </div>
        </Card>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-[#2C2C2C] mb-12 text-center">Vårt team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:border-[#D4A5A5]/30 transition-all duration-300 border border-gray-100 h-full text-center">
                {/* Portrait */}
                <div
                  className="h-64 mx-auto w-64 rounded-full relative overflow-hidden"
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>

                <CardHeader className="pt-8">
                  <CardTitle className="text-xl text-[#2C2C2C] group-hover:text-[#D4A5A5] transition-colors">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-[#D4A5A5] font-medium mb-4">
                    {member.role}
                  </CardDescription>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-[#2C2C2C] mb-12 text-center">Kontakta oss</h2>

        <Card className="bg-gradient-to-br from-[#D4A5A5]/5 via-white to-[#C9A96E]/5 border-none shadow-lg">
          <div className="p-8 md:p-12 space-y-6">
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 text-green-700 p-4 rounded-lg text-center"
              >
                Tack för ditt meddelande! Vi kommer att höra av oss så snart som möjligt.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="namn" className="block text-sm font-medium text-gray-700 mb-2">
                  Namn *
                </label>
                <Input
                  id="namn"
                  value={formData.namn}
                  onChange={(e) => setFormData({ ...formData, namn: e.target.value })}
                  placeholder="Ditt namn"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-post *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="din@email.se"
                  required
                />
              </div>

              <div>
                <label htmlFor="amne" className="block text-sm font-medium text-gray-700 mb-2">
                  Ämne *
                </label>
                <select
                  id="amne"
                  value={formData.amne}
                  onChange={(e) => setFormData({ ...formData, amne: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4A5A5] focus:ring-2 focus:ring-[#D4A5A5]/20 outline-none transition-all"
                >
                  <option value="samarbete">Samarbete</option>
                  <option value="tipssa-lokal">Tipsa om lokal</option>
                  <option value="fraga">Fråga</option>
                  <option value="ovrigt">Övrigt</option>
                </select>
              </div>

              <div>
                <label htmlFor="meddelande" className="block text-sm font-medium text-gray-700 mb-2">
                  Meddelande *
                </label>
                <textarea
                  id="meddelande"
                  value={formData.meddelande}
                  onChange={(e) => setFormData({ ...formData, meddelande: e.target.value })}
                  placeholder="Skriv ditt meddelande här..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4A5A5] focus:ring-2 focus:ring-[#D4A5A5]/20 outline-none transition-all resize-none"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Skickar..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Skicka meddelande
                  </>
                )}
              </Button>
            </form>
          </div>
        </Card>
      </section>
    </div>
  );
}
