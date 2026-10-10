import {chromium} from 'playwright';
import AxeBuilder from '@axe-core/playwright';
const base = process.env.A11Y_BASE_URL || 'http://127.0.0.1:3000';
const browser = await chromium.launch({headless: true});
let failed = false;
try {
  for (const viewport of [{width: 1280, height: 800}, {width: 390, height: 844}]) {
  for (const route of ['/', '/articles/', '/articles/what-is-sails-protocol']) {
    const context = await browser.newContext({viewport});
    const page = await context.newPage();
    try {
      const response = await page.goto(new URL(route, base).href, {waitUntil: 'networkidle'});
      if (!response?.ok()) throw new Error(route + ': HTTP ' + response?.status());
      const pageErrors = [];
      page.on('pageerror', error => pageErrors.push(error.message));
      await page.reload({waitUntil: 'networkidle'});
      if (pageErrors.length) { failed = true; console.error(route, viewport.width, 'browser JavaScript errors:', pageErrors); }
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      if (overflow) { failed = true; console.error(route, viewport.width, 'horizontal page overflow'); }
      const result = await new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
      if (result.violations.length) {
        failed = true;
        for (const violation of result.violations) {
          console.error(route, viewport.width, violation.id, violation.impact, violation.nodes.map(n => n.target).join(', '));
        }
      } else console.log(route, viewport.width, 'axe WCAG 2.1 AA: no detected violations');
    } finally { await context.close(); }
  }
  }
} finally { await browser.close(); }
if (failed) process.exitCode = 1;
