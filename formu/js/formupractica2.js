class Formulario {
     constructor(){
         this.oDatos={
            "Nombre":"",
            "Apellidos":"",
            "direccion":"",
            "Ciudad":"",
            "comentarios":""


         };
         //aqui ponemos donde queremos escribir los datos del formulario

         this.oParrafo = document.querySelector("elemento donde quieras poner los datos del formulario");

         //aqui van la funcion del boton
         document.querySelector("boton o como lo llames ocn id o lo que sea").addEventListener("click",this.recogeDatos.bind(this));
     }

     recogeDatos(){
         this.oDatos.Nombre = document.querySelector("id del imput").value;
         this.oDatos.Apellidos = document.querySelector("id del imput").value;
         this.oDatos.direccion = document.querySelector("id del imput").value;
         this.oDatos.Ciudad = document.querySelector("id del imput").value;
         this.oDatos.comentarios = document.querySelector("id del textarea en este caso").value;

         this.escribeDatos();
     }//fin de recogida de datos

     escribeDatos(){
       //con esto ocultamos el formulario cuando copiemos los datos escritos en el
         document.querySelector("id formulario").classList.toggle("la clase");
        //mostramos el div donde va la lista de datos que copiamos desde el formulario
document.querySelector("id del div").classList.toggle("la clase");
     //incorporamos los datos
     for (var i in this.oDatos) {
         this.oParrafo.innerHTML += "<li>" + i + ": <strong>" +
                                   this.oDatos[i] + "</strong></li>";
         
     };
          
     }//fin de escribe datos

}// fin de la clase formulario
class App{

    static main(){
        document.addEventListener("DOMContentLoaded",function(){
            new Formulario()
        });
    }
}//fin de la clase App
App.main()