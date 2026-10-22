<template>
  <div class="detail-page">
    <PageHeader title="Emergency PHP &amp; WordPress Support" subtitle="Practical technical support for businesses that need help assessing, patching and hardening PHP and WordPress websites." />

    <div class="detail-container">
      <div class="detail-main">
        <div class="breadcrumbs" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/services">Services</NuxtLink>
          <span>/</span>
          <span aria-current="page">Emergency PHP &amp; WordPress Support</span>
        </div>

        <h2>The Problem</h2>
        <p>A PHP security release lands, and suddenly you need to know which PHP version is actually answering requests on your server — not the one your shell reports. Meanwhile your site sits on a runtime that has reached end of support, running a plugin you have not updated in a year, on a host where you cannot tell whether the platform has been patched for you.</p>
        <p>Most of the panic in that situation comes from not knowing. This service exists to answer the three questions that matter first: what are you actually running, what needs to change, and is the change safe to make.</p>

        <h2>What This Service Is</h2>
        <p>Prioritised, scoped technical support for PHP and WordPress websites — covering version and end-of-support assessment, security patching, vulnerability assessment with prioritised remediation, and post-change verification. It is bought when something needs doing now, rather than as part of a monthly retainer.</p>
        <p>Emergency work is <strong>prioritised and subject to availability</strong>. It is scheduled around your critical path, and we do not commit to a guaranteed response or resolution time — we will tell you when we can start and what it will take.</p>

        <h2>Who It's For</h2>
        <p><strong>Site owners facing a PHP security advisory</strong> who need the exposure established and the runtime patched, not a lecture on CVEs. <strong>Businesses on an end-of-support PHP branch</strong> who need a compatibility assessment before upgrading. <strong>WordPress sites that have been left unmaintained</strong> and need core, plugin and theme updates with something tested behind them. <strong>Anyone whose site has become unstable, slow or unavailable</strong> and needs a second set of eyes on configuration, dependencies and logs.</p>

        <h2>What You Get</h2>
        <ul class="feature-list">
          <li><CheckCircle :size="18" /> PHP version and end-of-support assessments</li>
          <li><CheckCircle :size="18" /> WordPress core, plugin and theme security updates</li>
          <li><CheckCircle :size="18" /> Vulnerability assessment with prioritised remediation</li>
          <li><CheckCircle :size="18" /> PHP dependency and compatibility checks</li>
          <li><CheckCircle :size="18" /> Docker and container configuration reviews, including exposed services</li>
          <li><CheckCircle :size="18" /> Database access-control and configuration reviews</li>
          <li><CheckCircle :size="18" /> Backup verification and recovery planning</li>
          <li><CheckCircle :size="18" /> Post-update testing of critical site flows</li>
          <li><CheckCircle :size="18" /> Investigation of compromised, unstable or unavailable websites</li>
        </ul>

        <h2>Scope Boundaries</h2>
        <p>Three different things get confused in a security emergency. They are not the same, and they are scoped differently.</p>
        <div class="compare-grid">
          <div class="compare-card">
            <h3>Security Assessment</h3>
            <div class="compare-price">Findings, not fixes</div>
            <ul class="compare-list">
              <li>Establishes what is running and what is exposed</li>
              <li>Produces a prioritised list of findings</li>
              <li>Does not change anything on your site</li>
            </ul>
          </div>
          <div class="compare-card compare-card--featured">
            <h3>Remediation</h3>
            <div class="compare-price">Scoped changes</div>
            <ul class="compare-list">
              <li>Applies the changes you authorise</li>
              <li>Runtime patching, core/plugin/theme updates, configuration corrections</li>
              <li>Verified afterwards against your real traffic paths</li>
            </ul>
          </div>
          <div class="compare-card">
            <h3>Ongoing Monitoring</h3>
            <div class="compare-price">A separate service</div>
            <ul class="compare-list">
              <li>Continuous monitoring and alerting — see Observability</li>
              <li>Recurring maintenance — see Support Retainer</li>
              <li>Managed patching and uptime monitoring — see Light Hosting</li>
            </ul>
          </div>
        </div>
        <p class="scope-note">This is a stabilisation and remediation service, not a continuous monitoring product. If the underlying problem is that nobody owns your hosting or your patch cycle, we will say so and point you at the retainer or managed hosting that actually fixes it.</p>

        <h2>What's Not Included</h2>
        <ul class="feature-list feature-list--muted">
          <li><XCircle :size="18" /> Guaranteed response or resolution times</li>
          <li><XCircle :size="18" /> A 24/7 staffed on-call rotation — emergency work is scheduled, prioritised and subject to availability</li>
          <li><XCircle :size="18" /> 24/7 incident response or digital forensics retainers</li>
          <li><XCircle :size="18" /> Continuous monitoring as a standing service (see Observability)</li>
          <li><XCircle :size="18" /> Feature development, architectural changes or framework migrations</li>
          <li><XCircle :size="18" /> Recovery of data that was never backed up</li>
          <li><XCircle :size="18" /> A guarantee that a compromised site is clean without rebuilding it from known-good code and a known-good database</li>
        </ul>
        <p class="scope-note">We will not tell you a site is secure, and we cannot promise every plugin and theme will work on a new PHP version. We can tell you exactly what you are running, what needs to change, and whether the change broke anything — which is the part that matters when your website is your business.</p>

        <h2>Pricing</h2>
        <div class="compare-grid">
          <div class="compare-card compare-card--featured">
            <h3>Assessment &amp; Remediation</h3>
            <div class="compare-price">R850 – R1,100/hr</div>
            <ul class="compare-list">
              <li>No commitment required</li>
              <li>Billed per hour or per agreed task</li>
              <li>Prioritised scheduling, subject to availability</li>
            </ul>
          </div>
          <div class="compare-card">
            <h3>Scoped Emergency Engagement</h3>
            <div class="compare-price">Quote on assessment</div>
            <ul class="compare-list">
              <li>Fixed scope and price agreed before work starts</li>
              <li>Suited to a defined patching or hardening project</li>
              <li>Written scope, findings and remediation plan</li>
            </ul>
          </div>
          <div class="compare-card">
            <h3>Ongoing Support Retainer</h3>
            <div class="compare-price">From R7,500/mo</div>
            <ul class="compare-list">
              <li>Reserved monthly support hours</li>
              <li>Defined response targets</li>
              <li>Overage at the hourly rate</li>
            </ul>
          </div>
        </div>
        <p class="scope-note">The applicable proposal, statement of work or quotation is the authoritative source for pricing and scope. Request an assessment and a quote for your specific situation.</p>

        <h2>How It Works</h2>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-number">1</span>
            <h3>Initial Assessment</h3>
            <p>We establish what is actually running: which PHP runtime answers web requests, which WordPress core, plugin and theme versions are installed, and where the exposure sits. No changes are made during this stage.</p>
          </div>
          <div class="process-step">
            <span class="step-number">2</span>
            <h3>Agreed Scope &amp; Quote</h3>
            <p>You receive a written scope of findings, a prioritised remediation plan, and a price for the work. Nothing proceeds beyond assessment without your authorisation.</p>
          </div>
          <div class="process-step">
            <span class="step-number">3</span>
            <h3>Authorised Changes</h3>
            <p>Only the changes you approve are made — runtime patching, core, plugin and theme updates, configuration corrections and hardening. Changes are staged or tested where the setup allows it.</p>
          </div>
          <div class="process-step">
            <span class="step-number">4</span>
            <h3>Verification</h3>
            <p>We confirm the patched runtime is genuinely the one serving requests, that workers have restarted, and that your critical flows still work — login, forms, checkout and admin areas.</p>
          </div>
          <div class="process-step">
            <span class="step-number">5</span>
            <h3>Reporting</h3>
            <p>You get a written record of what was found, what changed, what remains outstanding, and what we would do next. Facts and remaining risk — not a claim that the site is secure.</p>
          </div>
        </div>

        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ 'faq-item--open': openFaq === i }">
            <h3>
              <button
                :id="`faq-btn-${i}`"
                class="faq-toggle"
                type="button"
                :aria-expanded="openFaq === i ? 'true' : 'false'"
                :aria-controls="`faq-panel-${i}`"
                @click="toggleFaq(i)"
              >
                <span>{{ faq.q }}</span>
                <ClientOnly><ChevronDown :size="18" class="faq-chevron" /></ClientOnly>
              </button>
            </h3>
            <div
              v-show="openFaq === i"
              :id="`faq-panel-${i}`"
              class="faq-answer"
              role="region"
              :aria-labelledby="`faq-btn-${i}`"
            >
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>

        <ServiceFooter
          :exploring="[
            { title: 'Maintenance & Support', description: 'Routine troubleshooting, plugin updates, and configuration changes at the same hourly rate.', to: '/services/maintenance' },
            { title: 'Support Retainer', description: 'Reserved monthly support hours — the ongoing version of this work.', to: '/services/support-retainer' },
            { title: 'CMS Development', description: 'WordPress theme, plugin, and migration work when the CMS itself needs changing.', to: '/services/cms' },
            { title: 'Light Hosting', description: 'Managed hosting with uptime monitoring, SSL, DNS and OS security patches.', to: '/services/light-hosting' }
          ]"
          exploring-note="Emergency work fixes today's problem. These services stop it recurring."
          :reading="[
            { label: 'PHP2Shell: What the October 2026 Critical PHP Vulnerabilities Mean for Your Website', href: 'https://blog.nemesisnet.co.za/php2shell-critical-php-vulnerabilities-2026/' }
          ]"
          :cta="{ heading: 'Unsure what your site is running?', description: 'Start with an assessment. We will tell you which PHP version serves your requests, whether it is patched, and what has to change — before anything breaks.', buttonLabel: 'Request an Assessment', to: '/contact?subject=emergency-php-wordpress-support' }"
        />
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Service Details</h3>
          <ul class="sidebar-list">
            <li><span>Assessment:</span> <strong>R850 – R1,100/hr</strong></li>
            <li><span>Engagement:</span> <strong>Quote on assessment</strong></li>
            <li><span>Retainer:</span> <strong>From R7,500/mo</strong></li>
            <li><span>Availability:</span> <strong>Subject to availability</strong></li>
            <li><span>Support Hours:</span> <strong>Mon–Fri, 9AM–5PM SAST</strong></li>
          </ul>
        </div>
        <div class="sidebar-card">
          <h3>Quick Links</h3>
          <div class="quick-links">
            <NuxtLink to="/services" class="btn-glass">← All Services</NuxtLink>
            <NuxtLink to="/services/maintenance" class="btn-glass">Maintenance &amp; Support</NuxtLink>
            <NuxtLink to="/services/support-retainer" class="btn-glass">Support Retainer</NuxtLink>
            <NuxtLink to="/services/cms" class="btn-glass">CMS Development</NuxtLink>
            <NuxtLink to="/contact" class="btn-glass">Contact</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle, XCircle, ChevronDown } from 'lucide-vue-next'

