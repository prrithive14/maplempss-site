import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Placement Services',
  description: 'Dedicated offshore engineers and designers working exclusively for you. Transparent billing, full integration with your team.',
}

const roles = [
  'Mechanical Engineers',
  'Design Engineers',
  'CAD Designers',
  'Quality Inspectors',
  'Project Coordinators',
  'Manufacturing Engineers',
  'Process Engineers',
  'Technical Writers',
]

const benefits = [
  { title: 'Dedicated Resources', description: 'Staff works exclusively on your projects, not shared across clients' },
  { title: 'Transparent Billing', description: 'Pay only for hours worked, no hidden fees or markups' },
  { title: 'Your Timezone', description: 'Flexible scheduling to overlap with your business hours' },
  { title: 'Full Integration', description: 'Use your tools, attend your meetings, follow your processes' },
]

const relatedServices = [
  { name: 'CAD Design', href: '/services/cad-design' },
  { name: 'Engineering Support', href: '/services/engineering' },
  { name: 'Quality Inspection', href: '/services/quality-inspection' },
]

export default function PlacementPage() {
  return (
    <div className="pt-20">
      <div className="bg-maple-charcoal border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-amber-500 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/50">Services</span>
            <span className="text-white/30">/</span>
            <span className="text-amber-500">Placement Services</span>
          </nav>
        </div>
      </div>

      <section className="py-20 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Placement Services
              </h1>
              <p className="text-lg text-white/70 mb-8">
                Get dedicated offshore engineers and designers working exclusively for your company. Think of them as your own team in India—without the overhead of setting up an office there.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Request Quote</Link>
                <a href="tel:+16476714516" className="btn-secondary">Call Us</a>
              </div>
            </div>
            {/* IMAGE SLOT: upload public/images/services/placement.jpg to change this */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-white/5">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90"
                alt="Placement Services"
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
          <h2 className="text-3xl font-display font-bold text-white mb-12">Available Roles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roles.map((role, i) => (
              <div key={i} className="p-4 bg-maple-charcoal border border-white/10 rounded-lg flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-white/80">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-maple-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Why Placement Services?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-xl font-semibold text-amber-500 mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
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
          <h2 className="text-3xl font-display font-bold text-white mb-4">Ready to Build Your Offshore Team?</h2>
          <p className="text-white/60 mb-8">Tell us what roles you need. We will match you with qualified candidates.</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">Get Started</Link>
        </div>
      </section>
    </div>
  )
}
