# Vue 3 Composition API: Real-World Patterns from Production Apps

**Slug:** `vue-3-composition-api-patterns`
**Meta Description:** Practical Vue 3 Composition API patterns from production apps — composables, state management with Pinia, component patterns, and performance optimizations.
**Primary Keyword:** Vue 3 Composition API
**Secondary Keywords:** Vue 3 patterns, Vue 3 composables, Vue 3 best practices

---

<article>
<p class="lead">The Composition API isn't just a syntax change — it's a paradigm shift. After building three production applications with it, we've developed patterns that make Vue 3 codebases more maintainable, more testable, and more enjoyable to work on.</p>
<div class="entry-meta">
<span><i class="fas fa-calendar-alt"></i> Published: June 2026</span><br />
<span style="margin-left: 1rem;"><i class="fas fa-code"></i> Tech Stack:</span><br />
<span style="white-space: nowrap;">
<span class="tech-badge">Vue 3</span>
<span class="tech-badge">Pinia</span>
<span class="tech-badge">TypeScript</span>
<span class="tech-badge">Vite</span>
</span>
</div>
</article>

<section class="glass-section">
<h2>Why Composition API?</h2>
<p>Options API served Vue well for years. But as applications grew, three problems emerged:</p>
<div class="glass-card">
<ul>
<li><strong>Logic reuse</strong> — Mixins were implicit, hard to trace, and caused naming conflicts</li>
<li><strong>TypeScript support</strong> — Options API didn't type-check well</li>
<li><strong>Code organization</strong> — Related logic was split across data, methods, computed, and watch</li>
</ul>
</div>
<p>Composition API solves all three. Composables replace mixins. TypeScript is first-class. Related logic lives together. The result: codebases that are easier to read, refactor, and debug.</p>
</section>

<section class="glass-section">
<h2>Composable Patterns</h2>

<h3>The useFetch Pattern</h3>
<p>Every application needs data fetching. A reusable composable handles loading, error, and retry logic:</p>
<pre><code>// composables/useFetch.js
import { ref, watchEffect } from 'vue'

export function useFetch(url, options = {}) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  async function execute() {
    loading.value = true
    error.value = null
    try {
      const response = await fetch(url.value || url, options)
      data.value = await response.json()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  if (typeof url === 'ref') {
    watchEffect(execute)
  } else {
    execute()
  }

  return { data, error, loading, refetch: execute }
}</code></pre>
<p>Usage in a component:</p>
<pre><code>const { data: users, loading, error } = useFetch('/api/users')</code></pre>
<p>One line. Loading state, error handling, and refetch capability — all included.</p>

<h3>The useAuth Pattern</h3>
<p>Authentication state is needed everywhere. A composable wraps the auth store:</p>
<pre><code>// composables/useAuth.js
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

export function useAuth() {
  const store = useAuthStore()

  const isAuthenticated = computed(() => !!store.user)
  const user = computed(() => store.user)
  const tenantId = computed(() => store.user?.tenantId)

  function login(credentials) {
    return store.login(credentials)
  }

  function logout() {
    store.logout()
  }

  return { isAuthenticated, user, tenantId, login, logout }
}</code></pre>
<p>Components don't need to know about Pinia stores. They call <code>useAuth()</code> and get reactive state and actions.</p>

<h3>The useTenant Pattern</h3>
<p>In multi-tenant applications, every API call needs tenant context. A composable handles this:</p>
<pre><code>// composables/useTenant.js
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

export function useTenant() {
  const auth = useAuthStore()

  const tenantId = computed(() => auth.user?.tenantId)
  const tenantName = computed(() => auth.user?.tenantName)

  function scopedFetch(url, options = {}) {
    return $fetch(url, {
      ...options,
      headers: {
        'X-Tenant-ID': tenantId.value,
        ...options.headers
      }
    })
  }

  return { tenantId, tenantName, scopedFetch }
}</code></pre>
<p>Developers don't remember to add tenant headers — the composable handles it. The multi-tenancy concern is in one place, not scattered across every API call.</p>

<h3>Error Handling Composables</h3>
<p>Consistent error handling across the application:</p>
<pre><code>// composables/useErrorHandler.js
import { ref } from 'vue'

export function useErrorHandler() {
  const error = ref(null)
  const loading = ref(false)

  async function handle(asyncFn) {
    loading.value = true
    error.value = null
    try {
      return await asyncFn()
    } catch (e) {
      error.value = e.message || 'An error occurred'
      console.error('Operation failed:', e)
      throw e
    } finally {
      loading.value = false
    }
  }

  return { error, loading, handle }
}</code></pre>
</section>

<section class="glass-section">
<h2>State Management with Pinia</h2>

<h3>Store Patterns</h3>
<p>Pinia is Vue's recommended state management. The Composition API makes stores clean and type-safe:</p>
<pre><code>// stores/auth.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(null)

  const isAuthenticated = computed(() => !!user.value)
  const tenantId = computed(() => user.value?.tenantId)

  async function login(credentials) {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: credentials
    })
    user.value = response.user
    token.value = response.token
  }

  function logout() {
    user.value = null
    token.value = null
  }

  return { user, token, isAuthenticated, tenantId, login, logout }
})</code></pre>

