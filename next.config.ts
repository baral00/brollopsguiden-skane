import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "sorgardenevent.se",
      },
      {
        protocol: "https",
        hostname: "elisefarm.se",
      },
      {
        protocol: "https",
        hostname: "bjarsjolagardsslott.se",
      },
      {
        protocol: "https",
        hostname: "www.kronovall.se",
      },
      {
        protocol: "https",
        hostname: "maryhillestate.com",
      },
      {
        protocol: "https",
        hostname: "images.bookvisit.com",
      },
    ],
  },
};

export default nextConfig;
