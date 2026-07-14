<template>
  <div class="service-footer">
    <div v-if="exploring.length" class="service-footer-exploring">
      <h2>{{ exploringLabel }}</h2>
      <p v-if="exploringNote" class="service-footer-note">{{ exploringNote }}</p>
      <div class="service-footer-cards">
        <div v-for="card in exploring" :key="card.to" class="service-footer-card">
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
          <NuxtLink :to="card.to" class="btn-glass">{{ exploringButtonLabel }}</NuxtLink>
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

    <div v-if="navigation" class="service-footer-nav">
      <NuxtLink v-if="navigation.prev" :to="navigation.prev.to" class="service-footer-nav-link service-footer-nav-prev">
        <span class="service-footer-nav-arrow">←</span>
        <span class="service-footer-nav-text">
          <span class="service-footer-nav-label">Previous</span>
          <span class="service-footer-nav-title">{{ navigation.prev.label }}</span>
        </span>
      </NuxtLink>
      <NuxtLink v-if="navigation.next" :to="navigation.next.to" class="service-footer-nav-link service-footer-nav-next">
        <span class="service-footer-nav-text">
          <span class="service-footer-nav-label">Next</span>
          <span class="service-footer-nav-title">{{ navigation.next.label }}</span>
        </span>
        <span class="service-footer-nav-arrow">→</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  exploring: { type: Array, default: () => [] },
  exploringNote: { type: String, default: '' },
  exploringLabel: { type: String, default: 'Related Services' },
  exploringButtonLabel: { type: String, default: 'View Service' },
  reading: { type: Array, default: () => [] },
  readingLabel: { type: String, default: 'Technical Reading' },
  cta: {
    type: Object,
    default: () => ({ heading: '', description: '', buttonLabel: '', to: '/contact', note: '' })
  },
  navigation: {
    type: Object,
    default: null
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

.service-footer-card h3 { color: var(--accent-color); font-size: 0.95rem; margin: 0; }
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

.service-footer-cta-inner { text-align: center; }
.service-footer-cta-inner h2 { font-size: 1.8rem; margin-bottom: 12px; text-align: center; }
.service-footer-cta-inner p { color: var(--text-muted); margin-bottom: 28px; font-size: 1rem; max-width: 540px; margin-left: auto; margin-right: auto; text-align: center; }
.service-footer-cta-btn { display: block; font-size: 1.1rem; padding: 16px 44px; max-width: 320px; margin: 0 auto; text-align: center; }
.service-footer-cta-note { display: block; margin-top: 16px; font-size: 0.8rem; color: var(--text-muted); opacity: 0.6; font-style: italic; text-align: center; }

.service-footer-nav {
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.service-footer-nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  text-decoration: none;
  color: var(--text-color);
  transition: border-color 0.2s, transform 0.2s;
  flex: 1;
  min-width: 0;
}

.service-footer-nav-link:hover {
  border-color: var(--accent-color);
  transform: translateY(-2px);
}

.service-footer-nav-next { text-align: right; justify-content: flex-end; }

.service-footer-nav-arrow {
  font-size: 1.2rem;
  color: var(--accent-color);
  flex-shrink: 0;
}

.service-footer-nav-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.service-footer-nav-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  opacity: 0.6;
}

.service-footer-nav-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-color);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .service-footer-cards { grid-template-columns: 1fr; }
  .service-footer-cta { padding: 40px 20px; }
  .service-footer-cta-inner h2 { font-size: 1.4rem; }
  .service-footer-nav { flex-direction: column; }
  .service-footer-nav-next { text-align: left; justify-content: flex-start; }
}
</style>