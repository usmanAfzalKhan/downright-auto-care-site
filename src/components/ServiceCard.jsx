import React from "react";
import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  return (
    <div className="card service-card card-luxury-bg text-light mb-4 h-100">

      <div className="service-img-wrapper">
        <picture>
          <source
            media="(max-width: 576px)"
            srcSet={service.imageMobile}
          />
          <img
            src={service.imageDesktop}
            alt={service.name}
            className="card-img-top"
          />
        </picture>
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{service.name}</h5>
        <Link to={`/services/${service.slug}`} className="btn btn-outline-primary mt-2">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
