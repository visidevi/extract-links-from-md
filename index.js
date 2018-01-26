const fs = require('fs');
<<<<<<< HEAD

const mdLinkEx = require('./lib/md-link-extractor.js');
=======
>>>>>>> upstream/dev

const linkEx = require('./lib/md-link-extractor.js');

const md = fs.readFileSync('./demo/README.md').toString();

let links = linkEx.markdownLinkExtractor(md);

console.log(links);

