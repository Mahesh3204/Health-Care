import React, { useState } from 'react';

const faqs = [
  { q: 'How do I book an appointment?',           a: 'Book online via this website (instant confirmation), call 1800-MED-CARE, or walk in to any reception desk. Online bookings receive SMS and email confirmations immediately.' },
  { q: 'Which insurance plans do you accept?',    a: 'We accept 150+ plans including Star Health, HDFC ERGO, Max Bupa, Niva Bupa, Cigna, and government schemes (CGHS, ECHS, Ayushman Bharat / PMJAY).' },
  { q: 'What are the visiting hours?',            a: 'General wards: 10 AM–12 PM and 4–7 PM. ICU: 2 immediate family members, 15 minutes, twice daily. Please confirm ward-specific rules with the nursing station.' },
  { q: 'Are video consultations available?',      a: 'Yes — choose "Video Consult" while booking. You receive a secure video link 15 minutes before the scheduled time. Available for follow-ups and non-emergency consultations.' },
  { q: 'How do I access my reports online?',      a: 'Reports appear on our patient portal within 24 hours. Log in at patient.medicareplus.com with your registered mobile. Reports are also sent via WhatsApp and email automatically.' },
  { q: 'Is there a 24-hour pharmacy?',            a: 'Yes — fully stocked, open 24/7 at the main building entrance. Home delivery of prescribed medicines is available within 2–4 hours in select cities.' },
  { q: 'What should I bring on my first visit?',  a: 'Photo ID, insurance / TPA card, previous medical records, a list of current medications, and your appointment confirmation. Specific pre-op instructions are given during counselling.' },
  { q: 'Do you offer home health services?',      a: 'Yes — home sample collection, home nursing, physiotherapy at home, and post-surgery care packages. Book via the website or call 1800-HOME-CARE.' },
];

const FAQs: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" style={{ padding: '96px 0', background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 56, alignItems: 'start' }}>
          {/* Left */}
          <div style={{ position: 'sticky', top: 96 }}>
            <div className="section-eyebrow">❓ FAQs</div>
            <h2 className="section-title">Common<br /><em>questions</em></h2>
            <p className="section-body" style={{ marginBottom: 28, fontSize: '0.9rem' }}>Can't find what you need?<br />Our team is always ready to help.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="tel:18001234567" className="btn btn-primary btn-sm">📞 Call support</a>
              <a href="mailto:care@medicareplus.com" className="btn btn-ghost btn-sm">✉️ Email us</a>
            </div>
            <div style={{ marginTop: 20, background: 'white', border: '1px solid var(--gray-150)', borderRadius: 'var(--r-lg)', padding: '14px 16px' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Avg. wait time</div>
              <div style={{ fontWeight: 900, color: 'var(--gray-900)', fontSize: '1.3rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}>&lt; 15 min</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--gray-400)', marginTop: 2 }}>with a prior appointment</div>
            </div>
          </div>

          {/* Accordion */}
          <div>
            {faqs.map((faq, i) => (
              <div key={i} id={`faq-${i+1}`} style={{ borderBottom: '1px solid var(--gray-150)' }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16, fontFamily: 'var(--font-sans)' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', color: open === i ? 'var(--gray-900)' : 'var(--gray-700)', lineHeight: 1.4, transition: 'color var(--t-fast)' }}>{faq.q}</span>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, background: open === i ? 'var(--gray-900)' : 'var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.25s ease', transform: open === i ? 'rotate(180deg)' : 'none' }}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill={open === i ? 'white' : 'var(--gray-500)'}><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
                  </div>
                </button>
                <div style={{ maxHeight: open === i ? 300 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                  <p style={{ paddingBottom: 18, color: 'var(--gray-500)', fontSize: '0.875rem', lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          #faqs > .container > div { grid-template-columns: 1fr !important; }
          #faqs > .container > div > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
};

export default FAQs;
