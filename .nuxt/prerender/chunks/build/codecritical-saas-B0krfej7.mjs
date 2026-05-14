import { _ as _sfc_main$1 } from './PageHeader-B7BZQHfz.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BtQCpApt.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './composables-DCWJSWVM.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/ufo/dist/index.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/destr/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/ofetch/dist/node.mjs';
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
  __name: "codecritical-saas",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "CodeCritical SaaS | NemesisNet",
      meta: [
        { name: "description", content: "Enterprise-grade security scanning SaaS with multi-tenant architecture, JWT auth, and async scan pipeline." }
      ],
      link: [
        { rel: "canonical", href: "https://dev.nemesisnet.co.za/projects/codecritical-saas" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-page" }, _attrs))} data-v-616ea969>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "CodeCritical SaaS",
        subtitle: "Enterprise-grade security scanning SaaS with multi-tenant architecture."
      }, null, _parent));
      _push(`<div class="detail-container" data-v-616ea969><div class="detail-main" data-v-616ea969><img${ssrRenderAttr("src", "/images/projects/codecritical-saas/optimized/hero.webp")} class="detail-image" alt="CodeCritical SaaS" data-v-616ea969><h2 data-v-616ea969>The Challenge</h2><p data-v-616ea969>In large codebases, technical debt accumulates rapidly. Manual code reviews are time-consuming and often miss subtle structural issues that lead to long-term maintainability problems. Enterprise teams needed a unified platform that combines security scanning, static analysis, and architecture validation.</p><h2 data-v-616ea969>The Solution</h2><p data-v-616ea969>CodeCritical SaaS is a security scanning platform that combines container vulnerability scanning, static analysis, and custom architecture rules into a single platform. It gives developers immediate visibility into vulnerabilities, code quality issues, and architectural drift before they reach production.</p><h2 data-v-616ea969>Technical Implementation</h2><p data-v-616ea969>The platform uses a Spring Boot backend with a modern Java runtime, fronted by a Vue 3 SPA with Pinia state management. The system implements shared-database multi-tenancy with row-level security using tenant-aware partitioning. Authentication uses custom JWT handlers with refresh token rotation and role-based access control.</p><h3 data-v-616ea969>Architecture Highlights</h3><ul class="arch-list" data-v-616ea969><li data-v-616ea969><strong data-v-616ea969>Edge Layer:</strong> Nginx Gateway handles routing and SSL termination</li><li data-v-616ea969><strong data-v-616ea969>Application Layer:</strong> Vue 3 frontend + Spring Boot API</li><li data-v-616ea969><strong data-v-616ea969>Data Layer:</strong> PostgreSQL relational store + Redis cache layer</li><li data-v-616ea969><strong data-v-616ea969>Multi-Tenancy:</strong> Shared database with tenant isolation and row-level security</li><li data-v-616ea969><strong data-v-616ea969>Authentication:</strong> Stateless JWTs with role-based claims</li><li data-v-616ea969><strong data-v-616ea969>Scan Pipeline:</strong> Redis-backed queue with async job processing</li><li data-v-616ea969><strong data-v-616ea969>Cache Strategy:</strong> Write-through pattern with configurable TTL for scan results and dashboard stats</li></ul><h3 data-v-616ea969>Frontend Architecture</h3><p data-v-616ea969>The Vue 3 frontend uses a composite navigation header with component-based architecture. The Admin Hub provides admin sections for user management, request handling, scan monitoring, capacity planning, and feedback. A platform banner system enables announcement management.</p><div class="cta-wrapper" data-v-616ea969><a href="https://github.com/NemesisGuy/CodeCritical" target="_blank" class="btn-glass" data-v-616ea969>View Source</a></div><div class="next-project" data-v-616ea969>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/onthegorentals",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Next Project \u2192 OntheGoRentals`);
          } else {
            return [
              createTextVNode("Next Project \u2192 OntheGoRentals")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="detail-sidebar" data-v-616ea969><div class="sidebar-card" data-v-616ea969><h4 data-v-616ea969>Project Details</h4><ul class="sidebar-list" data-v-616ea969><li data-v-616ea969><span data-v-616ea969>Timeline:</span> <strong data-v-616ea969>Stable Release</strong></li><li data-v-616ea969><span data-v-616ea969>Stack:</span> <strong data-v-616ea969>Java, Spring Boot, Vue 3, PostgreSQL, Redis, Nginx</strong></li><li data-v-616ea969><span data-v-616ea969>Role:</span> <strong data-v-616ea969>Lead Engineer</strong></li><li data-v-616ea969><span data-v-616ea969>Status:</span> <strong data-v-616ea969>In Development</strong></li></ul></div><div class="sidebar-card" data-v-616ea969><h4 data-v-616ea969>Components</h4><ul class="sidebar-list" data-v-616ea969><li data-v-616ea969><span data-v-616ea969>Gateway:</span> <strong data-v-616ea969>Nginx</strong></li><li data-v-616ea969><span data-v-616ea969>Frontend:</span> <strong data-v-616ea969>Vue3 SPA</strong></li><li data-v-616ea969><span data-v-616ea969>Backend:</span> <strong data-v-616ea969>Spring Boot</strong></li><li data-v-616ea969><span data-v-616ea969>Database:</span> <strong data-v-616ea969>PostgreSQL</strong></li><li data-v-616ea969><span data-v-616ea969>Cache:</span> <strong data-v-616ea969>Redis</strong></li></ul></div><div class="sidebar-card" data-v-616ea969><h4 data-v-616ea969>Quick Links</h4><div class="quick-links" data-v-616ea969>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2190 Back to Portfolio`);
          } else {
            return [
              createTextVNode("\u2190 Back to Portfolio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://github.com/NemesisGuy/CodeCritical" target="_blank" class="btn-glass" data-v-616ea969>View Source</a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/codecritical-saas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const codecriticalSaas = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-616ea969"]]);

export { codecriticalSaas as default };
//# sourceMappingURL=codecritical-saas-B0krfej7.mjs.map
