<template>
  <div class="contact-page">
    <div class="page-header">
      <h1>Get in Touch</h1>
      <p class="page-intro">Have a project in mind? Let's talk about how we can help build it.</p>
    </div>

    <div class="breadcrumbs" aria-label="Breadcrumb">
      <NuxtLink to="/">Home</NuxtLink>
      <span>/</span>
      <span aria-current="page">Contact</span>
    </div>

    <div class="contact-container">
      <div class="contact-form-section">
        <h2>Send a Message</h2>
        <form
          class="contact-form"
          toolname="contact-nemesisnet"
          tooldescription="Send a message to NemesisNet to enquire about custom software, SaaS, AI, or infrastructure projects. Submitter receives a response within 24 hours."
          @submit.prevent="handleSubmit"
        >
          <div class="form-group">
            <label for="name">Name</label>
            <input
              id="name"
              name="name"
              v-model="form.name"
              type="text"
              required
              placeholder="Your name"
              toolparamdescription="The full name of the person submitting the enquiry."
            >
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              name="email"
              v-model="form.email"
              type="email"
              required
              placeholder="your@email.com"
              toolparamdescription="A reply-to email address. Must be a valid email format."
            >
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              v-model="form.subject"
              required
              toolparamdescription="The service category the enquiry relates to. One of: custom-software, saas-development, ai-development, infrastructure, consulting, other."
            >
              <option value="" disabled>Select a subject</option>
              <option value="custom-software">Custom Software Development</option>
              <option value="saas-development">SaaS Platform Development</option>
              <option value="ai-development">AI/ML Development</option>
              <option value="infrastructure">Infrastructure & DevOps</option>
              <option value="consulting">Technical Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              v-model="form.message"
              required
              placeholder="Tell us about your project..."
              rows="6"
              toolparamdescription="A description of the project, problem, or question. Include scope, timeline, and any technical requirements."
            />
          </div>

          <div v-if="form.subject === 'other'" class="form-group">
            <label for="other-subject">Other Subject</label>
            <input
              id="other-subject"
              name="other_subject"
              v-model="form.otherSubject"
              type="text"
              placeholder="What is this about?"
              toolparamdescription="A custom subject line when the 'subject' field is set to 'other'."
            >
          </div>

          <div class="form-group">
            <ClientOnly>
              <NuxtTurnstile v-model="turnstileToken" />
            </ClientOnly>
          </div>

          <button type="submit" class="btn-primary" :disabled="submitting || !turnstileToken">
            {{ submitting ? 'Sending...' : 'Send Message' }}
          </button>

          <p v-if="success" class="success-message" role="status" aria-live="polite">Message sent successfully! We'll be in touch soon.</p>
          <p v-if="error" class="error-message" role="alert" aria-live="assertive">{{ error }}</p>
        </form>
      </div>

      <div class="contact-info-section">
        <h2>Contact Information</h2>
        
        <div class="info-card">
          <div class="info-item">
            <div class="info-icon"><ClientOnly><Mail :size="20" /></ClientOnly></div>
            <strong>Email</strong>
            <a href="mailto:admin@nemesisnet.co.za">admin@nemesisnet.co.za</a>
          </div>
          
          <div class="info-item">
            <div class="info-icon"><ClientOnly><MapPin :size="20" /></ClientOnly></div>
            <strong>Location</strong>
            <span>Cape Town, South Africa</span>
          </div>
          
          <div class="info-item">
            <div class="info-icon"><ClientOnly><CircleDot :size="20" /></ClientOnly></div>
            <strong>Availability</strong>
            <span>Open for new projects</span>
          </div>
        </div>

        <div class="response-time">
          <h3>Response Time</h3>
          <p>I personally review every submission and typically respond within 24 hours.</p>
        </div>

        <div class="alternative-contact">
          <h3>Other Ways to Connect</h3>
          <div class="social-links">
            <a href="https://github.com/NemesisGuy" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub (opens in new tab)">
              <ClientOnly><Github :size="18" /></ClientOnly>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/peter-buckingham-65438757" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn (opens in new tab)">
              <ClientOnly><Linkedin :size="18" /></ClientOnly>
              <span>LinkedIn</span>
            </a>
            <NuxtLink to="/projects" class="social-link">
              <ClientOnly><ExternalLink :size="18" /></ClientOnly>
              <span>View Portfolio</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Mail, MapPin, CircleDot, Github, Linkedin, ExternalLink } from 'lucide-vue-next'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  otherSubject: '',
  message: ''
})

