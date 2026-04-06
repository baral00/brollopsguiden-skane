export interface FlowerData {
  id: string;
  name: string;
  swedishName: string;
  seasons: ("vår" | "sommar" | "höst")[];
  priceLevel: 1 | 2 | 3;
  description: string;
  bestFor: string[];
  imageGradient: string;
}

export interface DecorTrend {
  id: string;
  title: string;
  description: string;
  difficulty: "Lätt" | "Medel" | "Svår";
  budgetFriendly: boolean;
  imageGradient: string;
}

export interface Florist {
  id: string;
  name: string;
  city: string;
  address: string;
  specialty: string;
  phone: string;
  email?: string;
  website: string;
  mapsUrl: string;
}

export const flowers: FlowerData[] = [
  {
    id: "pioner",
    name: "Peonies",
    swedishName: "Pioner",
    seasons: ["sommar"],
    priceLevel: 3,
    description:
      "De kungliga blommorna för bröllop. Pioner är lyxiga, doftande och symboliserar kärlek och lycka. Perfekta som buketter och bordsarrangemang.",
    bestFor: ["Brudbukett", "Hårblommor", "Bordsdekor"],
    imageGradient: "from-[#D4A5A5]/40 to-[#C9A96E]/20",
  },
  {
    id: "rosor",
    name: "Roses",
    swedishName: "Rosor",
    seasons: ["vår", "sommar", "höst"],
    priceLevel: 2,
    description:
      "Den klassiska brudblomman som aldrig går ur tiden. Tillgängliga i många färger och uppskattade för sin romantiska känsla.",
    bestFor: ["Brudbukett", "Corsage", "Alla ändamål"],
    imageGradient: "from-[#D4A5A5]/30 to-[#9CAF88]/20",
  },
  {
    id: "eucalyptus",
    name: "Eucalyptus",
    swedishName: "Eukalyptus",
    seasons: ["vår", "sommar", "höst"],
    priceLevel: 1,
    description:
      "Det perfekta gröna tillskottet. Eukalyptus ger volym, doft och en bohemisk touch. Mycket prisvärd och långlivad.",
    bestFor: ["Utfyllnad", "Bordsdekor", "Bågar"],
    imageGradient: "from-[#9CAF88]/40 to-[#D4A5A5]/20",
  },
  {
    id: "lavendel",
    name: "Lavender",
    swedishName: "Lavendel",
    seasons: ["sommar"],
    priceLevel: 2,
    description:
      "Doftande och drömsk. Lavendel ger en frisk provensalsk känsla till bröllopet och passar fint utomhus.",
    bestFor: ["Ceremonidekor", "Brudtärnor", "Bordsdekor"],
    imageGradient: "from-[#C9A96E]/30 to-[#D4A5A5]/20",
  },
  {
    id: "dahlior",
    name: "Dahlias",
    swedishName: "Dahlior",
    seasons: ["sommar", "höst"],
    priceLevel: 2,
    description:
      "Dramatiska och färgstarka. Dahlior finns i många former och passar särskilt bra för sensommar- och höstbröllop.",
    bestFor: ["Brudbukett", "Färgaccent", "Höstdekor"],
    imageGradient: "from-[#D4A5A5]/20 to-[#C9A96E]/30",
  },
  {
    id: "ranunkel",
    name: "Ranunculus",
    swedishName: "Ranunkel",
    seasons: ["vår", "sommar"],
    priceLevel: 2,
    description:
      "Delikata med många kronblad. Ranunkel ger en romantisk och feminin känsla och är mycket populär för vårbröllop.",
    bestFor: ["Brudbukett", "Små buketter", "Bordsdekor"],
    imageGradient: "from-[#9CAF88]/30 to-[#D4A5A5]/20",
  },
  {
    id: "gypsophila",
    name: "Gypsophila",
    swedishName: "Brudslöja",
    seasons: ["sommar"],
    priceLevel: 1,
    description:
      "Små vita blomklasar som skapar drömsk volym. Brudslöja är perfekt för romantiska och luftiga arrangemang.",
    bestFor: ["Utfyllnad", "Drömsk dekor", "Ceremonibågar"],
    imageGradient: "from-[#D4A5A5]/10 to-[#C9A96E]/20",
  },
  {
    id: "vildblommor",
    name: "Wildflowers",
    swedishName: "Vildblommor",
    seasons: ["sommar", "höst"],
    priceLevel: 1,
    description:
      "Naturliga och levande. Vildblommor ger en mjuk, bohemisk känsla och passar särskilt fint för lantliga vigslar.",
    bestFor: ["Bohemisk dekor", "Utomhusceremonier", "Lös bukett"],
    imageGradient: "from-[#9CAF88]/20 to-[#D4A5A5]/30",
  },
];

