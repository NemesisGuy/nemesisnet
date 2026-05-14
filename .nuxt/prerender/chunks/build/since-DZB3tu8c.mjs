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
  __name: "since",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Since | NemesisNet",
      meta: [
        { name: "description", content: "Temporal claim registry \u2014 track claims, verify outcomes, hold people accountable." }
      ],
      link: [
        { rel: "canonical", href: "https://dev.nemesisnet.co.za/projects/since" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-page" }, _attrs))} data-v-dec6564a>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "Since",
        subtitle: "Temporal claim registry \u2014 track claims, verify outcomes, hold people accountable."
      }, null, _parent));
      _push(`<div class="detail-container" data-v-dec6564a><div class="detail-main" data-v-dec6564a><img${ssrRenderAttr("src", "/images/projects/since/optimized/hero.webp")} class="detail-image" alt="Since" data-v-dec6564a><h2 data-v-dec6564a>The Challenge</h2><p data-v-dec6564a>Claims, predictions, and deadlines are easy to make but hard to track. Without a system to record and verify outcomes over time, accountability fades. People forget what was said, when it was said, and whether it actually came true.</p><h2 data-v-dec6564a>The Solution</h2><p data-v-dec6564a>Since is a self-hosted temporal accountability engine that lets you register predictions, record past events, and set deadlines \u2014 then verify whether they came true. It ingests claims, attaches evidence, opens disputes, and tracks outcomes over time.</p><h2 data-v-dec6564a>Technical Implementation</h2><p data-v-dec6564a>The platform uses a React frontend with Tailwind CSS and Motion animations, served via Vite SSR with Express. PocketBase provides the backend database and authentication. The data model supports three core collections with a REST API layer handling data operations.</p><h3 data-v-dec6564a>Architecture Highlights</h3><ul class="arch-list" data-v-dec6564a><li data-v-dec6564a><strong data-v-dec6564a>Frontend:</strong> React SPA with Vite SSR middleware</li><li data-v-dec6564a><strong data-v-dec6564a>Styling:</strong> Tailwind CSS with Motion animations</li><li data-v-dec6564a><strong data-v-dec6564a>Backend:</strong> Express server with REST API</li><li data-v-dec6564a><strong data-v-dec6564a>Database:</strong> Self-hosted backend with relational store</li><li data-v-dec6564a><strong data-v-dec6564a>Auth:</strong> Built-in authentication with token-based sessions</li><li data-v-dec6564a><strong data-v-dec6564a>Data Model:</strong> Claims, evidence, and disputes with outcome tracking</li><li data-v-dec6564a><strong data-v-dec6564a>Categories:</strong> Multiple claim types for different contexts</li><li data-v-dec6564a><strong data-v-dec6564a>Outcomes:</strong> Flexible resolution states for claim verification</li></ul><h3 data-v-dec6564a>API</h3><p data-v-dec6564a>The REST API handles data operations for claims, evidence, and disputes. Users can create claims, attach evidence links, raise disputes, and resolve outcomes. All operations are authenticated via the backend.</p><div class="cta-wrapper" data-v-dec6564a><a href="https://github.com/NemesisGuy/Since" target="_blank" class="btn-glass" data-v-dec6564a>View Source</a><a href="https://since.nemesisnet.co.za" target="_blank" class="btn-glass" data-v-dec6564a>Live Demo</a></div><div class="next-project" data-v-dec6564a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/voxnemesis-supertonic",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Next Project \u2192 VoxNemesis Supertonic`);
          } else {
            return [
              createTextVNode("Next Project \u2192 VoxNemesis Supertonic")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="detail-sidebar" data-v-dec6564a><div class="sidebar-card" data-v-dec6564a><h4 data-v-dec6564a>Project Details</h4><ul class="sidebar-list" data-v-dec6564a><li data-v-dec6564a><span data-v-dec6564a>Stack:</span> <strong data-v-dec6564a>React, Tailwind CSS, Express, PocketBase, Vite</strong></li><li data-v-dec6564a><span data-v-dec6564a>Role:</span> <strong data-v-dec6564a>Architect &amp; Developer</strong></li><li data-v-dec6564a><span data-v-dec6564a>Status:</span> <strong data-v-dec6564a>Live</strong></li><li data-v-dec6564a><span data-v-dec6564a>Deploy:</span> <strong data-v-dec6564a>Docker Compose</strong></li></ul></div><div class="sidebar-card" data-v-dec6564a><h4 data-v-dec6564a>Components</h4><ul class="sidebar-list" data-v-dec6564a><li data-v-dec6564a><span data-v-dec6564a>Frontend:</span> <strong data-v-dec6564a>React + Vite SSR</strong></li><li data-v-dec6564a><span data-v-dec6564a>Server:</span> <strong data-v-dec6564a>Express</strong></li><li data-v-dec6564a><span data-v-dec6564a>Database:</span> <strong data-v-dec6564a>PocketBase</strong></li><li data-v-dec6564a><span data-v-dec6564a>Styling:</span> <strong data-v-dec6564a>Tailwind CSS</strong></li><li data-v-dec6564a><span data-v-dec6564a>Deploy:</span> <strong data-v-dec6564a>Docker</strong></li></ul></div><div class="sidebar-card" data-v-dec6564a><h4 data-v-dec6564a>Quick Links</h4><div class="quick-links" data-v-dec6564a>`);
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
      _push(`<a href="https://github.com/NemesisGuy/Since" target="_blank" class="btn-glass" data-v-dec6564a>View Source</a><a href="https://since.nemesisnet.co.za" target="_blank" class="btn-glass" data-v-dec6564a>Live Demo</a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/since.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const since = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dec6564a"]]);

export { since as default };
//# sourceMappingURL=since-DZB3tu8c.mjs.map
