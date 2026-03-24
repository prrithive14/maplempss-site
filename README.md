# Maple MPSS Website v2.0

Professional website for Maple MPSS - Your Plug & Play Offshore Manufacturing Partner.

## Features

- **Stage 1: Visual Foundation** ✅
  - Full-width hero with CTA buttons
  - Sticky navigation with mobile hamburger menu
  - Framer Motion scroll animations
  - Syne + DM Sans font pairing

- **Stage 2: Social Proof** ✅
  - Client logo strip (grayscale)
  - Testimonials section with quotes
  - Animated stat counters (CountUp effect)
  - Certifications badges (ISO 9001, AS9100)

- **Stage 3: Service Pages & RFQ** ✅
  - 6 individual service pages with breadcrumbs
  - Request for Quote form (Formspree integration)
  - Related services sections

- **Stage 4: About & Case Studies** ✅
  - Company story and timeline
  - Team section with placeholders
  - Canada-India partnership visual
  - 2 case studies with results

- **Stage 5: SEO & Polish** ✅
  - Meta titles and descriptions on all pages
  - Open Graph tags for social sharing
  - Sitemap.xml and robots.txt
  - Cookie consent banner (CASL compliant)
  - AI-powered chatbot

## Tech Stack

- **Framework**: Next.js 14.2.28
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **AI Chat**: Anthropic Claude API
- **Forms**: Formspree
- **Hosting**: Vercel

## Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/YOUR_USERNAME/maplempss-site.git
cd maplempss-site
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env.local` and add your API key:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```
ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
```

### 3. Update Formspree

In `app/contact/page.js`, replace `YOUR_FORM_ID` with your Formspree form ID:
1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Copy the form ID
4. Replace in the fetch URL

### 4. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variable: `ANTHROPIC_API_KEY`
5. Deploy

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## Customization

### Replace Placeholder Images

All placeholder images have this structure:
```jsx
<div className="placeholder-image">
  <p className="text-white/40">Description</p>
</div>
```

Replace with actual images using Next.js Image component:
```jsx
import Image from 'next/image'

<Image 
  src="/images/your-image.jpg" 
  alt="Description"
  fill
  className="object-cover"
/>
```

### Update Content

- **Services**: Edit individual pages in `app/services/*/page.js`
- **Team**: Edit `app/about/page.js` - `team` array
- **Testimonials**: Edit `app/page.js` - `testimonials` array
- **Case Studies**: Edit `app/case-studies/page.js` - `caseStudies` array
- **Chatbot**: Edit `lib/system-prompt.js`

### Add Client Logos

In `app/page.js`, replace the `clientLogos` array with actual logos:
```jsx
const clientLogos = [
  { name: 'Client Name', src: '/logos/client1.png' },
  // ...
]
```

## File Structure

```
maplempss-revamp/
├── app/
│   ├── about/page.js
│   ├── api/chat/route.js
│   ├── case-studies/page.js
│   ├── contact/page.js
│   ├── privacy/page.js
│   ├── services/
│   │   ├── cnc-machining/page.js
│   │   ├── cad-design/page.js
│   │   ├── sourcing/page.js
│   │   ├── placement/page.js
│   │   ├── quality-inspection/page.js
│   │   └── engineering/page.js
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   ├── robots.js
│   └── sitemap.js
├── components/
│   ├── ChatBot.jsx
│   ├── CookieConsent.jsx
│   ├── Footer.jsx
│   └── Navigation.jsx
├── lib/
│   └── system-prompt.js
├── public/
├── .env.example
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Support

- Email: cs@maplempss.com
- Phone: +1 647-671-4516
