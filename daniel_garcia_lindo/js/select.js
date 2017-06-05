function main2() {	//envio de evento a la funcion manejadora.
			var aCurso = ["Front", "Back", "Sistemas"];
			var oLenguajes = {
				"Front": [ "HTML5", "CSS3", "Javascript"], 
				"Back": ["C++", "C#", "JAVA"],
				"Sistemas": ["Linux", "ISS", "Apache"] 
			};
			var sSelectedCurso;
			var sSelectedLenguaje;
			// nodos del DOM
			var domSelecLenguaje = document.querySelector("#lenguaje");
			var domSelecCurso = document.querySelector("#curso");
			var domBoton = document.querySelector('#btn1');
			//manejadores
			domSelecCurso.addEventListener("change", cambioGenero);
			domSelecLenguaje.addEventListener("change", cambioAutores);
			// configuración inicial
			domSelecLenguaje.disabled = true;
			//domBoton.disabled = true;
			cargarSelect(domSelecCurso, aCurso);


			function cambioAutores(oE) {
				var domSelect = oE.currentTarget;
				if (domSelect.childElementCount > oLenguajes[sSelectedCurso].length) {
					domSelect.removeChild(domSelect.children[0]);
				}
				var nSelect = domSelect.selectedIndex;
				var domOption = domSelect.options[nSelect]
				sSelectedLenguaje = domOption.text;
				domBoton.disabled = false;
			}

			function cambioGenero(oE) {
				var domSelect = oE.currentTarget;
				if (domSelect.childElementCount > aCurso.length) {
					domSelect.removeChild(domSelect.children[0]);
				}
				let nSelect = domSelect.selectedIndex;
				let domOption = domSelect.options[nSelect];
				sSelectedCurso = domOption.text;
				// las tres lineas en una 
				// sSelectedGenero domSelect.options[domSelect.selectedIndex].text;

				cargarSelect(domSelecLenguaje, oLenguajes[sSelectedCurso]);
				domSelecLenguaje.disabled = false;
			}

			function cargarSelect(oDom, aDatos) {
				oDom.innerHTML = "<option> </option>";
				domBoton.disabled = true;
				for (var i = 0; i < aDatos.length; i++) {
					oDom.innerHTML += "<option>" + aDatos[i] + "</option>";
				}
			}
		};//fin del onload


		if (document.addEventListener) {
			document.addEventListener("DOMContentLoaded", main2, false);
			//metodo de DOM nivel 2  que indica al agente de usuario que permanezca atento:
			// evento: en este caso la carga completa de la página
			// función a lanzar: en este caso iniciaBoton
			// orden del flujo de eventos: false salta la fase de captura
		} else {
			window.onload = main2;
		}