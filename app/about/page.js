import Link from 'next/link'
import Image from 'next/image'
import ServiceImage from '@/components/ServiceImage'

export const metadata = {
  title: 'About Us',
  description: 'Learn about Maple MPSS - your plug and play offshore manufacturing partner. Canada-India operations serving North American manufacturers.',
}

const milestones = [
  { year: '2019', title: 'Founded', description: 'Maple MPSS established with a vision to bridge North American manufacturers with Indian production capabilities.' },
  { year: '2020', title: 'India Operations', description: 'Opened dedicated manufacturing and engineering facility in Chennai, India.' },
  { year: '2021', title: 'ISO Certification', description: 'Achieved ISO 9001:2015 certification for quality management systems.' },
  { year: '2023', title: '30+ Projects', description: 'Completed over 30 successful projects across aerospace, automotive, and industrial sectors.' },
  { year: '2024', title: 'Expanding Services', description: 'Launched placement services and expanded engineering support capabilities.' },
]

const team = [
  {
    name: 'Team Member',
    role: 'CEO & Co-Founder',
    location: 'Canada',
    bio: 'Background in data analysis, AI, and supply chain management. Leads business development and client relations.',
    placeholder: true,
  },
  {
    name: 'Team Member',
    role: 'Chief Engineer',
    location: 'India',
    bio: '45+ years of experience in mechanical engineering, packaging machines, industrial robotics, and automation systems.',
    placeholder: true,
  },
  {
    name: 'Team Member',
    role: 'Operations Manager',
    location: 'India',
    bio: 'Oversees day-to-day manufacturing operations and quality control processes.',
    placeholder: true,
  },
  {
    name: 'Team Member',
    role: 'Quality Director',
    location: 'India',
    bio: 'Leads inspection team and ensures ISO compliance across all projects.',
    placeholder: true,
  },
]

const values = [
  { title: 'Quality First', description: 'Every part inspected. Every shipment documented. Zero compromises on quality.' },
  { title: 'Transparency', description: 'Clear communication, honest pricing, and real-time project visibility.' },
  { title: 'Partnership', description: 'We succeed when you succeed. Your goals become our goals.' },
  { title: 'Innovation', description: 'Continuously improving processes to deliver better results.' },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumbs */}
      <div className="bg-maple-charcoal border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-amber-500 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-amber-500">About Us</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Your Offshore Manufacturing Partner
            </h1>
            <p className="text-lg text-white/70">
              Maple MPSS bridges North American companies with world-class manufacturing capabilities in India. We give mid-sized manufacturers their own offshore base—without the overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Maple MPSS was founded with a simple observation: mid-sized North American manufacturers were missing out on the cost advantages of offshore production. Large corporations had the resources to set up their own facilities in India or China. Small shops could not justify the investment. But companies in the middle were stuck paying domestic prices or dealing with unreliable overseas vendors.
                </p>
                <p>
                  We created a different model. Instead of being just another supplier, we become your dedicated offshore team. Our engineers, quality inspectors, and manufacturing specialists work exclusively on your projects. You get all the benefits of offshore production—40-60% cost savings—without any of the headaches.
                </p>
                <p>
                  With operations in Canada and India, we bridge the gap. Your single point of contact is always in your timezone. Our India team handles execution. The result: world-class manufacturing, transparent communication, and parts delivered to your door.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <ServiceImage
                localSrc="/images/about.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=85"
                alt="Maple MPSS team at work"
                                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Canada-India Connection */}
      <section className="py-20 bg-maple-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">
            Canada-India Partnership
          </h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Simple visual representation */}
            <div className="flex items-center justify-between">
              {/* Canada */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-amber-500/10 border-2 border-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍁</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Canada</h3>
                <p className="text-sm text-white/50">Client Relations</p>
                <p className="text-sm text-white/50">Project Management</p>
              </div>

              {/* Connection line */}
              <div className="flex-1 mx-8 relative">
                <div className="h-0.5 bg-gradient-to-r from-amber-500 via-amber-500/50 to-amber-500"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-maple-charcoal px-4 py-2 rounded-full border border-amber-500/30">
                  <span className="text-amber-500 text-sm font-medium">Seamless Collaboration</span>
                </div>
              </div>

              {/* India */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-amber-500/10 border-2 border-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏭</span>
                </div>
                <h3 className="text-lg font-semibold text-white">India</h3>
                <p className="text-sm text-white/50">Manufacturing</p>
                <p className="text-sm text-white/50">Engineering & QC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {milestone.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-amber-500/30 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-semibold text-white mb-1">{milestone.title}</h3>
                  <p className="text-white/60">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-maple-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center">
                  <svg className="w-10 h-10 text-amber-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-amber-500 text-sm">{member.role}</p>
                <p className="text-white/40 text-xs mb-3">{member.location}</p>
                <p className="text-white/60 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="p-6 bg-maple-charcoal border border-white/10 rounded-xl">
                <h3 className="text-lg font-semibold text-amber-500 mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500/10 border-y border-amber-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-white/60 mb-8">
            Let us show you how we can reduce your manufacturing costs while improving quality.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}
