<template>
  <div class="cta-group">
    <div v-if="primaryLinks.length" class="cta-row cta-row--primary">
      <CTALink v-for="link in primaryLinks" :key="link.to || link.href" v-bind="link" />
    </div>
    <div v-if="secondaryLinks.length" class="cta-row cta-row--secondary">
      <CTALink v-for="link in secondaryLinks" :key="link.to || link.href" v-bind="link" />
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
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cta-row {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-row--primary {
  justify-content: center;
}

.cta-row--secondary {
  justify-content: center;
  padding-top: 8px;
  border-top: 1px solid var(--glass-border);
}

.cta-row--cross-sell {
  justify-content: flex-start;
  padding-top: 12px;
}

@media (max-width: 768px) {
  .cta-row {
    flex-direction: column;
    align-items: stretch;
  }

  .cta-row--cross-sell {
    justify-content: center;
  }
}
</style>
