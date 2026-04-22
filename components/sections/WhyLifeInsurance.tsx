"use client";

import {
  AlertCircle,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/lib/translations";

const icons = [AlertCircle, Users, TrendingUp];

export default function WhyLifeInsurance() {
  useScrollReveal();

  const { lang } = useLanguage();
  const t = translations.why;

  const scrollToForm = () => {
    document
      .getElementById("lead-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ backgroundColor: "#FFFFFF" }}>
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left — Text Content */}
          <div className="reveal-left">
            <span
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#C9A040" }}
            >
              {t.label[lang]}
            </span>

            <h2
              className="mb-4 font-extrabold"
              style={{
                color: "#0A2D5A",
                fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                lineHeight: 1.2,
              }}
            >
              {t.headline[lang]}
            </h2>

            <p
              className="mb-6 leading-relaxed"
              style={{
                color: "#334155",
                fontSize: "1.125rem",
                fontFamily: "var(--font-serif)",
              }}
            >
              {t.body1[lang]}
            </p>

            <p
              className="mb-6 leading-relaxed"
              style={{
                color: "#334155",
                fontSize: "1.125rem",
                fontFamily: "var(--font-serif)",
              }}
            >
              {t.body2[lang]}
            </p>

            <button
              onClick={scrollToForm}
              className="group flex items-center gap-2 border-0 bg-transparent font-semibold transition-all duration-300 hover:gap-3"
              style={{
                color: "#C9A040",
                fontSize: "1rem",
                cursor: "pointer",
                padding: 0,
              }}
            >
              {t.link[lang]}
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right — Stat Cards */}
          <div className="flex flex-col gap-5">
            {t.cards[lang].map((text, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={i}
                  className="reveal-right flex items-start gap-4 rounded-2xl bg-white p-5"
                  style={{
                    boxShadow: "0 2px 20px rgba(20,79,143,0.08)",
                    borderLeft: "4px solid #C9A040",
                    transitionDelay: `${i * 0.15}s`,
                  }}
                >
                  <Icon
                    size={24}
                    className="mt-0.5 shrink-0"
                    style={{ color: "#C9A040" }}
                  />
                  <p
                    className="leading-relaxed"
                    style={{ color: "#334155", fontSize: "0.95rem" }}
                  >
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
