"use client";

import { Shield, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ backgroundColor: "#0A2D5A" }}
      >
        <source src="/life-insurance-hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay — darker navy tint */}
      <div
        className="absolute inset-0"
        style={{
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
        className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6"
        style={{ paddingTop: "120px", paddingBottom: "100px" }}
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
          className="hero-fade-up font-extrabold leading-tight tracking-tight max-w-4xl mx-auto"
          style={{
            color: "#FFFFFF",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            lineHeight: "1.1",
            marginBottom: "24px",
            animationDelay: "0.2s",
          }}
        >
          Your Family Deserves Protection.{" "}
          A Teacher&apos;s Salary Deserves a Smart Plan.
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
          className="hero-fade-up max-w-2xl mx-auto leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            marginBottom: "40px",
            animationDelay: "0.4s",
          }}
        >
          Less than half of Americans have life insurance. Most teachers assume
          they can&apos;t afford it. We&apos;re here to prove them wrong — with
          plans starting at less than the cost of a daily coffee.
        </p>

        {/* CTA Button */}
        <div
          className="hero-fade-up"
          style={{ marginBottom: "32px", animationDelay: "0.5s" }}
        >
          <button
            onClick={scrollToForm}
            style={{
              background: "#C9A040",
              color: "#0A2D5A",
              padding: "18px 56px",
              fontSize: "1.125rem",
              fontWeight: "800",
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
            Get My Free Quote →
          </button>
        </div>

        {/* Trust Strip */}
        <div
          className="hero-fade-up flex flex-wrap justify-center gap-6"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            "Multi-Carrier Access",
            "No Medical Exam Options",
            "Free Consultation",
          ].map((item, i) => (
            <span
              key={item}
              className="flex items-center gap-2"
              style={{
                color: "rgba(255,255,255,0.70)",
                fontSize: "0.875rem",
              }}
            >
              {i > 0 && (
                <span
                  className="hidden sm:inline"
                  style={{ color: "rgba(255,255,255,0.3)", marginRight: "4px" }}
                >
                  •
                </span>
              )}
              ✓ {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown
          size={32}
          className="hero-bounce"
          style={{ color: "rgba(255,255,255,0.45)" }}
        />
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z"
            fill="#F8FAFD"
          />
        </svg>
      </div>
    </section>
  );
}
