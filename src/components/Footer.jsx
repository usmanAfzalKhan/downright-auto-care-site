// src/components/Footer.jsx
import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '2px solid rgba(0,0,0,0.1)',
      padding: '1rem 0',
      textAlign: 'center'
    }}>
      <div>©2025 Downright Auto Care</div>
      <div style={{ margin: '0.5rem 0' }}>
        <a href="https://instagram.com/yourpage" target="_blank" rel="noopener">Instagram</a> ·&nbsp;
        <a href="https://tiktok.com/@yourpage" target="_blank" rel="noopener">TikTok</a> ·&nbsp;
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener">Facebook</a>
      </div>
      <div>+1 (234) 567-890</div>
    </footer>
  )
}