const openFaq = ref(null)
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? null : i }

const faqs = [
  {
    q: 'Will updating PHP break my site?',
    a: 'It can. Plugins and themes declare their own compatibility ranges, and a major PHP version jump can break a site that was working fine yesterday. That is why we test the change against a copy of your site before it reaches production wherever the setup allows it, and why we tell you when a plugin is likely to need replacing rather than a code fix. We cannot guarantee every plugin and theme will work on a new PHP version — but we will find out before it matters, and tell you plainly what broke.'
  },
  {
    q: 'What happens to my backups?',
    a: 'Before we change anything, we ask you to confirm you have a current, restorable copy of your database and files, and we verify that it is actually restorable rather than merely present. A backup that has never been restored is not a backup. Data that was never backed up cannot be recovered, and we will not pretend otherwise. If you do not have backups, our Backup Management service configures them, and the recovery planning in this engagement is designed around them.'
  },
  {
    q: 'My site may already be compromised — can you clean it?',
    a: 'We investigate. That means reviewing server and application logs, checking file integrity, looking for unexpected files and modified plugin or theme files, and reviewing outbound traffic for anything your site should not be communicating with. What we will not do is tell you a compromised site is clean without rebuilding it from known-good code and a known-good database, because that is the only honest answer. Emergency remediation is a stabilisation effort, not a security posture, and it does not include 24/7 incident response or digital forensics retainers.'
  },
  {
    q: 'Will my site go down while you work?',
    a: 'Some changes are planned and brief — restarting workers after a runtime upgrade, for example. Where downtime is likely, we agree the window with you in advance and stage what we can. If a site is at immediate risk and the safest available move is to take it offline behind a maintenance page, we will put that decision to you with the reasoning. We do not guarantee zero downtime, and we will not start a change that could take your site down without telling you the risk first.'
  },
  {
    q: 'What happens after the emergency is over?',
    a: 'Patching after an incident is ad hoc by nature, and the next advisory will arrive on its own schedule. The ongoing version of this work is a Support Retainer (reserved monthly hours with defined response targets), a DevOps Retainer for infrastructure and deployment automation, or managed hosting if nobody currently owns your hosting and patch cycle. We will tell you which of those actually addresses your situation rather than defaulting to the most expensive one.'
  },
  {
    q: 'How quickly can you start?',
    a: 'Emergency work is prioritised and subject to availability. We will tell you when we can start and what the work involves — but we do not commit to a guaranteed response or resolution time, and this is not a 24/7 staffed on-call service. Ongoing hosting and monitoring are a separate arrangement; see Light Hosting and Observability.'
  }
]

