export default defineEventHandler((event) => {
  const host = getRequestHeader(event, 'host') || ''
  const isDev = host.includes('dev.')
  
  if (isDev) {
    return `User-agent: *
Disallow: /

Sitemap: https://${host}/sitemap.xml`
  }
  
  return `User-agent: *
Allow: /

Sitemap: https://nemesisnet.co.za/sitemap.xml`
})
