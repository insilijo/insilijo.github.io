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
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Public repositories I&#39;m working on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "books-a-brief-history-of-seven-killings",
          title: 'A Brief History of Seven Killings',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/a_brief_history_of_seven_killings/";
            },},{id: "books-the-buffalo-hunter-hunter",
          title: 'The Buffalo Hunter Hunter',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/buffalo_hunter_hunter/";
            },},{id: "books-dungeon-crawler-carl",
          title: 'Dungeon Crawler Carl',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dungeoncrawler_carl_1/";
            },},{id: "books-carl-39-s-doomsday-scenario",
          title: 'Carl&amp;#39;s Doomsday Scenario',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dungeoncrawler_carl_2/";
            },},{id: "books-dungeoncrawler-carl-3",
          title: 'Dungeoncrawler_carl_3',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dungeoncrawler_carl_3/";
            },},{id: "books-the-god-of-the-woods",
          title: 'The God of the Woods',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/god_of_the_woods/";
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
            },},{id: "books-mexican-gothic",
          title: 'Mexican Gothic',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mexican_gothic/";
            },},{id: "books-never-flinch",
          title: 'Never Flinch',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/never_flinch/";
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
