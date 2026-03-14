'use client'

import { useSite, SiteProvider } from '../../lib/data'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

function ServicesContent() {
  const { settings } = useSite()

  return (
    <>
      <Navigation />
      
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 heading-gradient">Our Services</h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            We offer the services that actually help small businesses grow.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto space-y-8">
          {settings.services.map((service, index) => (
            <div 
              key={service.id}
              className="border rounded-2xl p-8 card-glow"
              style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ backgroundColor: 'var(--primary)', color: 'var(--text-secondary)' }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>{service.price}</span>
                <Link href="/contact" className="btn-primary">Get Quote</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default function Services() {
  return (
    <SiteProvider>
      <ServicesContent />
    </SiteProvider>
  )
}
