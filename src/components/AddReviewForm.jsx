// src/components/AddReviewForm.jsx
import React, { useState } from 'react';

export default function AddReviewForm() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [stars, setStars] = useState(0);
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || stars < 1 || !text.trim()) {
      return; // simple guard; you can show an error message here
    }
    // TODO: call your Netlify function to write to Firestore
    // await fetch('/.netlify/functions/submitReview', { ... })

    setSubmitted(true);
  };

  if (!showForm) {
    return (
      <div className="container py-5 text-center">
        <button
          className="btn btn-outline-primary"
          onClick={() => setShowForm(true)}
        >
          Add a Review
        </button>
      </div>
    );
  }

  return (
    <section className="add-review py-5">
      <div className="container">
        {submitted ? (
          <div className="alert alert-success">
            Thanks! Your review has been submitted.
          </div>
        ) : (
          <>
            <h3 className="mb-4">Add a Review</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="review-name" className="form-label">
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  id="review-name"
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Rating<span className="text-danger">*</span>
                </label>
                <div>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      onClick={() => setStars(i)}
                      style={{ cursor: 'pointer', fontSize: '1.5rem', color: i <= stars ? '#ffc107' : '#e4e5e9' }}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="review-text" className="form-label">
                  Review<span className="text-danger">*</span>
                </label>
                <textarea
                  id="review-text"
                  className="form-control"
                  rows="4"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit Review
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
