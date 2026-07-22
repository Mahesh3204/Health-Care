import React, { useEffect, useState } from 'react';
import './index.css';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FindDoctor from './components/FindDoctor';
import Departments from './components/Departments';
import AppointmentBooking from './components/AppointmentBooking';
import HealthPackages from './components/HealthPackages';
import EmergencyServices from './components/EmergencyServices';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';

const LOADER_DURATION = 3400;

const App: React.FC = () => {
  const [loadState, setLoadState] = useState<'loading' | 'fading' | 'done'>('loading');

  useEffect(() => {
    const fadeTimer = setTimeout(() => setLoadState('fading'), LOADER_DURATION - 700);
    const doneTimer = setTimeout(() => setLoadState('done'), LOADER_DURATION);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, []);

  return (
    <>
      {loadState !== 'done' && (
        <div
          id="medicare-loader"
          className={`loader-overlay${loadState === 'fading' ? ' fade-out' : ''}`}
        >
          <Loader />
        </div>
      )}

      <div
        id="main-site"
        style={{
          opacity: loadState === 'done' ? 1 : 0,
          transition: 'opacity 0.7s ease',
          visibility: loadState === 'done' ? 'visible' : 'hidden',
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <FindDoctor />
          <Departments />
          <AppointmentBooking />
          <HealthPackages />
          <EmergencyServices />
          <Testimonials />
          <FAQs />
        </main>
        <Footer />
        <FloatingWidget />
      </div>
    </>
  );
};

export default App;
