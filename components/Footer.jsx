import Link from 'next/link'

const services = [
  { name: 'CNC Machining', href: '/services/cnc-machining' },
  { name: 'CAD Design', href: '/services/cad-design' },
  { name: 'Sourcing & Procurement', href: '/services/sourcing' },
  { name: 'Placement Services', href: '/services/placement' },
  { name: 'Quality Inspection', href: '/services/quality-inspection' },
  { name: 'Engineering Support', href: '/services/engineering' },
]

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
]

export default function Footer() {
  return (
    <footer className="bg-maple-charcoal border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-display font-bold">
                <span className="text-amber-500">MAPLE</span>
                <span className="text-white"> MPSS</span>
              </span>
              <span className="block text-xs text-white/50 tracking-wider mt-1">Machinery Parts Sourcing Services</span>
            </Link>
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              Your plug and play offshore manufacturing partner. We give North American mid-sized companies an offshore base in India without the overhead.
            </p>
            
            {/* Certifications */}
            <div className="mt-6">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Certifications</p>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-xs font-medium text-white/70">
                  ISO 9001
                </div>
                <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-xs font-medium text-white/70">
                  AS9100
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-sm text-white/60 hover:text-amber-500 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-amber-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h4>
            
            {/* Canada Office */}
            <div className="mb-6">
              <p className="text-xs text-amber-500 uppercase tracking-wider mb-2">Canada Office</p>
              <p className="text-sm text-white/60">Ontario, Canada</p>
              <a href="tel:+16476714516" className="text-sm text-white/80 hover:text-amber-500 transition-colors">
                +1 647-671-4516
              </a>
            </div>

            {/* India Office */}
            <div className="mb-6">
              <p className="text-xs text-amber-500 uppercase tracking-wider mb-2">India Office</p>
              <p className="text-sm text-white/60">Chennai, India</p>
            </div>

            {/* Email */}
            <div>
              <a href="mailto:cs@maplempss.com" className="text-sm text-white/80 hover:text-amber-500 transition-colors">
                cs@maplempss.com
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              <a href="https://linkedin.com/company/maplempss" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-amber-500 hover:border-amber-500/50 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Quote CTA */}
      <div className="bg-amber-500/10 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-medium">Ready to reduce your manufacturing costs?</p>
              <p className="text-sm text-white/60">Get a free quote within 24 hours</p>
            </div>
            <Link href="/contact" className="btn-primary whitespace-nowrap">
              Request Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} Maple MPSS. All rights reserved.</p>
            <p>Canada & India Operations</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
