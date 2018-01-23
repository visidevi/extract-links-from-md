#ExtractLinksFromMd
![linkin'](https://media.giphy.com/media/l1JoiMJdEp23pjnt6/giphy.gif)

<p align="center">
  <a href="https://badge.fury.io/js/sweetalert"><img src="https://badge.fury.io/js/sweetalert.svg" alt="npm version" height="18"></a>
  <a href="https://travis-ci.org/t4t5/sweetalert"><img src="https://travis-ci.org/t4t5/sweetalert.svg" alt="Build status" /><a>
  <a href="https://www.npmjs.com/package/sweetalert">
    <img src="https://img.shields.io/npm/dm/sweetalert.svg" />
  </a>
  <a href="https://github.com/t4t5/sweetalert/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/t4t5/sweetalert.svg" />
  </a>
</p>
***
***Esta libreria se basa en:***

**Implementar un módulo de Node.js que reciba un string (en formato Markdown) y
extraiga todos los links encontrados. La implementación debe ser una función que
recibe un string y devuelve un arreglo de objetos como se muestra en el este**
*ejemplo:*

```js
const extractLinksFromMd = require('extract-links-from-md');
const str = `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;

const links = extractLinksFromMd(str); 

console.log(links);
// [
//   { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//   { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//   { href: 'http://foo.com', text: 'foo' },
// ]
```