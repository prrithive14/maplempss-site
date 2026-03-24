import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Sourcing & Procurement',
  description: 'Global supplier network for raw materials and components. Competitive pricing from India and Asia. Vendor qualification and management.',
}

const services = [
  'Raw material sourcing',
  'Component procurement',
  'Sub-assembly sourcing',
  'Vendor qualification',
  'Supplier management',
  'Cost negotiation',
  'Quality verification',
  'Logistics coordination',
]

const materials = [
  'Metals & alloys',
  'Plastics & polymers',
  'Castings & forgings',
  'Fasteners & hardware',
  'Bearings & seals',
  'Electronic components',
  'Custom fabrications',
  'Specialty materials',
]

const relatedServices = [
  { name: 'CNC Machining', href: '/services/cnc-machining' },
  { name: 'Quality Inspection', href: '/services/quality-inspection' },
  { name: 'Engineering Support', href: '/services/engineering' },
]

export default function SourcingPage() {
  return (
    <div className="pt-20">
      <div className="bg-maple-charcoal border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-amber-500 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/50">Services</span>
            <span className="text-white/30">/</span>
            <span className="text-amber-500">Sourcing & Procurement</span>
          </nav>
        </div>
      </div>

      <section className="py-20 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Sourcing & Procurement
              </h1>
              <p className="text-lg text-white/70 mb-8">
                Leverage our extensive supplier network across India and Asia. We source raw materials and components at competitive rates while maintaining strict quality standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Request Quote</Link>
                <a href="tel:+16476714516" className="btn-secondary">Call Us</a>
              </div>
            </div>
            {/* IMAGE SLOT: upload public/images/services/sourcing.jpg to change this */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-white/5">
              <Image
                src="/images/services/sourcing.jpg"
                alt="Sourcing & Procurement"
                fill
                className="object-cover"
                priority
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
          <h2 className="text-3xl font-display font-bold text-white mb-12">What We Source</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {materials.map((mat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-white/80">{mat}</span>
              </div>
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
          <p className="text-white/60 mb-8">Tell us what you need. We will provide competitive quotes from our supplier network.</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">Request Quote</Link>
        </div>
      </section>
    </div>
  )
}
