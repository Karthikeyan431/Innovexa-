'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useSite } from '../lib/data'

export default function Navigation() {
  const { settings } = useSite()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ]

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 glass border-b" 
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--primary)' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" scroll={false} aria-label="INNOVEXA Home">
            <img 
              src="https://i.ibb.co/SDTX1Pb5/IMG-20251005-WA0002-removebg-preview-removebg-preview.png" 
              alt="INNOVEXA Logo" 
              className="h-14 w-auto drop-shadow-lg"
            />
            <span className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Innovexa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                scroll={false}
                className="link-hover"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="btn-primary"
              scroll={false}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            style={{ color: 'var(--text-secondary)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--primary)' }}>
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="py-2"
                style={{ color: 'var(--text-secondary)' }}
                scroll={false}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="btn-primary text-center"
              scroll={false}
              onClick={closeMobileMenu}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
