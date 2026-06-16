'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const C = { bg: '#0A0A0A', gold: '#C8A56A', cream: '#F4F1EA', muted: '#8A8A8A', surface: '#111111', border: '#1E1E1E' }

const steps = [
  { number: '01', title: 'Understand', body: 'We begin with deep listening. Understanding your business, your capital needs, your timeline, and the specific outcome you are working toward.' },
  { number: '02', title: 'Evaluate', body: 'We assess readiness, refine positioning, and identify the right investor profiles — aligning strategy before any outreach begins.' },
  { number: '03', title: 'Connect', body: 'We make warm, well-timed introductions to investors who genuinely fit. Not volume. Quality access built on existing relationships.' },
  { number: '04', title: 'Execute', body: 'We remain engaged through term sheet negotiation, due diligence, and close — ensuring the process moves efficiently toward a decisive outcome.' },
]

function Step({ step, delay, isInView }: { step: typeof steps[0]; delay: number; isInView: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative' }}
    >
      {/* Dot + number */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
        <div style={{
          width: '12px', height: '12px', borderRadius: '50%',
          border: `1px solid ${hovered ? C.gold : 'rgba(200,165,106,0.3)'}`,
          backgroundColor: C.surface, flexShrink: 0,
          transition: 'border-color 0.3s, box-shadow 0.3s',
          boxShadow: hovered ? `0 0 12px rgba(200,165,106,0.2)` : 'none',
        }} />
        <span style={{ fontFamily: 'monospace', fontSize: '9px', color: 'rgba(200,165,106,0.4)', letterSpacing: '0.1em' }}>
          {step.number}
        </span>
      </div>

      <h3 style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
        fontWeight: 300, fontStyle: 'italic',
        color: hovered ? C.gold : C.cream,
        marginBottom: '16px', transition: 'color 0.3s',
      }}>
        {step.title}
      </h3>
      <p style={{ fontSize: '13px', color: 'rgba(138,138,138,0.7)', fontWeight: 300, lineHeight: 1.8 }}>
        {step.body}
      </p>
    </motion.div>
  )
}

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="process" style={{ backgroundColor: C.surface }}>
      <hr className="hr-gold" />
      <div ref={ref} style={{ maxWidth: '80rem', margin: '0 auto', padding: '7rem 2.5rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}
          >
            <div style={{ width: '24px', height: '1px', backgroundColor: 'rgba(200,165,106,0.4)' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, fontWeight: 300 }}>
              How We Work
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 4.5vw, 4rem)',
              fontWeight: 300, color: C.cream, lineHeight: 1.1, maxWidth: '600px',
            }}
          >
            A deliberate process,{' '}
            <span style={{ fontStyle: 'italic', color: C.gold }}>not a pipeline.</span>
          </motion.h2>
        </div>

        {/* Steps grid */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            style={{
              position: 'absolute', top: '5px', left: '6px', right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(200,165,106,0.15), transparent)',
              transformOrigin: 'left',
            }}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '48px',
          }}>
            {steps.map((step, i) => (
              <Step key={step.number} step={step} delay={0.4 + i * 0.12} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
      <hr className="hr-gold" />
    </section>
  )
}
