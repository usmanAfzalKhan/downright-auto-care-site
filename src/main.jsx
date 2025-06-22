// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Global imports
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init({
  duration: 800,
  once: true
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
