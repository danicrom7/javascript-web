function main2() {	
			var aCurso = ["Front", "Back", "Sistemas"];
			var oLenguajes = {
				"Front": [ "HTML5", "CSS3", "Javascript"], 
				"Back": ["C++", "C#", "JAVA"],
				"Sistemas": ["Linux", "ISS", "Apache"] 
			};
			var sSelectedCurso;
			var sSelectedLenguaje;
			var domSelecLenguaje = document.querySelector("#lenguaje");
			var domSelecCurso = document.querySelector("#curso");
			var domBoton = document.querySelector('#btn1');
		

			domSelecCurso.addEventListener("change", cambioCurso);
			domSelecLenguaje.addEventListener("change", cambioLenguajes);
			

			domSelecLenguaje.disabled = true;
			
			cargarSelect(domSelecCurso, aCurso);


			function cambioLenguajes(oE) {
				var domSelect = oE.currentTarget;
				if (domSelect.childElementCount > oLenguajes[sSelectedCurso].length) {
					domSelect.removeChild(domSelect.children[0]);
				}
				var nSelect = domSelect.selectedIndex;
				var domOption = domSelect.options[nSelect]
				sSelectedLenguaje = domOption.text;
				domBoton.disabled = false;
			}

			function cambioCurso(oE) {
				var domSelect = oE.currentTarget;
				if (domSelect.childElementCount > aCurso.length) {
					domSelect.removeChild(domSelect.children[0]);
				}
				let nSelect = domSelect.selectedIndex;
				let domOption = domSelect.options[nSelect];
				sSelectedCurso = domOption.text;
				


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
		};


		if (document.addEventListener) {

			document.addEventListener("DOMContentLoaded", main2, false);
			

		} else {
			window.onload = main2;
		}