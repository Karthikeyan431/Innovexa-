'use client'

import { useSite, SiteProvider } from '../lib/data'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

function HomeContent() {
  const { settings } = useSite()
  const { hero, services, portfolio, company } = settings

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 hero-gradient" style={{ position: 'relative' }}>
        {/* Gradient orbs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${settings.colors.accent}30 0%, transparent 70%)`,
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }} />
        <div className="animate-float" style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${settings.colors.accentSecondary}20 0%, transparent 70%)`,
          filter: 'blur(80px)',
          pointerEvents: 'none',
          animationDelay: '3s'
        }} />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span 
              className="px-4 py-2 rounded-full text-sm font-medium border"
              style={{ 
                backgroundColor: `${settings.colors.accent}20`,
                color: settings.colors.accent,
                borderColor: `${settings.colors.accent}40`
              }}
            >
              {hero.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight text-gradient">
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-center max-w-2xl mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/work" className="btn-primary justify-center">
              {hero.ctaPrimary}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </Link>
            <Link href="/pricing" className="btn-secondary justify-center">
              {hero.ctaSecondary}
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8" style={{ color: 'var(--text-secondary)' }}>
            {hero.trustIndicators.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-5 h-5" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Browser Mockup */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div 
              className="rounded-t-lg border px-4 py-3 flex items-center gap-2"
              style={{ 
                backgroundColor: 'var(--card)', 
                borderColor: 'var(--border)',
                borderBottom: 'none'
              }}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div 
                className="flex-1 rounded px-4 py-1 text-center text-sm mx-16"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--text-muted)' }}
              >
                innovexa.com
              </div>
            </div>
            <div 
              className="border rounded-b-lg p-8 min-h-[300px] flex items-center justify-center"
              style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div className="text-center">
                <svg 
                  className="w-16 h-16 mx-auto mb-4" 
                  style={{ color: 'var(--accent)' }} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <p style={{ color: 'var(--text-secondary)' }}>Your website could look like this</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--card)', opacity: 0.9 }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 heading-gradient">What We Do</h2>
          <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: 'var(--text-secondary)' }}>
            We focus on services that actually help small businesses grow.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <div 
                key={service.id}
                className="border rounded-xl p-8 card-glow"
                style={{ 
                  backgroundColor: 'var(--card)', 
                  borderColor: 'var(--border)' 
                }}
              >
                <div 
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${settings.colors.accent}20` }}
                >
                  <svg className="w-7 h-7" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 -1.3433-9s-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                <p className="font-medium" style={{ color: 'var(--accent)' }}>{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 heading-gradient">Recent Work</h2>
          <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: 'var(--text-secondary)' }}>
            Projects we've completed for our clients.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.slice(0, 2).map((project) => (
              <div 
                key={project.id}
                className="border rounded-xl overflow-hidden card-glow hover:shadow-lg transition-shadow"
                style={{ 
                  backgroundColor: 'var(--card)', 
                  borderColor: 'var(--border)' 
                }}
              >
                <div 
                  className="h-48 relative overflow-hidden rounded-t-xl flex items-center justify-center"
                  style={{ 
                    backgroundImage: project.thumbnail ? `url('${project.thumbnail}')` : 'none',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'rgba(11, 15, 26, 0.5)',
                  }}
                >
                  {!project.thumbnail && (
                    <svg className="w-16 h-16" style={{ color: 'var(--accent)', opacity: 0.5 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm mb-4">
                    <span className="font-medium" style={{ color: 'var(--accent)' }}>{project.budget}</span>
                    <span style={{ color: 'var(--text-muted)' }}>{project.date}</span>
                  </div>
                  {project.url && (
                    <Link 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-compact text-sm font-semibold"
                      style={{ color: 'var(--accent)' }}
                    >
                      View Project →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/work" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--card)', opacity: 0.9 }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 heading-gradient">Ready to get started?</h2>
          <p className="text-lg mb-10" style={{ color: 'var(--text-secondary)' }}>
            Let's chat about your project. We'll give you a straight answer and a fair quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary justify-center">
              Start a Conversation
            </Link>
            <Link href="/pricing" className="btn-secondary justify-center">
              See Pricing First
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default function Home() {
  return (
    <SiteProvider>
      <HomeContent />
    </SiteProvider>
  )
}
