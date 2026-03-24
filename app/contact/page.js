'use client'

import { useState } from 'react'
import Link from 'next/link'

const partTypes = [
  'CNC Machined Parts',
  'Sheet Metal Fabrication',
  'Castings/Forgings',
  'Assemblies',
  'Other',
]

const materials = [
  'Aluminum',
  'Stainless Steel',
  'Carbon Steel',
  'Brass/Bronze',
  'Titanium',
  'Plastics',
  'Other',
]

const quantities = [
  'Prototype (1-10)',
  'Low Volume (10-100)',
  'Medium Volume (100-1000)',
  'High Volume (1000+)',
]

const timelines = [
  'Urgent (< 2 weeks)',
  'Standard (2-4 weeks)',
  'Flexible (4-8 weeks)',
  'Planning stage',
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const formData = new FormData(e.target)

    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or email us directly.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20">
      {/* Breadcrumbs */}
      <div className="bg-maple-charcoal border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-amber-500 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-amber-500">Contact</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Request a Quote
            </h1>
            <p className="text-lg text-white/70">
              Share your project details and we will provide a detailed quote within 48 hours. No obligation, just honest pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-maple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-display font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-amber-500 uppercase tracking-wider mb-2">Email</p>
                  <a href="mailto:cs@maplempss.com" className="text-white hover:text-amber-500 transition-colors">
                    cs@maplempss.com
                  </a>
                </div>

                <div>
                  <p className="text-xs text-amber-500 uppercase tracking-wider mb-2">Phone</p>
                  <a href="tel:+16476714516" className="text-white hover:text-amber-500 transition-colors">
                    +1 647-671-4516
                  </a>
                </div>

                <div>
                  <p className="text-xs text-amber-500 uppercase tracking-wider mb-2">Canada Office</p>
                  <p className="text-white/70">Ontario, Canada</p>
                </div>

                <div>
                  <p className="text-xs text-amber-500 uppercase tracking-wider mb-2">India Office</p>
                  <p className="text-white/70">Chennai, India</p>
                </div>

                <div>
                  <p className="text-xs text-amber-500 uppercase tracking-wider mb-2">Response Time</p>
                  <p className="text-white/70">Quotes within 48 hours</p>
                </div>
              </div>

              {/* Quick contact */}
              <div className="mt-8 p-6 bg-maple-charcoal border border-white/10 rounded-xl">
                <h3 className="font-semibold text-white mb-2">Prefer to Talk?</h3>
                <p className="text-sm text-white/60 mb-4">
                  Call us directly or send an email. We are happy to discuss your project.
                </p>
                <a href="tel:+16476714516" className="btn-secondary w-full text-center">
                  Call Now
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="p-8 bg-green-500/10 border border-green-500/30 rounded-xl text-center">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-white/70 mb-6">
                    We have received your request and will get back to you within 48 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="p-6 bg-maple-charcoal border border-white/10 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-white/70 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-white/70 mb-2">Company *</label>
                        <input
                          type="text"
                          name="company"
                          required
                          className="w-full"
                          placeholder="Acme Manufacturing"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-white/70 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full"
                          placeholder="john@acme.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-white/70 mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          className="w-full"
                          placeholder="+1 555-123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-maple-charcoal border border-white/10 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-white/70 mb-2">Part Type *</label>
                        <select name="partType" required className="w-full">
                          <option value="">Select type...</option>
                          {partTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-white/70 mb-2">Material *</label>
                        <select name="material" required className="w-full">
                          <option value="">Select material...</option>
                          {materials.map((mat) => (
                            <option key={mat} value={mat}>{mat}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-white/70 mb-2">Quantity *</label>
                        <select name="quantity" required className="w-full">
                          <option value="">Select quantity...</option>
                          {quantities.map((qty) => (
                            <option key={qty} value={qty}>{qty}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-white/70 mb-2">Timeline *</label>
                        <select name="timeline" required className="w-full">
                          <option value="">Select timeline...</option>
                          {timelines.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm text-white/70 mb-2">Tolerance Required</label>
                        <input
                          type="text"
                          name="tolerance"
                          className="w-full"
                          placeholder="e.g., ±0.005 inch"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-maple-charcoal border border-white/10 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-4">Additional Information</h3>
                    <div>
                      <label className="block text-sm text-white/70 mb-2">Project Description</label>
                      <textarea
                        name="description"
                        rows={4}
                        className="w-full"
                        placeholder="Tell us about your project, requirements, and any specific needs..."
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm text-white/70 mb-2">
                        File Upload (CAD/Drawings)
                      </label>
                      <p className="text-xs text-white/50 mb-2">
                        For file uploads, please email your drawings to cs@maplempss.com after submitting this form.
                      </p>
                      <div className="p-4 border-2 border-dashed border-white/20 rounded-lg text-center">
                        <p className="text-white/50 text-sm">
                          Email files to: <span className="text-amber-500">cs@maplempss.com</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>

                  <p className="text-xs text-white/40 text-center">
                    By submitting this form, you agree to our privacy policy. We will never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