const turnstileToken = ref('')
const submitting = ref(false)
const success = ref(false)
const error = ref('')

async function handleSubmit(event) {
  if (!form.name || !form.email || !form.subject || !form.message) {
    error.value = 'Please fill in all required fields'
    return
  }

  if (!turnstileToken.value) {
    error.value = 'Please complete the verification'
    return
  }

  const subject = form.subject === 'other' ? form.otherSubject : form.subject

  submitting.value = true
  error.value = ''
  success.value = false

  const sendPromise = $fetch('/api/contact', {
    method: 'POST',
    body: {
      token: turnstileToken.value,
      name: form.name,
      email: form.email,
      subject,
      message: form.message
    }
  }).then(() => {
    success.value = true
    form.name = ''
    form.email = ''
    form.subject = ''
    form.otherSubject = ''
    form.message = ''
    turnstileToken.value = ''
    return {
      content: [
        {
          type: 'text',
          text: `Message sent successfully. ${form.name || 'The submitter'} will receive a response at ${form.email || 'the provided email'} within 24 hours.`
        }
      ]
    }
  }).catch((e) => {
    error.value = e.data?.message || 'Failed to send message. Please try again or email directly.'
    return {
      content: [{ type: 'text', text: error.value }],
      isError: true
    }
  }).finally(() => {
    submitting.value = false
  })

  if (event && typeof event.respondWith === 'function' && event.agentInvoked) {
    event.respondWith(sendPromise)
  } else {
    await sendPromise
  }
}

useHead({
  title: 'Contact | NemesisNet',
  meta: [
    { name: 'description', content: 'Get in touch with NemesisNet for custom software, AI development, and self-hosted infrastructure projects.' },
    { property: 'og:title', content: 'Contact | NemesisNet' },
    { property: 'og:description', content: 'Get in touch with NemesisNet for custom software, AI development, and self-hosted infrastructure projects.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/contact' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/contact' }
  ]
})
</script>

<style>
.contact-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: auto !important;
}

.page-header {
  text-align: center;
  margin-bottom: 24px;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.page-intro {
  color: var(--text-muted);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

@media (max-width: 900px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}

.contact-form-section h2,
.contact-info-section h2 {
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: var(--accent-color);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-color);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 14px 16px;
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  background: var(--glass-bg);
  color: var(--text-color);
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-group select {
  padding-right: 40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23c0c8d4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color-scheme: inherit;
}

.form-group select option {
  background-color: var(--bg-color, #0a0e27);
  color: var(--text-color, #ffffff);
}

.form-group input:focus-visible,
.form-group select:focus-visible,
.form-group textarea:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

.form-group input:focus:not(:focus-visible),
.form-group select:focus:not(:focus-visible),
.form-group textarea:focus:not(:focus-visible) {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form .btn-primary {
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 700;
  background: var(--accent-color);
  color: #0a0e27;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.contact-form .btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--accent-glow);
}

.contact-form .btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-message {
  color: #22c55e;
  padding: 12px;
  background: rgba(34, 197, 94, 0.1);
  border-radius: 8px;
  border: 1px solid #22c55e;
}

.error-message {
  color: #ef4444;
  padding: 12px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border: 1px solid #ef4444;
}

.info-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-icon {
  color: var(--accent-color);
  margin-bottom: 4px;
}

.info-item strong {
  color: var(--accent-color);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-item a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.05rem;
}

.info-item a:hover {
  color: var(--accent-color);
  text-decoration: underline;
}

.response-time {
  margin-top: 24px;
  padding: 20px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
}

.response-time h3 {
  font-size: 1rem;
  color: var(--accent-color);
  margin-bottom: 8px;
}

.response-time p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.alternative-contact {
  margin-top: 24px;
}

.alternative-contact h3 {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.9rem;
  transition: border-color 0.2s, transform 0.2s;
}

.social-link:hover {
  border-color: var(--accent-color);
  transform: translateY(-2px);
}

.breadcrumbs { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 24px; padding-left: 20px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
.breadcrumbs a { color: var(--accent-color); text-decoration: none; }
.breadcrumbs a:hover { text-decoration: underline; }
.breadcrumbs span { color: var(--text-muted); opacity: 0.6; }
@media (max-width: 768px) {
  .breadcrumbs { display: none !important; }
}
</style>