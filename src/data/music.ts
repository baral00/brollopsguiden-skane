export interface MusicProvider {
  id: string;
  name: string;
  type: "liveband" | "dj" | "stråkkvartett" | "soloartist" | "harpa" | "spotify";
  genre: string;
  location: string;
  priceRange: "€" | "€€" | "€€€";
  description: string;
  rating: number;
  imageGradient: string;
  website?: string;
  editorsPick?: boolean;
}

export interface Song {
  id: string;
  artist: string;
  title: string;
}

export interface EntertainmentIdea {
  id: string;
  title: string;
  description: string;
  priceLevel: "Låg" | "Medel" | "Hög";
  imageGradient: string;
}

export const livebandProviders: MusicProvider[] = [
  {
    id: "lb-1",
    name: "Skånes Bröllopsband",
    type: "liveband",
    genre: "Pop, rock, dansbandsklassiker",
    location: "Malmö",
    priceRange: "€€€",
    description:
      "Erfarenhet av 15 års bröllopserfarenhet. Vi spelar allt från första dansen till sista låten med energin högst upp.",
    rating: 4.9,
    imageGradient: "from-[#D4A5A5]/30 to-[#C9A96E]/20",
  },
  {
    id: "lb-2",
    name: "Lund Soul Orchestra",
    type: "liveband",
    genre: "Soul, funk, Motown-klassiker",
    location: "Lund",
    priceRange: "€€",
    description:
      "Get down med soulig musik som får gästerna att glida ut på dansgolvet. Klassiska låtar från 60-, 70- och 80-talet.",
    rating: 4.7,
    imageGradient: "from-[#9CAF88]/30 to-[#D4A5A5]/20",
  },
  {
    id: "lb-3",
    name: "Österlens Liveband",
    type: "liveband",
    genre: "Svensk pop, rock, schlager",
    location: "Ystad",
    priceRange: "€€",
    description:
      "Vi får gästerna att sjunga med! Repertoar från Roxette till Håkan Hellström. Perfekt för det svenska bröllopet.",
    rating: 4.8,
    imageGradient: "from-[#C9A96E]/30 to-[#9CAF88]/20",
  },
];

export const djProviders: MusicProvider[] = [
  {
    id: "dj-1",
    name: "DJ Mikael Bröllop",
    type: "dj",
    genre: "Alla genrer - anpassar efter era önskemål",
    location: "Helsingborg",
    priceRange: "€€",
    description:
      "Med över 100 bröllop i bagaget vet jag vad som får gästerna att festa. Professionell utrustning och oändliga låtlistor.",
    rating: 4.9,
    imageGradient: "from-[#D4A5A5]/20 to-[#C9A96E]/30",
  },
  {
    id: "dj-2",
    name: "DJ Emma Events",
    type: "dj",
    genre: "Pop, dans, 80-tal, nu-dans",
    location: "Malmö",
    priceRange: "€€",
    description:
      "Kvinna i branschen med fokus på att läsa av rummet. Från romantisk middagsmusik till festlig klubbkänsla.",
    rating: 4.8,
    imageGradient: "from-[#9CAF88]/20 to-[#D4A5A5]/30",
  },
];

export const stråkkvartettProviders: MusicProvider[] = [
  {
    id: "sq-1",
    name: "Malmö Stråkkvartett",
    type: "stråkkvartett",
    genre: "Klassisk musik, popcovers på stråk",
    location: "Malmö",
    priceRange: "€€€",
    description:
      "Elegant musik för ceremoni och mottagning. Vi spelar allt från klassiska kompositörer till moderna poplåtar i sträcktolkning.",
    rating: 5.0,
    imageGradient: "from-[#C9A96E]/20 to-[#D4A5A5]/30",
  },
  {
    id: "sq-2",
    name: "Svenska Stråkkvartetten",
    type: "stråkkvartett",
    genre: "Klassisk musik, bröllopssånger",
    location: "Lund",
    priceRange: "€€",
    description:
      "Fyra musiker från Kungl. Musikhögskolan. Perfekt för den som vill ha klassisk elegans vid ceremoni.",
    rating: 4.9,
    imageGradient: "from-[#D4A5A5]/30 to-[#9CAF88]/20",
  },
];

