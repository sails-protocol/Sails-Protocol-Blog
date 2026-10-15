# Escrow and idempotency: source inspection checkpoint (2026-10-14)

**Status:** preliminary technical/editorial source review; no independent CTO signoff, runtime test or publication approval. Related Day 0 articles: 06, 08, 37, 43.

| Area | Current `main` source inspected | Evidence and boundary |
| --- | --- | --- |
| Trade idempotency | `src/common/idempotency.ts` and `src/modules/open-p2p/trade.service.ts` | Caller-supplied idempotency key is optional; the trade service passes `input.idempotencyKey` to `withIdempotency()`. A request without a key is not universally deduplicated. |
| WDK USDT EVM | `src/modules/open-settlement/wdk-settlement.provider.ts` | `custodyModel = 'server-custodial-reference-implementation'`. Header retains **PRODUCTION-INELIGIBLE** even after retry/unknown-outcome safety improvements. Testnet boundary is described partly as configuration/convention, not independent chain attestation. |
| Bitcoin MULTISIG | `src/modules/open-settlement/multisig.provider.ts` | `custodyModel = 'client-held-buyer-seller-keys-server-held-arbiter'`; source discusses testnet and independent client signatures. Not a universal production-readiness claim. |
| Arkade LIGHTNING_HODL | `src/modules/open-settlement/lightning-hodl.provider.ts` | Same declared custody model; source documents mutinynet/testnet scope. Not evidence of mainnet deployment. |

## Evidence identity and limits

GitHub returned the following **file blob** SHAs for the files fetched from `main` on 2026-10-14 (these are **not** a single frozen repository commit): `src/common/idempotency.ts` `a3f2661e8179c9d5cf1920798caad92ee1ed11f0`; `trade.service.ts` `982f49b8c644481a2d431f6a4b591de6c294eb45`; `wdk-settlement.provider.ts` `0850a02f647941afb08b55510339807470521f63`; `multisig.provider.ts` `76023e6c59f33a68d2ee06e5976a573e458993cf`; `lightning-hodl.provider.ts` `c9c46cc01ccac6fac81d790077506afb48fd78b3`.

The existing companion `editorial-drafts/deep-revisions/06-43-idempotency-escrow-source-audit.en.md` references the older historical Protocol commit `be6d3bc2ddfc384cfafa4276e01b8aacc096d421`. The present check confirms key claim boundaries still visible in current `main` files; it does not replace a single exact-HEAD code review, real-database/provider tests, independent language QA or release authorization.

## Required follow-up

1. Resolve and pin the current Protocol **repository commit** and compare all five blobs at that exact commit.
2. Confirm exact-head tests and environment/configuration guards for each rail.
3. Check article 43 EN/PT-BR/ES against these boundaries and record any real mismatch, rather than assuming translations are approved.
4. Require independent technical/editorial approvals before release.

**NO MATERIAL FINDING UNDER THE RUG.**

## Material finding: provider production guard does not match descriptive eligibility

**2026-10-14, source inspection only, requires CTO/security triage.** At the same pinned Protocol commit `be6d3bc2ddfc384cfafa4276e01b8aacc096d421` (confirmed identical to `main` at inspection), `src/modules/open-settlement/escrow-providers.ts` declares `PRODUCTION_INELIGIBLE_TYPES: ReadonlySet<string> = new Set(['MOCK'])`. Its comment describes enforcement at escrow creation and settlement dispatch, but **only MOCK is in the production-deny set**. `WDK_USDT_EVM` is **not** in that set even though `wdk-settlement.provider.ts` explicitly declares it `PRODUCTION-INELIGIBLE` and `server-custodial-reference-implementation`. The registry also notes no reorg-sweep equivalent for LIGHTNING_HODL / SAFE_GUARD_EVM. This is a **material policy/enforcement discrepancy**, not evidence of an actual production deployment or exploit. Do not infer other startup/configuration guards are absent without examining them.

**Release impact:** keep WDK production-eligibility claims blocked and escalate to the Protocol CTO/Gatekeeper. Require an explicit decision on intended deny-set policy, full effective config/startup/dispatch enforcement and negative production tests at exact HEAD. The Blog must not present a comment as a runtime-enforced invariant. No code change to the Protocol or Day 0 approval is authorized by this editorial finding.

**Source:** https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts

