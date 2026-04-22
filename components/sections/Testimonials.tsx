"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "I had no idea how affordable life insurance could be. Rigo walked me through everything, and I ended up with a 20-year term policy for less than $30 a month. My family is finally protected.",
    name: "Maria G.",
    role: "4th Grade Teacher, Prosper ISD",
    initials: "MG",
  },
  {
    quote:
      "As a single mom and teacher, I always thought life insurance was out of my budget. New Horizons found me a policy I could actually afford. The peace of mind is priceless.",
    name: "Jessica T.",
    role: "High School English, Frisco ISD",
    initials: "JT",
  },
  {
    quote:
      "I was relying on my district's group policy — turns out it was only $57,000. Rigo helped me get additional coverage that actually matches what my family would need. Wish I'd done it sooner.",
    name: "David R.",
    role: "AP History Teacher, McKinney ISD",
    initials: "DR",
  },
];

export default function Testimonials() {
  useScrollReveal();

  return (
    <section
      id="testimonials"
      className="scroll-mt-20"
      style={{ backgroundColor: "#F1F5F9" }}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#C9A040" }}
          >
            What Teachers Are Saying
          </span>
          <h2
            className="mb-4 font-extrabold"
            style={{
              color: "#0A2D5A",
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              lineHeight: 1.2,
            }}
          >
            Real Educators. Real Protection.
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal relative rounded-2xl bg-white p-8 transition-all duration-300"
              style={{
                boxShadow: "0 2px 20px rgba(20,79,143,0.08)",
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(20,79,143,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 20px rgba(20,79,143,0.08)";
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={18}
                    fill="#C9A040"
                    style={{ color: "#C9A040" }}
                  />
                ))}
              </div>

              {/* Decorative Quote Mark */}
              <span
                className="absolute top-6 right-8 select-none"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "5rem",
                  lineHeight: 1,
                  color: "rgba(201,160,64,0.12)",
                }}
              >
                &ldquo;
              </span>

              {/* Quote */}
              <p
                className="mb-6 relative z-10 leading-relaxed"
                style={{
                  color: "#334155",
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "#E8F0FA",
                  marginBottom: "16px",
                }}
              />

              {/* Author */}
              <div className="flex items-center gap-3">
                <Image
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.initials)}&background=144F8F&color=C9A040&bold=true&size=80`}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#0A2D5A" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#64748B" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
