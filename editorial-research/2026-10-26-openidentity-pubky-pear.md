# Editorial curation | 2026-10-26 | OpenIdentity / Pubky / Pear

**Disposition: editorial draft for technical review. NO PUBLICATION APPROVAL.** No new season, no 49th topic and no production route. Revises existing article 21 in EN, PT-BR and ES.

## Selected thesis and relevance

**Topic:** Recovering a Pubky identity does not automatically recover Pear messages, Sails settlement evidence or reputation.

**Why this matters specifically to Sails:** Sails is evaluating Pubky-first economic identity and Pear communication. A participant may switch devices or integrators. Conflating identity recovery, delegated transport authorization, financial signing, evidence portability and reputation would produce incorrect UX and potentially unsafe trade authorization.

**Relevance: 96/100.** Direct architectural relevance; fresh first-party experiment and decision proposal dated 2026-10-26; a concrete failure mode (revoked device accepted by offline verification); actionable design consequences. Not a generic Pubky or crypto news article.

**Non-redundancy:** existing article 21 is an outline about portable identity, with no Pubky/Pear experiment, revocation behavior, grant-lifetime constraint or contract-gap analysis. Rather than create a redundant article, this curation deepens that exact planned topic. Article 38 covers privacy/linkability as a separate security lens, not recovery/authorization semantics. Article 23 covers reputation, not Pubky-to-participant binding.

## Primary evidence (immutable)

- [PR #543, isolated recovery prototype](https://github.com/sails-protocol/Sails-Protocol/pull/543), experimental only.
- [PR #545, real homeserver experiment](https://github.com/sails-protocol/Sails-Protocol/pull/545), draft; evidence at [d288aab](https://github.com/sails-protocol/Sails-Protocol/commit/d288aab0140cb0c64b26dcbc9ad44aeefe2286ae).
- [ADR proposal, revision 2 + later addendum](https://github.com/sails-protocol/Sails-Protocol/blob/d288aab0140cb0c64b26dcbc9ad44aeefe2286ae/experiments/pubky-pear-recovery/ADR-PROPOSAL.md). **Not accepted.**
- [Homeserver test matrix and provenance](https://github.com/sails-protocol/Sails-Protocol/blob/d288aab0140cb0c64b26dcbc9ad44aeefe2286ae/experiments/pubky-pear-recovery/homeserver/README.md). Test counts and claims are author-reported, not independently rerun here.
- [Lab receipts versus OpenProof/OpenReputation contracts](https://github.com/sails-protocol/Sails-Protocol/blob/d288aab0140cb0c64b26dcbc9ad44aeefe2286ae/experiments/pubky-pear-recovery/RECEIPTS-VS-CONTRACTS.md).
- [Identity architecture discovery](https://github.com/sails-protocol/Sails-Protocol/blob/d288aab0140cb0c64b26dcbc9ad44aeefe2286ae/docs/IDENTITY_ARCHITECTURE_DISCOVERY.md).
- [CTO Pubky-first reconciliation, draft #542](https://github.com/sails-protocol/Sails-Protocol/pull/542).

## Claims that must remain separated

| Claim | Status |
| --- | --- |
| Native Pubky recovery and scoped Pear device reauthorization | Observed in isolated prototype; no Sails production integration |
| Offline grant verification detects revocation | **False** in experiment |
| Third-party revocation guaranteed immediately | **Not proven**, upstream/documentation and hostile-homeserver limitations |
| Pubky key bound to Sails economic Participant | Proposed; not implemented by experiment |
| Portable OpenProof/OpenReputation via lab receipts | **Not conformant** with current contracts |
| Recovered Pubky identity restores chat history or wallet seed | **Not proven**, must not be claimed |
| Pear vs Pubky Noise as transport | Comparative research / CTO decision point, not shipped integration |

## Editorial gates

- [x] Topic direct to Sails; relevance >=85; redundancy checked against existing article taxonomy.
- [x] First-party technical evidence and immutable experiment references.
- [x] Draft revisions in EN, PT-BR, ES with topic-specific conceptual diagram and localized text equivalents.
- [ ] Independent protocol CTO and Gatekeeper review of claims, especially signer/grant semantics, revocation and reputation.
- [ ] Independent security review of threat model and any production-readiness language.
- [ ] Native-language editorial signoff for EN, PT-BR, ES.
- [ ] Legal review if necessary for custody/escrow representations.
- [ ] CI and site checks at this PR's exact HEAD.
- [ ] Owner authorization for publication, followed by production SHA/Netlify/browser verification.

**Decision:** do not merge this draft as proof of editorial approval and do not publish. No draft-to-route promotion is included.

## Other candidates considered

1. **Redis Gate 2 authenticated event origin and ACK ownership, 89/100 technical relevance, rejected this round.** The protocol PRs #539/#544 remain draft, Gate 2 is NO-GO and existing drafts 32/36/40 cover node failure and production evidence. Better as a later focused revision once independent gate results stabilize.
2. **OpenSettlement funding-claim recovery and Gate 3, 87/100, deferred.** Highly relevant but overlaps planned articles 07/08/12/37/43, with multiple stacked draft PRs #520/#523/#525/#535 and unsettled authority. Needs an evidence-led revision of one existing topic, not a new publication.
3. **Pubky Noise versus Pear for chat, 83/100, rejected as standalone.** Architecture connection exists, but comparative research is not an implemented integration, Pubky Noise was not run in the cited experiment, and a separate article would duplicate the stronger identity-recovery thesis.

**NO MATERIAL FINDING UNDER THE RUG.**
