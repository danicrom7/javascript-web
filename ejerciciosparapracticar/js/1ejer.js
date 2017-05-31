
function mayus(){
var sPalabra = document.querySelector("#texto").value;

if (sPalabra == sPalabra.toUpperCase()) {
    
    alert("contiene letras mayusculas")
    
} else {alert("contiene letras minusculas")
    
}
};
document.querySelector("#btn1").addEventListener("click",mayus)