import React from "react";
import "./SubmissionSuccess.css";

export default function SubmissionSuccess() {
  return (
    <div className="submission-success-container">
      <img
        src="/images/logo.png"
        alt="Downright Auto Care Logo"
        className="spinning-wheel"
      />
      <div className="success-message">
        Thank you! We’ll review your request and be in touch shortly.
      </div>
    </div>
  );
}
