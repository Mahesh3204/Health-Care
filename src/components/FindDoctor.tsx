import React, { useState } from 'react';

const specialties = ['All','Cardiology','Neurology','Orthopedics','Pediatrics','Oncology','Gynecology'];

const doctors = [
  { id: 1, name: 'Dr. Aisha Patel',   specialty: 'Cardiology',  qual: 'MBBS, MD, DM – AIIMS', exp: '18 yrs', rating: 4.9, reviews: 342, available: true,  avatar: '👩‍⚕️', day: 'Mon, Wed, Fri' },
  { id: 2, name: 'Dr. Rajesh Kumar',  specialty: 'Neurology',   qual: 'MBBS, MD – PGI',       exp: '22 yrs', rating: 4.8, reviews: 289, available: true,  avatar: '👨‍⚕️', day: 'Tue, Thu, Sat' },
  { id: 3, name: 'Dr. Sarah Johnson', specialty: 'Orthopedics', qual: 'MBBS, MS – CMC',        exp: '15 yrs', rating: 4.9, reviews: 198, available: true,  avatar: '👩‍⚕️', day: 'Mon, Wed, Sat' },
  { id: 4, name: 'Dr. Vikram Singh',  specialty: 'Oncology',    qual: 'MBBS, MD, DM',          exp: '20 yrs', rating: 4.7, reviews: 156, available: false, avatar: '👨‍⚕️', day: 'Mon, Fri' },
  { id: 5, name: 'Dr. Meera Nair',    specialty: 'Pediatrics',  qual: 'MBBS, MD – KEM',        exp: '12 yrs', rating: 4.9, reviews: 421, available: true,  avatar: '👩‍⚕️', day: 'Mon–Sat' },
  { id: 6, name: 'Dr. Arjun Mehta',  specialty: 'Gynecology',  qual: 'MBBS, MS – JIPMER',     exp: '16 yrs', rating: 4.8, reviews: 267, available: true,  avatar: '👨‍⚕️', day: 'Tue, Thu, Sat' },
];

const Stars = ({ n }: { n: number }) => (
  <div className="stars">{[1,2,3,4,5].map(i => <span key={i} style={{ color: i <= Math.floor(n) ? '#fbbf24' : 'var(--gray-200)' }}>★</span>)}</div>
);

const FindDoctor: React.FC = () => {
  const [spec, setSpec] = useState('All');
  const [q, setQ] = useState('');

  const list = doctors.filter(d =>
    (spec === 'All' || d.specialty === spec) &&
    (d.name.toLowerCase().includes(q.toLowerCase()) || d.specialty.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <section id="doctors" style={{ padding: '96px 0', background: 'var(--white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 48, flexWrap: 'wrap' }}>
          <div>
            <div className="section-eyebrow">👨‍⚕️ Find a Doctor</div>
            <h2 className="section-title">Our <em>specialists</em></h2>
            <p className="section-body">Highly qualified clinicians dedicated to your wellbeing.</p>
          </div>
          <div style={{ position: 'relative', width: 260 }}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="var(--gray-400)" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input id="doctor-search" className="form-control" type="text" placeholder="Search name or specialty…" value={q} onChange={e => setQ(e.target.value)} style={{ paddingLeft: 36, borderRadius: 'var(--r-full)' }} />
          </div>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
          {specialties.map(s => (
            <button key={s} id={`filter-${s.toLowerCase()}`} onClick={() => setSpec(s)} style={{ padding: '7px 16px', borderRadius: 'var(--r-full)', border: `1.5px solid ${spec === s ? 'var(--gray-900)' : 'var(--gray-200)'}`, background: spec === s ? 'var(--gray-900)' : 'white', color: spec === s ? 'white' : 'var(--gray-600)', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', transition: 'all var(--t-fast)', fontFamily: 'var(--font-sans)', letterSpacing: '0.01em' }}>
              {s}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 20 }}>
          {list.map((doc, i) => (
            <div key={doc.id} className="card" style={{ padding: '22px', animationDelay: `${i * 0.08}s`, animation: 'fadeInUp 0.5s ease forwards', opacity: 0 }}>
              <div style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
                <div style={{ width: 60, height: 60, borderRadius: 'var(--r-lg)', background: 'var(--gray-100)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', border: '1px solid var(--gray-150)' }}>
                  {doc.avatar}
                </div>
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 3 }}>{doc.name}</h3>
                  <div style={{ display: 'inline-block', background: 'var(--primary-50)', color: 'var(--primary)', borderRadius: 'var(--r-full)', padding: '2px 9px', fontSize: '0.7rem', fontWeight: 700, marginBottom: 4 }}>{doc.specialty}</div>
                  <p style={{ fontSize: '0.72rem', color: 'var(--gray-400)', lineHeight: 1.4 }}>{doc.qual}</p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid var(--gray-100)', borderBottom: '1px solid var(--gray-100)', padding: '12px 0', marginBottom: 14, gap: 8 }}>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--gray-400)', marginBottom: 2 }}>Experience</div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--gray-900)' }}>{doc.exp}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--gray-400)', marginBottom: 2 }}>Rating</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Stars n={doc.rating} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gray-700)' }}>{doc.rating}</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--gray-400)' }}><span style={{ fontWeight: 600, color: 'var(--gray-600)' }}>Available:</span> {doc.day}</span>
                <span className={`badge badge-${doc.available ? 'green' : 'red'}`}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: doc.available ? 'var(--success)' : 'var(--danger)', display: 'inline-block', animation: 'pulseDot 2s ease infinite' }} />
                  {doc.available ? 'Open' : 'Unavailable'}
                </span>
              </div>
              <a href="#appointment" id={`book-doctor-${doc.id}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem', padding: '10px' }}>Book →</a>
            </div>
          ))}
        </div>

        {list.length === 0 && (
          <div style={{ textAlign: 'center', padding: '56px 0', color: 'var(--gray-300)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>🔍</div>
            <p>No results found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FindDoctor;
