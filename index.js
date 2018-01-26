const fs = require('fs');

const linkEx = require('./lib/md-link-extractor.js');

const md = fs.readFileSync('./demo/README.md').toString();

let links = linkEx.markdownLinkExtractor(md);

console.log(links);

