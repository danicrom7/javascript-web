function raton(oE){
let oDom=oE.currentTarget
oDom.classList.toggle("p3")

}

function main (){

 let oDom = document.querySelectorAll("p")
 for(var i =0; i< oDom.length; i++){
     oDom[i].addEventListener("click",raton);
 }   
};
document.addEventListener("DOMContentLoaded",main)