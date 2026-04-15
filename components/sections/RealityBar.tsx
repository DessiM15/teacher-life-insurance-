'use client';

import useScrollReveal from '@/hooks/useScrollReveal';

const stats = [
  { value: '47%', label: 'Of Americans Have No Life Insurance — Teachers Included' },
  { value: '$0', label: 'Cost for Your Free Life Insurance Consultation' },
  { value: 'Days', label: 'How Fast Coverage Can Be Active — Not Weeks, Days' },
];

export default function RealityBar() {
  useScrollReveal();

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #C9A040 0%, #E8C97A 60%, #C9A040 100%)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {stats.map((stat, i) => (
            <div key={stat.value} className="flex flex-col items-center">
              {/* Divider (between items, hidden on mobile) */}
              {i > 0 && (
                <div
                  className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2"
                  style={{
                    width: '1px',
                    height: '60%',
                    background: 'rgba(255,255,255,0.25)',
                  }}
                />
              )}

              <div
                className="reveal flex flex-col items-center gap-2 px-8 py-4 text-center"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <span
                  style={{
                    color: '#0F3F7A',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 500,
                    fontSize: '2.25rem',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="mx-auto max-w-[160px] text-center text-xs font-medium uppercase tracking-widest"
                  style={{
                    color: 'rgba(15,63,122,0.75)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
