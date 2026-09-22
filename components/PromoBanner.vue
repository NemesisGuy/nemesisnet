<template>
  <div v-if="visible" class="promo-banner" role="complementary" aria-label="Spring promotion">
    <div class="promo-banner-inner">
      <span class="promo-badge">Spring Special</span>
      <p class="promo-text">
        <strong>33% off</strong> Static &amp; Brochure, App Starter, and CMS projects.
        <NuxtLink to="/promotions" class="promo-link">View details →</NuxtLink>
      </p>
      <button class="promo-close" aria-label="Dismiss promotion banner" @click="dismiss">&times;</button>
    </div>
  </div>
</template>

<script setup>
const visible = ref(true)

onMounted(() => {
  if (localStorage.getItem('promo-dismissed') === '1') {
    visible.value = false
  } else {
    document.body.classList.add('promo-banner-visible')
  }
})

function dismiss() {
  visible.value = false
  document.body.classList.remove('promo-banner-visible')
  localStorage.setItem('promo-dismissed', '1')
}
</script>

<style scoped>
.promo-banner {
  background: rgba(0, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 255, 255, 0.15);
  padding: 10px 20px;
  text-align: center;
  position: fixed;
  top: 68px;
  left: 0;
  right: 0;
  z-index: 9999;
}
.promo-banner-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}
.promo-badge {
  background: var(--accent-color);
  color: #000;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 3px 10px;
  border-radius: 4px;
  white-space: nowrap;
}
.promo-text {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-color);
}
.promo-link {
  color: var(--accent-color);
  text-decoration: underline;
  text-underline-offset: 2px;
  margin-left: 4px;
}
.promo-link:hover {
  color: #fff;
}
.promo-close {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
}
.promo-close:hover {
  color: var(--text-color);
}
@media (max-width: 600px) {
  .promo-banner { padding: 8px 12px; }
  .promo-text { font-size: 0.78rem; }
  .promo-banner-inner { gap: 6px; }
  .promo-badge { font-size: 0.65rem; padding: 2px 8px; }
  .promo-link { display: block; margin-left: 0; margin-top: 2px; }
}
</style>
