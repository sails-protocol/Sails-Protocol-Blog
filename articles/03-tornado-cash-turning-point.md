---
slug: season-2-03-tornado-cash-turning-point
title: "The Tornado Cash Turning Point"
description: "The Tornado Cash litigation changed an important part of the discussion about immutable smart contracts."
tags: [protocol, editorial]
draft: true
---

## The shift

The Tornado Cash litigation changed an important part of the discussion about immutable smart contracts. In Van Loon v. Treasury, the Fifth Circuit considered whether the particular immutable contracts could be treated as blockable property under the sanctions authority at issue. That is not the same as declaring that every developer, interface or service built around smart contracts is exempt from law. A careful reading separates the immutable code from the people and services operating around it.

## What the precedent does not say

The Fifth Circuit’s 2024 Van Loon decision addressed whether immutable smart contracts could be treated as property subject to sanctions under the specific statute at issue. It did not decide that every decentralized service is lawful, that developers never face liability, or that a marketplace is exempt from financial regulation. The useful engineering question is narrower: which components remain controllable by a person or organization, and which cannot be altered after deployment? Governance keys, upgrade paths, hosted front ends and fee switches matter to that inquiry. The Sails architecture must be evaluated on its actual control surfaces, not by analogy alone.

## The test that matters for Sails

Rather than asking only whether custody exists, examine each layer separately: SDK publication, node hosting, offer discovery, arbitration, payment integrations and settlement. Who can change rules? Who can exclude participants? Who earns revenue for which activity? Who can actually execute or prevent a transfer? Two applications using the same library may answer those questions differently.

The editorial lesson is less dramatic but more durable. Judicial precedents can clarify the limits of state action and operator responsibility. They cannot replace functional analysis of a real product. Sails should earn credibility by explaining its boundaries, not by stretching legal holdings.

## Why immutability is not the same as decentralization

Immutability describes whether deployed code can be changed. Decentralization asks a different question: how control is distributed across the entire service. A fixed contract may coexist with a centrally operated website, a privileged transaction relayer, a single dispute administrator or a company that sets access policies. None of those features disappears merely because one component is immutable.

The reverse distinction matters too. A team can publish an SDK without becoming the operator of every application that integrates it. That does not absolve an integrator of obligations arising from its own conduct. The legal and technical analysis must follow the actual service and its control points, not the branding of the underlying library.

## A practical review of control

A useful architecture review starts with a transaction that succeeds, then repeats the exercise when something goes wrong. Can an administrator substitute a destination, upgrade a settlement path, censor a participant, seize a fee or intervene in a dispute? If a server disappears, can participants recover independently? Which powers are unilateral, which require multiple parties, and which are impossible by design? Each answer should be backed by code, deployment configuration and reproducible tests rather than a diagram alone.

That is the constructive relevance of the case for Sails: design for inspectable authority. It is not a shortcut to a legal conclusion. The distinction between immutable code and controllable services should sharpen the questions asked of each deployment.

## Sources and verification boundaries

### Primary document for legal context

- [Van Loon v. Treasury, Fifth Circuit (2024)](https://www.ca5.uscourts.gov/opinions/pub/23/23-50669-CV0.pdf)

The appellate ruling concerns a defined sanctions question. It does not decide custody, licensing or liability for Sails.
