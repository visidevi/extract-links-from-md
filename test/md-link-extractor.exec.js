
const mark = require('../lib/md-link-extractor').default;
const { assert } = require('chai');


describe('markdownLinkExtractor()', () => {
  it('debería identificar "[Google] https://www.google.com" y devolverlo en un array de objetos', () => {
    assert.equal(markdownLinkExtractor('[Google](https://www.google.com)'), '[{"text":"Google","href":"https://www.google.com"}]');
  });
  it('debería identificar "[Google] https://www.google.com" y devolverlo en un array de objetos', () => {
    assert.equal(markdownLinkExtractor('[Google](http://www.google.com)'), '[{"text":"Google","href":"http://www.google.com"}]');
  });
});