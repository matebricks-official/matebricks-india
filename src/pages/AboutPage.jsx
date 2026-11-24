import React, { useEffect, useRef } from 'react'
import { ArrowUpRight, ArrowLeft, Building2, Users2, Lock, CheckCircle2, Mail, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

export default function AboutPage({ onOpenContact }) {
  const pageRef = useRef(null)
  const heroRef = useRef(null)
  const messageCardRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      gsap.fromTo(messageCardRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.2, ease: 'power3.out' }
      )
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="pt-32 pb-24 bg-[#000000] text-white min-h-screen">
      
      {/* Precision Dark Grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Back Link */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors uppercase tracking-wider group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div ref={heroRef} className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-6 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Founded in 2024 • Matebricks India</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white font-sans leading-[1.08] mb-6">
            Building for the most inspiring people on the planet.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl">
            Matebricks India is the dedicated Indian division of Matebricks International. 
            Founded in 2024 by Raza Abbas Rizvi, our vision is simple and clear: to be on 
            the devices of every Indian by offering the highest quality applications at the 
            lowest possible cost.
          </p>
        </div>

        {/* Founder & CEO Spotlight Card */}
        <div
          ref={messageCardRef}
          className="card-dark-hover p-8 sm:p-14 mb-24 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Founder Portrait Placeholder */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-zinc-900 border-2 border-zinc-800 flex flex-col items-center justify-center p-6 shadow-2xl overflow-hidden group">
                <div className="w-20 h-20 rounded-full bg-black border border-zinc-700 flex items-center justify-center text-zinc-200 font-mono text-xl font-bold tracking-widest mb-3 shadow-inner">
                  RAR
                </div>
                <span className="text-xs font-mono text-zinc-300 font-semibold tracking-wide">
                  Raza Abbas Rizvi
                </span>
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-0.5">
                  Founder & CEO
                </span>
                <span className="text-[10px] font-mono text-zinc-600 mt-2">
                  [Portrait Placeholder]
                </span>
              </div>
            </div>

            {/* Founder's Authentic Message */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
                <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                <span>Message from Founder & CEO Raza Abbas Rizvi</span>
              </div>

              <blockquote className="space-y-4 text-base sm:text-lg text-zinc-300 font-sans leading-relaxed tracking-tight">
                <p>
                  "Indians are among the most vibrant, talented, and beautiful people on the entire planet, 
                  and India is one of the most dynamic markets in the world. When we started Matebricks in 2024, 
                  our objective was rooted in solving real economic friction."
                </p>
                <p>
                  "For businesses and enterprises, we believe companies should not be forced to waste excessive 
                  capital on overpriced software subscriptions and licensing tolls. Instead, businesses should 
                  invest that capital into research & development, innovation, hiring, and improving the workspaces 
                  of their workforce. That is why we keep all Matebricks enterprise products exceptionally affordable 
                  and cost-effective—we manage critical digital operations so companies can focus their resources on growth."
                </p>
                <p>
                  "For consumers, India is one of the largest markets on Earth. For a community of this scale, 
                  people deserve world-class applications at the lowest possible cost. At Matebricks, our commitment 
                  is to provide top-tier applications that are fast, dependable, and accessible to everyone. 
                  Our vision is to be on the devices of every Indian as soon as possible."
                </p>
              </blockquote>

              <div className="pt-4 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white font-sans">
                    Raza Abbas Rizvi
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mt-0.5">
                    Founder & CEO, Matebricks India
                  </p>
                </div>

                <a
                  href="https://www.linkedin.com/in/raza-abbas-rizvi-212719394/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tricolor !py-3.5 !px-8 !text-xs uppercase tracking-wider !rounded-full self-start sm:self-auto inline-flex items-center gap-2 group shadow-md"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
                  </svg>
                  <span>Connect with Raza Abbas</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Our Dual Mission: Enterprises & Consumers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          {/* For Businesses */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0C] border border-zinc-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                <Building2 className="w-6 h-6 text-zinc-300" />
              </div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                Enterprise Philosophy
              </span>
              <h3 className="text-2xl font-semibold text-white font-sans">
                Affordable Software. More Capital for R&D.
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                We believe Indian enterprises should invest in improving their physical workspaces, 
                advancing indigenous research, and supporting their workforce—not paying exorbitant 
                fees for foreign software licenses. We handle workforce and operational tasks at 
                unmatched, cost-effective rates.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center gap-2 text-xs font-mono text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Maximizing Business Efficiency in India</span>
            </div>
          </div>

          {/* For Consumers */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0C] border border-zinc-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                <Users2 className="w-6 h-6 text-zinc-300" />
              </div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                Consumer Philosophy
              </span>
              <h3 className="text-2xl font-semibold text-white font-sans">
                World-Class Quality at Democratic Prices.
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                As one of the world's largest consumer markets, India deserves the finest digital 
                experiences without high price tags. We build consumer applications like Covey Browser 
                and Lazy Link that are high quality, battery-efficient, light on storage, and 
                extremely affordable or completely free.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center gap-2 text-xs font-mono text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Dedicated to Everyday Indian Citizens</span>
            </div>
          </div>

        </div>

        {/* Data Protection & Indian Government Guidelines Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0C] border border-zinc-800 mb-24">
          <div className="max-w-3xl space-y-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Data Protection & Transparent Stewardship</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white font-sans">
              How we protect Indian citizen & enterprise data.
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
              We believe in complete transparency with our users. To ensure 99.9% uptime, global 
              speed, and enterprise resilience, Matebricks utilizes trusted, world-class third-party 
              cloud infrastructure services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-2">
              <span className="text-xs font-mono text-zinc-500 uppercase block">01 / Alignment</span>
              <h4 className="text-base font-semibold text-white font-sans">
                Indian Government Guidelines
              </h4>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                All data handling strictly aligns with Indian Government regulations and Digital 
                Personal Data Protection mandates for safeguarding Indian data.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-2">
              <span className="text-xs font-mono text-zinc-500 uppercase block">02 / Encryption</span>
              <h4 className="text-base font-semibold text-white font-sans">
                Multi-Layer Cryptographic Shield
              </h4>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                When stored across global third-party services, data is guarded by multi-layer, 
                high-grade encryption so unauthorized third parties can never read your files.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-2">
              <span className="text-xs font-mono text-zinc-500 uppercase block">03 / Respect</span>
              <h4 className="text-base font-semibold text-white font-sans">
                Zero Ad-Tracking or Selling
              </h4>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                We never monetize or trade your personal information. What you do in our 
                applications belongs strictly to you.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center p-10 sm:p-14 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white font-sans">
            Have questions for the Matebricks team?
          </h3>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-sans leading-relaxed">
            Whether you are an enterprise exploring Matebricks HR or an everyday user with feedback 
            on Covey Browser, email us directly at{' '}
            <a
              href="mailto:support@matebricks.com"
              className="text-white underline hover:text-zinc-300 font-mono font-medium"
            >
              support@matebricks.com
            </a>. Our team is here to help.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:support@matebricks.com"
              className="btn-tricolor-white !py-4 !px-10 !text-sm !rounded-full shadow-lg inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email support@matebricks.com</span>
            </a>
            <button
              onClick={() => onOpenContact('Direct Inquiry from About Page')}
              className="btn-tricolor !py-4 !px-10 !text-sm !rounded-full shadow-lg"
            >
              <span>Send Message</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
