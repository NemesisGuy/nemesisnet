import { Resend } from 'resend'

// Valid service categories. Anything else is discarded rather than echoed back,
// so a submitted subject can never be used to inject content into the email.
const SUBJECTS: Record<string, string> = {
  'custom-software': 'Custom Software Development',
  'saas-development': 'SaaS Platform Development',
  'ai-development': 'AI/ML Development',
  'infrastructure': 'Infrastructure & DevOps',
  'consulting': 'Technical Consulting',
  'emergency-php-wordpress-support': 'Emergency PHP & WordPress Support',
  'other': 'Other'
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const { token, name, email, message, subject, other_subject } = body

  if (!token) {
    throw createError({ statusCode: 400, message: 'Turnstile token required.' })
  }

  const formData = new FormData()
  formData.append('secret', process.env.TURNSTILE_SECRET_KEY || config.turnstile.secretKey)
  formData.append('response', token)

  const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData
  })
  const turnstileData = await turnstileRes.json()

  if (!turnstileData.success) {
    throw createError({ statusCode: 400, message: 'Bot detected.' })
  }

  const trimmedName = (name || '').trim()
  const trimmedEmail = (email || '').trim()
  const trimmedMessage = (message || '').trim()

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    throw createError({ statusCode: 400, message: 'Name, email, and message are required.' })
  }

  if (trimmedName.length > 100 || trimmedEmail.length > 254 || trimmedMessage.length > 5000) {
    throw createError({ statusCode: 400, message: 'Input too long. Please keep name under 100, email under 254, and message under 5000 characters.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(trimmedEmail)) {
    throw createError({ statusCode: 400, message: 'Invalid email address.' })
  }

  if (trimmedMessage.length < 10) {
    throw createError({ statusCode: 400, message: 'Message must be at least 10 characters.' })
  }

  const sanitizedName = trimmedName
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  const sanitizedEmail = trimmedEmail
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  const sanitizedMessage = trimmedMessage
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  // Resolve the subject to a known label. "other" allows a short free-text
  // line, which is sanitised and length-capped before use.
  let sanitizedSubject = SUBJECTS[subject] || SUBJECTS.other
  if (subject === 'other') {
    const custom = (other_subject || '').trim()
    if (custom) {
      const safeCustom = custom
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .slice(0, 120)
      sanitizedSubject = `Other — ${safeCustom}`
    }
  }

  try {
    const resendApiKey = process.env.RESEND_API_KEY || config.resendApiKey;
    if (!resendApiKey) {
      throw createError({ statusCode: 500, message: 'Server configuration error: missing email provider API key.' })
    }
    const resend = new Resend(resendApiKey)
    await resend.emails.send({
      from: 'contact@send.nemesisnet.co.za',
      to: 'reignbuckingham@gmail.com',
      subject: `New Contact: ${sanitizedName}`,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nSubject: ${sanitizedSubject}\n\n${trimmedMessage}`,
      html: `
        <h2>New Contact from Website</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      `
    })

    return { success: true, message: 'Message sent successfully.' }
  } catch (error) {
    console.error('Email send failed:', error)
    throw createError({ statusCode: 500, message: 'Failed to send message. Please try again or email directly.' })
  }
})