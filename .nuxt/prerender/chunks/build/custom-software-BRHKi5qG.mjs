import { _ as _sfc_main$1 } from './PageHeader-B7BZQHfz.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BtQCpApt.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue/server-renderer/index.mjs';
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
  __name: "custom-software",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Custom Software Development | NemesisNet",
      meta: [
        { name: "description", content: "Enterprise-grade backend systems and high-performance full-stack applications." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-page" }, _attrs))} data-v-47198502>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "Custom Software Development",
        subtitle: "Enterprise-grade backend systems and high-performance full-stack applications."
      }, null, _parent));
      _push(`<div class="detail-container" data-v-47198502><div class="detail-main" data-v-47198502><h2 data-v-47198502>The Offering</h2><p data-v-47198502>NemesisNet specializes in building custom software that solves specific business bottlenecks. Generic tools are not the product. NemesisNet architects systems that integrate perfectly into your existing workflows and scale as your user base grows.</p><h2 data-v-47198502>Core Capabilities</h2><div class="service-feature" data-v-47198502><h3 data-v-47198502>Full-Stack Mastery</h3><p data-v-47198502>Developing responsive, high-performance frontends using Vue.js and React, paired with robust backend architectures.</p></div><div class="service-feature" data-v-47198502><h3 data-v-47198502>REST API Engineering</h3><p data-v-47198502>Designing secure, scalable, and well-documented APIs using Java Spring Boot, ensuring seamless integration with third-party services.</p></div><div class="service-feature" data-v-47198502><h3 data-v-47198502>Secure Authentication</h3><p data-v-47198502>Implementing industry-standard security protocols including JWT, RBAC, and OAuth2 to protect your sensitive data.</p></div><div class="service-feature" data-v-47198502><h3 data-v-47198502>Database Architecture</h3><p data-v-47198502>Designing optimized schemas for MySQL, PostgreSQL, and SQLite to ensure data integrity and lightning-fast query performance.</p></div> <h2 data-v-47198502>Relevant Projects</h2><div class="relevant-projects" data-v-47198502>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/onthegorentals",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`OntheGoRentals`);
          } else {
            return [
              createTextVNode("OntheGoRentals")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/forkmyfolio",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ForkMyFolio`);
          } else {
            return [
              createTextVNode("ForkMyFolio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="cta-wrapper" data-v-47198502>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#contact",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Discuss This Service \u2192`);
          } else {
            return [
              createTextVNode("Discuss This Service \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="detail-sidebar" data-v-47198502><div class="sidebar-card" data-v-47198502><h4 data-v-47198502>Service Details</h4><ul class="sidebar-list" data-v-47198502><li data-v-47198502><span data-v-47198502>Delivery:</span> <strong data-v-47198502>2-12 Weeks</strong></li><li data-v-47198502><span data-v-47198502>Focus:</span> <strong data-v-47198502>Performance &amp; Scale</strong></li><li data-v-47198502><span data-v-47198502>Tiers:</span> <strong data-v-47198502>Tier 2 / Tier 3</strong></li><li data-v-47198502><span data-v-47198502>Pricing:</span> <strong data-v-47198502>Custom Quote</strong></li></ul></div><div class="sidebar-card" data-v-47198502><h4 data-v-47198502>Quick Links</h4><div class="quick-links" data-v-47198502>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2190 Back to Services`);
          } else {
            return [
              createTextVNode("\u2190 Back to Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/custom-software.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customSoftware = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-47198502"]]);

export { customSoftware as default };
//# sourceMappingURL=custom-software-BRHKi5qG.mjs.map
