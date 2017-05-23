class Formulario{
	constructor(pNombre,pCurso){

	// Creamos el "modelo" corespondiente a todos los elemetos existentes en el DOM

		 this.oDOM = {
			fNombre : document.querySelector("#fNombre"),
			btnBorrar :  document.querySelector("#btnBorrar"),
			spanNombre : document.querySelector("#nombre"),
			spanCurso : document.querySelector("#curso")
		}; // fin del objeto oDOM
	}
	controller () {

			// Valores por defencto que actualizan el DOM

			this.oDOM.fNombre.value = 'Pepe'
	        this.oDOM.spanNombre.innerHTML = this.oDOM.fNombre.value; 
	        this.oDOM.spanCurso.innerHTML = "Desarrollo Web Full-Stack";
			console.dir(this.oDOM);

			// Definicion de los manejadores de eventos
            //addEventListener hace lo mismo que el onClick.pero con mas funciones.

			this.oDOM.fNombre.addEventListener("keyup",this.actualizarVista.bind(this));
			this.oDOM.btnBorrar.addEventListener("click",this.actualizarVista.bind(this))
		}
     actualizarVista (oEvent) {
			
			if (oEvent.currentTarget.id == "btnBorrar") {
				this.oDOM.fNombre.value = ''
			}	
			this.oDOM.spanNombre.innerHTML = this.oDOM.fNombre.value; 
			console.log(this.oDOM.fNombre.value);

		} // Fin de la funcion actualizarVista
}
//new Formulario("Luis","Desarrollo Web full-stack").controller()
