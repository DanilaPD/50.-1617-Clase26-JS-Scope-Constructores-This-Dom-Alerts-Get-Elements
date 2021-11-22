//* El THIS de acá es el OBJETO GLOBAL. No es igual acá que en el browser/navegador.

function cosas() {
  // En la consola, en Node, esto se llama global.

  //! Si paso este "console.log" en la CONSOLA del NAVEGADOR, obtengo el OBJETO WINDOW.
  console.log(this);
}

cosas();
