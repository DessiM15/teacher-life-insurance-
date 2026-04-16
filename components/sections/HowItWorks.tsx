"use client";

import { Phone, BarChart3, ShieldCheck } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "1",
    icon: Phone,
    title: "Free Consultation",
    description:
      "Tell us about your family, your goals, and your budget. We'll ask the right questions so we can find the right fit — no pressure, no obligation.",
  },
  {
    number: "2",
    icon: BarChart3,
    title: "Compare Plans",
    description:
      "We shop multiple A-rated carriers to find you the best coverage at the best rate. You'll see clear options side by side — no confusing jargon.",
  },
  {
    number: "3",
    icon: ShieldCheck,
    title: "Get Covered",
    description:
      "Easy application, fast approval. Many plans require no medical exam. Coverage can be active in days — not weeks. Your family is protected.",
  },
];

export default function HowItWorks() {
  useScrollReveal();

  return (
    <section
      id="how-it-works"
      className="scroll-mt-20"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#C9A040" }}
          >
            How It Works
          </span>
          <h2
            className="mb-4 font-extrabold"
            style={{
              color: "#0A2D5A",
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              lineHeight: 1.2,
            }}
          >
            Three Simple Steps to Peace of Mind
          </h2>
          <p
            className="mx-auto max-w-xl leading-relaxed"
            style={{ color: "#334155", fontSize: "1.05rem" }}
          >
            We make getting life insurance as easy as possible — so you can focus
            on what matters most.
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

          {steps.map((step, i) => (
            <div
              key={step.number}
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
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <step.icon
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
          ))}
        </div>
      </div>
    </section>
  );
}
