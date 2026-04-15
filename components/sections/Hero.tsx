'use client';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToCoverage = () => {
    document.getElementById('coverage')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ backgroundColor: '#0F3F7A' }}
      >
        <source src="/life-insurance-hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY LAYER 1 — gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(10,30,60,0.92) 0%, rgba(15,50,100,0.78) 50%, rgba(8,25,50,0.90) 100%)',
        }}
      />

      {/* OVERLAY LAYER 2 — solid darkener */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.42)' }}
      />

      {/* CONTENT */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6"
        style={{ paddingTop: '120px', paddingBottom: '80px' }}
      >

        {/* Badge */}
        <div
          className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full"
          style={{
            border: '1px solid rgba(201,160,64,0.65)',
            color: '#E8C97A',
            padding: '6px 20px',
            marginBottom: '32px',
          }}
        >
          New Horizons Benefits Group
        </div>

        {/* H1 */}
        <h1
          className="font-extrabold leading-tight tracking-tight max-w-4xl mx-auto"
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: '1.1',
            marginBottom: '24px',
          }}
        >
          Your Family Deserves Protection.{' '}
          A Teacher&apos;s Salary Deserves a Smart Plan.
        </h1>

        {/* Gold rule */}
        <div
          style={{
            height: '3px',
            width: '80px',
            background: '#C9A040',
            borderRadius: '999px',
            margin: '0 auto 28px',
          }}
        />

        {/* Subheadline */}
        <p
          className="max-w-2xl mx-auto leading-relaxed"
          style={{
            color: 'rgba(255,255,255,0.82)',
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            marginBottom: '40px',
          }}
        >
          Less than half of Americans have life insurance. Most teachers assume
          they can&apos;t afford it. We&apos;re here to prove them wrong — with
          plans starting at less than the cost of a daily coffee.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap justify-center"
          style={{ gap: '16px', marginBottom: '28px' }}
        >
          {/* PRIMARY — gold filled */}
          <button
            onClick={scrollToForm}
            style={{
              background: '#C9A040',
              color: '#0F3F7A',
              padding: '18px 56px',
              fontSize: '1.125rem',
              fontWeight: '800',
              letterSpacing: '0.01em',
              borderRadius: '14px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 6px 28px rgba(201,160,64,0.50)',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.background = '#A07C20')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.background = '#C9A040')
            }
          >
            Get My Free Quote →
          </button>

          {/* SECONDARY — outlined */}
          <button
            onClick={scrollToCoverage}
            style={{
              background: 'transparent',
              color: '#FFFFFF',
              padding: '18px 36px',
              fontSize: '1.125rem',
              fontWeight: '600',
              borderRadius: '14px',
              border: '2px solid rgba(255,255,255,0.55)',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.10)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.background = 'transparent')
            }
          >
            See Coverage Options ↓
          </button>
        </div>

        {/* Trust strip */}
        <div
          className="flex flex-wrap justify-center"
          style={{ gap: '24px' }}
        >
          {['Multi-Carrier Access', 'No Medical Exam Options', 'Free Consultation'].map(
            item => (
              <span
                key={item}
                style={{
                  color: 'rgba(255,255,255,0.70)',
                  fontSize: '0.875rem',
                }}
              >
                ✓ {item}
              </span>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown
          size={32}
          style={{
            color: 'rgba(255,255,255,0.45)',
            animation: 'bounce 1.5s infinite',
          }}
        />
      </div>
    </section>
  );
}
