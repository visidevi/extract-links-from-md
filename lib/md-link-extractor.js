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
     const re = /!?\[(.*)\]\((.*?)\)/gi;  

    let matches = re.exec(markdown); // Cambio Método .match a método .exec() para poder sacar los corchetes
    let result = [];
    let text = [];
    let Href = [];

  //console.log(matches)
    do {
        let a = matches[1];
        text.push(a);
    } while ((matches = re.exec(markdown)) !== null);
   //return JSON.stringify(text);
  

    const reHref = /(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
    let href = markdown.match(reHref);
    //console.log(href);

    //console.log(text)

    for (let i = 0; i < text.length; i++) {
      const one = new Link(text[i],href[i]);
      result.push(one);
    }
    return JSON.stringify(result);
 
    /*do{

    for ( let i = 0; i < text.length; i++){}

    for ( let  j = 0; j < href.length; j++ ){}
      
      const one = new Link(text[i],href[j])
      result.push(one);

       return JSON.stringify(result); */

  };


   /*let text = [];

    const reText = /\[(.*)\]\((.*?)\)/gi; 
    const re = /(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
   
    let matchText = reText.exec(markdown);
    let matches = markdown.match(re);

  //console.log(matchText);
   //console.log(matches);


 do {
        let a = matchText[1];
        
      text.push(a);
        
  } while ((matchText = re.exec(markdown)) !== null);
  return (text);
/*


   /*  do {
        matches.forEach(function(e) {
        const one = new Link(matchText[1],(e));
      result.push(one);
        
      });
   
  } while ((matchText = re.exec(markdown)) !== null);
  return JSON.stringify(result);

  

console.log(result);
  
    /* do {
        text.push(matchText[[1]]); 
      
    
    } while ((matches = re.exec(markdown)) !== null);

  console.log(text);*/

  // Retornar un array de objetos:
 // return JSON.stringify(result);
   // result.push(one); 


module.exports.markdownLinkExtractor = markdownLinkExtractor;