export const harpistProviders: MusicProvider[] = [
  {
    id: "hp-1",
    name: "Harpa Skåne",
    type: "harpa",
    genre: "Klassiskt, pop på harpa, filmmusik, bröllopssånger",
    location: "Hela Skåne",
    priceRange: "€€",
    description:
      "Professionell harpist med lång erfarenhet av bröllop och speciella evenemang i hela Skåne. Skräddarsydd repertoar för ceremoni, cocktail och middag — från klassiska mästerverk till moderna poplåtar tolkade på harpa. En harpas mjuka, eteriska klang skapar en oförglömlig atmosfär som ingen annan instrument kan matcha.",
    rating: 5.0,
    imageGradient: "from-[#C9A96E]/40 to-[#D4A5A5]/20",
    website: "https://harpaskane.se",
    editorsPick: true,
  },
  {
    id: "hp-2",
    name: "Cecilia Engström — Harpist",
    type: "harpa",
    genre: "Klassisk musik, keltisk harpa",
    location: "Malmö",
    priceRange: "€€€",
    description:
      "Utbildad vid Musikhögskolan i Malmö med specialisering på keltisk och klassisk harpa. Elegant repertoar för den formella ceremonin.",
    rating: 4.7,
    imageGradient: "from-[#D4A5A5]/30 to-[#9CAF88]/20",
  },
  {
    id: "hp-3",
    name: "Lunds Harpensemble",
    type: "harpa",
    genre: "Ensemble, klassiskt, filmmusik",
    location: "Lund",
    priceRange: "€€€",
    description:
      "En duo eller trio av harpister för den som vill ha extra volym och dramatik. Perfekt för större ceremonier och slottsbröllop.",
    rating: 4.6,
    imageGradient: "from-[#9CAF88]/30 to-[#C9A96E]/20",
  },
];

export const soloartistProviders: MusicProvider[] = [
  {
    id: "sa-1",
    name: "Anna Lindqvist - Pianist & Sångerska",
    type: "soloartist",
    genre: "Akustisk pop, bröllopssånger, jazzstandards",
    location: "Simrishamn",
    priceRange: "€€",
    description:
      "Varm röst och känslig pianotolkning. Perfekt för ceremoni, mottagning eller som bakgrundsmusik under middagen.",
    rating: 4.8,
    imageGradient: "from-[#9CAF88]/30 to-[#C9A96E]/20",
  },
  {
    id: "sa-2",
    name: "Johan Eriksson - Gitarrist",
    type: "soloartist",
    genre: "Flamenco, bossa nova, akustisk pop",
    location: "Ystad",
    priceRange: "€€",
    description:
      "Upphittad gitarrist med repertoar från latinamerikanska klassiker till svensk vis. Skapar avslappnad stämning.",
    rating: 4.7,
    imageGradient: "from-[#C9A96E]/30 to-[#D4A5A5]/20",
  },
];

export const firstDanceSongs: Song[] = [
  { id: "fd-1", artist: "Ed Sheeran", title: "Perfect" },
  { id: "fd-2", artist: "John Legend", title: "All of Me" },
  { id: "fd-3", artist: "Eva Dahlgren", title: "Ängeln i rummet" },
  { id: "fd-4", artist: "Adele", title: "Make You Feel My Love" },
  { id: "fd-5", artist: "Lana Del Rey", title: "Young and Beautiful" },
  { id: "fd-6", artist: "Ben E. King", title: "Stand By Me" },
  { id: "fd-7", artist: "The Weeknd", title: "Earned It" },
  { id: "fd-8", artist: "Amy Winehouse", title: "Valerie" },
  { id: "fd-9", artist: "Seal", title: "Kiss from a Rose" },
  { id: "fd-10", artist: "Justin Timberlake", title: "Mirrors" },
];

