// src/components/ReviewList.jsx
import React from 'react';

// Seeded reviews (will be stored in Firestore on deploy)
const seededReviews = [
  { name: 'Abu Bakr', stars: 5, text: 'Absolutely outstanding work—my car has never looked better!' },
  { name: 'Umar',     stars: 4, text: 'Great attention to detail. Highly recommended!' },
  { name: 'Usman',    stars: 5, text: 'Fast, professional, and eco-friendly—couldn’t ask for more.' },
  { name: 'Ali',      stars: 4, text: 'Excellent service; will definitely return for the next clean.' },
  { name: 'Hassan',   stars: 5, text: 'Top-notch results every time. Five stars!' },
];

export default function ReviewList() {
  return (
    <section className="review-list py-5">
      <div className="container">
        <h2 className="mb-4">Customer Reviews</h2>
        {seededReviews.map((r, i) => (
          <div key={i} className="border rounded p-3 mb-3">
            <strong>{r.name}</strong>
            <div>{'★'.repeat(r.stars) + '☆'.repeat(5 - r.stars)}</div>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
