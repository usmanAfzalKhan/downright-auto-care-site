// src/components/Header.jsx
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

export default function Header() {
  return (
    <>
      <style>{`
        /* Brand: logo + text */
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo-img {
          transition: transform 0.3s ease, filter 0.3s ease;
          cursor: pointer;
          border-radius: 50%;
        }
        .logo-img:hover {
          transform: scale(1.1);
          filter: drop-shadow(0 0 8px rgba(255, 204, 0, 0.8));
        }
        .logo-img:active {
          transform: scale(0.95);
          filter: drop-shadow(0 0 12px rgba(255, 204, 0, 1));
          outline: 2px solid #ffcc00;
          outline-offset: 2px;
        }

        /* Company name styling */
        .brand-text {
          font-family: 'YourFontName', sans-serif;
          font-weight: 700;
          font-size: 1.25rem; /* adjust as needed */
          color: #000;        /* or whatever your header text color is */
          line-height: 1;
          white-space: nowrap;
        }
      `}</style>

      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
          <div className="container">
            {/* Logo + Company Name */}
            <Link to="/" className="navbar-brand p-0">
              <img
                src={logo}
                alt="Downright Auto Care"
                width={60}
                height={60}
                className="logo-img"
              />
              <span className="brand-text">Downright Auto Care</span>
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
    </>
  )
}
