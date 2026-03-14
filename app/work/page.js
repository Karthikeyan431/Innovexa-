'use client'

import { useState } from 'react'
import { useSite, SiteProvider } from '../../lib/data'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

function WorkContent() {
  const { settings } = useSite()
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'web', 'seo', 'video', 'design']
  const categoryLabels = {
    all: 'All Projects',
    web: 'Web Development',
    seo: 'SEO',
    video: 'Video Editing',
    design: 'Graphic Design'
  }

  const filtered = filter === 'all' 
    ? settings.portfolio 
    : settings.portfolio.filter(p => p.category === filter)

  return (
    <>
      <Navigation />
      
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 heading-gradient">Our Portfolio</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Projects we've completed for our clients.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(project => (
              <div 
                key={project.id}
                className="border rounded-xl overflow-hidden card-glow hover:shadow-lg transition-shadow"
                style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
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
                    <div className="text-center">
                      <svg className="w-12 h-12 mx-auto mb-2" style={{ color: settings.colors.accent, opacity: 0.6 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4.243 4.243a4 4 0 105.656 5.656l4.243-4.243"></path>
                      </svg>
                      <p className="text-xs" style={{ color: settings.colors.accentSecondary }}>Launch your website</p>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
                  <div className="flex items-center justify-between text-sm mb-5">
                    <span style={{ color: 'var(--text-muted)' }}>{project.date}</span>
                    <span className="font-medium" style={{ color: 'var(--accent)' }}>{project.budget}</span>
                  </div>
                  {project.url && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full justify-center items-center py-2.5 px-4 border border-transparent rounded-lg text-sm font-semibold transition-all hover:opacity-90 shadow-sm"
                      style={{ 
                        backgroundColor: 'var(--accent)', 
                        color: '#030712',
                      }}
                    >
                      Visit Website
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--card)', opacity: 0.9 }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to start your project?</h2>
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>Let's create something great together.</p>
          <Link href="/contact" className="btn-primary">Start Your Project</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default function Work() {
  return (
    <SiteProvider>
      <WorkContent />
    </SiteProvider>
  )
}
