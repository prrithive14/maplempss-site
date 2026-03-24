import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Engineering Support',
  description: 'Technical consultation, process optimization, prototype development, and production planning from experienced engineers.',
}

const services = [
  'Technical consultation',
  'Design for Manufacturability (DFM)',
  'Process optimization',
  'Prototype development',
  'Production planning',
  'Value engineering',
  'Failure analysis',
  'Material selection',
]

const expertise = [
  'Mechanical engineering',
  'Manufacturing processes',
  'Materials science',
  'Tolerance analysis',
  'Cost optimization',
  'Lean manufacturing',
]

const relatedServices = [
  { name: 'CNC Machining', href: '/services/cnc-machining' },
  { name: 'CAD Design', href: '/services/cad-design' },
  { name: 'Quality Inspection', href: '/services/quality-inspection' },
]

export default function EngineeringPage() {
  return (
    <div className="pt-20">
      <div className="bg-maple-charcoal border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-amber-500 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/50">Services</span>
            <span className="text-white/30">/</span>
            <span className="text-amber-500">Engineering Support</span>
          </nav>
        </div>
      </div>

      <section className="py-20 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Engineering Support
              </h1>
              <p className="text-lg text-white/70 mb-8">
                Access experienced engineers who can help optimize your designs, improve manufacturability, and reduce costs without compromising quality.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Request Quote</Link>
                <a href="tel:+16476714516" className="btn-secondary">Call Us</a>
              </div>
            </div>
            {/* IMAGE SLOT: upload public/images/services/engineering.jpg to change this */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-white/5">
              <Image
                src="/images/services/engineering.jpg"
                alt="Engineering Support"
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
          <h2 className="text-3xl font-display font-bold text-white mb-12">Areas of Expertise</h2>
          <div className="flex flex-wrap gap-4">
            {expertise.map((exp, i) => (
              <span key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/80">
                {exp}
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
          <h2 className="text-3xl font-display font-bold text-white mb-4">Need Engineering Support?</h2>
          <p className="text-white/60 mb-8">Our engineers are ready to help optimize your project.</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">Get Started</Link>
        </div>
      </section>
    </div>
  )
}
