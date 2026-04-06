"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock3, ExternalLink, Heart, Music, Star, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { firstDanceSongs, partySongs, weddingMusicSchedule } from "@/data/music";

const harpaLinks = {
  hero: "https://harpaskane.se/?utm_source=brollopsguiden&utm_medium=referral&utm_campaign=music_hero",
  middle: "https://harpaskane.se/?utm_source=brollopsguiden&utm_medium=referral&utm_campaign=music_middle",
  final: "https://harpaskane.se/?utm_source=brollopsguiden&utm_medium=referral&utm_campaign=music_final",
  quiz: "https://harpaskane-quiz.vercel.app/?utm_source=brollopsguiden&utm_medium=referral&utm_campaign=music_quiz",
};

const harpBenefits = [
  {
    title: "Mer narvaro i vigseln",
    description:
      "Liveharpa svarar pa rummets rytm och kanns mer levande an forinspelad musik nar nerverna ar som starkast.",
  },
  {
    title: "Mjuk lyx utan att bli stelt",
    description:
      "Klangen ar exklusiv och romantisk men samtidigt luftig nog for tradgard, kust och mindre ceremonier.",
  },
  {
    title: "Fungerar over flera delar av dagen",
    description:
      "Samma uttryck kan folja er genom inmarsch, signerande, gratulationer, cocktail och tidig middag.",
  },
];

const useCases = [
  "Inmarsch och utmarsch for en tydlig och hogtidlig start.",
  "Signeringsmusik som haller energin mjuk medan bilder tas och gaester andas ut.",
  "Mingel efter vigseln nar ni vill att lokalen ska kannas dyr, varm och genomtankt.",
];

