// src/components/AddReviewForm.jsx
import React, { useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  serverTimestamp
} from 'firebase/firestore';

export default function AddReviewForm({ onDone }) {
  const [form, setForm] = useState({ name: '', stars: 5, text: '' });
  const [submitting, setSubmitting] = useState(false);

  const fieldStyle = {
    backgroundColor: '#1a2032',
    color: '#e1e8f0',
    border: '1px solid #444',
    borderRadius: '4px'
  };
  const placeholderStyle = { color: '#777' };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const reviewsRef = collection(db, 'reviews');
    const allSnap = await getDocs(reviewsRef);
    if (allSnap.size >= 6) {
      const oldestQ = query(reviewsRef, orderBy('createdAt','asc'), limit(1));
      const oldestSnap = await getDocs(oldestQ);
      oldestSnap.forEach(docSnap =>
        deleteDoc(doc(db, 'reviews', docSnap.id))
      );
    }

    await addDoc(reviewsRef, {
      name: form.name,
      stars: form.stars,
      text: form.text,
      createdAt: serverTimestamp()
    });

    setSubmitting(false);
    onDone?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded bg-dark text-light border"
    >
      <div className="mb-3">
        <label className="form-label text-white">
          Name<span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          style={fieldStyle}
          placeholder="Your name"
          disabled={submitting}
        />
      </div>

      <div className="mb-3">
        <label className="form-label text-white">
          Rating<span className="text-danger">*</span>
        </label>
        <select
          className="form-select"
          name="stars"
          value={form.stars}
          onChange={handleChange}
          required
          style={fieldStyle}
          disabled={submitting}
        >
          {[5,4,3,2,1].map((n) => (
            <option key={n} value={n} style={fieldStyle}>
              {n} ★
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label text-white">
          Review<span className="text-danger">*</span>
        </label>
        <textarea
          className="form-control"
          name="text"
          rows={3}
          value={form.text}
          onChange={handleChange}
          required
          style={fieldStyle}
          placeholder="Your review"
          disabled={submitting}
        />
      </div>

      <button
        type="submit"
        className="btn btn-outline-warning btn-lg"
        disabled={submitting}
      >
        {submitting ? 'Submitting…' : 'Submit Review'}
      </button>
    </form>
  );
}
