// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Fun things I&#39;m doing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Public repositories I&#39;m working on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-why-it-39-s-so-hard-to-feed-people",
        
          title: "Why it&#39;s so hard to feed people",
        
        description: "The logistical and contextual challenge of reducing food waste and giving it to our neediest",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/why-its-hard-to-feed/";
          
        },
      },{id: "post-anti-governance-original-sin-and-conway-39-s-law",
        
          title: "Anti-Governance, Original Sin, and Conway&#39;s Law",
        
        description: "&quot;All happy families are alike; each unhappy family is unhappy in its own way.&quot; - Leo Tolstoy",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/divergence-and-failure/";
          
        },
      },{id: "post-the-catalog-of-catalogs",
        
          title: "The Catalog of Catalogs",
        
        description: "Coherence, not completeness, is the limiting factor of data in modern scientific organizations.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/catalog-of-catalogs/";
          
        },
      },{id: "post-scientific-babylon",
        
          title: "Scientific Babylon",
        
        description: "An essay on how meaning, incentives, and governance shape scientific systems across teams and institutions.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/scientific-babylon/";
          
        },
      },{id: "books-a-brief-history-of-seven-killings",
          title: 'A Brief History of Seven Killings',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/a_brief_history_of_seven_killings/";
            },},{id: "books-lyrical-and-critical-essays",
          title: 'Lyrical and Critical Essays',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/albert_camus/";
            },},{id: "books-albion-39-s-seed",
          title: 'Albion&amp;#39;s Seed',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/albions_seed/";
            },},{id: "books-we-have-always-lived-in-the-castle",
          title: 'We Have Always Lived in the Castle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/always_lived_in_castle/";
            },},{id: "books-better-a-surgeon-39-s-notes-on-performance",
          title: 'Better: A Surgeon&amp;#39;s Notes on Performance',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/better/";
            },},{id: "books-between-the-world-and-me",
          title: 'Between The World and Me',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/between_the_world_and_me/";
            },},{id: "books-the-buffalo-hunter-hunter",
          title: 'The Buffalo Hunter Hunter',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/buffalo_hunter_hunter/";
            },},{id: "books-catch-22",
          title: 'Catch-22',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/catch_22/";
            },},{id: "books-gigi-julie-de-carneilhan-and-chance-acquaintances-three-short-novels",
          title: 'Gigi, Julie de Carneilhan, and Chance Acquaintances: Three Short Novels',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/colette/";
            },},{id: "books-crying-in-h-mart",
          title: 'Crying in H Mart',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/crying_in_h_mart/";
            },},{id: "books-dubliners",
          title: 'Dubliners',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dubliners/";
            },},{id: "books-the-butcher-39-s-masquerade-dungeon-crawler-carl-5",
          title: 'The Butcher&amp;#39;s Masquerade (Dungeon Crawler Carl 5)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dungeon_crawler_carl_5/";
            },},{id: "books-dungeon-crawler-carl",
          title: 'Dungeon Crawler Carl',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dungeoncrawler_carl_1/";
            },},{id: "books-carl-39-s-doomsday-scenario-dungeon-crawler-carl-2",
          title: 'Carl&amp;#39;s Doomsday Scenario (Dungeon Crawler Carl 2)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dungeoncrawler_carl_2/";
            },},{id: "books-the-dungeon-anarchist-39-s-cookbook-dungeon-crawler-carl-3",
          title: 'The Dungeon Anarchist&amp;#39;s Cookbook (Dungeon Crawler Carl 3)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dungeoncrawler_carl_3/";
            },},{id: "books-gate-of-the-feral-gods-dungeon-crawler-carl-4",
          title: 'Gate of the Feral Gods (Dungeon Crawler Carl 4)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dungeoncrawler_carl_4/";
            },},{id: "books-the-eye-of-the-bedlam-bride-dungeon-crawler-carl-6",
          title: 'The Eye of the Bedlam Bride (Dungeon Crawler Carl 6)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dungeoncrawler_carl_6/";
            },},{id: "books-family-furnishings-selected-stories-1995-2014",
          title: 'Family Furnishings: Selected Stories, 1995-2014',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/family_furnishings/";
            },},{id: "books-the-farthest-shore",
          title: 'The Farthest Shore',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/farthest_shore/";
            },},{id: "books-get-in-trouble",
          title: 'Get in Trouble',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/get_in_trouble/";
            },},{id: "books-the-god-of-the-woods",
          title: 'The God of the Woods',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/god_of_the_woods/";
            },},{id: "books-john-steinbeck",
          title: 'John Steinbeck',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/grapes_of_wrath/";
            },},{id: "books-gravity-39-s-rainbow",
          title: 'Gravity&amp;#39;s Rainbow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/gravitys_rainbow/";
            },},{id: "books-the-handmaid-39-s-tale",
          title: 'The Handmaid&amp;#39;s Tale',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/handmaids_tale/";
            },},{id: "books-the-house-on-mango-street",
          title: 'The House on Mango Street',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/house_on_mango_street/";
            },},{id: "books-how-to-solve-your-own-murder",
          title: 'How to Solve Your Own Murder',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/how_to_solve_your_own_murder/";
            },},{id: "books-intermezzo",
          title: 'Intermezzo',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/intermezzo/";
            },},{id: "books-the-invention-of-nature-alexander-von-humboldt-39-s-new-world",
          title: 'The Invention of Nature: Alexander von Humboldt&amp;#39;s New World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/invention_of_nature/";
            },},{id: "books-killers-of-the-flower-moon-the-osage-murders-and-the-birth-of-the-fbi",
          title: 'Killers of the Flower Moon: The Osage Murders and the Birth of the...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/killers_of_the_flower_moon/";
            },},{id: "books-the-left-hand-of-darkness",
          title: 'The Left Hand of Darkness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/left_hand_of_darkness/";
            },},{id: "books-lincoln-in-the-bardo",
          title: 'Lincoln in the Bardo',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/lincoln_in_the_bardo/";
            },},{id: "books-the-little-prince",
          title: 'The Little Prince',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/little_prince/";
            },},{id: "books-manchild-in-the-promised-land",
          title: 'Manchild in the Promised Land',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/manchild/";
            },},{id: "books-the-martian-chronicles",
          title: 'The Martian Chronicles',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/martian_chronicles/";
            },},{id: "books-maus-i",
          title: 'Maus I',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/maus_1/";
            },},{id: "books-maus-ii",
          title: 'Maus II',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/maus_2/";
            },},{id: "books-mexican-gothic",
          title: 'Mexican Gothic',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mexican_gothic/";
            },},{id: "books-middlemarch",
          title: 'Middlemarch',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/middlemarch/";
            },},{id: "books-middlesex",
          title: 'Middlesex',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/middlesex/";
            },},{id: "books-never-flinch",
          title: 'Never Flinch',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/never_flinch/";
            },},{id: "books-one-hundred-years-of-solitude",
          title: 'One Hundred Years of Solitude',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/one_hundred_years_of_solitude/";
            },},{id: "books-our-town",
          title: 'Our Town',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/our_town/";
            },},{id: "books-pachinko",
          title: 'Pachinko',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/pachinko/";
            },},{id: "books-a-perfect-spy",
          title: 'A Perfect Spy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/perfect_spy/";
            },},{id: "books-the-quiet-american",
          title: 'The Quiet American',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/quiet_american/";
            },},{id: "books-rattling-the-cages",
          title: 'Rattling the Cages',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/rattling_the_cages/";
            },},{id: "books-the-remains-of-the-day",
          title: 'The Remains of the Day',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/remains_of_the_day/";
            },},{id: "books-39-salem-39-s-lot",
          title: '&amp;#39;Salem&amp;#39;s Lot',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/salems_lot/";
            },},{id: "books-say-nothing-a-true-story-of-murder-and-memory-in-northern-ireland",
          title: 'Say Nothing: A True Story of Murder and Memory in Northern Ireland',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/say_nothing/";
            },},{id: "books-sea-of-tranquility",
          title: 'Sea of Tranquility',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/sea_of_tranquility/";
            },},{id: "books-the-silence-of-the-lambs",
          title: 'The Silence of the Lambs',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/silence_of_the_lambs/";
            },},{id: "books-the-sirens-of-titan",
          title: 'The Sirens of Titan',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/sirens_of_titan/";
            },},{id: "books-the-sound-and-the-fury",
          title: 'The Sound and the Fury',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/sound_and_fury/";
            },},{id: "books-station-eleven",
          title: 'Station Eleven',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/station_eleven/";
            },},{id: "books-the-storm-is-here",
          title: 'The Storm is Here',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/storm_is_here/";
            },},{id: "books-a-swim-in-the-pond-in-the-rain",
          title: 'A Swim in the Pond in the Rain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/swim_in_the_pond/";
            },},{id: "books-the-devils",
          title: 'The Devils',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_devils/";
            },},{id: "books-under-the-glacier",
          title: 'Under the Glacier',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/under_the_glacier/";
            },},{id: "books-the-visual-display-of-quantitative-information",
          title: 'The Visual Display of Quantitative Information',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/visual_display/";
            },},{id: "books-watership-down",
          title: 'Watership Down',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/watership_down/";
            },},{id: "books-wide-sargasso-sea",
          title: 'Wide Sargasso Sea',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/wide_sargasso_sea/";
            },},{id: "books-world-war-z",
          title: 'World War Z',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/world_war_z/";
            },},{id: "books-you-dreamed-of-empires",
          title: 'You Dreamed of Empires',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/you_dreamed_of_empires/";
            },},{id: "projects-fresh-start-food-network",
          title: 'Fresh Start Food Network',
          description: "Connect policy makers, distributors, and volunteers to improve equitable food distribution in Boston.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fresh-start-food-network/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6F%73%65%70%68.%6A.%67%61%72%64%6E%65%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/gizmojo_ey", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/microbesinsilico", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=CgGMO7MAAAAJ", "_blank");
        },
      },{
        id: 'social-strava',
        title: 'Strava',
        section: 'Socials',
        handler: () => {
          window.open("https://www.strava.com/athletes/74100558", "_blank");
        },
      },{
        id: 'social-wordpress',
        title: 'Wordpress',
        section: 'Socials',
        handler: () => {
          window.open("http://www.implicitjo.wordpress.com", "_blank");
        },
      },{
        id: 'social-goodreads',
        title: 'Goodreads',
        section: 'Socials',
        handler: () => {
          window.open("https://www.goodreads.com/user/show/49746364", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
