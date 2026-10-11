---
slug: season-2-08-economic-coordination-protocol
title: "The Economic Coordination Protocol"
description: "Sails is not being designed as another exchange. Its thesis is an Economic Coordination Protocol for Building Interoperable P2P Financial Marketplaces."
tags: [protocol, editorial]
draft: false
---

## The shift

Sails is not being designed as another exchange. Its thesis is an Economic Coordination Protocol for Building Interoperable P2P Financial Marketplaces. Wallets retain signing authority; applications present choices; SDKs express actions; nodes coordinate state; and external payment and settlement systems provide evidence. These are architectural boundaries to be tested, not a claim that every invariant is already verified in production.

<!-- truncate -->

## The first testable product

The Sails P2P Trading SDK is the first concrete product focus. Its credibility depends on explicit authority for each economic transition, controlled retries, durable evidence and recovery after interruption. Other Sails modules remain a roadmap unless implementation and reproducible tests support more specific claims. The goal is interoperable coordination without requiring a single application to control users’ assets or dictate every market interface.

## Coordination must survive disagreement

An economic coordination protocol is tested when participants disagree, messages arrive twice, a process restarts or a payment provider returns an ambiguous result. The protocol needs explicit participant authority, idempotent transitions, evidence provenance and recovery rules; an attractive SDK API is not sufficient. Equally important is knowing what the protocol cannot decide: a database status cannot create an external payment, and a coordinator cannot turn an unverified claim into settlement truth. Interoperability is earned through compatible rules and independently reproducible behavior, not declared by branding.

## Economic coordination is a correctness problem

A matching interface is easy to demonstrate. Correct coordination is harder: concurrent claims must not sell the same capacity twice, a restarted worker must not duplicate a settlement effect, and evidence must not be silently overwritten. If a payment account or external provider is the authority for a fact, a node cannot invent that fact merely to complete its workflow.

The protocol’s long-term value depends on enforcing these boundaries through persistence, tests against real dependencies and independently reproducible evidence. Until the current implementation is checked at an exact commit, editorial language must distinguish design goals from proven runtime properties.

## Coordination is not the same as moving assets

An economic coordination protocol organizes commitments, states and evidence among participants using different wallets, networks and providers. It does not imply that the protocol holds the money or can guarantee third-party behavior. It must instead define which events are valid, how they are observed and when a transition can be considered complete.

A P2P trade can cross several trust boundaries: participant identity, offer publication, capacity reservation, payment evidence, disputes and escrow release. Every transition needs a defined authority and a rule for duplicate or out-of-order events.

## The restart test

A system looks reliable until its process crashes between recording a decision and publishing the result. On restart it may retry. If replay creates a second charge, a second release or contradictory completion, the economic coordination is not robust. That is why the architecture needs atomic transactions where applicable, idempotency, reconciliation and realistic concurrency and recovery tests.

For Sails, these words must not be treated as proof of production readiness. They describe properties requiring evidence from code, a real database and relevant provider integrations. An article can explain the design; reproducible tests must establish implementation.

## An application need not own the market

A reference application such as Sails Market can demonstrate protocol usage without monopolizing the opportunities it coordinates. Satsails Wallet and third-party wallets could build different experiences over shared infrastructure once the relevant modules and integrations actually exist. This is an architectural objective, not a claim that deployment is complete.

The model succeeds only if interfaces can compete while validity rules remain shared and inspectable. Otherwise, interoperability is merely a collection of screens showing incompatible versions of reality.

## The boundary between coordination and settlement

Coordination describes an agreed intent; settlement establishes what actually happened to value. A durable outcome cannot be inferred from a deleted pending record or a timeout. The system must preserve uncertainty until authoritative evidence resolves it. That is a design requirement, not a claim that the current implementation has passed its production gates.

## Evidence boundary

The coordination model described here still requires durable-state, replay and provider-level evidence before production claims.
