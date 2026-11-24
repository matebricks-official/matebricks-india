import React, { useEffect } from 'react'
import { X, Check, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react'

export default function ProductModal({ product, onClose, onOpenContact }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!product) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-[#0A0A0C] border border-zinc-800 rounded-3xl shadow-2xl p-8 sm:p-12 my-8 overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between pb-6 mb-8 border-b border-zinc-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-mono text-xs font-semibold text-zinc-500">
                [{product.num}]
              </span>
              <span className="px-3 py-0.5 rounded-full text-xs font-mono uppercase bg-zinc-900 text-zinc-300 border border-zinc-800">
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
            <h3 className="text-3xl font-semibold tracking-tight text-white font-sans">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-zinc-500 uppercase tracking-wider mt-1">
              {product.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-900 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body in Simple Language */}
        <div className="space-y-6 text-sm">
          {!product.isAvailable && (
            <div className="p-4 rounded-2xl bg-zinc-950 border border-amber-900/40 flex items-center gap-3 text-amber-300/90 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span>Status: {product.name} is currently unavailable while undergoing engineering and network optimization for India.</span>
            </div>
          )}

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              What This Application Does
            </h4>
            <p className="text-zinc-300 leading-relaxed font-sans text-base">
              {product.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Why Indians Love It
            </h4>
            <div className="space-y-3">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 text-zinc-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-sm leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Matebricks Promise Stamp */}
          <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 font-mono text-xs space-y-2">
            <div className="flex items-center gap-2 text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold uppercase">The Matebricks Guarantee</span>
            </div>
            <p className="text-zinc-400 font-sans text-xs leading-relaxed">
              Crafted with care by Matebricks India. Your personal files, 
              identity, and conversations stay 100% private and protected under strict multi-layer encryption.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-zinc-500">
            {product.isAvailable ? 'Available on:' : 'Planned Platforms:'}{' '}
            <span className="text-zinc-300">{product.platforms}</span>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto btn-tricolor-ghost !py-3 !px-6 !rounded-full cursor-pointer"
            >
              Close
            </button>
            {product.isAvailable ? (
              <button
                onClick={() => {
                  onClose()
                  onOpenContact(`Inquiry: ${product.name}`)
                }}
                className="w-full sm:w-auto btn-tricolor-white !py-3.5 !px-8 !rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>{product.actionText || 'Get Started'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="w-full sm:w-auto btn-disabled !py-3.5 !px-8 !text-xs !rounded-full text-center">
                <span>Currently Unavailable</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
