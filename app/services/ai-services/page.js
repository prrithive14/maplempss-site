import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'AI Services',
  description: 'AI-powered solutions for manufacturing, supply chain, and business operations. Automate workflows, analyze data, and drive smarter decisions.',
}

const services = [
  'AI-powered demand forecasting',
  'Automated quality inspection',
  'Supply chain optimization',
  'Predictive maintenance',
  'Custom AI chatbots',
  'Data analytics & reporting',
  'Process automation (RPA)',
  'Document intelligence',
]

const useCases = [
  { title: 'Smart Quality Control', description: 'AI vision systems that detect defects faster and more accurately than manual inspection.', icon: '🔍' },
  { title: 'Demand Forecasting', description: 'Predict material demand and optimize inventory to reduce waste and stockouts.', icon: '📈' },
  { title: 'Workflow Automation', description: 'Automate repetitive procurement, reporting, and communication tasks.', icon: '⚡' },
  { title: 'Custom AI Assistants', description: 'Deploy AI chatbots trained on your data to handle supplier and client queries.', icon: '🤖' },
  { title: 'Document Processing', description: 'Automatically extract and process data from invoices, POs, and shipping documents.', icon: '📄' },
  { title: 'Analytics Dashboards', description: 'Real-time visibility into your supply chain, costs, and operational performance.', icon: '📊' },
]

const relatedServices = [
  { name: 'Sourcing & Procurement', href: '/services/sourcing' },
  { name: 'Business Process Services', href: '/services/business-process' },
  { name: 'Placement Services', href: '/services/placement' },
]

export default function AIServicesPage() {
  return (
    <div className="pt-20">
      <div className="bg-maple-charcoal border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-amber-500 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/50">Services</span>
            <span className="text-white/30">/</span>
            <span className="text-amber-500">AI Services</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-sm font-medium mb-6">
                Powered by Modern AI
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                AI Services
              </h1>
              <p className="text-lg text-white/70 mb-8">
                We bring AI-powered solutions to manufacturing and supply chain operations. From automated quality inspection to custom AI assistants — we help you work smarter, faster, and at lower cost.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Get Started</Link>
                <a href="tel:+16476714516" className="btn-secondary">Call Us</a>
              </div>
            </div>
            {/* IMAGE SLOT: upload public/images/services/ai-services.jpg to change this */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-white/5 border border-white/10">
              <Image
                src="/images/services/ai-services.jpg"
                alt="AI Services"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl mb-4 block">🤖</span>
                  <p className="text-white/40 text-sm">Upload: /public/images/services/ai-services.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12">What We Offer</h2>
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

      {/* Use Cases */}
      <section className="py-20 bg-maple-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Use Cases</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Real applications of AI that drive measurable results in manufacturing and supply chain.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{uc.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-2">{uc.title}</h3>
                <p className="text-white/60 text-sm">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI */}
      <section className="py-20 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Why AI for Manufacturing?</h2>
              <div className="space-y-4 text-white/70">
                <p>Manufacturing and supply chain operations generate enormous amounts of data — but most companies are not using it. AI turns that data into decisions: better inventory levels, fewer defects, faster sourcing, and lower costs.</p>
                <p>At Maple MPSS, we combine our deep manufacturing expertise with modern AI tools to build solutions that actually work on the shop floor — not just in a presentation.</p>
                <p>Whether you need a simple automation script or a full AI-powered dashboard, we scope the right solution for your size and budget.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '30%', label: 'Average cost reduction' },
                { value: '3x', label: 'Faster defect detection' },
                { value: '80%', label: 'Less manual reporting' },
                { value: '48hr', label: 'Typical implementation' },
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-maple-charcoal border border-white/10 rounded-xl text-center">
                  <p className="text-3xl font-display font-bold text-amber-500 mb-1">{stat.value}</p>
                  <p className="text-sm text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
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
          <h2 className="text-3xl font-display font-bold text-white mb-4">Ready to Add AI to Your Operations?</h2>
          <p className="text-white/60 mb-8">Tell us your biggest operational challenge. We will show you how AI can solve it.</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">Get Started</Link>
        </div>
      </section>
    </div>
  )
}
