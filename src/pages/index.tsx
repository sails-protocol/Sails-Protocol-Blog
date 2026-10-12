import React, {useMemo, useState} from 'react';
import articles from '../generated/articles.json';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const articleArtwork: Record<string, string> = {
  'season-2-01-why-sails-arrives-now': 'market-crossroads',
  'season-2-02-software-is-not-custody': 'software-boundary',
  'season-2-03-tornado-cash-turning-point': 'immutable-contract',
  'season-2-04-hidden-cost-gatekeepers': 'financial-gates',
  'season-2-05-noncustodial-business-model': 'noncustodial-keys',
  'season-2-06-stablecoins-open-marketplaces': 'stablecoin-rails',
};

export default function Home(): React.JSX.Element {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return [];
    return articles.filter(article => [article.title, article.description, ...article.tags].join(' ').toLowerCase().includes(needle));
  }, [query]);
  return (
    <Layout title="Engineering journal" description="A connected learning journey through Sails Protocol engineering">
      <main className="sails-home" id="main-content">
        <header className="sails-hero sails-hero-editorial">
          <p className="sails-kicker">SAILS / ENGINEERING JOURNAL</p>
          <h1>Sails Protocol</h1>
          <p className="sails-home-subtitle">Economic Coordination Protocol for building interoperable P2P financial marketplaces.</p>
          <p className="sails-hero-statement">Building open P2P infrastructure.</p>
          <p className="sails-lead">Explore the ideas, design decisions and evidence behind open P2P economic coordination.</p>
          <div className="sails-hero-actions"><Link className="sails-primary-link" to="/articles">Explore articles <span aria-hidden="true">→</span></Link><Link className="sails-secondary-link" to="/seasons">View seasons <span aria-hidden="true">→</span></Link></div>
        </header>
        <section className="sails-section" aria-labelledby="seasons-heading">
          <p className="sails-kicker">READING COLLECTIONS</p>
          <div className="sails-section-heading"><div><h2 id="seasons-heading">Seasons</h2><p>A structured reading experience. Explore the themes behind Sails Protocol through curated articles.</p></div><Link to="/seasons">View all seasons →</Link></div>
          <div className="sails-editorial-grid">
            <article className="sails-editorial-card"><div className="sails-editorial-art sails-art-approved" style={{backgroundImage: "url(/img/editorial/protocol-waves.svg)"}} aria-hidden="true"/><div><small>INTRODUCTION</small><h3>What is Sails Protocol?</h3><p>Start with the purpose, architecture and vision for interoperable P2P financial marketplaces.</p><div className="sails-editorial-card-footer"><span>Published introduction</span><Link to="/articles/what-is-sails-protocol/">Read article →</Link></div></div></article>
            <article className="sails-editorial-card"><div className="sails-editorial-art sails-art-approved" style={{backgroundImage: "url(/img/editorial/financial-gates.svg)"}} aria-hidden="true"/><div><small>SEASON 02 · PUBLISHED</small><h3>Custody, Regulation and Open P2P Markets</h3><p>Regulation, custody, market infrastructure and the shift toward open financial marketplaces.</p><div className="sails-editorial-card-footer"><span>9 articles</span><Link to="/seasons/#season-02">Read season →</Link></div></div></article>
            <article className="sails-editorial-card"><div className="sails-editorial-art sails-art-approved" style={{backgroundImage: "url(/img/editorial/software-boundary.svg)"}} aria-hidden="true"/><div><small>CURATED READING · PUBLISHED</small><h3>Software, Custody and Responsibility</h3><p>Explore the boundaries between building financial software, controlling assets and operating open markets.</p><div className="sails-editorial-card-footer"><span>Published article</span><Link to="/articles/season-2-02-software-is-not-custody/">Read article →</Link></div></div></article>
            <article className="sails-editorial-card"><div className="sails-editorial-art sails-art-approved" style={{backgroundImage: "url(/img/editorial/stablecoin-rails.svg)"}} aria-hidden="true"/><div><small>CURATED READING · PUBLISHED</small><h3>Stablecoins and Open Marketplaces</h3><p>Understand how stablecoins, payment rails and interoperable interfaces shape P2P market infrastructure.</p><div className="sails-editorial-card-footer"><span>Published article</span><Link to="/articles/season-2-06-stablecoins-open-marketplaces/">Read article →</Link></div></div></article>
          </div>
        </section>
        <section className="sails-section sails-latest-section" aria-labelledby="latest-heading">
          <p className="sails-kicker">PUBLISHED CONTENT</p>
          <div className="sails-section-heading"><div><h2 id="latest-heading">Featured articles</h2><p>Published perspectives on open P2P markets, custody, regulation and economic coordination.</p></div><Link to="/articles">View all articles →</Link></div>
          <div className="sails-latest-grid">{articles.slice(0, 6).map(article => <article className="sails-latest-card" key={article.slug}><div className="sails-latest-art" style={{backgroundImage: `url(/img/editorial/${articleArtwork[article.slug] ?? 'protocol-waves'}.svg)`}} aria-hidden="true"/><div className="sails-latest-body"><small>SAILS / JOURNAL</small><h3><Link to={article.path}>{article.title}</Link></h3><p>{article.description}</p><Link className="sails-read-link" to={article.path}>Read article →</Link></div></article>)}</div>
        </section>
        <section className="sails-section sails-search-section" aria-labelledby="search-heading">
          <h2 id="search-heading">Find an article</h2>
          <div className="sails-search" role="search" aria-label="Search published articles">
            <label htmlFor="sails-article-search" className="sails-search-label"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><span>Search articles</span></label>
            <input id="sails-article-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search published articles..." autoComplete="off" />
            {query.trim() && <div className="sails-search-results" aria-live="polite"><p>{results.length ? results.length + ' published articles found' : 'No published articles found.'}</p><ul>{results.map(article => <li key={article.slug}><Link to={article.path}><strong>{article.title}</strong><span>{article.description}</span></Link></li>)}</ul></div>}
          </div>
        </section>
      </main>
    </Layout>
  );
}
