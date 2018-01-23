let links = [];
class Link {
			constructor(text,href) {
				
				this.text = text;
				this.href = href;
			};
		};  

  function extractLinksFromMd() {

	let markdown = document.getElementById('txtInput').value;


	document.getElementById("resultado").innerHTML= markdown; 
	console.log(markdown);

	const re = /(\[(.*?)\])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
	let matches = markdown.match(re);
	console.log(matches);



	for ( i = 0; i <matches.length; i++){

		let one = new Link(matches[i],matches[i+1])
		i++
	    links.push(one);

		}
		console.log(JSON.stringify(links));
		document.getElementById("resultado").innerHTML= JSON.stringify(links);
		       
	 };


       
      
    
/*    




const re = /(\[(.*?)\])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
let matches = markdown.match(re);
console.log(matches);

let links = [];

class Link {
	constructor(text,href) {
		
		this.text = text;
		this.href = href;
	}
}


  function e(){

   	for ( i = 0; i <matches.length; i++){



	let one = new Link(matches[i],matches[i+1])
	i++
    links.push(one);

	}
	console.log(JSON.stringify(links));
       
    }; */





   
/*
const reTxt = /\[(.*?)\]/gi;
let linkText = markdown.match(reTxt);

const urlRegEx = /(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
let url = markdown.match(urlRegEx);

console.log(url);
console.log(linkText); */