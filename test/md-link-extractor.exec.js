const mark = require('../lib/md-link-extractor');

const { assert } = require('chai');

describe('markdownLinkExtractor()', () => {
  it('debería identificar el link "[Google](https://www.google.com)" y devolverlo en un array de objetos', () => {
    assert.equal(markdownLinkExtractor('[Google](https://www.google.com)'), '[\n {\n  "text": "Google",\n  "href": "https://www.google.com"\n }\n]');
  });
  it('debería identificar el link "[Google](http://www.google.com)" y devolverlo en un array de objetos', () => {
    assert.equal(markdownLinkExtractor('[Google](http://www.google.com)'), '[\n {\n  "text": "Google",\n  "href": "http://www.google.com"\n }\n]');
  });
  it('debería identificar el link "[dolore](https://en.wiktionary.org/wiki/dolore)" y devolverlo en un array de objetos', () => {
    assert.equal(markdownLinkExtractor('[dolore](https://en.wiktionary.org/wiki/dolore)'), '[\n {\n  "text": "dolore",\n  "href": "https://en.wiktionary.org/wiki/dolore"\n }\n]');
  });
  it('debería identificar el link "[ftp](ftp://192.168.0.100:2121" y devolverlo en un array de objetos)', () => {
    assert.equal(markdownLinkExtractor('[ftp](ftp://192.168.0.100:2121)'), '[\n {\n  "text": "ftp",\n  "href": "ftp://192.168.0.100:2121"\n }\n]');
  });
  it('debería identificar el link "[ftp](ftp://ftp.uma.es)" y devolverlo en un array de objetos)', () => {
    assert.equal(markdownLinkExtractor('[ftp](ftp://ftp.uma.es)'), '[\n {\n  "text": "ftp",\n  "href": "ftp://ftp.uma.es"\n }\n]');
  });
  it('debería identificar el link "[server](file://server.com)" y devolverlo en un array de objetos)', () => {
    assert.equal(markdownLinkExtractor('[server](file://server.com)'), '[\n {\n  "text": "server",\n  "href": "file://server.com"\n }\n]');
  });
});