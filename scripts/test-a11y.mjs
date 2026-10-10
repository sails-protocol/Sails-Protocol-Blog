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
      const pageErrors = [];
      page.on('pageerror', error => pageErrors.push(error.message));
      const response = await page.goto(new URL(route, base).href, {waitUntil: 'networkidle'});
      if (!response?.ok()) throw new Error(route + ': HTTP ' + response?.status());
      if (pageErrors.length) { failed = true; console.error(route, viewport.width, 'browser JavaScript errors:', pageErrors); }
      const navigation = page.locator('nav.navbar');
      if (!(await navigation.count())) { failed = true; console.error(route, viewport.width, 'missing primary navigation'); }
      const main = page.locator('main');
      if (!(await main.count())) { failed = true; console.error(route, viewport.width, 'missing main landmark'); }
      await page.keyboard.press('Tab');
      const focused = await page.evaluate(() => {
        const el = document.activeElement;
        return !!el && el !== document.body && el !== document.documentElement;
      });
      if (!focused) { failed = true; console.error(route, viewport.width, 'keyboard Tab did not focus an element'); }
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      if (overflow) { failed = true; console.error(route, viewport.width, 'horizontal page overflow'); }
      if (route === '/') {
        const articlesLink = page.locator('a.sails-primary-link[href="/articles"], a.sails-primary-link[href="/articles/"]').first();
        if (!(await articlesLink.count())) { failed = true; console.error(route, viewport.width, 'missing article navigation link'); }
        else {
          await articlesLink.click();
          await page.waitForLoadState('networkidle');
          if (!new URL(page.url()).pathname.startsWith('/articles')) {
            failed = true; console.error(route, viewport.width, 'article navigation failed:', page.url());
          }
          await page.goto(new URL(route, base).href, {waitUntil: 'networkidle'});
        }
      }
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
