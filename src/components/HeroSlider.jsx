// src/components/HeroSlider.jsx
import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

const slides = [
  {
    title: "Welcome to Downright Auto Care",
    subtitle: "Luxury Detailing. Downright Perfection.",
    ctaText: null,
    onCta: null,
    desktopImg: "/images/hero-welcome-desktop.png",
    mobileImg: "/images/hero-welcome-mobile.png",
  },
  {
    title: "Exterior Wash",
    subtitle: "Quick hand wash and dry to remove dirt, grime, and road film.",
    ctaText: "View Details",
    onCta: () => window.location.assign("/services/exterior-wash"),
    desktopImg: "/images/hero-exterior-wash-desktop.png",
    mobileImg: "/images/hero-exterior-wash-mobile.png",
  },
  {
    title: "Interior Detailing",
    subtitle: "Complete vacuum, shampoo, and wipe-down of all surfaces.",
    ctaText: "View Details",
    onCta: () => window.location.assign("/services/interior-detailing"),
    desktopImg: "/images/hero-interior-detailing-desktop.png",
    mobileImg: "/images/hero-interior-detailing-mobile.png",
  },
  {
    title: "Ceramic Coating",
    subtitle: "Long-lasting shine and protection against the elements.",
    ctaText: "View Details",
    onCta: () => window.location.assign("/services/ceramic-coating"),
    desktopImg: "/images/hero-ceramic-coating-desktop.png",
    mobileImg: "/images/hero-ceramic-coating-mobile.png",
  },
  {
    title: "Clay Bar Treatment",
    subtitle: "Removes bonded contaminants for a smooth, glass-like paint finish.",
    ctaText: "View Details",
    onCta: () => window.location.assign("/services/clay-bar-treatment"),
    desktopImg: "/images/hero-clay-bar-treatment-desktop.png",
    mobileImg: "/images/hero-clay-bar-treatment-mobile.png",
  },
  {
    title: "Headlight Restoration",
    subtitle: "Remove oxidation and yellowing, restoring clarity and night-time safety.",
    ctaText: "View Details",
    onCta: () => window.location.assign("/services/headlight-restoration"),
    desktopImg: "/images/hero-headlight-restoration-desktop.png",
    mobileImg: "/images/hero-headlight-restoration-mobile.png",
  },
  {
    title: "Pet Hair Removal",
    subtitle: "Specialized tools to lift and remove embedded pet hair from interiors.",
    ctaText: "View Details",
    onCta: () => window.location.assign("/services/pet-hair-removal"),
    desktopImg: "/images/hero-pet-hair-removal-desktop.png",
    mobileImg: "/images/hero-pet-hair-removal-mobile.png",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero-slider">
      <button
        className="slider-btn left"
        onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        {"<"}
      </button>
      <button
        className="slider-btn right"
        onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
        aria-label="Next slide"
      >
        {">"}
      </button>
      <div
        className="slides"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map(
          (
            { title, subtitle, ctaText, onCta, desktopImg, mobileImg },
            i
          ) => (
            <div
              className="slide"
              key={i}
              style={{
                backgroundImage: `url(${isMobile ? mobileImg : desktopImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="overlay" />
              <div className="content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                {/* Only show the button if both ctaText and onCta exist */}
                {ctaText && onCta && (
                  <button className="btn btn-warning btn-lg" onClick={onCta}>
                    {ctaText}
                  </button>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
