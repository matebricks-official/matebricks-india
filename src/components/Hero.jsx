import React, { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { gsap } from 'gsap'

export default function Hero({ onOpenContact }) {
  const heroRef = useRef(null)
  const badgeRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const stripRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(badgeRef.current, 
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      )
      .fromTo(titleRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.5'
      )
      .fromTo(descRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(stripRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        '-=0.4'
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative pt-44 pb-32 sm:pt-52 sm:pb-40 bg-[#000000] border-b border-zinc-900 overflow-hidden">
      {/* Precision Dark Grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      {/* Static Subtle Glow - No Blinking */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.02] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Minimal Division Pill - Static, Zero Blinking */}
        <div ref={badgeRef} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-400 mb-10 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
          <span>Indian Division of Matebricks International</span>
        </div>

        {/* Master Headline */}
        <h1 ref={titleRef} className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold text-white tracking-[-0.035em] leading-[1.08] font-sans mb-8 max-w-4xl">
          We make applications for{' '}
          <span className="text-zinc-400 font-normal">and only for</span>{' '}
          Indians and India.
        </h1>

        {/* Editorial Subtext */}
        <p ref={descRef} className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mb-12 tracking-tight">
          Matebricks India builds sovereign, high-performance software 
          engineered exclusively for the languages, regulations, and 
          everyday realities of India.
        </p>

        {/* Thick, Rounded Buttons with Generous Padding & Tri-Color Hover */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-16">
          <a
            href="#products"
            className="w-full sm:w-auto btn-tricolor-white !py-4 !px-10 !text-sm tracking-wide rounded-full shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Applications</span>
          </a>

          <a
            href="#thesis"
            className="w-full sm:w-auto btn-tricolor !py-4 !px-10 !text-sm tracking-wide rounded-full transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>The India-First Thesis</span>
          </a>
        </div>

        {/* Static, Minimal List of the 5 Live Applications */}
        <div ref={stripRef} className="pt-8 border-t border-zinc-900 w-full max-w-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <span className="text-zinc-400 font-medium uppercase tracking-wider">
            Live in India:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-zinc-400">
            <a href="#covey" className="hover:text-white transition-colors">Covey Browser</a>
            <span className="text-zinc-700">•</span>
            <a href="#matebricks-hr" className="hover:text-white transition-colors">Matebricks HR</a>
            <span className="text-zinc-700">•</span>
            <a href="#orion-ai" className="hover:text-white transition-colors">Orion AI</a>
            <span className="text-zinc-700">•</span>
            <a href="#lazy-link" className="hover:text-white transition-colors">Lazy Link</a>
            <span className="text-zinc-700">•</span>
            <a href="#matemeet" className="hover:text-white transition-colors">Matemeet</a>
          </div>
        </div>

      </div>
    </section>
  )
}
