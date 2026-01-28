---
layout: post
title: Anti-Governance, Original Sin, and Conway's Law
date: 2026-01-27 12:00:00
description: '"All happy families are alike; each unhappy family is unhappy in its own way." - Leo Tolstoy'
tags: ontologies standards omics multiomics
categories: software science
giscus_comments: true
related_posts: true
pretty_table: true
thumbnail: "assets/img/blogs/2026-01-27/groundhog_day.webp"
---

Loss through human divergence is a recurring motif across mythologies and modern narratives. Whether it’s the Tower of Babel, _Anna Karenina_, or Apple TV’s _Pluribus_, coherence is portrayed as fragile: something briefly held within a community before fragmenting under competing perspectives, incentives, or truths.

Organizations face the same problem. We are increasingly aware of our fractured knowledge ([as explored here]({% post_url 2026-01-01-scientific-babylon %})) and we even possess idealized models for addressing it ([outlined here]({% post_url 2026-01-20-catalog-of-catalogs %})). And yet, more often than not, we find ourselves in a disequilibrium between data in and meaning out.

Functional organizations are alike: clear ownership, shared purpose, and mechanisms for resolving conflicts or operational differences as they evolve. Dysfunctional organizations, by contrast, fail in many different ways. Those failures are not random. They tend to fracture along the same structural seams, where decisions were deferred, authority was ambiguous, or tradeoffs were never made explicit.

In scientific organizations, these fractures are especially visible because messy, expensive, large, complex, and regulated data magnifies them. When coherence breaks down, it does so predictably by eroding structure, dissolving focus, or overwhelming orchestration. What follows are not edge cases or cultural quirks, but recurring governance failures that turn abundance into noise.

In the context of scientific data systems, I’ll outline five such failure modes.

## Original Sin
Every data system inherits its earliest assumptions. Those assumptions are almost never wrong, but they are always incomplete.

Early success hardens into structure before its implications are understood or felt. In scientific organizations, this usually happens at moments of genuine discovery that translates to early commercial success or funding. A postdoc identifies a compound with higher efficacy and lower toxicity. A mid-career scientist devises a scalable manufacturing process for a difficult protein. The work is real, urgent, and valuable.

At that moment, no one asks how these results should be schematized, governed, or made durable. They shouldn’t. The goal is progress, not architecture.

But early decisions -- from file formats, to identifiers, naming conventions, database structures, knowledge limits, ownership boundaries -- quietly fix the future shape of the system. What begins as a pragmatic shortcut becomes a moral commitment. Downstream teams inherit constraints they did not choose, and over time those constraints, now inscrutable, are mistaken for deified intent.

Original Sin is not bad design. It is unexamined design, preserved long past the conditions that justified it.

## Underinvestment in Stewardship
As organizations evolve, they must become increasingly selective with resources. Early success often encourages investment in technology: more scientists, more direct support, more output. During periods of strategic repositioning, those same organizations may assume that existing systems are robust enough to persist with less attention. Even in uneventful drift, as stewards move on to new roles or opportunities, institutional protections quietly decay.

The underlying assumption is that something built correctly (or even fit for purpose) will last indefinitely. It won’t.

Stewardship is an unassuming function. Its greatest yields are negative space: fewer disruptions, smoother access, less friction. These outcomes rarely excite investors or justify headcount. Failure is also slow. Platforms corrode gradually; they almost never collapse outright.

Stewardship is not a technical role. It is an organizational function and an institutional posture. When it is underinvested, the closest contributors to the pain points often compensate through yeomanlike labor, building informal workarounds or cottage industries of reconciliation. To leadership, this can appear efficient. In reality, it externalizes cost.

The burden of maintaining coherence shifts downstream. New hires have to play games of telephone and archaeology, adjacent teams must support domain knowledge they don't have, and end users who must reconstruct context that was never preserved. Over time, the organization becomes dependent on memory rather than structure.

Stewardship is the work of maintaining meaning across time. When it is absent, systems do not fail loudly; they rot quietly.

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-01-27/garfield-existentialism.avif"
  caption="Garfield Minus Garfield: Existentialism. Jim Davis and Dan Walsh"
  caption_class="caption small"
%}

## Organic Growth
Organizations are never born just once. They pass through a series of transitions: promising platforms give way to new candidates, technologies are adopted, programs are cut, teams re-form, and key personnel move on. Throughout these changes, data continues to accumulate. What changes is not volume, but direction.

