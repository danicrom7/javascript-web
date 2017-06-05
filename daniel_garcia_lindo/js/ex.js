class Formulario {

    constructor () {
        this.oDatos = {"Nombre": "",
                    "Apellido1": "",
					"Apellido2": "",
                    "Correo": "",
                    "Password": "",
                    "Password2": "",
                    "Curso" : "",
                    "Lenguaje" : "",
					"Fecha" : "",
				"Actividades1" : "",
				"Actividades2" : "",	
				"Actividades3" : "",	
				"Actividades4" : "",	
				"Actividades5" : "",	
				"Actividades6" : "",	
				"Actividades7" : "",	
				"Actividades8" : ""			
            };
		
	

    this.oParrafo = document.querySelector("#listaDatos");
     // referencia del párrafo donde escribir
	       this.oBtnEnviar = document.querySelector("#btn1")
        this.oForm = document.querySelector("#form_1")

        this.oBtnEnviar.addEventListener("click",
            this.recogeDatos.bind(this));

        this.oForm.addEventListener("submit", 
            this.simularEnviar.bind(this));

    }
	

    simularEnviar (oE) {
        alert("Formulario enviado correctamente");
       //problemas
        oE.preventDefault();
       
        this.escribeDatos();
    }

    recogeDatos (oE) {
        this.oDatos.Nombre = document.querySelector("#fnombre").value;
        this.oDatos.Apellido1 = document.querySelector("#apell1").value;
		this.oDatos.Apellido2 = document.querySelector("#apell2").value;
        this.oDatos.Correo = document.querySelector("#mail").value;        
        this.oDatos.Password = document.querySelector("#pass").value;
        this.oDatos.Password2 = document.querySelector("#rpass").value;
		this.oDatos.Curso = document.querySelector("#curso").value;
        this.oDatos.Lenguaje = document.querySelector("#lenguaje").value;
		this.oDatos.Fecha = document.querySelector("#ffecha").value;
		this.oDatos.Actividades1 = document.querySelector("#actividad1").value;
		this.oDatos.Actividades2 = document.querySelector("#actividad2").value;
		this.oDatos.Actividades3 = document.querySelector("#actividad").value;
		this.oDatos.Actividades4 = document.querySelector("#actividad").value;
		this.oDatos.Actividades5 = document.querySelector("#actividad").value;
		this.oDatos.Actividades6 = document.querySelector("#actividad").value;
		this.oDatos.Actividades7 = document.querySelector("#actividad").value;
		this.oDatos.Actividades8 = document.querySelector("#actividad").value;
        
    } //Fin del método recogeDatos

	
    escribeDatos () {
        //ocultar formulario
        document.querySelector("#form_1").classList.toggle("oculto")
        //mostrar bloque div para el resultado
        document.querySelector("#resultado").classList.toggle("oculto");
        //incorporamos a la lista cada elemento del objeto		
        for (var i in this.oDatos) {
            this.oParrafo.innerHTML += "<li>" + i + ": <strong>" +
                this.oDatos[i] + "</strong></li>";
        };
    } //Fin del método escribedatos	

} // Fin de la clase Formulario