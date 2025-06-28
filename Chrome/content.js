const SHORTS_SELECTORS = [
  'ytd-rich-shelf-renderer[is-shorts]',
  'ytd-reel-shelf-renderer',
  '#shorts-container'
];

function removeAllShorts() {
  // Remove main Shorts shelves
  SHORTS_SELECTORS.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.remove());
  });

  // Remove Shorts link in sidebar
  document.querySelectorAll('a[title="Shorts"]').forEach(link => {
    const container = link.closest('ytd-guide-entry-renderer');
    if (container) container.remove();
  });

  // Redirect away from Shorts video page
  const ytdApp = document.querySelector('ytd-app');
  if (ytdApp?.hasAttribute('is-shorts-page')) {
    window.location.href = '/';
  }
}

// Initial run
removeAllShorts();

// Observe DOM changes and remove new Shorts
const observer = new MutationObserver(removeAllShorts);
observer.observe(document.body, { childList: true, subtree: true });
