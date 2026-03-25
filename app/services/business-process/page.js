import Link from 'next/link'
import Image from 'next/image'
import ServiceImage from '@/components/ServiceImage'

export const metadata = {
  title: 'Business Process Services',
  description: 'End-to-end business process management for manufacturing and trade operations.',
}

const services = [
  'Procurement administration', 'Vendor management',
  'Order tracking & coordination', 'Compliance documentation',
  'Export/import paperwork', 'Invoice & payment processing',
  'Reporting & dashboards', 'Customer support operations',
]

const processes = [
  { title: 'Procurement & Vendor Admin', description: 'End-to-end management of purchase orders, vendor communications, quotes, and contract administration so your team can focus on strategy.', icon: '📋', highlights: ['PO creation and tracking', 'Vendor onboarding', 'Quote comparison', 'Contract management'] },
  { title: 'Trade & Compliance', description: 'Navigate international trade documentation, customs compliance, and export/import regulations across India, Canada, and the USA.', icon: '🌐', highlights: ['Import/export documentation', 'HS code classification', 'Customs coordination', 'Regulatory compliance'] },
  { title: 'Operations & Reporting', description: 'Keep your operations running smoothly with regular reporting, KPI tracking, and back-office coordination managed from our India team.', icon: '📊', highlights: ['Weekly operations reports', 'KPI dashboards', 'Cost tracking', 'Shipment coordination'] },
]

const relatedServices = [
  { name: 'AI Services', href: '/services/ai-services' },
  { name: 'Sourcing & Procurement', href: '/services/sourcing' },
  { name: 'Placement Services', href: '/services/placement' },
]

export default function BusinessProcessPage() {
  return (
    <div className="pt-20">
      <div className="bg-maple-charcoal border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-amber-500 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/50">Services</span>
            <span className="text-white/30">/</span>
            <span className="text-amber-500">Business Process Services</span>
          </nav>
        </div>
      </div>

      <section className="py-20 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-sm font-medium mb-6">Back-Office to Front-Line</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Business Process Services</h1>
              <p className="text-lg text-white/70 mb-8">Let our India-based team handle your back-office operations — procurement admin, trade compliance, reporting, and more — so your core team can focus on growth.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Get Started</Link>
                <a href="tel:+16476714516" className="btn-secondary">Call Us</a>
              </div>
            </div>
            {/* Upload /public/images/services/business-process.jpg to use your own photo */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-white/5">
              <ServiceImage
                localSrc="/images/services/business-process.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=90"
                alt="Business Process Services"
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
          <h2 className="text-3xl font-display font-bold text-white mb-12">What We Handle</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <div key={i} className="p-4 bg-maple-charcoal border border-white/10 rounded-lg flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-white/80">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-maple-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Our Process Areas</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Three core areas where we take ownership of your operations end-to-end.</p>
          </div>
          <div className="space-y-8">
            {processes.map((process, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{process.icon}</span>
                      <h3 className="text-2xl font-display font-bold text-white">{process.title}</h3>
                    </div>
                    <p className="text-white/70 mb-6">{process.description}</p>
                    <ul className="space-y-2">
                      {process.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-3 text-white/80">
                          <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {process.highlights.map((h, j) => (
                      <div key={j} className="p-4 bg-maple-charcoal border border-amber-500/20 rounded-lg text-center">
                        <p className="text-white/70 text-sm">{h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Why Offshore Business Process?</h2>
              <div className="space-y-4 text-white/70">
                <p>Back-office work is essential but time-consuming. Every hour your team spends on procurement admin, compliance paperwork, or reporting is an hour not spent on growing your business.</p>
                <p>Our India-based team handles these processes at a fraction of domestic cost — with the same quality, accuracy, and responsiveness you would expect from an in-house team.</p>
                <p>We work in your timezone, use your tools, and follow your processes. You get full visibility and control without the overhead.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ value: '60%', label: 'Lower than domestic BPO' }, { value: '24hr', label: 'Typical turnaround' }, { value: '100%', label: 'Dedicated to your account' }, { value: '0', label: 'Hidden fees' }].map((stat, i) => (
                <div key={i} className="p-6 bg-maple-charcoal border border-white/10 rounded-xl text-center">
                  <p className="text-3xl font-display font-bold text-amber-500 mb-1">{stat.value}</p>
                  <p className="text-sm text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-amber-500/10 border-y border-amber-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Ready to Offload Your Back Office?</h2>
          <p className="text-white/60 mb-8">Tell us which processes are slowing you down. We will take them off your plate.</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">Get Started</Link>
        </div>
      </section>
    </div>
  )
}