export default function MusikPage() {
  return (
    <div className="space-y-24 pb-16 page-bg">
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <Image
            src="/IMG_2080website hero.jpg"
            alt="Levande musiker under en varm vigsel"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(46,29,22,0.82),rgba(105,66,47,0.48)_42%,rgba(35,23,18,0.72))]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="max-w-3xl"
            >
              <Badge className="mb-6 bg-white/12 text-white hover:bg-white/18">
                Brollopsmusik i Skane med tydlig riktning
              </Badge>
              <h1 className="text-5xl font-serif leading-[1.03] text-white sm:text-6xl">
                Musik som far
                <span className="mt-2 block font-script text-[#E7C9AF]">ceremonin att stanna kvar</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88">
                Om den har sidan ska generera kunder till Harpa Skane maste musikdelen sluta vara generell.
                Den ska visa varfor harpa ar ett premiumval for brollop i Skane och leda vidare till riktig kontakt.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  href={harpaLinks.hero}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="group gap-2"
                >
                  Besok Harpa Skane
                  <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button href="/planering" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Planera musikupplagget
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
            >
              <Card className="border-white/10 bg-white/92 shadow-2xl shadow-black/25">
                <div className="grid gap-0 sm:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[280px] bg-[#F8F3EC]">
                    <Image
                      src="/harpa-skane-logo.png"
                      alt="Harpa Skane logotyp"
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                      className="object-contain p-10"
                    />
                  </div>
                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.26em] text-[#8E6F57]">Utvald rekommendation</p>
                    <h2 className="mt-3 text-3xl font-serif text-[#2C2C2C]">Harpa Skane</h2>
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-0.5 text-[#C9A96E]">
                        {[...Array(5)].map((_, index) => (
                          <Star key={index} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span>vigsel, mingel och middag</span>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-gray-700">
                      En starkt profilerad leverantor for par som vill att musiken ska bidra till minnet av dagen,
                      inte bara fylla tystnad. Sarskilt relevant for slott, herrgard, kyrka och kustnara brollop.
                    </p>
                    <Button
                      href={harpaLinks.middle}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 w-full gap-2"
                    >
                      Se harpaskane.se
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-[#8E6F57]">Varfor harpa</p>
          <h2 className="mt-3 text-4xl text-[#2C2C2C]">Tre skal att lyfta fram Harpa Skane tydligare</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {harpBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-white/70 bg-white/85 p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A5A5]/15 text-[#B07F7F]">
                  <Heart className="h-5 w-5" />
                </div>
                <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                <CardDescription className="mt-4 line-clamp-none text-base leading-7 text-gray-600">
                  {benefit.description}
                </CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
          <Card className="border-none bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,242,236,0.98))] p-8 shadow-xl shadow-black/5 sm:p-10">
            <Badge variant="secondary" className="w-fit">
              Nar det passar bast
            </Badge>
            <h2 className="mt-4 text-4xl text-[#2C2C2C]">Sa kan harpamusiken anvandas under dagen</h2>
            <div className="mt-8 space-y-4">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#E8DACA] bg-white/80 px-5 py-4 text-sm leading-7 text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[1.75rem] bg-[#2F2621] px-6 py-6 text-white">
              <p className="text-xs uppercase tracking-[0.24em] text-[#E7C9AF]">Direkt lead-flode</p>
              <p className="mt-3 max-w-xl text-lg leading-8 text-white/82">
                All inspiration pa den har sidan bor till slut mynna ut i ett enda tydligt nasta steg:
                besok, kontakt eller bokningsforfragan hos Harpa Skane.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={harpaLinks.quiz}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="gap-2"
                >
                  Gor musikquizet
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button
                  href={harpaLinks.middle}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="border-white/35 text-white hover:bg-white/10 gap-2"
                >
                  Besok Harpa Skane
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/68">
                Quizet passar bra for par som vill fa en snabb kansla for vilken typ av harpaupplagg som skulle passa deras vigsel.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden border border-[#EFE3D6] bg-white/85">
            <div className="relative min-h-[250px]">
              <Image
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&q=80"
                alt="Ceremonimusik i elegant lokal"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241d1a]/70 via-transparent to-transparent" />
            </div>
            <div className="p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-[#8E6F57]">Det praktiska argumentet</p>
              <h3 className="mt-3 text-3xl font-serif text-[#2C2C2C]">Mindre brus, starkare kannsla</h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Harpa fungerar extra bra nar ni vill ha nagot mer personligt an en spellista men mindre tungt an ett
                stort liveband. Det ar dar Harpa Skane blir ett skarpt erbjudande snarare an bara inspiration.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="bg-gradient-to-br from-[#D4A5A5]/5 via-white to-[#C9A96E]/5 border-none shadow-lg">
            <div className="p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <Music className="h-6 w-6 text-[#D4A5A5]" />
                <h2 className="text-2xl font-serif text-[#2C2C2C]">Latar som fungerar fint pa harpa</h2>
              </div>
              <ul className="space-y-4">
                {firstDanceSongs.map((song, index) => (
                  <li
                    key={song.id}
                    className="flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-[#D4A5A5]/5"
                  >
                    <span className="w-6 text-sm font-medium text-[#D4A5A5]">{index + 1}</span>
                    <div>
                      <p className="font-medium text-[#2C2C2C]">{song.title}</p>
                      <p className="text-sm text-gray-600">{song.artist}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-[#C9A96E]/5 via-white to-[#D4A5A5]/5 border-none shadow-lg">
            <div className="p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <Volume2 className="h-6 w-6 text-[#C9A96E]" />
                <h2 className="text-2xl font-serif text-[#2C2C2C]">Efter vigseln och senare pa kvallen</h2>
              </div>
              <ul className="space-y-4">
                {partySongs.map((song, index) => (
                  <li
                    key={song.id}
                    className="flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-[#C9A96E]/5"
                  >
                    <span className="w-6 text-sm font-medium text-[#C9A96E]">{index + 1}</span>
                    <div>
                      <p className="font-medium text-[#2C2C2C]">{song.title}</p>
                      <p className="text-sm text-gray-600">{song.artist}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-br from-[#C9A96E]/5 via-white to-[#D4A5A5]/5 border-none shadow-lg">
          <div className="p-8 md:p-12">
            <div className="border-b border-gray-100 pb-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A96E]/12 text-[#C9A96E]">
                <Clock3 className="h-5 w-5" />
              </div>
              <h2 className="text-3xl text-[#2C2C2C]">Nar musiken bor komma in</h2>
              <p className="mx-auto mt-3 max-w-xl text-gray-600">
                Ett tydligt musikupplagg gor det enklare att faktiskt boka ratt typ av liveinslag.
              </p>
            </div>

            <div className="relative mt-10 space-y-8 pl-16">
              <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-gradient-to-b from-[#C9A96E] to-[#D4A5A5]" />
              {weddingMusicSchedule.map((item, index) => (
                <motion.div
                  key={item.time + item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-16 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A96E] text-xs font-bold text-white shadow-md">
                    {item.time}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#2C2C2C]">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-none bg-[#2F2621] shadow-2xl shadow-black/15">
          <div className="relative px-8 py-12 sm:px-12">
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(231,201,175,0.28),transparent_58%)] lg:block" />
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.28em] text-[#E7C9AF]">Bokningsnara CTA</p>
              <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-white">
                Har ni redan hittat kanslan ni vill ha, ska nasta klick ga till Harpa Skane.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">
                Det ar dar besokaren far repertoar, kontaktvag och mojlighet att ta dialogen vidare.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  href={harpaLinks.quiz}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  variant="secondary"
                  className="gap-2"
                >
                  Testa musikquizet
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button
                  href={harpaLinks.final}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="gap-2"
                >
                  Oppna harpaskane.se
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button href="/lokaler" variant="outline" size="lg" className="border-white/35 text-white hover:bg-white/10">
                  Matcha med lokal
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

