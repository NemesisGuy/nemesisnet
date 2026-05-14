import { _ as _sfc_main$1 } from './PageHeader-B7BZQHfz.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BtQCpApt.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue/index.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Projects | NemesisNet",
      meta: [
        { name: "description", content: "Full portfolio of NemesisNet projects: VoxNemesis Supertonic, Kokoro TTS, NK Assessments, ForkMyFolio, WordPress MCP Server, OntheGoRentals, CodeCritical, Vibe-Type, Bored Room Cafe." }
      ],
      link: [
        { rel: "canonical", href: "https://dev.nemesisnet.co.za/projects" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f2b2a971>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "Projects",
        subtitle: "A portfolio of production-grade systems, platforms, and infrastructure builds."
      }, null, _parent));
      _push(`<div class="projects-container" data-v-f2b2a971><main data-v-f2b2a971><section id="projects" data-v-f2b2a971><h2 class="project-group-title" data-v-f2b2a971>AI &amp; TTS</h2><div class="projects-grid" data-v-f2b2a971><div class="card" data-v-f2b2a971><img${ssrRenderAttr("src", "/images/projects/voxnemesis-supertonic/original/hero.png")} alt="VoxNemesis Supertonic" loading="lazy" width="900" height="483" data-v-f2b2a971><h3 data-v-f2b2a971>VoxNemesis Supertonic</h3><p data-v-f2b2a971>A local-first, GPU-aware TTS browser extension that runs entirely in the browser using ONNX Runtime Web with WebGPU acceleration.</p><div class="project-links" data-v-f2b2a971><a class="btn-glass" href="https://github.com/NemesisGuy/voxnemesis-supertonic-extension" target="_blank" data-v-f2b2a971>Source</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn-glass",
        to: "/projects/voxnemesis-supertonic"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Detail`);
          } else {
            return [
              createTextVNode("Detail")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="btn-glass" href="https://blog.nemesisnet.co.za/voxnemesis-supertonic-building-a-local-first-gpu-aware-tts-browser-extension/" target="_blank" data-v-f2b2a971>Blog</a></div></div><div class="card" data-v-f2b2a971><img${ssrRenderAttr("src", "/images/projects/kokoro-tts-service/optimized/hero.webp")} alt="Kokoro TTS Service" loading="lazy" width="900" height="483" data-v-f2b2a971><h3 data-v-f2b2a971>Kokoro TTS Service</h3><p data-v-f2b2a971>A self-hosted AI text-to-speech web service built on top of the open-source Kokoro TTS engine \u2014 enabling natural-sounding speech synthesis via a user-friendly web interface.</p><div class="project-links" data-v-f2b2a971><a class="btn-glass" href="https://github.com/NemesisGuy/Kokoro_TTS_Service" target="_blank" data-v-f2b2a971>Source</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn-glass",
        to: "/projects/kokoro-tts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Detail`);
          } else {
            return [
              createTextVNode("Detail")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="btn-glass" href="https://kokoro-gui.nemesisnet.co.za" target="_blank" data-v-f2b2a971>Live Demo</a></div></div><div class="card" data-v-f2b2a971><img${ssrRenderAttr("src", "/images/projects/vibetype/optimized/hero.webp")} alt="Vibe-Type" loading="lazy" width="900" height="611" data-v-f2b2a971><h3 data-v-f2b2a971>Vibe-Type</h3><p data-v-f2b2a971>An experimental AI-powered coding/typing assistant \u2014 offering voice or smart-typing support, to speed up coding and writing workflows.</p><div class="project-links" data-v-f2b2a971><a class="btn-glass" href="https://github.com/NemesisGuy/Vibe-Type" target="_blank" data-v-f2b2a971>Source</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn-glass",
        to: "/projects/vibetype"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Detail`);
          } else {
            return [
              createTextVNode("Detail")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="btn-glass" href="https://blog.nemesisnet.co.za/vibetype-building-a-local-first-voice-coding-companion/" target="_blank" data-v-f2b2a971>Blog</a></div></div></div><h2 class="project-group-title" data-v-f2b2a971>SaaS Platforms</h2><div class="projects-grid" data-v-f2b2a971><div class="card" data-v-f2b2a971><img${ssrRenderAttr("src", "/images/projects/codecritical-saas/optimized/hero.webp")} alt="CodeCritical SaaS" loading="lazy" width="900" height="615" data-v-f2b2a971><h3 data-v-f2b2a971>CodeCritical SaaS</h3><p data-v-f2b2a971>Enterprise security scanning SaaS with multi-tenant architecture, JWT auth, Redis job queue, and static analysis pipeline.</p><div class="project-links" data-v-f2b2a971><a class="btn-glass" href="https://github.com/NemesisGuy/CodeCritical" target="_blank" data-v-f2b2a971>Source</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn-glass",
        to: "/projects/codecritical-saas"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Detail`);
          } else {
            return [
              createTextVNode("Detail")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="card" data-v-f2b2a971><img${ssrRenderAttr("src", "/images/projects/forkmyfolio/optimized/hero.webp")} alt="ForkMyFolio" loading="lazy" width="900" height="459" data-v-f2b2a971><h3 data-v-f2b2a971>ForkMyFolio</h3><p data-v-f2b2a971>A fully-featured, production-ready personal portfolio management system with dynamic project tracking, skill management, PDF export, and backup &amp; restore capabilities.</p><div class="project-links" data-v-f2b2a971><a class="btn-glass" href="https://github.com/NemesisGuy/ForkMyFolio-frontend" target="_blank" data-v-f2b2a971>Source</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn-glass",
        to: "/projects/forkmyfolio"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Detail`);
          } else {
            return [
              createTextVNode("Detail")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="btn-glass" href="https://forkmyfolio.nemesisnet.co.za" target="_blank" data-v-f2b2a971>Live Demo</a></div></div><div class="card" data-v-f2b2a971><img${ssrRenderAttr("src", "/images/projects/since/optimized/hero.webp")} alt="Since" loading="lazy" width="900" height="615" data-v-f2b2a971><h3 data-v-f2b2a971>Since</h3><p data-v-f2b2a971>Temporal claim registry \u2014 track predictions, record events, set deadlines, and verify outcomes over time.</p><div class="project-links" data-v-f2b2a971><a class="btn-glass" href="https://github.com/NemesisGuy/Since" target="_blank" data-v-f2b2a971>Source</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn-glass",
        to: "/projects/since"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Detail`);
          } else {
            return [
              createTextVNode("Detail")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="btn-glass" href="https://since.nemesisnet.co.za" target="_blank" data-v-f2b2a971>Live Demo</a></div></div></div><h2 class="project-group-title" data-v-f2b2a971>Tools &amp; Open Source</h2><div class="projects-grid" data-v-f2b2a971><div class="card" data-v-f2b2a971><img${ssrRenderAttr("src", "/images/projects/wordpress-mcp/optimized/hero.webp")} alt="WordPress MCP Server" loading="lazy" width="900" height="506" data-v-f2b2a971><h3 data-v-f2b2a971>WordPress MCP Server</h3><p data-v-f2b2a971>Lightweight MCP bridge that lets AI agents read, update, and manage WordPress content securely via a local-first server.</p><div class="project-links" data-v-f2b2a971><a class="btn-glass" href="https://github.com/NemesisGuy/WordPress-MCP" target="_blank" data-v-f2b2a971>Source</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn-glass",
        to: "/projects/wordpress-mcp"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Detail`);
          } else {
            return [
              createTextVNode("Detail")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="btn-glass" href="https://blog.nemesisnet.co.za/bring-wordpress-into-your-agent-workflows-with-the-wordpress-mcp-server" target="_blank" data-v-f2b2a971>Blog</a></div></div><div class="card" data-v-f2b2a971><img${ssrRenderAttr("src", "/images/projects/codecritical/optimized/hero.webp")} alt="CodeCritical" loading="lazy" width="900" height="615" data-v-f2b2a971><h3 data-v-f2b2a971>CodeCritical</h3><p data-v-f2b2a971>Java code analysis tool \u2014 measures LOC, functions, classes, duplication, and maintainability index with markdown reports.</p><div class="project-links" data-v-f2b2a971><a class="btn-glass" href="https://github.com/NemesisGuy/CodeCritical" target="_blank" data-v-f2b2a971>Source</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn-glass",
        to: "/projects/codecritical"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Detail`);
          } else {
            return [
              createTextVNode("Detail")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><h2 class="project-group-title" data-v-f2b2a971>Client Work / Full-Stack Builds</h2><div class="projects-grid" data-v-f2b2a971><div class="card" data-v-f2b2a971><img${ssrRenderAttr("src", "/images/projects/onthegorentals/optimized/hero.webp")} alt="OntheGoRentals" loading="lazy" width="202" height="188" data-v-f2b2a971><h3 data-v-f2b2a971>OntheGoRentals</h3><p data-v-f2b2a971>Full-stack reference build \u2014 bookings, rental history, admin dashboard, and rental management with Spring Boot and Vue.</p><div class="project-links" data-v-f2b2a971><a class="btn-glass" href="https://github.com/NemesisGuy/OnTheGoRentals" target="_blank" data-v-f2b2a971>Source</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn-glass",
        to: "/projects/onthegorentals"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Detail`);
          } else {
            return [
              createTextVNode("Detail")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="btn-glass" href="https://otgr.nemesisnet.co.za" target="_blank" data-v-f2b2a971>Live Demo</a></div></div><div class="card" data-v-f2b2a971><img${ssrRenderAttr("src", "/images/projects/nk-assessments/optimized/hero.webp")} alt="NK Assessments" loading="lazy" width="900" height="900" data-v-f2b2a971><h3 data-v-f2b2a971>NK Assessments</h3><p data-v-f2b2a971>Client-facing static portal built with HTML5, Bootstrap, and Dockerized Nginx \u2014 designed, shipped, and deployed in under 48 hours.</p><div class="project-links" data-v-f2b2a971><a class="btn-glass" href="https://github.com/NemesisGuy/NKAssessments" target="_blank" data-v-f2b2a971>Source</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn-glass",
        to: "/projects/nk-assessments"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Detail`);
          } else {
            return [
              createTextVNode("Detail")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="btn-glass" href="https://nkassessments.nemesisnet.co.za" target="_blank" data-v-f2b2a971>Live Demo</a></div></div><div class="card" data-v-f2b2a971><img${ssrRenderAttr("src", "/images/projects/bored-room-cafe/optimized/hero.webp")} alt="Bored Room Cafe" loading="lazy" width="900" height="445" data-v-f2b2a971><h3 data-v-f2b2a971>Bored Room Cafe</h3><p data-v-f2b2a971>A local homestyle takeaway and food-service spot based in Ferness Estate \u2014 showcasing local flavour and simple ordering for busy families.</p><div class="project-links" data-v-f2b2a971><a class="btn-glass" href="https://github.com/NemesisGuy/Bored-Room-Cafe" target="_blank" data-v-f2b2a971>Source</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn-glass",
        to: "/projects/bored-room-cafe"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Detail`);
          } else {
            return [
              createTextVNode("Detail")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="btn-glass" href="https://boredroomcafe.nemesisnet.co.za" target="_blank" data-v-f2b2a971>Live Demo</a></div></div></div><div class="back-link" data-v-f2b2a971>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2190 Back to Home`);
          } else {
            return [
              createTextVNode("\u2190 Back to Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f2b2a971"]]);

export { index as default };
//# sourceMappingURL=index-B2b7eRfZ.mjs.map
