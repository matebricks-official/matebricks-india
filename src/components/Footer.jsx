import React from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#000000] border-t border-zinc-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          
          {/* Brand & Mandate */}
          <div className="md:col-span-6 space-y-6">
            <Link to="/" className="w-12 h-12 flex items-center justify-center">
              <img
                src="/matebricks-emblem-white.png"
                alt="Matebricks India"
                className="w-full h-full object-contain filter brightness-125"
              />
            </Link>

            <div>
              <h4 className="text-xl font-semibold text-white tracking-tight font-sans">
                Matebricks India
              </h4>
              <p className="text-xs font-mono tracking-wider uppercase text-zinc-500 mt-1">
                Indian Division of Matebricks International • Founded in 2024
              </p>
            </div>

            <p className="text-base text-zinc-400 font-sans leading-relaxed max-w-md">
              We make applications for and only for Indians and India. Fast, simple, 
              and highly affordable software designed to be on the device of every Indian.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenContact('Direct Inquiry')}
                className="btn-tricolor !py-3.5 !px-8 !text-xs uppercase tracking-wider !rounded-full flex items-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Contact Matebricks Team</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="mailto:support@matebricks.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>support@matebricks.com</span>
              </a>
            </div>
          </div>

          {/* 5 Applications Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block">
              Applications
            </span>
            <ul className="space-y-3 text-sm font-sans text-zinc-400">
              <li><Link to="/#covey" className="hover:text-white transition-colors">Covey Browser</Link></li>
              <li><Link to="/#matebricks-hr" className="hover:text-white transition-colors">Matebricks HR</Link></li>
              <li><Link to="/#orion-ai" className="hover:text-white transition-colors">Orion AI</Link></li>
              <li><Link to="/#lazy-link" className="hover:text-white transition-colors">Lazy Link <span className="text-xs text-zinc-600">(Unavailable)</span></Link></li>
              <li><Link to="/#matemeet" className="hover:text-white transition-colors">Matemeet <span className="text-xs text-zinc-600">(Unavailable)</span></Link></li>
            </ul>
          </div>

          {/* Navigation & Legal Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block">
              About & Legal
            </span>
            <ul className="space-y-3 text-sm font-sans text-zinc-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us & Vision</Link></li>
              <li><Link to="/#thesis" className="hover:text-white transition-colors">The India-First Thesis</Link></li>
              <li><Link to="/#faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors text-zinc-300">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar - Clean Standard Corporate Line with Privacy Link */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© {new Date().getFullYear()} Matebricks International. All rights reserved.</span>
            <span className="text-zinc-600">|</span>
            <Link to="/privacy" className="hover:text-white underline transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-600">|</span>
            <span>Support: support@matebricks.com</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-zinc-400">Engineered with Pride for India</span>
            <button
              onClick={scrollToTop}
              className="text-zinc-400 hover:text-white underline transition-colors cursor-pointer"
            >
              Back to top ↑
            </button>
          </div>
        </div>

      </div>

      {/* Signature Tricolor Accent Bar (Reverent Order: Saffron, White, Green) */}
      <div className="h-1 w-full flex">
        <div className="w-1/3 bg-[#FF671F]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#046A38]" />
      </div>
    </footer>
  )
}
