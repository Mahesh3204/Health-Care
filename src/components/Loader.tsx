import React, { useState, useEffect } from 'react';

const statusMessages = [
  'Initializing healthcare systems...',
  'Loading patient records...',
  'Setting up appointments...',
  'Connecting secure network...',
  'Almost ready...',
];

const Loader: React.FC = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(p => p < statusMessages.length - 1 ? p + 1 : p), 560);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="loader-logo-wrap">
        <div className="loader-icon">
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 4H18v12H6v12h12v12h12V28h12V16H30V4z"/>
          </svg>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div className="loader-title">Medicare<span> Plus</span></div>
          <div className="loader-tagline" style={{ marginTop: 6 }}>Your Health, Our Priority</div>
        </div>
      </div>
      <div className="loader-progress-wrap">
        <div className="loader-bar-bg">
          <div className="loader-bar-fill" />
        </div>
        <div className="loader-status">{statusMessages[idx]}</div>
        <div className="loader-dots">
          <div className="loader-dot" />
          <div className="loader-dot" />
          <div className="loader-dot" />
        </div>
      </div>
    </>
  );
};

export default Loader;
