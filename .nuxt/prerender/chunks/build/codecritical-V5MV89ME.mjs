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
  __name: "codecritical",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "CodeCritical | NemesisNet",
      meta: [
        { name: "description", content: "Comprehensive Java code analysis tool for measuring quality, maintainability, and code duplication." }
      ],
      link: [
        { rel: "canonical", href: "https://dev.nemesisnet.co.za/projects/codecritical" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-page" }, _attrs))} data-v-ceb9f145>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "CodeCritical",
        subtitle: "Comprehensive Java code analysis tool for measuring quality and maintainability."
      }, null, _parent));
      _push(`<div class="detail-container" data-v-ceb9f145><div class="detail-main" data-v-ceb9f145><img${ssrRenderAttr("src", "/images/projects/codecritical/optimized/hero.webp")} class="detail-image" alt="CodeCritical" data-v-ceb9f145><h2 data-v-ceb9f145>The Challenge</h2><p data-v-ceb9f145>In large Java codebases, technical debt accumulates rapidly. Manual code reviews are time-consuming and often miss subtle structural issues that lead to long-term maintainability problems.</p><h2 data-v-ceb9f145>The Solution</h2><p data-v-ceb9f145>CodeCritical is a Java code analysis tool that gives developers in-depth insights into their codebase. It tracks metrics like lines of code, functions, classes, maintainability index, and code duplication \u2014 helping teams measure and improve code quality, maintainability, and readability.</p><h2 data-v-ceb9f145>Key Features</h2><ul class="arch-list" data-v-ceb9f145><li data-v-ceb9f145><strong data-v-ceb9f145>File Line Counting:</strong> Total lines, code lines, comment lines, and blank lines per file</li><li data-v-ceb9f145><strong data-v-ceb9f145>Function Counting:</strong> Detects and counts method signatures to evaluate complexity</li><li data-v-ceb9f145><strong data-v-ceb9f145>Class &amp; Interface Detection:</strong> Identifies object-oriented components in the architecture</li><li data-v-ceb9f145><strong data-v-ceb9f145>Code Duplication Detection:</strong> Finds identical code blocks to enforce DRY principles</li><li data-v-ceb9f145><strong data-v-ceb9f145>Maintainability Index:</strong> Calculates MI score based on LOC, cyclomatic complexity, and comment density</li><li data-v-ceb9f145><strong data-v-ceb9f145>Markdown Report Generation:</strong> Outputs professional reports with file-level metrics</li><li data-v-ceb9f145><strong data-v-ceb9f145>Grand Totals:</strong> Project-wide metric summaries for tracking trends over time</li></ul><div class="cta-wrapper" data-v-ceb9f145><a href="https://github.com/NemesisGuy/CodeCritical" target="_blank" class="btn-glass" data-v-ceb9f145>View Source</a></div><div class="next-project" data-v-ceb9f145>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/codecritical-saas",
        class: "btn-glass"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Next Project \u2192 CodeCritical SaaS`);
          } else {
            return [
              createTextVNode("Next Project \u2192 CodeCritical SaaS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="detail-sidebar" data-v-ceb9f145><div class="sidebar-card" data-v-ceb9f145><h4 data-v-ceb9f145>Project Details</h4><ul class="sidebar-list" data-v-ceb9f145><li data-v-ceb9f145><span data-v-ceb9f145>Stack:</span> <strong data-v-ceb9f145>Java 100%</strong></li><li data-v-ceb9f145><span data-v-ceb9f145>Role:</span> <strong data-v-ceb9f145>Lead Engineer</strong></li><li data-v-ceb9f145><span data-v-ceb9f145>Type:</span> <strong data-v-ceb9f145>CLI Analysis Tool</strong></li><li data-v-ceb9f145><span data-v-ceb9f145>License:</span> <strong data-v-ceb9f145>MIT</strong></li></ul></div><div class="sidebar-card" data-v-ceb9f145><h4 data-v-ceb9f145>Quick Links</h4><div class="quick-links" data-v-ceb9f145>`);
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
      _push(`<a href="https://github.com/NemesisGuy/CodeCritical" target="_blank" class="btn-glass" data-v-ceb9f145>View Source</a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/codecritical.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const codecritical = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ceb9f145"]]);

export { codecritical as default };
//# sourceMappingURL=codecritical-V5MV89ME.mjs.map
