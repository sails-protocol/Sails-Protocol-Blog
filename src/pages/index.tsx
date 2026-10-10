import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Engineering journal" description="Engineering notes, architecture and research from Sails Protocol">
      <main className="sails-home" id="main-content">
        <header className="sails-hero">
          <p className="sails-kicker">SAILS / ENGINEERING JOURNAL</p>
          <h1>Building open P2P infrastructure.</h1>
          <p className="sails-lead">
            Architecture, engineering decisions, research and ecosystem notes from Sails Protocol.
            Clear for people, structured for machines.
          </p>
          <Link className="sails-primary-link" to="/articles">
            Explore articles <span aria-hidden="true">→</span>
          </Link>
        </header>
        <section className="sails-section" aria-labelledby="articles-heading">
          <p className="sails-kicker">LATEST WRITING</p>
          <h2 id="articles-heading">Articles</h2>
          <div className="sails-list">
            <Link className="sails-item" to="/articles/what-is-sails-protocol">
              <small>PROTOCOL</small>
              <strong>What is Sails Protocol?</strong>
              <span>A conceptual introduction to open P2P coordination.</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
