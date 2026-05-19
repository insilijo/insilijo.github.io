---
layout: post
title: "Ship of Theseus-Omics"
date: 2026-05-19 09:00:00
description: "Using graph theory and contextualized tabular data to tell a more complete story"
tags: multiomics gizmo metabolomics graph-methods preprint
categories: science methods
giscus_comments: true
related_posts: true
pretty_table: true
thumbnail: "assets/img/blogs/2026-05-19/fig_v17_literature_recovery.png"
---


### tl;dr
I analyzed 11 multi-omic and single-omic cohorts including auto-immune inflammatory (RA), infection-inflammatory (COVID), and oncological data. These included the canonical metabolism-led story of IDH-glioma where IDH mutants are able to differentially metabolize TCA Cycle intermediates like 2-hydroxyglutarate (2HG). Notably, using single-omics techniques in the context of a forked and built-out Reactome graph we'll call GIZMO, we were able to recover characteristics predicting other omics approaches. For IDH-glioma, using only RNA-seq data, of all 6,406 nodes on the curated biochemistry graph, we found **2HG comes in at rank 74 — top 1.1%.**

We recovered the canonical oncometabolite from gene expression alone, by letting the curated graph's catalysis edges propagate signal from IDH1 / IDH2 / D2HGDH expression to the 2HG node it produces. The substrate filled in what wasn't measured.

That's the framework's strategic claim, in one sentence: **measurement-modality heterogeneity across studies stops being a blocker for integrative biology when it's contextually aware through archived biology.** In some ways, biochemistry-aware 'omics is an alternative genomics integration where the genomics is the standardized *homo sapiens* knowledge graph.

### Integration is a great idea until you have to do it

Every multi-omic consortium is sitting on data that they can't easily combine, much less understand. The standard tools -- DIABLO sPLS-DA, MOFA+ latent variable, SNF, even PCA -- all require paired modalities *within a cohort* and, for supervised methods, labels to optimize against. They produce great classifiers when those constraints hold, but are notable for overfitting or susceptibility to modality size and treatment. They aren't intended for unpaired measurements, result in difficult-to-interpret outputs, and often are difficult to validate because of small cohort sizes without proper validation channels.

My background is genome-scale modeling, it's own kind of quiet integration approach. In it, you assume canonical interactions at the biochemical level, forming a structure-informed, non-tabular representation of the genomic possibilities. With the advent of resources like Reactome and StringDB, we're in a world where that biochemical graph is available and open-source, enabling a more structured approach to analysis. The substrate-mediated approach starts here: project everything we have -- paired or unpaired -- onto the same curated biochemistry graph, let the graph's catalysis edges propagate signal across what wasn't measured, and read disease state per-patient from the resulting state vector. I've basically encountered this question at Joyn Bio, Rheos, and General Metabolics, but finally was able to integrate all of those projects into one cohesive framework.

Three cohorts with **zero overlapping input features** (IDH-glioma RNA, HMP2 metabolomics, GSE89408 synovial RNA) all surface their disease-anchor metabolite at top-5% rank in the same coordinate space:

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-05-19/fig_v17_literature_recovery.png"
  caption="Literature-anchor metabolite recovery across 11 cohorts. X-axis = percentile rank of the best-recovered known disease-anchor metabolite (out of 6,406 substrate metabolite nodes; lower = better). Three of the four top-5% recoveries are from RNA-only cohorts — the metabolite was inferred entirely through graph diffusion along Reactome catalysis edges. GSE89408 synovial RNA recovers Protein-L-citrulline (the RA autoantigen) at top 4.3%; KMPLOT-BRCA RNA recovers alanine at top 3.5%; HMP2 metabolomics recovers propionate at top 2.8%."
  alt="Bar chart of literature-anchor metabolite recovery per cohort"
  figure_class="inline-figure"
  caption_class="caption small"
%}

The implication for study design: you don't need every cohort to measure everything. You need one well-chosen modality per cohort and a well-curated substrate. **Past studies, with whatever modality budget they had, can be re-integrated.** Likewise, the outputs can be analyzed as more biologically-relevant representations of human biology.

### How it works (briefly)

Per-patient measurements project onto a curated ~38,000-node biochemistry graph (Reactome reactions + metabolites + genes + curated disease annotations) via maximum-a-posteriori reconstruction. A Laplacian smoothness prior diffuses signal across graph edges where we haven't measured; data-fidelity terms anchor it at measured nodes. The output is a per-patient F vector across the whole substrate.

