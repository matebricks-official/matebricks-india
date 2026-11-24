import React, { useEffect, useRef } from 'react'
import { ArrowUpRight, Check, AlertCircle } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const productsList = [
  {
    id: 'covey',
    num: '01',
    name: 'Covey Browser',
    category: 'Web Browser',
    isAvailable: true,
    tagline: 'Fast, lightweight browsing that respects your privacy',
    description:
      'Loads web pages quickly even on slow mobile networks, takes very little storage on your phone, protects your UPI and banking payments, and displays Indian languages clearly.',
    features: [
      'Loads websites fast on any phone, saving your battery and mobile data',
      'Built-in security protection when paying with UPI or checking bank accounts',
      'Displays Hindi, Tamil, Bengali, Telugu, and all Indian scripts cleanly without broken text',
    ],
    platforms: 'Android • Windows • Mac • Linux',
    actionText: 'Launch Covey',
  },
  {
    id: 'matebricks-hr',
    num: '02',
    name: 'Matebricks HR',
    category: 'Workforce & Payroll',
    isAvailable: true,
    tagline: 'Simple salary and team management for Indian businesses',
    description:
      'Takes the stress out of running a business. Accurately calculate staff salaries, handle PF and ESIC taxes automatically, track attendance, and send payslips over WhatsApp.',
    features: [
      'Automatic salary calculation following Indian labor and tax rules',
      'One-click Form 16 creation for your employees at the end of the year',
      'Employees can check their monthly salary slip and apply for leaves directly on WhatsApp',
    ],
    platforms: 'Web • iPhone • Android • WhatsApp',
    actionText: 'Open HR Portal',
  },
  {
    id: 'orion-ai',
    num: '03',
    name: 'Orion AI',
    category: 'Smart Assistant',
    isAvailable: true,
    tagline: 'A helpful AI assistant that speaks Indian languages naturally',
    description:
      'An intelligent assistant built to understand how Indians actually speak and work. It writes emails, summarizes documents, answers questions in your mother tongue, and keeps your data safe.',
    features: [
      'Understands and writes naturally in Hindi, English, and regional languages',
      'Helps draft official letters, business proposals, and daily summaries in seconds',
      'All your conversations stay private and guarded by multi-layer encryption',
    ],
    platforms: 'Web • Mobile • Desktop',
    actionText: 'Try Orion AI',
  },
  {
    id: 'lazy-link',
    num: '04',
    name: 'Lazy Link',
    category: 'File Sharing',
    isAvailable: false,
    tagline: 'Share photos, videos, and big files in seconds without mobile data',
    description:
      'Send large video clips, high-resolution photos, and heavy folders directly between phones or computers nearby without using a single megabyte of your internet recharge.',
    features: [
      'Fast direct file transfer using local Wi-Fi without needing an internet connection',
      'No file size restrictions—send entire photo albums or large files effortlessly',
      'Universal support planned across Android phones, iPhones, Windows, and Mac',
    ],
    platforms: 'Android • Windows • Mac • iPhone • Web',
    actionText: 'Currently Unavailable',
  },
  {
    id: 'matemeet',
    num: '05',
    name: 'Matemeet',
    category: 'Video Calls',
    isAvailable: false,
    tagline: 'Clear video calls that stay connected on slow internet',
    description:
      'Video conferencing built to keep conversations clear and uninterrupted, even when mobile network signals fluctuate. Join meetings instantly without signing up.',
    features: [
      'Keeps your voice clear and stops call freezes even on weak 4G signals',
      'Consumes less internet data so your daily recharge lasts much longer',
      'One-click meeting joins directly in your browser without downloading heavy software',
    ],
    platforms: 'Web Browser • Android • Windows • Mac',
    actionText: 'Currently Unavailable',
  },
]

export default function Products({ onSelectProduct, onOpenContact }) {
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

      const cards = cardsRef.current.querySelectorAll('.product-card')
      cards.forEach((card, idx) => {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: idx * 0.05,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="products" ref={sectionRef} className="py-28 sm:py-36 bg-[#000000] border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-4">
            Our Applications
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white font-sans leading-[1.15] mb-6">
            Software engineered for Indian people and enterprises.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Every application is designed to be fast, simple, and respectful of your 
            time, privacy, and budget.
          </p>
        </div>

        {/* Product Cards */}
        <div ref={cardsRef} className="space-y-8">
          {productsList.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className={`product-card card-dark-hover p-8 sm:p-12 md:p-14 transition-all duration-300 ${
                !product.isAvailable ? 'opacity-90' : ''
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                
                {/* Content */}
                <div className="space-y-6 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-zinc-500">
                      [{product.num}]
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-zinc-900 text-zinc-300 border border-zinc-800">
                      {product.category}
                    </span>
                    {product.isAvailable ? (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-0.5 rounded-full">
                        Live in India
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 bg-amber-950/40 border border-amber-800/60 px-2.5 py-0.5 rounded-full">
                        Currently Unavailable
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight font-sans mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">
                      {product.tagline}
                    </p>
                    <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* 3 Concise Highlights */}
                  <div className="space-y-3 pt-2">
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs font-mono text-zinc-500 pt-2">
                    Supported Platforms: <span className="text-zinc-300">{product.platforms}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-4 shrink-0">
                  {product.isAvailable ? (
                    <button
                      onClick={() => onOpenContact(`Inquiry: ${product.name}`)}
                      className="btn-tricolor-white !py-4 !px-9 !text-sm !rounded-full flex items-center justify-center gap-2.5 shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>{product.actionText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="btn-disabled">
                      <span>Currently Unavailable</span>
                    </div>
                  )}

                  <button
                    onClick={() => onSelectProduct(product)}
                    className="btn-tricolor !py-3.5 !px-8 !text-xs uppercase tracking-wider !rounded-full transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Learn More
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
