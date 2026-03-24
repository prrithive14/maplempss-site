'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

// Animated counter component
function AnimatedCounter({ end, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    
    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

// Data
const clientLogos = [
  { name: 'Client 1', placeholder: true },
  { name: 'Client 2', placeholder: true },
  { name: 'Client 3', placeholder: true },
  { name: 'Client 4', placeholder: true },
  { name: 'Client 5', placeholder: true },
]

const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 30, suffix: '+', label: 'Projects Delivered' },
  { value: 40, suffix: '%', label: 'Average Savings' },
  { value: 6, suffix: '', label: 'Core Services' },
]

const services = [
  {
    title: 'CNC Machining',
    description: '3, 4, and 5-axis precision machining with tolerances down to ±0.001"',
    href: '/services/cnc-machining',
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80',
  },
  {
    title: 'CAD Design',
    description: '2D/3D modeling, DFM reviews, and reverse engineering services',
    href: '/services/cad-design',
    icon: '📐',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  },
  {
    title: 'Sourcing & Procurement',
    description: 'Global supplier network for materials and components at competitive rates',
    href: '/services/sourcing',
    icon: '🌐',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  },
  {
    title: 'Placement Services',
    description: 'Dedicated offshore engineers and designers working exclusively for you',
    href: '/services/placement',
    icon: '👥',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
  {
    title: 'Quality Inspection',
    description: 'ISO 9001 compliant QC with full documentation and CMM measurement',
    href: '/services/quality-inspection',
    icon: '✓',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
  },
  {
    title: 'Engineering Support',
    description: 'Technical consultation, process optimization, and prototype development',
    href: '/services/engineering',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80',
  },
]

const testimonials = [
  {
    quote: "Maple MPSS transformed our supply chain. We reduced costs by 45% while improving quality consistency.",
    name: "Operations Director",
    company: "Packaging Equipment Manufacturer",
    location: "Ontario, Canada"
  },
  {
    quote: "Having a dedicated team in India without the overhead of managing them ourselves has been a game-changer.",
    name: "VP of Engineering", 
    company: "Industrial Automation Company",
    location: "Michigan, USA"
  },
  {
    quote: "Their quality inspection process gives us confidence. Every shipment arrives exactly to spec.",
    name: "Procurement Manager",
    company: "Medical Device Manufacturer",
    location: "California, USA"
  },
]

const comparisonData = {
  oldWay: [
    'Managing multiple overseas vendors',
    'Quality inconsistencies between suppliers',
    'Communication gaps and timezone issues',
    'Hidden costs and unexpected fees',
    'No visibility into production',
  ],
  mapleWay: [
    'Single point of contact in Canada',
    'Dedicated QC team on every project',
    'Real-time updates and transparency',
    'All-inclusive pricing upfront',
    'Full production visibility and reporting',
  ],
}

const steps = [
  {
    number: '01',
    title: 'Share Requirements',
    description: 'Send us your drawings, specs, or even just a concept. We handle the rest.',
  },
  {
    number: '02',
    title: 'We Quote & Plan',
    description: 'Within 48 hours, receive detailed pricing, timeline, and manufacturing plan.',
  },
  {
    number: '03',
    title: 'We Execute & Deliver',
    description: 'Our India team manufactures, inspects, and ships directly to your door.',
  },
]

const industries = [
  'Aerospace & Defense',
  'Automotive',
  'Medical Devices',
  'Industrial Equipment',
  'Packaging Machinery',
  'Energy & Oil/Gas',
]

const certifications = [
  { name: 'ISO 9001', description: 'Quality Management' },
  { name: 'AS9100', description: 'Aerospace Standard' },
]

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="hero-gradient grain min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-sm font-medium mb-6">
                Canada & India Operations
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                <span className="text-white">Your Plug & Play</span>
                <br />
                <span className="text-amber-500">Offshore Manufacturing</span>
                <br />
                <span className="text-white">Partner</span>
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-xl">
                We give mid-sized North American companies their own offshore base in India—CNC machining, sourcing, engineering, and quality control—without the overhead.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/services/cnc-machining" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
            </motion.div>

            {/* Hero Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=85"
                  alt="CNC Machining at Maple MPSS"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-maple-charcoal border border-white/10 rounded-xl px-6 py-4 shadow-xl">
                <p className="text-3xl font-display font-bold text-amber-500">40-60%</p>
                <p className="text-sm text-white/60">Cost Savings</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-maple-charcoal border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-white/40 uppercase tracking-wider mb-8">Trusted By Industry Leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {clientLogos.map((logo, i) => (
              <div 
                key={i} 
                className="w-32 h-12 bg-white/5 rounded-lg flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
              >
                <span className="text-white/40 text-xs">Logo {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-display font-bold text-amber-500 mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-maple-dark diagonal-lines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              End-to-end manufacturing capabilities from design to delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={service.href}
                  className="block bg-maple-charcoal border border-white/10 rounded-xl card-hover group overflow-hidden"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maple-charcoal via-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 text-2xl">{service.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Old Way vs Maple Way */}
      <section className="py-24 bg-maple-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              The Old Way vs The Maple Way
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Why companies choose us as their offshore manufacturing partner
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Old Way */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-red-500/5 border border-red-500/20 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                The Old Way
              </h3>
              <ul className="space-y-4">
                {comparisonData.oldWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60">
                    <span className="w-1.5 h-1.5 mt-2 bg-red-400 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Maple Way */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-amber-500 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                The Maple Way
              </h3>
              <ul className="space-y-4">
                {comparisonData.mapleWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <span className="w-1.5 h-1.5 mt-2 bg-amber-500 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Getting started is simple. Here's how we partner with you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-display font-bold text-amber-500/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/60">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Trusted by manufacturers across North America
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-maple-charcoal border border-white/10 rounded-xl"
              >
                <svg className="w-8 h-8 text-amber-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white/80 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/50">{testimonial.company}</p>
                  <p className="text-xs text-amber-500/70">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Industries We Serve
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/80 hover:border-amber-500/50 hover:text-amber-500 transition-all cursor-default"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-maple-charcoal border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <p className="text-white/50 text-sm uppercase tracking-wider">Certifications</p>
            <div className="flex items-center gap-6">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-lg">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{cert.name}</p>
                    <p className="text-xs text-white/50">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-maple-dark to-maple-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Reduce Your Manufacturing Costs?
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Get a detailed quote within 48 hours. No obligation, no pressure—just honest pricing and a clear plan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Request a Quote
              </Link>
              <a href="tel:+16476714516" className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
