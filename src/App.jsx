import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductModal from './components/ProductModal'
import ContactModal from './components/ContactModal'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [contactSubject, setContactSubject] = useState('')

  useEffect(() => {
    // Robust Lenis smooth scrolling with fail-safe configuration
    try {
      const lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      })

      let animationFrameId
      function raf(time) {
        lenis.raf(time)
        animationFrameId = requestAnimationFrame(raf)
      }
      animationFrameId = requestAnimationFrame(raf)

      return () => {
        cancelAnimationFrame(animationFrameId)
        lenis.destroy()
      }
    } catch (e) {
      console.warn('Lenis initialization fallback to native scroll', e)
    }
  }, [])

  const handleOpenContact = (subject = 'General Inquiry') => {
    setContactSubject(subject)
    setContactModalOpen(true)
  }

  const handleCloseContact = () => {
    setContactModalOpen(false)
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#FFFFFF] selection:text-[#000000] relative">
        {/* Navigation: Minimal Logo Only on Left + Dropdown */}
        <Navbar onOpenContact={handleOpenContact} />

        {/* Route Definitions */}
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onSelectProduct={(p) => setSelectedProduct(p)}
                onOpenContact={handleOpenContact}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/privacy"
            element={<PrivacyPolicyPage />}
          />
          <Route
            path="*"
            element={
              <HomePage
                onSelectProduct={(p) => setSelectedProduct(p)}
                onOpenContact={handleOpenContact}
              />
            }
          />
        </Routes>

        {/* Footer with Privacy Policy link */}
        <Footer onOpenContact={handleOpenContact} />

        {/* Deep-Dive Specifications Modal */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onOpenContact={handleOpenContact}
          />
        )}

        {/* Inquiries Modal */}
        <ContactModal
          initialSubject={contactSubject}
          isOpen={contactModalOpen}
          onClose={handleCloseContact}
        />
      </div>
    </BrowserRouter>
  )
}
