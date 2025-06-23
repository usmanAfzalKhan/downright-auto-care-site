// src/pages/Reviews.jsx
import React from 'react';
import ReviewList from '../components/ReviewList';
import AddReviewForm from '../components/AddReviewForm';

export default function Reviews() {
  return (
    <section className="review-page py-5">
      <div className="container">
        {/* centered heading */}

        {/* list of existing reviews */}
        <ReviewList />

        {/* button + form now live inside AddReviewForm */}
        <AddReviewForm />
      </div>
    </section>
  );
}
