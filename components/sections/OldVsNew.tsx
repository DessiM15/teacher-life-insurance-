"use client";

import { useRef, useEffect } from "react";
import { X as XIcon, Check } from "lucide-react";

const oldFeatures = [
  "Only pays out after death",
  "Covers just 1–2× your salary ($58K–$116K)",
  "No living benefits if you get sick",
  "Coverage ends the day you leave your district",
  "No cash value — years of premiums, nothing to show",
  "Rates increase as you age",
];

const newFeatures = [
  "Access benefits for critical, chronic, or terminal illness",
  "Coverage tailored to what your family actually needs",
  "Pays a lump sum you can use for anything",
  "Portable — stays with you no matter where you work",
  "Builds cash value over time",
  "Rates locked in at your current age",
];

export default function OldVsNew() {
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

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: "#E8F0FA", padding: "80px 24px" }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* ── Header ── */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
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
            OLD INSURANCE VS. NEW INSURANCE
          </span>

          <h2
            style={{
              color: "#0A2D5A",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Not All Benefits Plans Are Created Equal
          </h2>

          <p
            style={{
              color: "#64748B",
              fontSize: "1.1rem",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            See how modern living benefits compare to the coverage your district gives you.
          </p>
        </div>

        {/* ── Comparison Grid ── */}
        <div
          className="comparison-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {/* ── Left Card (Old / District Group Plan) ── */}
          <div
            className="reveal-left"
            style={{
              background: "#FFFFFF",
              borderRadius: 16,
              padding: "40px 32px",
              border: "1px solid #CBD5E1",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: "#94A3B8",
              }}
            />

            <h3
              style={{
                color: "#64748B",
                fontSize: "1.35rem",
                fontWeight: 800,
                marginBottom: 4,
              }}
            >
              District Group Plan
            </h3>
            <p
              style={{
                color: "#94A3B8",
                fontSize: "0.95rem",
                marginBottom: 28,
              }}
            >
              The default — minimal and outdated
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {oldFeatures.map((feature) => (
                <div
                  key={feature}
                  style={{ display: "flex", alignItems: "center", gap: 14 }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "rgba(239, 68, 68, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <XIcon size={16} style={{ color: "#EF4444" }} />
                  </div>
                  <span style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.5 }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Card (New / Modern Living Benefits) ── */}
          <div
            className="reveal-right"
            style={{
              background: "#FFFFFF",
              borderRadius: 16,
              padding: "40px 32px",
              border: "2px solid #C9A040",
              boxShadow: "0 4px 24px rgba(201, 160, 64, 0.15)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Gold gradient top bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: "linear-gradient(90deg, #C9A040, #E8C97A)",
              }}
            />

            {/* Recommended badge */}
            <div
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "linear-gradient(135deg, #C9A040, #E8C97A)",
                color: "#0A2D5A",
                fontSize: "0.7rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                padding: "6px 14px",
                borderRadius: 999,
              }}
            >
              Recommended
            </div>

            <h3
              style={{
                color: "#0A2D5A",
                fontSize: "1.35rem",
                fontWeight: 800,
                marginBottom: 4,
              }}
            >
              Modern Living Benefits
            </h3>
            <p
              style={{
                color: "#64748B",
                fontSize: "0.95rem",
                marginBottom: 28,
              }}
            >
              Protection that covers you while you&apos;re alive
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {newFeatures.map((feature) => (
                <div
                  key={feature}
                  style={{ display: "flex", alignItems: "center", gap: 14 }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "rgba(201, 160, 64, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={16} style={{ color: "#C9A040" }} />
                  </div>
                  <span style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.5 }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Responsive Styles ── */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .comparison-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
