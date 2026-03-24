export default function sitemap() {
  const baseUrl = 'https://maplempss.com'
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/case-studies',
    '/services/cnc-machining',
    '/services/cad-design',
    '/services/sourcing',
    '/services/placement',
    '/services/quality-inspection',
    '/services/engineering',
    '/privacy',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
