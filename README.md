# Hide YouTube Shorts

A lightweight Firefox and Chrome extension that removes YouTube Shorts from your browsing experience, helping you stay focused on regular video content.

## Features

- **Complete Shorts Removal**: Eliminates Shorts from homepage, sidebar, and dedicated Shorts pages
- **Real-time Detection**: Automatically removes Shorts as they load dynamically
- **Performance Optimized**: Debounced execution prevents excessive processing
- **Error Resilient**: Built-in error handling ensures stable operation
- **Minimal Footprint**: Lightweight code with no external dependencies

## Installation

### Manual Installation (Developer Mode)

1. Download or clone this repository
2. Open Firefox and navigate to `about:debugging`
3. Click "This Firefox" in the left sidebar
4. Click "Load Temporary Add-on"
5. Select the `manifest.json` file from the extension directory
6. The extension will be active immediately

### Firefox and Chrome Add-ons Store

*Coming soon - pending Mozilla review*

## How It Works

The extension uses content script injection to:

- Target specific YouTube Shorts elements using CSS selectors
- Remove Shorts shelves, reels, and navigation links
- Replace the Shorts page with a custom message
- Monitor DOM changes for dynamically loaded content

## Technical Details

- **Manifest Version**: 2
- **Permissions**: Active tabs on YouTube domains
- **Content Script**: Runs on all YouTube pages
- **Performance**: Debounced execution (100ms delay)

## Browser Compatibility

- Firefox
- Chrome

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

MIT License - see LICENSE file for details

## Author

**Jiru Gutema**  
Email: jirudagutema@gmail.com

## Disclaimer

This extension is not affiliated with YouTube or Google. Use at your own discretion.
