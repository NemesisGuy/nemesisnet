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
  __name: "kokoro-tts",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Kokoro TTS Service | NemesisNet",
      meta: [
        { name: "description", content: "Self-hosted, high-fidelity AI text-to-speech infrastructure." }
      ],
      link: [
        { rel: "canonical", href: "https://dev.nemesisnet.co.za/projects/kokoro-tts" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-page" }, _attrs))} data-v-5eceb677>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "Kokoro TTS Service",
        subtitle: "Self-hosted, high-fidelity AI text-to-speech infrastructure."
      }, null, _parent));
      _push(`<div class="detail-container" data-v-5eceb677><div class="detail-main" data-v-5eceb677><img${ssrRenderAttr("src", "/images/projects/kokoro-tts-service/optimized/hero.webp")} class="detail-image" alt="Kokoro TTS Service" data-v-5eceb677><h2 data-v-5eceb677>The Challenge</h2><p data-v-5eceb677>Most high-quality text-to-speech services are locked behind expensive monthly subscriptions and restrictive APIs, with significant latency and zero privacy. For production workloads, a local, low-latency, and high-fidelity alternative was needed.</p><h2 data-v-5eceb677>The Solution</h2><p data-v-5eceb677>The Kokoro TTS Service is a full-stack implementation of the open-source Kokoro engine. I built a custom web interface and API layer that allows users to generate natural-sounding speech synthesis instantly without relying on third-party cloud providers.</p><h2 data-v-5eceb677>Technical Implementation</h2><p data-v-5eceb677>The system uses a Python-based backend to handle the model inference, wrapped in a high-performance API. The frontend is a modern, responsive web interface that allows for real-time audio preview and batch processing. The entire stack is containerized and runs on self-hosted infrastructure, delivering sub-second response times without cloud dependencies.</p><div class="cta-wrapper" data-v-5eceb677><a href="https://github.com/NemesisGuy/Kokoro_TTS_Service" target="_blank" class="btn-glass" data-v-5eceb677>View Source</a><a href="https://kokoro-gui.nemesisnet.co.za" target="_blank" class="btn-glass" data-v-5eceb677>Live Demo</a></div><div class="next-project" data-v-5eceb677>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/wordpress-mcp",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Next Project \u2192 WordPress MCP`);
          } else {
            return [
              createTextVNode("Next Project \u2192 WordPress MCP")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="detail-sidebar" data-v-5eceb677><div class="sidebar-card" data-v-5eceb677><h4 data-v-5eceb677>Project Details</h4><ul class="sidebar-list" data-v-5eceb677><li data-v-5eceb677><span data-v-5eceb677>Timeline:</span> <strong data-v-5eceb677>4 Weeks</strong></li><li data-v-5eceb677><span data-v-5eceb677>Stack:</span> <strong data-v-5eceb677>Python, PyTorch, FastAPI, Vue</strong></li><li data-v-5eceb677><span data-v-5eceb677>Role:</span> <strong data-v-5eceb677>Architect &amp; Developer</strong></li><li data-v-5eceb677><span data-v-5eceb677>Status:</span> <strong data-v-5eceb677>Live</strong></li></ul></div><div class="sidebar-card" data-v-5eceb677><h4 data-v-5eceb677>Quick Links</h4><div class="quick-links" data-v-5eceb677>`);
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
      _push(`<a href="https://github.com/NemesisGuy/Kokoro_TTS_Service" target="_blank" class="btn-glass" data-v-5eceb677>View Source</a><a href="https://kokoro-gui.nemesisnet.co.za" target="_blank" class="btn-glass" data-v-5eceb677>Live Demo</a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/kokoro-tts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kokoroTts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5eceb677"]]);

export { kokoroTts as default };
//# sourceMappingURL=kokoro-tts-BKhEBcDf.mjs.map
