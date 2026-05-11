const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const fs = require('fs');
const path = require('path');

async function runLighthouseAudit() {
  const url = 'https://dev.nemesisnet.co.za';
  const outputDir = __dirname;

  console.log('🚀 Starting Lighthouse audit for:', url);
  console.log('');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ],
    defaultViewport: { width: 1920, height: 1080 }
  });

  try {
    const port = new URL(browser.wsEndpoint()).port;
    
    // Use the lighthouse.default function
    const { lhr } = await lighthouse.default(url, {
      port,
      output: 'json',
      outputPath: path.join(outputDir, 'lighthouse-report.json'),
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      emulatedFormFactor: 'desktop'
    });

    console.log('📊 Lighthouse Audit Results');
    console.log('==========================\n');

    const categories = lhr.categories;
    const scores = {
      Performance: Math.round((categories.performance?.score || 0) * 100),
      Accessibility: Math.round((categories.accessibility?.score || 0) * 100),
      'Best Practices': Math.round((categories['best-practices']?.score || 0) * 100),
      SEO: Math.round((categories.seo?.score || 0) * 100)
    };

    for (const [category, score] of Object.entries(scores)) {
      const emoji = score >= 90 ? '✅' : score >= 50 ? '⚠️' : '❌';
      console.log(`${emoji} ${category}: ${score}/100`);
    }

    console.log('\n📈 Core Web Vitals');
    console.log('------------------');
    
    const audits = lhr.audits;
    const metrics = [
      { name: 'First Contentful Paint', key: 'first-contentful-paint', unit: 'ms' },
      { name: 'Largest Contentful Paint', key: 'largest-contentful-paint', unit: 'ms' },
      { name: 'Cumulative Layout Shift', key: 'cumulative-layout-shift', unit: '' },
      { name: 'Total Blocking Time', key: 'total-blocking-time', unit: 'ms' },
      { name: 'Speed Index', key: 'speed-index', unit: 'ms' },
      { name: 'Time to Interactive', key: 'interactive', unit: 'ms' },
      { name: 'Server Response Time', key: 'server-response-time', unit: 'ms' }
    ];

    for (const metric of metrics) {
      const audit = audits[metric.key];
      if (audit && audit.numericValue !== undefined) {
        let value = audit.numericValue;
        if (metric.key === 'cumulative-layout-shift') {
          value = value.toFixed(3);
        } else {
          value = Math.round(value);
        }
        const score = audit.score === null ? 0.5 : audit.score;
        const status = score >= 0.9 ? '✅' : score >= 0.5 ? '⚠️' : '❌';
        console.log(`${status} ${metric.name}: ${value}${metric.unit}`);
      }
    }

    console.log('\n🔍 Detailed Audits');
    console.log('-------------------');

    const detailedAudits = [
      { name: 'Image Alt Text', key: 'image-alt' },
      { name: 'Form Labels', key: 'label' },
      { name: 'Meta Description', key: 'meta-description' },
      { name: 'Meta Viewport', key: 'meta-viewport' },
      { name: 'Document Title', key: 'document-title' },
      { name: 'HTML Lang', key: 'html-has-lang' },
      { name: 'Charset Declared', key: 'charset' },
      { name: 'External Links (noopener)', key: 'external-links-use-rel-noopener' },
      { name: 'Robots.txt', key: 'robots-txt' },
      { name: 'Viewport', key: 'viewport' },
      { name: 'Tap Targets', key: 'tap-targets' },
      { name: 'Contrast Ratio', key: 'color-contrast' }
    ];

    for (const audit of detailedAudits) {
      const result = audits[audit.key];
      if (result) {
        const status = result.score === 1 ? '✅' : result.score === 0 ? '❌' : '⚠️';
        console.log(`${status} ${audit.name}`);
      }
    }

    console.log('\n⚡ Opportunities');
    console.log('----------------');
    const opportunities = audits['render-blocking-resources'];
    if (opportunities && opportunities.score < 1) {
      console.log(`⚠️ Render-blocking resources detected`);
    }
    const usesOptim = audits['uses-optimized-images'];
    if (usesOptim && usesOptim.score < 1) {
      console.log(`⚠️ Some images could be optimized further`);
    }

    console.log('\n📄 Report saved to: lighthouse-report.json');

  } catch (error) {
    console.error('❌ Audit failed:', error.message);
    console.error(error.stack);
  } finally {
    await browser.close();
  }
}

runLighthouseAudit();