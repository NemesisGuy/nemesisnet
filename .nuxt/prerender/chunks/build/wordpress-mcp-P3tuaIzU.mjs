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
  __name: "wordpress-mcp",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "WordPress MCP Server | NemesisNet",
      meta: [
        { name: "description", content: "Empowering AI agents with secure, local-first WordPress management." }
      ],
      link: [
        { rel: "canonical", href: "https://dev.nemesisnet.co.za/projects/wordpress-mcp" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-page" }, _attrs))} data-v-ee2ceaac>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "WordPress MCP Server",
        subtitle: "Empowering AI agents with secure, local-first WordPress management."
      }, null, _parent));
      _push(`<div class="detail-container" data-v-ee2ceaac><div class="detail-main" data-v-ee2ceaac><img${ssrRenderAttr("src", "/images/projects/wordpress-mcp/optimized/hero.webp")} class="detail-image" alt="WordPress MCP Server" data-v-ee2ceaac><h2 data-v-ee2ceaac>The Challenge</h2><p data-v-ee2ceaac>Connecting AI agents to WordPress usually requires exposing sensitive API keys or opening precarious webhooks that increase the attack surface of a website. There was a need for a bridge that allows agents to manage content without compromising the security of the WordPress installation.</p><h2 data-v-ee2ceaac>The Solution</h2><p data-v-ee2ceaac>The WordPress MCP Server acts as a local-first bridge. It implements a standardized protocol, allowing AI agents to interact with WordPress via a unified interface. The server handles authentication and request routing locally, meaning the AI agent never needs direct access to the WordPress admin panel.</p><h2 data-v-ee2ceaac>Technical Implementation</h2><p data-v-ee2ceaac>Built with a focus on security and low latency, the server uses a secure bridge to the WordPress API. It translates protocol tool calls into authenticated requests, enabling agents to read posts, update categories, and manage media libraries in real-time. The system is containerized for instant deployment across any environment.</p><div class="cta-wrapper" data-v-ee2ceaac><a href="https://github.com/NemesisGuy/WordPress-MCP" target="_blank" class="btn-glass" data-v-ee2ceaac>View Source</a><a href="https://blog.nemesisnet.co.za/bring-wordpress-into-your-agent-workflows-with-the-wordpress-mcp-server" target="_blank" class="btn-glass" data-v-ee2ceaac>Deep Dive</a></div><div class="next-project" data-v-ee2ceaac>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/nk-assessments",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Next Project \u2192 NK Assessments`);
          } else {
            return [
              createTextVNode("Next Project \u2192 NK Assessments")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="detail-sidebar" data-v-ee2ceaac><div class="sidebar-card" data-v-ee2ceaac><h4 data-v-ee2ceaac>Project Details</h4><ul class="sidebar-list" data-v-ee2ceaac><li data-v-ee2ceaac><span data-v-ee2ceaac>Timeline:</span> <strong data-v-ee2ceaac>2 Weeks</strong></li><li data-v-ee2ceaac><span data-v-ee2ceaac>Stack:</span> <strong data-v-ee2ceaac>Node.js, WordPress</strong></li><li data-v-ee2ceaac><span data-v-ee2ceaac>Role:</span> <strong data-v-ee2ceaac>Lead Engineer</strong></li><li data-v-ee2ceaac><span data-v-ee2ceaac>Status:</span> <strong data-v-ee2ceaac>Deployed</strong></li></ul></div><div class="sidebar-card" data-v-ee2ceaac><h4 data-v-ee2ceaac>Quick Links</h4><div class="quick-links" data-v-ee2ceaac>`);
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
      _push(`<a href="https://github.com/NemesisGuy/WordPress-MCP" target="_blank" class="btn-glass" data-v-ee2ceaac>View Source</a><a href="https://blog.nemesisnet.co.za/bring-wordpress-into-your-agent-workflows-with-the-wordpress-mcp-server" target="_blank" class="btn-glass" data-v-ee2ceaac>Deep Dive</a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/wordpress-mcp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wordpressMcp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ee2ceaac"]]);

export { wordpressMcp as default };
//# sourceMappingURL=wordpress-mcp-P3tuaIzU.mjs.map
