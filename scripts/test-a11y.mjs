import {chromium} from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import {readFileSync} from 'node:fs';
const base = process.env.A11Y_BASE_URL || 'http://127.0.0.1:3000';
const publishedRoutes = JSON.parse(readFileSync('src/generated/articles.json', 'utf8')).map(article => '/articles/' + article.slug + '/');
const browser = await chromium.launch({headless: true});
let failed = false;
try {
  for (const viewport of [{width: 1280, height: 800}, {width: 768, height: 1024}, {width: 390, height: 844}]) {
  for (const route of ['/', '/seasons/', '/articles/', ...publishedRoutes]) {
  for (const colorScheme of ['light', 'dark']) {
    const context = await browser.newContext({viewport, colorScheme, reducedMotion: 'reduce'});
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
      await page.evaluate(mode => { document.documentElement.setAttribute('data-theme', mode); }, colorScheme);
      await page.waitForTimeout(100);
      const result = await new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
      if (result.violations.length) {
        failed = true;
        for (const violation of result.violations) {
          console.error(route, viewport.width, colorScheme, violation.id, violation.impact, violation.nodes.map(n => n.target).join(', '));
        }
      } else console.log(route, viewport.width, colorScheme, 'axe WCAG 2.1 AA: no detected violations');
    } finally { await context.close(); }
  }
  }
  }
  // Localized smoke matrix: check rendered PT-BR/ES core pages in both themes
  // at mobile and desktop sizes. Keep the existing full English article matrix
  // separate to avoid tripling the already expensive browser CI.
  for (const locale of ['pt-BR', 'es']) {
    for (const route of ['/', '/seasons/', '/articles/what-is-sails-protocol/']) {
      for (const viewport of [{width: 1280, height: 800}, {width: 390, height: 844}]) {
        for (const colorScheme of ['light', 'dark']) {
          const context = await browser.newContext({viewport, colorScheme, reducedMotion: 'reduce'});
          const page = await context.newPage();
          const path = '/' + locale + route;
          try {
            const pageErrors = [];
            page.on('pageerror', error => pageErrors.push(error.message));
            const response = await page.goto(new URL(path, base).href, {waitUntil: 'networkidle'});
            if (!response?.ok()) throw new Error(path + ': HTTP ' + response?.status());
            if (pageErrors.length) { failed = true; console.error(path, viewport.width, colorScheme, 'browser JavaScript errors:', pageErrors); }
            if (!(await page.locator('main').count())) { failed = true; console.error(path, viewport.width, 'missing main landmark'); }
            const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
            if (overflow) { failed = true; console.error(path, viewport.width, colorScheme, 'horizontal page overflow'); }
            await page.evaluate(mode => { document.documentElement.setAttribute('data-theme', mode); }, colorScheme);
            await page.waitForTimeout(100);
            const result = await new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
            if (result.violations.length) {
              failed = true;
              for (const violation of result.violations) console.error(path, viewport.width, colorScheme, violation.id, violation.impact, violation.nodes.map(n => n.target).join(', '));
            } else console.log(path, viewport.width, colorScheme, 'axe WCAG 2.1 AA: no detected violations');
          } finally { await context.close(); }
        }
      }
    }
  }
  // Mermaid regression: a global prefers-reduced-motion transition override once
  // distorted Mermaid layout (nodes ~2000px apart, viewBox clipping the graph),
  // making diagram text unreadable only for users who request reduced motion.
  for (const reducedMotion of ['no-preference', 'reduce']) {
    for (const viewport of [{width: 1280, height: 800}, {width: 768, height: 1024}, {width: 390, height: 844}]) {
      const context = await browser.newContext({viewport, reducedMotion});
      const page = await context.newPage();
      try {
        await page.goto(new URL('/articles/what-is-sails-protocol/', base).href, {waitUntil: 'networkidle'});
        await page.waitForSelector('article svg[id^="mermaid"] g.node', {timeout: 15000});
        const m = await page.evaluate(() => {
          const svg = document.querySelector('article svg[id^="mermaid"]');
          const svgBox = svg.getBoundingClientRect();
          const nodes = [...svg.querySelectorAll('g.node')].map(g => g.getBoundingClientRect());
          const label = svg.querySelector('g.node foreignObject div, g.node text');
          const vb = svg.viewBox.baseVal;
          const gaps = nodes.slice(1).map((n, i) => n.top - nodes[i].bottom);
          return {
            count: nodes.length,
            allInside: nodes.every(n => n.top >= svgBox.top - 1 && n.bottom <= svgBox.bottom + 1 && n.left >= svgBox.left - 1 && n.right <= svgBox.right + 1),
            maxGap: Math.max(...gaps),
            labelPx: parseFloat(getComputedStyle(label).fontSize) * (svgBox.width / vb.width),
            aspect: vb.height / vb.width
          };
        });
        const label = 'mermaid ' + viewport.width + ' reducedMotion=' + reducedMotion;
        if (m.count !== 4 || !m.allInside || m.maxGap > 150 || m.labelPx < 12 || m.aspect > 3) {
          failed = true; console.error(label, 'Mermaid diagram is distorted or illegible:', JSON.stringify(m));
        } else console.log(label, 'diagram legible', JSON.stringify(m));
      } finally { await context.close(); }
    }
  }
} finally { await browser.close(); }
if (failed) process.exitCode = 1;
