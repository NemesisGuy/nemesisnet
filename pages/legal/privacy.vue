<template>
  <div class="legal-page">
    <PageHeader title="Privacy Policy" subtitle="Updated: 14 April 2026" />
    <div class="legal-container">
      <main>
        <div class="policy-doc">
          <article class="policy-block">
            <h3>1. Information Collected</h3>
            <ul>
              <li>Contact information provided through forms or direct communication.</li>
              <li>Operational and analytics data related to website usage.</li>
              <li>Transaction information needed for payment processing.</li>
            </ul>
          </article>
          <article class="policy-block">
            <h3>2. How Information Is Used</h3>
            <ul>
              <li>To deliver requested services and support.</li>
              <li>To communicate about projects, billing, and updates.</li>
              <li>To improve reliability, security, and user experience.</li>
            </ul>
          </article>
          <article class="policy-block">
            <h3>3. Data Sharing And Security</h3>
            <p>NemesisNet does not sell personal data. Data may be shared only with trusted processors where necessary to deliver services. Reasonable technical and organizational safeguards are used to protect data.</p>
          </article>
          <article class="policy-block">
            <h3>4. Retention And Rights</h3>
            <p>Data is retained only as needed for service delivery, compliance, and operations. You may request access, correction, or deletion by emailing admin@nemesisnet.co.za.</p>
          </article>
        </div>
        <div class="back-link">
          <NuxtLink to="/" class="btn-glass">← Back to Home</NuxtLink>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Privacy Policy | NemesisNet',
  meta: [    { name: 'description', content: 'NemesisNet privacy policy covering information collected, usage, sharing, and data rights.' }
  ]
})
</script>

<style scoped>
.legal-container {
  max-width: 960px;
  margin: auto;
  padding: 0 20px 40px;
}

.policy-doc {
  text-align: left;
}

.policy-block {
  margin-bottom: 18px;
  padding: 16px 18px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 14px;
}

.policy-block h3 {
  margin: 0 0 8px;
  color: var(--accent-color);
  font-size: 1rem;
}

.policy-block p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.6;
}

.policy-block ul {
  margin: 8px 0 0;
  padding-left: 18px;
}

.policy-block li {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.55;
  margin: 4px 0;
}

.back-link {
  text-align: center;
  margin-top: 40px;
}
</style>
