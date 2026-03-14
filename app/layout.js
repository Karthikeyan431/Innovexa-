import './globals.css'

export const metadata = {
  title: 'INNOVEXA - Digital Agency for Small Businesses | Web Development India',
  description: 'INNOVEXA is a digital agency helping small businesses get online with honest pricing. We build professional websites that actually help your business grow. Services: Web Development, SEO, Video Editing.',
  keywords: 'web development India, digital agency, small business websites, SEO services, web design, e-commerce websites',
  authors: [{ name: 'INNOVEXA' }],
  creator: 'INNOVEXA',
  publisher: 'INNOVEXA',
  
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://innovexa.com',
    siteName: 'INNOVEXA',
    title: 'INNOVEXA - Digital Agency for Small Businesses',
    description: 'Web development, SEO, and digital services for small businesses in India.',
    images: [
      {
        url: 'https://i.ibb.co/SDTX1Pb5/IMG-20251005-WA0002-removebg-preview-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'INNOVEXA',
      }
    ]
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'INNOVEXA - Digital Agency for Small Businesses',
    description: 'Professional web development and digital services for small businesses.',
    creator: '@innovexa',
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'your-google-verification-code',
  },

  alternates: {
    canonical: 'https://innovexa.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="canonical" href="https://innovexa.com" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#030712" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'INNOVEXA',
              description: 'Digital agency helping small businesses get online',
              url: 'https://innovexa.com',
              telephone: '+91-95660-61075',
              email: 'innovexa.digitalservices@gmail.com',
              areaServed: 'IN',
              priceRange: '₹15000-₹75000',
            })
          }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
