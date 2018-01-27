const mark = require('../lib/md-link-extractor');

const { assert } = require('chai');

describe('markdownLinkExtractor()', () => {
  it('debería identificar "[Google] https://www.google.com" y devolverlo en un array de objetos', () => {
    assert.equal(markdownLinkExtractor('[Google](https://www.google.com)'), '[{"text":"Google","href":"https://www.google.com"}]');
  });
  it('debería identificar "[Google] https://www.google.com" y devolverlo en un array de objetos', () => {
    assert.equal(markdownLinkExtractor('[Google](http://www.google.com)'), '[{"text":"Google","href":"http://www.google.com"}]');
  });
  it('debería identificar "[dolore] (https://en.wiktionary.org/wiki/dolore)"  y devolverlo en un array de objetos', () => {
    assert.equal(markdownLinkExtractor('[dolore](https://en.wiktionary.org/wiki/dolore)'), '[{"text":"[dolore]","href":"https://en.wiktionary.org/wiki/dolore"}]');
  });
  it('debería identificar "[ftp]  ftp://192.168.0.100:2121"  y devolverlo en un array de objetos)', () => {
    assert.equal(markdownLinkExtractor('[ftp]( ftp://192.168.0.100:2121)'), '[{"text":"[ftp]","href":"ftp://192.168.0.100:2121"}]');
  });
  it('debería identificar "[ftp]  ftp://ftp.uma.es"  y devolverlo en un array de objetos)', () => {
    assert.equal(markdownLinkExtractor('[ftp](ftp://ftp.uma.es)'), '[{"text":"[ftp]","href":"ftp://ftp.uma.es"}]');
  });
  it('debería identificar "[server] file://server.com"  y devolverlo en un array de objetos)', () => {
    assert.equal(markdownLinkExtractor('[server](file://server.com)'), '[{"text":"[server]","href":"file://server.com"}]');
  });

});