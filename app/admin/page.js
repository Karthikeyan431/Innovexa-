'use client'

import { useState } from 'react'
import { useSite, SiteProvider } from '../../lib/data'
import Navigation from '../../components/Navigation'
import Link from 'next/link'

function AdminContent() {
  const { settings, updateColors, updateContent, resetSettings, isLoaded } = useSite()
  const [activeTab, setActiveTab] = useState('colors')
  const [saved, setSaved] = useState(false)

  const handleColorChange = (key, value) => {
    updateColors({ [key]: value })
  }

  const handleContentChange = (section, field, value) => {
    updateContent(section, { ...settings[section], [field]: value })
  }

  const showSaved = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  // Add new service
  const addService = () => {
    const newId = `service-${Date.now()}`
    const newService = {
      id: newId,
      title: 'New Service',
      description: 'Service description here.',
      icon: 'star',
      price: '₹10,000',
      features: ['Feature 1', 'Feature 2'],
    }
    updateContent('services', [...settings.services, newService])
  }

  // Delete service
  const deleteService = (index) => {
    const newServices = settings.services.filter((_, i) => i !== index)
    updateContent('services', newServices)
  }

  // Add new portfolio item
  const addPortfolio = () => {
    const newId = Date.now()
    const newPortfolio = {
      id: newId,
      title: 'New Project',
      category: 'web',
      description: 'Project description here.',
      budget: '₹25,000',
      date: 'Coming Soon',
      image: '',
    }
    updateContent('portfolio', [...settings.portfolio, newPortfolio])
  }

  // Delete portfolio item
  const deletePortfolio = (index) => {
    const newPortfolio = settings.portfolio.filter((_, i) => i !== index)
    updateContent('portfolio', newPortfolio)
  }

  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>Loading...</div>
  }

  const colorFields = [
    { key: 'primary', label: 'Primary Background', default: '#0f172a' },
    { key: 'card', label: 'Card Background', default: '#1e293b' },
    { key: 'border', label: 'Border Color', default: '#334155' },
    { key: 'accent', label: 'Primary Accent (Teal)', default: '#14b8a6' },
    { key: 'accentSecondary', label: 'Secondary Accent', default: '#0d9488' },
    { key: 'success', label: 'Success Color', default: '#22c55e' },
    { key: 'textPrimary', label: 'Primary Text', default: '#ffffff' },
    { key: 'textSecondary', label: 'Secondary Text', default: '#94a3b8' },
    { key: 'textMuted', label: 'Muted Text', default: '#64748b' },
  ]

  const tabs = [
    { id: 'colors', label: 'Colors' },
    { id: 'company', label: 'Company Info' },
    { id: 'hero', label: 'Hero Section' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
  ]

  return (
    <>
      <Navigation />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Admin Panel</h1>
              <p style={{ color: 'var(--text-secondary)' }}>Control your website colors and content</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={resetSettings}
                className="btn-secondary"
              >
                Reset to Default
              </button>
              <Link href="/" className="btn-primary">
                View Website
              </Link>
            </div>
          </div>

          {/* Saved Notification */}
          {saved && (
            <div 
              className="fixed top-20 right-4 px-4 py-2 rounded-lg text-white z-50"
              style={{ backgroundColor: 'var(--success)' }}
            >
              Changes saved!
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  activeTab === tab.id ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Colors Tab */}
          {activeTab === 'colors' && (
            <div 
              className="border rounded-xl p-8"
              style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <h2 className="text-xl font-semibold mb-6">Website Colors</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {colorFields.map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium mb-2">{field.label}</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={settings.colors[field.key]}
                        onChange={(e) => handleColorChange(field.key, e.target.value)}
                        className="w-12 h-12 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={settings.colors[field.key]}
                        onChange={(e) => handleColorChange(field.key, e.target.value)}
                        className="form-input flex-1"
                        placeholder={field.default}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={showSaved}
                className="btn-primary mt-6"
              >
                Save Colors
              </button>
            </div>
          )}

          {/* Company Info Tab */}
          {activeTab === 'company' && (
            <div 
              className="border rounded-xl p-8"
              style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <h2 className="text-xl font-semibold mb-6">Company Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    value={settings.company.name}
                    onChange={(e) => handleContentChange('company', 'name', e.target.value)}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tagline</label>
                  <input
                    type="text"
                    value={settings.company.tagline}
                    onChange={(e) => handleContentChange('company', 'tagline', e.target.value)}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    value={settings.company.location}
                    onChange={(e) => handleContentChange('company', 'location', e.target.value)}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={settings.company.email}
                    onChange={(e) => handleContentChange('company', 'email', e.target.value)}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="text"
                    value={settings.company.phone}
                    onChange={(e) => handleContentChange('company', 'phone', e.target.value)}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp</label>
                  <input
                    type="text"
                    value={settings.company.whatsapp}
                    onChange={(e) => handleContentChange('company', 'whatsapp', e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>
              <button 
                onClick={showSaved}
                className="btn-primary mt-6"
              >
                Save Changes
              </button>
            </div>
          )}

          {/* Hero Section Tab */}
          {activeTab === 'hero' && (
            <div 
              className="border rounded-xl p-8"
              style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <h2 className="text-xl font-semibold mb-6">Hero Section</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Badge Text</label>
                  <input
                    type="text"
                    value={settings.hero.badge}
                    onChange={(e) => handleContentChange('hero', 'badge', e.target.value)}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Headline</label>
                  <textarea
                    value={settings.hero.headline}
                    onChange={(e) => handleContentChange('hero', 'headline', e.target.value)}
                    className="form-input"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subheadline</label>
                  <textarea
                    value={settings.hero.subheadline}
                    onChange={(e) => handleContentChange('hero', 'subheadline', e.target.value)}
                    className="form-input"
                    rows={3}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Primary CTA</label>
                    <input
                      type="text"
                      value={settings.hero.ctaPrimary}
                      onChange={(e) => handleContentChange('hero', 'ctaPrimary', e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Secondary CTA</label>
                    <input
                      type="text"
                      value={settings.hero.ctaSecondary}
                      onChange={(e) => handleContentChange('hero', 'ctaSecondary', e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
              <button 
                onClick={showSaved}
                className="btn-primary mt-6"
              >
                Save Changes
              </button>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div 
              className="border rounded-xl p-8"
              style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Services</h2>
                <button 
                  onClick={addService}
                  className="btn-primary"
                >
                  + Add New Service
                </button>
              </div>
              <div className="space-y-6">
                {settings.services.map((service, index) => (
                  <div key={service.id} className="border rounded-lg p-4 relative" style={{ borderColor: 'var(--border)' }}>
                    <button
                      onClick={() => deleteService(index)}
                      className="absolute top-4 right-4 px-3 py-1 text-sm rounded bg-red-500/20 text-red-400 hover:bg-red-500/30"
                    >
                      Delete
                    </button>
                    <h3 className="font-medium mb-4 pr-20">{service.title}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-1">Title</label>
                        <input
                          type="text"
                          value={service.title}
                          onChange={(e) => {
                            const newServices = [...settings.services]
                            newServices[index].title = e.target.value
                            updateContent('services', newServices)
                          }}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Icon (lucide name)</label>
                        <input
                          type="text"
                          value={service.icon}
                          onChange={(e) => {
                            const newServices = [...settings.services]
                            newServices[index].icon = e.target.value
                            updateContent('services', newServices)
                          }}
                          className="form-input"
                          placeholder="globe, search, video, etc."
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Price</label>
                        <input
                          type="text"
                          value={service.price}
                          onChange={(e) => {
                            const newServices = [...settings.services]
                            newServices[index].price = e.target.value
                            updateContent('services', newServices)
                          }}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Features (comma separated)</label>
                        <input
                          type="text"
                          value={service.features.join(', ')}
                          onChange={(e) => {
                            const newServices = [...settings.services]
                            newServices[index].features = e.target.value.split(',').map(f => f.trim())
                            updateContent('services', newServices)
                          }}
                          className="form-input"
                          placeholder="Feature 1, Feature 2"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm mb-1">Description</label>
                        <textarea
                          value={service.description}
                          onChange={(e) => {
                            const newServices = [...settings.services]
                            newServices[index].description = e.target.value
                            updateContent('services', newServices)
                          }}
                          className="form-input"
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {settings.services.length === 0 && (
                <p className="text-center py-8" style={{ color: 'var(--text-muted)' }}>
                  No services yet. Click "Add New Service" to create one.
                </p>
              )}
              <button 
                onClick={showSaved}
                className="btn-primary mt-6"
              >
                Save Changes
              </button>
            </div>
          )}

          {/* Portfolio Tab */}
          {activeTab === 'portfolio' && (
            <div 
              className="border rounded-xl p-8"
              style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Portfolio Projects</h2>
                <button 
                  onClick={addPortfolio}
                  className="btn-primary"
                >
                  + Add New Project
                </button>
              </div>
              <div className="space-y-6">
                {settings.portfolio.map((project, index) => (
                  <div key={project.id} className="border rounded-lg p-4 relative" style={{ borderColor: 'var(--border)' }}>
                    <button
                      onClick={() => deletePortfolio(index)}
                      className="absolute top-4 right-4 px-3 py-1 text-sm rounded bg-red-500/20 text-red-400 hover:bg-red-500/30"
                    >
                      Delete
                    </button>
                    <h3 className="font-medium mb-4 pr-20">Project: {project.title}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm mb-1">Title</label>
                        <input
                          type="text"
                          value={project.title}
                          onChange={(e) => {
                            const newPortfolio = [...settings.portfolio]
                            newPortfolio[index].title = e.target.value
                            updateContent('portfolio', newPortfolio)
                          }}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Category</label>
                        <select
                          value={project.category}
                          onChange={(e) => {
                            const newPortfolio = [...settings.portfolio]
                            newPortfolio[index].category = e.target.value
                            updateContent('portfolio', newPortfolio)
                          }}
                          className="form-select"
                        >
                          <option value="web">Web</option>
                          <option value="seo">SEO</option>
                          <option value="video">Video</option>
                          <option value="design">Design</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Budget</label>
                        <input
                          type="text"
                          value={project.budget}
                          onChange={(e) => {
                            const newPortfolio = [...settings.portfolio]
                            newPortfolio[index].budget = e.target.value
                            updateContent('portfolio', newPortfolio)
                          }}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Date</label>
                        <input
                          type="text"
                          value={project.date}
                          onChange={(e) => {
                            const newPortfolio = [...settings.portfolio]
                            newPortfolio[index].date = e.target.value
                            updateContent('portfolio', newPortfolio)
                          }}
                          className="form-input"
                        />
                      </div>
                      <div className="lg:col-span-2">
                        <label className="block text-sm mb-1">Image URL</label>
                        <input
                          type="text"
                          value={project.image}
                          onChange={(e) => {
                            const newPortfolio = [...settings.portfolio]
                            newPortfolio[index].image = e.target.value
                            updateContent('portfolio', newPortfolio)
                          }}
                          className="form-input"
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>
                      <div className="lg:col-span-3">
                        <label className="block text-sm mb-1">Description</label>
                        <textarea
                          value={project.description}
                          onChange={(e) => {
                            const newPortfolio = [...settings.portfolio]
                            newPortfolio[index].description = e.target.value
                            updateContent('portfolio', newPortfolio)
                          }}
                          className="form-input"
                          rows={2}
                        />
                      </div>
                    </div>
                    {project.image && (
                      <div className="mt-4">
                        <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>Image Preview:</p>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-32 h-24 object-cover rounded-lg"
                          onError={(e) => { e.target.style.display = 'none' }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {settings.portfolio.length === 0 && (
                <p className="text-center py-8" style={{ color: 'var(--text-muted)' }}>
                  No portfolio projects yet. Click "Add New Project" to create one.
                </p>
              )}
              <button 
                onClick={showSaved}
                className="btn-primary mt-6"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default function Admin() {
  return (
    <SiteProvider>
      <AdminContent />
    </SiteProvider>
  )
}
