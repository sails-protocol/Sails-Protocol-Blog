# Resource Exhaustion, Rate Limits and Evidence Abuse

*Season 6 / Temporada 6. Editorial draft only. Source audit and approval pending.*

## Question

A small-looking JSON payload can trigger expensive parsing, hashing or storage. A malicious participant can exploit the gap between accepted requests and bounded work.

## Boundaries and tradeoffs

Bound payload size, nesting depth, complexity, cumulative quota and attempt rate at the service boundary before expensive work. Attribute usage to authenticated actors and durable proof identifiers, not merely transient process counters.

## Failure and verification

Boundary tests should show exact-limit acceptance, one-unit-over rejection and zero downstream effects after rejection. Policy numbers must be checked against approved current decisions and implementation before publication.

*No verified implementation claim or permission to publish is implied by this draft.*
