---
layout: page
permalink: /repositories/
title: repositories
description: Public repositories I'm working on.
nav: true
nav_order: 7
---

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repo=repo %}
  {% endfor %}
</div>
{% endif %}
