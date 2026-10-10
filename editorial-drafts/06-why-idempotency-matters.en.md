# Why Idempotency Matters in P2P Trading

*Editorial draft. Not approved for publication.*

## The question

A user taps Confirm and the network times out. Did the request fail, or did the server complete it without delivering the response? Retrying feels natural. In a financial workflow, treating every retry as a new action can be dangerous.

## What can go wrong

Idempotency means that repeating the same intended operation does not create an additional economic effect. It is not the same as ignoring every duplicate-looking request. The system must identify which action is being repeated, who is authorized to request it and which recorded outcome is authoritative.

## Where the guarantee belongs

An API key or request identifier helps, but it is not the entire solution. Imagine that a service records a completed trade and crashes before returning success. On restart, a retry must find the prior outcome instead of applying settlement again. This requires durable state and a clear transactional boundary.

## How we approach it

In the Sails P2P Trading SDK, we treat retry behavior as an economic correctness question. Our engineering reviews include database-backed scenarios, concurrent requests and crash-and-replay tests. The exact guarantees depend on the operation, adapter and evidence approved for a particular implementation. We will not call a workflow exactly-once merely because one unit test passes.

## Read next

Next we will look at a related but different problem: what happens when two requests arrive at the same time, before either can observe the other's result?

*Sources pending: link immutable implementation commits, CTO decisions and verification runs before publication.*
