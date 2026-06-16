'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { KeystoneMark } from './KeystoneMark'

const C = { bg: '#0A0A0A', gold: '#C8A56A', cream: '#F4F1EA', muted: '#8A8A8A', border: '#1E1E1E' }

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="contact" style={{ position: 'relative', backgroundColor: C.bg, overflow: 'hidden' }}>
      {/* BG glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(200,165,106,0.04) 0%, transparent 70%)',
      }} />
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }} />

      <div ref={ref} style={{
        position: 'relative', zIndex: 1,
        maxWidth: '80rem', margin: '0 auto',
        padding: '7rem 2.5rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      }}>
        {/* Mark — fixed size, no className sizing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ marginBottom: '48px', display: 'flex', justifyContent: 'center' }}
        >
          <KeystoneMark size={36} style={{ color: 'rgba(200,165,106,0.55)' }} />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}
        >
          <div style={{ width: '24px', height: '1px', backgroundColor: 'rgba(200,165,106,0.4)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, fontWeight: 300 }}>
            Get in Touch
          </span>
          <div style={{ width: '24px', height: '1px', backgroundColor: 'rgba(200,165,106,0.4)' }} />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 300, fontStyle: 'italic', color: C.cream,
            marginBottom: '32px', lineHeight: 1,
          }}
        >
          Let&apos;s Talk.
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          style={{
            color: C.muted, fontSize: '15px', fontWeight: 300, lineHeight: 1.8,
            marginBottom: '48px', maxWidth: '480px',
          }}
        >
          Whether you&apos;re preparing for a raise, evaluating opportunities, or exploring strategic
          growth initiatives — we&apos;d love to hear from you.
        </motion.p>

        {/* Email link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{ marginBottom: '40px' }}
        >
          <a
            href="mailto:deeptesh@deeandco.in"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontStyle: 'italic', color: C.gold, fontWeight: 300,
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#D4B97E')}
            onMouseLeave={e => (e.currentTarget.style.color = C.gold)}
          >
            deeptesh@deeandco.in <span>→</span>
          </a>
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <a
            href="mailto:deeptesh@deeandco.in"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              backgroundColor: C.gold, color: '#0A0A0A',
              fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
              fontWeight: 500, padding: '16px 32px', textDecoration: 'none',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#D4B97E')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = C.gold)}
          >
            Schedule a Conversation <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
