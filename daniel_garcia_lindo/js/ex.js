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
                    "Actividades que podras hacer" : "Música,Viajar,Deporte,Fotografia,Leer,Videojuegos,Gastronomia"
						
            };
            this.aActividades = [""]
	

    this.oParrafo = document.querySelector("#listaDatos");
     
	       this.oBtnEnviar = document.querySelector("#btn1")
        this.oForm = document.querySelector("#form_1")

        this.oBtnEnviar.addEventListener("click",
            this.recogeDatos.bind(this));

        this.oForm.addEventListener("submit", 
            this.simularEnviar.bind(this));

    };
	

    simularEnviar (oE) {
        alert("Formulario enviado correctamente");
       //problemas
        oE.preventDefault();
       
        this.escribeDatos();
    };

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
		this.aActividades = document.querySelector("#actividad1") 
		this.aActividades = document.querySelector("#actividad2")  
        this.aActividades =document.querySelector("#actividad3") 
        this.aActividades= document.querySelector("#actividad4")
        this.aActividades = document.querySelector("#actividad5") 
        this.aActividades = document.querySelector("#actividad6") 
        this.aActividades = document.querySelector("#actividad7") 
        this.aActividades = document.querySelector("#actividad8") 
        
    };

    

	
    escribeDatos () {
        
        document.querySelector("#form_1").classList.toggle("oculto")
        

        document.querySelector("#resultado").classList.toggle("oculto");


        for (var i in this.oDatos) {
            this.oParrafo.innerHTML += "<li>" + i + ": <strong>" +
                this.oDatos[i] + "</strong></li>";
        };
    };

};