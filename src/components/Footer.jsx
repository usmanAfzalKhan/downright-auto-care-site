// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-light text-center py-4 mt-auto">
      <div className="container">
        {/* Later: logo links + social icons + phone */}
        ©{new Date().getFullYear()} Downright Auto Care
      </div>
    </footer>
  );
}
