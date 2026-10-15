# Fees, Incentives and Economic Sustainability

*Season 7. Editorial draft. Source and CTO review pending.*

## Question

A trading protocol needs operators and participants to remain economically motivated without turning fee collection into hidden control over users' funds.

## Boundary and decision

Separate protocol fee policy, network costs, provider charges, rebates and application revenue. A quoted percentage is meaningful only with a denomination, payer, rounding rule, moment of charge and treatment of canceled or disputed trades.

## Failure and evidence

A retry must not collect the same fee twice. Fee invariants require durable transaction evidence and current CTO-approved economic policy. This article deliberately does not assert an active production rate.

*No production implementation or publication approval is asserted.*

## Source-backed boundary: fee capability is rail-specific

The inspected provider registry explicitly separates settlement capability from protocol-fee collection capability. Its `FEE_COLLECTION_CAPABLE_RAILS` set currently contains only `MULTISIG`. This is a code-level activation boundary, not evidence that the other rails collect the same fee.

Before describing a universal fee model, verify policy version, denomination, rounding, payee, settlement construction, replay handling, dispute outcomes and deployment authorization. A published policy must not imply funds are actually collected on an ineligible rail.

### Primary source and review status

- [Provider registry, custody metadata, default asset routing and fee capability](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
- [WDK custody](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/wdk-settlement.provider.ts)
- [SAFE_GUARD_EVM verification limits](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/safe-guard-evm.provider.ts)

*Source-inspected editorial correction; CTO approval, deployment verification and production publication remain pending.*

## Activation is not collection

At pinned Protocol revision `be6d3bc2`, `FEE_COLLECTION_CAPABLE_RAILS` contains only `MULTISIG`, and `assertRailCanActivateFeeCollection()` rejects fee-policy activation for other real rails without an atomic collection implementation. This is an **activation guard**, not evidence of an actual production charge, a deployed percentage or a completed refund. Reviewers must inspect the policy version and exact settlement transaction, including retry and dispute behavior, before calling a fee collected.
