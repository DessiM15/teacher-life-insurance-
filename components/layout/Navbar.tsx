"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Coverage", href: "#coverage" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(10,45,90,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo + Company Name */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <div
            className={`transition-all duration-300 rounded-lg overflow-hidden ${
              scrolled ? "bg-white shadow-sm p-1" : ""
            }`}
          >
            <Image
              src="/new-horizons-logo.jpg"
              alt="New Horizons Benefits Group"
              width={64}
              height={64}
              className="h-12 w-auto object-contain"
              style={{ mixBlendMode: "multiply" }}
              priority
            />
          </div>
          <span
            className={`hidden sm:block text-sm font-bold transition-colors duration-300 ${
              scrolled ? "text-blue-dark" : "text-white"
            }`}
          >
            New Horizons Benefits Group
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-300 ${
                scrolled
                  ? "text-blue-dark hover:text-gold"
                  : "text-white hover:text-gold-light"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#lead-form"
            className="inline-block rounded-lg px-6 py-3 text-sm font-bold transition-all duration-300"
            style={{
              backgroundColor: "#C9A040",
              color: "#0A2D5A",
              boxShadow: "0 2px 12px rgba(201,160,64,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#A07C20";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#C9A040";
            }}
          >
            Check My Life Insurance Options
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X
              className={`h-7 w-7 transition-colors duration-300 ${
                scrolled ? "text-blue-dark" : "text-white"
              }`}
            />
          ) : (
            <Menu
              className={`h-7 w-7 transition-colors duration-300 ${
                scrolled ? "text-blue-dark" : "text-white"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`overflow-hidden bg-white shadow-lg transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-blue-dark transition-colors hover:bg-blue-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#lead-form"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-block rounded-lg px-6 py-3 text-center text-sm font-bold transition-colors"
            style={{
              backgroundColor: "#C9A040",
              color: "#0A2D5A",
            }}
          >
            Check My Life Insurance Options
          </a>
        </div>
      </div>
    </nav>
  );
}
