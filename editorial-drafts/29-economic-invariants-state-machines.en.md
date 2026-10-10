# State Machines and Economic Invariants in Practice

*Draft only. No publication approval. Season 5, article 29.*

## Question

A state machine is useful because an economic action must have a precise meaning. A trade cannot be both completed and disputed by contradictory concurrent requests.

## Boundary and design

Model permitted transitions separately from side effects. An authenticated participant requests a transition, a durable authority checks preconditions and only one valid outcome commits. Payment-provider responses and client retries are inputs, not automatic proof that the transition is allowed.

## Failure and evidence

The diagram is an illustrative invariant, not the canonical production state machine. The next step is to compare each named transition with exact source definitions and adversarial tests at an immutable commit.

*Source verification and exact API references pending.*
