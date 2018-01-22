const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');

let markdown = fs.readFileSync('README.md').toString();
console.log(markdown);

let links = markdownLinkExtractor(markdown);

links.forEach(function (link) {
  console.log(link);
});