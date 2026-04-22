"use client";

const stats = [
  {
    value: "47%",
    label: "Of Americans Have No Life Insurance — Teachers Included",
  },
  {
    value: "$0",
    label: "Cost for Your Free Life Insurance Consultation",
  },
  {
    value: "Days",
    label: "How Fast Coverage Can Be Active — Not Weeks, Days",
  },
];

export default function StatsBar() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #C9A040 0%, #E8C97A 60%, #C9A040 100%)",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-5 py-8 md:px-6 md:py-10"
      >
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className="flex flex-col items-center gap-1 md:gap-2 px-4 py-2 md:px-8 md:py-4 text-center relative md:flex-1"
              style={{ flexBasis: "200px" }}
            >
              {/* Vertical Divider */}
              {i > 0 && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "20%",
                    width: "1px",
                    height: "60%",
                    background: "rgba(255,255,255,0.25)",
                  }}
                  className="hidden md:block"
                />
              )}

              <span
                className="text-2xl md:text-4xl"
                style={{
                  color: "#0A2D5A",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 500,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  color: "rgba(10,45,90,0.75)",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  maxWidth: "180px",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
