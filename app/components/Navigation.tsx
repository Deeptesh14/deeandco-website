'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { KeystoneMark } from './KeystoneMark'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #1E1E1E' : '1px solid transparent',
          transition: 'all 0.5s ease',
        }}
      >
        <nav style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 2.5rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }} aria-label="Dee & Co">
            <KeystoneMark size={22} className="" style={{ color: '#C8A56A' }} />
            <span style={{
              color: '#F4F1EA',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 300,
            }}>
              Dee <span style={{ color: '#C8A56A' }}>&</span> Co
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="hidden md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  color: '#8A8A8A',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 300,
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F4F1EA')}
                onMouseLeave={e => (e.currentTarget.style.color = '#8A8A8A')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="mailto:deeptesh@deeandco.in"
              style={{
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 400,
                color: '#C8A56A',
                border: '1px solid rgba(200,165,106,0.3)',
                padding: '10px 20px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(200,165,106,0.1)'
                e.currentTarget.style.borderColor = 'rgba(200,165,106,0.6)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(200,165,106,0.3)'
              }}
            >
              Book a Conversation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#8A8A8A' }}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <div style={{ width: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                style={{ display: 'block', height: '1px', backgroundColor: 'currentColor', transformOrigin: 'center' }} />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                style={{ display: 'block', height: '1px', backgroundColor: 'currentColor' }} />
              <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                style={{ display: 'block', height: '1px', backgroundColor: 'currentColor', transformOrigin: 'center' }} />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 40,
              backgroundColor: 'rgba(10,10,10,0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '40px',
            }}
            className="md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '2rem', color: '#F4F1EA',
                  fontStyle: 'italic', fontWeight: 300,
                  textDecoration: 'none', transition: 'color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C8A56A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#F4F1EA')}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:deeptesh@deeandco.in"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: '24px', fontSize: '10px', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: '#C8A56A',
                border: '1px solid rgba(200,165,106,0.3)',
                padding: '12px 24px', textDecoration: 'none',
              }}
            >
              Book a Conversation
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
