import { PRERENDER_ROUTES } from './config/prerender-routes'

export default defineNuxtConfig({
  ssr: true,
  modules: ['@nuxtjs/turnstile'],
  turnstile: {
    siteKey: '0x4AAAAAADPNJc2ObjAJrmVf'
  },
  runtimeConfig: {
    public: {
      noIndex: process.env.NUXT_PUBLIC_NO_INDEX === 'true'
    },
    turnstile: {
      secretKey: process.env.TURNSTILE_SECRET_KEY || ''
    },
    resendApiKey: process.env.RESEND_API_KEY || '',
    gemmaApiKey: process.env.GEMMA_API_KEY || ''
  },
  nitro: {
    routeRules: {
      '/**': {
        headers: {
          'Cache-Control': process.env.NUXT_PUBLIC_NO_INDEX === 'true' ? 'no-cache, no-store, must-revalidate' : 'public, s-maxage=86400, max-age=0, stale-while-revalidate=86400',
          'Strict-Transport-Security': 'max-age=31536000',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'SAMEORIGIN',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'geolocation=(), camera=(), microphone=(), xr-spatial-tracking()',
          'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://metrics.nemesisnet.co.za https://static.cloudflareinsights.com https://challenges.cloudflare.com; worker-src 'self' blob:; connect-src 'self' https://metrics.nemesisnet.co.za https://cloudflareinsights.com https://static.cloudflareinsights.com https://challenges.cloudflare.com; frame-src 'self' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' https: data:; object-src 'none'; base-uri 'self'; frame-ancestors 'self'; form-action 'self' mailto:; upgrade-insecure-requests"
        }
      },
      '/css/**': {
        headers: { 'Cache-Control': 'public, max-age=14400, s-maxage=86400' }
      },
      '/images/**': {
        headers: { 'Cache-Control': 'public, max-age=31536000, immutable' }
      },
      '/_nuxt/**': {
        headers: { 'Cache-Control': 'public, max-age=31536000, immutable' }
      }
    },
    prerender: {
      crawlLinks: true,
      routes: PRERENDER_ROUTES,
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
        { name: 'description', content: 'NemesisNet engineers AI-powered platforms, backend systems, and automation infrastructure.' },
        ...(process.env.NUXT_PUBLIC_NO_INDEX === 'true' ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@NemesisNet' },
        { name: 'twitter:title', content: 'NemesisNet — AI Infrastructure & Platform Engineering' },
        { name: 'twitter:description', content: 'NemesisNet engineers AI-powered platforms, backend systems, and automation infrastructure.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/brand/Nemesis_Logo_Icon.ico' },
        { rel: 'icon', type: 'image/png', href: '/images/brand/Nemesis_Logo_Icon.png' },
        { rel: 'shortcut icon', href: '/images/brand/Nemesis_Logo_Icon.ico' },
        { rel: 'stylesheet', href: '/css/main.css?v=20260714c' },
        { rel: 'stylesheet', href: '/css/aurora-mode.css?v=20260714' },
        { rel: 'stylesheet', href: '/css/nemesis-mode.css?v=20260714' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            'name': 'NemesisNet',
            'url': 'https://nemesisnet.co.za',
            'description': 'AI infrastructure, self-hosted AI, and full-stack SaaS development in Cape Town, South Africa.',
            'inLanguage': 'en-ZA',
            'publisher': { '@id': 'https://nemesisnet.co.za/#organization' },
            'potentialAction': {
              '@type': 'SearchAction',
              'target': {
                '@type': 'EntryPoint',
                'urlTemplate': 'https://nemesisnet.co.za/?q={search_term_string}'
              },
              'query-input': 'required name=search_term_string'
            }
          })
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': 'https://nemesisnet.co.za/#organization',
            'name': 'NemesisNet',
            'url': 'https://nemesisnet.co.za',
            'logo': 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png',
            'description': 'NemesisNet engineers AI-powered platforms, backend systems, and automation infrastructure for production workloads.',
            'founder': {
              '@type': 'Person',
              'name': 'Peter Buckingham'
            },
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Cape Town',
              'addressRegion': 'Western Cape',
              'addressCountry': 'ZA'
            },
            'sameAs': [
              'https://github.com/NemesisGuy',
              'https://www.linkedin.com/in/peter-buckingham-65438757'
            ]
          })
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://nemesisnet.co.za/#localbusiness',
            'name': 'NemesisNet',
            'description': 'Software engineering and AI infrastructure services based in Cape Town, South Africa.',
            'url': 'https://nemesisnet.co.za',
            'image': 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png',
            'areaServed': {
              '@type': 'Country',
              'name': 'South Africa'
            },
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Cape Town',
              'addressRegion': 'Western Cape',
              'addressCountry': 'ZA'
            },
            'priceRange': 'R7,000 - R350,000+',
            'openingHoursSpecification': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              'opens': '09:00',
              'closes': '17:00'
            },
            'contactPoint': {
              '@type': 'ContactPoint',
              'email': 'admin@nemesisnet.co.za',
              'contactType': 'customer service'
            }
          })
        }
      ]
    }
  },
  compilerOptions: {
    isCustomElement: (tag) => tag === 'noindex-meta'
  }
})
