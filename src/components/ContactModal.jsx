import React, { useState, useEffect } from 'react'
import { X, Check, Send } from 'lucide-react'

export default function ContactModal({ initialSubject, isOpen, onClose }) {
  const [subject, setSubject] = useState(initialSubject || 'General Enterprise Access')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (initialSubject) setSubject(initialSubject)
    setSubmitted(false)
  }, [initialSubject, isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-[#0A0A0C] border border-zinc-800 rounded-3xl shadow-2xl p-8 sm:p-12 my-8 overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-6 mb-8 border-b border-zinc-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-1">
              Direct Channel
            </span>
            <h3 className="text-2xl font-semibold tracking-tight text-white font-sans">
              Connect With Matebricks India
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-900 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center mx-auto border border-zinc-700">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-semibold text-white font-sans">
              Inquiry Dispatched
            </h4>
            <p className="text-sm text-zinc-400 max-w-sm mx-auto font-sans leading-relaxed">
              Our sovereign deployment team in Mumbai / Bengaluru will review your request 
              and respond within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="btn-tricolor !py-3.5 !px-8 !rounded-full"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Application / Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-black text-white text-sm font-sans focus:outline-none focus:border-zinc-500"
              >
                <option value="General Enterprise Access">General Enterprise Access</option>
                <option value="Covey Browser">Covey Browser</option>
                <option value="Matebricks HR">Matebricks HR</option>
                <option value="Orion AI">Orion AI</option>
                <option value="Lazy Link">Lazy Link</option>
                <option value="Matemeet">Matemeet</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Vikram Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-black text-white text-sm font-sans focus:outline-none focus:border-zinc-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="vikram@enterprise.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-black text-white text-sm font-sans focus:outline-none focus:border-zinc-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Organization / Company *
              </label>
              <input
                type="text"
                required
                placeholder="Enterprise or Institution"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-black text-white text-sm font-sans focus:outline-none focus:border-zinc-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Message / Deployment Scope
              </label>
              <textarea
                rows={3}
                placeholder="Describe your requirements or team size..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-black text-white text-sm font-sans focus:outline-none focus:border-zinc-500"
              />
            </div>

            <div className="pt-3 flex items-center justify-end">
              <button
                type="submit"
                className="btn-tricolor-white !py-4 !px-9 !rounded-full text-sm font-medium flex items-center gap-2.5"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
