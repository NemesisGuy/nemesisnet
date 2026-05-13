import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const name = (body.name || '').trim()
  const email = (body.email || '').trim()
  const message = (body.message || '').trim()

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, message: 'Name, email, and message are required.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({ statusCode: 400, message: 'Invalid email address.' })
  }

  if (message.length < 10) {
    throw createError({ statusCode: 400, message: 'Message must be at least 10 characters.' })
  }

  const transporter = nodemailer.createTransport({
    sendmail: true,
    path: '/usr/sbin/sendmail',
    args: ['-t', '-i']
  })

  try {
    await transporter.sendMail({
      from: 'noreply@nemesisnet.co.za',
      to: 'admin@nemesisnet.co.za',
      replyTo: email,
      subject: `Website contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>New Contact from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    return { success: true, message: 'Message sent successfully.' }
  } catch (error) {
    console.error('Email send failed:', error)
    throw createError({ statusCode: 500, message: 'Failed to send message. Please try again or email directly.' })
  }
})