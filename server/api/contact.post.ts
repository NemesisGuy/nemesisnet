import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const { token, name, email, message } = body

  if (!token) {
    throw createError({ statusCode: 400, message: 'Turnstile token required.' })
  }

  const isValid = await verifyTurnstileToken(token, config.turnstile.secretKey)
  if (!isValid) {
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

  try {
    await resend.emails.send({
      from: 'contact@send.nemesisnet.co.za',
      to: 'reignbuckingham@gmail.com',
      subject: `New Contact: ${trimmedName}`,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`,
      html: `
        <h2>New Contact from Website</h2>
        <p><strong>Name:</strong> ${trimmedName}</p>
        <p><strong>Email:</strong> <a href="mailto:${trimmedEmail}">${trimmedEmail}</a></p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${trimmedMessage.replace(/\n/g, '<br>')}</p>
      `
    })

    return { success: true, message: 'Message sent successfully.' }
  } catch (error) {
    console.error('Email send failed:', error)
    throw createError({ statusCode: 500, message: 'Failed to send message. Please try again or email directly.' })
  }
})