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
  __name: "infrastructure",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Infrastructure Engineering | NemesisNet",
      meta: [
        { name: "description", content: "High-performance backends and production-ready AI runtimes." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-page" }, _attrs))} data-v-d7693572>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "Infrastructure Engineering",
        subtitle: "High-performance backends and production-ready AI runtimes."
      }, null, _parent));
      _push(`<div class="detail-container" data-v-d7693572><div class="detail-main" data-v-d7693572><h2 data-v-d7693572>The Offering</h2><p data-v-d7693572>Infrastructure is the foundation of every successful digital product. NemesisNet specializes in building the &quot;plumbing&quot; that allows your application to be fast, secure, and virtually indestructible.</p><h2 data-v-d7693572>Infrastructure Expertise</h2><div class="service-feature" data-v-d7693572><h3 data-v-d7693572>Backend Performance</h3><p data-v-d7693572>Implementing Redis caching and queue patterns to handle massive traffic spikes without breaking a sweat.</p></div><div class="service-feature" data-v-d7693572><h3 data-v-d7693572>Dockerized Ecosystems</h3><p data-v-d7693572>Creating immutable infrastructure with Docker and Docker Compose, ensuring your app runs exactly the same on your laptop as it does in production.</p></div><div class="service-feature" data-v-d7693572><h3 data-v-d7693572>Nginx Edge Control</h3><p data-v-d7693572>Professional reverse proxy setups for SSL termination, load balancing, and optimized content delivery.</p></div><div class="service-feature" data-v-d7693572><h3 data-v-d7693572>AI Runtimes</h3><p data-v-d7693572>Deploying local AI models and TTS pipelines for privacy and speed, bypassing expensive cloud dependencies.</p></div> <h2 data-v-d7693572>Relevant Projects</h2><div class="relevant-projects" data-v-d7693572>`);
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
        to: "/projects/wordpress-mcp",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`WordPress MCP`);
          } else {
            return [
              createTextVNode("WordPress MCP")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="cta-wrapper" data-v-d7693572>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#contact",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Secure Your Infra`);
          } else {
            return [
              createTextVNode("Secure Your Infra")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="detail-sidebar" data-v-d7693572><div class="sidebar-card" data-v-d7693572><h4 data-v-d7693572>Service Details</h4><ul class="sidebar-list" data-v-d7693572><li data-v-d7693572><span data-v-d7693572>Delivery:</span> <strong data-v-d7693572>1-6 Weeks</strong></li><li data-v-d7693572><span data-v-d7693572>Focus:</span> <strong data-v-d7693572>Uptime &amp; Speed</strong></li><li data-v-d7693572><span data-v-d7693572>Tiers:</span> <strong data-v-d7693572>Tier 1 / Tier 2</strong></li><li data-v-d7693572><span data-v-d7693572>Pricing:</span> <strong data-v-d7693572>Custom Quote</strong></li></ul></div><div class="sidebar-card" data-v-d7693572><h4 data-v-d7693572>Quick Links</h4><div class="quick-links" data-v-d7693572>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/infrastructure.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const infrastructure = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d7693572"]]);

export { infrastructure as default };
//# sourceMappingURL=infrastructure-B2USv-Tk.mjs.map
