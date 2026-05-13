<template>
  <div class="detail-page">
    <PageHeader title="Custom Software Development" subtitle="Enterprise-grade backend systems and high-performance full-stack applications." />

    <div class="detail-container">
      <div class="detail-main">
        <h2>The Offering</h2>
        <p>NemesisNet specializes in building custom software that solves specific business bottlenecks. Generic tools are not the product. NemesisNet architects systems that integrate perfectly into your existing workflows and scale as your user base grows.</p>
        
        <h2>Core Capabilities</h2>
        <div class="service-feature">
          <h3>Full-Stack Mastery</h3>
          <p>Developing responsive, high-performance frontends using Vue.js and React, paired with robust backend architectures.</p>
        </div>
        <div class="service-feature">
          <h3>REST API Engineering</h3>
          <p>Designing secure, scalable, and well-documented APIs using Java Spring Boot, ensuring seamless integration with third-party services.</p>
        </div>
        <div class="service-feature">
          <h3>Secure Authentication</h3>
          <p>Implementing industry-standard security protocols including JWT, RBAC, and OAuth2 to protect your sensitive data.</p>
        </div>
        <div class="service-feature">
          <h3>Database Architecture</h3>
          <p>Designing optimized schemas for MySQL, PostgreSQL, and SQLite to ensure data integrity and lightning-fast query performance.</p>
        </div>        <h2>Relevant Projects</h2>
        <div class="relevant-projects">
          <NuxtLink to="/projects/onthegorentals" class="btn-glass">OnTheGoRentals — Full-Stack Booking</NuxtLink>
          <NuxtLink to="/projects/forkmyfolio" class="btn-glass">ForkMyFolio — Multi-User Platform</NuxtLink>
          <NuxtLink to="/projects/since" class="btn-glass">Since — Temporal Registry</NuxtLink>
        </div>

        
        <div class="cta-wrapper">
          <NuxtLink to="/#contact" class="btn-glass">Discuss This Service →</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Delivery:</span> <strong>2-12 Weeks</strong></li>
            <li><span>Focus:</span> <strong>Performance & Scale</strong></li>
            <li><span>Tiers:</span> <strong>Tier 2 / Tier 3</strong></li>
            <li><span>Pricing:</span> <strong>Custom Quote</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h4>Quick Links</h4>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← Back to Services</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Custom Software Development | NemesisNet',
  meta: [
    { name: 'description', content: 'Enterprise-grade backend systems and high-performance full-stack applications with Vue 3, Spring Boot, and secure authentication. Cape Town, South Africa.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dev.nemesisnet.co.za/services/custom-software' }
  ],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Custom Software Development',
      'description': 'Enterprise-grade backend systems and high-performance full-stack applications with Vue 3 frontend, Spring Boot backend, JWT auth, and database architecture.',
      'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
      'areaServed': { '@type': 'Country', 'name': 'South Africa' },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Custom Software Services',
        'itemListElement': [
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Full-Stack Application' }, 'price': '110000', 'priceCurrency': 'ZAR' },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'REST API Development' }, 'price': '55000', 'priceCurrency': 'ZAR' },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Security & Auth Implementation' }, 'price': '20000', 'priceCurrency': 'ZAR' }
        ]
      }
    })
  }]
})
</script>

<style scoped>
.detail-page {
  background: var(--bg-gradient);
  min-height: 100vh;
}



.detail-container { padding: 24px 20px 40px 20px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 60px;
}

.detail-main {
  text-align: left;
  line-height: 1.8;
}

.detail-main h2 {
  font-size: 2rem;
  margin: 40px 0 20px;
  text-align: left;
}

.detail-main p {
  color: var(--text-muted);
  margin-bottom: 20px;
}

.detail-sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 24px;
  backdrop-filter: blur(10px);
}

.sidebar-card h4 {
  color: var(--accent-color);
  margin-bottom: 15px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sidebar-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
}

.sidebar-list li {
  margin-bottom: 10px;
  color: var(--text-muted);
  display: flex;
  justify-content: space-between;
}

.sidebar-list li strong {
  color: var(--text-color);
}

.service-feature {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.service-feature:hover {
  transform: translateX(10px);
  border-color: var(--accent-color);
}

.service-feature h3 {
  color: var(--accent-color);
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.service-feature p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

.cta-wrapper {
  margin-top: 60px;
  text-align: center;
}



.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; }
.relevant-projects { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
@media (max-width: 900px) {
  .detail-container {
    grid-template-columns: 1fr;
  }
    .detail-sidebar {
    position: static;
  }
}
</style>
