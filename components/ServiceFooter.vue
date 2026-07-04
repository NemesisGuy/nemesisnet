<template>
  <div class="service-footer">
    <div v-if="exploring.length" class="service-footer-exploring">
      <h2>Related Services</h2>
      <p v-if="exploringNote" class="service-footer-note">{{ exploringNote }}</p>
      <div class="service-footer-cards">
        <div v-for="card in exploring" :key="card.to" class="service-footer-card">
          <h4>{{ card.title }}</h4>
          <p>{{ card.description }}</p>
          <NuxtLink :to="card.to" class="btn-glass">View Service</NuxtLink>
        </div>
      </div>
    </div>

    <div v-if="reading.length" class="service-footer-reading">
      <div class="service-footer-reading-inner">
        <span class="service-footer-reading-label">{{ readingLabel }}</span>
        <div class="service-footer-reading-links">
          <a v-for="link in reading" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
        </div>
      </div>
    </div>

    <div class="service-footer-cta">
      <div class="service-footer-cta-inner">
        <h2>{{ cta.heading }}</h2>
        <p>{{ cta.description }}</p>
        <NuxtLink :to="cta.to" class="btn-glass service-footer-cta-btn">{{ cta.buttonLabel }} →</NuxtLink>
        <span v-if="cta.note" class="service-footer-cta-note">{{ cta.note }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  exploring: { type: Array, default: () => [] },
  exploringNote: { type: String, default: '' },
  reading: { type: Array, default: () => [] },
  readingLabel: { type: String, default: 'Technical Reading' },
  cta: {
    type: Object,
    required: true,
    default: () => ({ heading: '', description: '', buttonLabel: '', to: '/contact', note: '' })
  }
})
</script>

<style scoped>
.service-footer {
  margin-top: 60px;
}

.service-footer-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 16px 0 0;
}

.service-footer-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.service-footer-card h4 { color: var(--accent-color); font-size: 0.95rem; margin: 0; }
.service-footer-card p { color: var(--text-muted); font-size: 0.85rem; margin: 0; flex: 1; }
.service-footer-card .btn-glass { font-size: 0.8rem; padding: 8px 16px; display: block; text-align: center; }

.service-footer-note { color: var(--text-muted); margin-bottom: 0; font-size: 0.95rem; }

.service-footer-reading {
  margin-top: 48px;
}

.service-footer-reading-inner {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
}

.service-footer-reading-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  opacity: 0.5;
  margin-bottom: 12px;
}

.service-footer-reading-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.service-footer-reading-links a {
  color: var(--accent-color);
  font-size: 0.85rem;
  text-decoration: none;
  opacity: 0.75;
  transition: opacity 0.2s;
}

.service-footer-reading-links a:hover { opacity: 1; text-decoration: underline; }

.service-footer-cta {
  margin-top: 80px;
  padding: 60px 40px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  text-align: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

.service-footer-cta-inner h2 { font-size: 1.8rem; margin-bottom: 12px; }
.service-footer-cta-inner p { color: var(--text-muted); margin-bottom: 28px; font-size: 1rem; max-width: 540px; margin-left: auto; margin-right: auto; }
.service-footer-cta-btn { display: block; font-size: 1.1rem; padding: 16px 44px; max-width: 320px; margin: 0 auto; }
.service-footer-cta-note { display: block; margin-top: 16px; font-size: 0.8rem; color: var(--text-muted); opacity: 0.6; font-style: italic; }

@media (max-width: 768px) {
  .service-footer-cards { grid-template-columns: 1fr; }
  .service-footer-cta { padding: 40px 20px; }
  .service-footer-cta-inner h2 { font-size: 1.4rem; }
}
</style>
