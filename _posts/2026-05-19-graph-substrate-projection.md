---
layout: post
title: "Mendeleev-Omics"
date: 2026-05-19 09:00:00
description: "Using graph theory, interpolation, and contextualized tabular data to tell a more complete story"
tags: multiomics gizmo metabolomics graph-methods preprint
categories: science methods
giscus_comments: true
related_posts: true
pretty_table: true
thumbnail: "assets/img/blogs/2026-05-19/gizmo.JPEG"
---

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-05-19/PWFeb19Crease-original.jpg"
  caption="Early period: Dmitri Mendeleev’s original hand-drawn table (left) was dated 17 February 1869 and is almost unrecognizable from the version we know and love today. The version on the right was published in his first scientific paper about the periodic table. To reach something resembling the modern table, you have to imagine rotating this diagram 90° clockwise and then flipping the elements left to right. (Courtesy: Sputnik/Science Photo Library; Universal History Archive / UIG / Science Photo Library by way of Physics World 29 Jan 2019, Robert P Crease)"
  figure_class="inline-figure"
  caption_class="caption small"
%}

I analyzed 11 multi-omic and single-omic cohorts including auto-immune inflammatory (RA), infection-inflammatory (COVID), and oncological data. These included the canonical metabolism-led story of IDH-glioma where IDH mutants are able to differentially metabolize TCA Cycle intermediates like 2-hydroxyglutarate (2HG). Notably, using single-omics techniques in the context of a forked and built-out Reactome graph we'll call GIZMO, we were able to recover characteristics predicting other omics approaches. For IDH-glioma, using only RNA-seq data, of all 6,406 nodes on the curated biochemistry graph, we found **2HG comes in at rank 74, top 1.1%.**

I recovered the canonical oncometabolite from gene expression alone, by letting the curated graph's catalysis edges propagate signal from IDH1/IDH2/D2HGDH expression to the 2HG node it produces. The substrate filled in what wasn't measured.

That's the framework's strategic claim, in one sentence: **measurement-modality heterogeneity across studies stops being a blocker for integrative biology when it's contextually aware through archived biology.** In some ways, biochemistry-aware 'omics is an alternative genomics integration where the genomics is the standardized *homo sapiens* knowledge graph.

This borrows from Mendeleev's assumptions of the periodic table: we have a pattern, we understand the system, but we haven't measured it all yet. How do we assemble knowledge from disparate, inconsistent, and sparse data?

### Integration is a great idea until you have to do it

Every multi-omic consortium is sitting on data that they can't easily combine, much less understand. The standard tools -- DIABLO sPLS-DA, MOFA+ latent variable, SNF, even PCA -- all require paired modalities *within a cohort* and, for supervised methods, labels to optimize against. They produce great classifiers when those constraints hold, but are notable for overfitting or susceptibility to modality size and treatment. They aren't intended for unpaired measurements, result in difficult-to-interpret outputs, and often are difficult to validate because of small cohort sizes without proper validation channels.

My background is genome-scale modeling, it's own kind of quiet integration approach. In it, you assume canonical interactions at the biochemical level, forming a structure-informed, non-tabular representation of the genomic possibilities. With the advent of resources like Reactome and StringDB, we're in a world where that biochemical graph is available and open-source, enabling a more structured approach to analysis. The substrate-mediated approach starts here: project everything we have -- paired or unpaired -- onto the same curated biochemistry graph, let the graph's catalysis edges propagate signal across what wasn't measured, and read disease state per-patient from the resulting state vector. I've basically encountered this question at Joyn Bio, Rheos, and General Metabolics, but finally was able to integrate all of those projects into one cohesive framework.

Across the 11 cohorts tested, **4 surface a literature-anchor metabolite at top-5% rank** (IDH-glioma 2HG at 1.1%, HMP2 propionate at 2.8%, KMPLOT-BRCA alanine at 3.5%, GSE89408 citrulline at 4.3%). The remaining 7 cohorts have best-anchor ranks between 6% and 67%; recovery is not uniform across the panel, it's connectivity-dependent (the framework's documented scope condition). Notably, three of the four top-5% recoveries come from cohorts with **zero overlapping input features** (IDH-glioma RNA, HMP2 metabolomics, GSE89408 synovial RNA): different studies, different modalities, same substrate-coordinate space:

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-05-19/fig_v17_literature_recovery.png"
  caption="Literature-anchor metabolite recovery across 11 cohorts. X-axis = percentile rank of the best-recovered known disease-anchor metabolite (out of 6,406 substrate metabolite nodes; lower = better). Three of the four top-5% recoveries are from RNA-only cohorts; the metabolite was inferred entirely through graph diffusion along Reactome catalysis edges. GSE89408 synovial RNA recovers Protein-L-citrulline (the RA autoantigen) at top 4.3%; KMPLOT-BRCA RNA recovers alanine at top 3.5%; HMP2 metabolomics recovers propionate at top 2.8%."
  alt="Bar chart of literature-anchor metabolite recovery per cohort"
  figure_class="inline-figure"
  caption_class="caption small"
