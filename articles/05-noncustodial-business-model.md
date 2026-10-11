---
slug: season-2-05-noncustodial-business-model
title: "The Noncustodial Business Model"
description: "For years, wallet business models often relied on custody, spreads or privileged access to order flow."
tags: [protocol, editorial]
draft: false
---

## The shift

For years, wallet business models often relied on custody, spreads or privileged access to order flow. A wallet can also create value by helping users discover counterparties, understand terms, present evidence and complete transactions they authorize. Software fees, coordination charges and referral revenue are possible models, but the way they are charged and the actual conduct of the operator matter to legal classification.

<!-- truncate -->

## The design response

Sails aims to make commercial and security boundaries visible. Users retain signing authority, applications disclose charges, providers remain responsible for their own execution, and coordination status is not misrepresented as proof of settlement. This is an architectural objective requiring implementation evidence, not a claim that every fee or integration is outside financial regulation.

## A failure worth testing

An undisclosed referral fee or a promised execution guarantee that the wallet cannot honor can turn a sustainable revenue model into a conflict of interest.

## Revenue without holding the balance

A noncustodial interface can charge for useful software, premium discovery, verified workflows or disclosed referrals. Those revenues do not require a proprietary pool of customer assets, but they can create conflicts: an undisclosed rebate can distort rankings, and a supposedly neutral marketplace can favor one provider. Transparency about incentives is therefore a product requirement.

The Sails Market model should distinguish protocol fees, interface fees, provider rebates and third-party network costs. None of those categories alone determines licensing status. What matters is the actual conduct, especially whether an operator controls execution, holds customer value or intermediates regulated instruments.

## Revenue must be legible to the user

A fee on a completed trade, an integration rebate and a subscription for professional tools are different businesses. Each requires disclosure of incentives and a clear explanation of what the operator controls. Sustainable noncustodial revenue should not depend on hidden routing preferences or on quietly acquiring custody during exceptions.

## The incentive problem

A business that never holds customer balances still has incentives that deserve scrutiny. It may earn more when a particular provider receives an order, when a route includes additional steps or when an affiliate product is selected. None of these arrangements is automatically abusive. The risk arises when users cannot see the incentive, compare alternatives or verify that execution followed the stated rules. A sustainable model should identify who pays each fee, when it is earned, how refunds and disputes affect it and whether the operator can alter terms after a trade begins.

Consider a wallet offering a quote from an external swap provider. If the wallet receives a rebate, the user should understand whether that rebate is included in the quoted price and whether other routes were considered. Consider a P2P marketplace charging for successful coordination. The system must distinguish a confirmed economic outcome from an optimistic event notification; otherwise fees can be assessed against failed or unresolved trades. These questions are commercial as well as technical. For Sails, fee accounting and durable outcome authority require their own evidence before a blog describes them as delivered functionality.

## A practical revenue disclosure test

Before a user confirms a transaction, the interface should be able to answer four questions in ordinary language: who charges the fee, what event makes it payable, who receives any referral compensation, and which party can reverse or dispute it. A fee quoted as a percentage of the trade is not necessarily the same as a network fee, a provider spread or an affiliate rebate. Combining them under one label makes comparison harder, even if the application never takes custody.

Consider a merchant comparing two routes for receiving a stablecoin. Route A has a lower visible fee but pays the interface a higher rebate; Route B has a higher headline fee but a better final amount. A useful product should compare the user's net outcome and disclose relevant incentives. It must not imply that a quote guarantees settlement. The business model becomes more defensible when the interface can explain its compensation independently of the provider's claims and when an incomplete transaction cannot silently trigger a completion fee. This is a proposed product standard, not a claim that the current Sails Market has implemented it.

## Evidence boundary

This is a proposed incentive model. Actual fees, counterparties and control over funds require per-integration verification.
