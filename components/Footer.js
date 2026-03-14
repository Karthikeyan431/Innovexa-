'use client'

import Link from 'next/link'
import { useSite } from '../lib/data'

export default function Footer() {
  const { settings } = useSite()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--footer)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img 
                src="https://i.ibb.co/SDTX1Pb5/IMG-20251005-WA0002-removebg-preview-removebg-preview.png" 
                alt="INNOVEXA" 
                className="h-16 w-auto drop-shadow-lg"
              />
              <span className="text-2xl font-bold heading-gradient">Innovexa</span>
            </Link>
            <p style={{ color: 'var(--text-secondary)' }} className="max-w-sm">
              {settings.company.tagline}. We're honest, and we build good websites at fair prices for small businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="link-hover">Services</Link></li>
              <li><Link href="/work" className="link-hover">Work</Link></li>
              <li><Link href="/about" className="link-hover">About</Link></li>
              <li><Link href="/pricing" className="link-hover">Pricing</Link></li>
              <li><Link href="/contact" className="link-hover">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="link-hover">Privacy Policy</Link></li>
              <li><Link href="/terms" className="link-hover">Terms of Service</Link></li>
              <li><Link href="/admin" className="link-hover">Admin Panel</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center" style={{ borderTop: '1px solid var(--border)' }}>
          <p style={{ color: 'var(--text-muted)' }}>© {new Date().getFullYear()} {settings.company.name}. Made with honesty in {settings.company.location}</p>
        </div>
      </div>
    </footer>
  )
}