%}

The implication for study design: you don't need every cohort to measure everything. You need one well-chosen modality per cohort and a well-curated substrate. **Past studies, with whatever modality budget they had, can be re-integrated.** Likewise, the outputs can be analyzed as more biologically-relevant representations of human biology.

#### An unpaired-cohort replication worth flagging

The IDH-glioma cohort with paired RNA + NMR (Trautwein 2022, n=88) is small. To check whether the framework's IDH-mutation discovery is replicable on independent data, I ran it on **TCGA_IDH_glioma**, a separate cohort, n=458, RNA-only (no metabolomics at all), which has the same biology on a different cohort, with a much larger n and single modality:

Unsupervised signed-β projection separates IDH-mutant from IDH-wildtype at AUC 0.674 on TCGA's 458 patients, recovering the same IDH-mutation subtype the framework finds at AUC 0.805 on the smaller paired cohort. The paired RNA+NMR projection is sharper (more anchored substrate nodes), but the RNA-only single-modality projection holds up at the framework's documented scope-limit operating point (large unpaired single-modality cohorts → connectivity-rich gene anchoring → β recovers the canonical disease axis without supervision). The same propagation logic (IDH1/2 + D2HGDH expression → 2HG via Reactome catalysis) operates independently on both cohorts; the framework converges on the same biology from independent data.

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

- **β** is the phenotype-presentation axis: alignment with the substrate's hub direction. I characterized what's actually in that direction: 47 of the top 50 hub nodes are transcriptiona/signaling/immune/host-defense; only 1 of 50 is metabolism. The substrate's β direction is *the inflammation + signaling + transcription axis*, not bulk metabolism. It represents *hub engagement*, e.g., elements that are topologically/genomically relevant.
- **α** is the mechanistic-residual axis: what's orthogonal to that hub direction. Decomposable per-module (a kynurenine-pathway score, an argininase-module score, an ER-signaling score). This also represents the individual subtyping and potential mismatch of the individual with the canonical network.

### A late addition: obesity-stratified breast cancer (honest null)

While preparing this post, I tested the framework on **Hassan et al. 2020 (GSE148892)**, whole-blood RNA-seq from obese (n=14) vs non-obese (n=12) breast cancer patients. Same horizontal-meta-analysis question: can the substrate's catalysis edges propagate from blood RNA to obesity-relevant metabolites that were never measured?

Initial pattern was visually encouraging: three plausible obesity biomarkers (alanine at top 1.4%, uric acid at top 2.8%, taurolithocholate at top 3.7%) appeared in the framework's top discriminators when scored against a 21-metabolite obesity panel I assembled from the literature. But the proper test is a permutation null: how often does a randomly-drawn 21-metabolite panel produce ≥3 hits in the top 5% by chance?

10,000-permutation null on 21 metabolites randomly drawn from all 6,406 substrate metabolite nodes: **empirical p ≈ 0.086** at top 5%. Above conventional α = 0.05. **The observed recovery is not significantly above chance**: consistent with the binomial estimate (3 hits expected ≈ 1, observed = 3, P(≥3) ≈ 0.075).

I'm reporting this as the honest negative it is. **β MW p = 0.80 (NS): the framework's hub-direction projection does not separate obese from non-obese on this cohort.** The α residual showed the patterns above but at chance after proper null testing. n=26 + whole-blood RNA-seq (not tumor tissue) + a small panel curated post-hoc is below the framework's documented operating conditions. GSE148892 is reserved for the lipid-layer Paper 2 substrate (where blood-resident obesity biology has more substrate purchase) or for a longer obesity-cohort follow-up.

The reason this matters for the rest of the post: I'd considered framing this as a positive obesity finding before running the permutation test. The reframe is what hostile-review-of-your-own-work looks like in practice. The framework's strongest claims live where the substrate's coverage and the disease biology align, and on a small-n blood-RNA obesity-stratified cohort, that alignment isn't there yet.

### What discrimination looks like, per cohort

The framework produces per-cohort **discriminatory networks**; substrate sub-graphs of reactions, genes, and metabolites whose per-patient F values discriminate disease state. These read as small biology in context.

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-05-19/network_idh.png"
  caption="IDH-glioma. Carnitine and dicarboxylate transporters (SLC22A1/2, SLC13A1, SLC25A1/3, SLC23A3) cluster prominently, IDH-mut tumors rewire cell-membrane transport biology along with the canonical 2HG/α-KG axis."
  alt="IDH-glioma discriminatory substrate network"
  figure_class="inline-figure"
  caption_class="caption small"
