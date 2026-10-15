# Cross-Rail Settlement and Liquidity Routing Tradeoffs

*Season 7. Editorial draft. Source and CTO review pending.*

## Question

A buyer holds one asset on one network and a seller wants value on another. Routing may bridge the gap, but it introduces different failure domains and fees.

## Boundary and decision

Distinguish quoting, swap execution, bridge/provider custody, confirmation policy and final settlement. Sails can coordinate workflows without owning liquidity, but an external route's guarantees must not be attributed to the protocol.

## Failure and evidence

A provider confirms a quote but fails before completing a swap. Recovery must preserve the last confirmed state and disclose residual counterparty risk. Do not publish a supported-network matrix until exact adapters are verified.

*No production implementation or publication approval is asserted.*

## Source-backed boundary: mapped assets are not a universal bridge

The inspected default escrow mapping is `BTC → MULTISIG`, `LN_BTC → LIGHTNING_HODL` and `USDT_ERC20 → WDK_USDT_EVM`. These are source-defined recommendations, **not** evidence that every mapping is eligible for production; the WDK provider explicitly says it is not. Other assets have no real default escrow mapping in this registry.

Likewise, fee construction is presently declared only for MULTISIG. Do not infer an atomic cross-chain swap, shared finality or deployed liquidity routing from the existence of several settlement providers. Verify each external bridge, quote, custody and rollback boundary separately.

### Primary source and review status

- [Provider registry, custody metadata, default asset routing and fee capability](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
- [WDK custody](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/wdk-settlement.provider.ts)
- [SAFE_GUARD_EVM verification limits](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/safe-guard-evm.provider.ts)

*Source-inspected editorial correction; CTO approval, deployment verification and production publication remain pending.*

**Reviewer's falsifiable boundary:** choose one concrete buyer-asset/seller-asset pair and identify a quote identifier, counterparty, custody handoff, settlement evidence on both networks and restart/rollback behavior. If the evidence only shows `DEFAULT_ESCROW_TYPE_FOR_ASSET` entries, classify the result as *asset-to-provider mapping*, not a cross-rail trade. The inspected [registry lines 332–347](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts#L332-L347) supports only the narrower mapping statement.
