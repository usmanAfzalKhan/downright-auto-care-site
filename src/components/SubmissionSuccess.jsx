// src/components/SubmissionSuccess.jsx
import React from "react";
import "./SubmissionSuccess.css";

export default function SubmissionSuccess() {
  return (
    <div className="submission-success-container">
      <svg
        className="spinning-wheel"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
      >
        <circle cx="32" cy="32" r="30" fill="none" stroke="#FFD600" strokeWidth="4"/>
        <line x1="32" y1="2" x2="32" y2="62" stroke="#FFD600" strokeWidth="4"/>
        <line x1="2" y1="32" x2="62" y2="32" stroke="#FFD600" strokeWidth="4"/>
      </svg>
      <div className="success-message">
        Thank you! We’ll review your request and be in touch within 2–3 business days.
      </div>
    </div>
  );
}
