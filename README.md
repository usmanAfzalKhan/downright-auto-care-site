🚘 Downright Auto Care – Full-Service Auto Detailing Web App
Live Demo: https://downright-auto-care.netlify.app
Built with: React · Firebase · Netlify · Bootstrap 5 · Custom CSS

🧠 About the Project
Downright Auto Care is a full-featured, production-grade auto detailing web app — built completely from scratch. It’s more than just a portfolio project. Every page, component, and animation was handcrafted with purpose. From seamless navigation and dynamic service routing to form validation and Firebase-backed review logic, this app delivers a complete and polished user experience for a real-world business use case.

Built to impress across devices and built to last — no template, no shortcuts.

🛠️ Core Features You Built
🔄 Dynamic Routing with Data-Driven Pages
All services (/services/:slug) load dynamically from a centralized dataset.

React Router DOM handles all client-side routing with graceful fallbacks.

Smart logic determines badge layout and typography based on screen size.

📬 Custom Booking & Contact Form
Fully responsive, styled form with controlled React state.

Smart input handling for phone formatting, referral tracking, and conditional logic.

Integrated with Netlify Functions to process form submissions serverlessly.

Displays a custom-built "submission success" component with animation.

🔁 Firestore-Powered Reviews
Real-time Firebase sync using onSnapshot.

Automatically deletes the oldest review when there are more than 8 — a capped queue you coded yourself.

Review form with star ratings, form validation, and timestamp handling via serverTimestamp().

📸 Advanced Media Handling (No Plugins Used)
Custom-built image zoom modal (lightbox) for galleries:

Swipe support (touch devices)

Keyboard navigation

ESC to close

Manual DOM event listeners and stateful index tracking

Separate Before/After gallery and Recent Work grid

Fully responsive 16:9 video player wrappers using native HTML5 video elements.

🎯 Hero Slider with Dynamic CTAs
Rotating background slider featuring services and CTAs.

Each button links to specific service detail pages using window.location.assign.

Detects mobile layout and adjusts image source (<source> in <picture> tags).

🌗 UI/UX Polish Throughout
All components mobile-optimized with conditional styling via useEffect + window width.

Gradients, hover states, subtle animations, fade-up reveals, and deep brand consistency.

Every detail — from dropdowns to service card shadows — was written manually with precision.

🧱 Tech Stack
Area	Stack / Tools
Frontend Framework	React + React Router
Styling	Bootstrap 5 + Custom CSS
Backend Logic	Netlify Serverless Functions
Database	Firebase Firestore
Hosting	Netlify
Forms	Fetch API + controlled React state
Image Modals	Manual lightbox with useRef, swipe, key events

🧪 How to Run Locally
bash
Copy
Edit
git clone https://github.com/yourusername/downright-auto-care.git
cd downright-auto-care
npm install
npm run dev
🔐 To Enable Firebase:
Create firebase.js:

js
Copy
Edit
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR_KEY',
  authDomain: 'YOUR_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  // etc.
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
🚀 Deployment Notes
Deployed via Netlify with serverless functions enabled

Booking form hits /.netlify/functions/contact using fetch from the frontend

Responsive across devices with animations optimized for performance

Fully static frontend (React SPA) + real-time dynamic content via Firestore

💬 Final Words
This project showcases real-world frontend architecture, thoughtful UX, and professional UI development. You built:

A dynamic routing system

Firebase-integrated review logic

A complete booking experience

Responsive galleries and videos

Pixel-level polish and branding

Deployed and hosted in production, fully responsive, and SEO-conscious

All from the ground up.
