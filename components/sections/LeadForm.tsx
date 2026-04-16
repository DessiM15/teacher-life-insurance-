"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function LeadForm() {
  useScrollReveal();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/PLACEHOLDER", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    border: "1px solid #CBD5E1",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "0.875rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    color: "#334155",
    backgroundColor: "#FFFFFF",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#0A2D5A",
    marginBottom: "6px",
    display: "block",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "#144F8F";
    e.target.style.boxShadow = "0 0 0 3px rgba(20,79,143,0.15)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "#CBD5E1";
    e.target.style.boxShadow = "none";
  };

  return (
    <section
      id="lead-form"
      className="scroll-mt-20"
      style={{ backgroundColor: "#0A2D5A" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl">
          {/* Form Card */}
          <div
            className="reveal rounded-2xl bg-white p-8 md:p-12"
            style={{ boxShadow: "0 25px 50px rgba(0,0,0,0.25)" }}
          >
            {submitted ? (
              /* Success State */
              <div className="flex flex-col items-center text-center py-8">
                <CheckCircle2
                  size={48}
                  style={{ color: "#C9A040", marginBottom: "16px" }}
                />
                <h3
                  className="text-2xl font-extrabold mb-3"
                  style={{ color: "#0A2D5A" }}
                >
                  You&apos;re All Set!
                </h3>
                <p
                  className="leading-relaxed max-w-md"
                  style={{ color: "#334155", fontSize: "1.05rem" }}
                >
                  We&apos;ll reach out within 1 business day with your
                  personalized life insurance options.
                </p>
              </div>
            ) : (
              <>
                {/* Form Header */}
                <div className="text-center mb-8">
                  <span
                    className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "#C9A040" }}
                  >
                    Free Coverage Review
                  </span>
                  <h2
                    className="mb-3 font-extrabold"
                    style={{
                      color: "#0A2D5A",
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      lineHeight: 1.2,
                    }}
                  >
                    Let&apos;s Find the Right Plan for You
                  </h2>
                  <p style={{ color: "#64748B", fontSize: "0.95rem" }}>
                    Answer a few questions and we&apos;ll match you with the best
                    coverage options for your budget.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-5">
                    {/* First + Last Name Row */}
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label style={labelStyle}>First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          placeholder="First name"
                          style={inputStyle}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          placeholder="Last name"
                          style={inputStyle}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(555) 123-4567"
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>

                    {/* Coverage Situation */}
                    <div>
                      <label style={labelStyle}>Coverage Situation</label>
                      <select
                        name="coverageSituation"
                        required
                        style={{
                          ...inputStyle,
                          appearance: "none",
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748B' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                          paddingRight: "40px",
                        }}
                        onFocus={handleFocus as unknown as React.FocusEventHandler<HTMLSelectElement>}
                        onBlur={handleBlur as unknown as React.FocusEventHandler<HTMLSelectElement>}
                      >
                        <option value="">Select your situation...</option>
                        <option value="no-coverage">
                          I don&apos;t have life insurance yet
                        </option>
                        <option value="compare">
                          I have a policy but want to compare
                        </option>
                        <option value="family">
                          I need coverage for my family
                        </option>
                        <option value="retirement">
                          I&apos;m interested in retirement planning
                        </option>
                        <option value="group-life">
                          My employer offers group life — is it enough?
                        </option>
                        <option value="exploring">
                          Just exploring my options
                        </option>
                      </select>
                    </div>

                    {/* Zip Code */}
                    <div>
                      <label style={labelStyle}>Zip Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        required
                        placeholder="75078"
                        maxLength={5}
                        pattern="[0-9]{5}"
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full font-bold text-lg transition-all duration-300"
                      style={{
                        background: loading ? "#A07C20" : "#C9A040",
                        color: "#0A2D5A",
                        padding: "16px",
                        borderRadius: "12px",
                        border: "none",
                        cursor: loading ? "not-allowed" : "pointer",
                        boxShadow: "0 4px 20px rgba(201,160,64,0.35)",
                        marginTop: "8px",
                      }}
                      onMouseEnter={(e) => {
                        if (!loading)
                          e.currentTarget.style.background = "#A07C20";
                      }}
                      onMouseLeave={(e) => {
                        if (!loading)
                          e.currentTarget.style.background = "#C9A040";
                      }}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="3"
                              className="opacity-25"
                            />
                            <path
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              className="opacity-75"
                            />
                          </svg>
                          Checking your options...
                        </span>
                      ) : (
                        "Get My Free Coverage Review →"
                      )}
                    </button>
                  </div>
                </form>

                {/* Fine Print */}
                <p
                  className="mt-6 text-center text-xs leading-relaxed"
                  style={{ color: "#94A3B8" }}
                >
                  Free review. No obligation. No spam.
                  <br />
                  New Horizons Benefits Group | (469) 831-2672 |
                  robert@newhorizonsbenefits.com
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