export const decorTrends: DecorTrend[] = [
  {
    id: "dt-1",
    title: "Torkade blommor - hållbar skönhet",
    description:
      "Pampasgräs, statice och torkad eukalyptus är årets hetaste val. Hållbart, långlivat och tidlöst vackert.",
    difficulty: "Lätt",
    budgetFriendly: true,
    imageGradient: "from-[#C9A96E]/30 to-[#D4A5A5]/20",
  },
  {
    id: "dt-2",
    title: "Bohemisk elegans med pampasgräs",
    description:
      "Stora arrangemang med pampasgräs skapar dramatik och en bohemisk känsla. Perfekt för den moderna bruden som vill sticka ut.",
    difficulty: "Medel",
    budgetFriendly: true,
    imageGradient: "from-[#D4A5A5]/20 to-[#C9A96E]/30",
  },
  {
    id: "dt-3",
    title: "Klassiskt vitt med gulddetaljer",
    description:
      "Tidlös elegans med vita blommor, levande ljus och diskreta gulddetaljer för en varm men exklusiv känsla.",
    difficulty: "Svår",
    budgetFriendly: false,
    imageGradient: "from-[#C9A96E]/40 to-[#D4A5A5]/20",
  },
  {
    id: "dt-4",
    title: "Skånska ängsblommor - lokalt och vackert",
    description:
      "Stöd lokala odlare genom att välja säsongens ängsblommor från Skåne. Naturligt, doftande och prisvärt.",
    difficulty: "Lätt",
    budgetFriendly: true,
    imageGradient: "from-[#9CAF88]/30 to-[#D4A5A5]/20",
  },
  {
    id: "dt-5",
    title: "Minimalistisk bordsdukning med grönt",
    description:
      "Ett långt löp av eukalyptus och enstaka blommor ger ett rent, modernt och fotogeniskt uttryck.",
    difficulty: "Medel",
    budgetFriendly: true,
    imageGradient: "from-[#9CAF88]/40 to-[#C9A96E]/20",
  },
  {
    id: "dt-6",
    title: "Ljusslingor och levande ljus",
    description:
      "Skapa en varm kvällsstämning med mängder av ljus i träd, på bord och längs gångvägar.",
    difficulty: "Medel",
    budgetFriendly: true,
    imageGradient: "from-[#C9A96E]/30 to-[#9CAF88]/20",
  },
];

export const florists: Florist[] = [
  {
    id: "fl-1",
    name: "Oxåker Blomsterdekoration",
    city: "Malmö",
    address: "Nils Perssons Plan 7, 217 48 Malmö",
    specialty: "Bröllopsblommor, blomsterbågar och personligt utformad eventfloristik.",
    phone: "073-663 49 21",
    website: "https://www.oxaker.se/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Nils+Perssons+Plan+7,+217+48+Malm%C3%B6",
  },
  {
    id: "fl-2",
    name: "EG Blomman",
    city: "Malmö",
    address: "Friisgatan 3, 214 21 Malmö",
    specialty: "Exklusiva bröllopsblommor och kostnadsfri rådgivning inför ert drömbröllop.",
    phone: "040-23 36 30",
    email: "info@egblomman.se",
    website: "https://egblomman.se/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Friisgatan+3,+214+21+Malm%C3%B6",
  },
  {
    id: "fl-3",
    name: "Krooks Blomsterverkstad",
    city: "Helsingborg",
    address: "Drottninggatan 78, 252 21 Helsingborg",
    specialty: "Annorlunda brudbuketter och blomsterarrangemang för vigsel och fest.",
    phone: "042-133 448",
    website: "https://www.krooksblomsterverkstad.se/brollop/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Drottninggatan+78,+252+21+Helsingborg",
  },
  {
    id: "fl-4",
    name: "Interflora Blomsterhuset Mimosa",
    city: "Ystad",
    address: "Kristianstadsvägen 4B, 271 34 Ystad",
    specialty: "Brudbuketter, corsage och skräddarsydda bröllopsblommor i nära dialog med brudparet.",
    phone: "0411-132 10",
    email: "interflorafresh@mimosaystad.se",
    website: "https://mimosa.interflora.se/brollop/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kristianstadsv%C3%A4gen+4B,+271+34+Ystad",
  },
];

export const seasonGuide = {
  jan: ["rosor", "ranunkel", "eucalyptus"],
  feb: ["rosor", "ranunkel", "eucalyptus"],
  mar: ["rosor", "ranunkel", "eucalyptus", "gypsophila"],
  apr: ["rosor", "ranunkel", "eucalyptus", "vildblommor"],
  maj: ["rosor", "ranunkel", "eucalyptus", "vildblommor", "gypsophila"],
  jun: ["pioner", "rosor", "lavendel", "ranunkel", "eucalyptus", "gypsophila", "vildblommor"],
  jul: ["pioner", "rosor", "lavendel", "dahlior", "ranunkel", "eucalyptus", "gypsophila", "vildblommor"],
  aug: ["pioner", "rosor", "dahlior", "ranunkel", "eucalyptus", "gypsophila", "vildblommor"],
  sep: ["rosor", "dahlior", "eucalyptus", "vildblommor"],
  okt: ["rosor", "dahlior", "eucalyptus"],
  nov: ["rosor", "eucalyptus"],
  dec: ["rosor", "eucalyptus"],
};
