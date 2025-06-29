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
        <a href="https://www.instagram.com/downrightautocare/?igsh=dm1xYnRhdjNtOHU5#" target="_blank" rel="noopener">Instagram</a> ·&nbsp;
        <a href="https://www.tiktok.com/@raqueeb_mohamed?_t=ZM-8xZYjZgxQaz&_r=1e" target="_blank" rel="noopener">TikTok</a> ·&nbsp;
        <a href="https://www.facebook.com/DownrightAutoCare?rdid=jJgMJaJh9a7UHwk8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F166RHrZVWx%2F#" target="_blank" rel="noopener">Facebook</a>
      </div>
      <div>+1 (905) 598-2011</div>
    </footer>
  )
}
