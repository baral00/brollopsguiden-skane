export interface TrendArticle {
  id: string;
  title: string;
  description: string;
  imageGradient: string;
}

export interface Shop {
  id: string;
  name: string;
  city: string;
  address: string;
  specialty: string;
  phone: string;
  website: string;
  mapsUrl: string;
  rating: number;
  reviewCount?: number;
  reviewCountLabel?: string;
}

export const bridalDressTrends: TrendArticle[] = [
  {
    id: "bk-1",
    title: "Minimalistisk elegans med rena linjer",
    description:
      "2026 fortsätter de avskalade silhuetterna att dominera. Släta tyger, rena skärningar och välgjord passform gör att klänningen känns modern, dyr och tidlös på samma gång.",
    imageGradient: "from-[#D4A5A5]/30 to-[#C9A96E]/20",
  },
  {
    id: "bk-2",
    title: "Vintage spets och romantiska detaljer",
    description:
      "Spets med lätt vintagekänsla är fortfarande stark. Särskilt populärt är ärmar, korsetterade liv och spetsdetaljer som känns mjuka och romantiska i stället för tunga.",
    imageGradient: "from-[#9CAF88]/30 to-[#D4A5A5]/20",
  },
  {
    id: "bk-3",
    title: "Färgade brudklänningar för den modiga bruden",
    description:
      "Champagne, blush, silvertoner och andra mjuka nyanser blir ett tydligare alternativ till rent vitt. Trenden passar brudar som vill sticka ut utan att tappa elegansen.",
    imageGradient: "from-[#C9A96E]/30 to-[#9CAF88]/20",
  },
  {
    id: "bk-4",
    title: "Hållbart mode och second hand med känsla",
    description:
      "Brudar väljer allt oftare återbruk, sample sale och plagg i material som känns mer långsiktiga. Det ger både personlighet och ett mer medvetet val inför bröllopet.",
    imageGradient: "from-[#D4A5A5]/20 to-[#9CAF88]/30",
  },
  {
    id: "bk-5",
    title: "Rosetter, volym och dramatiska ärmar",
    description:
      "Stora rosetter, markerade axlar och luftiga statementärmar ger 2026 års klänningar mer modekänsla. Perfekt för brudar som vill ha något mer uttrycksfullt på bild.",
    imageGradient: "from-[#9CAF88]/20 to-[#C9A96E]/30",
  },
  {
    id: "bk-6",
    title: "Jumpsuit och vit kostym som brudlook",
    description:
      "Den moderna bruden väljer ibland jumpsuit eller vit kostym i stället för klassisk klänning. Det fungerar särskilt bra för citybröllop, mingel och festliga kvällsvigslar.",
    imageGradient: "from-[#C9A96E]/20 to-[#D4A5A5]/30",
  },
];

export const groomSuitTrends: TrendArticle[] = [
  {
    id: "k-1",
    title: "Lätta sommarkostymer i beige och linne",
    description:
      "Linne, sandtoner och ljusa naturfärger fungerar extra fint för sommarbröllop i Skåne. Det ger en svalare, mer avslappnad och ändå välklädd känsla.",
    imageGradient: "from-[#D4A5A5]/30 to-[#C9A96E]/20",
  },
  {
    id: "k-2",
    title: "Dubbelknäppt är tillbaka",
    description:
      "Den dubbelknäppta silhuetten gör comeback för brudgum och fest. Den känns elegant, skräddad och lite mer modeorienterad än den klassiska enkelknäppta kostymen.",
    imageGradient: "from-[#9CAF88]/30 to-[#D4A5A5]/20",
  },
  {
    id: "k-3",
    title: "Färgade kostymer i blått och grönt",
    description:
      "Marinblått, skogsgrönt och andra djupa kulörer fortsätter vara populära val för den som vill bort från svart men ändå behålla en högtidlig look.",
    imageGradient: "from-[#C9A96E]/30 to-[#9CAF88]/20",
  },
  {
    id: "k-4",
    title: "Bruna toner och vintagekänsla för höstbröllop",
    description:
      "Brunt, karamell och tweedinspirerade strukturer passar perfekt till höst, herrgård och mer rustika miljöer. Det ger ett varmt och genomtänkt uttryck.",
    imageGradient: "from-[#D4A5A5]/20 to-[#9CAF88]/30",
  },
];

export const bridesmaidTrends: TrendArticle[] = [
  {
    id: "bt-1",
    title: "Matchande färgpalett men olika modeller",
    description:
      "En av de starkaste trenderna är att låta tärnorna bära samma färgskala men olika snitt. Det blir harmoniskt i bilderna men mer smickrande för varje person.",
    imageGradient: "from-[#9CAF88]/30 to-[#D4A5A5]/20",
  },
  {
    id: "bt-2",
    title: "Kortare klänningar för livligare festbröllop",
    description:
      "Kortare och te-långa tärnklänningar passar bra för sommarmingel, dansvänliga upplägg och mindre formella bröllop där rörelse är en viktig del av stilen.",
    imageGradient: "from-[#C9A96E]/30 to-[#D4A5A5]/20",
  },
  {
    id: "bt-3",
    title: "Maxiklänningar i flytande satin och chiffong",
    description:
      "Långa tärnklänningar med mjukt fall ger ett mer elegant uttryck. De fungerar särskilt väl i kyrkor, slott och andra miljöer där helheten ska kännas högtidlig.",
    imageGradient: "from-[#D4A5A5]/30 to-[#9CAF88]/20",
  },
  {
    id: "bt-4",
    title: "Jumpsuits även för brudtärnor",
    description:
      "Tärnor i jumpsuit eller kostym ger en modern och stilsäker twist. Det är ett bra alternativ när ni vill ha en samtida look utan att förlora festkänslan.",
    imageGradient: "from-[#9CAF88]/20 to-[#C9A96E]/30",
  },
];

