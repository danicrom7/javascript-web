window.onload = function (){


// // Crear nodo de tipo Element
// var oParrafo = document.createElement("p");
// // Crear nodo de tipo Text
// var oContenido = document.createTextNode("Hola Mundo!");
// // AÃ±adir el nodo Text como hijo del nodo Element
// oParrafo.appendChild(oContenido);
// // AÃ±adir el nodo Element como hijo de la pagina
// document.querySelectorAll("section")[1].appendChild(oParrafo);

document.querySelectorAll("section")[1].innerHTML += "<p>Hola Mundo!</p>"

}


