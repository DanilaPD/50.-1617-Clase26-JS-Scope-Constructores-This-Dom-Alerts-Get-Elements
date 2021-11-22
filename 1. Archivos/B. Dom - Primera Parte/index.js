//* Lo de agarrar elementos por ID/CLASS/ETC., lo hacemos arriba de todo. Seamos ordenados y consistentes.

// Capturar por ID:
const title = document.getElementById("title");

// Capturar por CLASS:
const cajita = document.getElementsByClassName("cajitas");

// Capturar por ETIQUETA:
const acheTres = document.getElementsByTagName("h3");

//*

// Cambiar el contenido:
//* https://www.w3schools.com/Jsref/prop_html_innerhtml.asp
title.innerHTML = "¡Hola desde JS!";

// Esto no va a andar:
//* cajita.innerHTML = "Somos los divs.";
// Lo que tenemos es una lista de nodos (básicamente es un "array").

//! Podemos acceder a uno de los elementos por posición:
cajita[0].innerHTML = "Soy el primer div.";
cajita[1].innerHTML = Date();
cajita[2].style.color = "blue";

//! Podemos acceder al "array", recorriendo con FOR:
for (let i = 0; i < acheTres.length; i++) {
  acheTres[i].style.border = "3px dotted red";
  acheTres[i].style.width = "40%";
}

//* Escribimos con camelCase:
acheTres[2].style.textAlign = "center";
