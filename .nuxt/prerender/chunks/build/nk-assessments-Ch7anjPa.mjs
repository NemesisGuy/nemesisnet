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
  __name: "nk-assessments",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "NK Assessments | NemesisNet",
      meta: [
        { name: "description", content: "High-speed deployment of a professional client-facing portal." }
      ],
      link: [
        { rel: "canonical", href: "https://dev.nemesisnet.co.za/projects/nk-assessments" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-page" }, _attrs))} data-v-02ac52d7>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "NK Assessments",
        subtitle: "High-speed deployment of a professional client-facing portal."
      }, null, _parent));
      _push(`<div class="detail-container" data-v-02ac52d7><div class="detail-main" data-v-02ac52d7><img${ssrRenderAttr("src", "/images/projects/nk-assessments/optimized/hero.webp")} class="detail-image" alt="NK Assessments" data-v-02ac52d7><h2 data-v-02ac52d7>The Challenge</h2><p data-v-02ac52d7>The client needed a professional, secure, and highly available static portal to present their assessment services. The primary constraint was a critical timeline\u2014the site needed to be live and fully functional in under 48 hours.</p><h2 data-v-02ac52d7>The Solution</h2><p data-v-02ac52d7>I architected a lightweight, static portal using HTML5 and Bootstrap, ensuring maximum load speeds and perfect mobile responsiveness. By leveraging a Dockerized Nginx configuration, I was able to deploy the site to a production environment with zero downtime and instant global availability.</p><h2 data-v-02ac52d7>Technical Implementation</h2><p data-v-02ac52d7>The focus was on stability and speed. I used a clean, semantic HTML structure and optimized assets to ensure a near-perfect Lighthouse score. The Docker deployment allowed for an immutable infrastructure approach, making updates and scaling effortless.</p><div class="cta-wrapper" data-v-02ac52d7><a href="https://github.com/NemesisGuy/NKAssessments" target="_blank" class="btn-glass" data-v-02ac52d7>View Source</a><a href="https://nkassessments.nemesisnet.co.za" target="_blank" class="btn-glass" data-v-02ac52d7>Live Demo</a></div><div class="next-project" data-v-02ac52d7>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/forkmyfolio",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Next Project \u2192 ForkMyFolio`);
          } else {
            return [
              createTextVNode("Next Project \u2192 ForkMyFolio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="detail-sidebar" data-v-02ac52d7><div class="sidebar-card" data-v-02ac52d7><h4 data-v-02ac52d7>Project Details</h4><ul class="sidebar-list" data-v-02ac52d7><li data-v-02ac52d7><span data-v-02ac52d7>Timeline:</span> <strong data-v-02ac52d7>48 Hours</strong></li><li data-v-02ac52d7><span data-v-02ac52d7>Stack:</span> <strong data-v-02ac52d7>HTML5, Bootstrap, Nginx, Docker</strong></li><li data-v-02ac52d7><span data-v-02ac52d7>Role:</span> <strong data-v-02ac52d7>Lead Engineer</strong></li><li data-v-02ac52d7><span data-v-02ac52d7>Status:</span> <strong data-v-02ac52d7>Live</strong></li></ul></div><div class="sidebar-card" data-v-02ac52d7><h4 data-v-02ac52d7>Quick Links</h4><div class="quick-links" data-v-02ac52d7>`);
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
      _push(`<a href="https://github.com/NemesisGuy/NKAssessments" target="_blank" class="btn-glass" data-v-02ac52d7>View Source</a><a href="https://nkassessments.nemesisnet.co.za" target="_blank" class="btn-glass" data-v-02ac52d7>Live Demo</a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/nk-assessments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nkAssessments = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-02ac52d7"]]);

export { nkAssessments as default };
//# sourceMappingURL=nk-assessments-Ch7anjPa.mjs.map
