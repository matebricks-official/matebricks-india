import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Manifesto from '../components/Manifesto'
import EconomicCommitment from '../components/EconomicCommitment'
import FAQ from '../components/FAQ'

export default function HomePage({ onSelectProduct, onOpenContact }) {
  return (
    <main>
      {/* Hero Section */}
      <Hero onOpenContact={handleContactFromHero(onOpenContact)} />

      {/* 5 Live Applications */}
      <Products
        onSelectProduct={onSelectProduct}
        onOpenContact={onOpenContact}
      />

      {/* The India-First Thesis */}
      <Manifesto />

      {/* Software Economics & Value Commitment for India */}
      <EconomicCommitment onOpenContact={onOpenContact} />

      {/* Plain Language FAQ */}
      <FAQ onOpenContact={onOpenContact} />
    </main>
  )
}

function handleContactFromHero(onOpenContact) {
  return (subject) => onOpenContact(subject)
}
