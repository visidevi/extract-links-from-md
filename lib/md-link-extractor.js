// Objeto Link:
class Link {
  constructor(text, href) {
    this.text = text;
    this.href = href;
  }
}

// Función que extrae links desde el string en formato Markdown:

markdownLinkExtractor = function(markdown) {
  'use strict';
  const re = /\[(.*?)\]\((.*?|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-]))\)/ig; // ignora mayusculas y minusculas  g = ejecuta una busqueda global , sucesibament
  // Expresion regular que comprueba el formato markdown de los links 
  let matches = re.exec(markdown); // Cambio método .match a metodo .exec para poder sacar los corchetes
  // console.log(matches); Para entender el funcionamiento de .exec https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp/exec
  let result = [];

  do {
    const one = new Link(matches[1], matches[2]); 
    result.push(one);
  } while ((matches = re.exec(markdown)) !== null);
  return JSON.stringify(result);
};

/*
  'use strict';

<<<<<<< HEAD
// Función que extrae links desde el string en formato Markdown:
markdownLinkExtractor = function(markdown) {
  'use strict';

  let result = [];
  
  // Expresión regular que identifica la URL y el Texto Visible de un link:
  const re = /(\[(.*?)\])|(https?|ftp|file):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;

  // Extraer links:
=======
  let result = [];
  
  // Expresión regular que identifica la URL y el Texto Visible de un link:
  const re =  /(\[[(.*?)\]])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g;
>>>>>>> upstream/dev
  let matches = markdown.match(re);
  
   // Extraer links:
  while (matches !== '') {

<<<<<<< HEAD
  for (let i = 0; i < matches.length; i++) {
    let one = new Link(matches[i], matches[i + 1]);
    i++;
=======
    let one = new Link(matches[2], matches[3]);
    
    
>>>>>>> upstream/dev
    result.push(one);

  }

  // Retornar un array de objetos:
  return JSON.stringify(result);
<<<<<<< HEAD
};
module.exports.markdownLinkExtractor = markdownLinkExtractor;
=======

}; */

module.exports.markdownLinkExtractor = markdownLinkExtractor;

>>>>>>> upstream/dev
