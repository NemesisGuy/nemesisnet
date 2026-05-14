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
  __name: "onthegorentals",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "OntheGoRentals | NemesisNet",
      meta: [
        { name: "description", content: "A full-stack car rental platform for seamless fleet management." }
      ],
      link: [
        { rel: "canonical", href: "https://dev.nemesisnet.co.za/projects/onthegorentals" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-page" }, _attrs))} data-v-49894f27>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "OntheGoRentals",
        subtitle: "A full-stack car rental platform for seamless fleet management."
      }, null, _parent));
      _push(`<div class="detail-container" data-v-49894f27><div class="detail-main" data-v-49894f27><img${ssrRenderAttr("src", "/images/projects/onthegorentals/optimized/hero.webp")} class="detail-image" alt="OntheGoRentals" data-v-49894f27><h2 data-v-49894f27>The Challenge</h2><p data-v-49894f27>Managing a car rental fleet requires a complex intersection of user-facing booking flows and heavy-duty admin backends. The goal was to create a system that handles real-time availability, diverse user roles, and secure payment/auth flows without friction.</p><h2 data-v-49894f27>The Solution</h2><p data-v-49894f27>OntheGoRentals provides a unified platform for both customers and administrators. Customers enjoy a smooth Vue.js booking experience, while administrators have a powerful dashboard to manage fleet status, user roles, and detailed analytics on rental trends.</p><h2 data-v-49894f27>Technical Implementation</h2><p data-v-49894f27>The system is powered by a Java Spring Boot backend, utilizing a robust relational database for rental history and vehicle tracking. Security is handled via JWT authentication, ensuring a seamless but secure login experience. The frontend is a highly responsive Vue.js application optimized for mobile and desktop.</p><div class="cta-wrapper" data-v-49894f27><a href="https://github.com/NemesisGuy/OnTheGoRentals" target="_blank" class="btn-glass" data-v-49894f27>View Source</a><a href="https://otgr.nemesisnet.co.za" target="_blank" class="btn-glass" data-v-49894f27>Live Demo</a></div><div class="next-project" data-v-49894f27>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/codecritical",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Next Project \u2192 CodeCritical`);
          } else {
            return [
              createTextVNode("Next Project \u2192 CodeCritical")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="detail-sidebar" data-v-49894f27><div class="sidebar-card" data-v-49894f27><h4 data-v-49894f27>Project Details</h4><ul class="sidebar-list" data-v-49894f27><li data-v-49894f27><span data-v-49894f27>Timeline:</span> <strong data-v-49894f27>8 Weeks</strong></li><li data-v-49894f27><span data-v-49894f27>Stack:</span> <strong data-v-49894f27>Java, Spring Boot, Vue, MySQL</strong></li><li data-v-49894f27><span data-v-49894f27>Role:</span> <strong data-v-49894f27>Full-Stack Lead</strong></li><li data-v-49894f27><span data-v-49894f27>Status:</span> <strong data-v-49894f27>Live</strong></li></ul></div><div class="sidebar-card" data-v-49894f27><h4 data-v-49894f27>Quick Links</h4><div class="quick-links" data-v-49894f27>`);
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
      _push(`<a href="https://github.com/NemesisGuy/OnTheGoRentals" target="_blank" class="btn-glass" data-v-49894f27>View Source</a><a href="https://otgr.nemesisnet.co.za" target="_blank" class="btn-glass" data-v-49894f27>Live Demo</a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/onthegorentals.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const onthegorentals = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-49894f27"]]);

export { onthegorentals as default };
//# sourceMappingURL=onthegorentals-BK_NxHvZ.mjs.map
