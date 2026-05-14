import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const { token, name, email, message } = body

  if (!token) {
    throw createError({ statusCode: 400, message: 'Turnstile token required.' })
  }

  const formData = new FormData()
  formData.append('secret', config.turnstile.secretKey)
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

  try {
    const resend = new Resend(config.resendApiKey)
    await resend.emails.send({
      from: 'contact@send.nemesisnet.co.za',
      to: 'reignbuckingham@gmail.com',
      subject: `New Contact: ${sanitizedName}`,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`,
      html: `
        <h2>New Contact from Website</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
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