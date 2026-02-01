---
layout: post
title: Why it's so hard to feed people
date: 2026-01-27 12:00:00
description: The logistical and contextual challenge of reducing food waste and giving it to our neediest
tags: context data ontologies food-justice food-waste logistics
categories: charity giving nonprofits
giscus_comments: true
related_posts: true
pretty_table: true
thumbnail: "assets/img/blogs/2026-02-02/grapes-of-wrath.png"
---

In 1939, John Steinbeck wrote a haunting passage about the real source of hunger in the Dust Bowl and Great Depression:

 >The works of the roots of the vines, of the trees, must be destroyed to keep up the price, and this is the saddest, bitterest thing of all. Carloads of oranges dumped on the ground. The people came for miles to take the fruit, but this could not be. How would they buy oranges at twenty cents a dozen if they could drive out and pick them up? And men with hoses squirt kerosene on the oranges, and they are angry at the crime, angry at the people who have come to take the fruit. A million people hungry, needing the fruit - and kerosene sprayed over the golden mountains. And the smell of rot fills the country. Burn coffee for fuel in the ships. Burn corn to keep warm, it makes a hot fire. Dump potatoes in the rivers and place guards along the banks to keep the hungry people from fishing them out. Slaughter the pigs and bury them, and let the putrescence drip down into the earth.
 ><br>
 ><br>
 >There is a crime here that goes beyond denunciation. 
 ><br>
 ><br>
 >There is a sorrow here that weeping cannot symbolize. 
 ><br>
 ><br>
 >There is a failure here that topples all our success. 
 ><br>
 ><br>
 >The fertile earth, the straight tree rows, the sturdy trunks, and the ripe fruit. And children dying of pellagra must die because a profit cannot be taken from an orange. And coroners must fill in the certificate - died of malnutrition - because the food must rot, must be forced to rot. The people come with nets to fish for potatoes in the river, and the guards hold them back; they come in rattling cars to get the dumped oranges, but the kerosene is sprayed. And they stand still and watch the potatoes float by, listen to the screaming pigs being killed in a ditch and covered with quick-lime, watch the mountains of oranges slop down to a putrefying ooze; and in the eyes of the people there is the failure; and in the eyes of the hungry there is a growing wrath. In the souls of the people the grapes of wrath are filling and growing heavy, growing heavy for the vintage.

John Steinbeck, *The Grapes of Wrath*

What Steinbeck identifies as most disturbing is not the hunger itself or even the diagnosis of a clear villain that leads to it. There is no cartoonish president directly promoting genocide, no subversive group of wealthy individuals advocating for hunger, not even a *Phytophthora infestans* blighting the crops as it did during the Irish Potato Famine. Instead, there's the quiet and bleak assumption that -- sometimes -- many have to be sacrificed to keep the machine of industry running, even if it results in obvious inefficiency.

Even in Boston — a city with high transit access, strong social programs, and deep institutional wealth — food insecurity remains widespread. 37% of Massachusetts families report facing food insecurity and nearly [20% rely](https://www.boston.gov/news/mayor-wu-boston-officials-share-local-response-looming-lapse-snap-benefits) directly on SNAP assistance to make ends meet ([see the report](https://www.gbfb.org/news/press-releases/2025-annual-statewide-food-access-report/)).

So how can we be so wealthy and so poor at the same time?

## What Do We Know?

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-02-02/food-insecurity-neighborhood.png"
  caption="SNAP Access by Neighborhood. City of Boston Food Access: Food Access and Insecurity."
  caption_class="caption small"
  figure_class="inline-figure inline-left"
%}

General statistics tell a big part of the story. Boston has a rich history, and unfortunately a segregated history. Research suggests that demographics are the biggest predictor with 62% of Hispanic households, 46% of Black households, and 56% of LGBTQIA+ households facing insecurity from the same report as above.

Indeed, neighborhood-level maps support this theory, with communities of color like Roxbury, Dorchester, and Mattapan disproportionately affected.

