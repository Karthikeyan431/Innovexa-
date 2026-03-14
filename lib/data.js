'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const defaultSettings = {
  colors: {
    primary: '#030712',
    card: 'rgba(17, 24, 39, 0.7)',
    border: 'rgba(255, 255, 255, 0.08)',
    accent: '#6366f1',
    accentSecondary: '#a855f7',
    success: '#10b981',
    textPrimary: '#f8fafc',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
  },
  company: {
    name: 'INNOVEXA',
    tagline: 'Digital Agency for Small Businesses',
    location: 'India',
    email: 'innovexa.digitalservices@gmail.com',
    phone: '+91 95660 61075',
    whatsapp: '+919566061075',
    founded: '2024',
  },
  services: [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom websites that are fast, responsive, and help your business grow.',
      icon: 'globe',
      price: '₹15,000 - ₹50,000',
      features: ['Responsive Design', 'Fast Loading', 'SEO Ready', 'Secure (SSL)'],
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      description: 'Improve your Google ranking and get more local customers.',
      icon: 'search',
      price: '₹10,000 - ₹25,000',
      features: ['On-page SEO', 'Local SEO', 'Keyword Research', 'Monthly Reports'],
    },
    {
      id: 'video-editing',
      title: 'Video Editing',
      description: 'Professional video editing for social media and marketing.',
      icon: 'video',
      price: '₹5,000 - ₹25,000',
      features: ['Video Cutting', 'Color Grading', 'Sound Design', 'Motion Graphics'],
    },
    {
      id: 'content-writing',
      title: 'Content Writing',
      description: 'Engaging content that connects with your audience.',
      icon: 'pen',
      price: '₹2,000 - ₹10,000',
      features: ['Blog Posts', 'Website Copy', 'Product Descriptions', 'Social Media'],
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      description: 'Visual identity that makes your brand stand out.',
      icon: 'palette',
      price: '₹5,000 - ₹20,000',
      features: ['Logo Design', 'Brand Guidelines', 'Social Media Kits', 'Print Design'],
    },
  ],
  pricing: [
    {
      id: 'landing',
      name: 'Landing Page',
      price: '₹15,000',
      priceRange: '₹15,000 - ₹25,000',
      description: 'Perfect for single-page websites and lead generation.',
      features: ['1 Page Design', 'Contact Form', 'Basic SEO', 'Mobile Optimized', '2 Revisions'],
      popular: false,
    },
    {
      id: 'business',
      name: 'Business Website',
      price: '₹35,000',
      priceRange: '₹35,000 - ₹60,000',
      description: 'Ideal for small businesses needing multiple pages.',
      features: ['Up to 5 Pages', 'Custom Design', 'Google Maps', 'Social Links', 'Basic SEO', '3 Revisions', '30-Day Support'],
      popular: true,
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce',
      price: '₹60,000',
      priceRange: '₹60,000+',
      description: 'Full online store with payment integration.',
      features: ['Up to 20 Products', 'Payment Gateway', 'Cart & Checkout', 'Inventory Management', 'Training Included'],
      popular: false,
    },
  ],
  portfolio: [
    {
      id: 1,
      title: 'Kl Stall Event Management',
      category: 'web',
      description: 'An E-commerce web application built for manage and book the events with Seamless booking way like online and offline.',
      budget: 'Event Management',
      date: '2024',
      url: 'https://k-lstall-app.vercel.app/',
      thumbnail: 'https://i.ibb.co/xySG0th/Screenshot-2026-03-14-131123.png'
    },
    {
      id: 2,
      title: 'Sri Sivasakthi Printers',
      category: 'web',
      description: 'A business website for a digital printing shop featuring services like flex banners and bill books with a WhatsApp quote system.',
      budget: 'Business Site',
      date: '2024',
      url: 'https://sivasakthiprinters.netlify.app/',
      thumbnail: 'https://i.ibb.co/60XHvz85/Screenshot-2026-03-14-131159.png'
    },
    {
      id: 3,
      title: 'Zenvora Earth – Turmeric Exporter',
      category: 'web',
      description: 'A demo export business website for a premium turmeric exporter, featuring batch traceability and an international quote system.',
      budget: 'Export Business',
      date: '2024',
      url: 'https://exportdemosite.netlify.app/',
      thumbnail: 'https://i.ibb.co/SFnY2NG/Screenshot-2026-03-14-131336.png'
    },
    {
      id: 4,
      title: 'Danny Store – Korean Stationery',
      category: 'web',
      description: 'An e-commerce style storefront for a Korean stationery and lifestyle shop with an add-to-cart system and WhatsApp confirmation.',
      budget: 'E-Commerce',
      date: '2024',
      url: 'https://danny-stationary-shop.netlify.app/',
      thumbnail: 'https://i.ibb.co/fYpCWXV1/Screenshot-2026-03-14-131402.png'
    },
  ],
  team: [
    {
      id: 1,
      name: 'Your Name',
      role: 'Founder & Developer',
      bio: '5+ years experience in web development.',
      icon: 'user',
    },
    {
      id: 2,
      name: 'Partner Name',
      role: 'Design & Content',
      bio: 'Marketing background with passion for design.',
      icon: 'user',
    },
  ],
  faqs: [
    {
      question: 'How long does a project take?',
      answer: 'Most projects take 2-3 weeks. Landing pages 1-2 weeks, e-commerce 3-4 weeks.',
    },
    {
      question: 'Do you offer revisions?',
      answer: 'Yes! 2 revisions for landing pages, 3 for business sites, 4 for e-commerce.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern technologies like React, WordPress, and static site generators.',
    },
    {
      question: 'How do we communicate?',
      answer: 'Via WhatsApp for quick messages and email for formal updates.',
    },
  ],
  hero: {
    badge: 'Accepting Projects for 2025',
    headline: 'Websites that actually help your small business grow',
    subheadline: "We're a digital studio helping startups and local businesses get online without breaking the bank. No fancy jargon, just results.",
    ctaPrimary: 'See Our Work',
    ctaSecondary: 'View Pricing',
    trustIndicators: ['25+ Projects Delivered', '2-3 Week Turnaround', '100% Satisfaction'],
  },
  socialLinks: {
    linkedin: '#',
    instagram: 'https://www.instagram.com/innovexa/',
    twitter: '#',
    whatsapp: 'https://wa.me/919566061075',
  },
}

