const SHORTS_SELECTORS = [
  'ytd-rich-shelf-renderer[is-shorts]',
  'ytd-reel-shelf-renderer',
  '#shorts-container'
];

function removeAllShorts() {
  // Remove shorts shelves and containers
  SHORTS_SELECTORS.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.remove());
  });

  // Remove sidebar Shorts entry
  document.querySelectorAll('a[title="Shorts"]').forEach(link => {
    const container = link.closest('ytd-guide-entry-renderer');
    if (container) container.remove();
  });

  // Redirect if on a Shorts video page
  const ytdApp = document.querySelector('ytd-app');
  if (ytdApp?.hasAttribute('is-shorts-page')) {
    window.location.href = '/'; // Or a custom redirect URL
  }
}

// Run initially
removeAllShorts();

// Observe and react to DOM changes
const observer = new MutationObserver(removeAllShorts);
observer.observe(document.body, { childList: true, subtree: true });
