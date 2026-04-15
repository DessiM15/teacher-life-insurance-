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
        poster="/health-insurance-hero.jpg"
      >
        <source src="/life-insurance-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Charcoal Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(10,10,10,0.78) 0%, rgba(20,20,20,0.55) 45%, rgba(10,10,10,0.72) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Pill Badge */}
        <span
          className="hero-fade-up mb-6 inline-block rounded-full border border-gold/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold"
          style={{ animationDelay: "0.2s" }}
        >
          New Horizons Benefits Group
        </span>

        {/* Headline */}
        <h1
          className="hero-fade-up mx-auto max-w-3xl font-display leading-[1.15] text-white"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            fontWeight: 800,
            animationDelay: "0.35s",
          }}
        >
          Your Family Deserves Protection.
          <br />
          <span className="text-gold">A Teacher&rsquo;s Salary</span> Deserves
          a Smart Plan.
        </h1>

        {/* Gold Rule */}
        <div
          className="hero-fade-up mx-auto mt-6 mb-5 h-1 w-20 rounded-full bg-gold"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Subheadline */}
        <p
          className="hero-fade-up mx-auto mb-8 max-w-xl font-serif italic leading-relaxed text-white/80"
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
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
            className="rounded-lg bg-gold px-10 py-4 text-base font-bold text-blue-dark transition-all duration-300 hover:bg-gold-dark hover:shadow-gold"
          >
            Get My Free Quote &rarr;
          </a>
          <a
            href="#coverage"
            className="rounded-lg border border-white/40 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/70 hover:bg-white/10"
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
          className="hero-fade-up mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2"
          style={{ animationDelay: "0.95s" }}
        >
          {[
            "Multi-Carrier Access",
            "No Medical Exam Options",
            "Free Consultation",
          ].map((item) => (
            <span key={item} className="text-sm text-white/60">
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
