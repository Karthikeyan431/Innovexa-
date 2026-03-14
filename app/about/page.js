'use client'

import { useSite, SiteProvider } from '../../lib/data'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

function AboutContent() {
  const { settings } = useSite()

  return (
    <>
      <Navigation />
      
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 heading-gradient">About Us</h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            We're a new, honest digital agency helping small businesses grow.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                <p>We started {settings.company.name} in {settings.company.founded} because we saw small businesses getting overcharged for websites.</p>
                <p>Big agencies charge huge amounts for simple work. We're different - we pass the savings on to you.</p>
                <p>Every project helps us build our reputation. We're not trying to be the biggest, just the most honest.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                <p className="text-4xl font-bold" style={{ color: 'var(--accent)' }}>{settings.company.founded}</p>
                <p style={{ color: 'var(--text-muted)' }}>Founded</p>
              </div>
              <div className="border rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                <p className="text-4xl font-bold" style={{ color: 'var(--accent)' }}>7</p>
                <p style={{ color: 'var(--text-muted)' }}>Projects</p>
              </div>
              <div className="border rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                <p className="text-4xl font-bold" style={{ color: 'var(--accent)' }}>8</p>
                <p style={{ color: 'var(--text-muted)' }}>Team Members</p>
              </div>
              <div className="border rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                <p className="text-4xl font-bold" style={{ color: 'var(--success)' }}>100%</p>
                <p style={{ color: 'var(--text-muted)' }}>Satisfaction</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${settings.colors.accent}20` }}>
                <svg className="w-8 h-8" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Honesty over hype</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We tell you the truth, even if it's not what you want to hear.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${settings.colors.accentSecondary}20` }}>
                <svg className="w-8 h-8" style={{ color: 'var(--accentSecondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Small business focus</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We help local businesses get online without breaking the bank.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${settings.colors.success}20` }}>
                <svg className="w-8 h-8" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Long-term thinking</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We want to be your ongoing partner, not a one-time vendor.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default function About() {
  return (
    <SiteProvider>
      <AboutContent />
    </SiteProvider>
  )
}
