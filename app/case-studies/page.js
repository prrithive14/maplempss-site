import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Case Studies',
  description: 'See how Maple MPSS helped manufacturers reduce costs and improve quality. Real results from real projects.',
}

const caseStudies = [
  {
    id: 'packaging-equipment',
    industry: 'Packaging Equipment',
    title: 'Packaging Manufacturer Cuts Costs by 45%',
    challenge: 'A mid-sized packaging equipment manufacturer in Ontario was struggling with rising machining costs. Their domestic suppliers were quoting increasingly higher prices, and they had tried offshore vendors before with mixed quality results.',
    solution: 'Maple MPSS took over CNC machining for their precision components. We established dedicated quality inspection processes, provided DFM feedback to optimize designs, and managed the complete supply chain from our India facility.',
    results: [
      { metric: '45%', label: 'Cost Reduction' },
      { metric: '99.2%', label: 'Quality Rate' },
      { metric: '3 weeks', label: 'Avg Lead Time' },
    ],
    quote: 'Maple MPSS transformed our supply chain. The quality is consistent, communication is excellent, and we are saving significantly compared to domestic suppliers.',
    quoteAuthor: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=85',
  },
  {
    id: 'industrial-automation',
    industry: 'Industrial Automation',
    title: 'Automation Company Scales with Dedicated Team',
    challenge: 'A growing industrial automation company in Michigan needed to scale their engineering capacity without the overhead of hiring full-time staff. They also needed reliable offshore manufacturing for custom machined components.',
    solution: 'We provided a dedicated placement team of 3 mechanical engineers working exclusively on their projects, plus manufacturing support for all machined parts. The team integrated with their existing processes and attended daily standups.',
    results: [
      { metric: '60%', label: 'Engineering Cost Savings' },
      { metric: '3', label: 'Dedicated Engineers' },
      { metric: '2x', label: 'Project Throughput' },
    ],
    quote: 'Having a dedicated team in India without the overhead of managing them ourselves has been a game-changer for our growth.',
    quoteAuthor: 'VP of Engineering',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=85',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumbs */}
      <div className="bg-maple-charcoal border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-amber-500 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-amber-500">Case Studies</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-white/70">
              Real results from real projects. See how we have helped manufacturers reduce costs, improve quality, and scale their operations.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, i) => (
              <div key={study.id} className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Image/Visual */}
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden relative sticky top-24">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-amber-500 text-black text-xs font-semibold rounded-full">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-amber-500 text-sm font-medium">{study.industry}</span>
                  <h2 className="text-3xl font-display font-bold text-white mt-2 mb-6">
                    {study.title}
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">The Challenge</h3>
                      <p className="text-white/70">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Our Solution</h3>
                      <p className="text-white/70">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Results</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {study.results.map((result, j) => (
                          <div key={j} className="p-4 bg-maple-charcoal border border-white/10 rounded-xl text-center">
                            <p className="text-2xl font-display font-bold text-amber-500">{result.metric}</p>
                            <p className="text-xs text-white/50 mt-1">{result.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                      <svg className="w-8 h-8 text-amber-500/30 mb-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-white/80 italic mb-3">{study.quote}</p>
                      <p className="text-sm text-amber-500">{study.quoteAuthor}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500/10 border-y border-amber-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-white/60 mb-8">
            Let us show you how we can help reduce your costs and improve quality.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}
