import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Globe, Building2, Sparkles, Share2, Video, ArrowUpRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAppsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isAboutPage = location.pathname === '/about'

  const apps = [
    {
      name: 'Covey Browser',
      category: 'Web Browser',
      desc: 'Fast, secure, Indian language web browser',
      icon: Globe,
      anchor: '#covey',
    },
    {
      name: 'Matebricks HR',
      category: 'Workforce & Payroll',
      desc: 'Automated salary and attendance for Indian business',
      icon: Building2,
      anchor: '#matebricks-hr',
    },
    {
      name: 'Orion AI',
      category: 'Smart Assistant',
      desc: 'Multilingual conversational intelligence for India',
      icon: Sparkles,
      anchor: '#orion-ai',
    },
    {
      name: 'Lazy Link',
      category: 'Direct File Sharing',
      desc: 'Fast local Wi-Fi transfer without using mobile data',
      icon: Share2,
      anchor: '#lazy-link',
    },
    {
      name: 'Matemeet',
      category: 'Video Conferencing',
      desc: 'Clear audio and video calls on slow internet',
      icon: Video,
      anchor: '#matemeet',
    },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-zinc-800/80 py-3.5 shadow-2xl'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Logo Only (Devanagari-Inspired Geometric Emblem) */}
          <Link
            to="/"
            className="flex items-center group transition-transform duration-200 hover:scale-105"
            aria-label="Matebricks India"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center p-1 rounded-xl bg-zinc-950 border border-zinc-800/80 group-hover:border-zinc-700 transition-colors">
              <img
                src="/matebricks-emblem-white.png"
                alt="Matebricks India"
                className="w-full h-full object-contain filter brightness-125"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-400">
            
            {/* Applications Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setAppsDropdownOpen(!appsDropdownOpen)}
                onMouseEnter={() => setAppsDropdownOpen(true)}
                className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 py-2 cursor-pointer focus:outline-none"
              >
                <span>Applications</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${appsDropdownOpen ? 'rotate-180 text-white' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {appsDropdownOpen && (
                <div
                  onMouseLeave={() => setAppsDropdownOpen(false)}
                  className="absolute top-full left-0 w-80 mt-2 p-3 rounded-2xl bg-[#0A0A0C]/95 backdrop-blur-2xl border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-fade-in"
                >
                  <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 border-b border-zinc-800/80 mb-2">
                    5 Live Applications in India
                  </div>
                  <div className="space-y-1">
                    {apps.map((app) => {
                      const Icon = app.icon
                      return (
                        <Link
                          key={app.name}
                          to={`/${app.anchor}`}
                          onClick={() => setAppsDropdownOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-zinc-900/80 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-colors shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white group-hover:text-zinc-100 flex items-center gap-1.5">
                              <span>{app.name}</span>
                              <span className="text-[9px] font-mono text-zinc-500 uppercase">
                                {app.category}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                              {app.desc}
                            </p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`transition-colors duration-200 py-2 ${
                isAboutPage ? 'text-white font-semibold' : 'hover:text-white'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/#thesis"
              className="hover:text-white transition-colors duration-200 py-2"
            >
              Our Thesis
            </Link>

            <Link
              to="/#faq"
              className="hover:text-white transition-colors duration-200 py-2"
            >
              FAQ
            </Link>
          </nav>

          {/* Action Button: Thick Rounded Pill with Tri-Color Hover */}
          <div className="hidden sm:block">
            <button
              onClick={() => onOpenContact('Direct Inquiry')}
              className="btn-tricolor !py-2.5 !px-7 !text-xs font-medium uppercase tracking-wider !rounded-full shadow-md"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 sm:hidden text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl pt-24 px-8 sm:hidden flex flex-col justify-between pb-12 animate-fade-in border-b border-zinc-800 overflow-y-auto">
          <div className="space-y-6 pt-4">
            <div className="pb-3 border-b border-zinc-800">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Menu & Applications
              </span>
            </div>

            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xl font-light tracking-tight text-white"
            >
              Home
            </Link>

            {/* Mobile Apps List */}
            <div className="space-y-3 pl-3 border-l border-zinc-800">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                Live Products:
              </span>
              {apps.map((app) => (
                <Link
                  key={app.name}
                  to={`/${app.anchor}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-zinc-300 hover:text-white"
                >
                  {app.name} • <span className="text-zinc-500 text-xs">{app.category}</span>
                </Link>
              ))}
            </div>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xl font-light tracking-tight text-white"
            >
              About Us (Founder & Mission)
            </Link>

            <Link
              to="/#thesis"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xl font-light tracking-tight text-white"
            >
              Our Thesis
            </Link>

            <Link
              to="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xl font-light tracking-tight text-white"
            >
              Frequently Asked Questions
            </Link>
          </div>

          <div className="pt-6 border-t border-zinc-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenContact('Mobile Inquiry')
              }}
              className="w-full btn-tricolor !py-4 !px-8 text-sm uppercase tracking-wider !rounded-full"
            >
              Contact Us
            </button>
            <div className="text-center text-xs font-mono text-zinc-500">
              support@matebricks.com
            </div>
          </div>
        </div>
      )}
    </>
  )
}