useHead({
  title: 'Emergency PHP & WordPress Support | NemesisNet',
  meta: [
    { name: 'description', content: 'Emergency PHP and WordPress support: version assessment, security patching and remediation. From R850/hr. Cape Town, South Africa.' },
    { property: 'og:title', content: 'Emergency PHP & WordPress Support | NemesisNet' },
    { property: 'og:description', content: 'Assessment, patching and remediation for PHP and WordPress sites. From R850/hr, no commitment.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nemesisnet.co.za/services/emergency-php-wordpress-support' },
    { property: 'og:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://nemesisnet.co.za/images/brand/Nemesis_Logo_Icon.png' },
    { name: 'twitter:title', content: 'Emergency PHP & WordPress Support | NemesisNet' },
    { name: 'twitter:description', content: 'Assessment, patching and remediation for PHP and WordPress sites. From R850/hr.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nemesisnet.co.za/services/emergency-php-wordpress-support' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Emergency PHP & WordPress Support',
        'description': 'Prioritised, scoped technical support for PHP and WordPress websites — version and end-of-support assessment, security patching, vulnerability assessment with prioritised remediation, and post-change verification.',
        'provider': { '@type': 'Organization', 'name': 'NemesisNet', 'url': 'https://nemesisnet.co.za' },
        'areaServed': { '@type': 'Country', 'name': 'South Africa' },
        'offers': { '@type': 'Offer', 'price': '850', 'priceCurrency': 'ZAR', 'description': 'Hourly rate from R850. Scoped engagements quoted after assessment.' },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://nemesisnet.co.za/services/emergency-php-wordpress-support'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://nemesisnet.co.za/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://nemesisnet.co.za/services' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Emergency PHP & WordPress Support', 'item': 'https://nemesisnet.co.za/services/emergency-php-wordpress-support' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Will updating PHP break my site?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'It can. Plugins and themes declare their own compatibility ranges, and a major PHP version jump can break a site that was working fine yesterday. That is why we test the change against a copy of your site before it reaches production wherever the setup allows it, and why we tell you when a plugin is likely to need replacing rather than a code fix. We cannot guarantee every plugin and theme will work on a new PHP version, but we will find out before it matters and tell you plainly what broke.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What happens to my backups?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Before we change anything, we ask you to confirm you have a current, restorable copy of your database and files, and we verify that it is actually restorable rather than merely present. A backup that has never been restored is not a backup. Data that was never backed up cannot be recovered. Our Backup Management service configures backups, and the recovery planning in this engagement is designed around them.'
            }
          },
          {
            '@type': 'Question',
            'name': 'My site may already be compromised — can you clean it?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We investigate. That means reviewing server and application logs, checking file integrity, looking for unexpected files and modified plugin or theme files, and reviewing outbound traffic for anything your site should not be communicating with. We will not tell you a compromised site is clean without rebuilding it from known-good code and a known-good database. Emergency remediation is a stabilisation effort, not a security posture, and does not include 24/7 incident response or digital forensics retainers.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Will my site go down while you work?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Some changes are planned and brief, such as restarting workers after a runtime upgrade. Where downtime is likely, we agree the window with you in advance and stage what we can. If a site is at immediate risk and the safest available move is to take it offline behind a maintenance page, we will put that decision to you with the reasoning. We do not guarantee zero downtime, and we will not start a change that could take your site down without telling you the risk first.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What happens after the emergency is over?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Patching after an incident is ad hoc by nature, and the next advisory will arrive on its own schedule. The ongoing version of this work is a Support Retainer with reserved monthly hours and defined response targets, a DevOps Retainer for infrastructure and deployment automation, or managed hosting if nobody currently owns your hosting and patch cycle.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How quickly can you start?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Emergency work is prioritised and subject to availability. We will tell you when we can start and what the work involves, but we do not commit to a guaranteed response or resolution time, and this is not a 24/7 staffed on-call service. Ongoing hosting and monitoring are a separate arrangement.'
            }
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.detail-page { background: var(--bg-gradient); min-height: 100vh; }
.detail-container { max-width: 1280px; margin: 0 auto; padding: 24px 20px 40px; display: grid; grid-template-columns: 1fr 300px; gap: 60px; }
.detail-main { text-align: left; line-height: 1.8; }
.detail-main h2 { font-size: 2rem; margin: 40px 0 20px; text-align: left; }
.detail-main p { color: var(--text-muted); margin-bottom: 20px; }
.breadcrumbs { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
.breadcrumbs a { color: var(--accent-color); text-decoration: none; }
.breadcrumbs a:hover { text-decoration: underline; }
.breadcrumbs span { color: var(--text-muted); opacity: 0.6; }
@media (max-width: 768px) { .breadcrumbs { display: none !important; } }
.feature-list { list-style: none; padding: 0; margin: 0 0 24px; }
.feature-list li { padding: 8px 0; color: var(--text-muted); }
.scope-note { font-size: 0.9rem; color: var(--text-muted); font-style: italic; margin-top: -8px; }
.process-steps { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 24px 0; }
.process-steps .process-step { flex: 0 1 calc(33% - 14px); min-width: 240px; max-width: 360px; }
.process-step { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; }
.process-step .step-number { display: inline-block; background: var(--accent-color); color: #000; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-size: 0.85rem; font-weight: 700; margin-bottom: 10px; }
.process-step h3 { color: var(--accent-color); font-size: 1rem; margin: 0 0 8px; }
.process-step p { margin: 0; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }
.compare-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
.compare-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 12px; }
.compare-card--featured { border-color: var(--accent-color); }
.compare-card h3 { color: var(--accent-color); font-size: 1rem; margin: 0; }
.compare-price { font-size: 1.5rem; font-weight: 700; color: var(--text-color); }
.compare-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; flex: 1; }
.compare-list li { padding: 4px 0; color: var(--text-muted); }
.compare-list li::before { content: '✓ '; color: #22c55e; }
.detail-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 20px; }
.sidebar-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 24px; -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
.sidebar-card h3 { color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
.sidebar-list li { margin-bottom: 10px; color: var(--text-muted); display: grid; grid-template-columns: 100px 1fr; gap: 8px; align-items: start; }
.sidebar-list li strong { color: var(--text-color); }
.quick-links { display: flex; flex-direction: column; gap: 10px; }
.quick-links .btn-glass { display: block; width: 100%; }
.faq-list { margin: 24px 0; }
.faq-item { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px 24px; margin-bottom: 12px; }
.faq-item h3 { font-size: 1rem; color: var(--accent-color); margin: 0 0 8px; }
.faq-item p { margin: 0; color: var(--text-muted); font-size: 0.95rem; line-height: 1.7; }
.faq-toggle { display: flex; justify-content: space-between; align-items: center; width: 100%; background: none; border: none; cursor: pointer; padding: 0; text-align: left; color: var(--accent-color); font: inherit; font-size: 1rem; font-weight: 700; }
.faq-toggle h3 { margin: 0; flex: 1; }
.faq-toggle:focus-visible { outline: 2px solid var(--aurora-base, #00C2A8); outline-offset: 3px; }
.faq-chevron { color: var(--accent-color); transition: transform 0.3s ease; flex-shrink: 0; margin-left: 12px; }
.faq-item--open .faq-chevron { transform: rotate(180deg); }
/* Visibility is driven by v-show on this page, so the shared
   .faq-answer { max-height: 0 } rule must not clip the open panel. */
.faq-answer { max-height: none; overflow: visible; }
.faq-answer p { margin-top: 12px; }
@media (max-width: 900px) { .detail-container { grid-template-columns: 1fr; } .page-header h1 { font-size: 2.5rem; } .detail-sidebar { position: static; } .compare-grid { grid-template-columns: 1fr; } .process-steps { grid-template-columns: 1fr; } }
</style>
