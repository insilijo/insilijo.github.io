---
layout: post
title: "Forge Update: Multi-Omics Integration, mzML Processing, and GeMMA"
date: 2026-04-07 12:00:00
description: "A month in: what's landed in Forge since the launch post — multi-omics integration algorithms, raw mzML processing, GeMMA availability, and case study infrastructure."
tags: multiomics bioinformatics software forge update
categories: software science
giscus_comments: true
related_posts: true
pretty_table: true
thumbnail: "assets/img/blogs/2026-04-07/forge_multiomics.png"
---

A month ago I published the [initial Forge post]({% post_url 2026-03-23-forge %}). At that point the platform handled single-assay preprocessing and analysis well; multi-omics integration was a labeled tab with a "coming soon" message. That tab now works. This post covers what has shipped since launch.

---

## Multi-Omics Integration

The central addition is a full multi-omics analysis module backed by seven integration algorithms, each suited to a different study design and question:

**MCIA (Multi-Co-Inertia Analysis)** finds a common ordination across multiple omics layers simultaneously — useful when you want to visualize sample structure across assays without a supervised target. Samples that cluster together in metabolomics should cluster together in transcriptomics if the biology is coherent; MCIA makes that concordance (or its absence) visible.

**JIVE (Joint and Individual Variation Explained)** decomposes the variance in each omics layer into a joint component shared across assays and individual components unique to each. This is valuable when you expect some signal to be shared (a treatment effect visible in both metabolomics and proteomics) and some to be assay-specific (technical variation, platform-specific features). JIVE separates those contributions explicitly.

**DIABLO** is the supervised counterpart to MCIA — a sparse canonical correlation approach that finds the linear combinations of features across assays that best discriminate between groups. Where MCIA asks "what structure is shared?", DIABLO asks "which features, across which assays, best explain this outcome?"

**Variance Partitioning** estimates how much of the variance in each feature is attributable to each omics layer, to covariates, and to their interactions. The output is a feature-level decomposition that identifies which metabolites are primarily driven by transcriptional regulation, which by microbiome activity, which by clinical covariates — a direct answer to the question of what is actually explaining the signal.

**Random Forest Late Fusion** trains independent models on each omics layer, then combines the predictions using a second-stage ensemble. This is the pragmatic approach when the assays are high-dimensional and sparse — it doesn't require feature alignment across layers, tolerates missing data gracefully, and produces feature importances per layer that are directly interpretable.

**SNF (Similarity Network Fusion)** constructs a similarity network for each omics layer separately, then iteratively fuses them into a single patient similarity network. SNF is particularly suited to subtype discovery: it finds patient groupings that are consistent across assays without requiring that the same features drive the separation in each one.

**MOFA+** is a probabilistic latent factor model that identifies axes of variation shared across omics layers. Unlike JIVE, which is deterministic, MOFA+ provides uncertainty estimates and handles missing values natively, making it well-suited to datasets where not every sample has every assay.

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-04-07/forge_multiomics.png"
  caption="Multi-omics integration hub. Each algorithm is selectable with its associated datasets; results include cross-assay visualizations and per-layer feature contributions."
  alt="Forge multi-omics integration interface showing algorithm selection and cross-assay results"
  figure_class="inline-figure"
  caption_class="caption small"
%}

The integration hub gates availability on dataset composition: MCIA and JIVE require at least two aligned assays; DIABLO and variance partitioning additionally require a group label. The interface surfaces which datasets are eligible for each method and why, so the user understands what the algorithm needs rather than hitting an error.

---

## GeMMA Integration

GeMMA — the microbiome-metabolome integration module — is now available to all authenticated users. Previously gated to staff, it is accessible to any registered user whose project contains both a metabolomics dataset and a metagenomics dataset. Availability is checked automatically; tabs that require the combination are gated with a clear message when the precondition isn't met.

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-04-07/forge_gemma.png"
  caption="GeMMA integration view, available when a project contains both metabolomics and metagenomics datasets. The interface shows concordance labels and pathway-level co-enrichment."
  alt="Forge GeMMA microbiome-metabolome integration interface"
  figure_class="inline-figure inline-right"
  caption_class="caption small"
%}

This represents the first real cross-tool integration in the platform: Forge's preprocessing pipeline produces the metabolomics input that GeMMA consumes, and the output is pathway-level co-enrichment between the metabolome and the microbiome. The metabolon curation model — which allows curator-assigned ChEBI and HMDB identities for Metabolon features — feeds directly into GeMMA's pathway matching.

---

## Raw Data Processing

Forge now accepts mzML files directly. The untargeted metabolomics pipeline has been migrated to Celery for proper async task management — mzML processing is long-running (minutes to tens of minutes depending on file size and instrument resolution) and was previously blocking. Jobs now queue, execute in the background, and surface results when complete. The Celery migration also improves stability under concurrent load: multiple users running untargeted analyses simultaneously no longer contend for the same process pool.

---

## Case Study Infrastructure

A new case study view exists at the project level. This is the infrastructure for the software paper validation requirement: a single page that walks through a complete analysis from data ingestion through preprocessing through statistical results, with the configuration captured and reproducible. The view is designed to be shareable — the intent is that a published case study can be reproduced exactly by loading the saved preprocessing profile and running the same analysis on the same public dataset.

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-04-07/forge_case_study.png"
  caption="Case study view. The full analytical chain — ingestion, preprocessing configuration, statistical results — is presented as a reproducible, shareable document."
  alt="Forge case study view showing end-to-end analysis documentation"
  figure_class="inline-figure"
  caption_class="caption small"
%}

---

## What's Next

The immediate priorities are the end-to-end case study on a public dataset (MTBLS or Metabolomics Workbench), pathway enrichment visualization, and the software paper. The multi-omics module is functional but the visualization layer for cross-assay results is still being extended — the algorithms run, but the output deserves richer interactive plots than what currently ships.

GeMMA and GIZMO, the companion tools in the Insilijo stack, are each close to their own publication milestones. I'll write about those separately as they clear validation.

---

If you are working with multi-omics data and want to talk about what Forge can do for your specific study design, reach out via the [contact page](/contact/) or open an issue on GitHub.
