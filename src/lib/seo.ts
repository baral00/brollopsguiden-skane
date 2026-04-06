import type { Metadata } from "next";

export const siteConfig = {
  name: "Bröllopsguiden Skåne",
  alternateName: "Brollopsguiden Skane",
  description:
    "Bröllopsguiden Skåne hjälper er hitta bröllopslokaler, bröllopsmusik, florister, mode, mat och planeringstips för ett minnesvärt bröllop i Skåne.",
  defaultTitle:
    "Bröllopsguiden Skåne | Lokaler, musik, planering och inspiration för bröllop i Skåne",
  locale: "sv_SE",
  siteUrl: "https://brollopsguiden-skane.vercel.app",
  defaultImage: "/brittney-weng-IHFGvbBekOk-unsplash.jpg",
  defaultKeywords: [
    "bröllop Skåne",
    "bröllopsguide Skåne",
    "bröllopsplanering Skåne",
    "bröllopslokaler Skåne",
    "bröllopsmusik Skåne",
    "harpa",
    "harp",
    "harpa bröllop Skåne",
    "harpa Skåne",
    "Harpa Skåne",
    "harpaskane",
    "harpa skane",
    "harp skane",
    "harpaskane.se",
    "harpaskane.com",
    "wedding Skåne",
    "wedding Skane",
    "wedding music Skåne",
    "wedding music Skane",
    "wedding harp Skåne",
    "wedding harp Skane",
    "harpist Skåne",
    "harpist Skane",
    "harpist Malmö",
    "harpist Lund",
    "bröllopsinspiration Skåne",
    "vigselmusik Skåne",
    "brollopsguiden skane",
    "brollopsguiden-skane",
    "brollopsguiden-skane vercel",
  ],
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.siteUrl).toString();
}

type CreateMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
};

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
  image = siteConfig.defaultImage,
  type = "website",
}: CreateMetadataInput): Metadata {
  const fullTitle = title === siteConfig.defaultTitle ? title : `${title} | ${siteConfig.name}`;
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.defaultKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "wedding",
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}#website`,
    url: siteConfig.siteUrl,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    description: siteConfig.description,
    inLanguage: "sv-SE",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/harpa-skane-logo.png"),
    knowsAbout: [
      "Bröllop i Skåne",
      "Bröllopsmusik i Skåne",
      "Bröllopslokaler i Skåne",
      "Levande harpa",
      "Harpa Skåne",
    ],
  };
}

export function getMusicServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Bröllopsmusik med levande harpa",
    name: "Bröllopsmusik i Skåne med levande harpa",
    description:
      "Guide och inspiration för vigselmusik, mingelmusik och levande harpa i Skåne med tydlig väg vidare till Harpa Skåne.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Skåne",
    },
    provider: {
      "@type": "Organization",
      name: "Harpa Skåne",
      url: "https://harpaskane.se",
    },
    url: absoluteUrl("/musik"),
  };
}