It is natural to assume that methods which worked previously will continue to work. During transitions, however, pressure mounts. Deadlines tighten, scope shifts, and small deviations become necessary. A workaround is introduced to accommodate an edge case or unblock progress. The change functions, delivers value, and -- crucially -- appears harmless.

At this point, a choice exists: reconcile the exception back into the system by extending the schema, revising constraints, or explicitly redefining scope. Or leave it alone.

Organic overgrowth occurs when reconciliation is deferred. The workaround takes root outside the original structure, not as an intentional fork, but as a practical accommodation. Over time, these local optimizations proliferate. They remain functional, even useful, but increasingly distinct. What began as a single exception becomes a parallel record of truth.

This is how competing ontologies emerge in good faith. A table is created without key relationships. Clinical trial metadata lives in a PowerPoint because it is visible and fast. A secondary identifier system is introduced to satisfy an urgent need. Each choice is rational in isolation. Collectively, they fracture coherence.

The danger is not that these systems fail. It is that they succeed. Parallel frameworks demand duplicate effort, require constant translation, and resist consolidation because they are already embedded in workflows. Overgrowth is difficult to reverse precisely because nothing is broken.

Organic overgrowth is entropy mistaken for flexibility. Without deliberate reconciliation, systems expand outward instead of upward, accumulating exceptions until the cost of unification outweighs the will to attempt it.

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-01-27/myst.jpg"
  caption="Myst library from https://www.trueachievements.com/game/Myst/walkthrough/3. Rand and Robyn Miller, Cyan, 1993. I will not be taking further questions."
  caption_class="caption small"
%}

## Conway's Law
“Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization’s communication structure.”
— Melvin Conway, 1968

Melvin Conway’s observation is often treated as a technical curiosity: a two-person team builds a two-pass compiler, a four-person team builds a four-pass one. In practice, it describes far more than software architecture. It applies equally to organizations, data systems, and the knowledge structures that emerge from them.

At its core, Conway’s Law is neutral. Structure follows communication. Decisions follow authority. Boundaries propagate. X begets Y.

It becomes a failure mode when X is already compromised.

Knowledge systems are not abstract representations of truth; they are accumulations of decisions, incentives, and justifications made by an organization at a specific moment in time. They encode not only what is known, but who was allowed to decide, who needed to be consulted, and which tradeoffs were acceptable. When communication paths fragment, so does meaning.

Because decisions are cumulative, small disruptions matter. A temporary reporting line becomes permanent. A workaround becomes precedent. A silenced stakeholder becomes an absent domain. Over time, the structure of the organization becomes its intent, and that intent determines the structure of the system.

This is why Conway’s Law is not merely descriptive but predictive. Systems do not fail because they are poorly designed. They fail because they faithfully mirror organizations that are themselves in flux, misaligned, or fragmented.

Conway’s Law explains why coherence cannot be fixed downstream. When communication breaks, architecture follows. When authority diffuses, meaning fractures. The system does not resist this outcome: it records it.

## Unwillingness to Revise
All of these failure modes carry an element of inevitability. The future cannot be predicted, so the present cannot be perfectly constructed around it. Our flexibility can be a strength but can limit focus and our best attempts at orchestration can become outdated or misdirected.

Left unmitigated, these dynamics can degrade systems. But none of them represent terminal failure. What __is__ terminal is the unwillingness to confront them.

Revision is a fact of scientific life. Until 1944, proteins were thought to carry genetic information. Until the late nineteenth century, disease was attributed to miasma rather than microbes. Science isn't conducted by predicting, preserving, or even finding correct answers, but by revising frameworks when evidence demands it.

As scientists, we accept that hypotheses must change. The same principle must apply to how we record, structure, and govern our knowledge. When existing systems obstruct interpretation or decision-making, they must be revised, regardless of how successful or familiar they once were.

This is rarely easy. Revision is both technical and political. It requires deep institutional understanding and legitimate authority, a combination that is seldom concentrated in a single role. As a result, revision often occurs only when failure becomes visible enough to bridge the gap between technical insight and executive action. That can be too late in a competitive landscape.

But without revision, failure modes compound. Original assumptions harden. Stewardship erodes. Exceptions proliferate. Organizational fractures imprint themselves onto systems. What begins as manageable drift becomes structural decay.

Revision is the only counterforce. It must be deliberate, authorized, and decisive. Without it, systems do not merely age; they accumulate incoherence and fracture into individual, incompatible truths.
