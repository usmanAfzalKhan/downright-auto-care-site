// src/pages/Contact.jsx
import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="contact-page py-5">
      <div className="container">
        <p className="text-center text-white mb-5">
          Stay connected with Downright Auto Care by following us on{' '}
          <a
            href="https://instagram.com/downrightautocare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none"
          >
            Instagram
          </a>,{' '}
          <a
            href="https://tiktok.com/@downrightautocare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none"
          >
            TikTok
          </a>, and{' '}
          <a
            href="https://facebook.com/downrightautocare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none"
          >
            Facebook
          </a>{' '}
          for service updates, car‐care insights, and special offers. To speak
          directly with our team, call{' '}
          <span className="text-white">(647) 560-8039</span>. Prefer chatting
          online? Send us a message on any platform, or complete the form below
          to request an appointment—we’ll be in touch shortly.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
