# Self-Hosted TTS Pipeline for Production: From Prototype to 99.99% Uptime

**Slug:** `kokoro-tts-production-case-study`
**Meta Description:** How we built a self-hosted TTS pipeline handling 10,000+ requests/day at 1/10th the cost of cloud APIs — Kokoro TTS deployment case study.
**Primary Keyword:** Self-hosted TTS
**Secondary Keywords:** Kokoro TTS deployment, AI voice infrastructure, Docker AI deployment

---

<article>
<p class="lead">Cloud TTS APIs are convenient — until you see the bill. At 10,000 requests per day, cloud providers charge $150-300/month for text-to-speech. We built a self-hosted pipeline using Kokoro TTS that handles the same volume for under $30/month in GPU costs — with lower latency and zero data leaving our infrastructure.</p>
<div class="entry-meta">
<span><i class="fas fa-calendar-alt"></i> Published: June 2026</span><br />
<span style="margin-left: 1rem;"><i class="fas fa-code"></i> Tech Stack:</span><br />
<span style="white-space: nowrap;">
<span class="tech-badge">Kokoro TTS</span>
<span class="tech-badge">Docker</span>
<span class="tech-badge">NVIDIA GPU</span>
<span class="tech-badge">FastAPI</span>
<span class="tech-badge">Prometheus</span>
<span class="tech-badge">Grafana</span>
</span>
</div>
</article>

<section class="glass-section">
<h2>Why Self-Hosted TTS?</h2>
<p>The decision to self-host wasn't just about cost. Three drivers pushed us away from cloud TTS APIs:</p>
<div class="glass-card">
<table>
<thead>
<tr>
<th>Factor</th>
<th>Cloud APIs</th>
<th>Self-Hosted</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Cost at scale</strong></td>
<td>$150-300/month (10K requests/day)</td>
<td>$25-40/month (GPU server)</td>
</tr>
<tr>
<td><strong>Data privacy</strong></td>
<td>Text sent to external servers</td>
<td>Everything stays on-premise</td>
</tr>
<tr>
<td><strong>Latency</strong></td>
<td>200-500ms (network round-trip)</td>
<td>50-150ms (local inference)</td>
</tr>
<tr>
<td><strong>Rate limits</strong></td>
<td>Per-account quotas</td>
<td>Only limited by GPU</td>
</tr>
<tr>
<td><strong>Customisation</strong></td>
<td>Fixed voice options</td>
<td>Fine-tuned voices, custom styles</td>
</tr>
</tbody>
</table>
</div>
<p>For a South African business handling client data, the privacy argument alone was sufficient. But the cost reduction made it a no-brainer: <strong>90% cheaper than cloud APIs</strong> with better performance.</p>
</section>

<section class="glass-section">
<h2>Architecture Overview</h2>
<p>The pipeline is deliberately simple. No Kubernetes. No microservices. One GPU server running Docker containers.</p>
<div class="glass-card">
<pre><code>┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│   API        │────▶│  FastAPI     │────▶│  Kokoro TTS  │
│   Clients    │     │  (Python)    │     │  (GPU)       │
└─────────────┘     └──────────────┘     └──────────────┘
      │                    │                    │
      │                    │                    │
      ▼                    ▼                    ▼
  HTTP/REST          Request queue,       Model inference,
  requests           caching, auth        audio generation
                            │
                            ▼
                     ┌──────────────┐
                     │  Redis Cache  │
                     │  (audio cache)│
                     └──────────────┘</code></pre>
</div>

<h3>Why Kokoro TTS?</h3>
<p>Kokoro is an open-source TTS model that produces natural-sounding speech with minimal setup. It runs on consumer GPUs, supports multiple voices, and produces audio at 24kHz quality. For production use, it hit the sweet spot between quality and resource requirements.</p>

<h3>Docker Container Setup</h3>
<p>Everything runs in Docker containers managed by Docker Compose. The GPU container uses NVIDIA's CUDA base image, and the API container runs a lightweight Python image:</p>
<pre><code># docker-compose.yml (simplified)
services:
  tts-api:
    build: ./api
    ports:
      - "8000:8000"
    environment:
      - MODEL_PATH=/models/kokoro
      - REDIS_URL=redis://cache:6379
    depends_on:
      - cache

  cache:
    image: redis:7-alpine
    volumes:
      - redis-data:/data</code></pre>
