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
  __name: "forkmyfolio",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "ForkMyFolio | NemesisNet",
      meta: [
        { name: "description", content: "The ultimate production-ready personal portfolio management system." }
      ],
      link: [
        { rel: "canonical", href: "https://dev.nemesisnet.co.za/projects/forkmyfolio" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-page" }, _attrs))} data-v-5e4d42fb>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "ForkMyFolio",
        subtitle: "The ultimate production-ready personal portfolio management system."
      }, null, _parent));
      _push(`<div class="detail-container" data-v-5e4d42fb><div class="detail-main" data-v-5e4d42fb><img${ssrRenderAttr("src", "/images/projects/forkmyfolio/optimized/hero.webp")} class="detail-image" alt="ForkMyFolio" data-v-5e4d42fb><h2 data-v-5e4d42fb>The Challenge</h2><p data-v-5e4d42fb>Most developers struggle to keep their portfolios up to date. Manually editing HTML for every new project is tedious, and existing &quot;portfolio builders&quot; are often too generic or lack the technical depth needed to showcase real engineering work.</p><h2 data-v-5e4d42fb>The Solution</h2><p data-v-5e4d42fb>ForkMyFolio is a full-featured management system that treats a portfolio as a dynamic data set. It provides an admin interface for project tracking, skill management, and metadata control, allowing the user to update their entire professional presence in seconds.</p><h2 data-v-5e4d42fb>Technical Implementation</h2><p data-v-5e4d42fb>Built on a Vue frontend backed by a Java Spring Boot API with MySQL persistence and Redis caching. The platform sustains high traffic with low latency on dedicated infrastructure \u2014 no cloud scaling required. Includes dynamic project tracking, skill management, PDF export, and a full backup and restore system.</p><div class="cta-wrapper" data-v-5e4d42fb><a href="https://github.com/NemesisGuy/ForkMyFolio-frontend" target="_blank" class="btn-glass" data-v-5e4d42fb>View Source</a><a href="https://forkmyfolio.nemesisnet.co.za" target="_blank" class="btn-glass" data-v-5e4d42fb>Live Demo</a></div><div class="next-project" data-v-5e4d42fb>`);
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
      _push(`</div></div><div class="detail-sidebar" data-v-5e4d42fb><div class="sidebar-card" data-v-5e4d42fb><h4 data-v-5e4d42fb>Project Details</h4><ul class="sidebar-list" data-v-5e4d42fb><li data-v-5e4d42fb><span data-v-5e4d42fb>Timeline:</span> <strong data-v-5e4d42fb>6 Weeks</strong></li><li data-v-5e4d42fb><span data-v-5e4d42fb>Stack:</span> <strong data-v-5e4d42fb>Vue 3, Spring Boot, Java, MySQL, Redis</strong></li><li data-v-5e4d42fb><span data-v-5e4d42fb>Role:</span> <strong data-v-5e4d42fb>Full-Stack Developer</strong></li><li data-v-5e4d42fb><span data-v-5e4d42fb>Status:</span> <strong data-v-5e4d42fb>Live</strong></li></ul></div><div class="sidebar-card" data-v-5e4d42fb><h4 data-v-5e4d42fb>Quick Links</h4><div class="quick-links" data-v-5e4d42fb>`);
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
      _push(`<a href="https://github.com/NemesisGuy/ForkMyFolio-frontend" target="_blank" class="btn-glass" data-v-5e4d42fb>View Source</a><a href="https://forkmyfolio.nemesisnet.co.za" target="_blank" class="btn-glass" data-v-5e4d42fb>Live Demo</a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/forkmyfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const forkmyfolio = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e4d42fb"]]);

export { forkmyfolio as default };
//# sourceMappingURL=forkmyfolio-buUAy_xM.mjs.map
