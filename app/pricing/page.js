'use client'

import { useState } from 'react'
import { useSite, SiteProvider } from '../../lib/data'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

function PricingContent() {
  const { settings } = useSite()
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    { question: 'Are there hidden fees?', answer: 'No. The price we quote is the price you pay.' },
    { question: 'What is the payment schedule?', answer: '50% upfront, 50% on completion.' },
    { question: 'How long does a project take?', answer: 'Most projects take 2-3 weeks.' },
    { question: 'Do you offer discounts for nonprofits?', answer: 'Yes! 15% off for registered nonprofits.' },
  ]

  return (
    <>
      <Navigation />
      
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 heading-gradient">Simple, honest pricing</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            No hidden fees. No surprise charges. Just straightforward pricing.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {settings.pricing.map(plan => (
              <div 
                key={plan.id}
                className={`border rounded-2xl p-8 card-glow ${plan.popular ? 'border-2' : ''}`}
                style={{ 
                  backgroundColor: 'var(--card)', 
                  borderColor: plan.popular ? settings.colors.accent : 'var(--border)'
                }}
              >
                {plan.popular && (
                  <span 
                    className="text-white px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block"
                    style={{ backgroundColor: settings.colors.accent }}
                  >
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span style={{ color: 'var(--text-muted)' }}> {plan.priceRange.split('-')[1] ? `- ${plan.priceRange.split('-')[1]}` : '+'}</span>
                </div>
                <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn-primary w-full justify-center ${plan.popular ? '' : 'btn-secondary'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--card)', opacity: 0.9 }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Pricing FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border rounded-xl overflow-hidden"
                style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 ${openFaq === index ? 'rotate-180' : ''}`}
                    style={{ color: 'var(--text-muted)', transform: openFaq === index ? 'rotate(180deg)' : 'none' }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5" style={{ color: 'var(--text-secondary)' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default function Pricing() {
  return (
    <SiteProvider>
      <PricingContent />
    </SiteProvider>
  )
}
