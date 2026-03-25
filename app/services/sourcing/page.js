import Link from 'next/link'
import Image from 'next/image'
import ServiceImage from '@/components/ServiceImage'

export const metadata = {
  title: 'Sourcing & Procurement',
  description: 'Global supplier network for raw materials and components. CNC machining, quality inspection, competitive pricing from India and Asia.',
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

const stats = [
  { type: 'Supplier Network', value: '500+ Verified Suppliers' },
  { type: 'Average Savings', value: '40–60% vs Domestic' },
  { type: 'Lead Time', value: '2–4 Weeks Typical' },
]

const subsections = [
  {
    title: 'CNC Machining',
    description: '3, 4, and 5-axis precision machining with tolerances down to ±0.001". From prototypes to full production runs, our India facility delivers parts to your exact specifications.',
    icon: '⚙️',
    href: '/services/cnc-machining',
    local: '/images/services/cnc-machining.jpg',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=85',
    highlights: ['3, 4 & 5-axis milling', 'CNC turning & lathe', 'Surface & cylindrical grinding', 'Wire EDM'],
  },
  {
    title: 'Quality Inspection',
    description: 'ISO 9001 compliant QC at every stage of production. Our dedicated inspection team ensures every part meets your specifications before it ships.',
    icon: '✓',
    href: '/services/quality-inspection',
    local: '/images/services/quality-inspection.png',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=85',
    highlights: ['CMM measurement', 'First article inspection', 'In-process inspection', 'Full documentation'],
  },
  {
    title: 'Engineering Support',
    description: 'Access experienced engineers who can help optimize your designs, improve manufacturability, and reduce costs without compromising quality.',
    icon: '🔧',
    href: '/services/engineering',
    local: '/images/services/engineering.jpg',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=900&q=85',
    highlights: ['Design for Manufacturability (DFM)', 'Process optimization', 'Prototype development', 'Value engineering'],
  },
]

const galleryImages = [
  { local: '/images/services/cnc-gallery-1.jpg', fallback: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80', alt: 'Precision machined part' },
  { local: '/images/services/cnc-gallery-2.jpg', fallback: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&q=80', alt: 'CNC milling operation' },
  { local: '/images/services/cnc-gallery-3.jpg', fallback: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=500&q=80', alt: 'Metal fabrication' },
  { local: '/images/services/cnc-gallery-4.jpg', fallback: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=500&q=80', alt: 'Industrial components' },
]

const relatedServices = [
  { name: 'CAD Design', href: '/services/cad-design' },
  { name: 'Placement Services', href: '/services/placement' },
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

      {/* Hero */}
      <section className="py-20 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Sourcing & Procurement
              </h1>
              <p className="text-lg text-white/70 mb-8">
                Leverage our extensive supplier network across India and Asia. We source raw materials and components at competitive rates — with in-house CNC machining, quality inspection, and engineering support all under one roof.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Request Quote</Link>
                <a href="tel:+16476714516" className="btn-secondary">Call Us</a>
              </div>
            </div>
            {/* IMAGE SLOT: upload public/images/services/sourcing.jpg */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-white/5">
              <ServiceImage
                localSrc="/images/services/sourcing.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=90"
                alt="Sourcing & Procurement"
                className="object-cover"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
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

      {/* What We Source */}
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

      {/* Stats */}
      <section className="py-20 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Our Network at a Glance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="p-6 bg-maple-charcoal border border-white/10 rounded-xl text-center">
                <p className="text-white/50 text-sm uppercase tracking-wider mb-2">{stat.type}</p>
                <p className="text-2xl font-display font-bold text-amber-500">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CNC Machining + Quality Inspection subsections */}
      <section className="py-20 bg-maple-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Included Capabilities</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Our sourcing offering includes in-house CNC machining and quality inspection — fully managed under one roof.</p>
          </div>
          <div className="space-y-16">
            {subsections.map((sub, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-white/5">
                    <ServiceImage
                      localSrc={sub.local}
                      fallbackSrc={sub.image}
                      alt={sub.title}
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{sub.icon}</span>
                    <h3 className="text-2xl font-display font-bold text-white">{sub.title}</h3>
                  </div>
                  <p className="text-white/70 mb-6">{sub.description}</p>
                  <ul className="space-y-2 mb-8">
                    {sub.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-3 text-white/80">
                        <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link href={sub.href} className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors">
                    Learn more about {sub.title}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Work */}
      <section className="py-20 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Sample Work</h2>
          <p className="text-white/60 mb-12">Examples of components and materials we have sourced and machined for our clients.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden relative bg-white/5">
                <ServiceImage
                  localSrc={img.local}
                  fallbackSrc={img.fallback}
                  alt={img.alt}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-maple-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((service, i) => (
              <Link key={i} href={service.href} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/50 transition-colors group">
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-500 transition-colors">{service.name}</h3>
                <span className="text-sm text-amber-500 mt-2 inline-flex items-center gap-1">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
