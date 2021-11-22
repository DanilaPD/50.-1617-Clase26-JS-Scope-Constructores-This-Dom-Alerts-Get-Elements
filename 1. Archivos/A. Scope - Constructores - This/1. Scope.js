//* https://wwww.w3schools.com/js/js_scope.asp

const funcioncita = () => {
  let hola = "Soy 'hola' desde DENTRO de la función.";
  return hola;
};

let hola = "Soy 'hola' desde FUERA de la función.";

// Esto no va a funcionar:
//* console.log(hola);

// Ahora si escribo la variable "let" desde fuera de la función y consoleo lo mismo, ahí sí va a arrancar:
console.log(hola);

console.log(funcioncita());

// Sino también podría haber hecho:
//* const funcioncita = () => {
//*    let hola = "Soy 'hola' desde DENTRO de la función."
//*    console.log(hola)
//* }

//* funcioncita();

//*
// Otro ejemplo:
function nombre() {
  // Está variable jamás es leída, por lo que me va a tirar error.
  const myName = "Yo soy Pam.";
}

// Esto va a correr, pero me va dar "undefined".
//* console.log(nombre("Pamina"))

// Acá me va tirar error porque me va a decir que "myName" no está definida.
//* console.log(myName)

// Este sí va a funcionar:
const nombre1 = () => {
  let myName = "Yo soy Dani.";
  return myName;
};

console.log(nombre1());
