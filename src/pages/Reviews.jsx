// src/pages/Reviews.jsx
import React, { useState, useRef } from 'react';
import ReviewList from '../components/ReviewList';
import AddReviewForm from '../components/AddReviewForm';

export default function Reviews() {
  const [showForm, setShowForm] = useState(false);
  const buttonRef = useRef(null);

  const scrollToButton = () => {
    if (buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="review-page py-5">
      <div className="container text-start">
        <p className="text-center text-white mb-5">
          Hear directly from our valued clients and discover why Downright Auto Care is the trusted choice for premium detailing. To share your own experience, simply click{' '}
          <span
            onClick={scrollToButton}
            className="fw-bold"
            style={{ cursor: 'pointer' }}
          >
            Add a Review
          </span>{' '}
          below.
        </p>
        <ReviewList />

        {!showForm ? (
          <div className="text-center" ref={buttonRef}>
            <button
              className="btn btn-warning btn-lg"
              onClick={() => setShowForm(true)}
            >
              Add a Review
            </button>
          </div>
        ) : (
          <div className="mt-4">
            <AddReviewForm onDone={() => setShowForm(false)} />
          </div>
        )}
      </div>
    </section>
  );
}
