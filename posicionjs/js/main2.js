//const oFormulario = new Formulario;
//oFormulario.controller()

//window.onload = function(){
//new Formulario("Luis", "Desarrollo web full-stack").controller()
//};

//document.addEventListener("DOMContentLoaded",function(){
//new Formulario("Luis", "Desarrollo web full-stack").controller()
//})

document.addEventListener("DOMContentLoaded", main);
function main(){
    let sName = "Luis"
    let sCurso = "Desarrollo web full-stack"
    new Formulario (sName,sCurso).controller()
}
