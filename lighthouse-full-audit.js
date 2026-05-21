const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const fs = require('fs');
const path = require('path');

const PAGES_TO_AUDIT = [
  { url: 'https://nemesisnet.co.za/', name: 'Homepage' },
  { url: 'https://nemesisnet.co.za/projects', name: 'Projects' },
  { url: 'https://nemesisnet.co.za/services', name: 'Services' },
  { url: 'https://nemesisnet.co.za/about', name: 'About' },
  { url: 'https://nemesisnet.co.za/projects/kokoro-tts', name: 'Project: Kokoro TTS' },
  { url: 'https://nemesisnet.co.za/projects/wordpress-mcp', name: 'Project: WordPress MCP' },
  { url: 'https://nemesisnet.co.za/projects/nk-assessments', name: 'Project: NK Assessments' },
  { url: 'https://nemesisnet.co.za/projects/codecritical-cli', name: 'Project: CodeCritical CLI' },
  { url: 'https://nemesisnet.co.za/projects/codecritical-saas', name: 'Project: CodeCritical SaaS' },
  { url: 'https://nemesisnet.co.za/projects/vibetype', name: 'Project: VibeType' },
  { url: 'https://nemesisnet.co.za/projects/forkmyfolio', name: 'Project: ForkMyFolio' },
  { url: 'https://nemesisnet.co.za/projects/onthegorentals', name: 'Project: OnTheGoRentals' },
  { url: 'https://nemesisnet.co.za/projects/bored-room-cafe', name: 'Project: Bored Room Cafe' },
  { url: 'https://nemesisnet.co.za/projects/voxnemesis-supertonic', name: 'Project: VoxNemesis' },
  { url: 'https://nemesisnet.co.za/projects/since', name: 'Project: Since' },
  { url: 'https://nemesisnet.co.za/services/custom-software', name: 'Service: Custom Software' },
  { url: 'https://nemesisnet.co.za/services/saas-development', name: 'Service: SaaS Dev' },
  { url: 'https://nemesisnet.co.za/services/infrastructure', name: 'Service: Infrastructure' },
  { url: 'https://nemesisnet.co.za/services/consulting', name: 'Service: Consulting' },
  { url: 'https://nemesisnet.co.za/legal/terms', name: 'Legal: Terms' },
  { url: 'https://nemesisnet.co.za/legal/privacy', name: 'Legal: Privacy' },
  { url: 'https://nemesisnet.co.za/legal/refund', name: 'Legal: Refund' }
];

async function auditPage(browser, pageUrl, pageName) {
  const port = new URL(browser.wsEndpoint()).port;
  
  try {
    const { lhr } = await lighthouse.default(pageUrl, {
      port,
      output: 'json',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      emulatedFormFactor: 'desktop'
    });

    return {
      name: pageName,
      url: pageUrl,
      scores: {
        performance: Math.round((lhr.categories.performance?.score || 0) * 100),
        accessibility: Math.round((lhr.categories.accessibility?.score || 0) * 100),
        bestPractices: Math.round((lhr.categories['best-practices']?.score || 0) * 100),
        seo: Math.round((lhr.categories.seo?.score || 0) * 100)
      },
      metrics: {
        fcp: Math.round(lhr.audits['first-contentful-paint']?.numericValue || 0),
        lcp: Math.round(lhr.audits['largest-contentful-paint']?.numericValue || 0),
        cls: lhr.audits['cumulative-layout-shift']?.numericValue?.toFixed(3) || 0,
        tbt: Math.round(lhr.audits['total-blocking-time']?.numericValue || 0),
        si: Math.round(lhr.audits['speed-index']?.numericValue || 0),
        ttfb: Math.round(lhr.audits['server-response-time']?.numericValue || 0)
      },
      issues: []
    };
  } catch (err) {
    return {
      name: pageName,
      url: pageUrl,
      error: err.message
    };
  }
}

