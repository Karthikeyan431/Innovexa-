'use client'

import { useState } from 'react'
import { useSite, SiteProvider } from '../../lib/data'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

function ContactContent() {
  const { settings } = useSite()
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `*New Inquiry*%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0ABudget: ${form.budget}%0AMessage: ${form.message}`
    const phone = settings.company.whatsapp.replace(/\D/g, '')
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <Navigation />
      
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 heading-gradient">Let's Work Together</h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Have a project in mind? Get in touch with us.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="border rounded-2xl p-8 card-glow" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${settings.colors.success}20` }}>
                      <svg className="w-6 h-6" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Fastest response</p>
                      <a href={`https://wa.me/${settings.company.whatsapp.replace(/\D/g, '')}?text=Hi%2C%20Innovexa.%20I%20want%20to%20know%20something%20%21`} className="font-medium" style={{ color: 'var(--success)' }}>{settings.company.whatsapp}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${settings.colors.accent}20` }}>
                      <svg className="w-6 h-6" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>For formal inquiries</p>
                      <a href={`mailto:${settings.company.email}`} className="font-medium" style={{ color: 'var(--accent)' }}>{settings.company.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${settings.colors.accentSecondary}20` }}>
                      <svg className="w-6 h-6" style={{ color: 'var(--accentSecondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Mon - Fri: 9am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="border rounded-2xl p-8 card-glow" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input type="text" required className="form-input" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input type="email" required className="form-input" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input type="tel" className="form-input" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Needed</label>
                    <select className="form-select" value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                      <option value="">Select a service</option>
                      {settings.services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget</label>
                    <select className="form-select" value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}>
                      <option value="">Select budget</option>
                      <option value="₹15,000 - ₹25,000">₹15,000 - ₹25,000</option>
                      <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                      <option value="₹50,000+">₹50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea rows="4" className="form-input" value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default function Contact() {
  return (
    <SiteProvider>
      <ContactContent />
    </SiteProvider>
  )
}