<h3>Composables vs Stores</h3>
<p>The question that comes up constantly: when to use a composable, when to use a store?</p>
<div class="glass-card">
<table>
<thead>
<tr>
<th>Use Case</th>
<th>Composable</th>
<th>Store</th>
</tr>
</thead>
<tbody>
<tr>
<td>Scoped to a component</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Shared across components</td>
<td>Maybe</td>
<td>Yes</td>
</tr>
<tr>
<td>Persistent state</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Side effects</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Testing</td>
<td>Easier</td>
<td>More setup</td>
</tr>
</tbody>
</table>
</div>
<p>Rule of thumb: if it needs to persist across page navigations or be shared between unrelated components, use a store. If it's local logic that happens to be reusable, use a composable.</p>
</section>

<section class="glass-section">
<h2>Real-World Component Patterns</h2>

<h3>Composable Components</h3>
<p>Components that wrap composable logic into reusable UI:</p>
<pre><code>// components/DataTable.vue
<script setup>
import { useFetch } from '@/composables/useFetch'

const props = defineProps({
  url: { type: String, required: true },
  columns: { type: Array, required: true }
})

const { data, loading, error, refetch } = useFetch(props.url)
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <table v-else>
    <thead>
      <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
    </thead>
    <tbody>
      <tr v-for="row in data" :key="row.id">
        <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
      </tr>
    </tbody>
  </table>
</template></code></pre>
<p>One component, any data source, any columns. The composable handles the data fetching. The component handles the presentation.</p>

<h3>Composable Composition</h3>
<p>Composables compose naturally — combine multiple composables in a single component:</p>
<pre><code>const { user } = useAuth()
const { tenantId, scopedFetch } = useTenant()
const { data: orders, loading } = useFetch(
  computed(() => `/api/tenants/${tenantId.value}/orders`)
)</code></pre>
<p>Each composable is independent. Together, they provide the full feature set. No mixin conflicts, no implicit dependencies.</p>

<h3>Testing Composables</h3>
<p>Composables are plain functions — easy to test:</p>
<pre><code>import { useFetch } from '@/composables/useFetch'

describe('useFetch', () => {
  it('fetches data successfully', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve({ name: 'Test' })
    })

    const { data, loading } = useFetch('/api/test')

    await nextTick()
    expect(data.value).toEqual({ name: 'Test' })
    expect(loading.value).toBe(false)
  })
})</code></pre>
</section>

<section class="glass-section">
<h2>Performance Optimizations</h2>

<h3>Computed Properties</h3>
<p>Use <code>computed</code> for derived state. It's cached and only recomputes when dependencies change:</p>
<pre><code>const fullName = computed(() => `${firstName.value} ${lastName.value}`)</code></pre>
<p>Don't use methods for derived state — methods recompute on every render.</p>

