// src/pages/Reviews.jsx
import React, { useState } from 'react';
import ReviewList from '../components/ReviewList';
import AddReviewForm from '../components/AddReviewForm';

export default function Reviews() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="review-page py-5">
      <div className="container text-start">
        <ReviewList />

        { !showForm ? (
          <div className="text-center">
            {/* no more stray `button` prop */}
            <button
              className="btn btn-warning btn-lg"
              onClick={() => setShowForm(true)}
            >
              Add a Review
            </button>
          </div>
        ) : (
          <div className="mt-4">
            <AddReviewForm />
          </div>
        ) }
      </div>
    </section>
  );
}
