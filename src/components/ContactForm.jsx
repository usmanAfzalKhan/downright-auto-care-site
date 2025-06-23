// src/components/ContactForm.jsx
import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // TODO: call your Netlify function to email the inquiry
    // await fetch('/.netlify/functions/sendInquiry', { ...JSON.stringify(form) });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container py-5">
        <div className="alert alert-success">
          Thanks! We have your request and will be in touch shortly.
        </div>
      </div>
    );
  }

  return (
    <section className="contact-form py-5">
      <div className="container">
        <h2 className="mb-4">Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Name', name: 'name', type: 'text', required: true },
            { label: 'Phone Number', name: 'phone', type: 'tel', required: true },
            { label: 'Preferred Date', name: 'date', type: 'date', required: true },
            { label: 'Type of Service', name: 'service', type: 'text', required: true }
          ].map(field => (
            <div key={field.name} className="mb-3">
              <label className="form-label">
                {field.label}{field.required && <span className="text-danger">*</span>}
              </label>
              <input
                className="form-control"
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                required={field.required}
              />
            </div>
          ))}
          <div className="mb-3">
            <label className="form-label">Additional Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
