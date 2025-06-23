// src/components/OffersRow.jsx
import React from 'react';

export default function OffersRow() {
  return (
    <section className="offers-row py-5">
      <div className="container d-flex justify-content-between">
        {['Offer 1', 'Offer 2', 'Offer 3'].map((title, i) => (
          <div
            key={i}
            className="offer-card border p-4 text-center"
            style={{ width: '30%' }}
          >
            <h4>{title}</h4>
            <p>Details coming soon</p>
          </div>
        ))}
      </div>
    </section>
  );
}
