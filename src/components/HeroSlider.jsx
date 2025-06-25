// src/components/HeroSlider.jsx
import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

const slides = [
  {
    title: "Exterior Wash",
    subtitle: "Quick hand wash and dry to remove dirt, grime, and road film.",
    ctaText: "View Details",
    onCta: () => window.location.assign("/services/exterior-wash"),
  },
  {
    title: "Interior Detailing",
    subtitle: "Complete vacuum, shampoo, and wipe-down of all surfaces.",
    ctaText: "View Details",
    onCta: () => window.location.assign("/services/interior-detailing"),
  },
  {
    title: "Ceramic Coating",
    subtitle: "Long-lasting shine and protection against the elements.",
    ctaText: "View Details",
    onCta: () => window.location.assign("/services/ceramic-coating"),
  },
  {
    title: "Engine Bay Cleaning",
    subtitle: "Safe degreasing and rinse to keep your engine looking its best.",
    ctaText: "View Details",
    onCta: () => window.location.assign("/services/engine-bay-cleaning"),
  },
  {
    title: "Headlight Restoration",
    subtitle: "Remove oxidation and yellowing, restoring clarity and night-time safety.",
    ctaText: "View Details",
    onCta: () => window.location.assign("/services/headlight-restoration"),
  },
  {
    title: "Pet Hair Removal",
    subtitle: "Specialized tools to lift and remove embedded pet hair from interiors.",
    ctaText: "View Details",
    onCta: () => window.location.assign("/services/pet-hair-removal"),
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // auto-advance every 5s
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map(({ title, subtitle, ctaText, onCta }, i) => (
          <div className="slide" key={i}>
            <div className="overlay" />
            <div className="content">
              <h1>{title}</h1>
              <p>{subtitle}</p>
              <button
                className="btn btn-warning btn-lg"
                onClick={onCta}
              >
                {ctaText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