<h3>Watch vs watchEffect</h3>
<div class="glass-card">
<ul>
<li><strong><code>watch</code></strong> — Explicit dependencies, runs only when they change. Use when you need old/new values.</li>
<li><strong><code>watchEffect</code></strong> — Auto-tracks dependencies, runs immediately. Use for side effects.</li>
</ul>
</div>
<pre><code>// watch: explicit
watch(userId, async (newId, oldId) => {
  if (newId !== oldId) {
    user.value = await fetchUser(newId)
  }
})

// watchEffect: auto-tracked
watchEffect(async () => {
  if (userId.value) {
    user.value = await fetchUser(userId.value)
  }
})</code></pre>

<h3>Lifecycle Optimization</h3>
<p>The Composition API maps Vue lifecycle hooks to <code>onMounted</code>, <code>onUpdated</code>, <code>onUnmounted</code>. Use them sparingly — most side effects belong in <code>watch</code> or <code>watchEffect</code>.</p>
</section>

<section class="glass-section">
<h2>Migration Strategy</h2>
<p>Migrating from Options API to Composition API doesn't have to be all-or-nothing:</p>
<div class="glass-card">
<ol>
<li><strong>New components</strong> — Always use Composition API</li>
<li><strong>Bug fixes</strong> — Migrate the component you're touching</li>
<li><strong>Refactors</strong> — Migrate when you're already restructuring</li>
<li><strong>Shared logic</strong> — Extract mixins into composables first</li>
</ol>
</div>
<p>Vue supports both APIs in the same application. Migrate incrementally, not in a big bang.</p>

<h3>Common Pitfalls</h3>
<div class="glass-card">
<ul>
<li><strong>Forgetting <code>ref()</code></strong> — Reactive state needs <code>ref()</code> or <code>reactive()</code>. Plain variables aren't reactive.</li>
<li><strong>Destructuring refs</strong> — Use <code>.value</code> in script, not in template. Destructuring loses reactivity.</li>
<li><strong>Overusing <code>reactive()</code></strong> — <code>ref()</code> is simpler for most cases. <code>reactive()</code> is for complex objects.</li>
</ul>
</div>
</section>

<section class="glass-section">
<h2>Conclusion</h2>
<p>The Composition API makes Vue 3 codebases more maintainable. Composables replace mixins. TypeScript is first-class. Related logic lives together. The patterns are simple, and once your team adopts them, you won't go back.</p>
<p>If you're building a Vue 3 application and need architecture guidance, <a href="https://nemesisnet.co.za/contact">let's talk</a>. We build Vue 3 applications with patterns that scale.</p>
</section>

<div class="glass-card">
<h3>Need Help Building Vue 3 Applications?</h3>
<p>We design and build Vue 3 applications for South African businesses. From single-page apps to full-stack SaaS platforms, we can help you build something that works.</p>
<div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 15px;">
<a href="https://nemesisnet.co.za/contact" class="btn-aurora">Contact Us</a>
<a href="https://nemesisnet.co.za/services/saas-development" class="btn-ghost">SaaS Development Services</a>
<a href="https://nemesisnet.co.za/blog/since-app-multi-tenant-saas-case-study" class="btn-ghost">Case Study: Since App</a>
</div>
</div>

<section class="glass-section">
<h2>Related Reading</h2>
<div class="glass-card">
<ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
<li><a href="https://nemesisnet.co.za/blog/since-app-multi-tenant-saas-case-study">Case Study: Since App</a> — Vue 3 in a production multi-tenant SaaS</li>
<li><a href="https://nemesisnet.co.za/blog/spring-boot-multi-tenant-patterns">Spring Boot Multi-Tenant Patterns</a> — Backend architecture for SaaS</li>
<li><a href="https://nemesisnet.co.za/services/saas-development">SaaS Development Services</a> — Full-stack SaaS platforms</li>
</ul>
</div>
</section>
