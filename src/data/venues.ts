export interface Venue {
  id: string;
  name: string;
  type: "Slott & Herrgård" | "Strandlokal" | "Lantgård & Lada" | "Restaurang" | "Trädgård/Utomhus" | "Hotell";
  location: string;
  capacity: number;
  description: string;
  amenities: string[];
  priceRange: 1 | 2 | 3;
  contact: {
    phone?: string;
    email?: string;
  };
}

export const venues: Venue[] = [
  {
    id: "venue-1",
    name: "Spegelsalen",
    type: "Restaurang",
    location: "Malmö",
    capacity: 160,
    description:
      "Historisk bröllopslokal mitt i Malmö med höga tak, stora speglar och flera salar för vigsel, mingel och fest. Spegelsalen passar par som vill ha cityläge, full service och en klassisk festvåningskänsla.",
    amenities: ["Central adress", "Serveringspersonal", "Bar", "Ljud & ljus", "Städning"],
    priceRange: 3,
    contact: {
      email: "spegelsalen@occorestaurant.com",
    },
  },
  {
    id: "venue-2",
    name: "Elisefarm",
    type: "Hotell",
    location: "Fogdarp, Höör",
    capacity: 170,
    description:
      "Herrgårdsmiljö mitt i Skåne med restaurang, spa, golf och många rum för övernattning. Elisefarm är ett starkt val för par som vill samla vigsel, middag, fest och boende på samma plats.",
    amenities: ["Övernattning", "Spa", "Restaurang", "Bröllopssvit", "Parkering"],
    priceRange: 3,
    contact: {
      phone: "0413-330 70",
      email: "info@elisefarm.se",
    },
  },
  {
    id: "venue-3",
    name: "Bosjökloster Slott & Trädgårdar",
    type: "Slott & Herrgård",
    location: "Bosjökloster, Höör",
    capacity: 250,
    description:
      "Romantisk slottsmiljö vid Ringsjön med medeltida kyrka, trädgård och flera festytor. Bosjökloster fungerar både för mindre slottsbröllop och större firanden i Logen med utsikt över parken och vattnet.",
    amenities: ["Kyrka intill", "Trädgårdsvigsel", "Festlokal", "Övernattning", "Planeringshjälp"],
    priceRange: 3,
    contact: {
      phone: "0413-250 48",
      email: "info@bosjokloster.se",
    },
  },
  {
    id: "venue-4",
    name: "Lillegård",
    type: "Lantgård & Lada",
    location: "Kävlinge, nära Lund",
    capacity: 120,
    description:
      "Skånsk gård med festlada, blomstrande vigselplats, lounge och bröllopssvit. Lillegård passar par som vill ha en varm lantlig känsla med mycket frihet kring mat, dryck, dekoration och festupplägg.",
    amenities: ["Festlada", "Utomhusvigsel", "Bröllopssvit", "Lounge", "Tillgänglighetsanpassad"],
    priceRange: 2,
    contact: {
      phone: "0704-48 77 06",
      email: "hej@lillegards.se",
    },
  },
  {
    id: "venue-5",
    name: "Sörgården Event",
    type: "Lantgård & Lada",
    location: "Flyinge, nära Lund",
    capacity: 100,
    description:
      "Rustik och varm bröllopslokal på den skånska landsbygden utanför Flyinge. Sörgården är särskilt intressant för par som vill ha egen prägel men ändå kunna få hjälp med catering, dukning, personal och teknik.",
    amenities: ["Trädgård för vigsel", "Restaurangkök", "Ljudsystem", "Mikrofoner", "Fri parkering"],
    priceRange: 2,
    contact: {
      phone: "046-23 30 70",
      email: "info@sorgardenevent.se",
    },
  },
  {
    id: "venue-6",
    name: "Bjärsjölagårds Slott",
    type: "Slott & Herrgård",
    location: "Sjöbo",
    capacity: 500,
    description:
      "Stort slottsområde i hjärtat av Skåne med flera olika festlokaler, från salonger i slottet till större slottsstall och stenloge. Ett bra val för brudpar som vill ha helgbröllop med boende, middag och mycket plats.",
    amenities: ["Flera festlokaler", "52 bäddar", "Slottsmiljö", "Lokala råvaror", "Parkmiljö"],
    priceRange: 3,
    contact: {
      phone: "0415-412 90",
      email: "bjarsjolagard@hush.se",
    },
  },
  {
    id: "venue-7",
    name: "Kronovalls Vinslott",
    type: "Slott & Herrgård",
    location: "Skåne-Tranås, Österlen",
    capacity: 80,
    description:
      "Franskinspirerat vinslott på Österlen med slottsbröllop, middag, övernattning och vinfokus. Kronovall passar par som söker en mer romantisk weekendkänsla med slott, mat, dryck och hotell i samma upplevelse.",
    amenities: ["Övernattning", "Vinpaket", "Gratis parkering", "WiFi", "Slottsmiljö"],
    priceRange: 3,
    contact: {
      phone: "0417-197 10",
      email: "info@kronovall.se",
    },
  },
  {
    id: "venue-8",
    name: "Maryhill Estate",
    type: "Hotell",
    location: "Glumslöv",
    capacity: 200,
    description:
      "Modern resort med historisk estate-känsla, panoramautsikt mot havet och stora möjligheter för hela bröllopshelger. Maryhill Estate är ett premiumval för par som vill kombinera glamour, boende och stark destinationkänsla.",
    amenities: ["163 hotellrum", "Terrass", "Havsutsikt", "Privata salonger", "Restauranger & barer"],
    priceRange: 3,
    contact: {
      phone: "0418-45 11 00",
      email: "reservation@maryhillestate.com",
    },
  },
  {
    id: "venue-9",
    name: "Bäckaskog Slott",
    type: "Slott & Herrgård",
    location: "Fjälkinge, Kristianstad",
    capacity: 180,
    description:
      "Anrikt slott i nordöstra Skåne med vigselkapell, slottspark och flera festlokaler från 60 till 400 gäster. Bäckaskog är starkt för större bröllop där boende, middag och naturmiljö behöver fungera ihop.",
    amenities: ["Vigselkapell", "63 rum", "Slottspark", "Fri parkering", "Frukost"],
    priceRange: 3,
    contact: {
      phone: "044-53020",
      email: "info@backaskogslott.se",
    },
  },
  {
    id: "venue-10",
    name: "Brösarps Gästgifveri & SPA",
    type: "Hotell",
    location: "Brösarp, Österlen",
    capacity: 150,
    description:
      "Klassiskt gästgifveri på Österlen med restaurang, spa, hotellrum och bröllopslösningar från mindre middag till större helghyrning. Ett varmt alternativ för par som vill ha både skånsk mattradition och hotellkänsla.",
    amenities: ["32 hotellrum", "Spa", "Restaurang", "Fri parkering", "Gruppbokning"],
    priceRange: 2,
    contact: {
      phone: "0414-736 83",
      email: "konferens@gastis.se",
    },
  },
];

