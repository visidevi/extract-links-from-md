const { assert } = require('chai');
const markdownLinkExtractor = require('./lib/markdownLinkExtractor');

describe('markdownLinkExtractor()', () => {

  it('debería identificar "[Google] http://www.google.com" y devolverlo en un array de objetos', () => {
    assert.equal(markdownLinkExtractor('[Google] http://www.google.com'), "[{text: '[Google]', href: 'http://www.google.com'}]");
  });

  it('debería identificar "[Google] https://www.google.com" y devolverlo en un array de objetos', () => {
    assert.equal(markdownLinkExtractor('[Google] https://www.google.com'), "[{text: '[Google]', href: 'https://www.google.com'}]");
  });
});