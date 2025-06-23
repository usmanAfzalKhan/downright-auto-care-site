// src/components/Header.jsx
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

export default function Header() {
  return (
    <>
      <style>{`
        /* keep the two-line brand text left-aligned */
        .brand-text {
          display: flex;
          flex-direction: column;
          margin-left: 0.5rem;
          text-align: left;
        }

        /* container flex so logo/brand on left, toggler on right */
        .navbar .container {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        /* logo hover effects */
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
      `}</style>

      <header>
        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container">

            {/* Logo + two-line brand text (flush left) */}
            <Link to="/" className="navbar-brand d-flex align-items-center p-0">
              <img
                src={logo}
                alt="Downright Auto Care"
                width={60}
                height={60}
                className="logo-img"
              />
              <div className="brand-text">
                <span>Downright Auto</span>
                <span>Care</span>
              </div>
            </Link>

            {/* Hamburger toggle (flush right) */}
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

            {/* Collapsed menu slides in under toggler, right-aligned */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
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
