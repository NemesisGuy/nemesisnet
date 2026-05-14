import { _ as _sfc_main$1 } from './PageHeader-B7BZQHfz.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BtQCpApt.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './composables-DCWJSWVM.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/destr/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/Reign/Projects/NemesisNet/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/devalue/index.js';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Services | NemesisNet",
      meta: [
        { name: "description", content: "NemesisNet services: Custom Software, SaaS Development, Infrastructure, Consulting." }
      ],
      link: [
        { rel: "canonical", href: "https://dev.nemesisnet.co.za/services" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "Services",
        subtitle: "Engineering platforms, systems, and infrastructure for real production workloads."
      }, null, _parent));
      _push(`<div class="detail-container"><div class="detail-main"><h2>Core Services</h2><div class="service-columns"><div class="card"><h3>Custom Software Development</h3><p>End-to-end application development with clean architecture and modern frameworks.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services/custom-software",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn More`);
          } else {
            return [
              createTextVNode("Learn More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="card"><h3>SaaS Development</h3><p>Scalable multi-tenant platforms with authentication, billing, and APIs.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services/saas-dev",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn More`);
          } else {
            return [
              createTextVNode("Learn More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="card"><h3>Infrastructure &amp; DevOps</h3><p>Docker, CI/CD, cloud networking, and infrastructure automation.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services/infrastructure",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn More`);
          } else {
            return [
              createTextVNode("Learn More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="card"><h3>Consulting &amp; Architecture</h3><p>System design, code reviews, and technical leadership for teams.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services/consulting",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn More`);
          } else {
            return [
              createTextVNode("Learn More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><h2>How NemesisNet Works With Clients</h2><p class="section-intro">Every engagement starts with understanding the business context. NemesisNet does not ship boilerplate \u2014 each system is scoped to the actual operational constraints, user workflows, and growth trajectory of the organization it serves. The goal is never to maximise billable hours; it is to ship production-grade infrastructure that continues to work long after deployment.</p><p class="section-intro">Some projects need a lightweight internal tool built in days. Others need a full-scale platform engineered over months. In both cases, the approach is identical: understand the problem deeply, architect the right solution, and deliver something that runs reliably in production.</p><h2>Software Development Life Cycle</h2><p class="section-intro">NemesisNet adapts its delivery methodology to the constraints of each project. Whether you need the iterative speed of Agile or the structured predictability of Waterfall, the process is aligned to your business context.</p><div class="service-columns sdlc-columns"><div class="card"><h3>Agile &amp; Iterative</h3><p>Two-week sprints with continuous stakeholder feedback. Ideal for MVPs, product evolution, and environments where requirements shift based on market response.</p><ul class="service-list"><li>Sprint planning &amp; retrospectives</li><li>Daily standups &amp; async updates</li><li>Continuous integration &amp; delivery</li><li>Backlog grooming &amp; prioritization</li></ul></div><div class="card"><h3>Waterfall &amp; Structured</h3><p>Full scope definition upfront with gated milestones. Best suited for compliance-heavy systems, fixed-budget builds, and integrations where downstream dependencies are rigid.</p><ul class="service-list"><li>Requirements sign-off &amp; traceability</li><li>Phased design, build, test, deploy</li><li>Formal change control process</li><li>Documentation-driven handoff</li></ul></div></div><div class="service-block"><h4>Quality Assurance</h4><p>Automated testing is not an afterthought. Unit, integration, and end-to-end tests are written as features are built, maintaining coverage thresholds and running full suites in CI before every merge.</p></div><div class="service-block"><h4>DevOps Integration</h4><p>Infrastructure is defined as code from day one. Containerized deployments, environment parity, and rollback-ready releases mean your platform stays stable as it scales.</p></div><h2>Pricing Guide</h2><p class="pricing-trust">Most projects begin with a short discovery call to clarify scope, architecture, and timelines.</p><p class="pricing-intro">Transparent starting-from pricing to help with planning. Final quotes are confirmed after a short discovery call and technical scoping session.</p><div class="pricing-grid"><div class="card pricing-card"><h3 class="pricing-title">Starter / Rapid Delivery</h3><div class="pricing-price">R7,000 \u2013 R20,000</div><div class="pricing-unit">Range</div><p class="pricing-description">Lightweight web systems, client onboarding tools, MVPs, prototypes, and simple admin dashboards.</p><p class="pricing-timeline">Delivery: 7\u201314 days</p><ul class="pricing-points"><li>PocketBase-based apps or static frontend</li><li>React or Vue frontend</li><li>Docker + Nginx deployment included</li><li>Basic SEO setup (if public-facing)</li></ul><div class="pricing-foot"><a class="btn-glass" href="/#contact">Start A Project</a></div></div><div class="card pricing-card pricing-card--featured"><div class="pricing-title-row"><h3 class="pricing-title">Pro Full-Stack Platform</h3><span class="pricing-badge">Most Popular</span></div><div class="pricing-price">R110,000</div><div class="pricing-unit">Starting from</div><p class="pricing-description">End-to-end product builds with Vue 3 frontend, Spring Boot backend, secure auth, dashboards, and infrastructure.</p><p class="pricing-timeline">Typically 6-14 weeks depending on scope</p><ul class="pricing-points"><li>Architecture, testing strategy, and CI/CD readiness included.</li><li>Built to ship and scale, not just to demo.</li></ul><div class="pricing-foot"><a class="btn-glass" href="/#contact">Discuss Scope</a></div></div><div class="card pricing-card"><h3 class="pricing-title">AI-Powered and Advanced Tooling</h3><div class="pricing-price">R220,000</div><div class="pricing-unit">Starting from</div><p class="pricing-description">Self-hosted AI systems for real workloads, including TTS pipelines, agent workflows, and LLM integrations.</p><p class="pricing-timeline">Typically 8-16 weeks, scoped after technical discovery</p><ul class="pricing-points"><li>Designed for security, performance, and long-term maintainability.</li><li>Final quote is set after discovery and technical scoping.</li></ul><div class="pricing-foot"><a class="btn-glass" href="/#contact">Plan AI Build</a></div></div></div><div class="pricing-grid" style="${ssrRenderStyle({ "margin-top": "24px" })}"><div class="card pricing-card"><h3 class="pricing-title">Maintenance and Retainers</h3><div class="pricing-price">R850</div><div class="pricing-unit">Monthly, from</div><p class="pricing-description">Two ongoing support levels so you can match budget to operational needs.</p><ul class="pricing-points"><li>Light Hosting: from R850/month for hosting, patches, and uptime checks.</li><li>Managed Retainer: from R4,500/month for CI/CD, monitoring, fixes, and continuous improvement.</li></ul><div class="pricing-foot"><a class="btn-glass" href="/#contact">Choose Support Tier</a></div></div><div class="card pricing-card"><h3 class="pricing-title">AI Architecture / Consulting</h3><div class="pricing-price">R10,000</div><div class="pricing-unit">Starting from</div><p class="pricing-description">Half-day to full-day working sessions for teams making serious AI or platform decisions.</p><p class="pricing-timeline">Half-day or full-day sessions, booked in advance</p><ul class="pricing-points"><li>Platform reviews, workflow design, and technical roadmapping.</li><li>Best before you build, not after something breaks.</li></ul><div class="pricing-foot"><a class="btn-glass" href="/#contact">Book Session</a></div></div><div class="card pricing-card"><h3 class="pricing-title">Custom MCP and Agent Integrations</h3><div class="pricing-price">R55,000</div><div class="pricing-unit">Starting from</div><p class="pricing-description">Custom MCP servers that connect AI agents to CMS, CRM, databases, and internal tooling.</p><p class="pricing-timeline">Typically 3-6 weeks per integration</p><ul class="pricing-points"><li>Role-safe pipelines with controlled data sync across systems.</li><li>Multi-system automation without fragile glue-code sprawl.</li></ul><div class="pricing-foot"><a class="btn-glass" href="/#contact">Design Integration</a></div></div></div><p class="pricing-note"><strong>Note:</strong> prices are starting-from benchmarks for South Africa/Cape Town market context. Final pricing depends on scope, delivery timeline, integrations, and support requirements.</p><h2>How NemesisNet Scopes Projects</h2><p class="section-intro">Every system is classified based on complexity, business risk, data sensitivity, and workflow requirements. NemesisNet builds right-sized solutions \u2014 no overengineering, no underbuilding.</p><div class="tiers-grid"><div class="card tier-card tier-1"><div class="tier-header"><span class="tier-badge tier-badge-green">Tier 1</span><h3>Lightweight Systems</h3></div><p class="tier-desc">Fast build for MVPs, internal tools, automation, and simple workflows.</p><div class="tier-details"><div class="tier-detail"><strong>Stack</strong><span>Vue/React + PocketBase + SQLite</span></div><div class="tier-detail"><strong>Complexity</strong><span>Low \u2014 single dev maintainable</span></div><div class="tier-detail"><strong>Delivery</strong><span>1\u20135 days</span></div><div class="tier-detail"><strong>Examples</strong><span>Forms, Dashboards, CRUD, Simple Auth</span></div></div></div><div class="card tier-card tier-2"><div class="tier-header"><span class="tier-badge tier-badge-yellow">Tier 2</span><h3>Business Systems</h3></div><p class="tier-desc">Standard engineering for multi-user tools, permissions, and API integrations.</p><div class="tier-details"><div class="tier-detail"><strong>Stack</strong><span>Spring Boot + MySQL/PostgreSQL + Vue</span></div><div class="tier-detail"><strong>Complexity</strong><span>Medium \u2014 structured architecture</span></div><div class="tier-detail"><strong>Delivery</strong><span>1\u20133 weeks</span></div><div class="tier-detail"><strong>Examples</strong><span>Client Portals, CMS, Business Tools</span></div></div></div><div class="card tier-card tier-3"><div class="tier-header"><span class="tier-badge tier-badge-red">Tier 3</span><h3>Core / Enterprise</h3></div><p class="tier-desc">High complexity for financial systems, CRMs, and scalable enterprise platforms.</p><div class="tier-details"><div class="tier-detail"><strong>Stack</strong><span>Spring Boot DDD + Redis + Message Queues</span></div><div class="tier-detail"><strong>Complexity</strong><span>High \u2014 full CI/CD, microservices</span></div><div class="tier-detail"><strong>Delivery</strong><span>1\u20133+ months</span></div><div class="tier-detail"><strong>Examples</strong><span>CRMs, Billing, Financial Systems</span></div></div></div></div><div class="section-cta"><a href="https://scope.nemesisnet.co.za" target="_blank" class="btn-glass">Not sure which tier fits? \u2192 Let&#39;s scope it together</a></div><h2>Delivery Rhythm</h2><p class="section-intro">A structured process keeps delivery predictable and technical risk visible. Discovery comes first \u2014 requirements, constraints, and success metrics are mapped before any code is written. Architecture and scope are locked early to protect timelines. Build happens with testing and CI/CD from day one, with regular checkpoints to keep delivery aligned with intent. Deployment includes hardening, monitoring, and optional support retainers for stability after launch. Without proper scoping, projects drift into scope creep, deadline slips, and expensive rework. NemesisNet&#39;s process prevents that.</p><div class="section-cta"><a href="https://scope.nemesisnet.co.za" target="_blank" class="btn-glass">Ready to scope your project? \u2192</a></div><div class="back-link">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2190 Back to Home`);
          } else {
            return [
              createTextVNode("\u2190 Back to Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DgCzhJa6.mjs.map
