// src/pages/ServiceDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import services from "../data/services";

// Four simple badges (icons + labels)
const BADGES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#FFD600" strokeWidth="2" />
        <polyline
          points="7,13 11,17 17,9"
          fill="none"
          stroke="#FFD600"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Satisfaction",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#19e69e" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="#19e69e" strokeWidth="2" />
        <circle cx="12" cy="12" r="1.6" fill="#19e69e" />
      </svg>
    ),
    label: "Eco-friendly",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 16 Q10 14, 11 11 Q11.5 10, 12.5 11 Q13 13, 15 12 Q16 10.5, 15 9 Q14.5 8.5, 13 9 Q12 9.5, 13 11"
          stroke="#FFD600"
          strokeWidth="1.7"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="10" stroke="#FFD600" strokeWidth="2" />
      </svg>
    ),
    label: "Hand-finished",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="8" width="16" height="8" rx="1" stroke="#19e69e" strokeWidth="2" />
        <path d="M6 8 L6 16 M18 8 L18 16" stroke="#19e69e" strokeWidth="2" />
      </svg>
    ),
    label: "Certified Techs",
  },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const svc = services.find((s) => s.slug === slug) || {};

  // scroll to top whenever this page mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // detect mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // on mobile: Satisfaction, Hand-finished on row 1; Eco-friendly, Certified Techs on row 2
  const badgesToRender = isMobile
    ? [BADGES[0], BADGES[2], BADGES[1], BADGES[3]]
    : BADGES;

  // one-line features string
  const featuresText =
    (svc.features || [])
      .join(", ")
      .replace(/, ([^,]*)$/, ", and $1") + ".";

  const renderPricing = () =>
    svc.startingFrom ? (
      <div className="sd-pricing-text">
        Starting from{" "}
        <span className="sd-price-amount">${svc.startingFrom}</span>
      </div>
    ) : (
      <div style={{ color: "#fff" }}>Contact us for pricing</div>
    );

  return (
    <section className="service-detail py-5">
      <div className="container">
        {/* Title & Description */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h2 className="sd-title">{svc.name}</h2>
            <p className="sd-desc">{svc.description}</p>
          </div>
        </div>

        {/* Features | Badges | Pricing */}
        <div className="row sd-main-row mb-5">
          <div className={isMobile ? "col-12 mb-4" : "col-md-6 mb-4"}>
            <h5 className="sd-subhead">What’s Included:</h5>
            <p className="sd-features-p">{featuresText}</p>
          </div>

          <div
            className={
              isMobile
                ? "col-12 mb-4 d-flex justify-content-center"
                : "col-md-3 mb-4 d-flex flex-column align-items-center"
            }
          >
            <div className="sd-badges-wrap">
              {badgesToRender.map((b, i) => (
                <div className="sd-badge" key={i}>
                  <div className="sd-badge-icon">{b.icon}</div>
                  <div className="sd-badge-label">{b.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={
              isMobile
                ? "col-12 mb-4 d-flex justify-content-center"
                : "col-md-3 mb-4"
            }
          >
            <div className="pricing-box sd-pricing-box">
              <h4>Pricing</h4>
              {renderPricing()}
              <button
                className="btn btn-warning btn-lg sd-book-btn"
                onClick={() => navigate("/contact", { state: { service: svc.name } })}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="row mb-5">
          <div className="col-12 d-flex justify-content-center">
            <div className="sd-image-wrapper">
              {svc.imageDesktop ? (
                <img
                  src={svc.imageDesktop}
                  alt={svc.name}
                  className="sd-image"
                />
              ) : (
                <div className="sd-image-placeholder">
                  Service image coming soon
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            className="btn btn-warning btn-lg sd-back-btn"
            onClick={() => navigate("/services")}
          >
            ← Back to Services
          </button>
        </div>
      </div>

      {/* Inline styling */}
      <style>{`
        .sd-title {
          font-weight: 700;
          font-size: ${isMobile ? "2.1rem" : "2.7rem"};
          color: #fff;
        }
        .sd-desc {
          color: #d9e2ef;
          font-size: ${isMobile ? "1.05rem" : "1.19rem"};
        }
        .sd-subhead {
          color: #ffd600;
          font-weight: 700;
          font-size: ${isMobile ? "1.08rem" : "1.16rem"};
          margin-bottom: 8px;
        }
        .sd-features-p {
          color: #fff;
          font-size: ${isMobile ? "1rem" : "1.13rem"};
          line-height: 1.8;
        }
        .sd-badges-wrap {
          /* mobile: 2×2 grid; desktop: vertical list */
          display: ${isMobile ? "grid" : "flex"};
          ${isMobile
            ? "grid-template-columns: repeat(2, auto); gap: 12px 20px;"
            : "flex-direction: column; gap: 12px;"}
        }
        .sd-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: ${isMobile ? "4px 10px" : "8px 14px"};
          background: rgba(16,22,40,0.1);
          border-radius: 100px;
          box-shadow: 0 0 8px rgba(0,0,0,0.2);
        }
        .sd-badge-label {
          color: #fff;
          font-weight: 600;
          font-size: ${isMobile ? "1rem" : "1.07rem"};
        }
        .sd-pricing-box {
          background: #12182b;
          color: #fff;
          border: 2px solid #fff;
          border-radius: 18px;
          padding: ${isMobile ? "24px 16px" : "32px 24px"};
          text-align: center;
        }
        .sd-pricing-text {
          font-size: 1.1rem;
          margin-bottom: 10px;
        }
        .sd-price-amount {
          font-size: 2.1rem;
          font-weight: 700;
          color: #ffd600;
        }
        .sd-book-btn {
          margin-top: 12px;
          min-width: 140px;
        }
        .sd-image-wrapper {
          max-width: 520px;
          width: 100%;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 2px 24px rgba(0,0,0,0.14);
        }
        .sd-image {
          width: 100%;
          display: block;
        }
        .sd-image-placeholder {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.2rem;
        }
        .sd-back-btn {
          max-width: 900px;
          width: 100%;
          border-radius: 10px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
}