const SiteContext = createContext()

export function SiteProvider({ children }) {
  const [settings, setSettings] = useState(defaultSettings)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load settings from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const saved = localStorage.getItem('innovexa_settings')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        // Always use the latest portfolio from defaults
        setSettings({ ...parsed, portfolio: defaultSettings.portfolio })
      } catch (e) {
        console.error('Failed to parse settings', e)
        setSettings(defaultSettings)
      }
    } else {
      setSettings(defaultSettings)
    }
    setIsLoaded(true)
  }, [])

  // Save settings to localStorage whenever they change
  const updateSettings = (newSettings) => {
    const updated = { ...settings, ...newSettings }
    setSettings(updated)
    localStorage.setItem('innovexa_settings', JSON.stringify(updated))
  }

  const updateColors = (colors) => {
    const updated = {
      ...settings,
      colors: { ...settings.colors, ...colors },
    }
    setSettings(updated)
    localStorage.setItem('innovexa_settings', JSON.stringify(updated))
    
    // Apply colors to CSS variables
    Object.entries(colors).forEach(([key, value]) => {
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      document.documentElement.style.setProperty(`--${cssKey}`, value)
    })
  }

  const updateContent = (section, data) => {
    const updated = {
      ...settings,
      [section]: data,
    }
    setSettings(updated)
    localStorage.setItem('innovexa_settings', JSON.stringify(updated))
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
    localStorage.setItem('innovexa_settings', JSON.stringify(defaultSettings))
    
    // Reset CSS variables
    Object.entries(defaultSettings.colors).forEach(([key, value]) => {
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      document.documentElement.style.setProperty(`--${cssKey}`, value)
    })
  }

  // Apply colors on initial load
  useEffect(() => {
    if (isLoaded) {
      Object.entries(settings.colors).forEach(([key, value]) => {
        const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
        document.documentElement.style.setProperty(`--${cssKey}`, value)
      })
    }
  }, [isLoaded])

  return (
    <SiteContext.Provider value={{ 
      settings, 
      updateSettings, 
      updateColors, 
      updateContent, 
      resetSettings,
      isLoaded 
    }}>
      {children}
    </SiteContext.Provider>
  )
}

export function useSite() {
  const context = useContext(SiteContext)
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider')
  }
  return context
}
