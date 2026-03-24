import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Quality Inspection',
  description: 'ISO 9001 compliant quality control and inspection services. CMM measurement, full documentation, incoming and final inspection.',
}

const inspectionTypes = [
  'Incoming material inspection',
  'In-process inspection',
  'Final inspection',
  'First article inspection (FAI)',
  'Dimensional verification',
  'Surface finish measurement',
  'Visual inspection',
  'Functional testing',
]

const equipment = [
  'Coordinate Measuring Machine (CMM)',
  'Optical comparators',
  'Surface roughness testers',
  'Hardness testers',
  'Micrometers & calipers',
  'Height gauges',
  'Thread gauges',
  'Go/No-go gauges',
]

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'AS9100D', description: 'Aerospace Quality Standard' },
]

const relatedServices = [
  { name: 'CNC Machining', href: '/services/cnc-machining' },
  { name: 'Engineering Support', href: '/services/engineering' },
  { name: 'Sourcing & Procurement', href: '/services/sourcing' },
]

export default function QualityInspectionPage() {
  return (
    <div className="pt-20">
      <div className="bg-maple-charcoal border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-amber-500 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/50">Services</span>
            <span className="text-white/30">/</span>
            <span className="text-amber-500">Quality Inspection</span>
          </nav>
        </div>
      </div>

      <section className="py-20 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Quality Inspection
              </h1>
              <p className="text-lg text-white/70 mb-8">
                Rigorous quality control at every stage of production. Our dedicated inspection team ensures every part meets your specifications before it ships.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Request Quote</Link>
                <a href="tel:+16476714516" className="btn-secondary">Call Us</a>
              </div>
            </div>
            {/* IMAGE SLOT: upload public/images/services/quality-inspection.jpg to change this */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-white/5">
              <Image
                src="/images/services/quality-inspection.jpg"
                alt="Quality Inspection"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Inspection Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {inspectionTypes.map((type, i) => (
              <div key={i} className="p-4 bg-maple-charcoal border border-white/10 rounded-lg flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/80">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-maple-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Inspection Equipment</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {equipment.map((eq, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-white/80">{eq}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            {certifications.map((cert, i) => (
              <div key={i} className="p-6 bg-maple-charcoal border border-amber-500/20 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">{cert.name}</p>
                  <p className="text-sm text-white/50">{cert.description}</p>
                </div>
              </div>
            ))}
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
          <h2 className="text-3xl font-display font-bold text-white mb-4">Quality You Can Trust</h2>
          <p className="text-white/60 mb-8">Every part inspected. Every shipment documented. Zero compromises.</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">Request Quote</Link>
        </div>
      </section>
    </div>
  )
}
