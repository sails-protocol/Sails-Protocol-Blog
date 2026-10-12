import {translate} from '@docusaurus/Translate';
import articles from '../generated/articles.json';

// Keep the generated English catalogue authoritative for publication and slugs.
// Localized display metadata is keyed by immutable slug, never by array index.
export function getLocalizedArticles() {
  return articles.map(article => ({
    ...article,
    title: translate({id: 'article.' + article.slug + '.title', message: article.title}),
    description: translate({id: 'article.' + article.slug + '.description', message: article.description}),
  }));
}
