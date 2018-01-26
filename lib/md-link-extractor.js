// Objeto Link:
class Link {
  constructor(text, href) {
    this.text = text;
    this.href = href;
  }
}

// String en formato Markdown:
/* let markdown = `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`; */

// Función que extrae links desde el string en formato Markdown:

markdownLinkExtractor = function(markdown) { 

    'use strict';
     const re = /\[(.*?)\]\((.*?|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-]))\)/ig; //i = ignora mayusculas y minusculas  g = ejecuta una busqueda global , sucesibament
     //Expresion regular que comprueba el formato markDown de los links 



    let matches = re.exec(markdown);//Cambio Metodo .match a metodo .exec para poder sacar los corchetes
    //console.log(matches); Para entender el funcionamiento de exec https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp/exec
    let result = [];

   do {
       const one = new Link(matches[1], matches[2]); 
       result.push(one);
   } while ((matches = re.exec(markdown)) !== null);

    return JSON.stringify(result);
};


/*
  'use strict';

  let result = [];
  
  // Expresión regular que identifica la URL y el Texto Visible de un link:
  const re =  /(\[[(.*?)\]])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g;
  let matches = markdown.match(re);
  
   // Extraer links:
  while (matches !== '') {

    let one = new Link(matches[2], matches[3]);
    
    
    result.push(one);

  }

  // Retornar un array de objetos:
  return JSON.stringify(result);

}; */

module.exports.markdownLinkExtractor = markdownLinkExtractor;

