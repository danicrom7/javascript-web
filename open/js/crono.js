

  		// The .bind method from Prototype.js 
  		// Se encorpora el método bind, en caso de que no esté implementado
		if (!Function.prototype.bind) { // check if native implementation available
		  Function.prototype.bind = function (){ 
		  	'use strict';
		    var fn = this, args = Array.prototype.slice.call(arguments),
		        object = args.shift(); 
		    return function(){ 
		      return fn.apply(object, 
		        args.concat(Array.prototype.slice.call(arguments))); 
		    }; 
		  };
		}

		//***************************************************************
		// Se crea la "CLASE" Crono
		//***************************************************************

		// Definición de la Función Constructora de la Pseudoclase Crono

		'use strict'; 
		class Crono {
		
			constructor (posicion) {
				this.id = 0;
				this.posicion = posicion;
			}	
			// Se añade el método mostrar al prototipo 
			mostrar ()  { 
				var oCrono = document.getElementById(this.posicion),
					timeCrono = +oCrono.innerHTML + 0.1;
				oCrono.innerHTML = timeCrono.toFixed(1); // Convierte el número a string con 1 decimal
			};
			
			arrancar () { this.id = setInterval(this.mostrar.bind(this), 100); };
			
			parar ()  { clearInterval(this.id);  this.id = undefined; };

			limpiarCrono () {
				document.getElementById(this.posicion).innerHTML = "0.0";
			};

			cambiarCrono () {
				if (!this.id) {this.arrancar();}
				else {this.parar();}			
			};
		} // Fin de la clase crono

		//**************************************************************
		// Clase main del script
	  	class App {
			constructor () {

		    // Se creean dos objetos de la "clase" Crono,
		    // correspondientes a los elementos definidos en HTML

			this.oCrono1 = new Crono ("crono1"),
			this.oCrono2 = new Crono ("crono2");

			// Se definen como manejadores de los eventos
			// los métodos de los correspondientes objetos 
			// en lugar de una única función creada al margen de los objetos

	 		document.getElementById("btn_cambiar_1").onclick = function () {
				this.oCrono1.cambiarCrono()};
			document.getElementById("btn_inicializar_1").onclick = function () {
				this.oCrono1.limpiarCrono()};

	 		document.getElementById("btn_cambiar_2").onclick = function () {
				 this.oCrono2.cambiarCrono()};
			document.getElementById("btn_inicializar_2").onclick = function () {
				this.oCrono2.limpiarCrono()};

			} // Fin del constructor
		} //Fin de la clase  main()

	  	document.addEventListener("DOMContentLoaded", function() {
			new App()}, false);	
		// metodo de DOM nivel 2  que indica al agente de usuario que permanezca atento:
		// evento: en este caso la carga completa de la página
		// función a lanzar: en este caso main
		// orden del flujo de eventos: false salta la fase de captura
		// el equivalente del DOM nivel 1 sería
		// window.onload = main

  	