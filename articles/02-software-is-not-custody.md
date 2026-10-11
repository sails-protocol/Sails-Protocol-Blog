---
slug: season-2-02-software-is-not-custody
title: "Software Is Not Custody"
description: "FinCEN stated in FIN-2014-R002 that producing and distributing software, without more, does not itself constitute money transmission."
tags: [protocol, editorial]
draft: false
---

## The design response

FinCEN stated in FIN-2014-R002 that producing and distributing software, without more, does not itself constitute money transmission. That distinction matters, but it is not a blanket exemption for a business that uses software to accept, control or transmit value. For Sails, the relevant test is operational: who can sign, redirect, settle or reverse a transfer, and what does each operator actually do?

<!-- truncate -->

## A decision tree, not a slogan

The first question is whether an entity only publishes code or also operates a service. Next comes authority: can it redirect funds, approve a transfer without the user, or decide which orders execute? Then comes the product: spot exchange, payment transmission and derivatives are not interchangeable categories. Finally, examine the jurisdiction and the actual operator. A software vendor, wallet developer, marketplace operator and settlement provider can have different obligations even when they share the same open-source SDK. A legal analysis should describe each actor rather than assigning one label to the entire ecosystem.

## A second regulator, a narrower question

A 2026 CFTC staff position concerning certain Phantom wallet activities illustrates why regulatory conclusions must be scoped to the specific operator, product and conditions. It does not turn noncustodial software into a universal exemption. Money transmission under FinCEN, market functions under the CFTC and state-level requirements are distinct questions. The Sails design cannot borrow another operator’s regulatory position as proof of its own status.

## Follow the authority, not the marketing label

A product can describe itself as noncustodial while an operator retains a recovery key, can redirect a transaction, or exercises discretionary control over settlement. Conversely, a user can authorize a transfer through an interface that never receives possession of the assets. Auditors should trace who can sign, who can stop a transaction, who can alter its destination, who receives fees and what happens when infrastructure fails. The answers matter more than the name of the SDK.

For Sails, the editorial claim should remain narrow: the intended architecture coordinates P2P actions without taking custody of user balances. Whether a particular deployment achieves that outcome is an implementation and legal question, not something a blog post can certify.

## Three products that look identical on screen

Picture three apps with the same Send button. In the first, a user signs locally for a destination they can independently inspect. In the second, a server receives instructions, chooses a route and moves assets under its own authority. In the third, a marketplace never holds customer assets but operates infrastructure that decides which trades can complete. The interface may look identical. The distribution of economic power and legal responsibility does not.

Private-key possession is an important indicator, not the whole test. Administrative privileges, recovery mechanisms, contract upgrade authority, destination substitution and third-party providers may matter just as much. A noncustodial SDK can still be embedded in an application offering separately regulated services.

## Turn an architectural claim into an evidence trail

A credible review maps each flow: who initiates, who signs, who receives, who sets fees, who can cancel, which legal entity performs the activity, and what happens during failure. Exceptional paths deserve particular attention. If a dispute, outage or upgrade grants unilateral control to an operator, the architecture must say so.

For Sails, a per-integration authority map should be as important as the source code itself. The point is not to rename financial intermediation as software. It is to make the limits of each actor's power inspectable by users, integrators and independent counsel.

## Sources and verification boundaries

### Primary document for legal context

- [FinCEN FIN-2014-R002](https://www.fincen.gov/resources/statutes-regulations/administrative-rulings/application-fincens-regulations-virtual)

FinCEN’s software guidance is a limited legal reference, not a determination about any Sails operator or integration.

- [CFTC conditional staff position concerning Phantom (2026)](https://www.cftc.gov/PressRoom/PressReleases/9197-26)

This is a conditional CFTC staff no-action position concerning specified activities, not a generally applicable exemption or a determination about Sails.
