class Formulario{
    constructor(){
        this.oDatos = {
            "Nombre":"",
            "Apellidos": "",
            "direccion":"",
            "Ciudad":"",
            "Comentarios":""
        };
        this.oParrafo = document.querySelector("elemento donde escribimos lo que se ponga en el formulario");
        //referencia del parrafo donde escribir

        document.querySelector("boton").addEventListener("click",
        this.recogeDatos.bind(this));

    }

    recogeDatos(){
        this.oDatos.Nombre = document.querySelector("input").value;
        this.oDatos.Apellidos = document.querySelector("input").value;
        this.oDatos.direccion = document.querySelector("input").value;
        this.oDatos.Ciudad = document.querySelector("input").value;
        this.oDatos.Comentarios = document.querySelector("textarea").value;
        //llamada a la funcion que procesara el objeto escribiendolo en la pantalla
        this.escribeDatos();
    };// fin de recpogeDatos

    escribeDatos(){
        //ocultar formulario
        document.querySelector("formulario").classList.toggle("ponemos la clase")
        //mostrar div para el resultado,dentro del div esta la lista
        document.querySelector("DIV").classList.toggle("la clase");
        //incorporamos a la lista cada elemento del objeto
        for (var i  in this.oDatos) {
            this.oParrafo.innerHTML += "<li>" + i + ": <strong>"+
              this.oDatos[i] + "</strong></li>";
        };
    }//fin de escribeDatos

}//fin de clase formulario

class App {

    static main () {
        document.addEventListener("DOMContentLoaded",
        function(){
            new Formulario()
        });
    }
}//fin de la clase App

App.main()

