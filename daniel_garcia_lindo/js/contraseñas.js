function main() {	

			    var domForm = document.querySelector("#form_1");
			    var domPass1 = document.querySelector("#pass");
			    var domPass2 = document.querySelector("#rpass");
			    var aPasswd = ["", ""]

			    domForm.onsubmit = comprobar;
                
			    domPass2.oninput = comparar;

			    function comparar() {
			        
                    
			        var msg = "";			        
                    if (domPass1.value != domPass2.value) {
                            msg = "Las contraseñas no son iguales" 
                    }
			        domPass2.setCustomValidity(msg)
			    }; 

			    function comprobar(oEvento) {
                    
                   
			    
			        var validado = true;
			        oEvento.preventDefault();

			        aPasswd[0] = domPass1.value;
			        aPasswd[1] = domPass2.value;

			        if (aPasswd[0] != aPasswd[1]) {
			            validado = false;
			        }
			        
			    };
			        
			};

			document.addEventListener("DOMContentLoaded", main, false);