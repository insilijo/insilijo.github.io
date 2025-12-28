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
    const checkboxes = document.querySelectorAll('.book-filter-checkbox');

    if (!searchInput || !dropdownMenu || bookItems.length === 0) {
      return; // Required elements not found
    }

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
      selectedContainer.innerHTML = '';
      
      if (selectedTags.size === 0) {
        selectedContainer.style.display = 'none';
        return;
      }

      selectedContainer.style.display = 'flex';

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
        
        selectedContainer.appendChild(chip);
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

      // Hide favorites section if no favorites are visible
      const favoritesSection = document.querySelector('h1:first-of-type');
      if (favoritesSection && favoritesSection.textContent.trim() === 'Favorites') {
        const favoritesUl = favoritesSection.nextElementSibling;
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
