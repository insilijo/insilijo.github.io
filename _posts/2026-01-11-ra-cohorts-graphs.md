---
layout: post
title: ra_cohorts: Organizing Across Graphs
date: 2026-01-11 12:00:00
description: How ra_cohorts turns cohort data into graphs, compares them, and applies the structure to validation and domain shift.
tags: graphs cohorts validation metabolomics
categories: software science
giscus_comments: true
related_posts: true
---

I started **ra_cohorts** to make multi-cohort validation honest. The part I return to most often is the **grid search** used inside nested cross-validation. It looks like a mundane engineering step, but it encodes the math choices I care about: what loss to optimize, how to regularize, and how to control bias when cohorts shift.

## The core objective

For binary outcomes, the pipeline optimizes AUC on held-out folds. For a model with parameters θ, the objective is:

```
maximize  AUC( f(x; θ), y )
```

This matters because AUC is insensitive to class imbalance and ties directly to ranking quality. In `scripts/validation_pipeline.py`, the outer loop measures generalization, while the inner loop selects hyperparameters that maximize AUC.

## Grid search as explicit regularization

The grid is small by design. It encodes prior beliefs about the model class and its capacity:

- **SVC (RBF kernel):** C in {0.01, 0.1, 1, 10}, gamma in {scale, auto}
- **Logistic regression:** C in {0.01, 0.1, 1, 10}

For SVMs, C is the inverse of the regularization strength. In a soft-margin formulation:

```
minimize  1/2 ||w||^2 + C * Σ ξ_i
```

Small C biases toward wider margins (higher bias, lower variance), large C allows tighter fit (lower bias, higher variance). The grid is a controlled exploration of this bias-variance trade.

For logistic regression, C plays the same role for L2 regularization:

```
minimize  Σ log(1 + exp(-y_i w^T x_i)) + (1/2C) ||w||^2
```

The grid is a statement: I am not searching the space of models, I am searching the space of **regularization regimes**.

## Nested CV to avoid leakage

The pipeline uses nested CV so that hyperparameter selection is isolated from the final evaluation. The flow is:

1. Split training cohorts into outer folds.
2. For each outer fold, run inner CV to select (C, gamma).
3. Evaluate on the outer fold.
4. Train on all training cohorts using the selected configuration, then test on the held-out cohort.

This matters because without the inner loop, hyperparameter selection would leak information from the test fold and inflate performance.

## When graphs enter

The same logic shows up in the WL-kernel path. Graphs are mapped into a kernel matrix K, and the classifier is trained with a precomputed kernel:

```
K_ij = k(G_i, G_j)
```

Here, the grid is still on C (and not the kernel hyperparameters), which keeps the experiment focused: *How sensitive is the classifier to regularization when the similarity function is fixed?*

## Why this is the right abstraction

In multi-cohort work, the biggest risk is tuning to cohort idiosyncrasies. A tight grid inside nested CV is the simplest way to formalize humility:

- keep the model class small
- evaluate capacity explicitly
- prevent selection bias

That is the math behind the grid search in **ra_cohorts**. It is not just a convenience. It is the only reliable way I have found to keep performance claims grounded when cohorts disagree.
