import React, { useState } from 'react'
import { ChevronDown, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FAQ({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: 'Who is behind Matebricks India?',
      a: 'Matebricks India was founded in 2024 as the dedicated Indian division of Matebricks International, focused entirely on building affordable, high-quality applications for India.',
    },
    {
      q: 'Where is user data stored and how is it protected?',
      a: 'To guarantee high uptime, fast response times, and dependable service, Matebricks relies on trusted, world-class third-party cloud infrastructure. All data stored or processed with our global infrastructure partners is protected with multi-layered, cutting-edge encryption (double and triple-layer cryptographic shields). We continuously align our practices with Indian Government guidelines and statutory data protection regulations to ensure complete safety and privacy.',
    },
    {
      q: 'What is Matebricks’ mission for businesses and enterprises?',
      a: 'We believe companies should not waste excessive money on overpriced software subscriptions and licensing tolls. Instead, they should invest that capital into R&D, innovation, and improving their workforce workspaces. We provide enterprise tools like Matebricks HR at very low, cost-effective prices so businesses can focus their capital where it matters most.',
    },
    {
      q: 'What is your vision for Indian consumers?',
      a: 'India is one of the largest consumer markets in the world. We believe everyday citizens deserve the best quality applications at the lowest possible cost. We build lightweight, fast applications like Covey Browser and Lazy Link that work reliably on any network and are accessible to everyone.',
    },
    {
      q: 'How can I reach the Matebricks team?',
      a: 'You can email the Matebricks team directly at support@matebricks.com, or reach out using the Contact Us form on this website. Our team reviews and responds to every message within 24 hours.',
    },
  ]

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#000000] border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-3">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white font-sans mb-4">
            Everything you need to know about us.
          </h2>
          <p className="text-base text-zinc-400 font-sans leading-relaxed">
            Straightforward answers about our mission, our applications, and how to reach our team.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#0A0A0C] border border-zinc-800/80 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className="text-base sm:text-lg font-medium text-white font-sans">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180 text-white' : ''
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed border-t border-zinc-900 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Read More on About Page CTA */}
        <div className="mt-14 text-center space-y-4">
          <p className="text-sm text-zinc-400">
            Have questions for our team? Email us directly at{' '}
            <a
              href="mailto:support@matebricks.com"
              className="text-white underline hover:text-zinc-300 font-mono transition-colors"
            >
              support@matebricks.com
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/about"
              className="btn-tricolor-white !py-3.5 !px-8 !text-xs uppercase tracking-wider !rounded-full inline-flex"
            >
              <span>Read Our Full Story</span>
            </Link>
            <button
              onClick={() => onOpenContact('General Inquiry')}
              className="btn-tricolor !py-3.5 !px-8 !text-xs uppercase tracking-wider !rounded-full"
            >
              <span>Contact Matebricks Team</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
