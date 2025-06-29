// src/pages/Contact.jsx
import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="contact-page py-5">
      <div className="container">
        <p className="text-center text-white mb-5">
          Stay connected with Downright Auto Care by following us on{' '}
          <a
            href="https://www.instagram.com/downrightautocare/?igsh=dm1xYnRhdjNtOHU5#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none"
          >
            Instagram
          </a>,{' '}
          <a
            href="https://www.tiktok.com/@raqueeb_mohamed?_t=ZM-8xZYjZgxQaz&_r=1e"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none"
          >
            TikTok
          </a>, and{' '}
          <a
            href="https://www.facebook.com/DownrightAutoCare?rdid=jJgMJaJh9a7UHwk8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F166RHrZVWx%2F#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none"
          >
            Facebook
          </a>{' '}
          for service updates, car‐care insights, and special offers. To speak
          directly with our team, call{' '}
          <span className="text-white">+1 (905) 598-2011</span>. Prefer chatting
          online? Send us a message on any platform, or complete the form below
          to request an appointment—we’ll be in touch shortly.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
