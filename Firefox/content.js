// Author: Jiru Gutema
// Date: 2023-10-01

// Hide YouTube Shorts Extension Content Script
// This script removes YouTube Shorts from the homepage, sidebar, and redirects Shorts video pages to the homepage.
// It works by removing DOM elements related to Shorts and observing for dynamic changes.

// CSS selectors for Shorts elements on YouTube
const SHORTS_SELECTORS = [
  'ytd-rich-shelf-renderer[is-shorts]', // Shorts shelf on homepage
  'ytd-reel-shelf-renderer',            // Shorts shelf (alternate)
  '#shorts-container'                   // Shorts container (legacy or fallback)
];

let isEnabled = true;

/**
 * Removes all visible Shorts elements from the page and sidebar.
 * Also redirects away from Shorts video pages.
 */
function removeAllShorts() {
  if (!isEnabled) return;
  // Remove main Shorts shelves from homepage
  SHORTS_SELECTORS.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.remove());
  });

  // Remove Shorts link in the sidebar navigation
  document.querySelectorAll('a[title="Shorts"]').forEach(link => {
    const container = link.closest('ytd-guide-entry-renderer');
    if (container) container.remove();
  });

  // Redirect if currently on a Shorts video page
  const ytdApp = document.querySelector('ytd-app');
  if (ytdApp?.hasAttribute('is-shorts-page')) {
    window.location.href = '/';
  }
}

// Initial run to remove Shorts on page load
const init = () => {
  browser.storage.local.get('isEnabled', (data) => {
    isEnabled = data.isEnabled !== false;
    if (isEnabled) {
      removeAllShorts();
      observer.observe(document.body, { childList: true, subtree: true });
    }
  });
};

// Listen for changes in the toggle state
browser.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && changes.isEnabled) {
    isEnabled = changes.isEnabled.newValue;
    if (isEnabled) {
      removeAllShorts();
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      observer.disconnect();
      // Note: This will not restore already removed elements on the current page.
      // A page refresh would be needed to see the Shorts again.
    }
  }
});

const observer = new MutationObserver(() => {
    if (isEnabled) {
      removeAllShorts();
    }
});

init();
