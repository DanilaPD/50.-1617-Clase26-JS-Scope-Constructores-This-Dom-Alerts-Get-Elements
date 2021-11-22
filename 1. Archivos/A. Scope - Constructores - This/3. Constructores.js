//* Hay CONSTRUCTORES de todo tipo, aunque, por lo general, los vamos a usar únicamente para OBJETOS y DATE.

/*
new String() // A new String object

new Number() // A new Number object

new Boolean() // A new Boolean object

new Object() // A new Object object

new Array() // A new Array object

new RegExp() // A new RegExp object

new Function() // A new Function object

new Date() // A new Date object
*/

//! Poder podemos, pero solo usemos CONSTRUCTORES para OBJETOS y DATES nomás.

const hoy = new Date();
console.log(hoy);

//! Don´t do this:
const nombre = new String("¨Dani");
console.log(nombre);
