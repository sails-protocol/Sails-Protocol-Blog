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
