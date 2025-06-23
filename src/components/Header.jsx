// src/components/Header.jsx
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'  // adjust path if needed

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img 
              src={logo} 
              alt="Downright Auto Care" 
              height={60} 
              style={{ objectFit: 'contain' }} 
            />
          </Link>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink end to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/reviews" className="nav-link">Reviews</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