<p>Two containers. One volume. One <code>docker compose up</code> command.</p>

<h3>Monitoring Stack</h3>
<p>Prometheus scrapes metrics from the FastAPI endpoint every 15 seconds. Grafana dashboards show request volume, latency percentiles, GPU utilization, and cache hit rates. Alerting triggers on latency spikes above 200ms or cache hit rates below 80%.</p>
</section>

<section class="glass-section">
<h2>Implementation Details</h2>

<h3>Docker & GPU Setup</h3>
<p>The critical piece is NVIDIA Container Toolkit. Without it, Docker can't access the GPU. The setup is straightforward:</p>
<pre><code># Install NVIDIA Container Toolkit
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg
curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
  sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
  sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
sudo apt-get update && sudo apt-get install -y nvidia-container-toolkit
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker</code></pre>
<p>Once installed, GPU access in Docker is just a flag: <code>--gpus all</code> or the Compose equivalent <code>deploy.resources.reservations.devices</code>.</p>

<h3>Model Optimisation</h3>
<p>Out of the box, Kokoro loads the full model into GPU memory on every cold start. That's 2-3 seconds of latency for the first request. We optimized with two techniques:</p>
<div class="glass-card">
<ul>
<li><strong>Model pre-loading</strong> — The Docker entrypoint loads the model into GPU memory at container startup. First request is fast.</li>
<li><strong>Half-precision inference</strong> — Using FP16 instead of FP32 halves GPU memory usage with negligible quality loss. Fits a 4GB model into 2.2GB.</li>
</ul>
</div>

<h3>Caching Strategy</h3>
<p>Duplicate text requests hit a Redis cache instead of the GPU. The cache key is a SHA-256 hash of the text + voice parameters. For a typical workload where 30-40% of requests are repeats (think: navigation prompts, error messages), this reduces GPU load significantly.</p>
<p>Cache TTL is 24 hours. Audio files older than 24 hours are evicted and regenerated on next request. The cache hit rate stabilised at 34% — meaning 34% of requests never touch the GPU.</p>

<h3>Monitoring & Observability</h3>
<p>The Grafana dashboard tracks four critical metrics:</p>
<div class="glass-card">
<table>
<thead>
<tr>
<th>Metric</th>
<th>Alert Threshold</th>
<th>Current Value</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>P95 latency</strong></td>
<td>Above 200ms</td>
<td>120ms</td>
</tr>
<tr>
<td><strong>GPU utilization</strong></td>
<td>Above 90%</td>
<td>65% average</td>
</tr>
<tr>
<td><strong>Cache hit rate</strong></td>
<td>Below 25%</td>
<td>34%</td>
</tr>
<tr>
<td><strong>Error rate</strong></td>
<td>Above 1%</td>
<td>0.1%</td>
</tr>
</tbody>
</table>
</div>
<p>The dashboard caught a GPU memory leak in week 2 that would have caused silent failures. Without monitoring, we'd have discovered it through user complaints. With it, we fixed it before anyone noticed.</p>

<h3>Scaling for Production</h3>
<p>Initial capacity planning assumed 5,000 requests/day. We hit 10,000 within a month. The scaling path was simple: add a second GPU container behind a load balancer. Docker Compose made this trivial — duplicate the service definition, assign a different port, and the load balancer distributes requests.</p>
<p>Current capacity: 25,000 requests/day on two containers. We're not close to the ceiling.</p>
</section>

