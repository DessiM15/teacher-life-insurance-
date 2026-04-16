"use client";

import {
  AlertCircle,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const cards = [
  {
    icon: AlertCircle,
    text: "TRS Pension stops at death. Your family gets nothing after you're gone — your pension only pays while you're alive.",
  },
  {
    icon: Users,
    text: "Group life through your district is typically 1× salary — rarely enough to cover a mortgage, childcare, and daily expenses.",
  },
  {
    icon: TrendingUp,
    text: "The earlier you lock in life insurance, the lower your premium — and that rate stays locked for life.",
  },
];

export default function WhyLifeInsurance() {
  useScrollReveal();

  const scrollToForm = () => {
    document
      .getElementById("lead-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ backgroundColor: "#FFFFFF" }}>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left — Text Content */}
          <div className="reveal-left">
            <span
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#C9A040" }}
            >
              The Reality for Educators
            </span>

            <h2
              className="mb-4 font-extrabold"
              style={{
                color: "#0A2D5A",
                fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                lineHeight: 1.2,
              }}
            >
              Your Pension Is Not Life Insurance. Your Family Needs Both.
            </h2>

            <p
              className="mb-6 leading-relaxed"
              style={{
                color: "#334155",
                fontSize: "1.125rem",
                fontFamily: "var(--font-serif)",
              }}
            >
              Texas teachers have one of the best pension systems in the country
              — but a pension only pays while you&apos;re alive. If something
              happened to you tomorrow, your family would lose your income
              immediately. TRS does not provide life insurance benefits to your
              dependents.
            </p>

            <p
              className="mb-6 leading-relaxed"
              style={{
                color: "#334155",
                fontSize: "1.125rem",
                fontFamily: "var(--font-serif)",
              }}
            >
              The average Texas teacher salary is around $57,000. That income
              disappearing overnight would be devastating for most families —
              yet most teachers either have no coverage or rely solely on a
              small employer-provided group policy that ends the day they leave
              their job.
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
              See how affordable real coverage can be
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right — Stat Cards */}
          <div className="flex flex-col gap-5">
            {cards.map((card, i) => (
              <div
                key={i}
                className="reveal-right flex items-start gap-4 rounded-2xl bg-white p-5"
                style={{
                  boxShadow: "0 2px 20px rgba(20,79,143,0.08)",
                  borderLeft: "4px solid #C9A040",
                  transitionDelay: `${i * 0.15}s`,
                }}
              >
                <card.icon
                  size={24}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#C9A040" }}
                />
                <p
                  className="leading-relaxed"
                  style={{ color: "#334155", fontSize: "0.95rem" }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
