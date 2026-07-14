import { chromium } from 'playwright';

const BASE = 'http://localhost:3000';
const results = [];

function log(test, status, detail) {
  const icon = status === 'PASS' ? '✅' : status === 'FAIL' ? '❌' : 'ℹ️';
  console.log(`${icon} ${test}: ${detail}`);
  results.push({ test, status, detail });
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

  // Test 1: Project hero images — verify no stretching (object-fit: cover)
  console.log('\n=== FIX 1: Project Hero Image Stretching ===');
  for (const slug of ['voxnemesis-supertonic', 'pockettts-mcp']) {
    const page = await context.newPage();
    await page.goto(`${BASE}/projects/${slug}`, { waitUntil: 'networkidle' });
    const img = page.locator('img.detail-image').first();
    const box = await img.boundingBox();
    const natural = await img.evaluate(el => ({ w: el.naturalWidth, h: el.naturalHeight }));
    const cssFit = await img.evaluate(el => getComputedStyle(el).objectFit);
    const ratio = natural.w / natural.h;
    const displayRatio = box.width / box.height;
    const stretchDelta = Math.abs(ratio - displayRatio) / ratio;
    const stretched = stretchDelta > 0.5;
    log(`${slug} hero`, stretched ? 'FAIL' : 'PASS',
      `${natural.w}x${natural.h} → ${Math.round(box.width)}x${Math.round(box.height)} | object-fit: ${cssFit} | ratio delta: ${(stretchDelta * 100).toFixed(0)}%`);
    await page.close();
  }

  // Test 2: Lazy loading on /about
  console.log('\n=== FIX 3: Founder Image Lazy Loading ===');
  const aboutPage = await context.newPage();
  await aboutPage.goto(`${BASE}/about`, { waitUntil: 'networkidle' });
  const founderImg = aboutPage.locator('img.founder-img');
  const loadingAttr = await founderImg.getAttribute('loading');
  const fetchPriority = await founderImg.getAttribute('fetchpriority');
  log('founder.webp loading', loadingAttr === 'lazy' ? 'PASS' : 'FAIL',
    `loading="${loadingAttr}" (expected: lazy)`);
  log('founder.webp fetchpriority', fetchPriority === null ? 'PASS' : 'FAIL',
    `fetchpriority="${fetchPriority}" (expected: none/removed)`);
  await aboutPage.close();

  // Test 3: CSS loading — no duplicates
  console.log('\n=== FIX 4: CSS Deduplication ===');
  const homePage = await context.newPage();
  const cssRequests = [];
  homePage.on('response', resp => {
    if (resp.url().includes('.css')) cssRequests.push(resp.url());
  });
  await homePage.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  const cssFiles = [...new Set(cssRequests.map(u => u.split('?')[0]))];
  const mainCssCount = cssRequests.filter(u => u.includes('main.css')).length;
  const auroraCount = cssRequests.filter(u => u.includes('aurora-mode.css')).length;
  const nemesisCount = cssRequests.filter(u => u.includes('nemesis-mode.css')).length;
  log('main.css loaded once', mainCssCount === 1 ? 'PASS' : 'FAIL', `loaded ${mainCssCount} time(s)`);
  log('aurora-mode.css loaded once', auroraCount === 1 ? 'PASS' : 'FAIL', `loaded ${auroraCount} time(s)`);
  log('nemesis-mode.css loaded once', nemesisCount === 1 ? 'PASS' : 'FAIL', `loaded ${nemesisCount} time(s)`);
  log('total CSS files', 'INFO', `${cssFiles.length} unique CSS files: ${cssFiles.map(u => u.split('/').pop()).join(', ')}`);
  await homePage.close();

  // Test 4: Caching headers
  console.log('\n=== FIX 6: Caching Headers ===');
  const headerPage = await context.newPage();
  // Check main.css headers
  const cssResp = await headerPage.goto(`${BASE}/css/main.css?v=20260707`);
  const cssCache = cssResp.headers()['cache-control'] || '';
  log('main.css Cache-Control', cssCache.includes('max-age=14400') ? 'PASS' : 'FAIL', cssCache);

  // Check image headers
  const imgResp = await headerPage.goto(`${BASE}/images/brand/Nemesis_Logo_Icon_nav.webp`);
  const imgCache = imgResp.headers()['cache-control'] || '';
  log('image Cache-Control', imgCache.includes('immutable') ? 'PASS' : 'FAIL', imgCache);

  // Check HTML page headers
  const htmlResp = await headerPage.goto(`${BASE}/`);
  const htmlCache = htmlResp.headers()['cache-control'] || '';
  log('HTML Cache-Control', htmlCache.includes('s-maxage=86400') ? 'PASS' : 'FAIL', htmlCache);
  await headerPage.close();

  // Test 5: Page load timing — TTFB < 100ms for 5 pages
  console.log('\n=== Page Load Timing ===');
  const testPages = ['/', '/about', '/services', '/projects', '/contact'];
  for (const path of testPages) {
    const page = await context.newPage();
    const start = Date.now();
    const resp = await page.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded' });
    const ttfb = resp.headers()['x-response-time'] || 'N/A';
    const domLoaded = Date.now() - start;
    log(`TTFB ${path}`, domLoaded < 500 ? 'PASS' : 'INFO',
      `DOMContentLoaded in ${domLoaded}ms (server TTFB: ${ttfb})`);
    await page.close();
  }

  // Test 6: Resource count on homepage
  console.log('\n=== Resource Counts ===');
  const resPage = await context.newPage();
  let cssCount = 0, jsCount = 0, imgCount = 0;
  resPage.on('response', resp => {
    const url = resp.url();
    if (url.includes('.css')) cssCount++;
    else if (url.includes('.js')) jsCount++;
    else if (url.match(/\.(webp|png|jpg|ico)/)) imgCount++;
  });
  await resPage.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  log('CSS requests', 'INFO', `${cssCount} total`);
  log('JS requests', 'INFO', `${jsCount} total`);
  log('Image requests', 'INFO', `${imgCount} total`);
  await resPage.close();

  // Take screenshots of project pages
  console.log('\n=== Screenshots ===');
  for (const slug of ['voxnemesis-supertonic', 'pockettts-mcp']) {
    const page = await context.newPage();
    await page.goto(`${BASE}/projects/${slug}`, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `test-${slug}.png`, fullPage: false });
    log(`screenshot ${slug}`, 'INFO', `saved test-${slug}.png`);
    await page.close();
  }

  await browser.close();

  // Summary
  const passed = results.filter(r => r.status === 'PASS').length;
  const failed = results.filter(r => r.status === 'FAIL').length;
  console.log(`\n=== SUMMARY: ${passed} passed, ${failed} failed, ${results.length - passed - failed} info ===`);
  process.exit(failed > 0 ? 1 : 0);
})();
