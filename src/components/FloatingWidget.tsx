import React, { useState } from 'react';

const FloatingWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', dept: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setOpen(false); setForm({ name:'', phone:'', dept:'' }); }, 2500);
  };

  return (
    <div className="floating-widget" id="floating-appointment-widget">
      {open && (
        <div className="floating-panel">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--gray-900)', letterSpacing: '-0.01em' }}>Quick callback</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--gray-400)', marginTop: 2 }}>We'll call you within 30 min</div>
            </div>
            <button onClick={() => setOpen(false)} id="close-floating-panel" style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--gray-100)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gray-500)', fontSize: '0.7rem' }}>✕</button>
          </div>

          {sent ? (
            <div style={{ textAlign: 'center', padding: '20px 0', animation: 'scaleIn 0.3s ease' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--gray-900)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', margin: '0 auto 12px' }}>✓</div>
              <p style={{ fontWeight: 700, color: 'var(--gray-800)', fontSize: '0.875rem' }}>Request sent!</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-400)', marginTop: 4 }}>We'll call you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="form-group"><label className="form-label">Name</label><input id="widget-name" className="form-control" type="text" placeholder="Your name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required /></div>
              <div className="form-group"><label className="form-label">Phone</label><input id="widget-phone" className="form-control" type="tel" placeholder="+91 …" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} required /></div>
              <div className="form-group"><label className="form-label">Department</label>
                <select id="widget-dept" className="form-control" value={form.dept} onChange={e => setForm(p => ({ ...p, dept: e.target.value }))} required>
                  <option value="">Select…</option>
                  {['Cardiology','Neurology','Orthopedics','Pediatrics','General Medicine','Gynecology'].map(d => <option key={d}>{d}</option>)}
                </select>
              </div>
              <button type="submit" className="btn btn-primary" id="widget-submit-btn" style={{ justifyContent: 'center', marginTop: 4 }}>Request callback →</button>
              <p style={{ fontSize: '0.68rem', color: 'var(--gray-300)', textAlign: 'center' }}>🔒 Your info is private &amp; secure</p>
            </form>
          )}
        </div>
      )}

      <button className="floating-btn" onClick={() => setOpen(!open)} id="floating-book-btn" style={{ position: 'relative' }}>
        <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
        {open ? 'Close' : 'Book now'}
        {!open && <span style={{ position: 'absolute', top: -5, right: -5, width: 16, height: 16, borderRadius: '50%', background: '#ef4444', fontSize: '0.6rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 2px 6px rgba(239,68,68,0.45)' }}>1</span>}
      </button>
    </div>
  );
};

export default FloatingWidget;
