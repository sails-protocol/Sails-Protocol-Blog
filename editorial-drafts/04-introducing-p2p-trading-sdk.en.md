# Introducing the Sails P2P Trading SDK

*Editorial draft. Not approved for publication.*

## Start with one real workflow

A protocol can promise many things on paper. We chose to focus the first SDK on a concrete problem: coordinating the lifecycle of a P2P trade. That means dealing with offers, participants, payment steps, evidence, disputes and the conditions under which a trade may reach a final state. Each step has to be meaningful even when requests arrive out of order or are retried.

## The difficult part is not the happy path

In a demo, the buyer pays, the seller confirms and the trade completes. In a real system, a client can lose its connection after submitting a request. Two processes can attempt the same action. A provider can respond slowly. A dispute can introduce evidence that changes what must be reviewed. We have treated idempotency, concurrency, restart behavior and authority boundaries as central engineering questions, not optional polish.

## An SDK is an integration surface, not a guarantee

The SDK is meant to let different applications integrate trading workflows without rewriting every coordination rule. But an integration still needs correct configuration, authenticated actors, dependable storage and trustworthy adapters. A package compiling successfully is not the same as proving economic behavior under crashes, races and external failures. That is why our engineering process requires reproducible evidence and explicit review gates.

## What comes next

The first SDK is a starting point for a wider modular family, not proof that the entire family exists today. As the implementation advances, we will publish concrete examples, supported interfaces, test evidence and known limitations. Until then, this article explains the product direction rather than declaring production readiness.

*Technical and factual review pending. Do not publish before explicit approval.*
