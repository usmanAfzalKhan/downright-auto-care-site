// src/components/ServiceGrid.jsx
import React from 'react';

const services = [
  'Exterior Wash',
  'Interior Detailing',
  'Ceramic Coating',
  'Engine Bay Cleaning',
  'Headlight Restoration',
  'Pet Hair Removal',
];

export default function ServiceGrid() {
  return (
    <section className="service-grid py-5">
      <div className="container">
        <h2 className="mb-4">Our Services</h2>
        <div className="row g-4">
          {services.map((svc, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 text-center">
                <div
                  className="card-img-top bg-secondary placeholder"
                  style={{ height: '180px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{svc}</h5>
                  <button className="btn btn-outline-primary mt-2">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