## Follow-up resolution of the initial guard discrepancy (2026-10-14)

**Material correction to the finding above:** inspection of `src/config/index.ts` at the **same pinned Protocol commit** found a distinct fail-closed **boot-time** guard at lines 825-857. When `config.isProduction && !config.features.mockEscrow && config.wdk.seedPhrase !== ''`, configuration throws a fatal error before startup, explicitly citing the WDK production-ineligible policy. The WDK provider's `getWallet()` also refuses an empty seed. Therefore the earlier observation that `PRODUCTION_INELIGIBLE_TYPES` only contains `MOCK` **must not be reported as an unmitigated production-enforcement bypass**. The enforcement is split across startup configuration and provider registry, rather than expressed in one deny-set.

**Remaining verification:** confirm configuration initialization precedes every settlement provider dispatch; run exact-HEAD negative boot tests for `NODE_ENV=production`, `MOCK_ESCROW=false`, non-empty `WDK_SEED_PHRASE`, plus tests showing an empty seed cannot construct the WDK wallet. Check unusual entrypoints and environment handling. Until then this is **source-backed guard presence, not independently executed fail-closed verification**. The earlier registry discrepancy remains an architectural/documentation observation; its original severity is reduced in light of this additional guard. No evidence of an actual production exploit was found.

**Primary source:** https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/config/index.ts#L825-L857

## Additional configuration edge: unset NODE_ENV is development (2026-10-14)

At the pinned Protocol revision, `src/config/index.ts` lines 55-77 recognize `development`, `test`, and `production`; unknown **nonempty** values fail closed, but an **unset** `NODE_ENV` intentionally resolves to `development`. Consequently, the WDK boot guard is conditional on the process actually running with `NODE_ENV=production`; a real-money deployment misconfigured with `NODE_ENV` absent would not activate that particular guard. This is an **environment-configuration trust boundary**, not a demonstrated bypass in the intended production deployment. The code comment says the Dockerfile sets `NODE_ENV=production`; deployment manifest and all alternate entrypoints were **not** independently verified here.

**Required Gatekeeper test matrix:** (1) production + `MOCK_ESCROW=false` + nonempty seed must refuse boot; (2) production + `MOCK_ESCROW=false` + empty seed must not construct a WDK wallet; (3) typo `NODE_ENV=prod` must refuse boot; (4) unset `NODE_ENV` defaults to development, explicitly verify deployment tooling never relies on this permissive default for real-value services; (5) alternate runtime entrypoints cannot dispatch WDK outside the startup checks. Mark each test pending until exact-HEAD execution is recorded. No production-incident claim.

**Source:** https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/config/index.ts#L43-L77

## Registry semantics and residual defense-in-depth question (2026-10-14)

The registry comments at `src/modules/open-settlement/escrow-providers.ts` lines 455-467 and 507-553 explicitly scope `PRODUCTION_INELIGIBLE_TYPES` to providers classified by **that registry**; only MOCK is currently listed because it fabricates settlement success. `getSettlementProvider()` calls `assertDeploymentEligible(type)` before provider selection. The separate WDK prohibition is encoded at configuration startup and its wallet-construction precondition. Thus the phrase “single enforcement point” in the registry refers to **its own set-based policy**, not all production eligibility decisions. **Do not interpret the missing WDK entry as proof of a defect in this registry's declared MOCK-only contract.**

**Residual CTO question, not a confirmed vulnerability:** whether defense in depth should add WDK to the dispatch deny-set (and how to treat pre-existing persisted WDK escrows and dev/test use), or whether the existing startup gate plus empty-seed refusal is the approved production policy. Require explicit ownership and exact-head negative tests before changing runtime behavior. The blog editorial verdict remains “WDK reference is server-custodial and not authorized for production,” without claiming a universally enforced per-dispatch ban.

**Source:** https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts#L455-L553

## Protocol Gatekeeper handoff (2026-10-14)

Opened [Protocol issue #474](https://github.com/sails-protocol/Sails-Protocol/issues/474) for exact-HEAD negative tests and CTO classification under the existing [production surface audit #220](https://github.com/sails-protocol/Sails-Protocol/issues/220). This is a request for evidence and an explicit defense-in-depth decision, **not a confirmed security defect or a test pass**. Keep the editorial publication gate blocked until the appropriate review and approvals.
