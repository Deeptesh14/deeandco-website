import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dee & Co — Capital Advisory for Founders and Investors',
  description:
    'Dee & Co is a boutique capital advisory firm helping ambitious companies raise capital, prepare for growth, and build meaningful investor relationships.',
  keywords: [
    'capital advisory', 'fundraising advisory', 'investor relations',
    'boutique finance', 'startup fundraising', 'deal sourcing',
    'investor readiness', 'financial modeling', 'private markets',
  ],
  authors: [{ name: 'Dee & Co' }],
  creator: 'Dee & Co',
  openGraph: {
    title: 'Dee & Co — Capital Advisory',
    description: 'Connecting capital with opportunity. Boutique advisory for founders and investors.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Dee & Co',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dee & Co — Capital Advisory',
    description: 'Connecting capital with opportunity.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body { font-family: ${GeistSans.style.fontFamily}, system-ui, sans-serif; }
          .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        `}</style>
      </head>
      <body
        className="antialiased"
        style={{
          backgroundColor: '#0A0A0A',
          color: '#F4F1EA',
          fontFamily: `${GeistSans.style.fontFamily}, system-ui, sans-serif`,
        }}
      >
        {children}
      </body>
    </html>
  )
}
