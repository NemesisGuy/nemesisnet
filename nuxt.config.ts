export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/projects',
        '/projects/kokoro-tts',
        '/projects/wordpress-mcp',
        '/projects/nk-assessments',
        '/projects/codecritical',
        '/projects/codecritical-saas',
        '/projects/vibetype',
        '/projects/forkmyfolio',
        '/projects/onthegorentals',
        '/projects/bored-room-cafe',
        '/projects/voxnemesis-supertonic',
        '/projects/since',
        '/services',
        '/services/custom-software',
        '/services/saas-dev',
        '/services/infrastructure',
        '/services/consulting',
        '/about',
        '/legal/refund',
        '/legal/terms',
        '/legal/privacy'
      ],
      failOnError: false
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'NemesisNet — AI Infrastructure & Platform Engineering',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'NemesisNet engineers AI-powered platforms, backend systems, and automation infrastructure.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/brand/Nemesis_Logo_Icon.ico' },
        { rel: 'icon', type: 'image/png', href: '/images/brand/Nemesis_Logo_Icon.png' },
        { rel: 'shortcut icon', href: '/images/brand/Nemesis_Logo_Icon.ico' },
        { rel: 'stylesheet', href: '/css/main.css' },
        { rel: 'stylesheet', href: '/css/aurora-mode.css' },
        { rel: 'stylesheet', href: '/css/nemesis-mode.css' }
      ]
    }
  },
  compilerOptions: {
    isCustomElement: (tag) => tag === ' вне'
  }
})
