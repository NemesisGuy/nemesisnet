<template>
  <div>
    <a href="#main" class="skip-link">Skip to content</a>
    <AppHeader />
    <main id="main" style="padding-top: 0;">
      <slot />
    </main>
    <AppFooter />
    <ClientOnly>
      <ChatWidget />
    </ClientOnly>
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import ChatWidget from '~/components/ChatWidget.vue'

const config = useRuntimeConfig()
useHead({
  meta: [
    ...(config.public.noIndex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
    { name: 'twitter:site', content: '@NemesisGuy' }
  ]
})
</script>
