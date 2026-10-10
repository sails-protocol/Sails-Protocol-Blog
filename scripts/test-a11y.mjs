import {chromium} from 'playwright';
import AxeBuilder from '@axe-core/playwright';
const base = process.env.A11Y_BASE_URL || 'http://127.0.0.1:3000';
const browser = await chromium.launch({headless: true});
let failed = false;
try {
  for (const route of ['/', '/articles/', '/articles/what-is-sails-protocol']) {
    const page = await browser.newPage();
    try {
      const response = await page.goto(new URL(route, base).href, {waitUntil: 'networkidle'});
      if (!response?.ok()) throw new Error(route + ': HTTP ' + response?.status());
      const result = await new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
      if (result.violations.length) {
        failed = true;
        for (const violation of result.violations) {
          console.error(route, violation.id, violation.impact, violation.nodes.map(n => n.target).join(', '));
        }
      } else console.log(route, 'axe WCAG 2.1 AA: no detected violations');
    } finally { await page.close(); }
  }
} finally { await browser.close(); }
if (failed) process.exitCode = 1;
