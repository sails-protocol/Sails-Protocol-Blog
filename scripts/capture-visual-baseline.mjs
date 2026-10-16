import {chromium} from 'playwright';
import {mkdirSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';

const base = process.env.VISUAL_BASE_URL || 'http://127.0.0.1:3000';
const output = process.env.VISUAL_OUTPUT_DIR || 'visual-baseline';
const routes = [
  {name: 'home-en', path: '/'},
  {name: 'seasons-en', path: '/seasons/'},
  {name: 'article-en', path: '/articles/what-is-sails-protocol/'},
  {name: 'home-pt-br', path: '/pt-BR/'},
  {name: 'article-pt-br', path: '/pt-BR/articles/what-is-sails-protocol/'},
  {name: 'home-es', path: '/es/'},
  {name: 'article-es', path: '/es/articles/what-is-sails-protocol/'},
];
const viewports = [
  {name: 'desktop', width: 1280, height: 800},
  {name: 'tablet', width: 768, height: 1024},
  {name: 'mobile', width: 390, height: 844},
];
mkdirSync(output, {recursive: true});
const manifest = [];
const browser = await chromium.launch({headless: true});
try {
  for (const route of routes) {
    for (const viewport of viewports) {
      for (const theme of ['light', 'dark']) {
        const context = await browser.newContext({
          viewport: {width: viewport.width, height: viewport.height},
          colorScheme: theme,
          reducedMotion: 'reduce',
          deviceScaleFactor: 1,
        });
        try {
          const page = await context.newPage();
          const errors = [];
          page.on('pageerror', error => errors.push(error.message));
          const response = await page.goto(new URL(route.path, base).href, {waitUntil: 'networkidle'});
          if (!response?.ok()) throw new Error(route.path + ': HTTP ' + response?.status());
          await page.evaluate(themeName => document.documentElement.setAttribute('data-theme', themeName), theme);
          await page.evaluate(async () => { await document.fonts.ready; });
          await page.waitForTimeout(200);
          if (errors.length) throw new Error(route.path + ': browser errors ' + errors.join('; '));
          const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
          if (horizontalOverflow) throw new Error(route.path + ': horizontal overflow at ' + viewport.width);
          const file = [route.name, viewport.name, theme].join('__') + '.png';
          await page.screenshot({path: join(output, file), fullPage: true, animations: 'disabled'});
          manifest.push({route: route.path, viewport: viewport.name, width: viewport.width, theme, file});
          console.log('captured', file);
          // Verify that the intentionally wide Mermaid diagram is actually
          // horizontally scrollable on mobile, and capture its far edge.
          // A static full-page screenshot only shows the initial scroll position.
          if (route.name.startsWith('article-') && viewport.name === 'mobile') {
            const diagram = page.locator('.markdown .docusaurus-mermaid-container').first();
            await diagram.waitFor({state: 'visible'});
            const scroll = await diagram.evaluate(element => {
              const available = element.scrollWidth - element.clientWidth;
              if (available <= 0) return {available, moved: 0};
              element.scrollLeft = available;
              return {available, moved: element.scrollLeft};
            });
            if (scroll.available <= 0 || scroll.moved < scroll.available - 2) {
              throw new Error(route.path + ': mobile Mermaid diagram cannot be inspected by horizontal scrolling: ' + JSON.stringify(scroll));
            }
            const scrolledFile = [route.name, 'mobile', theme, 'diagram-scroll-end'].join('__') + '.png';
            await diagram.screenshot({path: join(output, scrolledFile), animations: 'disabled'});
            manifest.push({route: route.path, viewport: viewport.name, width: viewport.width, theme, file: scrolledFile, detail: 'Mermaid diagram at horizontal scroll end'});
            console.log('captured', scrolledFile);
          }
        } finally {
          await context.close();
        }
      }
    }
  }
} finally {
  await browser.close();
}
writeFileSync(join(output, 'manifest.json'), JSON.stringify({base, count: manifest.length, captures: manifest}, null, 2) + '\n');
console.log('Visual evidence captured:', manifest.length, 'screenshots');