That vector decomposes into two interpretable axes:

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-05-19/alpha_beta_diagram.png"
  caption="The β/α decomposition. log_PR is a fixed substrate-topology direction. Each patient's F splits into a scalar projection β · log_PR and an orthogonal residual α."
  alt="Geometric diagram showing F decomposed into β projection and α residual"
  figure_class="inline-figure"
  caption_class="caption small"
%}

- **β** is the phenotype-presentation axis — alignment with the substrate's hub direction. We characterized what's actually in that direction: 47 of the top 50 hub nodes are transcriptional / signaling / immune / host-defense; only 1 of 50 is metabolism. The substrate's β direction is *the inflammation + signaling + transcription axis*, not bulk metabolism. It represents *hub engagement*, e.g., elements that are topologically / genomically relevant.
- **α** is the mechanistic-residual axis — what's orthogonal to that hub direction. Decomposable per-module (a kynurenine-pathway score, an argininase-module score, an ER-signaling score). This also represents the individual subtyping and potential mismatch of the individual with the canonical network.

### A late addition — obesity-stratified breast cancer (GSE148892)

While preparing this post, we tested the framework on **Hassan et al. 2020 (GSE148892)** — whole-blood RNA-seq from obese (n=14) vs non-obese (n=12) breast cancer patients. No metabolomics in the deposit, just RNA. We asked: can the substrate's catalysis edges propagate from blood RNA to obesity-relevant metabolites that were never measured?

| Metabolite (never measured) | Top % | Cohen's d | Known biology |
|---|---|---|---|
| **alanine** | **1.4%** | −0.72 | Alanine-glucose cycle, metabolic stress |
| **uric acid** | **2.8%** | +0.58 | Hyperuricemia — classic obesity association |
| **taurolithocholate (bile acid)** | **3.7%** | +0.53 | Bile acid dysregulation in obesity |
| propionylcarnitine | 6.4% | +0.44 | Acylcarnitine elevation in insulin resistance |
| glycerol | 11.9% | +0.34 | Adipocyte lipolysis |
| cortisol (11-deoxycortisol) | 19.3% | +0.25 | HPA axis dysregulation |

Three known obesity biomarkers in the top 5%, recovered from blood RNA alone via graph-diffused inference through Reactome catalysis edges. The top-10 raw discriminators also surface inflammatory lipid mediators (15S-HpETE, 5S-HpETE — lipoxygenase products) and 5β-cholestan bile-acid intermediates — the framework's modular structure pulls together the obesity-inflammation-lipid axis without supervision.

**Honest caveats**: n=26 is small, at the framework's stratification floor. **β MW p = 0.80 (NS)** — the hub-direction projection does NOT separate obese from non-obese, mirroring the breast_TCGA PAM50 finding pattern. Obesity, like PAM50 subtypes, is a mechanism-residual question (α), not a phenotype-intensity question (β). The framework recovers it through α-mode module structure, not through hub engagement.

### What discrimination looks like, per cohort

The framework produces per-cohort **discriminatory networks** — substrate sub-graphs of reactions, genes, and metabolites whose per-patient F values discriminate disease state. These read as small biology in context.

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-05-19/network_idh.png"
  caption="IDH-glioma. Carnitine and dicarboxylate transporters (SLC22A1/2, SLC13A1, SLC25A1/3, SLC23A3) cluster prominently — IDH-mut tumors rewire cell-membrane transport biology along with the canonical 2HG / α-KG axis."
  alt="IDH-glioma discriminatory substrate network"
  figure_class="inline-figure"
  caption_class="caption small"
%}

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-05-19/network_su_covid.png"
  caption="Su COVID. Argininase / urea cycle, kynurenine / IDO, and oxidative-stress modules visible. Acute viral metabolic rearrangement recovered as a connected sub-graph rather than as a flat differential list."
  alt="Su COVID discriminatory substrate network"
  figure_class="inline-figure"
  caption_class="caption small"
%}

The substrate-Louvain partition produces these topologically; per-patient F flags the discriminating sub-region. The biology -- argininase depletion in COVID, carnitine-transporter rewiring in IDH-glioma -- reads out of the network rather than being read into it.

### A disease taxonomy that fell out of the analysis — and the breast cancer result that should change how you think about supervised classifiers

