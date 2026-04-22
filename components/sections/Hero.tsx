"use client";

import { Shield, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/lib/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const ht = translations.hero;

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#0A2D5A",
        }}
      >
        <source src="/life-insurance-hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay — darker navy tint */}
      <div
        className="absolute inset-0"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(10,45,90,0.92) 0%, rgba(14,58,110,0.90) 50%, rgba(20,79,143,0.87) 100%)",
        }}
      />

      {/* SVG Wave Texture Overlays */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      >
        <path
          d="M0,300 C360,200 720,400 1440,250 L1440,900 L0,900 Z"
          fill="rgba(255,255,255,0.04)"
        />
        <path
          d="M0,500 C480,380 960,580 1440,420 L1440,900 L0,900 Z"
          fill="rgba(255,255,255,0.04)"
        />
        <path
          d="M0,650 C320,580 800,720 1440,600 L1440,900 L0,900 Z"
          fill="rgba(255,255,255,0.04)"
        />
      </svg>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-5 pt-[80px] pb-[60px] md:pt-[120px] md:pb-[100px] md:px-6"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        {/* Shield Icon */}
        <div
          className="hero-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <Shield
            size={56}
            style={{
              color: "#C9A040",
              filter: "drop-shadow(0 4px 12px rgba(201,160,64,0.4))",
              marginBottom: "24px",
            }}
          />
        </div>

        {/* Headline */}
        <h1
          className="hero-fade-up"
          style={{
            color: "#FFFFFF",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            lineHeight: "1.1",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            maxWidth: "56rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "24px",
            animationDelay: "0.2s",
          }}
        >
          {ht.headline[lang]}
        </h1>

        {/* Gold accent bar */}
        <div
          className="hero-fade-up"
          style={{
            height: "3px",
            width: "80px",
            background: "#C9A040",
            borderRadius: "999px",
            margin: "0 auto 28px",
            animationDelay: "0.3s",
          }}
        />

        {/* Subheadline */}
        <p
          className="hero-fade-up"
          style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            marginBottom: "40px",
            maxWidth: "42rem",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.7,
            animationDelay: "0.4s",
          }}
        >
          {ht.subheadline[lang]}
        </p>

        {/* CTA Button */}
        <div
          className="hero-fade-up"
          style={{ marginBottom: "32px", animationDelay: "0.5s" }}
        >
          <button
            onClick={scrollToForm}
            className="px-10 py-4 md:px-14 md:py-[18px] text-base md:text-lg"
            style={{
              background: "#C9A040",
              color: "#0A2D5A",
              fontWeight: 800,
              letterSpacing: "0.01em",
              borderRadius: "14px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 6px 28px rgba(201,160,64,0.50)",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#A07C20")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#C9A040")
            }
          >
            {ht.cta[lang]}
          </button>
        </div>

        {/* Trust Strip */}
        <div
          className="hero-fade-up"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
            animationDelay: "0.6s",
          }}
        >
          {ht.trust[lang].map((item) => (
            <span
              key={item}
              style={{
                color: "rgba(255,255,255,0.70)",
                fontSize: "0.875rem",
              }}
            >
              ✓ {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <ChevronDown
          size={32}
          className="hero-bounce"
          style={{ color: "rgba(255,255,255,0.45)" }}
        />
      </div>

      {/* Bottom Wave Transition */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "64px", display: "block" }}
        >
          <path
            d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z"
            fill="#0A2D5A"
          />
        </svg>
      </div>
    </section>
  );
}
