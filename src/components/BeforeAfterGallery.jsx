// src/components/BeforeAfterGallery.jsx
import React from 'react';

export default function BeforeAfterGallery() {
  return (
    <section className="before-after-gallery py-5">
      <div className="container">
        <h2>Before & After</h2>
        <div className="row gy-4">
          <div className="col-12 col-md-6">
            <div className="border p-2 text-center">
              <p><strong>Before</strong></p>
              <div className="placeholder bg-secondary" style={{height: '200px'}} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="border p-2 text-center">
              <p><strong>After</strong></p>
              <div className="placeholder bg-secondary" style={{height: '200px'}} />
            </div>
          </div>
        </div>
        {/* Add more pairs as needed */}
      </div>
    </section>
  );
}
