
//Estructura de datos credos atravez de dato y valor 
const car = new Map();
car .set('brand', 'toyota');
car.set('name', 'golf');
car.set('color', 'white');
console.log(car.get('brand'));
console.log(car.has('brand'));
console.log(car);
car.delete('brand');
console.log(car.has('brand'));

//Metodo Sets o conjunto
//Es una coleccion donde almacenamos conjuto de valores
//Cada valor o elemeto que esta dentro de esto es un vañor unico

const dogs = new Set();
//Metodos de los conjuntos
//Cada valor va a ser unico, no repite
//no duplica
dogs.add('chihuahua');
dogs.add('golden');
dogs.add('bull-Terrier');
 
console.log(dogs.has('golden'));
console.log(dogs.size);
console.log(dogs);

//Destructuring assignment
const animal = new Array('gato', 'perro', 'raton');
//asignacion sin destructuring
/*let perro = animal[0];
let gato = animal[2];
let raton = animal[1];*/

const [perro, gato, raton] = animal
//Declarar variables de una manera mas facil

console.log(perro,gato,raton);

/* Variables de bloque
//Las variables de bloque se declaran utilizando la palabra LET
ESTAS VARIABLES SOLO EXSITIRAN EN ELO BLOQUE DONDE FUERON DECLARADASD
*/

function suma(){
	let resultado  = 5 +5;
	console.log(`el resultado de la suma es ${resultado}`);
}
suma();
for (let i = 0; i < 3; i++){
	console.log(`el valor de i es ${i}`);
	
}
//For
/*ciclo es una sentencia que nos ayuda a crear repetidamente una 
sentencia */

//for(inicializacion; condicion; incremento){

for (let edad = 0; edad < 3 ; edad++) { //<-- antiguoo
	console.log(`ls edad es de ${edad}`);
}
 /*for of 
 indicado para recorrer arrays mapas o conjuntos*/

 const list = [8, 3, 11, 9, 6];


//Recorrer el indice de cada palabra

 for (var char of 'Hello') { //LOOP
    if(char = 'e'){
    	console.log(`Hello tiene ${char} como caracter`)
    };
};


list.forEach(function(value, i) {
  console.log(value +'forEach');//en este caso i indica el indice o posicion que ocupa x numero, 
});

for ( i in car){
	console.log(car[i])
	//for-in fue exclusivamente para iterar sobre las claves enumerables de un objeto, y no es para iterar sobre las matrices.
}//estoo solo sirve para objetos
//for of es para colecciones como un HTMLCollection y for in es para elementos iterables de un objeto﻿

//for-of es para iterar sobre arreglos y for-ines para iterar sobre las teclas de los objetos.


let SumElements =  (... arr ) => { //estos 3 puntos convierte la lista de elementos (es decir) los parámetros en una matriz.
 console.log(arr);  // [10, 20, 40, 60, 90] 
let  sum = 0 ; 
 for ( let elemento of arr )  { 
  sum += elemento ; 
 } 
 return (sum);  // 220. 
} 
console.log(SumElements(10, 20, 40, 60, 90)); // Tenga en cuenta que no estamos pasando matriz aquí. En cambio, estamos pasando los elementos como argumentos
/*let  SumElements  =  ( arr )  =>  { 
 console . log ( arr );  // [10, 20, 40, 60, 90] 
 let  sum  =  0 ; 
 para  ( deja el  elemento  de  arr )  { 
  suma  + =  elemento ; 
 } 
 consola . log ( suma );  // 220. 
} 
SumElements ([ 10 ,  20 ,  40 ,  60 ,  90 ]); */ //aqui no se tiene que declarar el array
console.log(Math.max( 10, 20, 60, 100, 50, 200));  // devuelve 200.
//Math.max es un método simple que devuelve el elemento máximo de la lista dada. No acepta una matriz