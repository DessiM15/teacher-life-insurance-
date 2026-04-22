"use client";

import { Phone, BarChart3, ShieldCheck } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/lib/translations";

const stepIcons = [Phone, BarChart3, ShieldCheck];

export default function HowItWorks() {
  useScrollReveal();
  const { lang } = useLanguage();
  const ht = translations.how;

  return (
    <section
      id="how-it-works"
      className="scroll-mt-20"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#C9A040" }}
          >
            {ht.label[lang]}
          </span>
          <h2
            className="mb-4 font-extrabold"
            style={{
              color: "#0A2D5A",
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              lineHeight: 1.2,
            }}
          >
            {ht.headline[lang]}
          </h2>
          <p
            className="mx-auto max-w-xl leading-relaxed"
            style={{ color: "#334155", fontSize: "1.05rem" }}
          >
            {ht.subheadline[lang]}
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Dashed Connector Line (desktop only) */}
          <div
            className="hidden md:block absolute top-[28px] left-[16.67%] right-[16.67%]"
            style={{
              height: "2px",
              backgroundImage:
                "repeating-linear-gradient(90deg, #CBD5E1 0px, #CBD5E1 8px, transparent 8px, transparent 16px)",
            }}
          />

          {ht.steps[lang].map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div
                key={i}
                className="reveal relative flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Step Circle */}
                <div
                  className="relative z-10 mb-6 flex items-center justify-center rounded-full"
                  style={{
                    width: "56px",
                    height: "56px",
                    background:
                      "linear-gradient(135deg, #C9A040 0%, #E8C97A 100%)",
                    boxShadow: "0 4px 20px rgba(201,160,64,0.35)",
                  }}
                >
                  <span
                    style={{
                      color: "#0A2D5A",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 500,
                      fontSize: "1.25rem",
                    }}
                  >
                    {String(i + 1)}
                  </span>
                </div>

                {/* Icon */}
                <Icon
                  size={32}
                  className="mb-4"
                  style={{ color: "#144F8F" }}
                />

                {/* Title */}
                <h3
                  className="mb-3 text-lg font-bold"
                  style={{ color: "#0A2D5A" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed max-w-xs"
                  style={{ color: "#334155" }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