While the city of Boston, predominantly through the Greater Boston Food Bank, distributes nearly 90 million healthy meals to 190 cities and towns in Eastern Massachusetts while operating over 600 community-based pantries. Massachusetts, as a whole, distributes over [$2.6 billion](https://www.cbpp.org/research/food-assistance/snap-state-by-state-data-fact-sheets-and-resources) dollars to food assistance in the state.

Despite this, [Boston's Office of Food Justice (OFJ) along with the National Resources Development Council (NRDC)](https://www.boston.gov/news/mayor-wu-mass-general-brigham-and-ymca-greater-boston-announce-new-cold-storage-infrastructure) estimates that 21% of all of Boston's waste -- 130,000 tons -- is food, with an additional 1,100 that could be recovered through further interventions.

The demand is there, and the supply is there. If markets alone solved coordination problems, hunger would already be rare.

{% include figure.liquid
   loading="eager"
   path="assets/img/blogs/2026-02-02/water_delivery_2x.png"
   caption="Randall Munroe. https://xkcd.com/1599/. When I was a kid, I asked my parents why our houses didn't have toothpaste pipes in addition to water ones. I'm strangely pleased to see Amazon thinking the same way."
   caption_class="caption small"
   figure_class="inline-figure inline-right"
%}

The problem isn't quantity, it's logistics. Our typical response to hunger isn't to meet it where it is, it's to meet it where it *visibly* is. Boston homelessness is at 2.4% and mostly concentrated in a multi-block radius around a few sites downtown near MGH at "Mass and Cass" or "Methadone Mile", North Roxbury/the South End, and in Jamaica Plain near Southeast Franklin Park at the Shattuck Shelter Pine Street Inn.

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-02-02/food-pantries-neighborhood.png"
  caption="Food Pantries by Neighborhood. City of Boston Food Access: Food Access and Insecurity."
  caption_class="caption small"  
  figure_class="inline-figure inline-right"
%}

{% include figure.liquid
  loading="eager"
  path="assets/img/blogs/2026-02-02/boston-cost-per-room.png"
  caption="Food Pantries by Neighborhood. City of Boston Food Access: Food Access and Insecurity."
  caption_class="caption small"
  figure_class="inline-figure inline-left"
%}


With the exception of Jamaica Plain, there is significant concentration of service for food pantries in the denser, visibly homeless areas. This is great; these people need food -- especially fresh food -- and direct access.

However, we're seeing a negligence of a vast amount of people who would meet that "food insecure" label and claim SNAP. Indeed, the locations with the *highest median cost per room* are very near the locations of food pantries in the downtown, Back Bay, Fenway, South End, and South Boston regions, right where the food pantries are.

## What Exactly Are We Doing Here?
We have a functional food delivery apparatus, a lot of food, and a lot of people willing to resolve hunger. But there remains a lot of hunger. We're still in Steinbeck's America.

The people most consistently missed by the emergency food system are not the unhoused, but the "working poor". These people -- parents, blue-collar workers, and students -- are too far from food pantries and too busy to get there. They're stuck in a twilight zone of doing everything right but losing access as a result.

The data we have aren't sufficient. We fall prey to the same modes of decision-making that I've discussed before: [many people who need to work together]({% post_url 2026-01-01-scientific-babylon %}), [speak different professional languages]({% post_url 2026-01-20-catalog-of-catalogs %}), and [repeatedly fail to translate between them]({% post_url 2026-01-27-divergence-and-failure %}).

In this case, we have people with money trying to find the right way to leverage it by buying food and labor from the people who have it so they can give it to the communities with the greatest impact. But if you ask a politician, they're looking at the figures above or listening to disgruntled community members driving by Mass and Cass. If you're the Greater Boston Food Bank or the YMCA or one of the many other wonderful organizations, you're trying to balance volunteering, minimal monetary resources, and centralized logistics to maximize output. If you're a grocery store, farmers' market, or food importer, you're trying to maximize revenue but also minimize waste. And if you're a community advocate, you see your neighbors and can say -- directly -- to whom the food should go.

There are a lot of experts we need to integrate with different ontologies but one goal.

People are forgotten because we've lost revision, the ability to update systems when reality shifts. We collect data, but acting on it is either decentralized or divorced from local needs. Local groups do really good work and cities are actively pursuing zero waste and food distribution initiatives. But the connective tissue -- acting concurrently at a county and neighborhood level -- means that the working poor are forgotten. Hunger persists not because food is scarce, but because distribution requires local context that centralized systems are structurally bad at representing.

(I look forward to discussing solutions in future posts.)

Maps taken from https://storymaps.arcgis.com/stories/956debdf80c0492bbceeedff9f6a4bac.