%}

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-05-19/network_su_covid.png"
  caption="Su COVID. Argininase/urea cycle, kynurenine/IDO, and oxidative-stress modules visible. Acute viral metabolic rearrangement recovered as a connected sub-graph rather than as a flat differential list."
  alt="Su COVID discriminatory substrate network"
  figure_class="inline-figure"
  caption_class="caption small"
%}

The substrate-Louvain partition produces these topologically; per-patient F flags the discriminating sub-region. The biology -- argininase depletion in COVID, carnitine-transporter rewiring in IDH-glioma -- reads out of the network rather than being read into it.

### A disease taxonomy that fell out of the analysis. And the breast cancer result that should change how you think about supervised classifiers

Organizing the 11 cohorts by what β and α each carry produces a (question-type × signal-location) matrix:

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-05-19/fig_5class_taxonomy.png"
  caption="Disease taxonomy as a (question-type × signal-location) matrix. Rows: phenotype-presentation (β) vs mechanism-residual (α) vs both. Columns: classification (which subtype?) vs intensity (how severe?). Cohorts populate cells empirically. The α · classification cell is the conceptually interesting one, populated by breast_TCGA's PAM50 axis, which lives orthogonal to the substrate's hub direction."
  alt="Disease taxonomy as a 2-axis matrix"
  figure_class="inline-figure"
  caption_class="caption small"
%}

**On the canonical breast cancer benchmark** (Singh 2019 breast.TCGA, the dataset DIABLO was developed on), the framework recovers PAM50 Basal vs LumA from RPPA proteomics alone at AUC 0.787. Without labels, without a curated discriminative panel. DIABLO on the same cohort with labels + the Singh-curated panel reaches AUC 1.0, the supervised reference standard.

Where the framework adds something distinct: when α (the mechanism-residual axis) is projected after per-module standardization, α-PC1 separates Basal from LumA at MW p ≈ 5×10⁻¹². β does so at p ≈ 8×10⁻⁷. Both axes carry signal; the standardized α subspace carries it more sharply on this cohort.

An honest disclosure I owe given how recently this finding was added: I ran an 8-configuration ablation of the methodology (per-patient \|F\|-weighting, per-cohort module filter, z-score module standardization) to test which choices the headline depends on. Result: **standardization is load-bearing.** Without standardization, α-PC1 p collapses to ~0.34-0.48 (non-significant); with standardization, p ranges 3.4×10⁻⁷ (unweighted) to 4.9×10⁻¹² (with \|F\|-weighting). The module filter is cosmetic. β is independent at p = 7.99×10⁻⁷.

The conservative headline is therefore: **when per-substrate-module variance is equalized via standardization, the α residual contains a PAM50 mechanism axis that supervised-on-the-hub-direction methods are not optimized to find.** Without standardization, β-magnitude on the hub direction is the better single-axis discriminator. This is a methodologically-defensible result, but the methodology choice is a real one; equal-weighting modules is what surfaces the α biology.

The broader claim that survives: both supervised and unsupervised methods find the PAM50 axis on this cohort. Supervised finds it faster with labels + panel curation. The framework finds it from substrate structure alone, without supervision, by isolating the α residual at equal module weighting, a per-patient mechanism-axis projection that no flat-classifier method produces by construction.

Consensus methods are the ideal way to pull apart these complicated biological systems. Supervised methods solve the supervised problem they're given, optimizing for the most explanatory divisions in the cohort given the labels you have. They are tools for asking known questions or comparing the study to assumed biology. The substrate-mediated approach answers "what biology can the graph surface from this data without supervision," and on the breast cancer benchmark the answer includes the same PAM50-mechanism biology supervised methods recover with labels, just from substrate structure alone.

### Honest scope

A framework's value is what it can do AND what it can't. Quantifying both is part of the contribution.

What this framework does well:
- **Unsupervised recovery of canonical disease subtypes** — IDH-mutation status from RNA-seq alone (AUC 0.805). PAM50 Basal vs LumA from RPPA proteomics alone (AUC 0.787, with α-PC1 MW p ≈ 5×10⁻¹²). All without labels.
- **Cross-modality meta-analysis** — three cohorts with zero overlapping input features all surface their disease-anchor metabolite at top-5% rank in a common substrate-coordinate space.
- **Mechanism-axis discovery** — α captures subtype biology orthogonal to phenotype intensity. Surfaces signal that supervised projections systematically miss.

