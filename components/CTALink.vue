<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="cta-link"
    :class="[`cta-link--${variant}`]"
  >
    <span class="cta-label">{{ label }}</span>
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
    <span class="cta-label">{{ label }}</span>
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
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  line-height: 1.4;
}

.cta-link:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 3px;
  border-radius: 4px;
}

/* ── Primary: the one thing we want you to do ── */
.cta-link--primary {
  padding: 16px 40px;
  background: var(--accent-color);
  color: #0a0e27;
  border: 1px solid var(--accent-color);
  border-radius: 14px;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.01em;
}

.cta-link--primary:hover {
  background: var(--accent-hover);
  border-color: var(--accent-hover);
  transform: translateY(-3px);
  box-shadow: 0 12px 40px var(--accent-glow);
}

.cta-link--primary .cta-arrow {
  transition: transform 0.25s ease;
}

.cta-link--primary:hover .cta-arrow {
  transform: translateX(4px);
}

/* ── Secondary: further reading, not a CTA ── */
.cta-link--secondary {
  padding: 6px 0;
  color: var(--accent-color);
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.75;
  position: relative;
}

.cta-link--secondary::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent-color);
  transition: width 0.25s ease;
}

.cta-link--secondary:hover {
  opacity: 1;
}

.cta-link--secondary:hover::after {
  width: 100%;
}

.cta-link--secondary .cta-arrow {
  font-size: 0.85em;
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.2s ease;
}

.cta-link--secondary:hover .cta-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* ── Cross-sell: also consider this ── */
.cta-link--cross-sell {
  padding: 6px 0;
  color: var(--text-muted);
  font-size: 0.8rem;
  font-style: italic;
  opacity: 0.55;
}

.cta-link--cross-sell:hover {
  opacity: 1;
  color: var(--accent-color);
}

.cta-link--cross-sell .cta-arrow {
  font-size: 0.85em;
  transition: transform 0.2s ease;
}

.cta-link--cross-sell:hover .cta-arrow {
  transform: translateX(3px);
}

/* ── Mobile: secondary/cross-sell get tap targets ── */
@media (max-width: 768px) {
  .cta-link--primary {
    width: 100%;
    justify-content: center;
    padding: 14px 28px;
    font-size: 1rem;
  }

  .cta-link--secondary {
    padding: 10px 16px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 10px;
    width: 100%;
    justify-content: center;
    opacity: 1;
  }

  .cta-link--secondary::after {
    display: none;
  }

  .cta-link--cross-sell {
    padding: 10px 16px;
    width: 100%;
    text-align: center;
    opacity: 0.8;
  }
}
</style>
