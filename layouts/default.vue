<template>
  <div>
    <AppHeader />
    <main style="padding-top: 0;">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

const config = useRuntimeConfig()
useHead({
  meta: config.public.noIndex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []
})
</script>
