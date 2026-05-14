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
  __name: "saas-dev",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "SaaS Development | NemesisNet",
      meta: [
        { name: "description", content: "Scalable multi-tenant platforms built for rapid growth." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-page" }, _attrs))} data-v-9e9387d4>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "SaaS Development",
        subtitle: "Scalable multi-tenant platforms built for rapid growth."
      }, null, _parent));
      _push(`<div class="detail-container" data-v-9e9387d4><div class="detail-main" data-v-9e9387d4><h2 data-v-9e9387d4>The Offering</h2><p data-v-9e9387d4>Turning a great idea into a scalable software-as-a-service platform requires more than just a UI. It requires a robust multi-tenant architecture that ensures data isolation, scalable billing, and high availability.</p><h2 data-v-9e9387d4>SaaS Expertise</h2><div class="service-feature" data-v-9e9387d4><h3 data-v-9e9387d4>Multi-Tenant Architecture</h3><p data-v-9e9387d4>Designing systems where a single instance of the software serves multiple customers, each with their own isolated data and configuration.</p></div><div class="service-feature" data-v-9e9387d4><h3 data-v-9e9387d4>Subscription Management</h3><p data-v-9e9387d4>Integrating seamless billing and subscription cycles, ensuring your revenue streams are automated and secure.</p></div><div class="service-feature" data-v-9e9387d4><h3 data-v-9e9387d4>API-First Design</h3><p data-v-9e9387d4>Building the core of your SaaS as a set of APIs, allowing for easy expansion into mobile apps, third-party integrations, and ecosystem growth.</p></div><div class="service-feature" data-v-9e9387d4><h3 data-v-9e9387d4>Cloud-Native Deployment</h3><p data-v-9e9387d4>Leveraging Docker, Nginx, and cloud-neutral infrastructure to ensure your platform is always online and scales horizontally.</p></div> <h2 data-v-9e9387d4>Relevant Projects</h2><div class="relevant-projects" data-v-9e9387d4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/kokoro-tts",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kokoro TTS`);
          } else {
            return [
              createTextVNode("Kokoro TTS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/nk-assessments",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`NK Assessments`);
          } else {
            return [
              createTextVNode("NK Assessments")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="cta-wrapper" data-v-9e9387d4>`);
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
      _push(`</div></div><div class="detail-sidebar" data-v-9e9387d4><div class="sidebar-card" data-v-9e9387d4><h4 data-v-9e9387d4>Service Details</h4><ul class="sidebar-list" data-v-9e9387d4><li data-v-9e9387d4><span data-v-9e9387d4>Delivery:</span> <strong data-v-9e9387d4>4-16 Weeks</strong></li><li data-v-9e9387d4><span data-v-9e9387d4>Focus:</span> <strong data-v-9e9387d4>Scale &amp; Isolation</strong></li><li data-v-9e9387d4><span data-v-9e9387d4>Tiers:</span> <strong data-v-9e9387d4>Tier 2 / Tier 3</strong></li><li data-v-9e9387d4><span data-v-9e9387d4>Pricing:</span> <strong data-v-9e9387d4>Custom Quote</strong></li></ul></div><div class="sidebar-card" data-v-9e9387d4><h4 data-v-9e9387d4>Quick Links</h4><div class="quick-links" data-v-9e9387d4>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/saas-dev.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const saasDev = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9e9387d4"]]);

export { saasDev as default };
//# sourceMappingURL=saas-dev-BDDTYB3t.mjs.map
