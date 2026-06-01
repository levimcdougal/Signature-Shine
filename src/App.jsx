import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function ScrollAnimator() {
  const { pathname } = useLocation()

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll(
      '.hero-inner, .section-header, .why-item, .service-card, .service-card-full, .step-card, .review-card, .contact-card, .cta-banner .section-inner, .page-hero'
    ))

    targets.forEach(el => el.classList.add('reveal'))

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0, rootMargin: '0px 0px 0px 0px' })

    targets.forEach(el => observer.observe(el))

    return () => {
      observer.disconnect()
      targets.forEach(el => el.classList.add('in-view'))
    }
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollAnimator />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
