import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const seasons = [
  {id:'01',title:'Why Sails Exists',description:'From the coordination problem to the first trading SDK and the boundaries of trust.',articles:['Introducing Sails Protocol','Why P2P Markets Need Better Coordination','Understanding the Sails Architecture','Introducing the Sails P2P Trading SDK','Trust, Evidence and Settlement in P2P Markets']},
  {id:'02',title:'Engineering Economic Coordination',description:'What can fail, how authority is defined, and what evidence we need.',articles:['Why Idempotency Matters in P2P Trading','Concurrency: When Two Requests Race','Crash Recovery and the Meaning of Exactly Once','Identity and Authorization Are Different Questions','Evidence, Provenance and Resource Limits','Reputation: What Can Travel Between Applications?','Settlement, Finality and External Payment Truth','Designing for Adversarial Nodes and Untrusted Providers']},
  {id:'03',title:'Building on the Protocol',description:'Integrations, application boundaries and the path to verified production behavior.',articles:['Integrating a P2P Trading SDK into a Wallet','Why a Reference Market Should Not Own Its Own Liquidity','Wallets, Nodes and Application Boundaries','Private Trading Rooms and Open Markets','Modular Integrations: What Is Protocol and What Is External','From Design Decisions to Production Evidence']},
  {id:'04',title:'Beyond the Trading SDK',description:'The modular roadmap beyond the first trading SDK.',articles:['Beyond P2P Trading: The Sails Protocol Vision','OpenIdentity: Identity Without Platform Lock-in','OpenProof: Verifiable Evidence for P2P Systems','OpenReputation: Trust Across Applications','OpenSettlement: Coordinating Different Payment Rails','OpenLiquidity: Connecting Fragmented P2P Markets','OpenAgents: Economic Coordination for AI Agents','OpenFinance and the Future of P2P Applications']},
  {id:'05',title:'Developer Journey and Interoperability',description:'Practical integration boundaries, contracts and operational failure modes.',articles:['First Integration: From SDK Installation to a Safe P2P Trade','State Machines and Economic Invariants in Practice','Adapters and Wallet Boundaries: WDK, BDK and External Signing','Protocol Contracts, Schemas and Version Compatibility','Operating a Sails Node: Responsibilities and Failure Boundaries','Observability, Error Semantics and Debugging Distributed Trades','Integrating External Providers Without Delegating Economic Truth']},
  {id:'06',title:'Security, Verification and Production Readiness',description:'Threat models, failure recovery, privacy, resource limits and the limits of CI evidence.',articles:['Threat Modeling a P2P Economic Protocol','Byzantine and Malicious Nodes: What Must Be Assumed','Restart, Replay and Recovery: A Verification Playbook','Privacy, Metadata and Identity Linkability','Resource Exhaustion, Rate Limits and Evidence Abuse','From CI to Production: What a Passing Test Does Not Prove','Incident Reviews, Operational Transparency and Change Control']},
  {id:'07',title:'Real-World Economic Flows',description:'Payment truth, disputes, fees, private markets, cross-rail coordination and protocol governance.',articles:['PIX and DePix: Distinguishing Payment Proof From Payment Truth','Non-Custodial Escrow and Dispute Authority','Fees, Incentives and Economic Sustainability','Private Rooms, Public Offers and Market Abuse','Cross-Rail Settlement and Liquidity Routing Tradeoffs','Satsails Wallet and Sails Market: Two Applications, One Protocol','Open Protocol Governance and Compatibility Over Time']},
]; 
export default function Seasons():React.JSX.Element {
 return <Layout title="Reading seasons" description="Four connected learning paths through the Sails Protocol engineering journal">
  <main className="sails-home" id="main-content">
   <header className="sails-hero"><p className="sails-kicker">GUIDED READING</p><h1>Seasons</h1><p className="sails-lead">Follow the ideas in order. These are editorial outlines, not published articles. Only approved writing appears in the <Link to="/articles">article archive</Link>.</p></header>
   {seasons.map(s=><section className="sails-section" id={'season-'+s.id} key={s.id} aria-labelledby={'season-heading-'+s.id}>
    <p className="sails-kicker">SEASON {s.id} · {s.articles.length} PLANNED ARTICLES</p><h2 id={'season-heading-'+s.id}>{s.title}</h2><p>{s.description}</p>
    <ol className="sails-season-outline">{s.articles.map((title,i)=><li key={title}><span>{title}</span><small>In editorial review</small></li>)}</ol>
    <p><Link to="/articles">See approved articles <span aria-hidden="true">→</span></Link></p>
   </section>)}
  </main>
 </Layout>
}
