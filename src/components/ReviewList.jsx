// src/components/ReviewList.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot
} from 'firebase/firestore';

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'reviews'),
      orderBy('createdAt', 'desc'),
      limit(8)
    );
    const unsubscribe = onSnapshot(
      q,
      snapshot => {
        setReviews(
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
        );
      },
      err => {
        console.error("Snapshot listener error:", err);
      }
    );
    return unsubscribe;
  }, []);

  return (
    <section className="review-list py-5">
      <div className="container">
        <h2 className="text-center mb-4">Customer Reviews</h2>
        {reviews.map((r) => {
          // Convert Firestore Timestamp to JS Date
          const ts = r.createdAt;
          const date = ts && ts.toDate ? ts.toDate() : null;
          const formatted = date
            ? date.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
            : '';

          return (
            <div key={r.id} className="border rounded p-3 mb-3 text-start">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <strong className="text-white">{r.name}</strong>
                {formatted && (
                  <small style={{ color: '#d9e2ef', fontSize: '0.9rem' }}>
                    {formatted}
                  </small>
                )}
              </div>
              <div className="mb-2 text-warning">
                {'★'.repeat(r.stars) + '☆'.repeat(5 - r.stars)}
              </div>
              <p className="text-white">{r.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
