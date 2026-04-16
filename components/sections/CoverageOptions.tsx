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

const plans = [
  {
    icon: Clock,
    title: "Term Life Insurance",
    description:
      "Affordable coverage for a set period — 10, 20, or 30 years. Lock in low rates while you're young. Ideal for covering mortgages, kids' education, and income replacement.",
  },
  {
    icon: ShieldCheck,
    title: "Whole Life Insurance",
    description:
      "Permanent coverage that never expires. Builds cash value over time that you can borrow against. Guaranteed death benefit for your beneficiaries.",
  },
  {
    icon: Layers,
    title: "Universal Life Insurance",
    description:
      "Flexible permanent coverage with adjustable premiums and death benefits. Accumulates cash value with potential for higher returns.",
  },
  {
    icon: Heart,
    title: "Final Expense Insurance",
    description:
      "Smaller, affordable policies designed to cover funeral costs, medical bills, and end-of-life expenses. No medical exam required in most cases.",
  },
  {
    icon: UserPlus,
    title: "Group Life Supplement",
    description:
      "Your district's group policy may only cover 1× your salary. Supplement it with an individual policy that stays with you — even if you change jobs.",
  },
  {
    icon: CheckCircle2,
    title: "Guaranteed Issue Life",
    description:
      "No health questions, no medical exams. Guaranteed acceptance regardless of pre-existing conditions. Coverage starts immediately.",
  },
];

export default function CoverageOptions() {
  useScrollReveal();

  return (
    <section
      id="coverage"
      className="scroll-mt-20"
      style={{ backgroundColor: "#F8FAFD" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#C9A040" }}
          >
            Coverage Options
          </span>
          <h2
            className="mb-4 font-extrabold"
            style={{
              color: "#0A2D5A",
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              lineHeight: 1.2,
            }}
          >
            Life Insurance Plans Built for Educators
          </h2>
          <p
            className="mx-auto max-w-xl leading-relaxed"
            style={{ color: "#334155", fontSize: "1.05rem" }}
          >
            We shop multiple carriers to find the best coverage at the best rate
            for your situation. Here are the types of plans available to you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.title}
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

              <plan.icon
                size={36}
                className="mb-4"
                style={{ color: "#144F8F" }}
              />
              <h3
                className="mb-3 text-lg font-bold"
                style={{ color: "#0A2D5A" }}
              >
                {plan.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#334155" }}
              >
                {plan.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
