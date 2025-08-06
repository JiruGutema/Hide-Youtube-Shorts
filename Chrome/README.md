# Hide YouTube Shorts

A lightweight Firefox and Chrome extension that removes YouTube Shorts from your browsing experience, helping you stay focused on regular video content.

## Features

* **Complete Shorts Removal**: Eliminates Shorts from homepage, sidebar, and dedicated Shorts pages
* **Real-time Detection**: Automatically removes Shorts as they load dynamically
* **Performance Optimized**: Debounced execution prevents excessive processing
* **Error Resilient**: Built-in error handling ensures stable operation
* **Minimal Footprint**: Lightweight code with no external dependencies

## Installation

You can install the extension directly from the Mozilla Add-ons store:

[Hide YouTube Shorts on Mozilla Add-ons](https://addons.mozilla.org/…/hide-youtube-short)

## How It Works

The extension uses content script injection to:

* Target specific YouTube Shorts elements using CSS selectors
* Remove Shorts shelves, reels, and navigation links
* Replace the Shorts page with a custom message
* Monitor DOM changes for dynamically loaded content

## Technical Details

* **Manifest Version**: 2
* **Permissions**: Active tabs on YouTube domains
* **Content Script**: Runs on all YouTube pages
* **Performance**: Debounced execution (100ms delay)

## Browser Compatibility

* Firefox
* Chrome

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

MIT License - see LICENSE file for details

## Author

**Jiru Gutema**
Email: [jirudagutema@gmail.com](mailto:jirudagutema@gmail.com)

## Disclaimer

This extension is not affiliated with YouTube or Google. Use at your own discretion.

## Why This Extension?

There is no way to bypass this rule of this extension. There are alternative extensions but they do not remove all Shorts and can be bypassed dynamically, for example using dynamic routes like `https://www.youtube.com/shorts/` or `https://www.youtube.com/shorts/abc123`, and redirecting `youtube/shorts`to `youtube/`. They also do not remove Shorts from the homepage, sidebar, and other places. This extension is designed to remove all of them.

