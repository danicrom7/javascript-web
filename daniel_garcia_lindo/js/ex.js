

class Formulario {
	constructor() {
		this.oEvento = {}
		this.oName = document.querySelector("#fnombre"),
			this.oApell1 = document.querySelector("#apell1"),
			this.oApell2 = document.querySelector("#apell2"),
			this.oMail = document.querySelector("#mail"),
			this.oCity = document.querySelector("#city"),
			this.oComent = document.querySelector("#coment"),
			this.aProg = document.querySelectorAll("[name = pregunta]")
		this.oCond = document.querySelector("#condiciones1"),
			this.oCond1 = document.querySelector("#condiciones2"),
			this.oOpciones = document.querySelector("#lenguaje"),
			this.oParrafo = document.querySelector("#parrafo1"), // referencia del párrafo donde escribir
			this.aSalida = []
		this.oName.focus();
	}
		getTextos() {
			this.aSalida = [
				{ etiqueta: "Nombre", valor: this.oName.value },
				{ etiqueta: "Apellido", valor: this.oApell1.value },
				{etiqueta: "segundo Apellido", valor: this.oApell2.value },
				{ etiqueta: "Dirección", valor: this.oMail.value }
				//{ etiqueta: "Ciudad", valor: this.oCity.value }

			]
		}; //Fin de la función getTextos 

		getRRadiobuttons(){ 				
			for (let i = 0; i < this.aProg.length; i++) {
				if (this.aProg[i].checked) {
					this.aSalida[this.aSalida.length] = {
						etiqueta: "programador", valor: this.aProg[i].value.toUpperCase()
					}
				}
			}
		}; //Fin de la función getRRadiobuttons

		getCheckbox() {
			if (this.oCond.checked) {
				this.aSalida[this.aSalida.length] = { etiqueta: "Condiciones leidas!", valor: "SI" }
			}
			else {
				this.aSalida[this.aSalida.length] = { etiqueta: "Condiciones leidas!", valor: "NO" };
			};
			if (this.oCond1.checked) {
				this.aSalida[this.aSalida.length] = { etiqueta: "Condiciones leidas 2!", valor: "SI" }
			}
			else {
				this.aSalida[this.aSalida.length] = { etiqueta: "Condiciones leidas 2!", valor: "NO" }
			};
		}; //Fin de la función getCheckbox

		getSelectOptions() {
			let oOpcion = this.oOpciones.options[this.oOpciones.selectedIndex];
			//var textoSeleccionado = oOpcion.text; // Segundo valor
			//var valorSeleccionado = oOpcion.value; // 2
			//this.aSalida[this.aSalida.length] = { etiqueta: "Nivel de JavaScript", valor: textoSeleccionado }
		}; //Fin de la función getSelectOptions


		recogeDatos(oE) {
			this.oEvento = oE;
			// Llamada a las funciones get de cada conjunto de controles
			this.getTextos();
			this.getRRadiobuttons();
			this.getCheckbox();
			this.getSelectOptions();
			//llamada a la función que procesara el array presentandolo en pantalla
			this.escribeDatos();
		} // Fin de la funcion recogeDatos

		escribeDatos() {
			//anula el comportamiento por defecto de submit
			//incluida la validacion de los requireds
			//que ya se ha realizado para poder llegar aqui
			this.oEvento.preventDefault();
			//ocultar formulario
			//document.querySelector("#form_1").className = "oculto";
			//mostrar bloque div para el resultado
			//document.querySelector("#resultado").className = "bloque";
			//incorporamos al parrafo cada línea del array		
			for (var i = 0; i < this.aSalida.length; i++) {
				this.oParrafo.innerHTML
					+= `<strong> ${this.aSalida[i].etiqueta} : </strong>
					${this.aSalida[i].valor}</br>
			`};
		} // Fin de la funcion escribeDatos
	} // Fin de la clase formulario


	document.addEventListener("DOMContentLoaded", function() {
		oFormulario = new Formulario
		document.querySelector("#btn1").addEventListener("click", oFormulario.recogeDatos.bind(oFormulario))
	}, false);
