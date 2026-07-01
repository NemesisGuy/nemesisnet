<template>
  <div class="cta-group">
    <div v-if="primaryLinks.length" class="cta-row cta-row--primary">
      <CTALink v-for="link in primaryLinks" :key="link.to || link.href" v-bind="link" />
    </div>

    <div v-if="secondaryLinks.length" class="cta-row cta-row--secondary">
      <span class="cta-divider" />
      <span class="cta-reading-label">Further reading</span>
      <div class="cta-reading-links">
        <CTALink v-for="link in secondaryLinks" :key="link.to || link.href" v-bind="link" />
      </div>
    </div>

    <div v-if="crossSellLinks.length" class="cta-row cta-row--cross-sell">
      <CTALink v-for="link in crossSellLinks" :key="link.to || link.href" v-bind="link" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  links: {
    type: Array,
    required: true,
    default: () => []
  }
})

const primaryLinks = computed(() =>
  props.links.filter(l => l.variant === 'primary')
)

const secondaryLinks = computed(() =>
  props.links.filter(l => l.variant === 'secondary')
)

const crossSellLinks = computed(() =>
  props.links.filter(l => l.variant === 'cross-sell')
)
</script>

<style scoped>
.cta-group {
  margin-top: 60px;
}

/* ── Primary: centered hero CTA ── */
.cta-row--primary {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

/* ── Secondary: labelled reading section ── */
.cta-row--secondary {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 24px;
}

.cta-divider {
  display: block;
  width: 60px;
  height: 1px;
  background: var(--glass-border);
}

.cta-reading-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  opacity: 0.5;
}

.cta-reading-links {
  display: flex;
  gap: 8px 28px;
  flex-wrap: wrap;
  justify-content: center;
}

/* ── Cross-sell: subtle exit ramp ── */
.cta-row--cross-sell {
  display: flex;
  justify-content: flex-start;
  padding-top: 20px;
}

@media (max-width: 768px) {
  .cta-reading-links {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  .cta-row--cross-sell {
    justify-content: center;
  }
}
</style>
