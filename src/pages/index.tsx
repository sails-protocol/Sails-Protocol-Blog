import React, {useMemo, useState} from 'react';
import articles from '../generated/articles.json';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

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
        <header className="sails-hero">
          <p className="sails-kicker">SAILS / ENGINEERING JOURNAL</p>
          <h1>Sails Protocol</h1>
          <p className="sails-home-subtitle">Building open P2P infrastructure.</p>
          <p className="sails-lead">Explore the ideas, design decisions and evidence behind open P2P economic coordination.</p>
          <Link className="sails-primary-link" to="/articles">Explore published articles <span aria-hidden="true">→</span></Link>
          <div className="sails-search" role="search" aria-label="Search published articles">
            <label htmlFor="sails-article-search" className="sails-search-label">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <span>Search articles</span>
            </label>
            <input id="sails-article-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search published articles..." autoComplete="off" />
            {query.trim() && <div id="sails-search-results" className="sails-search-results" aria-live="polite">
              <p>{results.length ? results.length + ' published articles found' : 'No published articles found.'}</p>
              <ul>{results.map(article => <li key={article.slug}><Link to={article.path}><strong>{article.title}</strong><span>{article.description}</span></Link></li>)}</ul>
            </div>}
          </div>
        </header>
        <section className="sails-section" aria-labelledby="published-heading">
          <p className="sails-kicker">PUBLISHED CONTENT</p>
          <h2 id="published-heading">Articles</h2>
          <p>Read published perspectives on open P2P markets, custody, regulation and economic coordination.</p>
          <p><Link to="/seasons">Explore reading collections <span aria-hidden="true">→</span></Link></p>
        </section>
      </main>
    </Layout>
  );
}
