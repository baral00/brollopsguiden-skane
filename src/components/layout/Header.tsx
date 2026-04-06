"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/lokaler", label: "Lokaler" },
  { href: "/mode", label: "Mode" },
  { href: "/blommor", label: "Blommor" },
  { href: "/musik", label: "Musik" },
  { href: "/mat", label: "Mat & Tårta" },
  { href: "/planering", label: "Planering" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow || "";
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 py-0 shadow-md backdrop-blur-md"
            : "bg-white/70 py-1 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="group flex items-center gap-2" onClick={closeMenu}>
              <span className="text-xl font-serif text-[#2C2C2C] transition-colors duration-300 group-hover:text-[#D4A5A5] sm:text-2xl">
                Bröllopsguiden<span className="font-script text-[#D4A5A5]"> Skåne</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? "text-[#D4A5A5]"
                      : "text-[#2C2C2C]/70 hover:bg-[#D4A5A5]/5 hover:text-[#D4A5A5]"
                  }`}
                >
                  {link.label}
                  {pathname === link.href ? (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-[#D4A5A5] to-transparent"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  ) : null}
                </Link>
              ))}
            </nav>

            <button
              onClick={toggleMenu}
              className="relative z-[80] rounded-xl p-2.5 text-[#2C2C2C] transition-colors hover:bg-[#D4A5A5]/10 lg:hidden touch-manipulation"
              aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              type="button"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <>
          <button
            aria-label="Stäng mobilmeny"
            className="fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
            type="button"
          />

          <nav
            id="mobile-navigation"
            className="fixed inset-y-0 right-0 z-[70] w-[min(20rem,calc(100vw-1rem))] overflow-y-auto bg-[#FDFBF7] px-6 pb-8 pt-24 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? "border-l-2 border-[#D4A5A5] bg-[#D4A5A5]/10 text-[#D4A5A5]"
                      : "text-[#2C2C2C]/75 hover:bg-[#D4A5A5]/5 hover:text-[#D4A5A5]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </>
      ) : null}
    </>
  );
}
