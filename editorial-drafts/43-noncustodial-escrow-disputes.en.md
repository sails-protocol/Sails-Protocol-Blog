# Non-Custodial Escrow and Dispute Authority

*Season 7. Editorial draft. Source and CTO review pending.*

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

## Source-verification checkpoint

The pinned Protocol registry at `be6d3bc2` explicitly distinguishes provider routing from fee collection: BTC maps to MULTISIG, LN_BTC to LIGHTNING_HODL, and USDT_ERC20 to WDK_USDT_EVM. The same registry limits real protocol-fee activation to MULTISIG. **An asset mapping does not prove a cross-rail swap, non-custodial key ownership on every rail, or production activation.** Review each custody and recovery claim against its actual provider before publication.
