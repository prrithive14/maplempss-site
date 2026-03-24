import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Maple MPSS privacy policy. How we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <div className="bg-maple-charcoal border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-amber-500 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-amber-500">Privacy Policy</span>
          </nav>
        </div>
      </div>

      <section className="py-20 bg-maple-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-amber max-w-none space-y-8 text-white/70">
            <p className="text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you request a quote, contact us, or communicate with us. This information may include your name, email address, phone number, company name, and project details.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Respond to your inquiries and provide quotes</li>
                <li>Communicate with you about our services</li>
                <li>Process and fulfill orders</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">4. Cookies</h2>
              <p>
                We use cookies to enhance your experience on our website. Cookies are small files stored on your device that help us understand how you use our site. You can control cookie settings through your browser.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">6. Your Rights</h2>
              <p>
                Under Canadian privacy laws (PIPEDA) and other applicable regulations, you have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at cs@maplempss.com.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                Email: <a href="mailto:cs@maplempss.com" className="text-amber-500 hover:underline">cs@maplempss.com</a><br />
                Phone: <a href="tel:+16476714516" className="text-amber-500 hover:underline">+1 647-671-4516</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
