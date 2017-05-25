class Formulario{
    constructor(pNombre,pCiudad){

        this.oDom ={
            fNombre : document.querySelector("#nombre"),
            fApellidos : document.querySelector("#apellido"),
            fCiudad : document.querySelector("#ciudad"),
            fPais : document.querySelector("#pais"),
            fComent: document.querySelector("#descrip"),
            bEnvio: document.querySelector("#envio"),
            bBorrar: document.querySelector("#borrar"),
            didDato: document.querySelector("#span")
        };
    }
    control(){
      this.oDom.didDato.innerHTML = this.oDom.value;


      this.oDom.fNombre.addEventListener("keyup",this.actualizar.bind(this));

    }
    actualizar(oE){

        if (oE.currentTarget.id == "borrar") {
            this.oDom.value = ""
        }
        this.oDom.didDato.innerHTML = this.oDom.value;
        console.log(this.oDom.fNombre.value);
    }




}
const oFormulario = new Formulario;
oFormulario.control()
console.log(this.oDom.value);