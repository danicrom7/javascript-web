function info() {
				 texto = document.getElementById("resultado")
				 texto.innerHTML = "<h3>Usted recibirá información sobre los siguientes temas:</h3>"
				 if (document.suscripcion.deportes.checked == true) {
				 		deportes = "<h4>" + document.suscripcion.deportes.value; + "</h4>";
						}
				 else { deportes = "" }	
				 if (document.suscripcion.noticias.checked == true) {
				 		noticias = "<h4>" + document.suscripcion.noticias.value; + "</h4>";
						}
				 else { noticias = "" }	
				 if (document.suscripcion.economia.checked == true) {
				 		economia = "<h4>" + document.suscripcion.economia.value; + "</h4>";
						}	
				 else { economia = "" }	
				 if (document.suscripcion.cultura.checked == true) {
				 		cultura = "<h4>" + document.suscripcion.cultura.value; + "</h4>";
						}
				 else { cultura = "" }	
				 if (document.suscripcion.medioambiente.checked == true) {
				 		medioambiente = "<h4>" + document.suscripcion.medioambiente.value; + "</h4>";
						}		 		
				 else { medioambiente = "" }	
				 texto.innerHTML += deportes + noticias + economia + cultura + medioambiente
                }
                info();
