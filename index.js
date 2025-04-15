import React from "react";

export default function RedbirdLandingPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', color: 'white', background: 'black', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Redbird (RBRD)</h1>
      <p style={{ fontSize: '1.25rem', margin: '1rem 0' }}>
        The stable utility token designed for poker players, tippers, and everyday legends.
      </p>
      <button style={{ backgroundColor: 'red', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '12px', border: 'none', cursor: 'pointer' }}>
        Read the Whitepaper
      </button>
    </div>
  );
}