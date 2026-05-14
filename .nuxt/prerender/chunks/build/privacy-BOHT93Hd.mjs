import { _ as _sfc_main$1 } from './PageHeader-B7BZQHfz.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BtQCpApt.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue/server-renderer/index.mjs';
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
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Privacy Policy | NemesisNet",
      meta: [
        { name: "description", content: "NemesisNet privacy policy covering information collected, usage, sharing, and data rights." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "legal-page" }, _attrs))} data-v-03a75707>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: "Privacy Policy",
        subtitle: "Updated: 14 April 2026"
      }, null, _parent));
      _push(`<div class="legal-container" data-v-03a75707><main data-v-03a75707><div class="policy-doc" data-v-03a75707><article class="policy-block" data-v-03a75707><h3 data-v-03a75707>1. Information Collected</h3><ul data-v-03a75707><li data-v-03a75707>Contact information provided through forms or direct communication.</li><li data-v-03a75707>Operational and analytics data related to website usage.</li><li data-v-03a75707>Transaction information needed for payment processing.</li></ul></article><article class="policy-block" data-v-03a75707><h3 data-v-03a75707>2. How Information Is Used</h3><ul data-v-03a75707><li data-v-03a75707>To deliver requested services and support.</li><li data-v-03a75707>To communicate about projects, billing, and updates.</li><li data-v-03a75707>To improve reliability, security, and user experience.</li></ul></article><article class="policy-block" data-v-03a75707><h3 data-v-03a75707>3. Data Sharing And Security</h3><p data-v-03a75707>NemesisNet does not sell personal data. Data may be shared only with trusted processors where necessary to deliver services. Reasonable technical and organizational safeguards are used to protect data.</p></article><article class="policy-block" data-v-03a75707><h3 data-v-03a75707>4. Retention And Rights</h3><p data-v-03a75707>Data is retained only as needed for service delivery, compliance, and operations. You may request access, correction, or deletion by emailing admin@nemesisnet.co.za.</p></article></div><div class="back-link" data-v-03a75707>`);
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
      _push(`</div></main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03a75707"]]);

export { privacy as default };
//# sourceMappingURL=privacy-BOHT93Hd.mjs.map
