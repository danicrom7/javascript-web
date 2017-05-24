
window.onload = function () {

    let oBoton = document.querySelector("#btn1")
    let aParrafos = document.querySelectorAll(".normal")
    
    oBoton.innerHTML = "Ver mÃ¡s"
    oBoton.addEventListener("click", camviarVista)
    
    function camviarVista () {
        for (var i = 0; i < aParrafos.length ; i++) {        
            aParrafos[i].classList.toggle("p2")
        }
        oBoton.innerHTML = oBoton.innerHTML=="Ver mÃ¡s" ? "Ver menos" : "Ver mÃ¡s";
    }

}

