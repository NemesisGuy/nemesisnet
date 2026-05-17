<template>
  <div class="legal-page">
    <PageHeader title="Terms Of Service" subtitle="Updated: 14 April 2026" />
    <div class="legal-container">
      <main>
        <nav class="breadcrumbs" aria-label="Breadcrumb" style="padding-left: 0; margin-bottom: 24px;">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span aria-current="page">Terms of Service</span>
        </nav>

        <div class="policy-doc">
          <article class="policy-block">
            <h3>1. Scope Of Services</h3>
            <p>NemesisNet provides software engineering, consulting, and subscription-based technical services as agreed in written proposals, statements of work, or approved communications.</p>
          </article>
          <article class="policy-block">
            <h3>2. Quotations And Payment</h3>
            <ul>
              <li>Quotes are valid for 14 days unless otherwise stated.</li>
              <li>Work starts after written acceptance and any required upfront payment.</li>
              <li>Recurring services are billed on the selected cycle.</li>
            </ul>
          </article>
          <article class="policy-block">
            <h3>3. Client Responsibilities</h3>
            <ul>
              <li>Provide timely access to required accounts, content, and technical inputs.</li>
              <li>Review deliverables and provide feedback within agreed timelines.</li>
              <li>Use delivered systems lawfully.</li>
            </ul>
          </article>
          <article class="policy-block">
            <h3>4. Intellectual Property And Liability</h3>
            <p>Ownership and licensing are defined per project agreement. Third-party tools remain subject to their original licenses. To the maximum extent permitted by law, NemesisNet is not liable for indirect, incidental, or consequential damages.</p>
          </article>
          <article class="policy-block">
            <h3>5. Termination</h3>
            <p>Either party may terminate an engagement in writing with reasonable notice. Outstanding invoices for completed work remain payable upon termination. Work in progress may be delivered in its current state or billed proportionally, depending on the agreement in place.</p>
          </article>
          <article class="policy-block">
            <h3>6. Confidentiality</h3>
            <p>Information shared during the course of a project is treated as confidential. NemesisNet does not disclose client data, trade secrets, or proprietary systems to third parties without written consent.</p>
          </article>
          <article class="policy-block">
            <h3>7. Governing Law</h3>
            <p>These terms are governed by the laws of South Africa. Any dispute arising from these terms or a project agreement will be resolved in the courts of Cape Town, South Africa.</p>
          </article>
          <article class="policy-block">
            <h3>8. Changes To Terms</h3>
            <p>NemesisNet may update these terms from time to time. Continued use of services after changes constitutes acceptance of the revised terms. Clients will be notified of material changes via email or direct communication.</p>
          </article>
          <article class="policy-block">
            <h3>9. Limitation Of Liability</h3>
            <p>To the fullest extent permitted by applicable law, NemesisNet's total liability for any claim arising from services rendered will not exceed the total amount paid by the client for the specific service giving rise to the claim.</p>
          </article>
          <article class="policy-block">
            <h3>10. Force Majeure</h3>
            <p>NemesisNet is not liable for failure or delay in performance due to causes beyond reasonable control, including but not limited to acts of God, internet outages, supplier failures, or government restrictions.</p>
          </article>
          <article class="policy-block">
            <h3>11. Refund Policy</h3>
            <p>Refund handling follows the <NuxtLink to="/legal/refund" style="color: var(--accent-color); text-decoration: none;">Refund Policy</NuxtLink>.</p>
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
  title: 'Terms Of Service | NemesisNet',
  meta: [
    { name: 'description', content: 'NemesisNet terms of service for software engineering, consulting, and subscription-based technical services.' },
    { property: 'og:title', content: 'Terms Of Service | NemesisNet' },
    { property: 'og:description', content: 'NemesisNet terms of service for software engineering, consulting, and subscription-based technical services.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/legal/terms' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/legal/terms' }
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