Organizing the 11 cohorts by what β and α each carry produces a (question-type × signal-location) matrix:

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-05-19/fig_5class_taxonomy.png"
  caption="Disease taxonomy as a (question-type × signal-location) matrix. Rows: phenotype-presentation (β) vs mechanism-residual (α) vs both. Columns: classification (which subtype?) vs intensity (how severe?). Cohorts populate cells empirically. The α · classification cell is the conceptually interesting one — populated by breast_TCGA's PAM50 axis, which lives orthogonal to the substrate's hub direction."
  alt="Disease taxonomy as a 2-axis matrix"
  figure_class="inline-figure"
  caption_class="caption small"
%}

The result worth landing on: **on the canonical breast cancer benchmark (Singh 2019 breast.TCGA — the dataset DIABLO was developed and demonstrated on), PAM50 Basal vs LumA discrimination lives almost entirely in α, not β. MW p ≈ 5×10⁻¹² on α-PC1, only 8×10⁻⁷ on β. Five orders of magnitude.**

Recovered from RPPA-proteomics alone, unsupervised, on the same patients DIABLO was trained on with labels and a curated discriminative panel.

The implication is methodological and worth dwelling on. A supervised method given labels and a curated panel achieves AUC 1.0 on this task -- perfect classification, but without appropriate CVs/splits. That's exactly what such a method is built to do. But the subtype-discriminating biology *lives in a direction orthogonal to what the supervised projection captures*. The supervised classifier is reading the disease axis that's easiest to project onto; the α-residual contains a distinct, biologically-coherent subtype axis (ER signaling vs basal-cytokeratin / BRCA1) that the supervised classifier doesn't expose. **Perfect classification accuracy can coexist with missing the dominant subtype-discriminating biology**, if the classifier's projection collapses the mechanism axis.

Consensus methods are the ideal way to pull apart these complicated biological systems. Supervised methods solve the supervised problem they're given, optimizing for the most explanatory divisions in the cohort given the labels you have. They are tools for asking known questions, or comparing the study to assumed biology, not for surfacing unknown structure. The substrate-mediated approach answers "what biology can the graph surface from this data without supervision," and on the breast cancer benchmark the answer includes PAM50-mechanism biology that the supervised projection compresses out.

### Honest scope

A framework's value is what it can do AND what it can't. Quantifying both is part of the contribution.

What this framework does well:
- **Unsupervised recovery of canonical disease subtypes** — IDH-mutation status from RNA-seq alone (AUC 0.81). PAM50 Basal vs LumA from RPPA proteomics alone (MW p ≈ 5×10⁻¹² in α). All without labels.
- **Cross-modality meta-analysis** — three cohorts with zero overlapping input features all surface their disease-anchor metabolite at top-5% rank in a common substrate-coordinate space.
- **Mechanism-axis discovery** — α captures subtype biology orthogonal to phenotype intensity. Surfaces signal that supervised projections systematically miss.

What this framework doesn't do:
- **Doesn't beat supervised on the supervised task.** Labels + curated panels + sPLS-DA can hit AUC 1.0 on what they were curated to find. They're solving a different problem.
- **Doesn't help on driver-mutation cancers.** TCGA_LUAD fails — KRAS/EGFR/TP53 mutations rewire signaling networks rather than perturb expression of their canonical hubs, and the substrate captures expression-level perturbation, not mutation-driven downstream rewiring.
- **Doesn't always benefit from multi-modal input.** Adding NMR to RNA on the same 88 IDH-glioma patients doesn't improve discrimination. Multi-modal is conditionally beneficial. We quantify when.
- **Doesn't work below ~n=50.** Crohn n=33, Gao_RA n=24-28 land at the per-patient α-decomposition noise floor. The GSE148892 obesity result above (n=26) sits at this floor too and should be read with that caveat.

### What's next

Preprint goes up this week: biorxiv first, venue target *Cell Systems*. Companion work in flight: Paper 2 (lipid-layer substrate), Paper 3/4 (KO/rewiring extension for driver-mutation cancers), metasurv (substrate-graph-regularized Cox), and discomarker (method-agnostic biomarker discovery).

This is solo independent work; no funding, no affiliation, no collaborators. Built end-to-end over the past several months. The infrastructure to run the framework on a new cohort takes ~30 minutes once data is in standard format; if you have a multi-omic cohort and want to see what the framework does on it, get in touch.
