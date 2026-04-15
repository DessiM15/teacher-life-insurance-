"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/life-insurance-hero.jpg"
      >
        <source src="/life-insurance-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Charcoal Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,10,10,0.82) 0%, rgba(20,20,20,0.58) 40%, rgba(10,10,10,0.75) 100%)",
        }}
      />

      {/* Content — vertically centered within the full viewport */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20 pb-24 text-center">
        {/* Pill Badge */}
        <span
          className="hero-fade-up mb-8 inline-block rounded-full border border-gold/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold"
          style={{ animationDelay: "0.2s" }}
        >
          New Horizons Benefits Group
        </span>

        {/* Headline */}
        <h1
          className="hero-fade-up mx-auto mb-6 max-w-4xl font-display font-extrabold leading-[1.1] text-white"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            animationDelay: "0.35s",
          }}
        >
          Your Family Deserves Protection. A Teacher&rsquo;s Salary Deserves a
          Smart Plan.
        </h1>

        {/* Gold Rule */}
        <div
          className="hero-fade-up mx-auto my-6 h-1 w-24 rounded-full bg-gold"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Subheadline */}
        <p
          className="hero-fade-up mx-auto mb-10 max-w-2xl font-serif italic leading-relaxed text-white/85"
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.375rem)",
            animationDelay: "0.65s",
          }}
        >
          Less than half of Americans have life insurance. Most teachers assume
          they can&rsquo;t afford it. We&rsquo;re here to prove them wrong —
          with plans starting at less than the cost of a daily coffee.
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-fade-up flex flex-wrap justify-center gap-4"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#quote"
            className="rounded-xl px-10 py-4 text-lg font-bold transition-all duration-300"
            style={{
              backgroundColor: "#C9A040",
              color: "#0F3F7A",
              boxShadow: "0 4px 20px rgba(201,160,64,0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#A07C20";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#C9A040";
            }}
          >
            Get My Free Quote &rarr;
          </a>
          <a
            href="#coverage"
            className="rounded-xl border-2 border-white/60 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("coverage")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See Coverage Options &darr;
          </a>
        </div>

        {/* Trust Strip */}
        <div
          className="hero-fade-up mt-6 flex flex-wrap justify-center gap-6"
          style={{ animationDelay: "0.95s" }}
        >
          {[
            "Multi-Carrier Access",
            "No Medical Exam Options",
            "Free Consultation",
          ].map((item) => (
            <span key={item} className="text-sm text-white/70">
              &#10003; {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <ChevronDown className="hero-bounce h-8 w-8 text-white/50" />
      </div>
    </section>
  );
}
