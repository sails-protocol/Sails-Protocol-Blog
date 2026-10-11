import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Engineering journal" description="A connected learning journey through Sails Protocol engineering">
      <main className="sails-home" id="main-content">
        <header className="sails-hero">
          <p className="sails-kicker">SAILS / ENGINEERING JOURNAL</p>
          <h1>Sails Protocol</h1>
          <p className="sails-home-subtitle">Building open P2P infrastructure.</p>
          <p className="sails-lead">Explore the ideas, design decisions and evidence behind open P2P economic coordination.</p>
          <Link className="sails-primary-link" to="/articles">Explore published articles <span aria-hidden="true">→</span></Link>
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