export const partySongs: Song[] = [
  { id: "ps-1", artist: "ABBA", title: "Dancing Queen" },
  { id: "ps-2", artist: "Veronica Maggio", title: "Jag kommer" },
  { id: "ps-3", artist: "Roxette", title: "The Look" },
  { id: "ps-4", artist: "Björn Afzelius", title: "Du är min man" },
  { id: "ps-5", artist: "Robyn", title: "Dancing On My Own" },
  { id: "ps-6", artist: "Ace of Base", title: "All That She Wants" },
  { id: "ps-7", artist: "Rag'n'Bone Man", title: "Human" },
  { id: "ps-8", artist: "The Killers", title: "Mr. Brightside" },
  { id: "ps-9", artist: "Dua Lipa", title: "Levitating" },
  { id: "ps-10", artist: "Lorde", title: "Royals" },
];

export const entertainmentIdeas: EntertainmentIdea[] = [
  {
    id: "ei-1",
    title: "Fotoautomat/Photobooth",
    description:
      "Gästerna får roliga bilder med props och rekvisita. Perfekt för mingelstunden och som minne för gästerna.",
    priceLevel: "Medel",
    imageGradient: "from-[#D4A5A5]/30 to-[#C9A96E]/20",
  },
  {
    id: "ei-2",
    title: "Fyrverkeri",
    description:
      "Avsluta kvällen med ett spektakulärt fyrverkeri. En magisk upplevelse som gästerna kommer minnas länge.",
    priceLevel: "Hög",
    imageGradient: "from-[#C9A96E]/30 to-[#D4A5A5]/20",
  },
  {
    id: "ei-3",
    title: "Bröllopsspel & Lekar",
    description:
      "Klassiska bröllopsspel som 'Hur väl känner ni varandra?' eller moderna lekar. Skapar gemenskap och skratt.",
    priceLevel: "Låg",
    imageGradient: "from-[#9CAF88]/30 to-[#D4A5A5]/20",
  },
  {
    id: "ei-4",
    title: "Magiker",
    description:
      "Nära magi och illusioner som fascinerar gästerna under mingelstunden. Underhållning för alla åldrar.",
    priceLevel: "Medel",
    imageGradient: "from-[#D4A5A5]/20 to-[#9CAF88]/30",
  },
  {
    id: "ei-5",
    title: "Karaoke",
    description:
      "Låt gästerna sjunga sina hjärtans låtar! Perfekt för den festliga avslutningen.",
    priceLevel: "Medel",
    imageGradient: "from-[#C9A96E]/20 to-[#9CAF88]/30",
  },
  {
    id: "ei-6",
    title: "Silent Disco",
    description:
      "Gästerna dansar med trådlösa hörlurar. Perfekt för utomhusbröllop eller sena kvällar när ljudnivån måste sänkas.",
    priceLevel: "Hög",
    imageGradient: "from-[#9CAF88]/20 to-[#C9A96E]/30",
  },
];

export const weddingMusicSchedule = [
  { time: "14:00", title: "Ceremonimusik", description: "Harpa, stråkkvartett eller piano under vigseln — harpa är det mest eftertraktade valet för en magisk ceremoni" },
  {
    time: "15:30",
    title: "Cocktailmusik",
    description: "Lättsam bakgrundsmusik — harpa eller jazz skapar en elegant mingel-stämning",
  },
  {
    time: "17:00",
    title: "Middag — bakgrundsmusik",
    description: "Diskret musik som inte stör samtalet — harpa eller piano i bakgrunden",
  },
  { time: "20:00", title: "Första dansen", description: "Er speciella låt som nygifta par" },
  {
    time: "20:30",
    title: "Fest & dans",
    description: "Liveband eller DJ får igång festen",
  },
  { time: "01:00", title: "Sista dansen", description: "Traditionell sista låt innan klubbstängning" },
];