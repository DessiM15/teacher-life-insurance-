"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Teacher Retirement", href: "#", current: false },
  { label: "Health Insurance", href: "#", current: false },
  { label: "Life Insurance", href: "#", current: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(15,63,122,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="relative shrink-0">
          <div
            className={`overflow-hidden rounded-full transition-all duration-300 ${
              scrolled ? "bg-transparent p-0" : "bg-white/90 p-1"
            }`}
          >
            <Image
              src="/new-horizons-logo.jpg"
              alt="New Horizons Benefits Group"
              width={160}
              height={48}
              className={`h-10 w-auto object-contain transition-all duration-300 ${
                scrolled ? "" : "rounded-full"
              }`}
              priority
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-300 ${
                link.current ? "border-b-2 border-gold pb-0.5" : ""
              } ${
                scrolled
                  ? "text-blue-dark hover:text-gold"
                  : "text-white hover:text-gold"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#quote"
            className="inline-block rounded-lg px-6 py-2.5 text-sm font-bold transition-all duration-300"
            style={{
              backgroundColor: "#C9A040",
              color: "#0F3F7A",
              boxShadow: "0 2px 12px rgba(201,160,64,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#A07C20";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#C9A040";
            }}
          >
            Get My Free Quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
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
        className={`overflow-hidden bg-white shadow-lg transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-semibold text-blue-dark transition-colors hover:bg-blue-light ${
                link.current ? "border-l-4 border-gold" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-block rounded-lg px-6 py-3 text-center text-sm font-bold transition-colors"
            style={{
              backgroundColor: "#C9A040",
              color: "#0F3F7A",
            }}
          >
            Get My Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
