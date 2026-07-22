import React from 'react';

const departments = [
  { name: 'Cardiology',    icon: '♥',  desc: 'Heart care, angiography & cardiac surgery',    count: '42' },
  { name: 'Neurology',     icon: '⊙',  desc: 'Brain, spine & neurological disorders',         count: '28' },
  { name: 'Orthopedics',   icon: '⌂',  desc: 'Joints, fractures & sports medicine',           count: '35' },
  { name: 'Pediatrics',    icon: '✦',  desc: 'Child health, vaccines & neonatal NICU',        count: '31' },
  { name: 'Oncology',      icon: '◎',  desc: 'Cancer care, chemotherapy & radiation',         count: '24' },
  { name: 'Gynecology',    icon: '✿',  desc: "Women's health, maternity & fertility",         count: '29' },
  { name: 'Dental',        icon: '◈',  desc: 'Implants, cosmetic & oral surgery',             count: '18' },
  { name: 'Ophthalmology', icon: '◉',  desc: 'Eye care, LASIK & retinal treatments',          count: '22' },
  { name: 'Dermatology',   icon: '❋',  desc: 'Skin, hair & cosmetic dermatology',             count: '19' },
  { name: 'Urology',       icon: '◆',  desc: 'Kidney, prostate & bladder care',               count: '16' },
  { name: 'Psychiatry',    icon: '◐',  desc: 'Mental health, counselling & therapy',          count: '21' },
  { name: 'Radiology',     icon: '⊗',  desc: 'MRI, CT scan, PET & ultrasound imaging',       count: '14' },
];

const Departments: React.FC = () => (
  <section id="departments" style={{ padding: '96px 0', background: 'var(--surface)' }}>
    <div className="container">
      {/* Header */}
      <div style={{ marginBottom: 56, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div>
          <div className="section-eyebrow">🏥 Specialties</div>
          <h2 className="section-title">45+ medical <em>departments</em></h2>
          <p className="section-body">State-of-the-art technology staffed by world-leading specialists.</p>
        </div>
        <a href="#appointment" className="btn btn-ghost" style={{ flexShrink: 0 }}>All departments →</a>
      </div>

      {/* Tile grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 1, background: 'var(--gray-150)', border: '1px solid var(--gray-150)', borderRadius: 'var(--r-xl)', overflow: 'hidden' }}>
        {departments.map((d, i) => (
          <a key={d.name} href="#appointment" id={`dept-${d.name.toLowerCase()}`} style={{ display: 'block', padding: '24px 22px', background: 'white', textDecoration: 'none', transition: 'background var(--t-fast)', animationDelay: `${i * 0.04}s`, animation: 'fadeInUp 0.4s ease forwards', opacity: 0 }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--primary-50)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'white')}>
            <div style={{ width: 40, height: 40, background: 'var(--gray-100)', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: 'var(--gray-600)', marginBottom: 14, fontFamily: 'monospace', border: '1px solid var(--gray-150)' }}>
              {d.icon}
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--gray-900)', marginBottom: 6 }}>{d.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)', lineHeight: 1.55, marginBottom: 14 }}>{d.desc}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 700 }}>{d.count} specialists →</div>
          </a>
        ))}
      </div>

      {/* Dark CTA banner */}
      <div style={{ marginTop: 24, background: 'var(--gray-900)', borderRadius: 'var(--r-xl)', padding: '36px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div>
          <h3 style={{ color: 'white', fontWeight: 800, fontSize: '1.15rem', marginBottom: 6, letterSpacing: '-0.02em' }}>Not sure which specialist you need?</h3>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem' }}>Our care coordinators guide you to the right department — 24/7.</p>
        </div>
        <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
          <a href="tel:18001234567" className="btn btn-ghost-white btn-sm">📞 Call</a>
          <a href="#appointment" className="btn btn-sm" style={{ background: 'white', color: 'var(--gray-900)', fontWeight: 700 }}>Book consultation</a>
        </div>
      </div>
    </div>
  </section>
);

export default Departments;
