import { PRERENDER_ROUTES } from '../../config/prerender-routes'

const SITE_URL = 'https://nemesisnet.co.za'
const TODAY = new Date().toISOString().split('T')[0]

const PRIORITY: Record<string, { priority: string, changefreq: string }> = {
  '/': { priority: '0.9', changefreq: 'weekly' },
  '/projects': { priority: '0.9', changefreq: 'weekly' },
  '/services': { priority: '0.9', changefreq: 'weekly' }
}

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/xml')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')

  const urls = PRERENDER_ROUTES.map((route) => {
    const meta = PRIORITY[route] || { priority: '0.7', changefreq: 'monthly' }
    return `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
})