async function runFullAudit() {
  console.log('🚀 Starting Multi-Page Lighthouse Audit\n');
  console.log(`Auditing ${PAGES_TO_AUDIT.length} pages...\n`);
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    defaultViewport: { width: 1920, height: 1080 }
  });

  const results = [];
  
  for (let i = 0; i < PAGES_TO_AUDIT.length; i++) {
    const page = PAGES_TO_AUDIT[i];
    process.stdout.write(`[${i + 1}/${PAGES_TO_AUDIT.length}] Auditing ${page.name}... `);
    
    const result = await auditPage(browser, page.url, page.name);
    results.push(result);
    
    if (result.error) {
      console.log(`❌ FAILED: ${result.error}`);
    } else {
      const avg = Math.round((result.scores.performance + result.scores.accessibility + result.scores.bestPractices + result.scores.seo) / 4);
      console.log(`✅ P:${result.scores.performance} A:${result.scores.accessibility} BP:${result.scores.bestPractices} S:${result.scores.seo} (Avg: ${avg})`);
    }
  }
  
  await browser.close();
  
  // Calculate averages
  const validResults = results.filter(r => !r.error);
  const avgScores = {
    performance: Math.round(validResults.reduce((a, r) => a + r.scores.performance, 0) / validResults.length),
    accessibility: Math.round(validResults.reduce((a, r) => a + r.scores.accessibility, 0) / validResults.length),
    bestPractices: Math.round(validResults.reduce((a, r) => a + r.scores.bestPractices, 0) / validResults.length),
    seo: Math.round(validResults.reduce((a, r) => a + r.scores.seo, 0) / validResults.length)
  };
  
  const avgMetrics = {
    fcp: Math.round(validResults.reduce((a, r) => a + r.metrics.fcp, 0) / validResults.length),
    lcp: Math.round(validResults.reduce((a, r) => a + r.metrics.lcp, 0) / validResults.length),
    cls: (validResults.reduce((a, r) => a + parseFloat(r.metrics.cls), 0) / validResults.length).toFixed(3),
    tbt: Math.round(validResults.reduce((a, r) => a + r.metrics.tbt, 0) / validResults.length),
    si: Math.round(validResults.reduce((a, r) => a + r.metrics.si, 0) / validResults.length),
    ttfb: Math.round(validResults.reduce((a, r) => a + r.metrics.ttfb, 0) / validResults.length)
  };
  
  console.log('\n' + '='.repeat(70));
  console.log('📊 SITE-WIDE LIGHTHOUSE AUDIT RESULTS');
  console.log('='.repeat(70));
  
  console.log('\n📈 AVERAGE SCORES ACROSS ALL PAGES');
  console.log('-----------------------------------');
  console.log(`✅ Performance:    ${avgScores.performance}/100`);
  console.log(`✅ Accessibility:  ${avgScores.accessibility}/100`);
  console.log(`✅ Best Practices: ${avgScores.bestPractices}/100`);
  console.log(`✅ SEO:            ${avgScores.seo}/100`);
  
  console.log('\n📈 AVERAGE CORE WEB VITALS');
  console.log('---------------------------');
  console.log(`✅ First Contentful Paint:     ${avgMetrics.fcp}ms`);
  console.log(`✅ Largest Contentful Paint:  ${avgMetrics.lcp}ms`);
  console.log(`✅ Cumulative Layout Shift:   ${avgMetrics.cls}`);
  console.log(`✅ Total Blocking Time:        ${avgMetrics.tbt}ms`);
  console.log(`✅ Speed Index:                ${avgMetrics.si}ms`);
  console.log(`✅ Time to First Byte:         ${avgMetrics.ttfb}ms`);
  
  console.log('\n📄 PAGE-BY-PAGE BREAKDOWN');
  console.log('--------------------------');
  console.log('Page                              | Perf | Acc  | BP   | SEO');
  console.log('-'.repeat(70));
  
  for (const r of results) {
    if (r.error) {
      console.log(`${r.name.padEnd(35)} | ERROR: ${r.error.substring(0, 30)}`);
    } else {
      console.log(`${r.name.padEnd(35)} | ${r.scores.performance.toString().padStart(4)} | ${r.scores.accessibility.toString().padStart(4)} | ${r.scores.bestPractices.toString().padStart(4)} | ${r.scores.seo.toString().padStart(4)}`);
    }
  }
  
  // Save detailed report
  const reportPath = path.join(__dirname, 'full-site-audit.json');
  fs.writeFileSync(reportPath, JSON.stringify({ 
    generated: new Date().toISOString(),
    pagesAudited: PAGES_TO_AUDIT.length,
    averages: avgScores,
    averageMetrics: avgMetrics,
    results 
  }, null, 2));
  
  console.log(`\n📄 Full report saved to: ${reportPath}`);
  console.log('\n✨ Audit complete!');
}

runFullAudit();