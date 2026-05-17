const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse').default || require('lighthouse');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://dev.nemesisnet.co.za';

const routes = [
  // Desktop tests
  { path: '/', name: 'homepage', device: 'desktop' },
  { path: '/projects', name: 'projects', device: 'desktop' },
  { path: '/contact', name: 'contact', device: 'desktop' },
  { path: '/services', name: 'services', device: 'desktop' },
  { path: '/about', name: 'about', device: 'desktop' },
  { path: '/services/custom-software', name: 'custom-software', device: 'desktop' },
  { path: '/services/saas-development', name: 'saas-development', device: 'desktop' },
  { path: '/services/ai-development', name: 'ai-development', device: 'desktop' },
  { path: '/services/self-hosted-ai', name: 'self-hosted-ai', device: 'desktop' },
  { path: '/services/infrastructure', name: 'infrastructure', device: 'desktop' },
  { path: '/services/consulting', name: 'consulting', device: 'desktop' },
  { path: '/projects/kokoro-tts', name: 'kokoro-tts', device: 'desktop' },
  { path: '/projects/wordpress-mcp', name: 'wordpress-mcp', device: 'desktop' },
  { path: '/projects/nk-assessments', name: 'nk-assessments', device: 'desktop' },
  { path: '/projects/codecritical', name: 'codecritical', device: 'desktop' },
  { path: '/projects/vibetype', name: 'vibetype', device: 'desktop' },
  { path: '/projects/forkmyfolio', name: 'forkmyfolio', device: 'desktop' },
  { path: '/projects/onthegorentals', name: 'onthegorentals', device: 'desktop' },
  { path: '/projects/bored-room-cafe', name: 'bored-room-cafe', device: 'desktop' },
  { path: '/projects/codecritical-saas', name: 'codecritical-saas', device: 'desktop' },
  { path: '/projects/since', name: 'since', device: 'desktop' },
  { path: '/projects/voxnemesis-supertonic', name: 'voxnemesis-supertonic', device: 'desktop' },
  { path: '/projects/pockettts-mcp', name: 'pockettts-mcp', device: 'desktop' },
  { path: '/legal/privacy', name: 'privacy', device: 'desktop' },
  { path: '/legal/terms', name: 'terms', device: 'desktop' },
  { path: '/legal/refund', name: 'refund', device: 'desktop' },
  // Mobile tests
  { path: '/', name: 'homepage-mobile', device: 'mobile' },
  { path: '/projects', name: 'projects-mobile', device: 'mobile' },
  { path: '/contact', name: 'contact-mobile', device: 'mobile' },
  { path: '/services', name: 'services-mobile', device: 'mobile' },
  { path: '/about', name: 'about-mobile', device: 'mobile' },
  { path: '/services/custom-software', name: 'custom-software-mobile', device: 'mobile' },
  { path: '/services/saas-development', name: 'saas-development-mobile', device: 'mobile' },
  { path: '/services/ai-development', name: 'ai-development-mobile', device: 'mobile' },
  { path: '/services/self-hosted-ai', name: 'self-hosted-ai-mobile', device: 'mobile' },
  { path: '/services/infrastructure', name: 'infrastructure-mobile', device: 'mobile' },
  { path: '/services/consulting', name: 'consulting-mobile', device: 'mobile' },
  { path: '/projects/kokoro-tts', name: 'kokoro-tts-mobile', device: 'mobile' },
  { path: '/projects/wordpress-mcp', name: 'wordpress-mcp-mobile', device: 'mobile' },
  { path: '/projects/nk-assessments', name: 'nk-assessments-mobile', device: 'mobile' },
  { path: '/projects/codecritical', name: 'codecritical-mobile', device: 'mobile' },
  { path: '/projects/vibetype', name: 'vibetype-mobile', device: 'mobile' },
  { path: '/projects/forkmyfolio', name: 'forkmyfolio-mobile', device: 'mobile' },
  { path: '/projects/onthegorentals', name: 'onthegorentals-mobile', device: 'mobile' },
  { path: '/projects/bored-room-cafe', name: 'bored-room-cafe-mobile', device: 'mobile' },
  { path: '/projects/codecritical-saas', name: 'codecritical-saas-mobile', device: 'mobile' },
  { path: '/projects/since', name: 'since-mobile', device: 'mobile' },
  { path: '/projects/voxnemesis-supertonic', name: 'voxnemesis-supertonic-mobile', device: 'mobile' },
  { path: '/projects/pockettts-mcp', name: 'pockettts-mcp-mobile', device: 'mobile' },
  { path: '/legal/privacy', name: 'privacy-mobile', device: 'mobile' },
  { path: '/legal/terms', name: 'terms-mobile', device: 'mobile' },
  { path: '/legal/refund', name: 'refund-mobile', device: 'mobile' },
];

