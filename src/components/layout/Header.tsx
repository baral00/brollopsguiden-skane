"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-0"
          : "bg-white/70 backdrop-blur-sm py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-serif text-[#2C2C2C] group-hover:text-[#D4A5A5] transition-colors duration-300">
              Bröllopsguiden<span className="text-[#D4A5A5] font-script"> Skåne</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  pathname === link.href
                    ? "text-[#D4A5A5]"
                    : "text-[#2C2C2C]/70 hover:text-[#D4A5A5] hover:bg-[#D4A5A5]/5"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-[#D4A5A5] to-transparent"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-[#2C2C2C] hover:bg-[#D4A5A5]/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.nav
              id="mobile-navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-[#FDFBF7] shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-8">
                {/* Close + Logo */}
                <div className="flex items-center justify-between mb-10">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-xl font-serif text-[#2C2C2C]">
                      Bröllopsguiden<span className="text-[#D4A5A5] font-script"> Skåne</span>
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-xl hover:bg-[#D4A5A5]/10 transition-colors"
                    aria-label="Close menu"
                    type="button"
                  >
                    <X className="w-5 h-5 text-[#2C2C2C]" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                          pathname === link.href
                            ? "bg-[#D4A5A5]/10 text-[#D4A5A5] border-l-2 border-[#D4A5A5]"
                            : "text-[#2C2C2C]/70 hover:bg-[#D4A5A5]/5 hover:text-[#D4A5A5]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
