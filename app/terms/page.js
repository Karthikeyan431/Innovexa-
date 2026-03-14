'use client'

import { useSite, SiteProvider } from '../../lib/data'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

function TermsContent() {
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
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>Last updated: January 2025</p>
          
          <div className="space-y-8" style={{ color: 'var(--text-secondary)' }}>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Payment Terms</h2>
              <p>50% upfront to start work, 50% on completion. For larger projects: 40/30/30 split.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Revisions</h2>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Landing pages: 2 revision rounds</li>
                <li>Business websites: 3 revision rounds</li>
                <li>E-commerce: 4 revision rounds</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Ownership</h2>
              <p>Once paid, you own all work created. We retain portfolio display rights.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Refunds</h2>
              <p>Deposit fully refundable if cancelled before work begins.</p>
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

export default function Terms() {
  return (
    <SiteProvider>
      <TermsContent />
    </SiteProvider>
  )
}
