export interface MenuType {
  id: string;
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  pricePerPerson: { min: number; max: number; currency: string };
  bestFor: string[];
  imageGradient: string;
}

export interface ScanianSpecialty {
  id: string;
  name: string;
  description: string;
  traditionText: string;
  imageGradient: string;
}

export interface CakeStyle {
  id: string;
  name: string;
  description: string;
  trendRating: number;
  priceLevel: "€" | "€€" | "€€€";
  imageGradient: string;
}

export interface Caterer {
  id: string;
  name: string;
  city: string;
  address: string;
  specialty: string;
  priceRange: { min: number; max: number };
  rating: number;
  reviewCount: number;
  website: string;
  mapsUrl: string;
}

export const menuTypes: MenuType[] = [
  {
    id: "sittande-middag",
    name: "Sittande middag",
    description:
      "Den klassiska bröllopsmiddagen med flera serveringar. Gästerna sitter länge vid bordet och upplägget passar särskilt bra när ni vill ha en mer formell och lugn middag.",
    pros: [
      "Klassisk och tidlös upplevelse",
      "Gäster får umgås längre vid bordet",
      "Perfekt för formella bröllop",
      "Enkel att planera med tydlig servering",
    ],
    cons: ["Kan bli dyrt per person", "Kräver plats för bordssättning"],
    pricePerPerson: { min: 600, max: 1200, currency: "SEK" },
    bestFor: ["Formella bröllop", "Större gästlistor", "Vinterbröllop"],
    imageGradient: "from-[#D4A5A5]/30 to-[#C9A96E]/20",
  },
  {
    id: "buffestil",
    name: "Bufféstil",
    description:
      "Gästerna serverar sig själva från buffébord. Det skapar rörelse, mingel och ett mer avslappnat tempo under middagen.",
    pros: ["Mindre personalkostnader", "Flexibla tider för gästerna", "Bra för mingel"],
    cons: ["Kräver större yta", "Vissa gäster föredrar servering vid bordet"],
    pricePerPerson: { min: 400, max: 900, currency: "SEK" },
    bestFor: ["Informella bröllop", "Sommarbröllop", "Budgetmedvetna par"],
    imageGradient: "from-[#C9A96E]/30 to-[#D4A5A5]/20",
  },
  {
    id: "food-trucks",
    name: "Food trucks",
    description:
      "En trendig lösning där olika food trucks serverar street food till gästerna. Ger festen en mer personlig och avslappnad känsla.",
    pros: [
      "Unik och modern upplevelse",
      "Olika matval för olika smak",
      "Skapar festlig stämning",
    ],
    cons: ["Väderberoende", "Kräver utomhusutrymme"],
    pricePerPerson: { min: 300, max: 700, currency: "SEK" },
    bestFor: ["Utomhusbröllop", "Sommarbröllop", "Trendiga upplägg"],
    imageGradient: "from-[#9CAF88]/30 to-[#D4A5A5]/20",
  },
  {
    id: "cocktailmingel",
    name: "Cocktailmingel",
    description:
      "Canapéer, småbitar och drinkar i ett mer rörligt upplägg. Passar par som vill ha mer mingel än traditionell sittning.",
    pros: ["Mycket festfokus", "Mindre kostnad för mat", "Flexibelt upplägg"],
    cons: ["Inte lika mättande", "Passar inte alla gästgrupper"],
    pricePerPerson: { min: 350, max: 750, currency: "SEK" },
    bestFor: ["Små bröllop", "Fokus på fest", "Stadsbröllop"],
    imageGradient: "from-[#D4A5A5]/20 to-[#9CAF88]/30",
  },
  {
    id: "brunch-brollop",
    name: "Brunch-bröllop",
    description:
      "En lättare morgon- eller förmiddagsfest med brunchbuffé, kaffe, bubbel och en mer avslappnad stämning.",
    pros: ["Billigare än kvällsbröllop", "Avslappnad stämning", "Perfekt för mindre sällskap"],
    cons: ["Inte alla vill fira tidigt", "Färre leverantörer riktar sig till brunchformat"],
    pricePerPerson: { min: 250, max: 500, currency: "SEK" },
    bestFor: ["Små bröllop", "Budgetbröllop", "Lättsamma upplägg"],
    imageGradient: "from-[#C9A96E]/20 to-[#D4A5A5]/30",
  },
];

export const scanianSpecialties: ScanianSpecialty[] = [
  {
    id: "spettekaka",
    name: "Spettekaka",
    description:
      "Skånes ikoniska festkaka och ett naturligt samtalsämne på ett skånskt bröllop. Krispig, luftig och tydligt lokal i sin identitet.",
    traditionText:
      "Spettekakan är en av Skånes mest klassiska högtidskakor och serveras ofta i tunna skivor med tillbehör som glass, sylt eller vispad grädde.",
    imageGradient: "from-[#C9A96E]/30 to-[#D4A5A5]/20",
  },
  {
    id: "aggakaka",
    name: "Äggakaka",
    description:
      "En rejäl skånsk klassiker som ofta serveras med stekt fläsk och lingon. Passar fint i en mer rustik eller lantlig bröllopsmiddag.",
    traditionText:
      "Äggakakan har länge varit en självklar del av skånsk husmanskost och bär på en tydlig regional identitet som många gäster känner igen direkt.",
    imageGradient: "from-[#D4A5A5]/30 to-[#C9A96E]/20",
  },
  {
    id: "kroppkakor",
    name: "Kroppkakor",
    description:
      "Fyllda potatisbullar som ger menyn en mer traditionell och rustik känsla. Ett tydligt nordiskt inslag för par som vill markera lokal matkultur.",
    traditionText:
      "Kroppkakor förekommer i flera delar av södra Sverige och kan fungera som ett charmigt regionalt inslag när ni vill göra menyn mer personlig.",
    imageGradient: "from-[#9CAF88]/30 to-[#C9A96E]/20",
  },
];

