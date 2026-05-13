<template>
  <div class="detail-page">
    <PageHeader title="SaaS Development" subtitle="Scalable multi-tenant platforms built for rapid growth." />

    <div class="detail-container">
      <div class="detail-main">
        <h2>The Offering</h2>
        <p>Turning a great idea into a scalable software-as-a-service platform requires more than just a UI. It requires a robust multi-tenant architecture that ensures data isolation, scalable billing, and high availability.</p>
        
        <h2>SaaS Expertise</h2>
        <div class="service-feature">
          <h3>Multi-Tenant Architecture</h3>
          <p>Designing systems where a single instance of the software serves multiple customers, each with their own isolated data and configuration.</p>
        </div>
        <div class="service-feature">
          <h3>Subscription Management</h3>
          <p>Integrating seamless billing and subscription cycles, ensuring your revenue streams are automated and secure.</p>
        </div>
        <div class="service-feature">
          <h3>API-First Design</h3>
          <p>Building the core of your SaaS as a set of APIs, allowing for easy expansion into mobile apps, third-party integrations, and ecosystem growth.</p>
        </div>
        <div class="service-feature">
          <h3>Cloud-Native Deployment</h3>
          <p>Leveraging Docker, Nginx, and cloud-neutral infrastructure to ensure your platform is always online and scales horizontally.</p>
        </div>        <h2>Relevant Projects</h2>
        <div class="relevant-projects">
          <NuxtLink to="/projects/since" class="btn-glass">Since — Temporal Claim Registry</NuxtLink>
          <NuxtLink to="/projects/codecritical-saas" class="btn-glass">CodeCritical SaaS — Security Scanner</NuxtLink>
          <NuxtLink to="/projects/forkmyfolio" class="btn-glass">ForkMyFolio — Portfolio Platform</NuxtLink>
        </div>

        
        <div class="cta-wrapper">
          <NuxtLink to="/#contact" class="btn-glass">Discuss This Service →</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Delivery:</span> <strong>4-16 Weeks</strong></li>
            <li><span>Focus:</span> <strong>Scale & Isolation</strong></li>
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
  title: 'SaaS Development | NemesisNet',
  meta: [
    { name: 'description', content: 'Scalable multi-tenant SaaS platforms with Spring Boot + Vue 3, authentication, billing, and API-first architecture. Cape Town, South Africa.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dev.nemesisnet.co.za/services/saas-development' }
  ],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'SaaS Development',
      'description': 'Scalable multi-tenant SaaS platforms with Spring Boot backend, Vue 3 frontend, JWT authentication, Stripe billing, and API-first architecture.',
      'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
      'areaServed': { '@type': 'Country', 'name': 'South Africa' },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'SaaS Development Services',
        'itemListElement': [
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Multi-Tenant Platform Build' }, 'price': '110000', 'priceCurrency': 'ZAR' },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'API-First SaaS Architecture' }, 'price': '110000', 'priceCurrency': 'ZAR' },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Billing & Subscription Integration' }, 'price': '55000', 'priceCurrency': 'ZAR' }
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
