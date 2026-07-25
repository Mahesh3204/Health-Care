import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Doctors',      href: '#doctors' },
  { label: 'Departments',  href: '#departments' },
  { label: 'Appointment',  href: '#appointment' },
  { label: 'Packages',     href: '#packages' },
  { label: 'Emergency',    href: '#emergency' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav id="navbar" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
      height: 'var(--nav-h)', display: 'flex', alignItems: 'center',
      background: scrolled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.0)',
      backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--gray-150)' : '1px solid transparent',
      transition: 'all 0.35s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 34, height: 34, background: 'var(--gray-900)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M15 2H9v6H3v6h6v6h6v-6h6V8h-6V2z"/></svg>
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--gray-900)', letterSpacing: '-0.03em' }}>
            Medicare<span style={{ color: 'var(--primary)', fontWeight: 400 }}> One</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="nav-desktop-links" style={{ display: 'flex', gap: 2, listStyle: 'none', alignItems: 'center' }}>
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{ padding: '7px 13px', borderRadius: 'var(--r-full)', fontSize: '0.83rem', fontWeight: 500, color: 'var(--gray-600)', textDecoration: 'none', display: 'block', transition: 'all var(--t-fast)', letterSpacing: '-0.01em' }}
                onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.color = 'var(--gray-900)'; t.style.background = 'var(--gray-100)'; }}
                onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.color = 'var(--gray-600)'; t.style.background = 'transparent'; }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="nav-desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="tel:18001234567" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', fontWeight: 600, color: 'var(--gray-500)', textDecoration: 'none' }}>
            <span style={{ fontSize: '0.95rem' }}>📞</span>1800-MED-CARE
          </a>
          <a href="#appointment" className="btn btn-primary btn-sm" id="nav-book-btn">Book now</a>
        </div>

        {/* Hamburger */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: 'var(--gray-700)' }} aria-label="Toggle menu">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            {menuOpen
              ? <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              : <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'white', borderTop: '1px solid var(--gray-150)', borderBottom: '1px solid var(--gray-150)', padding: '12px 24px 20px', animation: 'slideDown 0.2s ease' }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '11px 0', borderBottom: '1px solid var(--gray-100)', color: 'var(--gray-700)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', textAlign: 'center' }}>
              {l.label}
            </a>
          ))}
          <a href="#appointment" className="btn btn-primary" style={{ marginTop: 14, width: '100%', justifyContent: 'center' }}>Book Appointment</a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta   { display: none !important; }
          .nav-hamburger     { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