export const scanshSpecialties = scanianSpecialties;

export const cakeStyles: CakeStyle[] = [
  {
    id: "naked-cake",
    name: "Naked cake",
    description:
      "En mer avskalad tårta där lagren syns tydligt och dekoren ofta består av bär eller blommor. Romantisk men inte överarbetad.",
    trendRating: 5,
    priceLevel: "€€",
    imageGradient: "from-[#D4A5A5]/30 to-[#9CAF88]/20",
  },
  {
    id: "klassisk-vit-fondant",
    name: "Klassisk vit fondant",
    description:
      "Den tidlösa vita bröllopstårtan med slät finish, tydliga våningar och klassisk högtidskänsla.",
    trendRating: 4,
    priceLevel: "€€€",
    imageGradient: "from-[#C9A96E]/30 to-[#D4A5A5]/20",
  },
  {
    id: "blommig-tarta",
    name: "Blommig tårta",
    description:
      "En tårta dekorerad med färska blommor, sockerblommor eller tydliga botaniska detaljer. Väldigt fotogenisk och romantisk.",
    trendRating: 5,
    priceLevel: "€€€",
    imageGradient: "from-[#9CAF88]/30 to-[#D4A5A5]/20",
  },
  {
    id: "minimalistisk-modern",
    name: "Minimalistisk modern",
    description:
      "Rena linjer, sparsam dekor och fokus på form. Ett populärt val för moderna bröllop med mer designad känsla.",
    trendRating: 4,
    priceLevel: "€€",
    imageGradient: "from-[#D4A5A5]/20 to-[#C9A96E]/30",
  },
  {
    id: "cupcake-torn",
    name: "Cupcake-torn",
    description:
      "Cupcakes i stället för traditionell tårta ger ett lekfullt men praktiskt upplägg där serveringen blir enkel och festlig.",
    trendRating: 3,
    priceLevel: "€",
    imageGradient: "from-[#C9A96E]/20 to-[#D4A5A5]/30",
  },
  {
    id: "dessertbord",
    name: "Dessertbord istället för tårta",
    description:
      "Ett bord fyllt med mindre sötsaker som macarons, småkakor, choklad och frukt. En modern lösning för par som vill ha variation.",
    trendRating: 4,
    priceLevel: "€€",
    imageGradient: "from-[#9CAF88]/20 to-[#D4A5A5]/30",
  },
];

export const caterers: Caterer[] = [
  {
    id: "cat-1",
    name: "Smörgåsbutiken Wärldshuset",
    city: "Malmö",
    address: "John Ericssons väg 76, 217 61 Malmö",
    specialty: "Bufféer, smörgåstårtor, kallskuret och större festupplägg",
    priceRange: { min: 350, max: 900 },
    rating: 4.8,
    reviewCount: 394,
    website: "https://xn--wrldshuset-q5a.se/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=John+Ericssons+v%C3%A4g+76,+217+61+Malm%C3%B6",
  },
  {
    id: "cat-2",
    name: "Kockomat AB",
    city: "Lund",
    address: "Västergatan 13, 222 29 Lund",
    specialty: "Bröllopsbufféer, festlokal och helhetsarrangemang",
    priceRange: { min: 249, max: 395 },
    rating: 5.0,
    reviewCount: 4,
    website: "https://www.kockomat.se/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=V%C3%A4stergatan+13,+222+29+Lund",
  },
  {
    id: "cat-3",
    name: "Billströms Fisk & Catering",
    city: "Rydebäck",
    address: "Landskronavägen 775, 257 30 Rydebäck",
    specialty: "Skaldjur, fisk, kött och catering för bröllop och fest",
    priceRange: { min: 400, max: 950 },
    rating: 4.3,
    reviewCount: 6,
    website: "https://www.billstromsfiskochcatering.se/om-fiskaffaren-helsingborg/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Landskronav%C3%A4gen+775,+257+30+Rydeb%C3%A4ck",
  },
  {
    id: "cat-4",
    name: "Restaurang Kvarnen",
    city: "Kristianstad",
    address: "Spannmålsgatan 9, 291 32 Kristianstad",
    specialty: "Catering med svenska och internationella menyer för fest och bröllop",
    priceRange: { min: 450, max: 1100 },
    rating: 5.0,
    reviewCount: 2,
    website: "https://www.kvarnen.net/om-kvarnen/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Spannm%C3%A5lsgatan+9,+291+32+Kristianstad",
  },
];