<section class="glass-section">
<h2>Results & Metrics</h2>
<p>After six months in production:</p>
<div class="glass-card">
<table>
<thead>
<tr>
<th>Metric</th>
<th>Cloud APIs</th>
<th>Self-Hosted</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Monthly cost</strong></td>
<td>$150-300</td>
<td>$25-40</td>
</tr>
<tr>
<td><strong>P50 latency</strong></td>
<td>180ms</td>
<td>65ms</td>
</tr>
<tr>
<td><strong>P95 latency</strong></td>
<td>350ms</td>
<td>120ms</td>
</tr>
<tr>
<td><strong>P99 latency</strong></td>
<td>500ms</td>
<td>180ms</td>
</tr>
<tr>
<td><strong>Uptime</strong></td>
<td>99.9% (provider SLA)</td>
<td>99.99% (self-managed)</td>
</tr>
<tr>
<td><strong>Daily requests</strong></td>
<td>Limited by quota</td>
<td>10,000+ (no limit)</td>
</tr>
<tr>
<td><strong>Cost per 1,000 requests</strong></td>
<td>$0.15-0.30</td>
<td>$0.01-0.02</td>
</tr>
</tbody>
</table>
</div>
<p>The latency improvement is the surprise win. We expected cost savings. We didn't expect <strong>3x lower latency</strong> — but of course local inference has no network round-trip.</p>
<p>Uptime is 99.99% because we control the infrastructure. No provider outages, no rate limit throttling, no "service degradation" banners. If something breaks, we fix it immediately — not wait for a provider's incident response.</p>
</section>

<section class="glass-section">
<h2>Challenges & Solutions</h2>

<div class="glass-card">
<h4><i class="fas fa-memory"></i> GPU Memory Limits</h4>
<p>The initial deployment loaded the full model at FP32 precision — 4GB of GPU memory. Adding voice variants pushed us over the 6GB limit on our RTX 3060.</p>
<p><strong>Solution:</strong> FP16 inference reduced memory usage to 2.2GB. Combined with model pre-loading, we fit three voice variants into 4GB of GPU memory with headroom.</p>
</div>

<div class="glass-card">
<h4><i class="fas fa-clock"></i> Model Loading Times</h4>
<p>Cold starts took 2-3 seconds while the model loaded from disk to GPU. For a production API, that's unacceptable.</p>
<p><strong>Solution:</strong> The Docker entrypoint pre-loads the model at container startup. First request latency dropped from 2.5 seconds to 80ms. The trade-off: container startup takes 15 seconds longer. Worth it.</p>
</div>

<div class="glass-card">
<h4><i class="fas fa-shield-alt"></i> Fallback Strategies</h4>
<p>What happens when the GPU server goes down? We implemented a fallback to a cloud TTS API for critical requests (payment confirmations, security alerts). Non-critical requests queue and retry.</p>
<p>The fallback has been triggered twice in six months — both times for planned maintenance, not failures.</p>
</div>
</section>

<section class="glass-section">
<h2>Conclusion</h2>
<p>Self-hosted TTS is viable for production. The numbers speak for themselves: 90% cost reduction, 3x lower latency, 99.99% uptime, and zero data leaving your infrastructure.</p>
<p>The key insight: you don't need Kubernetes or a massive infrastructure team. Two Docker containers, a Redis cache, and a monitoring dashboard. That's it.</p>
<p>If you're evaluating self-hosted AI infrastructure for text-to-speech or other models, <a href="https://nemesisnet.co.za/contact">let's talk</a>. We've been through the GPU sizing, the model optimization, and the production hardening — so you don't have to.</p>
</section>

<div class="glass-card">
<h3>Need Help Deploying AI Infrastructure?</h3>
<p>We design and deploy self-hosted AI pipelines for South African businesses. Whether it's TTS, LLM inference, or custom models, we can help you run AI on your own hardware at a fraction of the cloud cost.</p>
<div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 15px;">
<a href="https://nemesisnet.co.za/contact" class="btn-aurora">Contact Us</a>
<a href="https://nemesisnet.co.za/services/self-hosted-ai" class="btn-ghost">Self-Hosted AI Services</a>
<a href="https://nemesisnet.co.za/services/ai-development" class="btn-ghost">AI Development Services</a>
</div>
</div>

<section class="glass-section">
<h2>Related Reading</h2>
<div class="glass-card">
<ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
<li><a href="https://nemesisnet.co.za/services/self-hosted-ai">Self-Hosted AI Services</a> — Run AI models on your own infrastructure</li>
<li><a href="https://nemesisnet.co.za/services/ai-development">AI Development Services</a> — Custom AI solutions and integrations</li>
<li><a href="https://nemesisnet.co.za/projects">View Our Projects</a> — See what we've built</li>
</ul>
</div>
</section>