const thresholds = {
  performance: 75,
  accessibility: 90,
  'best-practices': 90,
  seo: 90
};

// Mobile thresholds (slightly lower for realistic expectations)
const mobileThresholds = {
  performance: 70,
  accessibility: 90,
  'best-practices': 90,
  seo: 90
};

async function runLighthouse(url, name, device) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ],
    defaultViewport: device === 'mobile' ? { width: 375, height: 667 } : { width: 1920, height: 1080 }
  });

  try {
    const port = new URL(browser.wsEndpoint()).port;
    
    const { lhr } = await lighthouse(url, {
      port,
      output: 'json',
      outputPath: path.join(__dirname, `lighthouse-report-${name}.json`),
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      emulatedFormFactor: device === 'mobile' ? 'mobile' : 'desktop'
    });

    return {
      name,
      device,
      url,
      categories: lhr.categories,
      audits: lhr.audits
    };
  } finally {
    await browser.close();
  }
}

function getScore(category) {
  return Math.round((category?.score || 0) * 100);
}

function printResults(results) {
  console.log('\n📊 LIGHTHOUSE AUDIT RESULTS');
  console.log('===========================\n');

  let failedPages = [];
  let totalScores = { performance: 0, accessibility: 0, 'best-practices': 0, seo: 0 };
  let count = 0;

  for (const result of results) {
    const perf = getScore(result.categories.performance);
    const access = getScore(result.categories.accessibility);
    const bp = getScore(result.categories['best-practices']);
    const seo = getScore(result.categories.seo);

    totalScores.performance += perf;
    totalScores.accessibility += access;
    totalScores['best-practices'] += bp;
    totalScores.seo += seo;
    count++;

    const isMobile = result.device === 'mobile';
    const effectiveThresholds = isMobile ? mobileThresholds : thresholds;

    const allPass = perf >= effectiveThresholds.performance && 
                    access >= effectiveThresholds.accessibility && 
                    bp >= effectiveThresholds['best-practices'] && 
                    seo >= effectiveThresholds.seo;

    const status = allPass ? '✅' : '❌';
    console.log(`${status} ${result.name} (${result.device})`);
    console.log(`   Performance: ${perf}/100 | Accessibility: ${access}/100 | Best Practices: ${bp}/100 | SEO: ${seo}/100`);

    if (!allPass) {
      const failed = [];
      if (perf < effectiveThresholds.performance) failed.push(`Perf: ${perf}<${effectiveThresholds.performance}`);
      if (access < effectiveThresholds.accessibility) failed.push(`Access: ${access}<${effectiveThresholds.accessibility}`);
      if (bp < effectiveThresholds['best-practices']) failed.push(`BP: ${bp}<${effectiveThresholds['best-practices']}`);
      if (seo < effectiveThresholds.seo) failed.push(`SEO: ${seo}<${effectiveThresholds.seo}`);
      failedPages.push({ name: result.name, device: result.device, failed });
    }
  }

  console.log('\n📈 AVERAGES');
  console.log('-----------');
  console.log(`   Performance: ${Math.round(totalScores.performance / count)}/100`);
  console.log(`   Accessibility: ${Math.round(totalScores.accessibility / count)}/100`);
  console.log(`   Best Practices: ${Math.round(totalScores['best-practices'] / count)}/100`);
  console.log(`   SEO: ${Math.round(totalScores.seo / count)}/100`);

  if (failedPages.length > 0) {
    console.log('\n❌ FAILED THRESHOLDS');
    console.log('--------------------');
    for (const page of failedPages) {
      console.log(`   ${page.name} (${page.device}): ${page.failed.join(', ')}`);
    }
  } else {
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
    console.log(`Testing: ${route.name} (${route.device})...`);
    try {
      const result = await runLighthouse(url, route.name, route.device);
      results.push(result);
    } catch (error) {
      console.error(`   Error testing ${route.name}: ${error.message}`);
    }
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