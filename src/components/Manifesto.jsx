import React, { useEffect, useRef } from 'react'
import { Check, Wifi, Globe2, ShieldCheck, Lock } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Manifesto() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      )

      gsap.fromTo(gridRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const pillars = [
    {
      num: '01',
      title: 'Diverse Connectivity Realities',
      desc: 'Engineered for India’s real-world connectivity. Our software maintains high responsiveness across variable 4G/5G transitions and intermittent mobile network coverage with intelligent offline caching.',
      icon: Wifi,
    },
    {
      num: '02',
      title: '22 Scheduled Languages',
      desc: 'Honoring the Eighth Schedule of the Constitution of India. Dedicated typographic pipelines render complex Devanagari, Dravidian, and Eastern scripts natively without glyph distortion.',
      icon: Globe2,
    },
    {
      num: '03',
      title: 'Statutory Compliance',
      desc: 'Built natively around Indian statutory standards, state-specific labor regulations, EPF, ESIC, Section 192 TDS, and the Digital Personal Data Protection (DPDP) Act 2023.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'Multi-Layer Encryption & Guidelines',
      desc: 'Guarded by multi-layer cryptographic shields and strictly governed by Indian Government guidelines and statutory privacy standards, ensuring citizen and business data is fortified and protected.',
      icon: Lock,
    },
  ]

  return (
    <section id="thesis" ref={sectionRef} className="py-28 sm:py-36 bg-[#000000] border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Minimal Reverent Header */}
        <div ref={headerRef} className="max-w-2xl mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-4">
            Our Thesis
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white font-sans leading-[1.15] mb-6">
            Engineered for India’s scale, diversity, and dignity.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            India is a continent of immense cultural and linguistic diversity operating at 
            unmatched technological momentum. We engineer software dedicated solely to 
            empowering Indian people, institutions, and enterprises.
          </p>
        </div>

        {/* 4 Clean Minimal Cards with Sleek Visual Icons */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.num}
                className="card-dark-hover p-8 sm:p-12 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-900">
                    <span className="font-mono text-xs font-semibold text-zinc-500">
                      [{pillar.num}]
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-white tracking-tight mb-3 font-sans">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>Verified Sovereign Standard</span>
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
