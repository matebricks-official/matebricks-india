import React, { useEffect, useRef } from 'react'
import { Building2, Users2, Check, ArrowUpRight, MessageSquarePlus, ShieldCheck } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function EconomicCommitment({ onOpenContact }) {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 25 },
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

      gsap.fromTo(cardsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 sm:py-36 bg-[#000000] border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-4">
            Software Economics for India
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white font-sans leading-[1.15] mb-6">
            Affordable tools for businesses. High-speed software for citizens.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            We believe software should solve economic friction, not create it. Here is how Matebricks 
            brings value to Indian enterprises and everyday consumers.
          </p>
        </div>

        {/* Dual Pillar Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: For Enterprises */}
          <div className="card-dark-hover p-8 sm:p-12 rounded-3xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-zinc-900">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                  <Building2 className="w-6 h-6 text-zinc-300" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-900">
                  For Indian Enterprises
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight font-sans mb-3">
                  Spend on R&D & Workspaces, Not Foreign Subscriptions
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                  Indian companies shouldn’t waste capital on overpriced per-user software licenses. 
                  Matebricks keeps enterprise software like Matebricks HR exceptionally affordable so 
                  companies can invest more into research, higher salaries, and better employee workspaces.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Substantially lowers operational software costs compared to foreign enterprise suites</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Full Indian statutory compliance: PF, ESIC, Section 192 TDS, and automated Form 16</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Employee self-service over WhatsApp for salary slips and leave approvals</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct team support with 24-hour turnaround for Indian business needs</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-500">
                Enterprise Product: <span className="text-zinc-300">Matebricks HR</span>
              </span>
              <button
                onClick={() => onOpenContact('Enterprise Inquiry: Matebricks HR')}
                className="btn-tricolor !py-3 !px-7 !text-xs uppercase tracking-wider !rounded-full flex items-center gap-2 cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Talk to Enterprise Team</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: For Consumers */}
          <div className="card-dark-hover p-8 sm:p-12 rounded-3xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-zinc-900">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                  <Users2 className="w-6 h-6 text-zinc-300" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-900">
                  For Everyday Citizens
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight font-sans mb-3">
                  World-Class Performance Engineered for the Indian Reality
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                  India is one of the most vibrant consumer markets on Earth. We build lightweight, 
                  battery-efficient applications like Covey Browser and Orion AI that load fast on 
                  fluctuating 4G/3G connections and respect your privacy completely.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Feather-light storage footprint that leaves space for your personal photos and files</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Consumes less mobile internet data so daily prepaid recharges last much longer</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Flawless native text rendering for all 22 scheduled Indian languages</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Zero tracking pixels, zero ad networks, and full multi-layer encryption</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-500">
                Consumer Products: <span className="text-zinc-300">Covey Browser & Orion AI</span>
              </span>
              <a
                href="#products"
                className="btn-tricolor !py-3 !px-7 !text-xs uppercase tracking-wider !rounded-full flex items-center gap-2 cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Consumer Apps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Practical Call to Action: Suggest an Application */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0C] border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
              <MessageSquarePlus className="w-4 h-4 text-white" />
              <span>We Build Based on What India Needs</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-semibold text-white font-sans tracking-tight">
              Have a software idea or business workflow you want built for India?
            </h4>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              We listen closely to Indian entrepreneurs, developers, and everyday users. Tell our team 
              what applications would make your daily life or work easier.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('Application / Feature Suggestion for India')}
            className="btn-tricolor-white !py-4 !px-9 !text-xs uppercase tracking-wider !rounded-full shrink-0 shadow-lg cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Suggest an Application</span>
          </button>
        </div>

      </div>
    </section>
  )
}
