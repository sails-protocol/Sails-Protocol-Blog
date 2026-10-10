# Cross-Rail Settlement and Liquidity Routing Tradeoffs

*Season 7 / Temporada 7. Editorial draft. Source and CTO review pending.*

## Question

A buyer holds one asset on one network and a seller wants value on another. Routing may bridge the gap, but it introduces different failure domains and fees.

## Boundary and decision

Distinguish quoting, swap execution, bridge/provider custody, confirmation policy and final settlement. Sails can coordinate workflows without owning liquidity, but an external route's guarantees must not be attributed to the protocol.

## Failure and evidence

A provider confirms a quote but fails before completing a swap. Recovery must preserve the last confirmed state and disclose residual counterparty risk. Do not publish a supported-network matrix until exact adapters are verified.

*No production implementation or publication approval is asserted.*
