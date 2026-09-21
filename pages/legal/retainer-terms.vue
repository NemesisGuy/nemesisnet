<template>
  <div class="legal-page">
    <PageHeader title="Retainer Terms & Conditions" subtitle="Effective: 17 September 2026" />
    <div class="legal-container">
      <main>
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Retainer Terms</span>
        </div>

        <div class="policy-doc">
          <article class="policy-block">
            <h2>1. What Is a NemesisNet Retainer</h2>
            <p>A retainer reserves a defined amount of NemesisNet service capacity for the Client during each billing period. The nature of that capacity — including development, support, maintenance, DevOps, infrastructure, consulting, or other services — is determined by the applicable retainer package and agreement.</p>
            <p>Retainers purchase reserved capacity, not a prepaid bucket of hours. The capacity is made available during each billing period and belongs to that period.</p>
          </article>

          <article class="policy-block">
            <h2>2. What's Included</h2>
            <p>Depending on the retainer package, inclusions may cover some or all of the following:</p>
            <ul>
              <li>Ongoing support and troubleshooting</li>
              <li>Routine maintenance and configuration changes</li>
              <li>Infrastructure management and CI/CD pipeline maintenance</li>
              <li>Feature development, bug fixes, and code improvements</li>
              <li>Security and dependency updates within scope</li>
              <li>Consultation and technical advisory within scope</li>
              <li>Defined response targets and priority scheduling</li>
              <li>Availability during the agreed service window</li>
            </ul>
            <p>The exact inclusions, capacity, and response targets are specified in the applicable retainer agreement or proposal.</p>
          </article>

          <article class="policy-block">
            <h2>3. Work Outside the Included Retainer Scope</h2>
            <p>The following types of work are outside the included capacity unless expressly included in the applicable retainer agreement or otherwise approved as additional work:</p>
            <ul>
              <li>New features or modules outside the agreed scope</li>
              <li>Major UI redesigns or architectural changes</li>
              <li>New integrations, migrations, or third-party system connections</li>
              <li>New AI functionality, model deployments, or pipeline builds</li>
              <li>Framework upgrades requiring significant code changes</li>
              <li>Greenfield applications, platforms, or substantial projects</li>
            </ul>
            <p>The specific exclusions depend on the retainer type. The applicable retainer agreement, proposal, or statement of work defines what is included and what is not. All work outside the included scope requires separate quotation, written approval, and billing. See the <NuxtLink to="/software-development-cost-south-africa" style="color: var(--accent-color); text-decoration: none;">Pricing Guide</NuxtLink> for current rates.</p>
          </article>

          <article class="policy-block policy-block--highlight">
            <h2>4. Retainer Capacity Is Period-Specific</h2>
            <p><strong>Retainer fees provide the Client with the defined service capacity specified in the applicable retainer package for each billing period.</strong> Where a package specifies a number of hours, those hours represent the maximum included service capacity available during that billing period.</p>
            <p><strong>Included capacity is not an accumulating credit balance or deposit against future services.</strong> Unused capacity expires at the end of the applicable billing period and does not roll over, convert to cash, or create an entitlement to equivalent work in a future period unless expressly agreed otherwise in writing.</p>
            <p>A Client's failure to submit requests during a billing period does not transfer unused capacity to a subsequent billing period.</p>
            <p>For example: a Development Retainer providing 6 hours per month means the Client has 6 hours of reserved development capacity available during each respective billing period. If unused in a given month, those hours do not accumulate. The Client cannot bank unused hours across multiple months and claim them later.</p>
          </article>

          <article class="policy-block">
            <h2>5. No Requirement to Request Work</h2>
            <p>The retainer is valid regardless of whether the Client submits requests during a given billing period. The retainer fee pays for reserved capacity — the readiness and allocation of NemesisNet resources — not merely a counter that is decremented when work is performed.</p>
          </article>

          <article class="policy-block">
            <h2>6. Separate Development Work</h2>
            <p>Development work outside the included retainer scope is subject to separate quotation, approval, and billing at the applicable rate. See the <NuxtLink to="/software-development-cost-south-africa" style="color: var(--accent-color); text-decoration: none;">Pricing Guide</NuxtLink> for current rates.</p>
            <p>The Client may request a quote for out-of-scope work at any time. Work will not commence until the Client has provided written approval of the quoted scope and price.</p>
          </article>

          <article class="policy-block">
            <h2>7. Billing</h2>
            <ul>
              <li>Retainers are billed monthly in advance on the agreed billing date.</li>
              <li>Payment is due within 14 days of invoice unless otherwise agreed in writing.</li>
              <li>Work on new requests begins after written approval of the scope and, where applicable, receipt of any required upfront payment.</li>
              <li>Late payment may result in suspension of retainer services until payment is received.</li>
              <li>All prices are exclusive of VAT where applicable.</li>
            </ul>
          </article>

          <article class="policy-block">
            <h2>8. Changes to Scope</h2>
            <p>Changes to the retainer scope, service level, or included capacity take effect only when agreed in writing by both parties. Changes may result in adjusted pricing, which will be confirmed before the change takes effect.</p>
          </article>

          <article class="policy-block">
            <h2>9. Cancellation &amp; Termination</h2>
            <p>Either party may terminate a retainer agreement in writing with 30 days' notice. Outstanding invoices for services already rendered remain payable upon termination. Work in progress may be delivered in its current state or billed proportionally, depending on the agreement in place.</p>
            <p>For clients covered by the Consumer Protection Act (CPA), additional statutory rights may apply to fixed-term agreements, including cancellation and pro-rata refunds. Nothing in these terms limits any rights the Client may have under applicable consumer protection legislation.</p>
          </article>

          <article class="policy-block">
            <h2>10. Client Responsibilities</h2>
            <ul>
              <li>Provide timely access to required accounts, systems, and technical inputs.</li>
              <li>Review deliverables and provide feedback within agreed timelines.</li>
              <li>Maintain ownership of credentials and third-party subscriptions.</li>
              <li>Approve out-of-scope work in writing before work begins.</li>
              <li>Use delivered systems lawfully and in accordance with applicable terms of service.</li>
            </ul>
          </article>

          <article class="policy-block">
            <h2>11. Third-Party Services</h2>
            <p>Retainer fees cover NemesisNet's services only. The following are Client costs and are not included in the retainer fee unless expressly stated otherwise:</p>
            <ul>
              <li>VPS, cloud hosting, and infrastructure providers</li>
              <li>Domain registration and DNS services</li>
              <li>SSL certificates (unless provided through client's Cloudflare)</li>
              <li>Email providers and transactional email services</li>
              <li>AI/LLM API providers (OpenAI, Anthropic, Google, etc.)</li>
              <li>Payment gateways and processing fees</li>
              <li>CDN and edge services</li>
              <li>Any other third-party subscription or service required for the Client's system</li>
            </ul>
          </article>

          <article class="policy-block">
            <h2>12. Governing Law</h2>
            <p>These terms are governed by the laws of South Africa. Any dispute arising from these terms or a retainer agreement will be resolved in the courts of Cape Town, South Africa.</p>
          </article>

          <article class="policy-block">
            <h2>13. Changes to Terms</h2>
            <p>NemesisNet may update these terms from time to time. Continued payment or acceptance of retainer services after changes constitutes acceptance of the revised terms. Clients will be notified of material changes via email or direct communication.</p>
          </article>
        </div>

        <div class="back-link">
          <NuxtLink to="/services" class="btn-glass">← Back to Services</NuxtLink>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Retainer Terms & Conditions | NemesisNet',
  meta: [
    { name: 'description', content: 'NemesisNet retainer terms: what retainers cover, what is excluded, billing, cancellation, and how unused capacity is treated.' },
    { property: 'og:title', content: 'Retainer Terms & Conditions | NemesisNet' },
    { property: 'og:description', content: 'Retainer terms covering scope, billing, cancellation, and how unused capacity is treated.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/legal/retainer-terms' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:title', content: 'Retainer Terms & Conditions | NemesisNet' },
    { name: 'twitter:description', content: 'Retainer terms: scope, billing, cancellation, and how unused capacity is treated.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/legal/retainer-terms' }
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

.policy-block--highlight {
  border-color: var(--accent-color);
}

.policy-block h2 {
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

.policy-block p + p {
  margin-top: 10px;
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

.breadcrumbs { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px; padding-left: 20px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
.breadcrumbs a { color: var(--accent-color); text-decoration: none; }
.breadcrumbs a:hover { text-decoration: underline; }
.breadcrumbs span { color: var(--text-muted); opacity: 0.6; }
@media (max-width: 768px) {
  .breadcrumbs { display: none !important; }
}

.back-link {
  text-align: center;
  margin-top: 40px;
}
</style>
