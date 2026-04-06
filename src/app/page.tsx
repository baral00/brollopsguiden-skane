"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck, ChevronRight, ExternalLink, MapPin, Music, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const harpaLinks = {
  hero: "https://harpaskane.se/?utm_source=brollopsguiden&utm_medium=referral&utm_campaign=home_hero",
  feature: "https://harpaskane.se/?utm_source=brollopsguiden&utm_medium=referral&utm_campaign=home_feature",
  final: "https://harpaskane.se/?utm_source=brollopsguiden&utm_medium=referral&utm_campaign=home_final",
};

const ceremonyMoments = [
  {
    title: "Inmarsch och vigsel",
    description:
      "Levande harpa ger lugn, rymd och precision i det viktigaste ogonblicket pa hela dagen.",
  },
  {
    title: "Mingel efter ceremonin",
    description:
      "Elegant bakgrundsmusik far fotografering, gratulationer och forsta skalen att kanna mer exklusiva.",
  },
  {
    title: "Middag eller herrgardskvall",
    description:
      "Diskret, varm och lyxig klang som passar slott, tradgard, kyrka och kustnara lokaler i Skane.",
  },
];

const guideCards = [
  {
    title: "Musik som faktiskt saljer kanslan",
    description:
      "Las om hur ni valjer ceremonimusik, vilka delar av dagen som vinner pa liveharpa och vad som fungerar i svenska vigslar.",
    href: "/musik",
    badge: "Starta har",
  },
  {
    title: "Lokaler dar harpamusik lyfter helheten",
    description:
      "Herrgard, slott, kust och tradgard blir starkare nar ljudbilden matchar platsens karaktar.",
    href: "/lokaler",
    badge: "Skane",
  },
  {
    title: "Planera en mjuk och minnesvard ceremoni",
    description:
      "Fa koll pa tidslinjen kring inmarsch, signerande, utmarsch och mingel sa att musiken far ratt plats.",
    href: "/planering",
    badge: "Praktiskt",
  },
];

