// src/components/ContactForm.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import servicesList from "../data/services";
import SubmissionSuccess from "./SubmissionSuccess";

export default function ContactForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const passedService = location.state?.service ?? "";
  const passedReferred = location.state?.referred ?? "no";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    service: passedService,
    otherService: "",
    referred: passedReferred,
    referrer: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, "");
    return digits.length === 10
      ? `${digits.slice(0,3)}-${digits.slice(3,6)}-${digits.slice(6)}`
      : value;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setForm((f) => ({ ...f, phone: value.replace(/\D/g, "") }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setForm((f) => ({ ...f, phone: formatPhoneNumber(value) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm((f) => ({ ...f, phone: formatPhoneNumber(f.phone) }));
    setSubmitted(true);
  };

  useEffect(() => {
    if (form.referred === "no" && form.referrer) {
      setForm((f) => ({ ...f, referrer: "" }));
    }
  }, [form.referred]);

  const today = new Date().toISOString().split('T')[0];

  const fieldStyle = {
    backgroundColor: "#1a2032",
    color: "#e1e8f0",
    border: "1px solid #444",
    borderRadius: "4px"
  };
  const placeholderStyle = { color: "#777" };

  return (
    <section className="contact-form py-5">
      <div className="container">
        <h2 className="mb-4 text-center text-white">Book an Appointment</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="text-start">

              {/* Name */}
              <div className="mb-3">
                <label className="form-label text-white">
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={fieldStyle}
                  placeholder="Your full name"
                />
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label className="form-label text-white">
                  Phone Number<span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <span className="input-group-text" style={{ ...fieldStyle, borderRight: "0" }}>
                    +1
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="647-745-2016"
                    inputMode="numeric"
                    required
                    style={{ ...fieldStyle, borderLeft: "0" }}
                    disabled={submitted}
                  />
                </div>
              </div>

              {/* Date */}
              <div className="mb-3">
                <label className="form-label text-white">
                  Preferred Date<span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  min={today}
                  required
                  style={fieldStyle}
                  disabled={submitted}
                />
              </div>

              {/* Service dropdown */}
              <div className="mb-3">
                <label className="form-label text-white">
                  Type of Service<span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  style={fieldStyle}
                  disabled={submitted}
                >
                  <option value="" disabled style={placeholderStyle}>
                    Select a service...
                  </option>
                  {servicesList.map((s) => (
                    <option key={s.slug} value={s.name} style={{ backgroundColor: "#1a2032", color: "#e1e8f0" }}>
                      {s.name}
                    </option>
                  ))}
                  <option value="Monthly Maintenance" style={{ backgroundColor: "#1a2032", color: "#e1e8f0" }}>
                    Monthly Maintenance
                  </option>
                  <option value="Other" style={{ backgroundColor: "#1a2032", color: "#e1e8f0" }}>
                    Other
                  </option>
                </select>
              </div>

              {form.service === "Other" && (
                <div className="mb-3">
                  <label className="form-label text-white">
                    Please specify<span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="otherService"
                    value={form.otherService}
                    onChange={handleChange}
                    required
                    style={fieldStyle}
                    disabled={submitted}
                  />
                </div>
              )}

              {/* Referral */}
              <div className="mb-3 text-white">
                <label className="form-label">
                  Have you been referred?<span className="text-danger">*</span>
                </label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="referred"
                      id="refYes"
                      value="yes"
                      checked={form.referred === "yes"}
                      onChange={handleChange}
                      style={{ filter: "invert(1)" }}
                      disabled={submitted}
                    />
                    <label htmlFor="refYes" className="form-check-label text-white">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="referred"
                      id="refNo"
                      value="no"
                      checked={form.referred === "no"}
                      onChange={handleChange}
                      style={{ filter: "invert(1)" }}
                      disabled={submitted}
                    />
                    <label htmlFor="refNo" className="form-check-label text-white">No</label>
                  </div>
                </div>
              </div>

              {form.referred === "yes" && (
                <div className="mb-3">
                  <label className="form-label text-white">Referrer’s Name<span className="text-danger">*</span></label>
                  <input
                    className="form-control"
                    type="text"
                    name="referrer"
                    value={form.referrer}
                    onChange={handleChange}
                    required
                    style={fieldStyle}
                    disabled={submitted}
                  />
                </div>
              )}

              {/* Message */}
              <div className="mb-3">
                <label className="form-label text-white">Additional Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  style={fieldStyle}
                  disabled={submitted}
                />
              </div>

              <button type="submit" className="btn btn-outline-warning btn-lg" disabled={submitted}>
                Submit
              </button>
            </form>

            {/* Success message under form */}
            {submitted && <SubmissionSuccess />}    
          </div>
        </div>
      </div>
    </section>
  );
}
