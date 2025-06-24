// src/pages/ServicePage.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import allServices from '../data/services' 
// <-- an array of { slug, name, longDescription, image, etc. }

export default function ServicePage() {
  const { slug } = useParams()
  const service = allServices.find(s => s.slug === slug)

  if (!service) {
    return <p>Sorry, that service doesn’t exist.</p>
  }

  return (
    <section className="service-page py-5">
      <div className="container">
        <h1>{service.name}</h1>
        <img src={service.image} alt={service.name} className="img-fluid mb-4"/>
        <p>{service.longDescription}</p>
        <Link to="/contact" className="btn btn-primary btn-lg mt-4">
          Book Now
        </Link>
      </div>
    </section>
  )
}
