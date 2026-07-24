import React from 'react';

const cols: Record<string, string[]> = {
  Services: ['Cardiology','Neurology','Orthopedics','Pediatrics','Oncology','Gynecology'],
  Hospital:  ['About Us','Careers','News','Research','CSR','Accreditations'],
  Patients:  ['Patient Portal','Book Appointment','Find Doctor','Packages','Insurance','Feedback'],
};

const Footer: React.FC = () => (
  <footer style={{ background: 'var(--gray-900)', color: 'rgba(255,255,255,0.5)' }}>
    {/* Newsletter strip */}
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '28px 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
        <div>
          <span style={{ fontWeight: 700, color: 'white', fontSize: '0.9rem' }}>Weekly health tips — </span>
          <span style={{ fontSize: '0.875rem' }}>delivered to your inbox.</span>
        </div>
        <div style={{ display: 'flex', gap: 0, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--r-full)', overflow: 'hidden', maxWidth: 380, flex: '1 1 300px' }}>
          <input type="email" placeholder="your@email.com" id="newsletter-email" style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', padding: '10px 18px', color: 'white', fontSize: '0.85rem', fontFamily: 'var(--font-sans)' }} />
          <button id="newsletter-subscribe-btn" className="btn btn-sm" style={{ background: 'white', color: 'var(--gray-900)', fontWeight: 700, borderRadius: 0 }}>Subscribe</button>
        </div>
      </div>
    </div>

    {/* Main */}
    <div className="container" style={{ paddingTop: 56, paddingBottom: 40 }}>
      <div id="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.4fr', gap: 40, marginBottom: 48 }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 32, height: 32, background: 'white', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--gray-900)"><path d="M15 2H9v6H3v6h6v6h6v-6h6V8h-6V2z"/></svg>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: 'white', letterSpacing: '-0.03em' }}>
              Medicare<span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.4)' }}> Plus</span>
            </span>
          </div>
          <p style={{ fontSize: '0.82rem', lineHeight: 1.8, marginBottom: 20, maxWidth: 240, color: 'rgba(255,255,255,0.35)' }}>India's premier multi-specialty hospital delivering world-class care since 2000.</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {['f','𝕏','▶','in'].map((ic, j) => (
              <a key={j} href="#" aria-label={String(ic)} style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none', transition: 'all var(--t-fast)' }}
                onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.background = 'rgba(255,255,255,0.1)'; t.style.color = 'white'; }}
                onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.background = 'rgba(255,255,255,0.05)'; t.style.color = 'rgba(255,255,255,0.4)'; }}>
                {ic}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {(Object.entries(cols) as [string, string[]][]).map(([heading, links]) => (
          <div key={heading}>
            <h4 style={{ color: 'white', fontSize: '0.8rem', fontWeight: 700, marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{heading}</h4>
            <ul style={{ listStyle: 'none' }}>
              {links.map(l => (
                <li key={l} style={{ marginBottom: 9 }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '0.825rem', transition: 'color var(--t-fast)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)'}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.8rem', fontWeight: 700, marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Contact</h4>
          {[{ i:'📍', t:'1 Medicare Blvd, New Delhi 110001' }, { i:'📞', t:'1800-MED-CARE (24/7)' }, { i:'✉️', t:'care@medicareplus.com' }, { i:'🕐', t:'OPD: Mon–Sat 8 AM–8 PM' }].map(c => (
            <div key={c.t} style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.85rem', flexShrink: 0, marginTop: 1 }}>{c.i}</span>
              <span style={{ fontSize: '0.78rem', lineHeight: 1.6 }}>{c.t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>© 2026 Medicare Plus Hospital Pvt. Ltd. All rights reserved.</p>
        <div style={{ display: 'flex', gap: 16 }}>
          {['Privacy','Terms','Disclaimer','Sitemap'].map(l => (
            <a key={l} href="#" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', textDecoration: 'none', transition: 'color var(--t-fast)' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.2)'}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 1024px) { #footer-grid { grid-template-columns: 1fr 1fr 1fr !important; gap: 32px !important; } }
      @media (max-width: 640px) { #footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; } }
    `}</style>
  </footer>
);

export default Footer;
