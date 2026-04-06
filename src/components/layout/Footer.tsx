"use client";

import React from "react";
import Link from "next/link";

const footerLinks = {
  guiden: [
    { href: "/lokaler", label: "Bröllopslokaler" },
    { href: "/mode", label: "Mode & Klänningar" },
    { href: "/blommor", label: "Blommor" },
    { href: "/musik", label: "Musik" },
  ],
  planering: [
    { href: "/mat", label: "Mat & Tårta" },
    { href: "/planering", label: "Planeringsguide" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1E1E1E] text-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A5A5]/30 to-transparent" />
      <div className="absolute top-0 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-[#D4A5A5]/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 translate-y-1/2 rounded-full bg-[#C9A96E]/3 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="block">
              <span className="text-2xl font-serif text-white">
                Bröllopsguiden<span className="font-script text-[#D4A5A5]"> Skåne</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Din kompletta guide till det perfekta bröllopet i Skåne. Vi hjälper er hitta allt ni
              behöver för att göra ert bröllop till en oförglömlig upplevelse.
            </p>
          </div>

          <div>
            <h3 className="mb-6 font-serif text-lg text-white/90">Bröllopsguiden</h3>
            <ul className="space-y-3.5">
              {footerLinks.guiden.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-gray-400 transition-colors duration-300 hover:translate-x-1 hover:text-[#D4A5A5]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-serif text-lg text-white/90">Planering</h3>
            <ul className="space-y-3.5">
              {footerLinks.planering.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-gray-400 transition-colors duration-300 hover:translate-x-1 hover:text-[#D4A5A5]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-serif text-lg text-white/90">Nyhetsbrev</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Prenumerera på vårt nyhetsbrev för att få de senaste bröllopstrenderna och tipsen.
            </p>
          </div>
        </div>

        <div className="my-14 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-xs tracking-wide text-gray-500">
              © 2026 Bröllopsguiden Skåne - Alla rättigheter förbehållna
            </p>
            <a
              href="https://harpaskane.se"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs tracking-wide text-gray-400 transition-colors duration-300 hover:text-[#D4A5A5]"
            >
              Harpaskane.se
            </a>
          </div>
          <div className="flex gap-8 text-xs tracking-wide">
            <Link href="/" className="text-gray-500 transition-colors duration-300 hover:text-[#D4A5A5]">
              Integritetspolicy
            </Link>
            <Link href="/" className="text-gray-500 transition-colors duration-300 hover:text-[#D4A5A5]">
              Användarvillkor
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
