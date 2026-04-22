"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease-in-out",
        backgroundColor: scrolled ? "#FFFFFF" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(10,45,90,0.12)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
        className="h-[64px] md:h-[80px] md:px-6"
      >
        {/* Logo + Company Name */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0, textDecoration: "none" }}>
          <Image
            src="/logo-transparent.png"
            alt="New Horizons Benefits Group"
            width={400}
            height={400}
            className="h-[56px] w-[56px] md:h-[165px] md:w-[165px]"
            style={{
              objectFit: "contain",
            }}
            priority
          />
          <span
            className="hidden sm:block"
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              transition: "color 0.3s",
              color: scrolled ? "#0A2D5A" : "#FFFFFF",
            }}
          >
            New Horizons Benefits Group
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "32px" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                transition: "color 0.3s",
                color: scrolled ? "#0A2D5A" : "#FFFFFF",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A040")}
              onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? "#0A2D5A" : "#FFFFFF")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#lead-form"
            style={{
              display: "inline-block",
              backgroundColor: "#C9A040",
              color: "#0A2D5A",
              padding: "12px 24px",
              fontSize: "0.875rem",
              fontWeight: 700,
              borderRadius: "10px",
              textDecoration: "none",
              boxShadow: "0 2px 12px rgba(201,160,64,0.3)",
              transition: "background-color 0.3s",
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
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
        >
          {mobileOpen ? (
            <X size={28} style={{ color: scrolled ? "#0A2D5A" : "#FFFFFF", transition: "color 0.3s" }} />
          ) : (
            <Menu size={28} style={{ color: scrolled ? "#0A2D5A" : "#FFFFFF", transition: "color 0.3s" }} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className="md:hidden"
        style={{
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
          boxShadow: mobileOpen ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
          maxHeight: mobileOpen ? "320px" : "0",
          opacity: mobileOpen ? 1 : 0,
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "8px 24px 24px" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "12px 16px",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#0A2D5A",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E8F0FA")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#lead-form"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              marginTop: "12px",
              padding: "12px 24px",
              textAlign: "center",
              fontSize: "0.875rem",
              fontWeight: 700,
              backgroundColor: "#C9A040",
              color: "#0A2D5A",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            Check My Life Insurance Options
          </a>
        </div>
      </div>
    </nav>
  );
}
