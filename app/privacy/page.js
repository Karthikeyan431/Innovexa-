'use client'

import { useSite, SiteProvider } from '../../lib/data'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

function PrivacyContent() {
  const { settings } = useSite()

  return (
    <>
      <Navigation />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link href="javascript:history.back()" className="inline-flex items-center gap-2 mb-8" style={{ color: 'var(--text-secondary)' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Go Back
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>Last updated: January 2025</p>
          
          <div className="space-y-8" style={{ color: 'var(--text-secondary)' }}>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">What We Collect</h2>
              <p>We only collect information you voluntarily provide through our contact form:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>Project details</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">How We Use It</h2>
              <p>We use this information solely to respond to your inquiries and provide quotes.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">We Don't Sell Data</h2>
              <p>We never sell, rent, or share your personal information with third parties.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
              <p>Questions? Email us at <a href={`mailto:${settings.company.email}`} className="font-medium" style={{ color: 'var(--accent)' }}>{settings.company.email}</a></p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default function Privacy() {
  return (
    <SiteProvider>
      <PrivacyContent />
    </SiteProvider>
  )
}
