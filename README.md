# hamsterfall-share-page

This repository provides a simple solution to dynamically share a game score and image on Facebook using the Open Graph protocol via a redirect page hosted on GitHub Pages.

### How it works
When a user finishes playing a game, the game generates a score and screenshot. The redirect page hosted in this repository uses JavaScript to dynamically update Open Graph meta tags (`og:title`, `og:description`, and `og:image`) based on query parameters passed in the URL.

Facebook's share dialog will then scrape the meta tags and display the dynamically updated content when shared.
