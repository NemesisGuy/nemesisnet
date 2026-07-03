<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="btn-glass cta-item"
    :class="[`cta-item--${variant}`]"
  >
    {{ label }}
    <span v-if="arrow" class="cta-arrow">→</span>
  </NuxtLink>
  <a
    v-else
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="btn-glass cta-item"
    :class="[`cta-item--${variant}`]"
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
.cta-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: auto;
}

.cta-item--primary {
  background: var(--accent-color);
  color: #0a0e27;
  border-color: var(--accent-color);
  font-weight: 600;
  padding: 14px 36px;
  font-size: 1.05rem;
}

.cta-item--primary:hover {
  background: var(--accent-hover);
  border-color: var(--accent-hover);
}

.cta-item--secondary {
  padding: 8px 18px;
  font-size: 0.85rem;
  min-width: 0;
}

.cta-item--cross-sell {
  padding: 6px 14px;
  font-size: 0.8rem;
  min-width: 0;
  opacity: 0.7;
  border-style: dashed;
}

.cta-item--cross-sell:hover {
  opacity: 1;
}

.cta-arrow {
  font-size: 1.1em;
  transition: transform 0.2s ease;
}

.cta-item:hover .cta-arrow {
  transform: translateX(3px);
}

@media (max-width: 768px) {
  .cta-item {
    width: 100%;
    justify-content: center;
  }

  .cta-item--primary {
    padding: 12px 28px;
  }
}
</style>
