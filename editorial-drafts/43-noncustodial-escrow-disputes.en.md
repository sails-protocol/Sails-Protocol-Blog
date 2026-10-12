# Non-Custodial Escrow and Dispute Authority

*Season 7 / Temporada 7. Editorial draft. Source and CTO review pending.*

## Question

A seller locks an asset and the buyer claims to have paid. Who may release the asset when their stories conflict?

## Boundary and decision

Distinguish custody of signing keys, control of the locking mechanism, dispute adjudication and execution of a release. A non-custodial claim must describe the actual script, signatures and recovery paths, not merely say that the platform does not hold a wallet seed.

## Failure and evidence

A disputed trade times out while an arbiter is unavailable. Safe behavior depends on the specific escrow and timeout policy; no generic diagram proves recoverability. Verify supported rails and adversarial paths against the code.

*No production implementation or publication approval is asserted.*

## Source-backed boundary: custody varies by provider

The inspected provider registry distinguishes Bitcoin MULTISIG (buyer/seller client-held keys, server-held arbiter key), Arkade LIGHTNING_HODL (client signatures, documented testnet scope), SAFE_GUARD_EVM (client-held keys and KMS-backed arbiter, no evidenced live funded Sepolia/bundler end-to-end test), and WDK_USDT_EVM (single server-held seed; expressly production-ineligible). The fact that an escrow exists does not prove independent custody or production eligibility.

Application-layer dual approval is not cryptographic multisig. The escrow must be evaluated by key holder, signing threshold, rail, timeout, deployment configuration and real recovery evidence.

### Primary source and review status

- [Provider registry, custody metadata, default asset routing and fee capability](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
- [WDK custody](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/wdk-settlement.provider.ts)
- [SAFE_GUARD_EVM verification limits](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/safe-guard-evm.provider.ts)

*Source-inspected editorial correction; CTO approval, deployment verification and production publication remain pending.*


## Deep revision | A committed ruling must survive a dispatch race (12 October 2026)

### Why this matters to Sails

Non-custodial escrow does not make the *decision about who may receive funds* automatic. OpenSettlement has to keep the arbiter's signed ruling, the durable Outcome, the transaction round, the authorization to execute it and any later signature or broadcast consistent. The risk is not only stolen keys. A recovery worker and a live request can disagree about which operation has already happened.

Consider one disputed Bitcoin MULTISIG trade. The arbiter signs a RELEASE ruling, and the service records its Outcome. Before the live request constructs the signing round, a recovery worker constructs it. The live request then sees an existing round. If it treats that observation as its own dispatch failure and deletes the ruling and Outcome, a real signing round survives without the decision that justified it. The independent AUD1X-R2 investigation documents this race as AR-01. AR-03 extends the concern to a round that has already acquired authorization, a claim or a broadcast. These are **findings described in an open draft pull request**, not a statement that the corrected code is merged.

### Four distinct authorities

1. **Adjudication:** the authorized arbiter signs a specific ruling and appeal generation. This is not a transaction signature.
2. **Durable disposition:** the dispute's Outcome records what that ruling decided. Deleting this record is an economic operation, not housekeeping.
3. **Dispatch:** the service constructs a pending signing round and a stored PSBT with concrete destinations, allocation and cost ceiling. A round's existence alone does not prove it belongs to the current ruling.
4. **Execution:** a separate gate authorizes the specific round; participant signatures, a claim and a broadcast may follow. A UI approval is not a cryptographic signature and a PSBT is not proof of chain settlement.

The draft AUD1X-R2 design uses the same dispute-then-escrow lock order (D then E) to classify a failed dispatch in one database transaction:

| Durable observation | Proposed decision | Reason |
| --- | --- | --- |
| No dependent round or executed disposition | **REVERT** | Nothing durable depends on the ruling. |
| A round proven to be this ruling's dispatch, or its completed authorization | **ADOPT** | Another executor already performed the authorized step. |
| A divergent round of the same generation | **PRESERVE** | Do not erase the ruling and strand a conflicting round; refuse adoption and leave cleanup to its own guarded path. |

The proof of identity must compare more than a round ID or a RELEASE/REFUND/SPLIT label. The reviewed proposal checks dispute and escrow, appeal generation, arbiter, signed authority and issue time, destinations, split allocation, amounts, output count, execution-cost ceiling and the **stored PSBT** against the durable Outcome. This is a design and branch-level implementation under review, not a general guarantee across settlement providers.

### The tempting shortcut and its failure

A simple retry handler might say, “a round exists, therefore the operation succeeded,” or, conversely, “my insert failed, therefore undo the ruling.” Both collapse distinct economic facts. The first can adopt someone else's round; the second can erase a ruling after another worker has advanced it. A correct recovery path needs to distinguish an equivalent completed action, an inconsistent action and the genuine absence of dependent state.

The reviewed tests use real PostgreSQL, deterministic race barriers and real service paths for the MULTISIG scenario. They **stub the chain explorer and record broadcasts locally**. This is valuable concurrency evidence, but it is not a funded on-chain end-to-end execution, an audit of every rail or evidence of a production deployment.

### What remains unresolved

The AUD1X-R2 report explicitly retains a window where authorization may commit before a claim fails its status compare-and-set; the report says no signature or broadcast follows in that case. Legacy divergent rounds and the separate ST1 cleanup authority also require their own evidence. The related ST1-R2 PR #436 remains a draft. Neither the branch's successful CI nor its documentation constitutes CTO approval, merge or production readiness.

**Next question:** when a worker restarts between authorization and claim, which durable generation proves that cleanup, retry or execution is still authorized?

### Primary evidence and maturity (checked 12 October 2026)

- [AUD1X-R2 design and residuals, immutable branch commit](https://github.com/sails-protocol/Sails-Protocol/blob/9c6d0687fe72a26b91a05dec425224bc533915b1/docs/aud1x-r2-dispatch-authority.md).
- [AUD1X-R2 PostgreSQL race tests, immutable branch commit](https://github.com/sails-protocol/Sails-Protocol/blob/9c6d0687fe72a26b91a05dec425224bc533915b1/tests/integration/aud1xR2DispatchAuthority.test.ts).
- [PR #440, open draft at the time of research](https://github.com/sails-protocol/Sails-Protocol/pull/440); [PR #436, related ST1-R2 draft](https://github.com/sails-protocol/Sails-Protocol/pull/436).

*Evidence status: source-inspected proposal and test implementation on an unmerged draft branch; GitHub CI Tests reported success at the cited SHA. No independent local test run, final CTO/technical/legal review, production verification or publication authorization was performed for this editorial revision.*
