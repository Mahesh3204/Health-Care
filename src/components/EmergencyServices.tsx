import React from 'react';

const services = [
  { icon: '🚑', title: 'Ambulance',     desc: 'Advanced life-support, GPS-tracked, <10 min response',  time: '< 10 min' },
  { icon: '⚡', title: 'Trauma Centre', desc: 'Level I trauma for all major emergencies, 24 h',         time: 'Always open' },
  { icon: '♥',  title: 'Cardiac',       desc: 'Cath lab for immediate heart attack intervention',         time: 'Door-to-Balloon 60 min' },
  { icon: '⊙',  title: 'Stroke Centre', desc: 'Certified stroke centre with rapid thrombolysis',         time: 'Door-to-Needle 45 min' },
  { icon: '✦',  title: 'Paediatric ER', desc: 'Dedicated paediatric emergency with PICU backup',         time: '24/7 paediatricians' },
  { icon: '🔥', title: 'Burns Unit',    desc: 'Specialist burns care with skin banking',                  time: '24/7 specialist' },
];

const EmergencyServices: React.FC = () => (
  <section id="emergency" style={{ padding: '96px 0', background: 'var(--gray-900)', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(25,86,168,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />

    <div className="container" style={{ position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center', marginBottom: 56, flexWrap: 'wrap' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 'var(--r-full)', padding: '5px 14px', marginBottom: 16, fontSize: '0.7rem', fontWeight: 700, color: '#f87171', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444', animation: 'pulseDot 1.5s ease infinite', display: 'inline-block' }} />
            Emergency 24/7
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', marginBottom: 14, fontFamily: 'var(--font-display)' }}>
            Critical care,<br /><span style={{ color: '#93c5fd' }}>always ready.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', maxWidth: 480, lineHeight: 1.7 }}>
            Our emergency department is staffed around the clock with senior specialists and advanced life-support equipment.
          </p>
        </div>
        <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 'var(--r-xl)', padding: '24px 28px', textAlign: 'center', flexShrink: 0 }}>
          <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Emergency helpline</div>
          <a href="tel:102" style={{ display: 'block', color: 'white', fontSize: '2.6rem', fontWeight: 900, fontFamily: 'var(--font-display)', letterSpacing: '-0.04em', textDecoration: 'none', lineHeight: 1 }}>102</a>
          <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', marginTop: 8 }}>24 × 7 × 365</div>
        </div>
      </div>

      {/* Service grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-xl)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', marginBottom: 40 }}>
        {services.map((s, i) => (
          <div key={s.title} style={{ padding: '22px 20px', background: 'rgba(255,255,255,0.02)', transition: 'background var(--t-fast)', animationDelay: `${i * 0.07}s`, animation: 'fadeInUp 0.5s ease forwards', opacity: 0 }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(25,86,168,0.14)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}>
            <div style={{ fontSize: '1.4rem', marginBottom: 10 }}>{s.icon}</div>
            <div style={{ fontWeight: 700, color: 'white', fontSize: '0.875rem', marginBottom: 6 }}>{s.title}</div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.6, marginBottom: 12 }}>{s.desc}</p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', color: '#4ade80', borderRadius: 'var(--r-full)', padding: '3px 10px', fontSize: '0.68rem', fontWeight: 700 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulseDot 2s ease infinite' }} />
              {s.time}
            </div>
          </div>
        ))}
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--r-xl)', overflow: 'hidden' }}>
        {[['< 10 min','Ambulance response'],['98%','Emergency survival rate'],['80+','ICU beds'],['24/7','Specialists on call']].map(([v, l], i) => (
          <div key={l} style={{ padding: '24px 16px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
            <div style={{ fontWeight: 900, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: '#93c5fd', fontFamily: 'var(--font-display)', letterSpacing: '-0.03em', marginBottom: 4 }}>{v}</div>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @media (max-width: 860px) { 
        #emergency > .container > div:first-child { grid-template-columns: 1fr !important; }
        #emergency > .container > div:last-child { grid-template-columns: 1fr 1fr !important; }
      }
      @media (max-width: 640px) {
        #emergency > .container > div:last-child { grid-template-columns: 1fr !important; }
        #emergency > .container > div:last-child > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.04); }
        #emergency > .container > div:last-child > div:last-child { border-bottom: none !important; }
      }
    `}</style>
  </section>
);

export default EmergencyServices;
