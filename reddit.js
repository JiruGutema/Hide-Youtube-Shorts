
function removeRedditAds() {
  // Remove Reddit dynamic ad containers
  document.querySelectorAll('shreddit-dynamic-ad-link').forEach(el => el.remove());
  // Remove <shreddit-ad-post> elements
  document.querySelectorAll('shreddit-ad-post').forEach(el => el.remove());
}
removeQouraAds = () => {
  // q-box dom_annotate_multifeed_bundle_AdBundle qu-borderAll qu-borderColor--raised qu-boxShadow--small qu-mb--small qu-bg--raised
  document.querySelectorAll('q-box[dom_annotate_multifeed_bundle_AdBundle]').forEach(el => el.remove());
};