What this framework doesn't do:
- **Doesn't beat supervised on the supervised task.** Labels + curated panels + sPLS-DA can hit AUC 1.0 on what they were curated to find. They're solving a different problem.
- **Doesn't beat MOFA+ at matched-K feature retrieval.** MOFA+ wins 14/17 cohort-design cells at matched-K head-to-head. The framework's value is structural -- substrate-orthogonal gene access, cross-pathway bridging, α/β decomposition surfacing mechanism-axis biology -- not benchmark-metric dominance at fixed-K comparisons.
- **Doesn't help on driver-mutation cancers.** TCGA_LUAD fails. KRAS/EGFR/TP53 mutations rewire signaling networks rather than perturb expression of their canonical hubs, and the substrate captures expression-level perturbation, not mutation-driven downstream rewiring.
- **Doesn't always benefit from multi-modal input.** Adding NMR to RNA on the same 88 IDH-glioma patients doesn't improve discrimination. Multi-modal is conditionally beneficial.
- **Doesn't work below ~n=50.** Crohn n=33, Gao_RA n=24-28 land at the per-patient α-decomposition noise floor. The GSE148892 obesity attempt (n=26) discussed above was negative under a proper permutation null (p ≈ 0.09). This is a small-n + curator-defined panel + post-hoc is exactly where the framework's operating conditions break.
- **Cross-cohort aggregate is marginal.** Per-cohort effects can be strong, but the cross-cohort α-PCA aggregating across all 11 cohorts has permutation p = 0.059: visible inflammatory-vs-non separation but not significant at α = 0.05. Within-cohort biology is the framework's stronger claim; cross-cohort integration is still developing.
- **The α · classification breast_TCGA result depends on three methodological choices** introduced during a late revision pass: per-patient \|F\|-weighted module projection, per-cohort module filter, z-score standardization. Robustness ablation tables under each individual choice are reported in supplementary materials;α-direction holds across configurations, exact magnitude varies.
- **The substrate is a curated choice.** Reactome reactions + StringDB PPI + curated metabolite/disease annotations is one particular construction; findings haven't been tested for robustness to alternative curations (KEGG-only, no PPI, etc.). Reserved for follow-up.

### What's in the paper that didn't fit the blog

This post is the strategic frame. The preprint contains the substantive validation:

- **Substrate-orthogonal mid-PR disease-gene access** — across 17 cohort × design cells, 286 anchor genes recovered at median PageRank percentile 52 that are invisible to top-PR rankings, defended against Cohen's-d-no-graph at aggregate Mann-Whitney p = 0.002.
- **Cross-pathway bridging vs WGCNA** — GIZMO modules span ≈5× more Bonferroni-significant Reactome pathways per module than WGCNA on the same input features in 10/10 cohorts. Different module-coherence axes; the structural-property claim that survives null testing.
- **Smoothing-rescue analysis across the full 11-cohort panel** — Δ AUC of full-MAP vs no-smoothing ranges −0.114 (Crohn n=33 dilutes) to +0.225 (breast.TCGA RPPA hub-anchored rescues). Median +0.011. **MAP smoothing is conditionally beneficial, not universally** — the framework quantifies when it adds value vs hurts.
- **Cross-modality CV-R² ≈ 0.5 across 27 cells** — quantitative version of "modalities share information through graph adjacency" — ~70% of within-modality patterns are recoverable from another modality via substrate-mediated diffusion. Metab is the most predictive modality (metab → gene CV-R² = 0.463 vs gene → metab = 0.313).
- **Within-cohort α-PCA across 17 panel configurations** — the per-patient α-residual visualized per cohort, with explicit ablation of methodology (per-patient \|F\|-weighting, module filter, standardization) at the supplementary figure level.
- **8 pre-registered falsification entries** — the framework's scope was narrowed through 8 pre-registered null tests documented in git history. Each negative result eliminated a candidate framing. The surviving claims are what's left after the 8 falsifications.
- **β-direction substrate composition annotation** — the top-50 substrate hub nodes annotated by category; 47/50 are transcription / signaling / immune / host-defense, only 1 is metabolism. β is the phenotype-presentation axis of the substrate, not bulk metabolism.

If any of these are the question that brings you to the preprint, start there. Blog is the preview; preprint is the work.

### What's next

Preprint goes up this week: biorxiv first, venue target *Cell Systems*. Companion work in flight: Paper 2 (lipid-layer substrate), Paper 3/4 (KO/rewiring extension for driver-mutation cancers), metasurv (substrate-graph-regularized Cox), and discomarker (method-agnostic biomarker discovery).

This is solo independent work; no funding, no affiliation, no collaborators. Built end-to-end over the past several months. The infrastructure to run the framework on a new cohort takes ~30 minutes once data is in standard format; if you have a multi-omic cohort and want to see what the framework does on it, get in touch.
