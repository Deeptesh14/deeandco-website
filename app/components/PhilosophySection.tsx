'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const C = { bg: '#0A0A0A', gold: '#C8A56A', cream: '#F4F1EA', muted: '#8A8A8A', surface: '#111111', border: '#1E1E1E' }

const MARQUEE_ITEMS = [
  'Fundraising Advisory', 'Investor Relations', 'Deal Sourcing',
  'Strategic Finance', 'Capital Markets', 'Due Diligence',
  'Portfolio Intelligence', 'Market Research',
]

export function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section id="philosophy" style={{ backgroundColor: C.bg }}>
      {/* Marquee */}
      <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, overflow: 'hidden', padding: '14px 0' }}>
        <div className="animate-marquee" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '20px', margin: '0 20px' }}>
              <span style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, fontWeight: 300 }}>
                {item}
              </span>
              <span style={{ color: 'rgba(200,165,106,0.3)', fontSize: '8px' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div ref={ref} style={{ maxWidth: '80rem', margin: '0 auto', padding: '7rem 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px' }}>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <div style={{ width: '24px', height: '1px', backgroundColor: 'rgba(200,165,106,0.4)' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, fontWeight: 300 }}>
              Our Philosophy
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
              fontWeight: 300, lineHeight: 1.05,
              color: C.cream, maxWidth: '800px',
            }}
          >
            Capital is abundant.{' '}
            <span style={{ fontStyle: 'italic', color: C.gold }}>Trust</span>{' '}
            is scarce.
          </motion.h2>

          {/* Body columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              style={{ color: C.muted, fontSize: '15px', fontWeight: 300, lineHeight: 1.8 }}
            >
              Successful fundraising is not just about introductions. It is about preparation,
              positioning, and building the right relationships — long before a term sheet
              is ever discussed.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ color: C.muted, fontSize: '15px', fontWeight: 300, lineHeight: 1.8 }}
            >
              At Dee & Co, we work closely with founders and investors to create meaningful
              connections that lead to long-term value creation — not transactional outcomes.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.65 }}
            style={{
              borderTop: `1px solid ${C.border}`,
              paddingTop: '48px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '32px',
            }}
          >
            {[
              { value: 'Founders', label: 'We prepare for capital' },
              { value: 'Investors', label: 'We source with conviction' },
              { value: 'Capital', label: 'We connect with purpose' },
            ].map((s, i) => (
              <div key={i}
                onMouseEnter={e => (e.currentTarget.querySelector('.stat-val') as HTMLElement)!.style.color = C.gold}
                onMouseLeave={e => (e.currentTarget.querySelector('.stat-val') as HTMLElement)!.style.color = C.cream}
              >
                <div className="stat-val" style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 300,
                  color: C.cream, marginBottom: '8px', transition: 'color 0.3s',
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(138,138,138,0.5)', fontWeight: 300 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
