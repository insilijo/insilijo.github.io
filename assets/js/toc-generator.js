/**
 * Generate Table of Contents from headings in the markdown content
 * This works without the jekyll-toc plugin, making it compatible with GitHub Pages
 */
(function() {
  function generateTOC() {
    const tocContainer = document.getElementById('table-of-contents');
    if (!tocContainer) return;

    const markdownContent = document.getElementById('markdown-content');
    if (!markdownContent) return;

    // Find all headings (h2, h3, h4) in the markdown content
    const headings = markdownContent.querySelectorAll('h2, h3, h4');
    if (headings.length === 0) {
      tocContainer.style.display = 'none';
      return;
    }

    // Generate IDs for headings that don't have them
    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim();
      }
    });

    // Build TOC structure using a simpler approach
    let tocHTML = '<nav role="navigation" class="table-of-contents"><ul>';
    let previousLevel = 0;

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.substring(1)); // h2=2, h3=3, etc.
      const id = heading.id;
      const text = heading.textContent;

      if (level > previousLevel) {
        // Going deeper - open new nested list
        for (let i = previousLevel; i < level; i++) {
          if (i > previousLevel) {
            tocHTML += '<ul>';
          }
        }
      } else if (level < previousLevel) {
        // Going shallower - close lists and items
        for (let i = previousLevel; i > level; i--) {
          tocHTML += '</li></ul>';
        }
        tocHTML += '</li>';
      } else {
        // Same level - close previous item
        tocHTML += '</li>';
      }

      // Add the list item
      tocHTML += `<li><a href="#${id}">${text}</a>`;
      previousLevel = level;
    });

    // Close all remaining open lists and items
    for (let i = previousLevel; i >= 2; i--) {
      tocHTML += '</li>';
      if (i > 2) {
        tocHTML += '</ul>';
      }
    }

    tocHTML += '</ul></nav>';

    tocContainer.innerHTML = tocHTML;
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateTOC);
  } else {
    generateTOC();
  }
})();
