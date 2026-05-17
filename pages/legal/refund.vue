<template>
  <div class="legal-page">
    <PageHeader title="Refund And Cancellation Policy" subtitle="Updated: 14 April 2026" />
    <div class="legal-container">
      <main>
        <nav class="breadcrumbs" aria-label="Breadcrumb" style="padding-left: 0; margin-bottom: 24px;">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span aria-current="page">Refund Policy</span>
        </nav>

        <div class="policy-doc">
          <article class="policy-block">
            <h3>1. Overview</h3>
            <p>NemesisNet provides custom software development, consulting, and SaaS-based services. Due to the nature of digital and custom-built solutions, refunds are handled case-by-case under the terms below.</p>
          </article>
          <article class="policy-block">
            <h3>2. Eligibility For Refunds</h3>
            <ul>
              <li>Project has not yet started.</li>
              <li>Service cannot be delivered due to technical or operational constraints.</li>
              <li>Mutual written agreement between NemesisNet and the client.</li>
              <li>For subscriptions, requests must be submitted within 14 days of initial purchase and before substantial use.</li>
            </ul>
          </article>
          <article class="policy-block">
            <h3>3. Non-Refundable Services</h3>
            <ul>
              <li>Completed or partially completed custom development work.</li>
              <li>Delivered digital products, source code, or deployments.</li>
              <li>Consultation or advisory sessions already conducted.</li>
              <li>Any service where significant time or resources have been allocated.</li>
            </ul>
          </article>
          <article class="policy-block">
            <h3>4. Partial Refunds</h3>
            <p>If a project is cancelled mid-way, partial refunds may be issued based on the percentage of work completed and at NemesisNet's discretion.</p>
          </article>
          <article class="policy-block">
            <h3>5. Refund Process</h3>
            <ul>
              <li>Contact: admin@nemesisnet.co.za</li>
              <li>Include project or transaction reference.</li>
              <li>Include reason for request.</li>
            </ul>
            <p>Approved refunds are processed via the original payment method. Processing fees may not be refundable where retained by payment providers.</p>
          </article>
          <article class="policy-block">
            <h3>6. Processing Time And Cancellations</h3>
            <ul>
              <li>Refunds may take 3-10 business days after approval.</li>
              <li>Before project start: full refund.</li>
              <li>After project start: billed proportionally to completed work.</li>
            </ul>
            <p>Subscription services can be cancelled at any time, but cancellations do not guarantee retroactive refunds.</p>
          </article>
        </div>
        <p class="pricing-note"><strong>Disputes:</strong> clients are encouraged to contact NemesisNet first to resolve concerns before initiating chargebacks or formal disputes.</p>
        <div class="back-link">
          <NuxtLink to="/" class="btn-glass">← Back to Home</NuxtLink>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Refund And Cancellation Policy | NemesisNet',
  meta: [
    { name: 'description', content: 'NemesisNet refund and cancellation policy for custom software development, consulting, and SaaS services.' },
    { property: 'og:title', content: 'Refund And Cancellation Policy | NemesisNet' },
    { property: 'og:description', content: 'NemesisNet refund and cancellation policy for custom software development, consulting, and SaaS services.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/legal/refund' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/legal/refund' }
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

.pricing-note {
  margin-top: 20px;
  color: var(--text-muted);
  font-size: 0.92rem;
}

.back-link {
  text-align: center;
  margin-top: 40px;
}
</style>
