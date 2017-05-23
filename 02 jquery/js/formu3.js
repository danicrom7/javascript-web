class Formulario{
	constructor(pNombre,pCurso){

	// Creamos el "modelo" corespondiente a todos los elemetos existentes en el DOM

		 this.oDOM = {
			fNombre : $("#fNombre"),
			btnBorrar :  $("#btnBorrar"),
			spanNombre : $("#nombre"),
			spanCurso : $("#curso")
		}; // fin del objeto oDOM
	}
	controller () {

			// Valores por defencto que actualizan el DOM

			this.oDOM.fNombre[0].value = 'Pepe'
	        this.oDOM.spanNombre.innerHTML = this.oDOM.fNombre.value; 
	        this.oDOM.spanCurso.innerHTML = "Desarrollo Web Full-Stack";
			console.dir(this.oDOM);

			// Definicion de los manejadores de eventos
            //addEventListener hace lo mismo que el onClick.pero con mas funciones.

			this.oDOM.fNombre.on("keyup",this.actualizarVista.bind(this));
			this.oDOM.btnBorrar.on("click",this.actualizarVista.bind(this))
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