export const accessoriesTrends: TrendArticle[] = [
  {
    id: "a-1",
    title: "Minimalistiska guldsmycken",
    description:
      "Fina kedjor, diskreta örhängen och mjuka gulddetaljer fortsätter vara det säkraste valet. De lyfter looken utan att konkurrera med klänningen eller håret.",
    imageGradient: "from-[#C9A96E]/30 to-[#D4A5A5]/20",
  },
  {
    id: "a-2",
    title: "Blomsterkransar och hårblommor",
    description:
      "Färska eller torkade blommor i håret ger en romantisk känsla som passar extra fint för trädgårdsbröllop, sommarvigslar och mjuka bohemiska uttryck.",
    imageGradient: "from-[#9CAF88]/30 to-[#C9A96E]/20",
  },
  {
    id: "a-3",
    title: "Vintageinspirerade slöjor och birdcage-detaljer",
    description:
      "Kortare slöjor, retroinspirerade huvudplagg och birdcage-lookar blir ett sätt att ge stylingen mer karaktär utan att den känns överarbetad.",
    imageGradient: "from-[#D4A5A5]/30 to-[#C9A96E]/20",
  },
  {
    id: "a-4",
    title: "Clutches och små väskor i satin eller pärlor",
    description:
      "Små väskor i satin, metallic eller pärldetaljer fungerar både som stylingdetalj och som praktiskt tillbehör under kvällen. De ger looken mer modekänsla.",
    imageGradient: "from-[#C9A96E]/20 to-[#D4A5A5]/30",
  },
];

export const shopsInSkane: Shop[] = [
  {
    id: "shop-1",
    name: "Wedding Store Malmö",
    city: "Malmö",
    address: "Bergsgatan 11A, 211 54 Malmö",
    specialty: "Brudklänningar, slöjor och personlig provning",
    phone: "040 44 81 19",
    website: "https://weddingstoremalmo.se/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bergsgatan+11A,+211+54+Malm%C3%B6",
    rating: 4.9,
    reviewCount: 219,
  },
  {
    id: "shop-2",
    name: "Proms & Weddings",
    city: "Malmö",
    address: "Amiralsgatan 28, 211 55 Malmö",
    specialty: "Brudklänningar, tärnklänningar och accessoarer",
    phone: "040 618 00 13",
    website: "https://www.promsandweddings.se/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Amiralsgatan+28,+211+55+Malm%C3%B6",
    rating: 4.9,
    reviewCountLabel: "500+",
  },
  {
    id: "shop-3",
    name: "Skräddarhuset Malmö",
    city: "Malmö",
    address: "Fersens väg 2, 211 42 Malmö",
    specialty: "Brudklänningar, festklänningar och ändringsskrädderi",
    phone: "040 910 025",
    website: "https://skraddarhuset.se/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fersens+v%C3%A4g+2,+211+42+Malm%C3%B6",
    rating: 4.7,
  },
  {
    id: "shop-4",
    name: "Eton Brand Store Malmö",
    city: "Malmö",
    address: "Södergatan 20, 211 34 Malmö",
    specialty: "Skjortor, slipsar och skarp herrstil för vigsel och middag",
    phone: "040 12 86 30",
    website: "https://www.etonshirts.com/kr/en/page/brand-stores-sweden",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=S%C3%B6dergatan+20,+211+34+Malm%C3%B6",
    rating: 4.6,
    reviewCount: 32,
  },
  {
    id: "shop-5",
    name: "Stenströms Herr & Damekipering",
    city: "Helsingborg",
    address: "Stortorget 12, 252 23 Helsingborg",
    specialty: "Kvalitetsskjortor och klassisk dam- och herrekipering",
    phone: "042 12 62 65",
    website: "https://www.stenstromsstore.se/home",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stortorget+12,+252+23+Helsingborg",
    rating: 4.4,
    reviewCount: 48,
  },
  {
    id: "shop-6",
    name: "Anina Brud & Festspecialisten",
    city: "Helsingborg",
    address: "Ängelholmsvägen 31, 254 53 Helsingborg",
    specialty: "Brud, fest, herr och accessoarer med tidsbokning",
    phone: "042 13 27 09",
    website: "https://www.anina.se/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=%C3%84ngelholmsv%C3%A4gen+31,+254+53+Helsingborg",
    rating: 4.3,
    reviewCount: 97,
  },
];

export {
  bridalDressTrends as brudklänningarTrends,
  groomSuitTrends as kostymerTrends,
  bridesmaidTrends as brudtärnorTrends,
  accessoriesTrends as accessoarerTrends,
  shopsInSkane as butikerISkåne,
};
