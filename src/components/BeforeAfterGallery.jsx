import React, { useState, useEffect, useRef } from 'react';

// Images for Recent Work Gallery
const galleryImages = [
  "/images/recent1.jpeg",
  "/images/recent4.jpeg",
  "/images/recent6.jpeg",
  "/images/recent2.jpeg",
  "/images/recent3.jpeg",
  "/images/recent5.jpeg",
];

// Images for Before/After Gallery (always in pairs)
const images = [
  { label: 'Before', src: '/images/before.jpg' },
  { label: 'After', src: '/images/after.jpg' },
  { label: 'Before', src: '/images/before2.jpg' },
  { label: 'After', src: '/images/after2.jpg' },
  { label: 'Before', src: '/images/before3.jpg' },
  { label: 'After', src: '/images/after3.jpg' },
];

export default function AboutPortfolioPage() {
  const [zoomImg, setZoomImg] = useState(null);
  const [zoomIdx, setZoomIdx] = useState(null); // Index for current zoomed image
  const [zoomType, setZoomType] = useState(null); // 'beforeafter' or 'recentwork'
  const zoomBoxRef = useRef(null);

  // ---- SWIPE HANDLING ----
  const [touchStartX, setTouchStartX] = useState(null);
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    const threshold = 50; // px required to trigger swipe

    if (zoomImg && Math.abs(diff) > threshold) {
      if (zoomType === "beforeafter" && zoomIdx !== null) {
        if (diff > 0) {
          // Swipe right (previous)
          const prevIdx = (zoomIdx - 1 + images.length) % images.length;
          setZoomIdx(prevIdx);
          setZoomImg(images[prevIdx].src);
        } else {
          // Swipe left (next)
          const nextIdx = (zoomIdx + 1) % images.length;
          setZoomIdx(nextIdx);
          setZoomImg(images[nextIdx].src);
        }
      }
      if (zoomType === "recentwork" && zoomIdx !== null) {
        if (diff > 0) {
          // Swipe right (previous)
          const prevIdx = (zoomIdx - 1 + galleryImages.length) % galleryImages.length;
          setZoomIdx(prevIdx);
          setZoomImg(galleryImages[prevIdx]);
        } else {
          // Swipe left (next)
          const nextIdx = (zoomIdx + 1) % galleryImages.length;
          setZoomIdx(nextIdx);
          setZoomImg(galleryImages[nextIdx]);
        }
      }
    }
    setTouchStartX(null);
  };
  // ---- END SWIPE HANDLING ----

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!zoomImg) return;

      // Prevent page scroll for left/right
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
      }

      if (e.key === "Escape") {
        setZoomImg(null);
        setZoomIdx(null);
        setZoomType(null);
      }

      // Only navigate if modal is open and zoomIdx is set
      if (zoomType === "beforeafter" && zoomIdx !== null && images[zoomIdx] && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
        if (e.key === "ArrowLeft") {
          setZoomIdx(idx => {
            const prevIdx = (idx - 1 + images.length) % images.length;
            setZoomImg(images[prevIdx].src);
            return prevIdx;
          });
        }
        if (e.key === "ArrowRight") {
          setZoomIdx(idx => {
            const nextIdx = (idx + 1) % images.length;
            setZoomImg(images[nextIdx].src);
            return nextIdx;
          });
        }
      }
      if (zoomType === "recentwork" && zoomIdx !== null && galleryImages[zoomIdx] && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
        if (e.key === "ArrowLeft") {
          setZoomIdx(idx => {
            const prevIdx = (idx - 1 + galleryImages.length) % galleryImages.length;
            setZoomImg(galleryImages[prevIdx]);
            return prevIdx;
          });
        }
        if (e.key === "ArrowRight") {
          setZoomIdx(idx => {
            const nextIdx = (idx + 1) % galleryImages.length;
            setZoomImg(galleryImages[nextIdx]);
            return nextIdx;
          });
        }
      }
    };
    if (zoomImg) window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomImg, zoomIdx, zoomType]);

  const handleZoomBoxClick = (e) => {
    if (e.target === zoomBoxRef.current) {
      setZoomImg(null);
      setZoomIdx(null);
      setZoomType(null);
    }
  };

  // Group images into pairs
  const pairs = [];
  for (let i = 0; i < images.length; i += 2) {
    pairs.push([images[i], images[i + 1]]);
  }

  return (
    <>
      {/* Before & After Section */}
      <section className="before-after-gallery py-5">
        <div className="container">
          <h2>Before & After</h2>
          <p className="text-secondary small mb-4" style={{ letterSpacing: ".02em" }}>
            <em>Tip: Click on any image to view it larger.</em>
          </p>
          {pairs.map((pair, pairIdx) => (
            <div className="row gy-4 gx-2 mb-4" key={pairIdx}>
              {pair.map(({ label, src }, i) => {
                const imgIdx = pairIdx * 2 + i;
                return (
                  <div className="col-6" key={i}>
                    <div className="before-after-img-box">
                      <img
                        src={src}
                        alt={label}
                        className="before-after-img"
                        style={{ cursor: "zoom-in" }}
                        onClick={() => {
                          setZoomImg(src);
                          setZoomIdx(imgIdx);
                          setZoomType("beforeafter");
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        {/* Floating Zoom Box */}
        {zoomImg && (
          <div
            className="zoom-float-box"
            tabIndex={-1}
            ref={zoomBoxRef}
            onClick={handleZoomBoxClick}
          >
            <img
              src={zoomImg}
              alt="Zoomed"
              className="zoom-float-img"
              style={{ maxWidth: "90vw", maxHeight: "90vh", borderRadius: "16px" }}
              onClick={e => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            />
            <button className="zoom-close-btn" onClick={() => {
              setZoomImg(null);
              setZoomIdx(null);
              setZoomType(null);
            }} aria-label="Close">&times;</button>
          </div>
        )}
      </section>

      {/* Recent Work Gallery */}
      <section className="detail-gallery py-5">
        <div className="container">
          <h2>Our Recent Work</h2>
          <p className="text-secondary small mb-4" style={{ letterSpacing: ".02em" }}>
            <em>Tip: Click on any image to view it larger.</em>
          </p>
          <div className="row g-3">
            {galleryImages.map((src, idx) => (
              <div className="col-12 col-sm-6 col-md-4" key={idx}>
                <div className="gallery-img-box">
                  <img
                    src={src}
                    alt={`Gallery Clean ${idx + 1}`}
                    className="img-fluid"
                    style={{ cursor: "zoom-in" }}
                    loading="lazy"
                    onClick={() => {
                      setZoomImg(src);
                      setZoomIdx(idx);
                      setZoomType("recentwork");
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="detail-video-section py-5">
        <div className="container">
          <h2>See Our Detailing In Action</h2>
          <div className="responsive-video-wrapper mb-4">
            <video
              src="/videos/video1.mp4"
              controls
              playsInline
              style={{ borderRadius: "16px", boxShadow: "0 6px 32px rgba(22,33,50,0.17)" }}
            />
          </div>
          <div className="responsive-video-wrapper mb-4">
            <video
              src="/videos/video2.mp4"
              controls
              playsInline
              style={{ borderRadius: "16px", boxShadow: "0 6px 32px rgba(22,33,50,0.17)" }}
            />
          </div>
          <div className="responsive-video-wrapper mb-4">
            <video
              src="/videos/video3.mp4"
              controls
              playsInline
              style={{ borderRadius: "16px", boxShadow: "0 6px 32px rgba(22,33,50,0.17)" }}
            />
          </div>
          <div className="responsive-video-wrapper">
            <video
              src="/videos/video4.mp4"
              controls
              playsInline
              style={{ borderRadius: "16px", boxShadow: "0 6px 32px rgba(22,33,50,0.17)" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
