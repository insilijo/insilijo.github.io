---
layout: post
title: Scientific Babylon
date: 2026-01-10 12:00:00
description: An essay on how meaning, incentives, and governance shape scientific systems across teams and institutions.
tags: ontologies standards omics multiomics
categories: software science
giscus_comments: true
related_posts: true
pretty_table: true
thumbnail: "assets/img/blogs/2026-01-01/tower_of_babylon.jpg"
---

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-01-01/tower_of_babylon.jpg"
  alt="By Pieter Brueghel the Elder - Levels adjusted from File:Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_(Vienna)_-_Google_Art_Project.jpg, originally from Google Art Project., Public Domain, https://commons.wikimedia.org/w/index.php?curid=22179117"
  figure_class="inline-figure inline-right"
%}

In accounts from The Bible and The Torah, the Tower of Babel is built to prevent a second flood, only to result in the fragmentation of human language. Variations on the same theme appear across Greek, Estonian, Sumerian, and Aztec traditions: a once-unified humanity loses a shared understanding of the world through linguistic division. In these stories, collective power gives way to confusion: not through catastrophe, but through meaning itself.

Modern linguistics offers a less mythic explanation. Languages diverge naturally, shaped by ecology, geography, isolation, and social structure. Language is not merely a labeling system; it is a lens for interpreting a complex world. As perspectives diverge, so too must the structures used to describe them.

Science faces a related, but sharper, problem. We attempt to describe systems that are not only complex, but mostly unobservable, probabilistic, and dynamic. The challenge extends past measurement and into representation: data are meaningless without a structured, shared, and preserved system. That system has to subscribe to the same orders as all data: Findable, Accessible, Interoperable, and Reproducible (FAIR) because its value lies in how it interfaces with colleagues and other data.

{% include figure.liquid
  loading="eager"
  url="https://researchmoment.unl.edu/wp-content/uploads/2024/06/DIWK-pyramid-1024x576.png"
  figure_class="inline-figure inline-left"
  alt="DIKW pyramid illustrating data, information, knowledge, and wisdom"
  caption="DIKW pyramid image from Research Moment, University of Nebraska-Lincoln Libraries, https://researchmoment.unl.edu/the-dikw-pyramid-and-the-process-of-conducting-an-advanced-review/"
  caption_class="caption small"
%}

Ontologies attempt to resolve this fragmentation by enforcing shared meaning. Here, ontology is used in its applied sense: not as a claim about what exists, but as a practical expression of how knowledge is organized and exchanged. In practice, they often expose the cost of assuming meaning can be fixed at all. Applying an alternative standard to these processes -- instead of resulting in meaning -- adds another standard on top of the dozens already there. We confront our own Tower of Babel, then: we find ourselves playing a massive, expensive game of telephone where meaning is exchanged, lost, and mutated between experts.

In metabolomics alone, biological, chemical, and analytical vocabularies coexist; each developed in different ecologies, each optimized for a different audience, and each only partially compatible with the others.

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-01-01/xkcd_927_standards.png"
  figure_class="inline-figure inline-right xkcd-figure"
  width="280"
  alt="xkcd 927 Standards comic"
  caption="xkcd 927 &quot;Standards&quot; by Randall Munroe, CC BY-NC 2.5, https://xkcd.com/927/"
  caption_class="caption small"
%}

These ontologies operate **long before** interpretation is even possible. Moreover, each individual discipline involved is nuanced, requiring years of experience or education to get to foundational understanding. These ontologies are the connective tissue that flattens these disciplinary nuances. For example, metabolomics data flows from Liquid Chromatography/Mass Spectrometry (LC/MS) through reference spectra (ideally developed on the same machine and method) and finally to a format that's accessible to a biochemist (typically a table). Even in this simplified process, it's clear that there's a substantial amount of effort involved in developing the method, creating the infrastructure around managing/storing the data, selecting/synthesizing reference compounds, analyzing data, and engineering it for interpretation.

Even getting to the point where we're comfortable analyzing the data requires a tremendous amount of effort and coordination. Moreover, no scientist has the capacity or time to ensure quality of the product, and relies on the data originator to deliver precise, accurate, and relevant results. It's crucial, for both internal and external purposes, to maintain a paper trail that makes it clear how each step integrates into the useful data. Otherwise, we're left with a mess of isolated numbers.

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-01-01/1.svg"
  class="img-fluid rounded z-depth-1"
  caption="This LC/MS example illustrates a broader pattern across scientific measurements: long chains of translation separate measurement from interpretation, and trust/meaning must be preserved across every handoff."
%}

This isn't just a factor in metabolomics. In fact, this specific analytical example can be applied directly to proteomics with a few small tweaks. Genomics, too, can claim to have done an excellent job of exploiting integrated analytics and ontologies to create reliable, consistent pipelines that are broadly interpretable and trustworthy. What we're trying to do here -- use extremely expensive, sensitive instruments on extremely expensive, sensitive biological samples -- is difficult and important. The first step is being able to adequately describe what's going on to other people.

Ontologies are, at their most useful, a representation of shared purpose among diverse methods, all integrating into a cohesive representation of an intractable phenomenon. To get to that point, it requires often silent, detailed labor from a large group of people to map out and maintain a reliable pipeline. However, they can often fall prone to overly-calcified standards, resulting in a labyrinthine branched set of systems. These processes must reflect their application while remaining integrated with their partners. To do this, ontologies are most effective when they constrain interpretation without attempting to freeze meaning. In domains that evolve as quickly as medicine, chemistry, tech, and biology, representation must remain thoughtfully provisional without becoming unstable.

What looks like a problem of standards is often a problem of governance. The failure mode here is rarely technical. It is organizational. Different groups optimize for different incentives, audiences, or realities -- speed, precision, publication, novelty, regulatory defensibility, commercial relevance -- and ontologies become the battleground where those incentives collide. Standardization does not remove ambiguity; it decides who bears the cost of resolving it.

In practice, governance does not mean tighter standards or different hiring practices. It means deciding who can revise definitions, how translation is handled, and where ambiguity is tolerated. Meaning will change regardless; the real question is who is accountable for managing that change over time.
