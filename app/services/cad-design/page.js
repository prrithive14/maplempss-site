import Link from 'next/link'
import Image from 'next/image'
import ServiceImage from '@/components/ServiceImage'

export const metadata = {
  title: 'CAD Design Services',
  description: 'Professional CAD design services from India. 2D drawings, 3D modeling, DFM reviews, and reverse engineering. SolidWorks, AutoCAD expertise.',
}

const services = [
  '2D technical drawings',
  '3D CAD modeling',
  'Design for Manufacturability (DFM)',
  'Reverse engineering',
  'Assembly drawings',
  'Bill of Materials (BOM)',
  'Tolerance analysis',
  'GD&T documentation',
]

const software = [
  'SolidWorks',
  'AutoCAD',
  'Autodesk Inventor',
  'CATIA',
  'Fusion 360',
  'Creo/Pro-E',
]

const relatedServices = [
  { name: 'CNC Machining', href: '/services/cnc-machining' },
  { name: 'Engineering Support', href: '/services/engineering' },
  { name: 'Quality Inspection', href: '/services/quality-inspection' },
]

export default function CADDesignPage() {
  return (
    <div className="pt-20">
      <div className="bg-maple-charcoal border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-amber-500 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/services/cnc-machining" className="text-white/50 hover:text-amber-500 transition-colors">Services</Link>
            <span className="text-white/30">/</span>
            <span className="text-amber-500">CAD Design</span>
          </nav>
        </div>
      </div>

      <section className="py-20 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                CAD Design Services
              </h1>
              <p className="text-lg text-white/70 mb-8">
                Professional CAD design and drafting services from our experienced engineering team. From concept sketches to production-ready drawings.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Request Quote</Link>
                <a href="tel:+16476714516" className="btn-secondary">Call Us</a>
              </div>
            </div>
            {/* IMAGE SLOT: upload public/images/services/cad-design.jpg to change this */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-white/5">
              <ServiceImage
                localSrc="/images/services/cad-design.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=90"
                alt="CAD Design Services"
                className="object-cover"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <div key={i} className="p-4 bg-maple-charcoal border border-white/10 rounded-lg flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/80">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-maple-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Software Expertise</h2>
          <div className="flex flex-wrap gap-4">
            {software.map((sw, i) => (
              <span key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/80">
                {sw}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((service, i) => (
              <Link key={i} href={service.href} className="p-6 bg-maple-charcoal border border-white/10 rounded-xl hover:border-amber-500/50 transition-colors group">
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-500 transition-colors">{service.name}</h3>
                <span className="text-sm text-amber-500 mt-2 inline-flex items-center gap-1">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-500/10 border-y border-amber-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/60 mb-8">Share your concept or existing drawings. We will provide a detailed proposal.</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">Request Quote</Link>
        </div>
      </section>
    </div>
  )
}
