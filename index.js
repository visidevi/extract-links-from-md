const fs = require('fs');

let mdLinkEx = require('./lib/md-link-extractor.js');

let markdown = fs.readFileSync('./demo/README.md').toString();

let links = mdLinkEx.markdownLinkExtractor(markdown);

console.log(links);