const venueMatches = [
  "Slott och herrgardar som behover nagot mjukare an strakkvartett men mer personligt an playlist.",
  "Tradgards- och utomhusvigslar dar harpans klang kanns naturlig och luftig.",
  "Kyrkliga ceremonier dar klassiskt uttryck och hogtidlighet ska kannas sobra, inte stelt.",
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-16 page-bg">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brittney-weng-IHFGvbBekOk-unsplash.jpg"
            alt="Romantisk brollopsmiljo med varm och elegant kansla"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(25,20,17,0.82),rgba(25,20,17,0.48)_45%,rgba(25,20,17,0.7))]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[86vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <Badge className="mb-6 bg-white/12 text-white hover:bg-white/18">
                Brollop i Skane med musik som kanns pa riktigt
              </Badge>
              <h1 className="text-5xl font-serif leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                Gor ceremonin
                <span className="mt-2 block font-script text-[#E7C9AF]">oforglomlig</span>
                med levande harpa i Skåne
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
                Brollopsguiden finns for att inspirera, men ocksa for att visa vad som verkligen forandrar
                upplevelsen. For vigsel, mingel och middag ar Harpa Skane ett av de starkaste valen ni kan gora.
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
                <Button href="/musik" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Las om brollopsmusik
                </Button>
              </div>
              <div className="mt-10 grid gap-4 text-sm text-white/82 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-white/8 px-4 py-4 backdrop-blur-sm">
                  <div className="text-xl font-serif text-white">Ceremoni</div>
                  <p className="mt-1">Inmarsch, vigsel, signering och utmarsch med levande nerv.</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/8 px-4 py-4 backdrop-blur-sm">
                  <div className="text-xl font-serif text-white">Mingel</div>
                  <p className="mt-1">Latt, elegant ljudbild som kanns premium utan att ta over samtalen.</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/8 px-4 py-4 backdrop-blur-sm">
                  <div className="text-xl font-serif text-white">Skane</div>
                  <p className="mt-1">Sarskilt fint for slott, herrgard, kustlokal och tradgardsbrollop.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <Card className="border-white/10 bg-white/90 shadow-2xl shadow-black/20">
                <div className="p-7 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#8E6F57]">Redaktionens fokus</p>
                  <h2 className="mt-3 text-3xl font-serif text-[#2C2C2C]">Harpa Skane</h2>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-0.5 text-[#C9A96E]">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span>for ceremoni, mingel och middag i hela regionen</span>
                  </div>
                  <p className="mt-5 text-base leading-7 text-gray-700">
                    Harpans klang skapar ett mer minnesvart ogonblick an en vanlig spellista. Den kanns
                    hogtidlig utan att bli tung, och personlig utan att ta fokus fran er.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-3 rounded-2xl bg-[#F6EFE6] px-4 py-3 text-sm text-gray-700">
                      <Music className="mt-0.5 h-4 w-4 text-[#C9A96E]" />
                      <span>Passar bade klassisk repertoar och moderna latar i mer romantiska tolkningar.</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl bg-[#F7F4EE] px-4 py-3 text-sm text-gray-700">
                      <MapPin className="mt-0.5 h-4 w-4 text-[#C9A96E]" />
                      <span>Sarskilt starkt val for brollop i Malmo, Lund, Helsingborg, Ystad och Osterlen.</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl bg-[#F6EFE6] px-4 py-3 text-sm text-gray-700">
                      <CalendarCheck className="mt-0.5 h-4 w-4 text-[#C9A96E]" />
                      <span>Enkelt att bygga ett tydligt musikupplagg kring vigsel, gratulationer och mingel.</span>
                    </div>
                  </div>
                  <Button
                    href={harpaLinks.feature}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    className="mt-7 w-full justify-center gap-2"
                  >
                    Se Harpa Skane
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-[#8E6F57]">Darfor fungerar det</p>
          <h2 className="mt-3 text-4xl text-[#2C2C2C]">Tre ogonblick dar levande harpa gor stor skillnad</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ceremonyMoments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-white/70 bg-white/85 p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A5A5]/15 text-lg font-semibold text-[#B07F7F]">
                  0{index + 1}
                </div>
                <CardTitle className="text-2xl">{moment.title}</CardTitle>
                <CardDescription className="mt-4 line-clamp-none text-base leading-7 text-gray-600">
                  {moment.description}
                </CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#C9A96E]/10">
            <Image
              src="/Gemini_Generated_Image_7h6pzr7h6pzr7h6p.png"
              alt="Levande harpamusik under vigsel i varm miljo"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241d1a]/70 via-[#241d1a]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-xs uppercase tracking-[0.26em] text-[#F1D7BC]">Premiumkansla</p>
              <p className="mt-3 max-w-md text-2xl font-serif">
                Ratt musik far hela platsen att kanna mer genomtankt, mer exklusiv och mer levande.
              </p>
            </div>
          </div>

          <Card className="border-none bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,242,235,0.98))] p-8 shadow-xl shadow-black/5 sm:p-10">
            <Badge variant="secondary" className="w-fit">
              Matcha platsen med musiken
            </Badge>
            <h2 className="mt-4 text-4xl text-[#2C2C2C]">Sarskilt charmigt for brollop i Skane</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-700">
              Den har sajten kan inspirera kring klader, lokaler och planering. Men det som ofta skiljer ett
              vackert brollop fran ett verkligt minnesvart ar hur dagen later. Harpa Skane passar extra bra for:
            </p>
            <div className="mt-8 space-y-4">
              {venueMatches.map((match) => (
                <div
                  key={match}
                  className="rounded-2xl border border-[#E8DACA] bg-white/75 px-5 py-4 text-sm leading-7 text-gray-700"
                >
                  {match}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/lokaler" variant="outline" className="justify-center">
                Utforska lokaler
              </Button>
              <Button href="/musik" variant="ghost" className="justify-center gap-2">
                Las musikguiden
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#8E6F57]">Guidat vidare</p>
            <h2 className="mt-3 text-4xl text-[#2C2C2C]">Sidor som leder till ratt beslut</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-gray-600">
            Istallet for att vara en bred inspirationsportal bor sajten driva vidare till det som ger riktig effekt:
            battre musikval och fler kvalificerade besok till Harpa Skane.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {guideCards.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-[#EFE3D6] bg-white/85 p-8">
                <Badge variant={index === 1 ? "secondary" : "default"} className="mb-5">
                  {guide.badge}
                </Badge>
                <CardTitle className="text-2xl">{guide.title}</CardTitle>
                <CardDescription className="mt-4 line-clamp-none text-base leading-7 text-gray-600">
                  {guide.description}
                </CardDescription>
                <Button href={guide.href} variant="ghost" className="mt-6 gap-2 px-0 text-[#8E6F57]">
                  Oppna sidan
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-none bg-[#2F2621] shadow-2xl shadow-black/15">
          <div className="relative px-8 py-12 sm:px-12">
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(231,201,175,0.28),transparent_58%)] lg:block" />
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.28em] text-[#E7C9AF]">Nasta steg</p>
              <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-white">
                Om malet ar fler kunder till Harpa Skane ska det synas tydligt pa startsidan.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">
                Den som gillar kanslan pa den har sidan ska inte behova gissa vad nasta steg ar. Led vidare direkt
                till bokningsintresse, repertoar och kontakt pa harpaskane.se.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  href={harpaLinks.final}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="gap-2"
                >
                  Ga till Harpa Skane
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button href="/musik" variant="outline" size="lg" className="border-white/35 text-white hover:bg-white/10">
                  Se musikguiden forst
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

