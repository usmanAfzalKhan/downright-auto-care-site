import React, { useState, useRef } from "react";

const offersDetail = [
  {
    img: '/images/offer3.jpeg',
    alt: '50% Off To Start - Monthly Club Perk',
    title: '50% Off To Start',
    subtitle: 'Monthly Club Perk',
    desc: (
      <>
        <strong>Sign up for a full monthly maintenance detail and enjoy 50% off your first visit.</strong><br />
        This recurring service is perfect for drivers who want their car looking flawless year-round. Keep your vehicle spotless and protected, all while saving money with your exclusive membership perk.
      </>
    ),
  },
  {
    img: '/images/offer2.jpeg',
    alt: 'Free Ceramic Spray Sealant',
    title: 'Free Ceramic Spray Sealant',
    subtitle: 'With Full In & Out Detail',
    desc: (
      <>
        <ul className="mb-2" style={{ textAlign: 'left' }}>
          <li>Full interior vacuum & wipe-down</li>
          <li>Salt / stain removal</li>
          <li>Exterior hand wash & wheel clean</li>
          <li>Finished with a premium ceramic spray sealant for lasting shine & protection</li>
        </ul>
        <div>Book a Full In & Out Detail and get a <b>free ceramic spray sealant</b> to protect your paint for weeks!</div>
      </>
    ),
  },
  {
    img: '/images/offer1.jpeg',
    alt: 'Refer a Friend - 25% Off',
    title: 'Friends With Benefits',
    subtitle: 'Refer a Friend & Both Get 25% Off',
    desc: (
      <>
        <strong>Share Downright Auto Care with a friend and you both save 25% on your next detail!</strong>
        <br />Call <b>647-560-8039</b> or mention your friend at your next appointment.
      </>
    ),
  },
];

export default function OffersRow() {
  const [modalIdx, setModalIdx] = useState(null);
  const modalRef = useRef();

  const closeModal = () => setModalIdx(null);

  // Close modal on background click
  const handleModalBgClick = (e) => {
    if (e.target === modalRef.current) closeModal();
  };

  return (
    <section className="offers-row py-5">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {offersDetail.map((offer, i) => (
            <div className="col-12 col-md-4 d-flex justify-content-center" key={i}>
              <div
                className="offer-card p-2 shadow rounded-3"
                style={{ background: "#191e2a", cursor: "pointer" }}
                onClick={() => setModalIdx(i)}
                tabIndex={0}
              >
                <img
                  src={offer.img}
                  alt={offer.alt}
                  className="img-fluid rounded-3"
                  style={{ width: "100%", maxHeight: 350, objectFit: "cover", boxShadow: "0 2px 16px rgba(22,33,50,0.13)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalIdx !== null && (
        <div
          className="offer-modal-bg"
          ref={modalRef}
          onClick={handleModalBgClick}
          style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(18,18,28,0.77)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2000,
          }}
        >
          <div
            className="offer-modal-content bg-dark text-light rounded-4 p-4 shadow-lg"
            style={{ maxWidth: 420, width: "90vw", textAlign: "center", position: "relative" }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="btn-close"
              aria-label="Close"
              style={{
                position: "absolute", top: 18, right: 24, background: "none", color: "#FFD600", border: "none", fontSize: 32, cursor: "pointer"
              }}
              onClick={closeModal}
            >&times;</button>
            <img
              src={offersDetail[modalIdx].img}
              alt={offersDetail[modalIdx].alt}
              className="rounded-3 mb-3"
              style={{ width: "100%", maxHeight: 170, objectFit: "cover", border: "2px solid #FFD600" }}
            />
            <h3 className="fw-bold mb-1">{offersDetail[modalIdx].title}</h3>
            <div className="mb-3 text-warning" style={{ fontWeight: 500 }}>{offersDetail[modalIdx].subtitle}</div>
            <div className="mb-3">{offersDetail[modalIdx].desc}</div>
            <a
              href="/contact"
              className="btn btn-warning w-100"
              style={{ fontWeight: 600 }}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
