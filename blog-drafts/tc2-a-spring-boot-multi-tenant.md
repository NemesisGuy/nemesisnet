# Spring Boot Patterns for Multi-Tenant SaaS: Architecture Deep Dive

**Slug:** `spring-boot-multi-tenant-patterns`
**Meta Description:** Practical Spring Boot multi-tenant patterns — row-level security, tenant context propagation, service layer patterns, and security best practices for SaaS.
**Primary Keyword:** Spring Boot multi-tenant
**Secondary Keywords:** SaaS architecture Spring, multi-tenant PostgreSQL, Spring Boot tenant isolation

---

<article>
<p class="lead">Multi-tenancy is the backbone of successful SaaS. Get it right, and scaling from 10 to 10,000 tenants is a database config change. Get it wrong, and every new feature requires rewriting the data access layer. We've built three multi-tenant SaaS applications with Spring Boot, and the patterns that worked are simpler than you'd expect.</p>
<div class="entry-meta">
<span><i class="fas fa-calendar-alt"></i> Published: June 2026</span><br />
<span style="margin-left: 1rem;"><i class="fas fa-code"></i> Tech Stack:</span><br />
<span style="white-space: nowrap;">
<span class="tech-badge">Spring Boot 3</span>
<span class="tech-badge">PostgreSQL</span>
<span class="tech-badge">Hibernate</span>
<span class="tech-badge">OAuth2</span>
<span class="tech-badge">Redis</span>
</span>
</div>
</article>

<section class="glass-section">
<h2>Multi-Tenancy Approaches</h2>
<p>Three ways to isolate tenant data, each with different trade-offs:</p>
<div class="glass-card">
<table>
<thead>
<tr>
<th>Approach</th>
<th>Isolation</th>
<th>Cost</th>
<th>Complexity</th>
<th>Best For</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Database per tenant</strong></td>
<td>Maximum</td>
<td>High</td>
<td>Low per tenant</td>
<td>Enterprise, compliance-heavy</td>
</tr>
<tr>
<td><strong>Schema per tenant</strong></td>
<td>Strong</td>
<td>Medium</td>
<td>Medium</td>
<td>Mid-market, moderate scale</td>
</tr>
<tr>
<td><strong>Row-level security</strong></td>
<td>Enforced at DB</td>
<td>Low</td>
<td>Medium-high</td>
<td>SMB, high scale, cost-sensitive</td>
</tr>
</tbody>
</table>
</div>
<p>We've used all three. Row-level security (RLS) with PostgreSQL is our default now. The 3-5% query overhead is worth the infrastructure cost savings and the zero-data-leak guarantee.</p>
</section>

<section class="glass-section">
<h2>Row-Level Security Implementation</h2>

<h3>PostgreSQL RLS Setup</h3>
<p>RLS policies filter rows based on a session variable. The application sets this variable on every connection:</p>
<pre><code>-- Enable RLS on a table
ALTER TABLE organisations ENABLE ROW LEVEL SECURITY;

-- Create a policy that filters by tenant
CREATE POLICY tenant_isolation ON organisations
  USING (tenant_id = current_setting('app.current_tenant')::uuid);

-- Set tenant context (application does this per request)
SET app.current_tenant = 'org_abc123';</code></pre>
<p>Every query automatically filters by the current tenant. Even a developer debugging with raw SQL can't accidentally leak data — PostgreSQL enforces the filter at the storage layer.</p>

<h3>Spring Boot Integration</h3>
<p>A JDBC interceptor sets the tenant context before every query:</p>
<pre><code>@Component
public class TenantConnectionInterceptor implements Interceptor {

    @Override
    public void beforeConnectionAcquisition(Connection connection) {
        UUID tenantId = TenantContext.getTenant();
        if (tenantId != null) {
            try (var stmt = connection.prepareStatement(
                "SET app.current_tenant = ?")) {
                stmt.setString(1, tenantId.toString());
                stmt.execute();
            }
        }
    }
}</code></pre>
<p>This runs before every query — not just the first one. Connection pooling means connections are reused, so the tenant context must be set on every acquisition, not just creation.</p>

<h3>Performance Considerations</h3>
<p>The tenant filter adds 3-5% overhead to every query. We mitigated this with composite indexes:</p>
<pre><code>-- Without tenant index: sequential scan
CREATE INDEX idx_organisations_name ON organisations(name);

-- With tenant index: index scan
CREATE INDEX idx_organisations_tenant_name ON organisations(tenant_id, name);</code></pre>
<p>Every query plan now starts with the tenant filter. The index covers both the tenant lookup and the application query, eliminating the overhead entirely for indexed queries.</p>
</section>

<section class="glass-section">
<h2>Service Layer Patterns</h2>

<h3>Tenant-Aware Services</h3>
<p>Every service method implicitly operates within the current tenant context. The pattern:</p>
<pre><code>@Service
public class OrganisationService {

    private final OrganisationRepository repo;

    public List&lt;Organisation&gt; findAll() {
        // RLS handles filtering — no manual WHERE clause
        return repo.findAll();
    }

    public Organisation save(Organisation org) {
        // Tenant ID is set by the interceptor
        org.setTenantId(TenantContext.getTenant());
        return repo.save(org);
    }
}</code></pre>
<p>Developers don't think about tenant filtering. The database handles it. The only place tenant logic lives is the connection interceptor — a single point of control.</p>

