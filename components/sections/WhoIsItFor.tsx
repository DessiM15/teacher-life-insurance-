"use client";

import { Heart, BookOpen, Building2 } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const cards = [
  {
    number: "01",
    icon: Heart,
    title: "Young Teachers Starting Families",
    body: "You just took on a mortgage, maybe had a child, and your income is everything. A term policy locks in low rates now and protects your family for 20–30 years.",
    hook: "What would happen to your family if your income disappeared tomorrow?",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Mid-Career Teachers Building Wealth",
    body: "You have more to protect now — a home, savings, kids in school. Permanent life insurance builds cash value while keeping your family covered.",
    hook: "Is your coverage keeping up with your life?",
  },
  {
    number: "03",
    icon: Building2,
    title: "Teachers Nearing Retirement",
    body: "Your group policy ends when you leave your district. Final expense and supplemental policies ensure your family isn't left with unexpected costs.",
    hook: "Does your coverage survive your career?",
  },
];

export default function WhoIsItFor() {
  useScrollReveal();

  return (
    <section style={{ backgroundColor: "#E8F0FA" }}>
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-20 text-center">
        {/* Header */}
        <span
          className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#C9A040" }}
        >
          Who This Is For
        </span>

        <h2
          className="mx-auto mb-4 font-extrabold"
          style={{
            color: "#0A2D5A",
            fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
            lineHeight: 1.2,
          }}
        >
          Every Stage of a Teacher&apos;s Life
        </h2>

        <p
          className="mx-auto mb-12 max-w-xl leading-relaxed"
          style={{ color: "#334155", fontSize: "1.05rem" }}
        >
          Whether you&apos;re just starting out or planning your legacy —
          there&apos;s a right plan for where you are right now.
        </p>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.number}
              className="reveal flex flex-col items-center rounded-2xl bg-white p-8 text-center transition-all duration-300"
              style={{
                boxShadow: "0 2px 20px rgba(20,79,143,0.08)",
                transitionDelay: `${i * 0.15}s`,
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
              {/* Number Badge */}
              <span
                className="mb-4 inline-block rounded px-2 py-0.5 text-sm"
                style={{
                  color: "#C9A040",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 500,
                  border: "1px solid rgba(201,160,64,0.4)",
                }}
              >
                {card.number}
              </span>

              {/* Icon */}
              <card.icon
                size={40}
                className="mb-3"
                style={{ color: "#144F8F" }}
              />

              {/* Title */}
              <h3
                className="mb-3 text-xl font-extrabold"
                style={{ color: "#0A2D5A" }}
              >
                {card.title}
              </h3>

              {/* Body */}
              <p
                className="mb-4 text-sm leading-relaxed"
                style={{ color: "#334155" }}
              >
                {card.body}
              </p>

              {/* Hook */}
              <p
                className="mt-auto text-sm italic"
                style={{
                  color: "#A07C20",
                  fontFamily: "var(--font-serif)",
                }}
              >
                {card.hook}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
