import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OffersRow.css"; // make sure this import matches your project

const offersDetail = [
  {
    img: "/images/offer3.jpeg",
    alt: "50% Off To Start - Monthly Club Perk",
    title: "50% Off To Start",
    subtitle: "Monthly Club Perk",
    desc: (
      <>
        <strong>
          Sign up for a full monthly maintenance detail and enjoy 50% off your first visit.
        </strong>
        <br />
        This recurring service is perfect for drivers who want their car looking flawless year-round. Keep your vehicle spotless and protected, all while saving money with your exclusive membership perk.
      </>
    ),
  },
  {
    img: "/images/offer2.jpeg",
    alt: "Free Ceramic Spray Sealant",
    title: "Free Ceramic Spray Sealant",
    subtitle: "With Full In & Out Detail",
    desc: (
      <>
        <ul className="mb-2" style={{ textAlign: "left" }}>
          <li>Full interior vacuum & wipe-down</li>
          <li>Salt / stain removal</li>
          <li>Exterior hand wash & wheel clean</li>
          <li>Finished with a premium ceramic spray sealant for lasting shine & protection</li>
        </ul>
        <div>
          Book a Full In & Out Detail and get a <b>free ceramic spray sealant</b> to protect your paint for weeks!
        </div>
      </>
    ),
  },
  {
    img: "/images/offer1.jpeg",
    alt: "Refer a Friend - 25% Off",
    title: "Friends With Benefits",
    subtitle: "Refer a Friend & Both Get 25% Off",
    desc: (
      <>
        <strong>
          Share Downright Auto Care with a friend and you both save 25% on your next detail!
        </strong>
        <br />
        Call <b>+1 (905) 598-2011</b> or mention your friend at your next appointment.
      </>
    ),
  },
];

export default function OffersRow() {
  const [expandedIdx, setExpandedIdx] = useState(null);
  const navigate = useNavigate();

  const toggleExpand = (i) => {
    setExpandedIdx(expandedIdx === i ? null : i);
  };

  const handleBookNow = (index) => {
    const state = {};
    if (index === 0) state.service = "Monthly Maintenance";
    if (index === 2) state.referred = "yes";
    navigate("/contact", { state });
  };

  return (
    <section className="offers-row py-5">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {offersDetail.map((offer, i) => (
            <div key={i} className="col-12 col-md-4">
              <div
                className={`offer-card p-2 shadow rounded-3 ${
                  expandedIdx === i ? "expanded" : ""
                }`}
              >
                <img
                  src={offer.img}
                  alt={offer.alt}
                  className="img-fluid rounded-3"
                  onClick={() => toggleExpand(i)}
                  style={{ cursor: "pointer" }}
                />
                <div className="offer-details">
                  <h3 className="mt-3">{offer.title}</h3>
                  <div className="text-warning mb-2">{offer.subtitle}</div>
                  <div className="mb-3">{offer.desc}</div>
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => handleBookNow(i)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
