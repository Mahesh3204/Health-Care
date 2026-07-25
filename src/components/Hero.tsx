import React from 'react';

const stats = [
  { value: '50k+',  label: 'Patients served' },
  { value: '500+',  label: 'Expert doctors' },
  { value: '45+',   label: 'Specialties' },
  { value: '4.9★',  label: 'Average rating' },
];

const Hero: React.FC = () => (
  <section id="home" style={{ minHeight: '100vh', background: 'var(--surface)', paddingTop: 'calc(var(--nav-h) + 60px)', paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
    {/* Grid background */}
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(var(--gray-150) 1px, transparent 1px), linear-gradient(90deg, var(--gray-150) 1px, transparent 1px)', backgroundSize: '48px 48px', opacity: 0.45, maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 40%, transparent 100%)' }} />
    {/* Blue blob */}
    <div style={{ position: 'absolute', top: '10%', right: '5%', width: 480, height: 480, maxWidth: '100vw', background: 'radial-gradient(circle, rgba(25,86,168,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

    <div className="container" style={{ position: 'relative' }}>
      {/* Trust pill */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', border: '1px solid var(--gray-200)', borderRadius: 'var(--r-full)', padding: '6px 14px', marginBottom: 36, boxShadow: 'var(--shadow-xs)', animation: 'fadeInUp 0.5s ease forwards' }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulseDot 2s ease infinite' }} />
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--gray-600)', letterSpacing: '0.03em' }}>NABH Accredited · ISO 9001:2015 Certified</span>
      </div>

      {/* Headline */}
      <h1 style={{ fontSize: 'clamp(2.6rem, 6vw, 4.4rem)', fontWeight: 900, color: 'var(--gray-900)', lineHeight: 1.06, letterSpacing: '-0.03em', maxWidth: 700, marginBottom: 24, animation: 'fadeInUp 0.6s 0.1s ease both' }}>
        Healthcare built{' '}
        <span style={{ color: 'var(--primary)' }}>around you.</span>
      </h1>

      <p style={{ fontSize: '1.05rem', color: 'var(--gray-500)', lineHeight: 1.75, maxWidth: 480, marginBottom: 40, animation: 'fadeInUp 0.6s 0.2s ease both' }}>
        World-class specialists, same-day appointments, and compassionate care — all under one roof. From preventive check-ups to complex surgery.
      </p>

      {/* CTA row */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 64, animation: 'fadeInUp 0.6s 0.3s ease both' }}>
        <a href="#appointment" className="btn btn-primary btn-lg" id="hero-book-btn">
          Book appointment
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </a>
        <a href="#doctors" className="btn btn-ghost btn-lg" id="hero-doctors-btn">Meet our doctors</a>
      </div>

      {/* Stats bar */}
      <div className="hero-stats-bar" style={{ display: 'flex', gap: 0, flexWrap: 'wrap', borderTop: '1px solid var(--gray-150)', paddingTop: 32, animation: 'fadeInUp 0.6s 0.4s ease both' }}>
        {stats.map((s, i) => (
          <div key={s.label} className="hero-stat-card" style={{ flex: '1 1 120px', paddingRight: 32, marginRight: 32, borderRight: i < stats.length - 1 ? '1px solid var(--gray-150)' : 'none' }}>
            <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: 'var(--gray-900)', fontFamily: 'var(--font-display)', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 4 }}>
               {s.value}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--gray-400)', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Hero image */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '42%', maxWidth: 440, animation: 'fadeInRight 0.8s 0.2s ease both' }} className="hero-img-wrap">
        <div style={{ borderRadius: 'var(--r-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--gray-150)', background: 'white', position: 'relative' }}>
          <img src="/hero_doctor.png" alt="Expert doctors at Medicare One" style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }} />
          <div style={{ padding: '16px 20px', background: 'white', borderTop: '1px solid var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--gray-900)' }}>Expert Medical Team</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)', marginTop: 2 }}>500+ certified specialists</div>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1rem' }}>✓</div>
          </div>
        </div>
        {/* Floating chip */}
        <div style={{ position: 'absolute', top: 20, left: -20, background: 'white', border: '1px solid var(--gray-150)', borderRadius: 'var(--r-lg)', padding: '10px 16px', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: 10, animation: 'float 4s ease-in-out infinite' }}>
          <span style={{ fontSize: '1.2rem' }}>🏆</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--gray-900)', letterSpacing: '-0.02em' }}>25 Years</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--gray-400)' }}>of excellence</div>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) {
        .hero-img-wrap { display: none !important; }
        #home { padding-bottom: 60px !important; }
      }
    `}</style>
  </section>
);

export default Hero;
