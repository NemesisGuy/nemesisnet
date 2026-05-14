import { _ as _sfc_main$1 } from './PageHeader-B7BZQHfz.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BtQCpApt.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './composables-DCWJSWVM.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/destr/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About | NemesisNet",
      meta: [
        { name: "description", content: "About NemesisNet \u2014 AI infrastructure, platform engineering, and full-stack development by Peter Buckingham." }
      ],
      link: [
        { rel: "canonical", href: "https://dev.nemesisnet.co.za/about" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "About NemesisNet",
        subtitle: "Engineering-first. Infrastructure-led. No API wrapper theatre."
      }, null, _parent));
      _push(`<div class="detail-container about-container"><div class="detail-main"><h2>What NemesisNet Builds</h2><p>NemesisNet builds AI infrastructure and full-stack systems for real production workloads. The portfolio includes self-hosted AI runtimes, text-to-speech pipelines, MCP integrations, agent automation backends, and production-grade full-stack platforms.</p><p>Most studios offering &quot;AI services&quot; are connecting third-party APIs and calling it integration. <strong>NemesisNet architects, deploys, and operates the underlying systems:</strong> local AI runtimes, agent pipelines, automation infrastructure, and cloud-neutral deployments running on hardware that is physically controlled.</p><p>Every system ships to production standards \u2014 clean architecture, automated testing, Dockerized deployment, and continuous delivery.</p><h2>The Engineer</h2><p>NemesisNet is run by Peter Buckingham \u2014 a self-taught engineer and systems architect based in Cape Town. He completed night school before earning a BTech in IT at CPUT, and has been building production systems from first principles since the GPT-2 era. His specialisation in text-to-speech infrastructure dates back to 2013, years before it became an industry trend. He operates a 14-node Dell rack homelab that serves as the production backbone for NemesisNet&#39;s own products \u2014 the systems on this site run on hardware he physically owns and maintains, not rented cloud capacity.</p><h2>Track Record</h2><div style="${ssrRenderStyle({ "display": "grid", "grid-template-columns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "24px", "margin": "40px 0" })}"><div style="${ssrRenderStyle({ "background": "var(--glass-bg)", "border": "1px solid var(--glass-border)", "border-radius": "16px", "padding": "24px", "text-align": "center" })}"><strong style="${ssrRenderStyle({ "display": "block", "font-size": "2rem", "color": "var(--accent-color)" })}">20+</strong><span>Systems Delivered</span></div><div style="${ssrRenderStyle({ "background": "var(--glass-bg)", "border": "1px solid var(--glass-border)", "border-radius": "16px", "padding": "24px", "text-align": "center" })}"><strong style="${ssrRenderStyle({ "display": "block", "font-size": "1.2rem" })}">Self-Hosted AI</strong><span style="${ssrRenderStyle({ "color": "var(--text-muted)", "font-size": "0.9rem" })}">Infrastructure &amp; Pipelines</span></div><div style="${ssrRenderStyle({ "background": "var(--glass-bg)", "border": "1px solid var(--glass-border)", "border-radius": "16px", "padding": "24px", "text-align": "center" })}"><strong style="${ssrRenderStyle({ "display": "block", "font-size": "1.2rem" })}">Open Source</strong><span style="${ssrRenderStyle({ "color": "var(--text-muted)", "font-size": "0.9rem" })}">Contributor</span></div><div style="${ssrRenderStyle({ "background": "var(--glass-bg)", "border": "1px solid var(--glass-border)", "border-radius": "16px", "padding": "24px", "text-align": "center" })}"><strong style="${ssrRenderStyle({ "display": "block", "font-size": "1.2rem" })}">End-to-End</strong><span style="${ssrRenderStyle({ "color": "var(--text-muted)", "font-size": "0.9rem" })}">Infrastructure Expertise</span></div></div><h2>Stack</h2><div class="stack-tags"><span class="stack-tag">Java Spring Boot 3</span><span class="stack-tag">Vue 3</span><span class="stack-tag">Nuxt 3</span><span class="stack-tag">React</span><span class="stack-tag">Python</span><span class="stack-tag">PostgreSQL</span><span class="stack-tag">MySQL</span><span class="stack-tag">Redis</span><span class="stack-tag">Docker</span><span class="stack-tag">Docker Compose</span><span class="stack-tag">Nginx</span><span class="stack-tag">PocketBase</span><span class="stack-tag">Spring Security</span><span class="stack-tag">JWT</span><span class="stack-tag">RabbitMQ</span><span class="stack-tag">Cloudflare</span><span class="stack-tag">Linux</span><span class="stack-tag">CI/CD</span><span class="stack-tag">MCP</span><span class="stack-tag">TTS</span><span class="stack-tag">REST APIs</span><span class="stack-tag">Git</span><span class="stack-tag">ESPHome</span></div><div class="back-link">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`See the work \u2192`);
          } else {
            return [
              createTextVNode("See the work \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-CHy21OwD.mjs.map
