import {
  accessoriesTrends,
  bridalDressTrends,
  bridesmaidTrends,
  groomSuitTrends,
  shopsInSkane,
} from "@/data/fashion";
import { venues } from "@/data/venues";

type TrendRecord = {
  id: string;
  title: string;
  description: string;
  imageGradient: string;
};

type ShopRecord = {
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
};

const bridalTrends = bridalDressTrends as TrendRecord[];
const bridesmaidTrendRecords = bridesmaidTrends as TrendRecord[];
const shops = shopsInSkane as ShopRecord[];
const accessoryTrendRecords = accessoriesTrends as TrendRecord[];
const suitTrends = groomSuitTrends as TrendRecord[];

export const trendImages: Record<string, string> = {
  "bk-1": "https://unsplash.com/photos/T3EzSfky_54/download?force=true&w=1400",
  "bk-2": "https://unsplash.com/photos/t3sYKMnFuPo/download?force=true&w=1400",
  "bk-3": "https://unsplash.com/photos/71QC0HH6sKc/download?force=true&w=1400",
  "bk-4": "https://unsplash.com/photos/NTF2RJLriO4/download?force=true&w=1400",
  "bk-5": "https://unsplash.com/photos/GdvQhGsPcdM/download?force=true&w=1400",
  "bk-6": "https://unsplash.com/photos/kNTdzGqzsyk/download?force=true&w=1400",
  "k-1": "https://unsplash.com/photos/HIlZn3omhI8/download?force=true&w=1400",
  "k-2": "https://unsplash.com/photos/UR-aK6OytaA/download?force=true&w=1400",
  "k-3": "https://unsplash.com/photos/36sW6aPNO1g/download?force=true&w=1400",
  "k-4": "https://unsplash.com/photos/JLEWUWiOmNE/download?force=true&w=1400",
  "bt-1": "https://unsplash.com/photos/ssH6tQLXCio/download?force=true&w=1400",
  "bt-2": "https://unsplash.com/photos/P_yn7-tkLQg/download?force=true&w=1400",
  "bt-3": "https://unsplash.com/photos/FJQdsE-MByw/download?force=true&w=1400",
  "bt-4": "https://unsplash.com/photos/kNTdzGqzsyk/download?force=true&w=1400",
  "a-1": "https://images.unsplash.com/photo-1727252586975-578c9122ec95?auto=format&fit=crop&fm=jpg&q=80&w=1600",
  "a-2": "https://images.unsplash.com/photo-1680519599730-ea5372f2c2f6?auto=format&fit=crop&fm=jpg&q=80&w=1600",
  "a-3": "https://unsplash.com/photos/P7xCIBlFoU8/download?force=true&w=1400",
  "a-4": "https://unsplash.com/photos/StuHe2EB004/download?force=true&w=1400",
};

export const fallbackTrendImage =
  "https://unsplash.com/photos/Ye_4r7EbsJw/download?force=true&w=1400";

export const allFashionTrends = [
  ...bridalTrends,
  ...suitTrends,
  ...bridesmaidTrendRecords,
  ...accessoryTrendRecords,
];

export const venueImages: Record<string, string> = {
  "venue-1":
    "https://static.wixstatic.com/media/23b523_36d18caa4000441aa676bbbe720a15f2%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/23b523_36d18caa4000441aa676bbbe720a15f2%7Emv2.jpg",
  "venue-2":
    "https://images.unsplash.com/photo-1762216444919-043cf813e4de?auto=format&fit=crop&fm=jpg&q=80&w=2400",
  "venue-3":
    "https://images.squarespace-cdn.com/content/v1/5c59f12f94d71aa426beb1e6/1695118543760-93KD6Q07DGRM8Z39E8KA/brollop-bosjokloster.jpg",
  "venue-4":
    "https://static.wixstatic.com/media/8f2c96_bc576ba15f0042e5a0d066fa04a9fb51~mv2.jpeg/v1/fill/w_490%2Ch_327%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/8f2c96_bc576ba15f0042e5a0d066fa04a9fb51~mv2.jpeg",
  "venue-5":
    "https://sorgardenevent.se/images/0355red.jpg",
  "venue-6":
    "https://bjarsjolagardsslott.se/wp-content/uploads/sites/19/2018/02/Brudpar_huvud_1.jpg",
  "venue-7":
    "https://www.kronovall.se/wp-content/uploads/2023/11/2BridesPhotography_Kronovalls_Vinslott_013.jpg",
  "venue-8":
    "https://maryhillestate.com/wp-content/uploads/2024/09/maryhill-og.jpg",
  "venue-9":
    "https://images.bookvisit.com/img/971500a3-b268-4e3a-9ce8-77ada02d5fc6.jpg?scale=stretch&width=1620&height=1080",
  "venue-10":
    "https://static.wixstatic.com/media/844cd5_8fc5c6d9536140158229521d0438c100~mv2.jpg/v1/fill/w_2500,h_1668,al_c/844cd5_8fc5c6d9536140158229521d0438c100~mv2.jpg",
};

export const venuePriceRanges = [
  { value: 1, label: "Låg", symbol: "€" },
  { value: 2, label: "Medel", symbol: "€€" },
  { value: 3, label: "Hög", symbol: "€€€" },
] as const;

export function getFashionTrendById(trendId: string) {
  return allFashionTrends.find((trend) => trend.id === trendId);
}

export function getShopById(shopId: string) {
  return shops.find((shop) => shop.id === shopId);
}

export function getFashionCategoryLabel(trendId: string) {
  if (trendId.startsWith("bk-")) return "Brudklänningar";
  if (trendId.startsWith("k-")) return "Kostymer & Frackar";
  if (trendId.startsWith("bt-")) return "Brudtärnor";
  if (trendId.startsWith("a-")) return "Accessoarer";
  return "Bröllopsmode";
}

export function getVenueById(venueId: string) {
  return venues.find((venue) => venue.id === venueId);
}

export function getVenueImageById(venueId: string) {
  return venueImages[venueId] ?? fallbackTrendImage;
}
