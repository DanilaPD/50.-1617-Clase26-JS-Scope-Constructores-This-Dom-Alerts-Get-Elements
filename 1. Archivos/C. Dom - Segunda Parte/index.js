//! El ALERT nos corta la ejecución del sitio hasta que le demos aceptar al cartelito que nos aparece. No carga el HTML hasta que no saquemos dicho cartelito:

alert(this);
// [Object Window]

alert(document);
// [Object HTMLDocument]

alert(document.baseURI);
// http://127.0.0.1:5500/1.%20Archivos/C.%20Dom%20-%20Segunda%20Parte/index.html

alert(document.children);
// [Object HTMLCollection]

alert(document.contentType);
// text/html

alert(document.title);
// ¡Hola, DOM!

alert("Uf, cuántos alertas, che.");

console.log("¡Hola!");
// Esto nos lo pone en la CONSOLA del navegador, en la pestaña donde ejecuta el HTML y hasta nos dice qué línea de qué archivo es la que lo generó.
