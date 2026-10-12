import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import articles from '../../generated/articles.json';

// Public reading paths list published articles only. Unpublished outlines live in
// EDITORIAL-SEASONS-AND-READING-PATHS.md and must not be exposed as live content.
const season02Slugs = [
  'season-2-01-why-sails-arrives-now',
  'season-2-02-software-is-not-custody',
  'season-2-03-tornado-cash-turning-point',
  'season-2-04-hidden-cost-gatekeepers',
  'season-2-05-noncustodial-business-model',
  'season-2-06-stablecoins-open-marketplaces',
  'season-2-07-one-market-many-interfaces',
  'season-2-08-economic-coordination-protocol',
  'season-2-09-decripto-brazil-market-shift',
] as const;

const publishedArticles = season02Slugs.map(slug => {
  const article = articles.find(item => item.slug === slug);
  if (!article) throw new Error(`Published Season 02 article missing from catalogue: ${slug}`);
  return article;
});

export default function Seasons(): React.JSX.Element {
  return (
    <Layout title="Reading collections" description="Published reading paths through Sails Protocol ideas and engineering">
      <main className="sails-home" id="main-content">
        <header className="sails-hero">
          <p className="sails-kicker">GUIDED READING</p>
          <h1>Reading collections</h1>
          <p className="sails-lead">Explore published work on the architecture, economic boundaries and open-market context of Sails Protocol. Future editorial plans are not listed as published articles.</p>
          <Link className="sails-primary-link" to="/articles">Explore published articles <span aria-hidden="true">→</span></Link>
        </header>
        <section className="sails-section" id="season-02" aria-labelledby="season-02-heading">
          <p className="sails-kicker">SEASON 02 · 9 PUBLISHED ARTICLES</p>
          <h2 id="season-02-heading">Custody, Regulation and Open P2P Markets</h2>
          <p>Why open economic coordination matters, how software and custody differ, and what changing market structures mean for P2P infrastructure.</p>
          <ol className="sails-season-outline">
            {publishedArticles.map(article => (
              <li key={article.slug}>
                <Link to={article.path}>{article.title}</Link>
                <small>Published</small>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </Layout>
  );
}
