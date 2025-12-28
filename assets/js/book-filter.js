/**
 * Book tag filtering functionality
 * Searchable multiselect dropdown for filtering books by categories/tags
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    const searchInput = document.getElementById('book-filter-search');
    const dropdownMenu = document.getElementById('book-filter-dropdown-menu');
    const filterOptions = document.getElementById('book-filter-options');
    const selectedContainer = document.getElementById('book-filter-selected');
    const bookItems = document.querySelectorAll('.book-item');
    let checkboxes = document.querySelectorAll('.book-filter-checkbox');

    if (!searchInput || !dropdownMenu || bookItems.length === 0) {
      return; // Required elements not found
    }

    // Sort options by count (descending)
    sortOptionsByCount(filterOptions);

    // Re-query checkboxes after sorting
    checkboxes = document.querySelectorAll('.book-filter-checkbox');

    let selectedTags = new Set();

    // Toggle dropdown on input click/focus
    searchInput.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleDropdown();
    });

    searchInput.addEventListener('focus', function() {
      toggleDropdown(true);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.book-filter-container')) {
        toggleDropdown(false);
      }
    });

    // Search/filter options
    searchInput.addEventListener('input', function() {
      filterOptionsList(this.value.toLowerCase());
    });

    // Handle checkbox changes
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const category = this.value;
        if (this.checked) {
          selectedTags.add(category);
        } else {
          selectedTags.delete(category);
        }
        updateSelectedTags();
        filterBooks(selectedTags, bookItems);
      });
    });

    // Handle clear button
    const clearButton = document.getElementById('book-filter-clear');
    if (clearButton) {
      clearButton.addEventListener('click', function() {
        // Clear all selected tags
        selectedTags.clear();
        
        // Uncheck all checkboxes
        checkboxes.forEach(checkbox => {
          checkbox.checked = false;
        });
        
        // Clear search input
        searchInput.value = '';
        filterOptionsList('');
        
        // Update UI and filter
        updateSelectedTags();
        filterBooks(selectedTags, bookItems);
      });
    }

    function toggleDropdown(show) {
      if (show === undefined) {
        dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
      } else {
        dropdownMenu.style.display = show ? 'block' : 'none';
      }
      
      // Update icon
      const iconWrapper = document.querySelector('.book-filter-icon');
      if (iconWrapper) {
        const icon = iconWrapper.querySelector('i');
        if (icon) {
          if (dropdownMenu.style.display === 'block') {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
          } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
          }
        }
      }
    }

    function sortOptionsByCount(container) {
      const options = Array.from(container.querySelectorAll('.book-filter-option'));
      
      options.sort((a, b) => {
        const countA = parseInt(a.getAttribute('data-count') || '0');
        const countB = parseInt(b.getAttribute('data-count') || '0');
        return countB - countA; // Descending order
      });
      
      // Clear container and re-append sorted options
      container.innerHTML = '';
      options.forEach(option => {
        container.appendChild(option);
      });
    }

    function filterOptionsList(searchTerm) {
      const options = filterOptions.querySelectorAll('.book-filter-option');
      options.forEach(option => {
        const text = option.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
          option.style.display = 'flex';
        } else {
          option.style.display = 'none';
        }
      });
    }

    function updateSelectedTags() {
      const clearButton = document.getElementById('book-filter-clear');
      
      // Remove all chips but keep the clear button
      const chips = selectedContainer.querySelectorAll('.book-filter-chip');
      chips.forEach(chip => chip.remove());
      
      if (selectedTags.size === 0) {
        if (clearButton) {
          clearButton.style.display = 'none';
        }
        selectedContainer.style.display = 'none';
        return;
      }

      selectedContainer.style.display = 'flex';
      if (clearButton) {
        clearButton.style.display = 'inline-block';
      }

      selectedTags.forEach(tag => {
        const chip = document.createElement('span');
        chip.className = 'book-filter-chip';
        chip.style.cssText = 'display: inline-flex; align-items: center; padding: 0.25rem 0.5rem; background: var(--global-theme-color); color: var(--global-bg-color); border-radius: 4px; font-size: 0.85rem; gap: 0.5rem;';
        
        const tagText = tag.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        chip.innerHTML = `
          <span>${tagText}</span>
          <button class="book-filter-chip-remove" style="background: none; border: none; color: inherit; cursor: pointer; padding: 0; margin: 0; font-size: 1rem; line-height: 1; opacity: 0.8;" aria-label="Remove ${tagText}">
            <i class="fa-solid fa-times"></i>
          </button>
        `;
        
        const removeBtn = chip.querySelector('.book-filter-chip-remove');
        removeBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          selectedTags.delete(tag);
          // Uncheck the checkbox
          const checkbox = document.querySelector(`.book-filter-checkbox[value="${tag}"]`);
          if (checkbox) {
            checkbox.checked = false;
          }
          updateSelectedTags();
          filterBooks(selectedTags, bookItems);
        });
        
        // Insert before the clear button
        if (clearButton) {
          selectedContainer.insertBefore(chip, clearButton);
        } else {
          selectedContainer.appendChild(chip);
        }
      });
    }

    function filterBooks(selectedTags, bookItems) {
      const hasFilters = selectedTags.size > 0;

      bookItems.forEach(item => {
        const categories = item.getAttribute('data-categories');
        
        if (!hasFilters) {
          // Show all books
          item.classList.remove('hidden');
          item.style.display = '';
        } else if (categories) {
          // Check if book has any of the selected categories
          const categoryArray = categories.split(' ').filter(c => c.trim());
          const hasMatch = Array.from(selectedTags).some(tag => categoryArray.includes(tag));
          
          if (hasMatch) {
            item.classList.remove('hidden');
            item.style.display = '';
          } else {
            item.classList.add('hidden');
            item.style.display = 'none';
          }
        } else {
          // Book has no categories, hide it when filtering
          item.classList.add('hidden');
          item.style.display = 'none';
        }
      });

      // Hide empty year sections
      const yearSections = document.querySelectorAll('h1[id^="y"]');
      yearSections.forEach(yearSection => {
        const nextUl = yearSection.nextElementSibling;
        if (nextUl && nextUl.tagName === 'UL') {
          const visibleItems = nextUl.querySelectorAll('.book-item:not(.hidden)');
          if (visibleItems.length === 0 && hasFilters) {
            yearSection.style.display = 'none';
            nextUl.style.display = 'none';
          } else {
            yearSection.style.display = '';
            nextUl.style.display = '';
          }
        }
      });

    // Hide reading section if no reading books are visible
    const readingSection = document.querySelector('h1');
    if (readingSection && readingSection.textContent.trim() === 'Reading') {
      const readingUl = readingSection.nextElementSibling;
      if (readingUl && readingUl.classList.contains('reading')) {
        const visibleReading = readingUl.querySelectorAll('.book-item:not(.hidden)');
        if (visibleReading.length === 0 && hasFilters) {
          readingSection.style.display = 'none';
          readingUl.style.display = 'none';
        } else {
          readingSection.style.display = '';
          readingUl.style.display = '';
        }
      }
    }

    // Hide favorites section if no favorites are visible
    const favoritesSection = document.querySelector('h1');
    let favoritesUl = null;
    // Find favorites section (could be second h1 if reading exists)
    const allH1s = document.querySelectorAll('h1');
    for (let h1 of allH1s) {
      if (h1.textContent.trim() === 'Favorites') {
        favoritesSection = h1;
        favoritesUl = favoritesSection.nextElementSibling;
        break;
      }
    }
    
    if (favoritesSection && favoritesSection.textContent.trim() === 'Favorites') {
      if (!favoritesUl) {
        favoritesUl = favoritesSection.nextElementSibling;
      }
      if (favoritesUl && favoritesUl.classList.contains('favorites')) {
        const visibleFavorites = favoritesUl.querySelectorAll('.book-item:not(.hidden)');
        if (visibleFavorites.length === 0 && hasFilters) {
          favoritesSection.style.display = 'none';
          favoritesUl.style.display = 'none';
        } else {
          favoritesSection.style.display = '';
          favoritesUl.style.display = '';
        }
      }
    }
    }
  }
})();
