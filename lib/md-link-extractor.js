// Objeto Link:
class Link {
  constructor(text, href) {
    this.text = text;
    this.href = href;
  }
}

// Función que extrae links desde el string en formato Markdown:

<<<<<<< HEAD
markdownLinkExtractor = (markdown) => {
  
  'use strict';
  // Expresión regular que comprueba el formato markdown de los links:
  const re = /!?\[(.*)\]\((.*?)\)/gi;  

  let matches = re.exec(markdown); // Cambio Método .match a método .exec() para poder sacar los corchetes
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

