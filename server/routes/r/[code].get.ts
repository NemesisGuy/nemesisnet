// Short redirect codes for QR codes on marketing creatives.
// Short URLs keep QR modules large enough to scan at phone-story sizes.
// Maps code -> full UTM-tagged promotions URL (attribution preserved).
const TARGETS: Record<string, string> = {
  'v6': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v1-square',
  'v7': 'https://nemesisnet.co.za/promotions?utm_source=x&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v2-landscape',
  'v8': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v3-bold',
  'v9': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=story&utm_campaign=spring-special-2026&utm_content=v4-story',
  'v10': 'https://nemesisnet.co.za/promotions?utm_source=facebook&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v5-light',
  'v11': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v11-aurora-square',
  'v12': 'https://nemesisnet.co.za/promotions?utm_source=x&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v12-aurora-landscape',
  'v13': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v13-aurora-bold',
  'v14': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=story&utm_campaign=spring-special-2026&utm_content=v14-aurora-story',
  'v15': 'https://nemesisnet.co.za/promotions?utm_source=facebook&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v15-aurora-light',
  'v16': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v16-ember-square',
  'v17': 'https://nemesisnet.co.za/promotions?utm_source=x&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v17-ember-landscape',
  'v18': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v18-ember-light-square',
  'v19': 'https://nemesisnet.co.za/promotions?utm_source=facebook&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v19-ember-light-landscape',
  'v20': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=story&utm_campaign=spring-special-2026&utm_content=v20-ember-story',
  'v21': 'https://nemesisnet.co.za/promotions?utm_source=whatsapp&utm_medium=story&utm_campaign=spring-special-2026&utm_content=v21-ember-light-story',
  'v22': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v22-verdant-square',
  'v23': 'https://nemesisnet.co.za/promotions?utm_source=x&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v23-verdant-landscape',
  'v24': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=story&utm_campaign=spring-special-2026&utm_content=v24-verdant-story',
  'v25': 'https://nemesisnet.co.za/promotions?utm_source=facebook&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v25-verdant-light-square',
  'v26': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v26-verdant-light-landscape',
  'v27': 'https://nemesisnet.co.za/promotions?utm_source=whatsapp&utm_medium=story&utm_campaign=spring-special-2026&utm_content=v27-verdant-light-story',
  'v28': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v28-nebula-square',
  'v29': 'https://nemesisnet.co.za/promotions?utm_source=x&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v29-nebula-landscape',
  'v30': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=story&utm_campaign=spring-special-2026&utm_content=v30-nebula-story',
  'v31': 'https://nemesisnet.co.za/promotions?utm_source=facebook&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v31-nebula-light-square',
  'v32': 'https://nemesisnet.co.za/promotions?utm_source=instagram&utm_medium=social&utm_campaign=spring-special-2026&utm_content=v32-nebula-light-landscape',
  'v33': 'https://nemesisnet.co.za/promotions?utm_source=whatsapp&utm_medium=story&utm_campaign=spring-special-2026&utm_content=v33-nebula-light-story',
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
