import React from 'react'
import { Link } from 'react-router-dom'
import services from '../data/services'

export default function ServiceGrid() {
  return (
    <section className="service-grid py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Our Services</h2>
        <div className="row g-4">
          {services.map(svc => (
            <div key={svc.slug} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 text-center">
                {/* placeholder for future image */}
                <div
                  className="card-img-top bg-secondary placeholder"
                  style={{ height: '180px' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{svc.name}</h5>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="btn btn-outline-primary mt-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
