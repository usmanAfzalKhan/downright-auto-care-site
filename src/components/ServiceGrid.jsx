import React from "react";
import services from "../data/services";
import ServiceCard from "./ServiceCard";

function ServiceGrid() {
  return (
    <section className="service-grid py-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="container">
        <div className="row justify-content-center">
          {services.map((service) => (
            <div key={service.slug} className="col-12 col-md-6 col-lg-4 d-flex">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceGrid;
