import React, { useState } from 'react';

const slots = ['9:00 AM','10:00 AM','11:00 AM','2:00 PM','3:00 PM','4:00 PM','5:00 PM'];

const AppointmentBooking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:'',phone:'',email:'',department:'',doctor:'',date:'',time:'',type:'in-person',notes:'' });
  const upd = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  return (
    <section id="appointment" style={{ padding: '96px 0', background: 'var(--white)' }}>
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <div className="section-eyebrow">📅 Appointments</div>
          <h2 className="section-title">Book a <em>visit</em></h2>
          <p className="section-body">Three quick steps. Instant confirmation by SMS and email.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 40, alignItems: 'start' }}>
          {/* Step sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { n: 1, label: 'Your info',   sub: 'Name, phone & email' },
              { n: 2, label: 'Department',  sub: 'Specialty & doctor' },
              { n: 3, label: 'Date & time', sub: 'Choose your slot' },
            ].map(s => (
              <div key={s.n} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '14px 16px', borderRadius: 'var(--r-lg)', background: step === s.n ? 'var(--primary-50)' : 'transparent', border: `1px solid ${step === s.n ? 'var(--primary-100)' : 'transparent'}`, transition: 'all var(--t-normal)', opacity: step < s.n ? 0.38 : 1 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, background: step > s.n ? 'var(--gray-900)' : step === s.n ? 'var(--primary)' : 'var(--gray-200)', color: step >= s.n ? 'white' : 'var(--gray-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 800 }}>
                  {step > s.n ? '✓' : s.n}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--gray-900)' }}>{s.label}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--gray-400)', marginTop: 2 }}>{s.sub}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 8, padding: '16px', background: 'var(--gray-900)', borderRadius: 'var(--r-lg)', color: 'white' }}>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>Prefer to call?</div>
              <a href="tel:18001234567" style={{ color: 'white', fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none' }}>1800-MED-CARE</a>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>Available 24/7</div>
            </div>
          </div>

          {/* Form card */}
          <div style={{ background: 'var(--surface)', borderRadius: 'var(--r-xl)', border: '1px solid var(--gray-150)', padding: '36px 32px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0', animation: 'scaleIn 0.3s ease' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--gray-900)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', margin: '0 auto 20px' }}>✓</div>
                <h3 style={{ fontWeight: 800, color: 'var(--gray-900)', marginBottom: 8, letterSpacing: '-0.02em' }}>Confirmed!</h3>
                <p style={{ color: 'var(--gray-400)', fontSize: '0.875rem', marginBottom: 4 }}>Confirmation sent to <strong style={{ color: 'var(--gray-700)' }}>{form.email}</strong></p>
                <p style={{ color: 'var(--gray-400)', fontSize: '0.875rem', marginBottom: 24 }}>We'll call <strong style={{ color: 'var(--gray-700)' }}>{form.phone}</strong> within 30 minutes.</p>
                <div style={{ display: 'inline-block', background: 'white', border: '1px solid var(--gray-150)', borderRadius: 'var(--r-lg)', padding: '12px 20px', marginBottom: 24 }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)', marginBottom: 3 }}>Reference ID</div>
                  <div style={{ fontWeight: 800, fontFamily: 'monospace', color: 'var(--primary)', fontSize: '1rem' }}>MC-{Date.now().toString().slice(-6)}</div>
                </div>
                <br />
                <button onClick={() => { setSubmitted(false); setStep(1); setForm({ name:'',phone:'',email:'',department:'',doctor:'',date:'',time:'',type:'in-person',notes:'' }); }} className="btn btn-ghost btn-sm">Book another</button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                {step === 1 && (
                  <div style={{ animation: 'fadeInUp 0.3s ease' }}>
                    <h3 style={{ fontWeight: 800, marginBottom: 24, color: 'var(--gray-900)', fontSize: '1.05rem' }}>Personal information</h3>
                    <div id="personal-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                      <div className="form-group"><label className="form-label">Full name</label><input id="appt-name" className="form-control" type="text" placeholder="Jane Smith" value={form.name} onChange={e => upd('name', e.target.value)} required /></div>
                      <div className="form-group"><label className="form-label">Phone number</label><input id="appt-phone" className="form-control" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => upd('phone', e.target.value)} required /></div>
                    </div>
                    <div className="form-group" style={{ marginBottom: 20 }}><label className="form-label">Email address</label><input id="appt-email" className="form-control" type="email" placeholder="you@example.com" value={form.email} onChange={e => upd('email', e.target.value)} required /></div>
                    <div style={{ marginBottom: 24 }}>
                      <label className="form-label" style={{ display: 'block', marginBottom: 8 }}>Visit type</label>
                      <div style={{ display: 'flex', gap: 10 }}>
                        {[{ v:'in-person', l:'🏥 In-Person' }, { v:'video', l:'💻 Video' }].map(o => (
                          <button key={o.v} type="button" onClick={() => upd('type', o.v)} style={{ flex: 1, padding: '10px', border: `1.5px solid ${form.type === o.v ? 'var(--gray-900)' : 'var(--gray-200)'}`, background: form.type === o.v ? 'var(--gray-900)' : 'white', color: form.type === o.v ? 'white' : 'var(--gray-600)', borderRadius: 'var(--r-md)', fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer', transition: 'all var(--t-fast)', fontFamily: 'var(--font-sans)' }}>{o.l}</button>
                        ))}
                      </div>
                    </div>
                    <button type="button" onClick={() => { if (form.name && form.phone && form.email) setStep(2); }} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Continue →</button>
                  </div>
                )}
                {step === 2 && (
                  <div style={{ animation: 'fadeInUp 0.3s ease' }}>
                    <h3 style={{ fontWeight: 800, marginBottom: 24, color: 'var(--gray-900)', fontSize: '1.05rem' }}>Specialty & doctor</h3>
                    <div className="form-group" style={{ marginBottom: 14 }}><label className="form-label">Department</label><select id="appt-dept" className="form-control" value={form.department} onChange={e => upd('department', e.target.value)} required><option value="">Choose department…</option>{['Cardiology','Neurology','Orthopedics','Pediatrics','Oncology','Gynecology','Dental','Ophthalmology','Dermatology','Psychiatry'].map(d => <option key={d}>{d}</option>)}</select></div>
                    <div className="form-group" style={{ marginBottom: 14 }}><label className="form-label">Preferred doctor <span style={{ color: 'var(--gray-300)' }}>(optional)</span></label><select id="appt-doctor" className="form-control" value={form.doctor} onChange={e => upd('doctor', e.target.value)}><option value="">Any available doctor</option>{['Dr. Aisha Patel','Dr. Rajesh Kumar','Dr. Sarah Johnson','Dr. Meera Nair','Dr. Arjun Mehta'].map(d => <option key={d}>{d}</option>)}</select></div>
                    <div className="form-group" style={{ marginBottom: 24 }}><label className="form-label">Symptoms / notes <span style={{ color: 'var(--gray-300)' }}>(optional)</span></label><textarea id="appt-notes" className="form-control" placeholder="Describe your symptoms…" value={form.notes} onChange={e => upd('notes', e.target.value)} rows={3} style={{ resize: 'vertical' }} /></div>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <button type="button" onClick={() => setStep(1)} className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center' }}>← Back</button>
                      <button type="button" onClick={() => { if (form.department) setStep(3); }} className="btn btn-primary" style={{ flex: 2, justifyContent: 'center' }}>Continue →</button>
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div style={{ animation: 'fadeInUp 0.3s ease' }}>
                    <h3 style={{ fontWeight: 800, marginBottom: 24, color: 'var(--gray-900)', fontSize: '1.05rem' }}>Date & time</h3>
                    <div className="form-group" style={{ marginBottom: 20 }}><label className="form-label">Date</label><input id="appt-date" className="form-control" type="date" value={form.date} onChange={e => upd('date', e.target.value)} min={new Date().toISOString().split('T')[0]} required /></div>
                    <div style={{ marginBottom: 20 }}>
                      <label className="form-label" style={{ display: 'block', marginBottom: 10 }}>Available slots</label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {slots.map(s => (
                          <button key={s} type="button" onClick={() => upd('time', s)} id={`slot-${s.replace(/[: ]/g,'-')}`} style={{ padding: '8px 14px', border: `1.5px solid ${form.time === s ? 'var(--gray-900)' : 'var(--gray-200)'}`, background: form.time === s ? 'var(--gray-900)' : 'white', color: form.time === s ? 'white' : 'var(--gray-600)', borderRadius: 'var(--r-md)', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', transition: 'all var(--t-fast)', fontFamily: 'var(--font-sans)' }}>{s}</button>
                        ))}
                      </div>
                    </div>
                    {form.date && form.time && (
                      <div style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-100)', borderRadius: 'var(--r-lg)', padding: '14px 16px', marginBottom: 20, animation: 'scaleIn 0.25s ease' }}>
                        {[['Patient', form.name],['Department', form.department],['Date', new Date(form.date).toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short',year:'numeric'})],['Time', form.time],['Type', form.type === 'video' ? 'Video consultation' : 'In-person visit']].map(([k,v]) => (
                          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: 4 }}>
                            <span style={{ color: 'var(--gray-400)' }}>{k}</span>
                            <span style={{ fontWeight: 600, color: 'var(--gray-800)' }}>{v}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div style={{ display: 'flex', gap: 10 }}>
                      <button type="button" onClick={() => setStep(2)} className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center' }}>← Back</button>
                      <button type="submit" className="btn btn-primary" style={{ flex: 2, justifyContent: 'center' }} id="appt-confirm-btn">Confirm booking</button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) { #appointment > .container > div:nth-of-type(2) { grid-template-columns: 1fr !important; } }
        @media (max-width: 480px) { #personal-info-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

export default AppointmentBooking;
