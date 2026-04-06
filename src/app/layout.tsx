import type { Metadata } from "next";

import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ToastProvider } from "@/components/ui/Toast";
import { createMetadata, getOrganizationJsonLd, getWebsiteJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  ...createMetadata({
    title: siteConfig.defaultTitle,
    description:
      "Planera ert bröllop i Skåne med guider till lokaler, bröllopsmusik, florister, bröllopsmode, catering och checklistor. Upptäck även Harpa Skåne för levande musik till vigsel och mingel.",
    path: "/",
    image: "/brittney-weng-IHFGvbBekOk-unsplash.jpg",
    keywords: [
      "bröllopsguiden Skåne",
      "bröllopsleverantörer Skåne",
      "bröllopsinspiration Malmö",
      "bröllopsinspiration Lund",
      "Harpa Skåne",
    ],
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = getWebsiteJsonLd();
  const organizationJsonLd = getOrganizationJsonLd();

  return (
    <html lang="sv">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ToastProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
