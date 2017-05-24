var nombre

function mensaje(){

    alert("han transcurrido 3 segundos desde que me programaron")
};

function pideDatos(){
   nombre= prompt("Dime tu nombre")
  
}

function escribe(){
console.log("El nombre es : " + nombre)
}
let id = setTimeout(function(){
    pideDatos();
    escribe();
}
, 3000)

//para hacer un caalbacjk

// var nombre

// function muestraMensaje() {
// 	alert("Han transcurrido 3 segundos desde que me 	programaron");

// }

// function pideDatos(pFuncion) {
//     nombre = prompt("Dime tu nombre")
//     pFuncion(nombre);
// }
// function escribe () {
//     console.log("El nombre es : " + pnombre)
// }


// let id = window.setTimeout(function() {
//     pideDatos(escribe);
// }, 3000)
