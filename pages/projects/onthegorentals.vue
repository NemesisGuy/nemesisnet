<template>
  <div class="detail-page">
    <PageHeader title="OntheGoRentals" subtitle="A full-stack car rental platform for seamless fleet management." />

    <div class="detail-container">
      <div class="detail-main">
        <img :src="'/images/projects/onthegorentals/optimized/hero.webp'" class="detail-image" alt="OntheGoRentals" fetchpriority="high" loading="eager">
        
        <h2>The Challenge</h2>
        <p>Managing a car rental fleet requires a complex intersection of user-facing booking flows and heavy-duty admin backends. The goal was to create a system that handles real-time availability, diverse user roles, and secure payment/auth flows without friction.</p>
        
        <h2>The Solution</h2>
        <p>OntheGoRentals provides a unified platform for both customers and administrators. Customers enjoy a smooth Vue.js booking experience, while administrators have a powerful dashboard to manage fleet status, user roles, and detailed analytics on rental trends.</p>
        
        <h2>Technical Implementation</h2>
        <p>The system is powered by a Java Spring Boot backend, utilizing a robust relational database for rental history and vehicle tracking. Security is handled via JWT authentication, ensuring a seamless but secure login experience. The frontend is a highly responsive Vue.js application optimized for mobile and desktop.</p>
        
        <div class="cta-wrapper">
          <a href="https://github.com/NemesisGuy/OnTheGoRentals" target="_blank" class="btn-glass">View Source</a>
          <a href="https://otgr.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
        </div>
        <div class="next-project">
          <NuxtLink to="/projects/codecritical-cli" class="btn-glass">Next Project → CodeCritical CLI</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Project Details</h4>
          <ul class="sidebar-list">
            <li><span>Timeline:</span> <strong>8 Weeks</strong></li>
            <li><span>Stack:</span> <strong>Java, Spring Boot, Vue, MySQL</strong></li>
            <li><span>Role:</span> <strong>Full-Stack Lead</strong></li>
            <li><span>Status:</span> <strong>Live</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/projects" class="btn-glass">← Back to Portfolio</NuxtLink>
            <a href="https://github.com/NemesisGuy/OnTheGoRentals" target="_blank" class="btn-glass">View Source</a>
            <a href="https://otgr.nemesisnet.co.za" target="_blank" class="btn-glass">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'OntheGoRentals | Car Rental Fleet Management Platform | NemesisNet',
  meta: [
    { name: 'description', content: 'A full-stack car rental and fleet management platform built using Spring Boot, Java, Vue, and MySQL.' },
    { property: 'og:title', content: 'OntheGoRentals | Car Rental Fleet Management Platform | NemesisNet' },
    { property: 'og:description', content: 'Robust real-time vehicle booking, administrative dashboard management, secure JWT authentication, and MySQL tracking.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/projects/onthegorentals' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/projects/onthegorentals/optimized/hero.webp' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/projects/onthegorentals' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'OntheGoRentals',
        'operatingSystem': 'Linux, Windows, macOS',
        'applicationCategory': 'BusinessApplication',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'description': 'A full-stack car rental and fleet management platform built using Spring Boot, Java, Vue, and MySQL.',
        'author': {
          '@type': 'Person',
          'name': 'Peter Buckingham',
          'url': 'https://nemesisnet.co.za/about'
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://nemesisnet.co.za/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Projects', 'item': 'https://nemesisnet.co.za/projects' },
          { '@type': 'ListItem', 'position': 3, 'name': 'OntheGoRentals', 'item': 'https://nemesisnet.co.za/projects/onthegorentals' }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1000px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; text-align: left; }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.detail-image { width: 100%; height: auto; border-radius: 20px; border: 1px solid var(--glass-border); margin: 30px 0; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; backdrop-filter: blur(10px); }
.sidebar-card h4 { color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: grid; grid-template-columns: 90px 1fr; gap: 8px; align-items: start; }
.sidebar-list li span { color: var(--text-muted); }
.sidebar-list li strong { color: var(--text-color); text-align: left; word-break: break-word; }
.cta-wrapper { margin-top: 60px; display: flex; gap: 15px; }
.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; }
@media (max-width: 900px) { .detail-container { grid-template-columns: 1fr; } .page-header h1 { font-size: 2.5rem; } .detail-sidebar { position: static; } }
</style>
