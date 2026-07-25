import React, { useState } from 'react';

const items = [
  { name: 'Priya Sharma',        role: 'Bypass Surgery · Delhi',     rating: 5, text: "Dr. Patel and her team gave me a new lease on life. Professional, warm, and always available. The facilities are genuinely world-class — I felt safe every step of the way.", avatar: '👩', tag: 'Cardiology' },
  { name: 'Rajan Mehta',         role: 'Knee Replacement · Mumbai',  rating: 5, text: "Back on my feet in 3 weeks. The physiotherapy team is exceptional. I only regret not coming to Medicare One sooner — two years of unnecessary pain.", avatar: '👨', tag: 'Orthopedics' },
  { name: 'Anita Krishnamurthy', role: 'Maternity Care · Bangalore', rating: 5, text: "My delivery experience was everything I could hope for. The nursing team was attentive, the NICU handled my baby's early arrival with incredible expertise.", avatar: '👩', tag: 'Gynecology' },
  { name: 'Suresh Nair',         role: 'Stroke Management · Chennai',rating: 5, text: "Rushed in mid-stroke. The team responded in minutes, treated within the golden hour, and I recovered with minimal deficit. They literally saved my life.", avatar: '👨', tag: 'Neurology' },
];

const Stars = () => (
  <div className="stars" style={{ fontSize: '0.8rem', gap: 1, marginBottom: 12 }}>
    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
  </div>
);

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const c = items[active];

  return (
    <section id="testimonials" style={{ padding: '96px 0', background: 'var(--white)' }}>
      <div className="container">
        <div style={{ marginBottom: 56, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="section-eyebrow">💬 Stories</div>
            <h2 className="section-title">Patients who <em>trust us</em></h2>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {items.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} style={{ width: active === i ? 24 : 8, height: 8, borderRadius: 'var(--r-full)', background: active === i ? 'var(--gray-900)' : 'var(--gray-200)', border: 'none', cursor: 'pointer', transition: 'all 0.25s ease' }} />
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, alignItems: 'center' }}>
          {/* Name list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {items.map((t, i) => (
              <button key={i} id={`testimonial-nav-${i+1}`} onClick={() => setActive(i)} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 14px', borderRadius: 'var(--r-lg)', background: active === i ? 'var(--gray-100)' : 'transparent', border: `1px solid ${active === i ? 'var(--gray-200)' : 'transparent'}`, cursor: 'pointer', textAlign: 'left', transition: 'all var(--t-fast)', fontFamily: 'var(--font-sans)' }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: active === i ? 'var(--gray-200)' : 'var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>{t.avatar}</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.825rem', color: 'var(--gray-900)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.name}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)', marginTop: 1 }}>{t.tag}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Quote card */}
          <div key={active} style={{ background: 'var(--surface)', border: '1px solid var(--gray-150)', borderRadius: 'var(--r-xl)', padding: '36px 32px', animation: 'scaleIn 0.25s ease', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 12, right: 20, fontSize: '6rem', color: 'var(--gray-100)', fontFamily: 'Georgia, serif', lineHeight: 1, userSelect: 'none' }}>"</div>
            <Stars />
            <p style={{ fontSize: '1.05rem', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 28, fontStyle: 'italic', position: 'relative' }}>"{c.text}"</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--gray-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>{c.avatar}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--gray-900)' }}>{c.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--gray-400)' }}>{c.role}</div>
                </div>
              </div>
              <span style={{ background: 'var(--primary-50)', color: 'var(--primary)', borderRadius: 'var(--r-full)', padding: '4px 12px', fontSize: '0.72rem', fontWeight: 700 }}>{c.tag}</span>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div style={{ marginTop: 56, display: 'flex', gap: 0, border: '1px solid var(--gray-150)', borderRadius: 'var(--r-xl)', overflow: 'hidden' }}>
          {[['4.9 / 5','Patient rating'],['50,000+','Patients treated'],['NABH','Accredited'],['JCI','International'],['ISO 9001','Quality certified']].map((b, i, arr) => (
            <div key={b[1]} style={{ flex: 1, textAlign: 'center', padding: '20px 12px', borderRight: i < arr.length - 1 ? '1px solid var(--gray-150)' : 'none', background: 'white', transition: 'background var(--t-fast)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--gray-50)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'white')}>
              <div style={{ fontWeight: 900, color: 'var(--gray-900)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', marginBottom: 3 }}>{b[0]}</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--gray-400)' }}>{b[1]}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) { #testimonials > .container > div:nth-child(2) { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { 
          #testimonials > .container > div:last-child { flex-wrap: wrap !important; } 
          #testimonials > .container > div:last-child > div { flex: 1 1 100% !important; border-right: none !important; border-bottom: 1px solid var(--gray-150); } 
          #testimonials > .container > div:last-child > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
