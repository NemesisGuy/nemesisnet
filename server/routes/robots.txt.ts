export default defineEventHandler((event) => {
  const host = getRequestHeader(event, 'host') || ''
  const isDev = host.includes('dev.')

  if (isDev) {
    return `User-agent: *\nDisallow: /`
  }

  return `User-agent: *\nDisallow:\nSitemap: https://nemesisnet.co.za/sitemap.xml`
})