<h3>Tenant Context Holder</h3>
<p>The tenant context is a ThreadLocal that propagates through the request lifecycle:</p>
<pre><code>@Component
public class TenantContext {
    private static final ThreadLocal&lt;UUID&gt; CURRENT = new ThreadLocal&lt;&gt;();

    public static void set(UUID tenantId) { CURRENT.set(tenantId); }
    public static UUID get() { return CURRENT.get(); }
    public static void clear() { CURRENT.remove(); }
}</code></pre>
<p>The filter sets it on request entry. The interceptor uses it on every query. The filter clears it on request exit. Thread-local cleanup prevents connection pool leaks.</p>

<h3>Tenant Filtering in Queries</h3>
<p>For queries that span tenants (admin dashboards, analytics), bypass RLS with a superadmin role:</p>
<pre><code>@PreAuthorize("hasRole('SUPERADMIN')")
public List&lt;CrossTenantReport&gt; generateReport() {
    // Superadmin role bypasses RLS
    return reportRepository.findAll();
}</code></pre>
<p>This is the exception, not the rule. Most code paths never need cross-tenant access.</p>
</section>

<section class="glass-section">
<h2>Security & Authentication</h2>

<h3>OAuth2 Multi-Tenant</h3>
<p>The JWT token encodes the tenant context. The application never trusts client-provided tenant IDs:</p>
<pre><code>{
  "sub": "user_abc123",
  "tenant_id": "org_xyz789",
  "roles": ["admin", "editor"],
  "org_name": "Acme Corp"
}</code></pre>
<p>The tenant ID comes from the token, not from a query parameter or header. This prevents tenant impersonation — a user can't request data from another tenant by changing a header.</p>

<h3>JWT Handling</h3>
<p>Short-lived access tokens (15 minutes) with refresh token rotation. The tenant claim is included in every token. Token validation happens at the gateway level — invalid tokens are rejected before reaching application code.</p>

<h3>Tenant-Specific Roles</h3>
<p>Roles are tenant-scoped: a user can be an admin in one organisation and a viewer in another. The JWT includes role-per-tenant claims:</p>
<pre><code>{
  "sub": "user_abc123",
  "tenants": [
    { "id": "org_1", "role": "admin" },
    { "id": "org_2", "role": "viewer" }
  ]
}</code></pre>
</section>

<section class="glass-section">
<h2>Database Optimisation</h2>

<h3>Indexing Strategies</h3>
<p>Every index must include the tenant ID as the leading column. This is non-negotiable with RLS:</p>
<pre><code>-- Good: tenant-first index
CREATE INDEX idx_orders_tenant_status ON orders(tenant_id, status);

-- Bad: status-first index (can't use RLS filter)
CREATE INDEX idx_orders_status ON orders(status);</code></pre>

<h3>Connection Pooling</h3>
<p>HikariCP with a pool size of 20 handles most workloads. For high-tenant-count deployments, consider per-tenant connection limits to prevent one tenant from starving the pool.</p>

<h3>Query Optimisation</h3>
<p>The tenant filter is the first predicate in every query plan. Optimise for this by ensuring the tenant column is indexed and the table is partitioned by tenant for large datasets.</p>
</section>

<section class="glass-section">
<h2>Testing Multi-Tenant Systems</h2>
<p>Integration tests must verify tenant isolation:</p>
<pre><code>@Test
void shouldNotReturnDataFromOtherTenants() {
    // Set tenant A
    TenantContext.set(TENANT_A);
    List&lt;Order&gt; ordersA = orderService.findAll();

    // Set tenant B
    TenantContext.set(TENANT_B);
    List&lt;Order&gt; ordersB = orderService.findAll();

    // Verify no overlap
    assertThat(ordersA).noneMatch(o -> ordersB.contains(o));
}</code></pre>
<p>Run this test with every deployment. If RLS breaks, this test catches it before users do.</p>
</section>

<section class="glass-section">
<h2>Conclusion</h2>
<p>Multi-tenant Spring Boot isn't complicated — it's disciplined. PostgreSQL RLS handles isolation. ThreadLocal propagates context. Composite indexes handle performance. JWT claims encode tenant scope. The patterns are simple. The hard part is applying them consistently.</p>
<p>If you're building a multi-tenant SaaS and need architecture guidance, <a href="https://nemesisnet.co.za/contact">let's talk</a>. We've built three production multi-tenant systems and learned the patterns — and the pitfalls — firsthand.</p>
</section>

<div class="glass-card">
<h3>Need Help Building Your Multi-Tenant SaaS?</h3>
<p>We design and deploy multi-tenant architectures for South African businesses. Whether you're starting from scratch or refactoring an existing monolith, we can help you build something that scales.</p>
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
<li><a href="https://nemesisnet.co.za/blog/since-app-multi-tenant-saas-case-study">Case Study: Since App</a> — How we built a multi-tenant SaaS with these patterns</li>
<li><a href="https://nemesisnet.co.za/services/saas-development">SaaS Development Services</a> — Scalable multi-tenant platforms</li>
<li><a href="https://nemesisnet.co.za/projects">View Our Projects</a> — See what we've built</li>
</ul>
</div>
</section>
