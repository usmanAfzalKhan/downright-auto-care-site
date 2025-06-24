// src/pages/ServiceDetail.jsx
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import services from '../data/services'  // your array of { slug, name, description, features, pricing, ... }

export default function ServiceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const svc = services.find(s => s.slug === slug) || {}

  // Render pricing whether it's an array or an object
  const renderPricing = () => {
    if (Array.isArray(svc.pricing)) {
      return svc.pricing.map((line, i) => <p key={i}>{line}</p>)
    } else if (svc.pricing && typeof svc.pricing === 'object') {
      return Object.entries(svc.pricing).map(([tier, cost]) => (
        <p key={tier}>
          ${cost} – {tier.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
        </p>
      ))
    }
    return <p>Contact us for pricing</p>
  }

  return (
    <section className="service-detail py-5">
      <div className="container">
        {/* Title + description */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-8 text-center">
            <h2 className="mb-3">{svc.name}</h2>
            <p className="lead">{svc.description}</p>
          </div>
        </div>

        {/* Features list + pricing */}
        <div className="row align-items-start mb-5">
          <div className="col-12 col-lg-7">
            <ul className="mb-0">
              {(svc.features || []).map((feat, i) => <li key={i}>{feat}</li>)}
            </ul>
          </div>
          <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
            <div className="pricing-box">
              <h4 className="mb-3">Pricing</h4>
              {renderPricing()}
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="text-center mb-5">
          <button
            className="btn btn-outline-primary btn-lg me-3"
            onClick={() => { /* your booking flow */ }}
          >
            Book Now
          </button>
          <button
            className="btn btn-outline-light btn-lg"
            onClick={() => navigate('/services')}
          >
            ← Back to Services
          </button>
        </div>

        <hr className="border-white mb-5" />

        {/* Placeholder image or gallery */}
        <div className="row">
          <div className="col-12">
            <div className="service-image mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
