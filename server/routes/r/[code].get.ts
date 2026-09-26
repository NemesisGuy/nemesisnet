// Short redirect codes for QR codes on marketing creatives.
// Short URLs keep QR modules large enough to scan at phone-story sizes.
// Maps code -> full UTM-tagged promotions URL (attribution preserved).
const TARGETS: Record<string, string> = {
  'v34': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v34-spring-square',
  'v35': 'https://nemesisnet.co.za/promotions?utm_source=x&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v35-spring-landscape',
  'v36': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=story&utm_campaign=spring-special-2026&utm_content=v36-spring-story',
  'v37': 'https://nemesisnet.co.za/promotions?utm_source=facebook&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v37-spring-light-square',
  'v38': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v38-spring-light-landscape',
  'v39': 'https://nemesisnet.co.za/promotions?utm_source=whatsapp&utm_medium=story&utm_campaign=spring-special-2026&utm_content=v39-spring-light-story'
}

export default defineEventHandler((event) => {
  const code = getRouterParam(event, 'code')
  const target = code ? TARGETS[code] : undefined
  if (!target) {
    throw createError({ statusCode: 404, statusMessage: 'Unknown promo code' })
  }
  return sendRedirect(event, target, 302)
})
