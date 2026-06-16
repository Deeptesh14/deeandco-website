'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const C = { bg: '#0A0A0A', gold: '#C8A56A', cream: '#F4F1EA', muted: '#8A8A8A', surface: '#111111', border: '#1E1E1E' }

const founderServices = [
  { title: 'Fundraising Advisory', desc: 'End-to-end support across equity and debt raises.' },
  { title: 'Investor Readiness', desc: 'Positioning, narrative, and materials that open doors.' },
  { title: 'Financial Modeling', desc: 'Rigorous models that withstand institutional scrutiny.' },
  { title: 'Strategic Finance', desc: 'Aligning capital strategy with business objectives.' },
  { title: 'Investor Relations', desc: 'Building trust with capital partners over time.' },
]

const investorServices = [
  { title: 'Deal Sourcing', desc: 'Proprietary access to curated founder opportunities.' },
  { title: 'Deal Screening', desc: 'Initial filtering aligned to your investment thesis.' },
  { title: 'Due Diligence Support', desc: 'Deep-dive analysis before conviction is placed.' },
  { title: 'Market Research', desc: 'Sector intelligence and competitive landscape mapping.' },
  { title: 'Portfolio Intelligence', desc: 'Ongoing monitoring of portfolio company health.' },
]

function ServiceRow({ number, title, desc }: { number: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: '16px',
        padding: '20px 0',
        borderBottom: `1px solid ${C.border}`,
        cursor: 'default',
      }}
    >
      <span style={{ fontSize: '9px', color: 'rgba(200,165,106,0.4)', fontFamily: 'monospace', marginTop: '2px', flexShrink: 0 }}>
        {number}
      </span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '13px', color: hovered ? C.gold : C.cream, fontWeight: 300, marginBottom: '4px', transition: 'color 0.3s' }}>
          {title}
        </div>
        <div style={{ fontSize: '11px', color: 'rgba(138,138,138,0.6)', fontWeight: 300, lineHeight: 1.6 }}>
          {desc}
        </div>
      </div>
      <div style={{ color: hovered ? 'rgba(200,165,106,0.5)' : 'rgba(138,138,138,0.15)', fontSize: '12px', flexShrink: 0, marginTop: '2px', transition: 'color 0.3s' }}>
        →
      </div>
    </div>
  )
}

function ServiceCard({
  tag, headline, subline, services, isInView, delay = 0,
}: {
  tag: string; headline: string; subline: string
  services: typeof founderServices; isInView: boolean; delay?: number
}) {
  const [lineHeight, setLineHeight] = useState(0)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      onMouseEnter={() => setLineHeight(100)}
      onMouseLeave={() => setLineHeight(0)}
      style={{
        backgroundColor: C.surface,
        border: `1px solid ${C.border}`,
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.5s',
      }}
    >
      {/* Left accent line */}
      <div style={{
        position: 'absolute', left: 0, top: 0,
        width: '1px', height: `${lineHeight}%`,
        backgroundColor: C.gold,
        transition: 'height 0.6s ease',
      }} />

      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ width: '16px', height: '1px', backgroundColor: 'rgba(200,165,106,0.4)' }} />
          <span style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(200,165,106,0.7)', fontWeight: 300 }}>
            {tag}
          </span>
        </div>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          fontWeight: 300, fontStyle: 'italic',
          color: C.cream, marginBottom: '12px',
        }}>
          {headline}
        </h3>
        <p style={{ fontSize: '11px', color: 'rgba(138,138,138,0.6)', fontWeight: 300, lineHeight: 1.7, maxWidth: '300px' }}>
          {subline}
        </p>
      </div>

      {/* Services */}
      <div>
        {services.map((svc, i) => (
          <ServiceRow key={svc.title} number={String(i + 1).padStart(2, '0')} {...svc} />
        ))}
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="services" style={{ backgroundColor: C.bg }}>
      <hr className="hr-gold" />
      <div ref={ref} style={{ maxWidth: '80rem', margin: '0 auto', padding: '7rem 2.5rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '64px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <div style={{ width: '24px', height: '1px', backgroundColor: 'rgba(200,165,106,0.4)' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, fontWeight: 300 }}>
              What We Do
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 4.5vw, 4rem)',
              fontWeight: 300, color: C.cream, lineHeight: 1.1, maxWidth: '700px',
            }}
          >
            Advisory that sits on{' '}
            <span style={{ fontStyle: 'italic', color: C.gold }}>both sides</span>{' '}
            of the table.
          </motion.h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          <ServiceCard tag="For Founders" headline="Raise with conviction." subline="From first-round readiness to late-stage capital strategy, we guide founders through every phase of the fundraising journey." services={founderServices} isInView={isInView} delay={0.2} />
          <ServiceCard tag="For Investors" headline="Source with precision." subline="We help institutional and individual investors find, evaluate, and monitor opportunities aligned to their mandate." services={investorServices} isInView={isInView} delay={0.35} />
        </div>
      </div>
    </section>
  )
}
