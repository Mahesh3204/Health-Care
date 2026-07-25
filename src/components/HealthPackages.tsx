import React, { useState } from 'react';

const plans = [
  { id: 'essential', name: 'Essential', price: '₹1,999', period: '/year', desc: 'Annual preventive screening', popular: false,
    features: ['Complete Blood Count','Blood Sugar & HbA1c','Lipid Profile','Liver & Kidney Function','Chest X-Ray + ECG','Doctor Consultation'] },
  { id: 'premium',   name: 'Premium',   price: '₹4,499', period: '/year', desc: 'Comprehensive health assessment', popular: true,
    features: ['Everything in Essential','Thyroid & Hormone Panel','Vitamin D & B12','Ultrasound Abdomen','2D Echo + Eye Exam','Diet Consultation','2 Follow-up visits'] },
  { id: 'total',     name: 'Total Wellness', price: '₹8,999', period: '/year', desc: 'Complete body screening', popular: false,
    features: ['Everything in Premium','MRI Brain Screening','Bone Density Scan','Cancer Marker Panel','Cardiac Stress Test','Unlimited follow-ups (3 mo)','Priority booking'] },
];

const HealthPackages: React.FC = () => {
  const [sel, setSel] = useState('premium');

  return (
    <section id="packages" style={{ padding: '96px 0', background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>💊 Health Packages</div>
          <h2 className="section-title" style={{ margin: '0 auto 12px' }}>Preventive care <em>plans</em></h2>
          <p className="section-body" style={{ margin: '0 auto' }}>Proactive health monitoring — choose the plan that fits your life.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {plans.map((p, i) => {
            const isSel = sel === p.id;
            return (
              <div key={p.id} id={`pkg-${p.id}`} onClick={() => setSel(p.id)}
                style={{ borderRadius: 'var(--r-xl)', border: `1.5px solid ${p.popular ? 'var(--gray-900)' : 'var(--gray-150)'}`, background: p.popular ? 'var(--gray-900)' : 'white', padding: '28px 24px', cursor: 'pointer', transition: 'all var(--t-normal)', transform: isSel && !p.popular ? 'translateY(-4px)' : 'none', boxShadow: p.popular ? 'var(--shadow-xl)' : isSel ? 'var(--shadow-card-hover)' : 'var(--shadow-card)', position: 'relative', animationDelay: `${i * 0.1}s`, animation: 'fadeInUp 0.5s ease forwards', opacity: 0 }}
                onMouseEnter={e => { if (!p.popular) e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { if (!p.popular && !isSel) e.currentTarget.style.transform = 'none'; }}>
                {p.popular && (
                  <div style={{ position: 'absolute', top: -11, left: 20, background: 'white', color: 'var(--gray-900)', border: '1px solid var(--gray-200)', borderRadius: 'var(--r-full)', padding: '3px 12px', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Most Popular</div>
                )}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: p.popular ? 'white' : 'var(--gray-900)', marginBottom: 4, letterSpacing: '-0.01em' }}>{p.name}</div>
                  <div style={{ fontSize: '0.75rem', color: p.popular ? 'rgba(255,255,255,0.4)' : 'var(--gray-400)' }}>{p.desc}</div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: p.popular ? 'white' : 'var(--gray-900)', fontFamily: 'var(--font-display)', letterSpacing: '-0.04em' }}>{p.price}</span>
                  <span style={{ fontSize: '0.8rem', color: p.popular ? 'rgba(255,255,255,0.35)' : 'var(--gray-400)', marginLeft: 3 }}>{p.period}</span>
                </div>
                <div style={{ height: 1, background: p.popular ? 'rgba(255,255,255,0.08)' : 'var(--gray-150)', marginBottom: 20 }} />
                <ul style={{ listStyle: 'none', marginBottom: 24 }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: 'flex', gap: 9, marginBottom: 9, fontSize: '0.8rem', color: p.popular ? 'rgba(255,255,255,0.75)' : 'var(--gray-600)', alignItems: 'flex-start' }}>
                      <span style={{ color: p.popular ? '#60a5fa' : 'var(--success)', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="#appointment" id={`get-pkg-${p.id}`} className="btn" style={{ display: 'flex', width: '100%', justifyContent: 'center', background: p.popular ? 'white' : 'var(--gray-900)', color: p.popular ? 'var(--gray-900)' : 'white', fontWeight: 700 }}>
                  Get started →
                </a>
              </div>
            );
          })}
        </div>
        <p style={{ textAlign: 'center', marginTop: 24, fontSize: '0.75rem', color: 'var(--gray-400)' }}>
          Free home sample collection · Results in 24 h · NABL-accredited lab
        </p>
      </div>
      <style>{`@media (max-width: 860px) { #packages > .container > div:nth-of-type(2) { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};

export default HealthPackages;
