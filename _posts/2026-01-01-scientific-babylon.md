---
layout: post
title: Scientific Babylon
date: 2026-01-01 12:00:00
description: On representing measurement, quelling uncertainty, and finding meaning in biological systems
tags: ontologies standards omics multiomics
categories: software science
giscus_comments: true
related_posts: true
pretty_table: true
thumbnail: "assets/img/blogs/2026-01-01/tower_of_babylon.jpg"
---

{% include figure.liquid loading="eager" path="assets/img/blogs/2026-01-01/tower_of_babylon.jpg" alt="By Pieter Brueghel the Elder - Levels adjusted from File:Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_(Vienna)_-_Google_Art_Project.jpg, originally from Google Art Project., Public Domain, https://commons.wikimedia.org/w/index.php?curid=22179117" class="inline-img inline-right" %}

In accounts from The Bible and The Torah, the Tower of Babel is built to prevent a second flood, only to result in the fragmentation of human language. Variations on the same theme appear across Greek, Estonian, Sumerian, and Aztec traditions: a once-unified humanity loses a shared understanding of the world through linguistic division. In these stories, collective power gives way to confusion: not through catastrophe, but through meaning itself.

{% include figure.liquid loading="eager" path="assets/img/blogs/2026-01-01/hermes.jpg" class="inline-img inline-right" %}

<div class="caption small">
House of the Vettii, vestibule, oecus frescoes on the peristyle, Ixion tied to the wheel by Vulcan in the presence of Juno, https://commons.wikimedia.org
</div>

Modern linguistics offers a less mythic explanation. Languages diverge naturally, shaped by ecology, geography, isolation, and social structure. Language is not merely a labeling system; it is a lens for interpreting a complex world. As perspectives diverge, so too must the structures used to describe them.

Science faces a related, but sharper, problem. We attempt to describe systems that are not only complex, but partially unobservable, probabilistic, and dynamic. The challenge extends past measurement and into representation: data are meaningless without a structured, shared, and preserved system.

{% include figure.liquid loading="eager" path="assets/img/blogs/2026-01-01/universal_converter_box_2x.png" class="inline-img inline-left" max-width="400" %}

<div class="caption small">
  Comes with a 50-lb sack of gender changers, and also an add-on device with a voltage selector and a zillion circular center pin DC adapter tips so you can power any of those devices from the 90s. xkcd.com/1406
</div>

Ontologies attempt to resolve this fragmentation by enforcing shared meaning. In practice, they often expose the cost of assuming meaning can be fixed at all. We confront our own Tower of Babel, then: we find ourselves peering through a diversity of lenses, each fit for a slightly different purpose. Our risk is that we find ourselves constantly converting between systems, losing precision or accuracy in the process, and ultimately achieving no actionable momentum.

This is the case even for folks with similar backgrounds. Let's take metabolomics, where ontologies are a little less mature but where several strong attempts at ontologies exist. I'll define three major categories with examples of each type:

- **Biological**: HMDB, KEGG, FOBI, MetaCyc, DrugBank, ECMDB;
- **Chemical**: CAS, ChEBI, ChEMBL, IUPAC, SMILES, InChI;
- **Analytical**: GNPS, PubChem, MetLin, MSIO.

These categories exist because each addresses a slightly different audience: biological ontologies seek to define the specific impact or role of small molecules in a phenotype, chemical ontologies define the solution space of all reasonable small molecules outside of biology, and analytical ontologies define the way that small molecules perform on a measurement platform.

These three ontologies factor in as crucial steps **even before** we get to any sort of useful interpretation. Moreover, each individual discipline involved is nuanced, requiring years of experience or education to get to a foundational knowledge. These ontologies are the connective tissue that flattens these experiences and nuances into an interface for colleagues

<div>
    {% include figure.liquid loading="eager" path="assets/img/blogs/2026-01-01/1.svg" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">
    A simple, elegant caption looks good between image rows, after each row, or doesn't have to be there at all.
</div>
