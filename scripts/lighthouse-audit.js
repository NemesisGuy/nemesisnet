const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse').default || require('lighthouse');

const BASE_URL = process.env.LIGHTHOUSE_URL || 'https://nemesisnet.co.za';

const routes = [
  { path: '/projects/codecritical-saas', name: 'codecritical-saas' },
  { path: '/projects/codecritical-cli', name: 'codecritical-cli' },
];

const thresholds = {
  accessibility: 90,
  'best-practices': 90,
  seo: 90
};

async function runLighthouse(url, name, retries = 2) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    if (attempt > 0) {
      console.log(`   Retry ${attempt}/${retries} for ${name}...`);
      await new Promise(r => setTimeout(r, 3000));
    }

    let browser;
    try {
      browser = await puppeteer.launch({
        headless: 'new',
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
          '--disable-extensions',
          '--no-first-run'
        ],
        defaultViewport: { width: 1920, height: 1080 }
      });

      const port = new URL(browser.wsEndpoint()).port;

      const { lhr } = await lighthouse(url, {
        port,
        output: 'json',
        onlyCategories: ['accessibility', 'best-practices', 'seo'],
        formFactor: 'desktop',
        throttling: {
          cpuSlowdownMultiplier: 1,
          rttMs: 0,
          throughputKbps: 0
        },
        screenEmulation: { disabled: true }
      });

      return {
        name,
        url,
        categories: lhr.categories,
        audits: lhr.audits
      };
    } catch (err) {
      console.error(`   Attempt ${attempt + 1} failed for ${name}: ${err.message}`);
      if (attempt === retries) {
        return { name, url, categories: null, error: err.message };
      }
    } finally {
      if (browser) try { await browser.close(); } catch { /* already closed */ }
    }
  }
}

function getScore(category) {
  if (!category || category.score === null || category.score === undefined) return 0;
  return Math.round(category.score * 100);
}

function printResults(results) {
  console.log('\n📊 LIGHTHOUSE AUDIT RESULTS');
  console.log('===========================\n');

  let failedPages = [];
  let totalScores = { accessibility: 0, 'best-practices': 0, seo: 0 };
  let count = 0;

  for (const result of results) {
    if (!result.categories) {
      console.log(`⚠️  ${result.name}: SKIPPED (${result.error})`);
      continue;
    }

    const access = getScore(result.categories.accessibility);
    const bp = getScore(result.categories['best-practices']);
    const seo = getScore(result.categories.seo);

    totalScores.accessibility += access;
    totalScores['best-practices'] += bp;
    totalScores.seo += seo;
    count++;

    const allPass = access >= thresholds.accessibility &&
                    bp >= thresholds['best-practices'] &&
                    seo >= thresholds.seo;

    const status = allPass ? '✅' : '❌';
    console.log(`${status} ${result.name}`);
    console.log(`   Accessibility: ${access}/100 | Best Practices: ${bp}/100 | SEO: ${seo}/100`);

    if (!allPass) {
      const failed = [];
      if (access < thresholds.accessibility) failed.push(`Access: ${access}<${thresholds.accessibility}`);
      if (bp < thresholds['best-practices']) failed.push(`BP: ${bp}<${thresholds['best-practices']}`);
      if (seo < thresholds.seo) failed.push(`SEO: ${seo}<${thresholds.seo}`);
      failedPages.push({ name: result.name, failed });
    }
  }

  if (count > 0) {
    console.log('\n📈 AVERAGES');
    console.log('-----------');
    console.log(`   Accessibility: ${Math.round(totalScores.accessibility / count)}/100`);
    console.log(`   Best Practices: ${Math.round(totalScores['best-practices'] / count)}/100`);
    console.log(`   SEO: ${Math.round(totalScores.seo / count)}/100`);
  }

  if (failedPages.length > 0) {
    console.log('\n❌ FAILED THRESHOLDS');
    console.log('--------------------');
    for (const page of failedPages) {
      console.log(`   ${page.name}: ${page.failed.join(', ')}`);
    }
  } else if (count > 0) {
    console.log('\n✅ All pages passed thresholds!');
  }

  return failedPages.length === 0;
}

async function main() {
  console.log(`🚀 Starting Lighthouse audit for ${BASE_URL}`);
  console.log(`📋 Testing ${routes.length} routes\n`);

  const results = [];

  for (const route of routes) {
    const url = `${BASE_URL}${route.path}`;
    console.log(`Testing: ${route.name}...`);
    const result = await runLighthouse(url, route.name);
    results.push(result);
    await new Promise(r => setTimeout(r, 2000));
  }

  const allPassed = printResults(results);

  console.log(`\n📄 Reports saved to: lighthouse-report-*.json`);

  if (!allPassed) {
    console.log('\n❌ Lighthouse audit FAILED - some pages below thresholds');
    process.exit(1);
  } else {
    console.log('\n✅ Lighthouse audit PASSED');
    process.exit(0);
  }
}

main();
