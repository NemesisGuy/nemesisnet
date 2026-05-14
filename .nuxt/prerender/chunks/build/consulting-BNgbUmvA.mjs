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
  __name: "consulting",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "System Design & Consulting | NemesisNet",
      meta: [
        { name: "description", content: "Technical roadmapping and architectural optimization for scale." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-page" }, _attrs))} data-v-d75c41e2>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "System Design & Consulting",
        subtitle: "Technical roadmapping and architectural optimization for scale."
      }, null, _parent));
      _push(`<div class="detail-container" data-v-d75c41e2><div class="detail-main" data-v-d75c41e2><h2 data-v-d75c41e2>The Offering</h2><p data-v-d75c41e2>The most expensive mistake in software is building the wrong thing. NemesisNet provides high-level technical advisory to ensure your architecture is sound before a single line of code is written.</p><h2 data-v-d75c41e2>Consulting Focus</h2><div class="service-feature" data-v-d75c41e2><h3 data-v-d75c41e2>Architecture Planning</h3><p data-v-d75c41e2>Using Domain-Driven Design (DDD) and Clean Architecture to ensure your system is maintainable and logically structured.</p></div><div class="service-feature" data-v-d75c41e2><h3 data-v-d75c41e2>Performance Optimization</h3><p data-v-d75c41e2>Identifying bottlenecks in your existing stack and implementing high-impact fixes to reduce latency and server costs.</p></div><div class="service-feature" data-v-d75c41e2><h3 data-v-d75c41e2>Codebase Restructuring</h3><p data-v-d75c41e2>Converting legacy &quot;spaghetti code&quot; into modular, testable, and scalable systems without interrupting production.</p></div><div class="service-feature" data-v-d75c41e2><h3 data-v-d75c41e2>Technical Advisory</h3><p data-v-d75c41e2>Strategic guidance on tool selection, cloud migration, and AI integration strategies for your business.</p></div> <h2 data-v-d75c41e2>Relevant Projects</h2><div class="relevant-projects" data-v-d75c41e2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/codecritical",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`CodeCritical`);
          } else {
            return [
              createTextVNode("CodeCritical")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="cta-wrapper" data-v-d75c41e2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#contact",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Book a Session`);
          } else {
            return [
              createTextVNode("Book a Session")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="detail-sidebar" data-v-d75c41e2><div class="sidebar-card" data-v-d75c41e2><h4 data-v-d75c41e2>Service Details</h4><ul class="sidebar-list" data-v-d75c41e2><li data-v-d75c41e2><span data-v-d75c41e2>Format:</span> <strong data-v-d75c41e2>Half/Full Day</strong></li><li data-v-d75c41e2><span data-v-d75c41e2>Focus:</span> <strong data-v-d75c41e2>Strategy &amp; Design</strong></li><li data-v-d75c41e2><span data-v-d75c41e2>Tiers:</span> <strong data-v-d75c41e2>Consulting</strong></li><li data-v-d75c41e2><span data-v-d75c41e2>Pricing:</span> <strong data-v-d75c41e2>From R10,000</strong></li></ul></div><div class="sidebar-card" data-v-d75c41e2><h4 data-v-d75c41e2>Quick Links</h4><div class="quick-links" data-v-d75c41e2>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/consulting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const consulting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d75c41e2"]]);

export { consulting as default };
//# sourceMappingURL=consulting-BNgbUmvA.mjs.map
