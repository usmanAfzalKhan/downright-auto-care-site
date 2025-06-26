// src/components/Owner.jsx
import React from "react";

export default function Owner() {
  return (
    <section className="about-owner py-5">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center">
        {/* Text block (left on desktop, centered on mobile) */}
        <div
          className="owner-info text-center text-md-center"
          style={{
            maxWidth: 500,
            margin: "0 0 0 auto", // push left on desktop, center on mobile
          }}
        >
          <h2 className="mb-3" style={{ fontWeight: 700 }}>Meet Muhammad Raqueeb</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            Muhammad Raqueeb brings an unmatched level of care and expertise to every project at Downright Auto Care. With years of experience and a genuine passion for automotive excellence, he approaches every detail job with precision and pride. Clients appreciate his integrity, warm approach, and his commitment to exceeding expectations—whether it’s a basic wash or a complete restoration. Muhammad’s dedication to quality, eco-friendly solutions, and personal service has earned the trust of drivers who want their vehicles to look and feel brand new. Each car that leaves Downright Auto Care reflects his belief in honest work and meticulous attention to detail.
          </p>
        </div>
        {/* Owner image (right on desktop, centered on mobile) */}
        <img
          src="/images/owner.jpeg"
          alt="Muhammad Raqueeb"
          className="owner-img mb-4 mb-md-0 ms-md-5"
          style={{
            width: 210,
            height: 210,
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: "0 4px 24px rgba(22,33,50,0.13)",
            border: "3px solid #FFD600",
          }}
        />
      </div>
    </section>
  );
}
