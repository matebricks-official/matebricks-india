import React, { useEffect, useRef } from 'react'
import { ArrowLeft, Shield, Lock, FileText, CheckCircle2, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

export default function PrivacyPolicyPage() {
  const pageRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      gsap.fromTo(pageRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
      )
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="pt-32 pb-24 bg-[#000000] text-white min-h-screen relative">
      {/* Precision Dark Grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8">
        
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

        {/* Header */}
        <div className="mb-16 pb-8 border-b border-zinc-900">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-4 uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Website Privacy Policy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white font-sans mb-4">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Effective Date: 2024 – 2026 • Matebricks India Website
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-12 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
          
          {/* Section 1: Overview */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-zinc-500">[01]</span>
              <span>Scope & Commitment</span>
            </h2>
            <p className="text-zinc-400">
              This Privacy Policy explains how Matebricks India ("we", "our", or "us") handles 
              information collected strictly through this website. The website of Matebricks India is 
              hosted and maintained by Matebricks International. We respect your privacy and 
              conduct all digital practices in accordance with Indian Government guidelines and 
              the Digital Personal Data Protection (DPDP) Act, 2023.
            </p>
          </section>

          {/* Section 2: What We Collect */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-zinc-500">[02]</span>
              <span>Information We Collect on This Website</span>
            </h2>
            <div className="space-y-3 text-zinc-400">
              <p>
                We believe in minimal data collection. We only receive information that you voluntarily choose to provide:
              </p>
              <ul className="space-y-2.5 pl-4 border-l border-zinc-800">
                <li>
                  <strong className="text-white">Contact & Inquiry Details:</strong> If you reach out to us via our Contact Us form or by sending an email to <code className="text-zinc-200">support@matebricks.com</code>, we receive your name, institutional email, organization name, and message content.
                </li>
                <li>
                  <strong className="text-white">Zero Tracking Cookies:</strong> We do not use invasive third-party ad tracking pixels, cross-site trackers, or behavioral profiling mechanisms on this website.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: How We Use Information */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-zinc-500">[03]</span>
              <span>How We Use Your Information</span>
            </h2>
            <div className="space-y-2 text-zinc-400">
              <p>The information you provide is used solely for the following legitimate purposes:</p>
              <ul className="space-y-2 pl-4 border-l border-zinc-800">
                <li>To respond to your inquiries, support requests, and deployment questions.</li>
                <li>To provide technical and product assistance regarding Matebricks applications.</li>
                <li>We <strong className="text-white">never sell, rent, trade, or monetize</strong> your personal information to third-party marketing companies.</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Hosting, Encryption & Guidelines */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-zinc-500">[04]</span>
              <span>Hosting, Infrastructure & Multi-Layer Encryption</span>
            </h2>
            <p className="text-zinc-400">
              The website of Matebricks India is hosted and maintained by Matebricks International. 
              To ensure 24/7 web availability, high speed, and uptime across India, the website is 
              deployed on trusted global cloud infrastructure. All data transmitted through 
              our contact forms is guarded by multi-layer encryption (SSL/TLS in transit and secure encryption at rest), 
              aligned strictly with Indian Government guidelines for safeguarding digital information.
            </p>
          </section>

          {/* Section 5: Your Rights */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-zinc-500">[05]</span>
              <span>Your Rights under Indian Law</span>
            </h2>
            <p className="text-zinc-400">
              Under the Digital Personal Data Protection (DPDP) Act, 2023, you have the right to request 
              access to the contact information you provided to us, request corrections, or ask for the 
              permanent deletion of your inquiry records at any time.
            </p>
          </section>

          {/* Section 6: Contact */}
          <section className="p-8 rounded-3xl bg-[#0A0A0C] border border-zinc-800 space-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-400" />
              <span>Contact for Privacy Inquiries</span>
            </h2>
            <p className="text-zinc-400">
              If you have any questions or wish to exercise your data rights regarding this website, 
              please contact our team directly:
            </p>
            <div className="pt-2 font-mono text-sm text-white">
              <a
                href="mailto:support@matebricks.com"
                className="underline hover:text-zinc-300 transition-colors"
              >
                support@matebricks.com
              </a>
              <div className="text-xs text-zinc-500 mt-1">
                Matebricks India • Indian Division of Matebricks International
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  )
}
