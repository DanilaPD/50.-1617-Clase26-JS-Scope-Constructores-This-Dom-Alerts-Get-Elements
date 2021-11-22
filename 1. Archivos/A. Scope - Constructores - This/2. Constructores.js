//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/constructor

// El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.

//! Este es un molde de "Perro" vacío. Sabemos qué debe tener, pero no tiene todavía un valor. Le pusimos los KEYS que queremos que tenga, pero no los VALORES.

//! Siempre que sea CONSTRUCTOR, arrancar con mayúscula.
function Perro(orejas, patas, cola, color, darPata, correr) {
  this.orejas = orejas;
  // Este THIS es del objeto que vamos a crear. El "orejas" solo es el valor que le vamos a pasar.
  this.patas = patas;
  this.cola = cola;
  this.color = color;
  this.darPata = darPata;
  this.correr = correr;
}

// "New" crea una instancia nueva. Un objeto del tipo que le esté pasando.
// Sin el "new", me da "undefined" dos veces.

//! Siempre que sea una INSTANCIA (en este caso, pochi), arrancar con minúscula.
const pochi = new Perro(2, 4, 1, "negra y naranja", true, false);
console.log(pochi, typeof pochi);
// Creó un nuevo objeto llamado "pochi", construido con el molde de "Perro".

const pipi = new Perro(2, 4, 1, "negrita", false, true);
console.log(pipi);

// Puedo agregarle algo como haría en un objeto:
pipi.robarZapatos = true;
console.log(pipi);
