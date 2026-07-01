<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="cta-link"
    :class="[`cta-link--${variant}`]"
  >
    {{ label }}
    <span v-if="arrow" class="cta-arrow">→</span>
  </NuxtLink>
  <a
    v-else
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="cta-link"
    :class="[`cta-link--${variant}`]"
  >
    {{ label }}
    <span v-if="arrow" class="cta-arrow">→</span>
  </a>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  to: { type: String, default: '' },
  href: { type: String, default: '' },
  variant: { type: String, default: 'secondary', validator: (v) => ['primary', 'secondary', 'cross-sell'].includes(v) },
  arrow: { type: Boolean, default: false }
})
</script>

<style scoped>
.cta-link {
  padding: 12px 28px;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--text-color);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
}

.cta-link:hover {
  background: var(--accent-hover);
  color: #0a0e27;
  border-color: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--accent-glow);
}

.cta-link:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 3px;
}

.cta-link--primary {
  background: var(--accent-color);
  color: #0a0e27;
  border-color: var(--accent-color);
  font-weight: 600;
  padding: 14px 32px;
  font-size: 1.05rem;
}

.cta-link--primary:hover {
  background: var(--accent-hover);
  border-color: var(--accent-hover);
  box-shadow: 0 8px 32px var(--accent-glow);
}

.cta-link--cross-sell {
  background: transparent;
  border-style: dashed;
  opacity: 0.8;
  font-size: 0.9rem;
  padding: 10px 24px;
}

.cta-link--cross-sell:hover {
  opacity: 1;
}

.cta-arrow {
  font-size: 1.1em;
  transition: transform 0.2s ease;
}

.cta-link:hover .cta-arrow {
  transform: translateX(3px);
}

@media (max-width: 768px) {
  .cta-link {
    padding: 10px 20px;
    font-size: 0.9rem;
    min-width: 0;
    width: 100%;
    justify-content: center;
  }

  .cta-link--primary {
    padding: 12px 24px;
  }
}
</style>
