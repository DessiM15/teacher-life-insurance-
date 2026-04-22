"use client";

import { useRef, useEffect } from "react";
import {
  HeartPulse,
  Flame,
  TrendingDown,
  Wallet,
  PiggyBank,
  Users,
  Home,
  ShieldCheck,
} from "lucide-react";

const threats = [
  { icon: HeartPulse, label: "Critical Illness" },
  { icon: Flame, label: "Burnout" },
  { icon: TrendingDown, label: "Income Loss" },
];

const assets = [
  { icon: Wallet, label: "Salary" },
  { icon: PiggyBank, label: "Pension" },
  { icon: Users, label: "Family" },
  { icon: Home, label: "Home" },
  { icon: ShieldCheck, label: "Savings" },
];

export default function ProtectionDome() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    el.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((child) =>
      observer.observe(child)
    );
    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(180deg, #0A2D5A 0%, #0E3A6E 100%)",
        padding: "72px 24px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Header ── */}
      <div className="reveal" style={{ maxWidth: 750, margin: "0 auto", textAlign: "center" }}>
        <span
          style={{
            color: "#C9A040",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontFamily: "var(--font-mono)",
            display: "block",
            marginBottom: 16,
          }}
        >
          LIVING BENEFITS
        </span>

        <h2
          style={{
            color: "#FFFFFF",
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          Protection That Works While You&apos;re Still Teaching
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "1.15rem",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            maxWidth: 600,
            margin: "0 auto 32px",
            lineHeight: 1.6,
          }}
        >
          Life insurance that pays you benefits while you&apos;re alive — not just after.
        </p>
      </div>

      {/* ── Mobile Threat Pills ── */}
      <div
        className="mobile-benefit-pills reveal"
        style={{
          display: "none",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
          marginBottom: 24,
        }}
      >
        {threats.map((t) => (
          <span
            key={t.label}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              borderRadius: 999,
              background: "rgba(10, 45, 90, 0.9)",
              border: "1px solid rgba(201, 160, 64, 0.5)",
              color: "#C9A040",
              padding: "8px 16px",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            <t.icon size={14} />
            {t.label}
          </span>
        ))}
      </div>

      {/* ── Dome Visual ── */}
      <div
        className="dome-container reveal"
        style={{
          position: "relative",
          maxWidth: 860,
          margin: "0 auto",
          paddingBottom: "44%",
        }}
      >
        {/* Radial backdrop glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 90% at 50% 100%, rgba(20,79,143,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Outer glow ring */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "2%",
            right: "2%",
            height: "100%",
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
            border: "2px solid rgba(100, 150, 220, 0.18)",
            borderBottom: "none",
            pointerEvents: "none",
          }}
        />

        {/* Main dome */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "5%",
            right: "5%",
            height: "95%",
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
            background:
              "linear-gradient(180deg, rgba(20,79,143,0.18) 0%, rgba(20,79,143,0.08) 60%, rgba(20,79,143,0.03) 100%)",
            border: "2px solid rgba(100, 150, 220, 0.25)",
            borderBottom: "none",
            overflow: "hidden",
          }}
        >
          {/* Inner shimmer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 60% 80% at 50% 20%, rgba(100,150,220,0.06) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Ground line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background:
              "linear-gradient(90deg, transparent, rgba(100,150,220,0.35), transparent)",
          }}
        />

        {/* ── Desktop Threat Pills ── */}
        {threats.map((t, i) => {
          const positions = [
            { left: "-2%", bottom: "50%", transform: "none" },
            { left: "50%", bottom: "93%", transform: "translateX(-50%)" },
            { right: "-2%", bottom: "50%", transform: "none" },
          ];
          const pos = positions[i];
          return (
            <span
              key={t.label}
              className="desktop-benefit-pill"
              style={{
                position: "absolute",
                ...pos,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                borderRadius: 999,
                background: "rgba(10, 35, 70, 0.92)",
                border: "1px solid rgba(201, 160, 64, 0.45)",
                color: "#C9A040",
                padding: "10px 20px",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                whiteSpace: "nowrap",
                zIndex: 5,
              }}
            >
              <t.icon size={16} />
              {t.label}
            </span>
          );
        })}

        {/* ── Protected Assets (inside dome) ── */}
        <div
          style={{
            position: "absolute",
            bottom: "8%",
            left: "14%",
            right: "14%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            zIndex: 2,
          }}
        >
          {assets.map((a, i) => (
            <div
              key={a.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <a.icon
                className="dome-asset-icon dome-float"
                size={44}
                strokeWidth={1.5}
                style={{
                  color: "rgba(255,255,255,0.75)",
                  animationDelay: `${i * 0.3}s`,
                }}
              />
              <span
                className="dome-asset-label"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 700,
                }}
              >
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA Button ── */}
      <div className="reveal" style={{ textAlign: "center", marginTop: 32, paddingBottom: 48 }}>
        <button
          onClick={scrollToForm}
          style={{
            background: "#C9A040",
            color: "#0A2D5A",
            padding: "16px 48px",
            fontWeight: 800,
            borderRadius: 14,
            border: "none",
            fontSize: "1.05rem",
            cursor: "pointer",
            boxShadow: "0 6px 28px rgba(201,160,64,0.50)",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#A07C20")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A040")}
        >
          See What You Qualify For →
        </button>
      </div>

      {/* ── Bottom SVG Wave ── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: 64, display: "block" }}
        >
          <path
            d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z"
            fill="#E8F0FA"
          />
        </svg>
      </div>

      {/* ── Responsive Styles ── */}
      <style jsx>{`
        @media (max-width: 768px) {
          .dome-container {
            max-width: 420px !important;
            padding-bottom: 55% !important;
          }
          .mobile-benefit-pills {
            display: flex !important;
          }
          .desktop-benefit-pill {
            display: none !important;
          }
          .dome-asset-icon {
            width: 28px !important;
            height: 28px !important;
          }
          .dome-asset-label {
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </section>
  );
}
