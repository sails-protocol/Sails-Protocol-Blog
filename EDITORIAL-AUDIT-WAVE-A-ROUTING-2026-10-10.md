# Wave A continuation: SDK-to-service idempotency and rail activation

**Date:** 2026-10-10. **Source snapshot:** [Sails Protocol @ be6d3bc](https://github.com/sails-protocol/Sails-Protocol/tree/be6d3bc2ddfc384cfafa4276e01b8aacc096d421). Documentary inspection only, not CI or production validation.

## A-05: Optional idempotency key reaches the service through the inspected SDK and route

1. [SDK `packages/sails-sdk/src/modules/openp2p.ts`](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts) lines 296-311: `trade(offerId, amount, idempotencyKey?)` forwards the optional key in the request body.
2. [Fastify route `src/modules/open-p2p/trade.routes.ts`](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.routes.ts) lines 31-39, 78-89: Zod accepts a nonempty key of maximum 200 characters and forwards it to `TradeService.createTrade` with the authenticated participant ID.
3. [Service `src/modules/open-p2p/trade.service.ts`](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts) lines 59-82: uses scope `openp2p.trade.create`, participant ID, key and a request payload containing offer ID and amount.
4. [Common mechanism `src/common/idempotency.ts`](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/common/idempotency.ts): source explicitly bounds the protection to keyed requests and documents persistence/recovery failure domains.

**Finding:** SDK-to-service forwarding is evidenced for this operation. **Not evidenced:** every app caller generating/reusing a stable key, production Postgres replay test, all other create operations, network retry behavior across versions.

**Editorial correction:** Article 06 must explain the application contract: generate one key per logical acceptance, reuse on retries, generate a fresh key for an intentionally new trade. No global exactly-once claim.

## A-06: Fourth real provider and environment caveat

[Provider registry `src/modules/open-settlement/escrow-providers.ts`](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts) lines 180-251 enumerates MOCK, LIGHTNING_HODL, WDK_USDT_EVM, MULTISIG and **SAFE_GUARD_EVM**. `NON_CUSTODIAL_PROVIDERS` includes MULTISIG, LIGHTNING_HODL and SAFE_GUARD_EVM. `getCustodyModelForType()` exposes provider-specific declared custody metadata or null; null is not proof of any custody guarantee.

[SAFE_GUARD_EVM provider](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/safe-guard-evm.provider.ts) lines 1-30 describes client-held buyer/seller keys and a KMS-backed arbiter signer; EIP-4337 operation construction, signatures and deterministic addresses; it explicitly discloses no live funded Sepolia/bundler end-to-end execution in the referenced environment.

**Finding:** the earlier three-provider comparison was incomplete. Add SAFE_GUARD_EVM, but do not assert production deployment or live funding proof.

## A-07: Default asset routing and fee collection are separate decisions

[Registry](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts) lines 325-360 records an asset-to-recommended-escrow map: BTC → MULTISIG, LN_BTC → LIGHTNING_HODL, USDT_ERC20 → WDK_USDT_EVM. This is **source mapping**, not an assertion that each is production-eligible. Unsupported assets lack a mapping rather than silently falling back.

The same file declares `FEE_COLLECTION_CAPABLE_RAILS = new Set(['MULTISIG'])`. It explicitly states settlement capability does **not** imply protocol-fee collection capability. The policy publication/activation gate consumes this distinction.

**Finding:** Article 44 must not imply the same protocol fee can be collected on every supported settlement rail. Article 46 must distinguish route availability from fee-capability and production eligibility.

## A-08: Dual approval flag default

[Configuration `src/config/index.ts`](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/config/index.ts) line 405 sets `requireDualApprovalForRelease` only when `REQUIRE_DUAL_APPROVAL_RELEASE === 'true'`. Absent explicit configuration, this flag evaluates false. **Do not infer live environment variable values from repository defaults.**

## Gate disposition

- **G1/G2:** OPEN, with source-backed findings A-01 through A-08.
- **Material:** provider-specific custody and production eligibility; rail-specific fee capability; caller responsibility for idempotency keys.
- **Next:** inspect application callers, supported deployment configuration, latest CI and external-network evidence; revise numbered canonical articles in EN/PT-BR/ES with reviewer sign-off.
- **No merge, deployment, publication or live tests performed.**

**NO MATERIAL FINDING UNDER THE RUG.**
