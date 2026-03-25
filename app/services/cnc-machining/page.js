import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'CNC Machining & Metal Fabrication',
  description: 'Precision CNC machining services from India. 3, 4, and 5-axis capabilities with tolerances down to ±0.001". Aluminum, steel, titanium, and more.',
}

const capabilities = [
  '3-axis CNC milling',
  '4-axis CNC milling',
  '5-axis CNC milling',
  'CNC turning/lathe',
  'Surface grinding',
  'Cylindrical grinding',
  'Drilling and tapping',
  'Wire EDM',
]

const materials = [
  'Aluminum (6061, 7075, etc.)',
  'Stainless Steel (304, 316, 17-4PH)',
  'Carbon Steel',
  'Tool Steel',
  'Brass & Bronze',
  'Titanium',
  'Plastics (Delrin, PEEK, Nylon)',
  'Copper',
]

const tolerances = [
  { type: 'Standard', value: '±0.005" (±0.127mm)' },
  { type: 'Precision', value: '±0.001" (±0.025mm)' },
  { type: 'Surface Finish', value: 'Ra 0.8 - 3.2 μm' },
]

const galleryImages = [
  { src: '/images/services/cnc-gallery-1.jpg', alt: 'Precision machined part' },
  { src: '/images/services/cnc-gallery-2.jpg', alt: 'CNC milling operation' },
  { src: '/images/services/cnc-gallery-3.jpg', alt: 'Metal fabrication' },
  { src: '/images/services/cnc-gallery-4.jpg', alt: 'Industrial components' },
]

const relatedServices = [
  { name: 'CAD Design Services', href: '/services/cad-design' },
  { name: 'Quality Inspection', href: '/services/quality-inspection' },
  { name: 'Engineering Support', href: '/services/engineering' },
]

export default function CNCMachiningPage() {
  return (
    <div className="pt-20">
      <div className="bg-maple-charcoal border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-amber-500 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/services/cnc-machining" className="text-white/50 hover:text-amber-500 transition-colors">Services</Link>
            <span className="text-white/30">/</span>
            <span className="text-amber-500">CNC Machining</span>
          </nav>
        </div>
      </div>

      <section className="py-20 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                CNC Machining & Metal Fabrication
              </h1>
              <p className="text-lg text-white/70 mb-8">
                Precision machining capabilities from our India facility. From prototypes to production runs, we deliver parts that meet your exact specifications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Request Quote</Link>
                <a href="tel:+16476714516" className="btn-secondary">Call Us</a>
              </div>
            </div>
            {/* IMAGE SLOT: upload public/images/services/cnc-machining.jpg to change this */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-white/5">
              <Image
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=90"
                alt="CNC Machining"
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
          <h2 className="text-3xl font-display font-bold text-white mb-12">Capabilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <div key={i} className="p-4 bg-maple-charcoal border border-white/10 rounded-lg flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/80">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-maple-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Materials We Work With</h2>
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
          <h2 className="text-3xl font-display font-bold text-white mb-12">Tolerances & Precision</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tolerances.map((tol, i) => (
              <div key={i} className="p-6 bg-maple-charcoal border border-white/10 rounded-xl text-center">
                <p className="text-white/50 text-sm uppercase tracking-wider mb-2">{tol.type}</p>
                <p className="text-2xl font-display font-bold text-amber-500">{tol.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE SLOT: upload public/images/services/cnc-gallery-1.jpg through cnc-gallery-4.jpg */}
      <section className="py-20 bg-maple-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Sample Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden relative bg-white/5">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
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
                <span className="text-sm text-amber-500 mt-2 inline-flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-500/10 border-y border-amber-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/60 mb-8">Send us your drawings and specifications. We will provide a detailed quote within 48 hours.</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">Request Quote</Link>
        </div>
      </section>
    </div>
  )
}
