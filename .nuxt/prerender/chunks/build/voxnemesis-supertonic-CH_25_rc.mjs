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
  __name: "voxnemesis-supertonic",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "VoxNemesis Supertonic | NemesisNet",
      meta: [
        { name: "description", content: "Local-first, GPU-aware TTS browser extension with 100% privacy." }
      ],
      link: [
        { rel: "canonical", href: "https://dev.nemesisnet.co.za/projects/voxnemesis-supertonic" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-page" }, _attrs))} data-v-ae9f6b30>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "VoxNemesis Supertonic",
        subtitle: "Local-first, GPU-aware TTS browser extension with 100% privacy."
      }, null, _parent));
      _push(`<div class="detail-container" data-v-ae9f6b30><div class="detail-main" data-v-ae9f6b30><img${ssrRenderAttr("src", "/images/projects/voxnemesis-supertonic/original/hero.png")} class="detail-image" alt="VoxNemesis Supertonic" data-v-ae9f6b30><h2 data-v-ae9f6b30>The Challenge</h2><p data-v-ae9f6b30>High-quality text-to-speech usually requires cloud APIs, sending user data to third-party servers. Users needed a private, fast, and truly local alternative that runs entirely in the browser without compromising on audio quality or latency.</p><h2 data-v-ae9f6b30>The Solution</h2><p data-v-ae9f6b30>VoxNemesis Supertonic is a Chrome Extension (Manifest V3) that runs the Kokoro TTS model directly in the browser using ONNX Runtime Web. It achieves sub-second synthesis times with WebGPU acceleration, while falling back gracefully to WASM for compatibility. No data ever leaves the user&#39;s machine.</p><h2 data-v-ae9f6b30>Technical Implementation</h2><p data-v-ae9f6b30>The extension uses the Offscreen API to create a dedicated audio engine that persists even when the popup closes. It implements a watchdog pattern to handle race conditions between the popup and background worker during initial model download. The architecture includes intelligent backend switching \u2014 attempting WebGPU first, then gracefully degrading to WASM with SIMD for broader hardware compatibility.</p><div class="cta-wrapper" data-v-ae9f6b30><a href="https://github.com/NemesisGuy/voxnemesis-supertonic-extension" target="_blank" class="btn-glass" data-v-ae9f6b30>View Source</a><a href="https://blog.nemesisnet.co.za/voxnemesis-supertonic-building-a-local-first-gpu-aware-tts-browser-extension/" target="_blank" class="btn-glass" data-v-ae9f6b30>Read Build Log</a></div><div class="next-project" data-v-ae9f6b30>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/kokoro-tts",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Next Project \u2192 Kokoro TTS`);
          } else {
            return [
              createTextVNode("Next Project \u2192 Kokoro TTS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="detail-sidebar" data-v-ae9f6b30><div class="sidebar-card" data-v-ae9f6b30><h4 data-v-ae9f6b30>Project Details</h4><ul class="sidebar-list" data-v-ae9f6b30><li data-v-ae9f6b30><span data-v-ae9f6b30>Timeline:</span> <strong data-v-ae9f6b30>v0.2.0 Released</strong></li><li data-v-ae9f6b30><span data-v-ae9f6b30>Stack:</span> <strong data-v-ae9f6b30>JavaScript, ONNX Runtime Web, WebGPU, WASM, Chrome Extension API</strong></li><li data-v-ae9f6b30><span data-v-ae9f6b30>Role:</span> <strong data-v-ae9f6b30>Architect &amp; Developer</strong></li><li data-v-ae9f6b30><span data-v-ae9f6b30>Status:</span> <strong data-v-ae9f6b30>Live</strong></li></ul></div><div class="sidebar-card" data-v-ae9f6b30><h4 data-v-ae9f6b30>Quick Links</h4><div class="quick-links" data-v-ae9f6b30>`);
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
      _push(`<a href="https://github.com/NemesisGuy/voxnemesis-supertonic-extension" target="_blank" class="btn-glass" data-v-ae9f6b30>View Source</a><a href="https://blog.nemesisnet.co.za/voxnemesis-supertonic-building-a-local-first-gpu-aware-tts-browser-extension/" target="_blank" class="btn-glass" data-v-ae9f6b30>Read Build Log</a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/voxnemesis-supertonic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const voxnemesisSupertonic = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ae9f6b30"]]);

export { voxnemesisSupertonic as default };
//# sourceMappingURL=voxnemesis-supertonic-CH_25_rc.mjs.map
