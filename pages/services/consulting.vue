<template>
  <div class="detail-page">
    <PageHeader title="System Design & Consulting" subtitle="Technical roadmapping and architectural optimization for scale." />

    <div class="detail-container">
      <div class="detail-main">
        <h2>The Offering</h2>
        <p>The most expensive mistake in software is building the wrong thing. NemesisNet provides high-level technical advisory to ensure your architecture is sound before a single line of code is written.</p>
        
        <h2>Consulting Focus</h2>
        <div class="service-feature">
          <h3>Architecture Planning</h3>
          <p>Using Domain-Driven Design (DDD) and Clean Architecture to ensure your system is maintainable and logically structured.</p>
        </div>
        <div class="service-feature">
          <h3>Performance Optimization</h3>
          <p>Identifying bottlenecks in your existing stack and implementing high-impact fixes to reduce latency and server costs.</p>
        </div>
        <div class="service-feature">
          <h3>Codebase Restructuring</h3>
          <p>Converting legacy "spaghetti code" into modular, testable, and scalable systems without interrupting production.</p>
        </div>
        <div class="service-feature">
          <h3>Technical Advisory</h3>
          <p>Strategic guidance on tool selection, cloud migration, and AI integration strategies for your business.</p>
        </div>        <h2>Relevant Projects</h2>
        <div class="relevant-projects">
          <NuxtLink to="/projects/codecritical" class="btn-glass">CodeCritical</NuxtLink>
        </div>

        
        <div class="cta-wrapper">
          <NuxtLink to="/#contact" class="btn-glass">Book a Session</NuxtLink>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h4>Service Details</h4>
          <ul class="sidebar-list">
            <li><span>Format:</span> <strong>Half/Full Day</strong></li>
            <li><span>Focus:</span> <strong>Strategy & Design</strong></li>
            <li><span>Tiers:</span> <strong>Consulting</strong></li>
            <li><span>Pricing:</span> <strong>From R10,000</strong></li>
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
  title: 'System Design & Consulting | NemesisNet',
  meta: [    { name: 'description', content: 'Technical roadmapping and architectural optimization for scale.' }
  ]
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
