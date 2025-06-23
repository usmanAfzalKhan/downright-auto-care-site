// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-light text-center py-4 mt-5">
      <div className="container">
        {/* Company name (update hrefs later) */}
        <div className="mb-2">
          <a href="#" className="fw-bold text-decoration-none">
            Downright Auto Care
          </a>
        </div>
        {/* Phone number */}
        <div>
          <a href="tel:+1234567890" className="text-decoration-none">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </footer>
  );
}
