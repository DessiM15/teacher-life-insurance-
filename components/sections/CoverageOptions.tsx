"use client";

import {
  Clock,
  ShieldCheck,
  Layers,
  Heart,
  UserPlus,
  CheckCircle2,
} from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/lib/translations";

const planIcons = [Clock, ShieldCheck, Layers, Heart, UserPlus, CheckCircle2];

export default function CoverageOptions() {
  useScrollReveal();
  const { lang } = useLanguage();
  const ct = translations.coverage;

  return (
    <section
      id="coverage"
      className="scroll-mt-20"
      style={{ backgroundColor: "#F8FAFD" }}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#C9A040" }}
          >
            {ct.label[lang]}
          </span>
          <h2
            className="mb-4 font-extrabold"
            style={{
              color: "#0A2D5A",
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              lineHeight: 1.2,
            }}
          >
            {ct.headline[lang]}
          </h2>
          <p
            className="mx-auto max-w-xl leading-relaxed"
            style={{ color: "#334155", fontSize: "1.05rem" }}
          >
            {ct.subheadline[lang]}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {planIcons.map((Icon, i) => (
            <div
              key={ct.plans[lang][i].title}
              className="reveal group relative rounded-2xl bg-white p-8 transition-all duration-300"
              style={{
                boxShadow: "0 2px 20px rgba(20,79,143,0.08)",
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(20,79,143,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 20px rgba(20,79,143,0.08)";
              }}
            >
              {/* Top Border Accent on Hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: "#C9A040" }}
              />

              <Icon
                size={36}
                className="mb-4"
                style={{ color: "#144F8F" }}
              />
              <h3
                className="mb-3 text-lg font-bold"
                style={{ color: "#0A2D5A" }}
              >
                {ct.plans[lang][i].title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#334155" }}
              >
                {ct.plans[lang][i].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
