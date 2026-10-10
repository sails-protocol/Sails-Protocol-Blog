import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const seasons = [
  {number: '01', title: 'Why Sails Exists', description: 'The P2P coordination problem, our motivation and the architecture behind Sails Protocol.', count: 5},
  {number: '02', title: 'Engineering Economic Coordination', description: 'Idempotency, concurrency, identity, evidence, settlement and adversarial conditions.', count: 8},
  {number: '03', title: 'Building on the Protocol', description: 'Wallet integrations, Sails Market, application boundaries and production evidence.', count: 6},
];

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Engineering journal" description="A connected learning journey through Sails Protocol engineering">
      <main className="sails-home" id="main-content">
        <header className="sails-hero">
          <p className="sails-kicker">SAILS / ENGINEERING JOURNAL</p>
          <h1>Sails Protocol</h1>
          <p className="sails-home-subtitle">Building open P2P infrastructure.</p>
          <p className="sails-lead">Follow the questions, design decisions and engineering evidence behind Sails Protocol. Each season builds on the previous one.</p>
          <Link className="sails-primary-link" to="/articles">Explore published articles <span aria-hidden="true">→</span></Link>
        </header>
        <section className="sails-section" aria-labelledby="seasons-heading">
          <p className="sails-kicker">GUIDED READING</p>
          <h2 id="seasons-heading">Seasons</h2>
          <p>Three connected reading paths. Articles are added only after technical and editorial approval.</p>
          <div className="sails-season-grid">
            {seasons.map((season) => (
              <article className="sails-season-card" key={season.number}>
                <small>SEASON {season.number} · {season.count} PLANNED ARTICLES</small>
                <h3>{season.title}</h3>
                <p>{season.description}</p>
                <span className="sails-season-status">Editorial series in preparation</span>
              </article>
            ))}
          </div>
        </section>
        <section className="sails-section" aria-labelledby="published-heading">
          <p className="sails-kicker">PUBLISHED CONTENT</p>
          <h2 id="published-heading">Articles</h2>
          <p>Browse articles that have passed the publication gate. Editorial drafts are not listed here.</p>
          <Link className="sails-primary-link" to="/articles">Browse articles <span aria-hidden="true">→</span></Link>
        </section>
      </main>
    </Layout>
  );
}
