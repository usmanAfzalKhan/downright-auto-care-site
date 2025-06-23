// src/components/Header.jsx
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

export default function Header() {
  return (
    <>
      <style>{`
        header, .navbar {
          align-items: center;
          border-bottom: 2px solid rgba(0,0,0,0.1);
        }
        .container-fluid {
          padding: 0;
        }
        .brand-text {
          display: flex;
          flex-direction: column;
          margin-left: 0.5rem;
          text-align: left;
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
        }
        /* hide bootstrap dropdown caret */
        .dropdown-toggle::after {
          display: none !important;
        }
      `}</style>

      <header>
        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container-fluid d-flex justify-content-between">

            {/* Brand (logo + two-line text) */}
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

            {/* Desktop nav */}
            <ul className="navbar-nav d-none d-lg-flex">
              {['Home','About','Services','Reviews','Contact'].map(label => (
                <li className="nav-item" key={label}>
                  <NavLink
                    to={ label === 'Home' ? '/' : `/${label.toLowerCase()}` }
                    className="nav-link"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile dropdown */}
            <div className="dropdown d-lg-none">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="mobileMenuBtn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end p-2"
                aria-labelledby="mobileMenuBtn"
                style={{ minWidth: '8rem' }}
              >
                {['Home','About','Services','Reviews','Contact'].map(label => (
                  <li key={label}>
                    <NavLink
                      to={ label === 'Home' ? '/' : `/${label.toLowerCase()}` }
                      className="dropdown-item"
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </nav>
      </header>
    </>
  )
}
