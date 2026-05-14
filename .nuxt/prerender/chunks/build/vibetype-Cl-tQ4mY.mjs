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
  __name: "vibetype",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Vibe-Type | NemesisNet",
      meta: [
        { name: "description", content: "Experimental AI-powered coding and typing assistant." }
      ],
      link: [
        { rel: "canonical", href: "https://dev.nemesisnet.co.za/projects/vibetype" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-page" }, _attrs))} data-v-b44457c5>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "Vibe-Type",
        subtitle: "Experimental AI-powered coding and typing assistant."
      }, null, _parent));
      _push(`<div class="detail-container" data-v-b44457c5><div class="detail-main" data-v-b44457c5><img${ssrRenderAttr("src", "/images/projects/vibetype/optimized/hero.webp")} class="detail-image" alt="Vibe-Type" data-v-b44457c5><h2 data-v-b44457c5>The Challenge</h2><p data-v-b44457c5>Coding and writing often involve a mental friction between thought and typing. Standard keyboards are a bottleneck for high-speed conceptualization, and existing voice-to-text tools are too generic for technical coding workflows.</p><h2 data-v-b44457c5>The Solution</h2><p data-v-b44457c5>Vibe-Type is an experimental tool that integrates AI-powered smart typing and voice support. It allows developers to &quot;vibe&quot; their way through code, using voice and AI suggestions to accelerate the writing process without losing the precision required for syntax.</p><h2 data-v-b44457c5>Technical Implementation</h2><p data-v-b44457c5>Implemented as a local-first assistant, Vibe-Type uses specialized prompts to translate natural language into code snippets and structured text. It focuses on low-latency processing to ensure that the assistant feels like a natural extension of the user&#39;s typing rhythm.</p><div class="cta-wrapper" data-v-b44457c5><a href="https://github.com/NemesisGuy/Vibe-Type" target="_blank" class="btn-glass" data-v-b44457c5>View Source</a><a href="https://blog.nemesisnet.co.za/vibetype-building-a-local-first-voice-coding-companion/" target="_blank" class="btn-glass" data-v-b44457c5>Deep Dive</a></div><div class="next-project" data-v-b44457c5>`);
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
      _push(`</div></div><div class="detail-sidebar" data-v-b44457c5><div class="sidebar-card" data-v-b44457c5><h4 data-v-b44457c5>Project Details</h4><ul class="sidebar-list" data-v-b44457c5><li data-v-b44457c5><span data-v-b44457c5>Timeline:</span> <strong data-v-b44457c5>Ongoing</strong></li><li data-v-b44457c5><span data-v-b44457c5>Stack:</span> <strong data-v-b44457c5>Python, OpenAI API, Local LLMs</strong></li><li data-v-b44457c5><span data-v-b44457c5>Role:</span> <strong data-v-b44457c5>R&amp;D Lead</strong></li><li data-v-b44457c5><span data-v-b44457c5>Status:</span> <strong data-v-b44457c5>Experimental</strong></li></ul></div><div class="sidebar-card" data-v-b44457c5><h4 data-v-b44457c5>Quick Links</h4><div class="quick-links" data-v-b44457c5>`);
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
      _push(`<a href="https://github.com/NemesisGuy/Vibe-Type" target="_blank" class="btn-glass" data-v-b44457c5>View Source</a><a href="https://blog.nemesisnet.co.za/vibetype-building-a-local-first-voice-coding-companion/" target="_blank" class="btn-glass" data-v-b44457c5>Deep Dive</a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/vibetype.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vibetype = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b44457c5"]]);

export { vibetype as default };
//# sourceMappingURL=vibetype-Cl-tQ4mY.mjs.map
