'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const C = {
  bg: '#0A0A0A',
  gold: '#C8A56A',
  cream: '#F4F1EA',
  muted: '#8A8A8A',
}

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 })
  const parallaxX = useTransform(springX, [-1, 1], [-12, 12])
  const parallaxY = useTransform(springY, [-1, 1], [-8, 8])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1)
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay },
  })

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: C.bg,
    }}>
      {/* Grid */}
      <div className="grid-pattern animate-grid-pulse" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
      }} />

      {/* Radial vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, #0A0A0A 75%)',
      }} />

      {/* Gold glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '400px', height: '400px', pointerEvents: 'none',
        background: 'radial-gradient(circle at 80% 20%, rgba(200,165,106,0.07) 0%, transparent 70%)',
      }} />

      {/* Parallax container */}
      <motion.div style={{ x: parallaxX, y: parallaxY, position: 'relative', zIndex: 10 }}>
        <div style={{
          maxWidth: '80rem', margin: '0 auto',
          padding: '8rem 2.5rem 5rem',
        }}>
          {/* Eyebrow */}
          <motion.div {...fadeUp(0.2)} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
            <div style={{ width: '32px', height: '1px', backgroundColor: C.gold, opacity: 0.6 }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, fontWeight: 300 }}>
              Capital Advisory
            </span>
          </motion.div>

          {/* Headline line 1 */}
          <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
            <motion.h1 {...fadeUp(0.35)} style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: C.cream,
            }}>
              Capital Advisory
            </motion.h1>
          </div>

          {/* Headline line 2 — italic gold */}
          <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
            <motion.h1 {...fadeUp(0.5)} style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              fontStyle: 'italic',
              color: C.gold,
            }}>
              for Founders
            </motion.h1>
          </div>

          {/* Headline line 3 */}
          <div style={{ overflow: 'hidden', marginBottom: '64px' }}>
            <motion.h1 {...fadeUp(0.65)} style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: C.cream,
            }}>
              and Investors.
            </motion.h1>
          </div>

          {/* Bottom row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '40px' }}>
            <motion.p {...fadeUp(0.8)} style={{
              maxWidth: '380px', color: C.muted, fontSize: '15px',
              fontWeight: 300, lineHeight: 1.7,
            }}>
              We help ambitious companies prepare for growth, raise capital, and build meaningful
              investor relationships that endure.
            </motion.p>

            <motion.div {...fadeUp(0.95)} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
              <a
                href="mailto:deeptesh@deeandco.in"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '12px',
                  backgroundColor: C.gold, color: C.bg,
                  fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  fontWeight: 500, padding: '16px 28px', textDecoration: 'none',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#D4B97E')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = C.gold)}
              >
                Book a Conversation <span>→</span>
              </a>
              <a
                href="#philosophy"
                style={{
                  fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  fontWeight: 300, color: C.muted, textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '16px 8px', transition: 'color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = C.cream)}
                onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
              >
                Learn More <span style={{ color: C.gold }}>↓</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        }}
      >
        <span style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(138,138,138,0.4)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, rgba(200,165,106,0.5), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
