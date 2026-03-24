'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const services = [
  { name: 'CNC Machining', href: '/services/cnc-machining' },
  { name: 'CAD Design Services', href: '/services/cad-design' },
  { name: 'Sourcing & Procurement', href: '/services/sourcing' },
  { name: 'Placement Services', href: '/services/placement' },
  { name: 'Quality Inspection', href: '/services/quality-inspection' },
  { name: 'Engineering Support', href: '/services/engineering' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  const isActive = (href) => pathname === href

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-maple-dark/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-display font-bold">
              <span className="text-amber-500">MAPLE</span>
              <span className="text-white"> MPSS</span>
            </span>
            <span className="text-xs text-white/50 tracking-wider">Machinery Parts Sourcing Services</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium transition-colors ${
              isActive('/') ? 'text-amber-500' : 'text-white/80 hover:text-amber-500'
            }`}>
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                pathname.startsWith('/services') ? 'text-amber-500' : 'text-white/80 hover:text-amber-500'
              }`}>
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-maple-charcoal border border-white/10 rounded-xl shadow-xl overflow-hidden">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-4 py-3 text-sm transition-colors ${
                        isActive(service.href) 
                          ? 'bg-amber-500/10 text-amber-500' 
                          : 'text-white/80 hover:bg-white/5 hover:text-amber-500'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className={`text-sm font-medium transition-colors ${
              isActive('/about') ? 'text-amber-500' : 'text-white/80 hover:text-amber-500'
            }`}>
              About
            </Link>

            <Link href="/case-studies" className={`text-sm font-medium transition-colors ${
              isActive('/case-studies') ? 'text-amber-500' : 'text-white/80 hover:text-amber-500'
            }`}>
              Case Studies
            </Link>

            <Link href="/contact" className={`text-sm font-medium transition-colors ${
              isActive('/contact') ? 'text-amber-500' : 'text-white/80 hover:text-amber-500'
            }`}>
              Contact
            </Link>

            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-amber-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-maple-charcoal border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" className={`block py-3 text-base font-medium ${
              isActive('/') ? 'text-amber-500' : 'text-white/80'
            }`}>
              Home
            </Link>
            
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full flex items-center justify-between py-3 text-base font-medium ${
                  pathname.startsWith('/services') ? 'text-amber-500' : 'text-white/80'
                }`}
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block py-2 text-sm ${
                        isActive(service.href) ? 'text-amber-500' : 'text-white/60'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className={`block py-3 text-base font-medium ${
              isActive('/about') ? 'text-amber-500' : 'text-white/80'
            }`}>
              About
            </Link>

            <Link href="/case-studies" className={`block py-3 text-base font-medium ${
              isActive('/case-studies') ? 'text-amber-500' : 'text-white/80'
            }`}>
              Case Studies
            </Link>

            <Link href="/contact" className={`block py-3 text-base font-medium ${
              isActive('/contact') ? 'text-amber-500' : 'text-white/80'
            }`}>
              Contact
            </Link>

            <Link href="/contact" className="btn-primary block text-center mt-4">
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
