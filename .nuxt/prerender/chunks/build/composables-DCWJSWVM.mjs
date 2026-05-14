import { hasInjectionContext, inject } from 'file://C:/Users/Reign/Projects/NemesisNet/node_modules/vue/index.mjs';
import { a as useNuxtApp } from './server.mjs';
import { u as useHead$1, h as headSymbol } from '../_/renderer.mjs';

function injectHead(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || useNuxtApp();
  return ((_a = nuxt.ssrContext) == null ? void 0 : _a.head) || nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      const head = inject(headSymbol);
      if (!head) {
        throw new Error("[nuxt] [unhead] Missing Unhead instance.");
      }
      return head;
    }
  });
}
function useHead(input, options = {}) {
  const head = options.head || injectHead(options.nuxt);
  return useHead$1(input, { head, ...options });
}

export { useHead as u };
//# sourceMappingURL=composables-DCWJSWVM.mjs.map
