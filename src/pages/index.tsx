import Translate, {translate} from '@docusaurus/Translate';
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
    <Layout title={translate({id: 'journal.title', message: 'Engineering journal'})} description={translate({id: 'journal.description', message: 'A connected learning journey through Sails Protocol engineering'})}>
      <main className="sails-home" id="main-content">
        <header className="sails-hero sails-hero-editorial">
          <p className="sails-kicker"><Translate id="journal.kicker">SAILS / ENGINEERING JOURNAL</Translate></p>
          <h1>Sails Protocol</h1>
          <p className="sails-home-subtitle"><Translate id="journal.subtitle">Economic Coordination Protocol for building interoperable P2P financial marketplaces.</Translate></p>
          <p className="sails-hero-statement"><Translate id="journal.statement">Building open P2P infrastructure.</Translate></p>
          <p className="sails-lead"><Translate id="journal.lead">Explore the ideas, design decisions and evidence behind open P2P economic coordination.</Translate></p>
          <div className="sails-hero-actions"><Link className="sails-primary-link" to="/articles"><Translate id="journal.explore">Explore articles</Translate> <span aria-hidden="true">→</span></Link><Link className="sails-secondary-link" to="/seasons"><Translate id="journal.seasons">View seasons</Translate> <span aria-hidden="true">→</span></Link></div>
        </header>
        <section className="sails-section" aria-labelledby="seasons-heading">
          <p className="sails-kicker"><Translate id="journal.collections">READING COLLECTIONS</Translate></p>
          <div className="sails-section-heading"><div><h2 id="seasons-heading"><Translate id="journal.seasonsHeading">Seasons</Translate></h2><p><Translate id="journal.collectionsLead">A structured reading experience. Explore the themes behind Sails Protocol through curated articles.</Translate></p></div><Link to="/seasons"><Translate id="journal.allSeasons">View all seasons →</Translate></Link></div>
          <div className="sails-editorial-grid">
            <article className="sails-editorial-card"><div className="sails-editorial-art sails-art-approved" style={{backgroundImage: "url(/img/editorial/protocol-waves.svg)"}} aria-hidden="true"/><div><small><Translate id="journal.intro">INTRODUCTION</Translate></small><h3><Translate id="journal.what">What is Sails Protocol?</Translate></h3><p><Translate id="journal.whatLead">Start with the purpose, architecture and vision for interoperable P2P financial marketplaces.</Translate></p><div className="sails-editorial-card-footer"><span><Translate id="journal.publishedIntro">Published introduction</Translate></span><Link to="/articles/what-is-sails-protocol/"><Translate id="journal.read">Read article →</Translate></Link></div></div></article>
            <article className="sails-editorial-card"><div className="sails-editorial-art sails-art-approved" style={{backgroundImage: "url(/img/editorial/financial-gates.svg)"}} aria-hidden="true"/><div><small><Translate id="journal.season02">SEASON 02 · PUBLISHED</Translate></small><h3><Translate id="journal.custody">Custody, Regulation and Open P2P Markets</Translate></h3><p><Translate id="journal.custodyLead">Regulation, custody, market infrastructure and the shift toward open financial marketplaces.</Translate></p><div className="sails-editorial-card-footer"><span><Translate id="journal.nine">9 articles</Translate></span><Link to="/seasons/#season-02-heading"><Translate id="journal.readSeason">Read season →</Translate></Link></div></div></article>
            <article className="sails-editorial-card"><div className="sails-editorial-art sails-art-approved" style={{backgroundImage: "url(/img/editorial/software-boundary.svg)"}} aria-hidden="true"/><div><small><Translate id="journal.curated">CURATED READING · PUBLISHED</Translate></small><h3><Translate id="journal.software">Software, Custody and Responsibility</Translate></h3><p><Translate id="journal.softwareLead">Explore the boundaries between building financial software, controlling assets and operating open markets.</Translate></p><div className="sails-editorial-card-footer"><span><Translate id="journal.published">Published article</Translate></span><Link to="/articles/season-2-02-software-is-not-custody/"><Translate id="journal.read">Read article →</Translate></Link></div></div></article>
            <article className="sails-editorial-card"><div className="sails-editorial-art sails-art-approved" style={{backgroundImage: "url(/img/editorial/stablecoin-rails.svg)"}} aria-hidden="true"/><div><small><Translate id="journal.curated">CURATED READING · PUBLISHED</Translate></small><h3><Translate id="journal.stablecoins">Stablecoins and Open Marketplaces</Translate></h3><p><Translate id="journal.stablecoinsLead">Understand how stablecoins, payment rails and interoperable interfaces shape P2P market infrastructure.</Translate></p><div className="sails-editorial-card-footer"><span><Translate id="journal.published">Published article</Translate></span><Link to="/articles/season-2-06-stablecoins-open-marketplaces/"><Translate id="journal.read">Read article →</Translate></Link></div></div></article>
          </div>
        </section>
        <section className="sails-section sails-latest-section" aria-labelledby="latest-heading">
          <p className="sails-kicker"><Translate id="journal.content">PUBLISHED CONTENT</Translate></p>
          <div className="sails-section-heading"><div><h2 id="latest-heading"><Translate id="journal.featured">Featured articles</Translate></h2><p><Translate id="journal.featuredLead">Published perspectives on open P2P markets, custody, regulation and economic coordination.</Translate></p></div><Link to="/articles"><Translate id="journal.allArticles">View all articles →</Translate></Link></div>
          <div className="sails-latest-grid">{articles.slice(0, 6).map(article => <article className="sails-latest-card" key={article.slug}><div className="sails-latest-art" style={{backgroundImage: `url(/img/editorial/${articleArtwork[article.slug] ?? 'protocol-waves'}.svg)`}} aria-hidden="true"/><div className="sails-latest-body"><small><Translate id="journal.latestKicker">SAILS / JOURNAL</Translate></small><h3><Link to={article.path}>{article.title}</Link></h3><p>{article.description}</p><Link className="sails-read-link" to={article.path}><Translate id="journal.read">Read article →</Translate></Link></div></article>)}</div>
        </section>
        <section className="sails-section sails-search-section" aria-labelledby="search-heading">
          <h2 id="search-heading"><Translate id="journal.find">Find an article</Translate></h2>
          <div className="sails-search" role="search" aria-label={translate({id: 'journal.searchLabel', message: 'Search published articles'})}>
            <label htmlFor="sails-article-search" className="sails-search-label"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><span><Translate id="journal.search">Search articles</Translate></span></label>
            <input id="sails-article-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={translate({id: 'journal.searchPlaceholder', message: 'Search published articles...'})} autoComplete="off" />
            {query.trim() && <div className="sails-search-results" aria-live="polite"><p>{results.length ? results.length + ' ' + translate({id: 'journal.found', message: 'published articles found'}) : translate({id: 'journal.noResults', message: 'No published articles found.'})}</p><ul>{results.map(article => <li key={article.slug}><Link to={article.path}><strong>{article.title}</strong><span>{article.description}</span></Link></li>)}</ul></div>}
          </div>
        </section>
      </main>
    </Layout>
  );
}
