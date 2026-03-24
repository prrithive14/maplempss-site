import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import ChatBot from '@/components/ChatBot'

export const metadata = {
  metadataBase: new URL('https://maplempss.com'),
  title: {
    default: 'Maple MPSS | Offshore Manufacturing Partner - CNC Machining India',
    template: '%s | Maple MPSS'
  },
  description: 'Plug and play offshore manufacturing partner for North American companies. CNC machining, sourcing, and engineering services with 40-60% cost savings. Canada-India operations.',
  keywords: ['CNC machining', 'offshore manufacturing', 'parts sourcing', 'precision machining', 'India manufacturing', 'metal fabrication', 'engineering services'],
  authors: [{ name: 'Maple MPSS' }],
  creator: 'Maple MPSS',
  publisher: 'Maple MPSS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maplempss.com',
    siteName: 'Maple MPSS',
    title: 'Maple MPSS | Offshore Manufacturing Partner',
    description: 'Your plug and play offshore manufacturing partner. CNC machining, sourcing, and engineering with 40-60% cost savings.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maple MPSS - Precision Manufacturing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maple MPSS | Offshore Manufacturing Partner',
    description: 'Your plug and play offshore manufacturing partner with 40-60% cost savings.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-maple-dark text-white antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <ChatBot />
      </body>
    </html>
  )
}
